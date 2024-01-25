const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');
const { emailRegexp } = require('../constants/constants');

const UserSchema = new Schema(
    {
        avatarURL: {
            type: String,
            default: '',
        },
        email: {
            type: String,
            unique: true,
            match: emailRegexp,
            required: true,
        },
        password: { type: String, minlength: 6, required: true },

        name: {
            type: String,
            default: '',
        },
        birthday: {
            type: String,
            default: '00-00-0000',
        },
        phone: {
            type: String,
            default: '+38000000000',
        },
        city: {
            type: String,
            default: '',
        },
    },

    { versionKey: false, timestamps: true },
);

UserSchema.post('save', handleMongooseError);

const User = model('User', UserSchema);

module.exports = User;
