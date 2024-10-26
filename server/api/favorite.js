const router = require('express').Router()
const { models: { Favorite, User, Restaurant }} = require('../db')
module.exports = router


router.post('/', async (req, res, next) => {
    const { user_id, restaurant_id } = req.body;
    try {

        const user = await User.findByPk(user_id);
        const restaurant = await Restaurant.findByPk(restaurant_id);
        
        if (user && restaurant) {
            await user.addRestaurant(restaurant);
            res.status(200).send({ message: "Favorite added successfully" });
        } else {
            res.status(404).send({ error: "User or Restaurant not found" });
        }
    } catch (err) {
        next(err)
    }
})
