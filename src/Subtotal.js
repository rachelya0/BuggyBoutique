import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getCartTotal} from "./Reducer";

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <div>
                        <p className="subtotal_text">
                            Subtotal ({cart.length} items): <strong>${value}</strong>
                        </p>
                        <small className="gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>                
                )}

                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal