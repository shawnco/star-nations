const common = require('./common');
const { Account } = require('./../models');

module.exports = {
    getAll: async () => common.getAll(Account),
    get: async id => common.get(id, Account),
    create: async data => common.create(data, Account),
    update: async (id, data) => common.update(id, data, Account),
    del: async id => common.del(id, Account),
    findEmail: async email => {
        const filter = {
            where: {
                email
            }
        };
        return Account.findAll(filter);
    }
};