const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const { Token } = require('../models');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {
            expiresIn: '23h',
        });
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
            expiresIn: '30d',
        });

        return { accessToken, refreshToken };
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ user: userId });
        console.log('tokenData:', tokenData);

        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await Token.create({ user: userId, refreshToken });
        console.log('token:', token);

        return token;
    }
}

module.exports = new TokenService();
