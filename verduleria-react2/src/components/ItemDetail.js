
import ItemCount from "./ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { CartContext } from "../context/CartContext";
const ItemDetail = ({data}) => {
    const {id, name, description, price, stock,img} = data
    const [quantitySelected, setQuantitySelected] = useState(0)
    return (
        <div className="Item-detail">
            <p>{name}</p>
            <img src={`/multimedia/${img}`} atl ="Imagen producto"/>
            <p>${price}</p>
            <span>{stock} unidades</span>
            <ItemCount stock={data.stock} setQuantitySelected={setQuantitySelected} productData={data}/>
        </div>
    )
}

export default ItemDetail;