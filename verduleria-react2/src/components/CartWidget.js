
import {useState, useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../context/CartContext';
import Cart from '../pages/Cart';


const CartWidget = () => {
    const {totalItem} = useContext(CartContext)
    
    
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartPlus} size="2x" />
            <p>{totalItem}</p>
        </div>

    );
};

export default CartWidget;