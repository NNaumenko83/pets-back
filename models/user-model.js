const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');
const { emailRegexp } = require('../constants/constants');

const UserSchema = new Schema(
    {
        // name: { type: String, required: true },
        avatarURL: String,
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

const User = model('User', UserSchema);

module.exports = User;
