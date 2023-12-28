const mongoose = require('mongoose');
require('colors');

const app = require('./app');
const { DB_HOST, PORT = 5000 } = process.env;
console.log('DB_HOST,:', DB_HOST);

mongoose
    .connect(DB_HOST)
    .then(() => {
        console.log('Database connection successful'.green.italic.bold);
        app.listen(PORT, () => {
            console.log(
                `Server running. Use our API on port: ${PORT}`.green.italic
                    .bold,
            );
        });
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
