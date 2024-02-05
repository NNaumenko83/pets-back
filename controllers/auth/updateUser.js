const updateUser = (req, res) => {
    const { name, email, birthday, phone, city } = req.body;
    console.log('name:', name);
    console.log('email:', email);
    console.log('birthday:', birthday);
    console.log('phone:', phone);
    console.log('city:', city);

    res.status(200).json('Update successful');
};

module.exports = updateUser;
