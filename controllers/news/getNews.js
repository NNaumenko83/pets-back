const newsService = require('../../service/news-service');
const { ctrlWrapper } = require('../../helpers');

const getNews = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const { news, count } = await newsService.getNews(page, limit);
    console.log('news:', news);
    res.json({ news, count });
};

module.exports = ctrlWrapper(getNews);
