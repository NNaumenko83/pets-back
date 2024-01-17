const cloudinary = require('cloudinary').v2;

console.log('process.env.CLOUD_NAME,:', process.env.CLOUD_NAME);
console.log('process.env.API_KEY:', process.env.API_KEY);
console.log('process.env.API_SECRET:', process.env.API_SECRET);
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const resizeOptions = {
    width: 200,
    height: 200,
    gravity: 'face',
    crop: 'thumb',
};

class AvatarService {
    async handleUpload(userId, file) {
        console.log('handleUpload:');
        const res = await cloudinary.uploader.upload(file, {
            resource_type: 'auto',
            folder: 'avatars',
            public_id: `user_${userId}_avatar`,
            overwrite: true,
            transformation: { ...resizeOptions },
        });

        console.log('res:', res);
        return res;
    }
}

module.exports = new AvatarService();
