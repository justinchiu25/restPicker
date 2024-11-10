const router = require('express').Router()
const { models: { Restaurant }} = require('../db')
module.exports = router

// http://localhost:8080/api/restaurant?page={page}&pageSize={pageSize}
router.get('/', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const restaurant = await Restaurant.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize
    })
    res.json(restaurant);
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
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