const db = require("../db")
const Butterfly = require("./butterfly")
const Perserve =  require('./perserve');

//Butterfly Associations
Perserve.hasMany(Butterfly);
Butterfly.belongsTo(Perserve)

module.exports = {
  db,
  Butterfly,
  Perserve,
};
