const jwt = require('jsonwebtoken');

const { HttpError } = require('../helpers');
const { User } = require('../models');

const { JWT_ACCESS_SECRET } = process.env;

const authenticate = async (req, res, next) => {
    console.log('authenticate');
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');
    console.log('bearer:', bearer);
    console.log('token:', token);
    if (bearer !== 'Bearer' && !token) {
        next(HttpError(401, 'Not authorized'));
    }
    try {
        const { id } = jwt.verify(token, JWT_ACCESS_SECRET);
        console.log('id:', id);
        const user = await User.findById(id);
        console.log('user:', user);

        if (!user || !user.token || user.token !== token) {
            next(HttpError(401, 'Not authorized'));
        }
        req.user = user;
        next();
    } catch (error) {
        next(HttpError(401, 'Not authorized'));
    }
};

module.exports = authenticate;
