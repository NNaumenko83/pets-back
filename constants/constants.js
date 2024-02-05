// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const cityRegexp = /^[A-Z][a-zA-Z0-9-' ]*$/;
const nameRegexp = /^[a-zA-Z]+$/;
const saltRounds = 10;

module.exports = {
    emailRegexp,
    saltRounds,
    phoneRegexp,
    cityRegexp,
    nameRegexp,
};
