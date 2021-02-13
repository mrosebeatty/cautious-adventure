const db = require("../db")
const Butterfly = require("./butterfly")
const Perserve =  require('./perserve');

//Butterfly Associations
Butterfly.belongsTo(Perserve), Perserve.hasMany(Butterfly);

module.exports = {
  db,
  Butterfly,
  Perserve,
};
