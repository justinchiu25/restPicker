import axios from 'axios';

const initialstate = [];

const ADD_FAVORITE = "ADD_FAVORITE"; 

const _addFavorite = (favorite) => ({
    type: ADD_FAVORITE,
    restaurant: favorite
})

export const addFavorite = ( user_id, restaurant_id ) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/api/favorite`, { user_id, restaurant_id });
            dispatch(_addFavorite(data));
        } catch (err) {
            console.log(err);
        }
    };
};

export default (state = initialstate,action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.favorite];
        default:
            return state;
    }
}