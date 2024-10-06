const Sequelize = require('sequelize')
const db = require('../db')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://media.entertainmentearth.com/assets/images/a4d5789a36094975a2aa477db9a19c67xl.jpg'
  }
})

module.exports = Restaurant