import axios from "axios";

const initialstate = {};

const FETCH_SINGLE_RESTAURANT = "FETCH_SINGLE_RESTAURANT"; 

const _fetchSingleRestaurant = (restaurant) => ({
    type: FETCH_SINGLE_RESTAURANT,
    restaurant
})

export const fetchSingleRestaurant = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/restaurant/${id}`);
            dispatch(_fetchSingleRestaurant(data));
        } catch (err) {
            console.log(err);
        }
    };
};

export default (state = initialstate,action) => {
    switch (action.type) {
        case FETCH_SINGLE_RESTAURANT:
            return action.restaurant;
        default:
            return state;
    }
}