module.exports = (db, Sequelize, config) => {
    const Account = db.define('account', {
        id: config.pk,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        isAdmin: Sequelize.BOOLEAN,
        isBanned: Sequelize.BOOLEAN,
    }, config.table);

    Account.associate = models => {};

    return Account;
}