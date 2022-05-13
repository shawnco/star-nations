const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('star-nations', '', '', {
    dialect: 'sqlite',
    storage: path.join(__dirname + '/../db/star-nations.db'),
});

const config = {
    pk: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    table: { freezeTableName: true, timestamps: false },
};

const db = {};
db.Sequelize = Sequelize;
db.db = sequelize;

db.Account = require('./account')(sequelize, Sequelize, config);
db.Player = require('./player')(sequelize, Sequelize, config);

module.exports = db;