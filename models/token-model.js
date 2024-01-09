const { Schema, model } = require('mongoose');

const TokenSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        accessToken: { type: String, default: '' },
        refreshToken: { type: String, default: '' },
    },
    { versionKey: false, timestamps: true },
);

const Token = model('Token', TokenSchema);

module.exports = Token;
