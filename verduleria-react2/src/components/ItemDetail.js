import React, { useState, useEffect } from "react";
import APICall from "./promises/Promise";
import Popup from "./PopUp";

function ItemDetail (item) {
    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button onClick={togglePopup}>Mas informacion</button>
            {isOpen && <Popup
            content={<>
                <b>{item.name}</b>
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
                <p>Stock: {item.stock} unidades</p>
                <button>Añadir al carrito</button>
         </>}
         handleClose={togglePopup}
         />}
        </div>
    )

}

export default ItemDetail;