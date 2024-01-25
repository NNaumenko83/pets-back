const UserDto = require('../../dtos/user-dto');
const { ctrlWrapper } = require('../../helpers');

const current = async (req, res) => {
    const userData = new UserDto(req.user);

    res.json(userData);
};

module.exports = ctrlWrapper(current);
