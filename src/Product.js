import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}) {

    // dispatch is alternative name for action
    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            // name given to function you want to perform
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_descr">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>★</p>
                    ))}
                </div>

            </div>
            <img src={image} className="product_img"/>
            <button onClick={addToCart} className="product_button">Add to Cart</button>
        </div>
    )
}

export default Product