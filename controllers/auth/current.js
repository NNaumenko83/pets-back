const { ctrlWrapper } = require('../../helpers');

const current = async (req, res) => {
    console.log('current:');
    const { name, email } = req.user;
    res.json({
        name,
        email,
    });
};

module.exports = ctrlWrapper(current);
