const Joi = require('joi');
const { emailRegexp, phoneRegexp } = require('../constants/constants');

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    birthday: Joi.string().required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    city: Joi.string().required(),
});

module.exports = registerSchema;
