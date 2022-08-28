import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "../ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
const ItemProduct = ({data}) => {
    const {id, name, price, stock, img} = data

    return (
        <div className="individualItem">
            <h3 className="productTitle">{name}</h3>
            <br></br>
            <img className="Item-image" src={img}></img>
            <br></br>
            <Link to={`/productos/${id}`}> <button>Comprar</button> </Link>
        </div>

    )
}

export default ItemProduct;