import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "../ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
const ItemProduct = ({data}) => {
    const {id, name, description, price, stock, img, category} = data

    return (
        <div className="individualItem">
            <h3 className="productTitle">{name}</h3>
            <br></br>
            <img className="Item-image" src={img}></img>
            <br></br>
            <p>{description}</p>
            <Link to={`/productos/${id}`}> <button className="buy-button">Comprar</button> </Link>
        </div>

    )
}

export default ItemProduct;