const Sequelize = require('sequelize')
const db =require('../db')


const Butterfly = db.define('butterfly', {
    name: {
        type: Sequelize.STRING, 
        allowNull:false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNUll: false
    }
})

module.exports = Butterfly