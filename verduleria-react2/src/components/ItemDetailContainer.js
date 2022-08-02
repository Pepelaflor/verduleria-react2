import React, { useState, useEffect } from "react";
import APICall from "./promises/Promise";
import ItemDetail from "./ItemDetail";

const getItem = (id) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        APICall().then((res) => setData(res));
    }, []);

    const item = data.find(item => item.id === id)
    {
        return (
          <ItemDetail id={item.id}/> 
        )}
    
}



export default getItem;