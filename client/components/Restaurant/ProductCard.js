import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function ProductCard({ product }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/restaurant/${product.id}`);
    }


    return (
        <div className="product-card" onClick={handleClick}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        </div>
    );
};
