const { News } = require('../models');

class NewsService {
    async getNews(page, limit) {
        const skip = (page - 1) * limit;
        const news = await News.find().skip(skip).limit(limit).exec();

        // get total documents in the Posts collection
        const count = await News.countDocuments();
        return { news, count };
    }
}

module.exports = new NewsService();
