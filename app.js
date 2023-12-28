const express = require('express');
const cors = require('cors');
require('dotenv').config();
const logger = require('morgan');

// const cookieParser = require('cookie-parser');
const { format } = require('date-fns');
const fs = require('fs/promises');
require('colors');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
    const { method, url } = req;
    const date = format(new Date(), 'dd-MM-yyyy:mm:ss');
    await fs.appendFile('./server.log', `\n${method} ${url} ${date}`);
    next();
});

app.use((req, res) => {
    res.status(404).json({ message: 'Notfound' });
});

app.use((err, req, res, _next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
});

module.exports = app;
