const validateBody = require('../../middlewares/validateBody');
const { loginSchema, registerSchema } = require('../../schemas');

const Router = require('express').Router;

const router = new Router();

router.post('/register', validateBody(registerSchema));
router.post('/login', validateBody(loginSchema));
router.post('/logout');
router.get('/activate/:link');
router.get('/refresh');
router.get('/users');

module.exports = router;
