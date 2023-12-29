const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            match: emailRegexp,
            required: true,
        },
        password: { type: String, minlength: 6, required: true },
        // isActivated: { type: Boolean, default: false },
        // activationLink: { type: String },
    },
    { versionKey: false, timestamps: true },
);

UserSchema.post('save', handleMongooseError);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required().min(6),
});

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required().min(6),
});

const schemas = { registerSchema, loginSchema };

const User = model('User', UserSchema);

module.exports = { User, schemas };
