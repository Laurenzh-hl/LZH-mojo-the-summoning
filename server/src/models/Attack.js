const { db, DataTypes, Model } = require("../db/config");

class Attack extends Model {};

Attack.init({
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
}, {
    sequelize: db
});

module.exports = Attack;