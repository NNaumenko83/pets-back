const { register, login, logout } = require('../../controllers/auth');
const { validateBody, authenticate } = require('../../middlewares');
const { loginSchema, registerSchema } = require('../../schemas');

const Router = require('express').Router;

const router = new Router();

router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);
router.post('/logout', authenticate, logout);
// router.get('/activate/:link');
// router.get('/refresh');
// router.get('/users');

module.exports = router;
