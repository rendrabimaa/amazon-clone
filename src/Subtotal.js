import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    console.log(basket);

    const getTotalPrice = basket => {
        let total = 0;
        basket.map(item => {
            total = total + item.price
        })

        return total
    }
    return (
        <div className="subtotal">
            
            <CurrencyFormat 
                renderText={(value)=> (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : 
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contain gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotalPrice(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={" $ "}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
