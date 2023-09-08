const Sequelize = require('sequelize')



const sequelize = new Sequelize('Expense', 'root', 'toor',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
