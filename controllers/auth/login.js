const { HttpError, ctrlWrapper } = require('../../helpers');
const { User } = require('../../models');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(401, 'Email or password invalid');
    }

    const { password: hash } = user;

    const passwordCompare = bcrypt.compare(password, hash);

    if (!passwordCompare) {
        throw HttpError(401, 'Email or password invalid');
    }

    const token = '123123123123123';

    res.json({ token });
};

module.exports = ctrlWrapper(login);
