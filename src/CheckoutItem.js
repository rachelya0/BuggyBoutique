import React from 'react'
import "./CheckoutItem.css"
import {useStateValue} from "./StateProvider";

function CheckoutItem({id, image, title, price, rating}) {
    const [{cart}, dispatch] = useStateValue();
    
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id
        })
    }
    return (
        <div className="checkout_item">
            <img src={image} className="checkout_item_img"/>

            <div className="checkout_item_info">
                <p className="checkout_item_title">{title}</p>
                <p className="checkout_item_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_item_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>★</p>
                        ))
                    }
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem