module.exports = {
    getAll: async (model) => {
        return model.findAll();
    },

    get: async (id, model) => {
        return model.findByPk(id);
    },

    create: async (data, model) => {
        return model.create(data);
    },

    update: async (id, data, model) => {
        const target = await model.findByPk(id);
        for (d in data) {
            target.set(d, data[d]);
        }
        return target.save();
    },

    del: async (id, model) => {
        return model.destroy({ where: { id } });
    }
};