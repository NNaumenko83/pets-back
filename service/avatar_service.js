// const cloudinary = require('cloudinary').v2;

// console.log('process.env.CLOUD_NAME,:', process.env.CLOUD_NAME);
// console.log('process.env.API_KEY:', process.env.API_KEY);
// console.log('process.env.API_SECRET:', process.env.API_SECRET);
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
// });

class AvatarService {
    async handleUpload(file) {
        // const res = await cloudinary.uploader.upload(file, {
        //     resource_type: 'auto',
        // });
        // return res;
        console.log('Hello');
        return;
    }
}

module.exports = new AvatarService();
