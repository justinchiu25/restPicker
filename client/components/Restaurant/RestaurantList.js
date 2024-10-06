import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../../store/restaurant";
import ProductCard from "./ProductCard";



export default function Restaurants() {
    const restaurants = useSelector((state) => state.restaurant);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(setRestaurant());
    },[])

    return (
        <div>
          <div className="product-page">
            <h1>Our Products</h1>
            <div className="product-grid">
              {restaurants.map(products => (
                <ProductCard key={products.id} product={products} />
              ))}
            </div>
          </div>
        </div>
    )
}