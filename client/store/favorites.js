import axios from 'axios';

const initialstate = [];

const ADD_FAVORITE = "ADD_FAVORITE";
const FETCH_FAVORITE = "FETCH_FAVORITE";

const _addFavorite = (favorite) => ({
    type: ADD_FAVORITE,
    favorite
})

const _fetchFavorite = (favorite) => ({
    type: FETCH_FAVORITE,
    favorite
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

export const fetchFavorite = ( user_id ) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/favorite/${user_id}`);
            dispatch(_fetchFavorite(data));
        } catch (err) {
            console.log(err);
        }
    };
};


export default (state = initialstate,action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.favorite];
        case FETCH_FAVORITE:
            return action.favorite;
        default:
            return state;
    }
}