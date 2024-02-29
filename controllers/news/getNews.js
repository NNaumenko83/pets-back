const newsService = require('../../service/news-service');
const { ctrlWrapper } = require('../../helpers');

const getNews = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const { news, count } = await newsService.getNews(page, limit);

    res.json({
        news,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
    });
};

module.exports = ctrlWrapper(getNews);
