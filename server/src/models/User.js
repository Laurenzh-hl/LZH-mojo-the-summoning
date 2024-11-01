// create your User model here

const { db, DataTypes, Model } = require("../db/config");

class User extends Model {};

User.init({
    username: DataTypes.STRING
}, {
    sequelize: db
});

module.exports = User;