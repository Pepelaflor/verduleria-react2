import React, { useState, useEffect } from "react";
import ItemProduct from "./ItemProduct/ItemProduct";
import APICall from "./promises/Promise";

function ItemList (item) {
    const [data, setData] = useState([]);
    useEffect(() => {
        APICall().then((res) => setData(res));
    }, []);

    return (
        <div>
        {data.map(item => {
            return (
            <div className="Item">
                <ItemProduct data={item}/>
            </div>
            )
        })
        }
    </div>
    );
}

export default ItemList;