const { ctrlWrapper } = require('../../helpers');
const authService = require('../../service/auth-service');

const updateAvatar = async (req, res) => {
    const {
        user: { _id },
    } = req;
    const b64 = Buffer.from(req.file.buffer).toString('base64');

    let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;

    const avatarURL = await authService.uploadAvatar(_id, dataURI);

    res.status(201).json(avatarURL);
};

module.exports = ctrlWrapper(updateAvatar);
