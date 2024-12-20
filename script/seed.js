'use strict'

const { db, models: {User,Restaurant} }  = require('../server/db')
const fs = require('fs');
const path = require('path');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])


  const jsonFilePath = path.join(__dirname, 'restdata.json');
  const rawData = fs.readFileSync(jsonFilePath, 'utf8');
  const restaurantData = JSON.parse(rawData); // Parse the JSON data

  const restaurants = await Promise.all(restaurantData.map((restaurant) =>
    Restaurant.create(restaurant)
  ));

  // try {
  //   // Execute the SQL queries
  //   await db.query(sqlQueries);
  //   console.log('seeded restaurants from SQL file');
  // } catch (err) {
  //   console.error('Error seeding restaurants from SQL file:', err);
  // }
  
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    },
    restaurant: restaurants
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
