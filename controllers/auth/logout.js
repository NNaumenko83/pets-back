const { ctrlWrapper } = require('../../helpers');
const authService = require('../../service/auth-service');

const logout = async (req, res) => {
    const { _id } = req.user;

    await authService.logout(_id);

    res.status(204).send();
};

module.exports = ctrlWrapper(logout);
