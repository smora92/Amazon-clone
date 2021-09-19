import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Subtotal ({basket.length} items):
                            <strong> {`${value}`}</strong> */}
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains
                            a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // value={getBasketTotal(basket)}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"AED"}
            />
            <button>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal
