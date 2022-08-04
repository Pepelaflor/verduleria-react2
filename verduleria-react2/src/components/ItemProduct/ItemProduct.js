import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "../ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
const ItemProduct = ({data}) => {
    const {id, name, price, stock} = data

    return (
        <Link to={`/productos/${id}`}>
        <div className="Item">
            <p>{name}</p>
            <span>${price}</span>
            <span>{stock} unidades</span>
            <ItemCount stock={data.stock}/>
            <button>Comprar</button>
        </div>
        </Link>
    )
}

export default ItemProduct;