const Joi = require('joi');
const { emailRegexp } = require('../constants/constants');

const registerSchema = Joi.object({
    // name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required().min(6),
});

module.exports = registerSchema;
