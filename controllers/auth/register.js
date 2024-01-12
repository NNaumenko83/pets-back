const { ctrlWrapper } = require('../../helpers');
const authService = require('../../service/auth-service');

const register = async (req, res) => {
    const { email, password } = req.body;

    const userData = await authService.register(email, password);

    res.status(201).json(userData);
};

module.exports = ctrlWrapper(register);
