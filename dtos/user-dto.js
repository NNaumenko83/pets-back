module.exports = class UserDto {
    email;
    id;
    avatarURL;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.avatarURL = model.avatarURL;
    }
};
