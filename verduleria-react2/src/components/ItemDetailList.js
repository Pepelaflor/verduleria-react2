import React, { useState, useEffect } from "react";
import ItemProduct from "./ItemProduct/ItemProduct";
import APICall from "./promises/Promise";

function ItemDetail (item) {
   

    return (
        <div>
        {data.some((item, id) => {
            console.log('primer parametro:', item, 'segundo parametro:', id)
            return (
            <div className="Item">
                <ItemDetail key={item.id} data={item}/>
            </div>
            )
        })
        }
    </div>
    );
}

export default ItemDetail;