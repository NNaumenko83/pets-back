const cloudinary = require('cloudinary').v2;

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
        const res = await cloudinary.uploader.upload(file, {
            resource_type: 'auto',
            folder: 'avatars',
            public_id: `user_${userId}_avatar`,
            overwrite: true,
            transformation: { ...resizeOptions },
        });

        return res.url;
    }
}

module.exports = new AvatarService();
