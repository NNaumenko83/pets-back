const Router = require('express').Router;
const getNews = require('../../controllers/news/getNews');

const router = new Router();

router.get('/', getNews);

module.exports = router;
