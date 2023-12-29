// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const saltRounds = 10;

module.exports = { emailRegexp, saltRounds };
