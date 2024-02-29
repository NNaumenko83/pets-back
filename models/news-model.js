const { Schema, model } = require('mongoose');

const NewsSchema = new Schema(
    {
        imgUrl: { type: String, required: true },
        title: { type: String, required: true },
        text: { type: String, required: true },
        date: { type: String, required: true },
        url: { type: String, required: true },
    },
    { versionKey: false, timestamps: true },
);

const News = model('News', NewsSchema);

module.exports = News;
