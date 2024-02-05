const Joi = require('joi');
const {
    emailRegexp,
    phoneRegexp,
    cityRegexp,
    nameRegexp,
} = require('../constants/constants');

const currentDate = new Date();

const checkDate = (value, helpers) => {
    const birthdayDate = new Date(value);

    if (birthdayDate > currentDate) {
        return helpers.error('any.invalid');
    }

    return value;
};

const updateUserSchema = Joi.object({
    name: Joi.string().pattern(nameRegexp).required(),
    email: Joi.string().pattern(emailRegexp).required(),
    birthday: Joi.string().custom(checkDate, 'check birthday Date').required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    city: Joi.string().pattern(cityRegexp).required(),
});

module.exports = updateUserSchema;
