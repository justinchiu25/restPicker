const router = require('express').Router()
const { models: { Restaurant }} = require('../db')
module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findAll({

    })
    res.json(restaurant);
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id)
    if(!restaurant) {
      let error = Error("Restaurant not found");
      error.status = 404
      throw (error);
    }
    res.json(restaurant);
  } catch (err) {
    next(err)
  }
})