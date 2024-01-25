const {
    register,
    login,
    logout,
    current,
    updateAvatar,
} = require('../../controllers/auth');
const { validateBody, authenticate, upload } = require('../../middlewares');
const { loginSchema, registerSchema } = require('../../schemas');

const Router = require('express').Router;

const router = new Router();

router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);
router.post('/logout', authenticate, logout);
router.get('/current', authenticate, current);
router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);
router.patch('/update', authenticate);
// router.get('/activate/:link');
// router.get('/users');

module.exports = router;
