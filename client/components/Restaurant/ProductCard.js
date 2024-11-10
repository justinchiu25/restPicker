import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function ProductCard({ product }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/restaurant/${product.restaurant_id}`);
    }


    return (
        <div className="restaurant-cards" onClick={handleClick}>
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p> {product.rating} </p>
        <p> Yes </p>
        </div>
    );
};
