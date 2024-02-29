const newsService = require('../../service/news-service');
const { ctrlWrapper } = require('../../helpers');

const getNews = async (req, res) => {
    const news = await newsService.getNews();
    console.log('news:', news);
    res.json(news);
};

module.exports = ctrlWrapper(getNews);
