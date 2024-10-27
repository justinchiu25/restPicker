const router = require('express').Router()
const { models: { Favorite, User, Restaurant }} = require('../db')
module.exports = router

//Favorites Through table

// api/favorite/(number)
// Gets user's favorite
router.get('/:user_id', async (req, res, next) => {
    const { user_id } = req.params;
    try {
        const user = await User.findByPk(user_id);
        
        if (!user) {
            res.status(404).send({ error: "User not found" });
        } 
        //Gets associated Restaurants
        const favorites = await user.getFavorites();
        res.json(favorites);
    } catch (err) {
        next(err)
    }
})

// api/favorite
// Favorites restaurant to user in database
router.post('/', async (req, res, next) => {
    const { user_id, restaurant_id } = req.body;
    try {
        const user = await User.findByPk(user_id);
        const restaurant = await Restaurant.findByPk(restaurant_id);
        
        if (user && restaurant) {
            await user.addFavorites(restaurant);
            res.status(200).send({ message: "Favorite added successfully" });
        } else {
            res.status(404).send({ error: "User or Restaurant not found" });
        }
    } catch (err) {
        next(err)
    }
})
