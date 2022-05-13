const Player = require('../services/player');

module.exports = {
    getAll: async () => Player.getAll(),
    get: async id => Player.get(id),
    create: async data => Player.create(data),
    update: async (id, data) => Player.update(id, data),
    del: async id => Player.del(id),
};
