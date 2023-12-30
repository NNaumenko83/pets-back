const { ctrlWrapper } = require('../../helpers');
const authService = require('../../service/auth-service');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    const userData = await authService.register(name, email, password);

    res.status(201).json(userData);
};

module.exports = ctrlWrapper(register);
