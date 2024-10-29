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
            <h1>Restaurants</h1>
            <div className="restaurant-list">
              {restaurants.map(products => (
                <ProductCard key={products.restaurant_id} product={products} />
              ))}
            </div>
          </div>
        </div>
    )
}