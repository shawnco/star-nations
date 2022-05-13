const common = require('./common');
const { Player } = require('./../models');

module.exports = {
    getAll: async () => common.getAll(Player),
    get: async id => common.get(id, Player),
    create: async data => common.create(data, Player),
    update: async (id, data) => common.update(id, data, Player),
    del: async id => common.del(id, Player),
};