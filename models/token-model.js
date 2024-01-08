const { Schema, model } = require('mongoose');

const TokenSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    accessToken: { type: String /*required: true */ },
    refreshToken: { type: String /*required: true */ },
});

const Token = model('Token', TokenSchema);

module.exports = Token;
