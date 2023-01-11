import React from 'react'
import "./CheckoutItem.css"

function CheckoutItem() {
    return (
        <div className="checkout_item">
            <img src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" className="checkout_item_img"/>

            <div className="checkout_item_info">
                <p className="checkout_item_title">Placeholder Item</p>
                <p className="checkout_item_price">
                    <small>$</small>
                    <strong>13</strong>
                </p>
                <div className="checkout_item_rating">
                    ★★★★★
                </div>
                <button>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem