import axios from 'axios';

const initialstate = [];

const SET_RESTAURANT = "SET_RESTAURANTS"; 

const _setRestaurant = (restaurant) => ({
    type: SET_RESTAURANT,
    restaurant
})

export const setRestaurant = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/restaurant`);
            dispatch(_setRestaurant(data));
        } catch (err) {
            console.log(err);
        }
    };
};

export default (state = initialstate,action) => {
    switch (action.type) {
        case SET_RESTAURANT:
            return action.restaurant;
        default:
            return state;
    }
}