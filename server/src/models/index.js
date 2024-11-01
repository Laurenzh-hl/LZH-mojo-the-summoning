const User = require('./User')
// import the rest of your models above
const Attack = require("./Attack");
const Card = require("./Card");
const Deck = require("./Deck");
// set up the associations here

// and then export them all below
module.exports = {
    User,
    Attack,
    Card,
    Deck
};
