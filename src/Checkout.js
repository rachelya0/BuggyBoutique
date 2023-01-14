import React from "react";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src={require('./download.jpeg')} className="advertisement"/>
                <div className="shopping_cart">
                    <h2 className="checkout_title">
                        Shopping Cart
                    </h2>
                    {cart.map(item => (
                        <CheckoutItem 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>
            </div>
        </div>

    )
}

export default Checkout