module.exports = (db, Sequelize, config) => {
    const Player = db.define('player', {
        id: config.pk,
        username: Sequelize.STRING,
        universeId: Sequelize.INTEGER,
        isModerator: Sequelize.BOOLEAN,
        isBanned: Sequelize.BOOLEAN,
    }, config.table);

    Player.associate = models => {};

    return Player;
}