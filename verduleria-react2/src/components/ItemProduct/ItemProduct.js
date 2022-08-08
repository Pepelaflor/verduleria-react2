import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "../ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
const ItemProduct = ({data}) => {
    const {id, name, price, stock, img} = data

    return (
        <div className="Item">
            <p>{name}</p>
            <Link to={`/productos/${id}`}> <button>Comprar</button> </Link>
        </div>

    )
}

export default ItemProduct;