const { db, DataTypes, Model } = require("../db/config");

class Card extends Model {};

Card.init({
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgURL: DataTypes.STRING
}, {
    sequelize: db
});

module.exports = Card;