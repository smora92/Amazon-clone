import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://m.media-amazon.com/images/I/41NOSerjiFL._SX1500_.jpg"
                    alt="iPhone 13 banner ad"
                />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
