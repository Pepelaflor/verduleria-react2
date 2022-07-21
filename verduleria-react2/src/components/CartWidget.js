import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartPlus} size="2x" />
        </div>
    );
};

export default CartWidget;