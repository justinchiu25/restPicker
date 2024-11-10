import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleRestaurant } from '../../store/singleRestaurant';
import { addFavorite } from '../../store/favorites';

export default function ProductDetails() {
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.singleRestaurant);
    const { restId } = useParams();

    if (!restaurant) {
        return <div>Product not found</div>;
    }

    useEffect(() => {
        dispatch(fetchSingleRestaurant(restId));
    },[])

    return (
        <div>
            <div className="product-details">
                <div style={{textAlign:"center"}}>
                    <h1>{restaurant.name}</h1>
                    <p>{restaurant.address}</p>
                    <p className="price">${restaurant.price}</p>
                </div>
            </div>
            <button onClick={() => dispatch(addFavorite(1, restaurant.restaurant_id))}> Add To Favorite </button>
        </div>
    );
};
