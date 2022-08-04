import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "../ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
const ItemDetail = ({data}) => {
    const {id, name, price, stock} = data

    return (
        <div className="Item-detail">
            <p>{name}</p>
            <span>${price}</span>
            <span>{stock} unidades</span>
            <ItemCount stock={data.stock}/>
            <button>Comprar</button>
        </div>
    )
}

export default ItemDetail;