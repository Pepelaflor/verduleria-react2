import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "../ItemCount";
import { useState } from "react";
const ItemProduct = ({data}) => {
    const {name, price, stock} = data

    return (
        <div className="Item">
            <p>{name}</p>
            <span>${price}</span>
            <span>{stock} unidades</span>
            <ItemCount stock={data.stock}/>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct;