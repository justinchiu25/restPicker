import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorite } from "../../store/favorites";
import ProductCard from "./ProductCard";



export default function Favorites() {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchFavorite(1));
    },[])

    return (
        <div>
          <div className="product-page">
            <h1>Your Favorites</h1>
            <div className="product-grid">
              {favorites.map(products => (
                <ProductCard key={products.restaurant_id} product={products} />
              ))}
            </div>
          </div>
        </div>
    )
}