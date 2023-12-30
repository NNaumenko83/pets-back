const { HttpError, ctrlWrapper } = require('../../helpers');
const { User } = require('../../models');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const { JWT_ACCESS_SECRET } = process.env;

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

    const payload = { id: user._id };

    const token = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '23h' });

    res.json({ token });
};

module.exports = ctrlWrapper(login);
