const mongoose = require('mongoose');

const app = require('./app');
const { DB_HOST, PORT = 5000 } = process.env;

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
        console.log(error.message.bold.red);
        process.exit(1);
    });
