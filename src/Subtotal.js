import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <div>
                        <p className="subtotal_text">
                            Subtotal (0 items): <strong>$0</strong>
                        </p>
                        <small className="gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>                
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal