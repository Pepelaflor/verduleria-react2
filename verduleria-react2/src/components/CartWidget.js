
import {useState, useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../context/CartContext';
import Cart from '../pages/Cart';


const CartWidget = () => {
    const {cartProducts} = useContext(CartContext)
    const cartCount = cartProducts.length
    
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartPlus} size="2x" />
            <p>{cartCount}</p>
        </div>

    );
};

export default CartWidget;