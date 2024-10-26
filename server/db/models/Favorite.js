const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./User');
const Restaurant = require('./Restaurant');

const Favorite = db.define('favorite', {
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'user_id',
        },
        primaryKey: true,
    },
    restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Restaurant,
            key: 'restaurant_id',
        },
        primaryKey: true,
    }
})

module.exports = Favorite