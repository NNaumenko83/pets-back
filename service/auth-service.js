const { saltRounds } = require('../constants/constants');
const { HttpError } = require('../helpers');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');

class AuthService {
    async register(name, email, password) {
        const candidate = await User.findOne({ email });
        console.log('candidate:', candidate);

        if (candidate) {
            throw HttpError(409, 'Email already in use');
        }

        const hashPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({
            name,
            email,
            password: hashPassword,
        });

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }
}

module.exports = new AuthService();
