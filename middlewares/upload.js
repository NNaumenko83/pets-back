// const multer = require('multer');

// const storage = multer.memoryStorage();
// console.log('storage:', storage);
// const upload = multer({
//     storage,
// });

// module.exports = upload;

const multer = require('multer');
const path = require('path');

const tempDir = path.join(__dirname, '../', 'temp');
console.log('tempDir:', tempDir);

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: multerConfig });

module.exports = upload;
