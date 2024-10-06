import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleRestaurant } from '../../store/singleRestaurant';

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
        <div className="product-details">
            <div style={{textAlign:"center"}}>
                <img style={{width:'200px',height:'100px' }} src={restaurant.image} alt={restaurant.name} />    
                <h1>{restaurant.name}</h1>
                <p className="price">${restaurant.price}</p>
            </div>
        </div>
    );
};
