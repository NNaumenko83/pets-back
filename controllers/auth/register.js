const { saltRounds } = require('../../constants/constants');
const { HttpError, ctrlWrapper } = require('../../helpers');
const { User } = require('../../models');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw HttpError(409, 'Email already in use');
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    const payload = { id: newUser._id };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });

    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
        token,
    });
};

module.exports = ctrlWrapper(register);
