const { saltRounds } = require('../constants/constants');
const { HttpError } = require('../helpers');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const avatarService = require('./avatar_service');

class AuthService {
    // register new user
    async register(email, password) {
        const candidate = await User.findOne({ email });

        if (candidate) {
            throw HttpError(409, 'Email already in use');
        }

        const hashPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({
            email,
            password: hashPassword,
        });

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(
            userDto.id,
            tokens.accessToken,
            tokens.refreshToken,
        );

        return { ...tokens, user: userDto };
    }

    // login user

    async login(email, password) {
        const user = await User.findOne({ email });
        console.log('user:', user);

        if (!user) {
            throw HttpError(401, 'Email or password invalid');
        }

        const { password: hash } = user;

        const passwordCompare = await bcrypt.compare(password, hash);

        if (!passwordCompare) {
            throw HttpError(401, 'Email or password invalid');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({
            email: userDto.email,
            id: userDto.id,
        });

        await tokenService.saveToken(
            userDto.id,
            tokens.accessToken,
            tokens.refreshToken,
        );

        return { ...tokens, user: userDto };
    }

    // current user

    async current(email) {
        const user = await User.findOne({ email });
        console.log('user:', user);

        if (!user) {
            throw HttpError(401, 'Email or password invalid');
        }

        // const { password: hash } = user;

        // const passwordCompare = await bcrypt.compare(password, hash);

        // if (!passwordCompare) {
        //     throw HttpError(401, 'Email or password invalid');
        // }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({
            email: userDto.email,
            id: userDto.id,
        });

        await tokenService.saveToken(
            userDto.id,
            tokens.accessToken,
            tokens.refreshToken,
        );

        return { ...tokens, user: userDto };
    }

    // logout user

    async logout(id) {
        await tokenService.resetToken(id);

        return;
    }

    // update avatar user

    async uploadAvatar(userId, file) {
        const avatarURL = await avatarService.handleUpload(userId, file);
        await User.findByIdAndUpdate(userId, { avatarURL }, { new: true });
        return avatarURL;
    }
}

module.exports = new AuthService();
