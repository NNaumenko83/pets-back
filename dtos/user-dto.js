module.exports = class UserDto {
    email;
    id;
    avatarURL;
    name;
    birthday;
    phone;
    city;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.avatarURL = model.avatarURL;
        this.avatarURL = model.avatarURL;
        this.name = model.name;
        this.birthday = model.birthday;
        this.phone = model.phone;
        this.city = model.city;
    }
};
