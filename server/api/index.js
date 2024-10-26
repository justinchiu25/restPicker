const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/restaurant', require('./restaurant'))
router.use('/favorite', require('./favorite'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
