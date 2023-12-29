const Joi = require('joi');
const emailRegexp = require('../constants/constants');

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required().min(6),
});

module.exports = loginSchema;
