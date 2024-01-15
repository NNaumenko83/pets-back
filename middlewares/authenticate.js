const jwt = require('jsonwebtoken');

const { HttpError } = require('../helpers');
const { Token } = require('../models');

const { JWT_ACCESS_SECRET } = process.env;

const authenticate = async (req, res, next) => {
    console.log('authenticate');
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer' && !token) {
        next(HttpError(401, 'Not authorized'));
    }
    try {
        const { id } = jwt.verify(token, JWT_ACCESS_SECRET);

        const userData = await Token.findOne({ user: id }).populate(
            'user',
            '-createdAt -updatedAt',
        );

        if (
            !userData.user ||
            !userData.accessToken ||
            userData.accessToken !== token
        ) {
            next(HttpError(401, 'Not authorized'));
        }
        req.user = userData.user;
        console.log('req.user :', req.user);
        next();
    } catch (error) {
        next(HttpError(401, 'Not authorized'));
    }
};

module.exports = authenticate;
