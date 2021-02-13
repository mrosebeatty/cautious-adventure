const Sequelize = require('sequelize')
const db = require ('../db')

const Perserve = db.define('perserve', {
    name: {
        type: Sequelize.STRING, 
        allowNull:false
    }
})

module.exports = Perserve