const { ctrlWrapper } = require('../../helpers');
const authService = require('../../service/auth-service');

const login = async (req, res) => {
    const { email, password } = req.body;

    const userData = await authService.login(email, password);

    res.status(200).json(userData);
};

module.exports = ctrlWrapper(login);
