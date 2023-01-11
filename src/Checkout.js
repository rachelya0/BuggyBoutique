import React from "react";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src={require('./download.jpeg')} className="advertisement"/>
                <div className="shopping_cart">
                    <h2 className="checkout_title">
                        Shopping Cart
                    </h2>
                    <CheckoutItem></CheckoutItem>
                    <CheckoutItem></CheckoutItem>
                    <CheckoutItem></CheckoutItem>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>
            </div>
        </div>

    )
}

export default Checkout