import React, { useState, useEffect } from "react";
import ItemProduct from "./ItemProduct/ItemProduct";
import APICall from "./promises/Promise";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ItemList (item) {
    const [data, setData] = useState([]);
    useEffect(() => {
        APICall().then((res) => setData(res));
    }, []);

    return (
        <div>
        {data.map((item, id) => {
            return (
            <div className="Item">
                <ItemProduct key={item.id} data={item}/>
            </div>
            )
        })
        }
    </div>
    );
}

export default ItemList;