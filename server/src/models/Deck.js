const { db, DataTypes, Model } = require("../db/config");

class Deck extends Model {};

Deck.init({
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
}, {
    sequelize: db
});

module.exports = Deck;