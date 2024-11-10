const Sequelize = require('sequelize')
const db = require('../db')

const Restaurant = db.define('restaurant', {
    restaurant_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    zipcode: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.FLOAT
    },
    rating: {
      type: Sequelize.FLOAT,
    }
  }
)

module.exports = Restaurant