import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "../ItemCount";
import { useState } from "react";
import ItemDetail from "../ItemDetail";
const ItemProduct = ({data}) => {
    const {name, price, stock, id} = data

    return (
        <div className="Item">
            <p>{name}</p>
            <span>${price}</span>
            <span>{stock} unidades</span>
            <ItemCount stock={data.stock}/>
            <ItemDetail id={data.id} />
        </div>
    )
}

export default ItemProduct;