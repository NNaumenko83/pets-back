const { ctrlWrapper } = require('../../helpers');
const authService = require('../../service/auth-service');

const updateAvatar = async (req, res) => {
    console.log('updateAvatar:', updateAvatar);
    // console.log('req:', req);
    // const b64 = Buffer.from(req.file.buffer).toString('base64');
    // let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
    // console.log('dataURI:', dataURI);

    // const url = await authService.uploadAvatar(dataURI);
    // console.log('url:', url);

    // res.status(201).json(url);
};

module.exports = ctrlWrapper(updateAvatar);
