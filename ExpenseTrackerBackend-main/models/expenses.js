const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//id, name , password, phone number, role

//const Expense = sequelize.define('expenses', {
  //  id: {
    //    type: Sequelize.INTEGER,
      //  autoIncrement: true,
       // allowNull: false,
       // primaryKey: true
   // },
   // expenseamount: Sequelize.INTEGER,
   // category: Sequelize.STRING,
   // description: Sequelize.STRING,
//})


const Expenses = sequelize.define('expenses', {
    id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
           primaryKey: true
        },
        expenseamount: Sequelize.INTEGER,
        category: Sequelize.STRING,
        description: Sequelize.STRING,
  });
  
  // Add pagination route for getting expenses
  const getPaginatedData = async (page, pageSize) => {
    try {
      const offset = (page - 1) * pageSize;
      const limit = pageSize;
  
      const { rows: data, count: total } = await Expenses.findAll({
        offset,
        limit,
      });
  
      return { data, total };
    } catch (error) {
      throw error;
    }
  };

module.exports = Expenses;
