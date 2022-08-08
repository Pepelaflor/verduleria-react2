
import ItemCount from "./ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
const ItemDetail = ({data}) => {
    const {id, name, description, price, stock,img} = data

    return (
        <div className="Item-detail">
            <p>{name}</p>
            <img src={`/multimedia/${img}`} atl ="Imagen producto"/>
            <span>${price}</span>
            <span>{stock} unidades</span>
            <ItemCount stock={data.stock}/>
            <button>Comprar</button>
        </div>
    )
}

export default ItemDetail;