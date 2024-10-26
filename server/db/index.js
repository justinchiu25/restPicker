//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Restaurant = require('./models/Restaurant')
const Favorite = require('./models/Favorite');

User.belongsToMany(Restaurant, { through: Favorite, foreignKey: 'user_id' });
Restaurant.belongsToMany(User, { through: Favorite, foreignKey: 'restaurant_id' });

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Restaurant
  },
}
