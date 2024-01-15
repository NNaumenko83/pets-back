const multer = require('multer');

const storage = multer.memoryStorage();
console.log('storage:', storage);
const upload = multer({
    storage,
});

module.exports = upload;
