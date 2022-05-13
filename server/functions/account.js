const bcrypt = require('bcrypt');
const Account = require('../services/account');
const { errors } = require('./common');

module.exports = {
    getAll: async () => Account.getAll(),
    get: async id => {
        if (!id) throw new errors.MissingId();
        return Account.get(id);
    },
    create: async data => {
        const { email, password, confirmPassword } = data;
        if (!email || !password || confirmPassword) throw new errors.MissingParams();

        if (password !== confirmPassword) throw new errors.PasswordsDontMatch();

        const emailInUse = await this.findEmail(email);
        if (emailInUse) throw new errors.EmailAlreadyExists();

        data.password = await this.saltPassword(data.password);
        return Account.create(data);
    },
    update: async (id, data) => {
        if (!id) throw new errors.MissingIdError();
        const { email, password } = data;
        if (!email || !password) throw new errors.MissingParams();
        return Account.update(id, data);
    },
    del: async id => {
        if (!id) throw new errors.MissingId();
        return Account.del(id);
    },
    saltPassword: async password => {
        if (!password) throw new errors.MissingParams();
        const salt = bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    },
    findEmail: async email => {
        const result = await Account.findEmail(email);
        return result.length > 0;
    }
};
