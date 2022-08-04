<<<<<<< HEAD
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import APICall from "./promises/Promise";
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({})
  const {id} = useParams()
  
  useEffect(() => {
  filterById()
}, [])

const filterById = () => {
  APICall.some((product) => {
    if(product.id == id) {
      setProductData(product)
    }
  })
}
return (
  <div className="container-item-detail">
    <ItemDetail data={productData}/>
  </div>
)
=======
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
    
>>>>>>> 5492b14741d286b7f3d4b901981fc5a813074b17
}



<<<<<<< HEAD
export default ItemDetailContainer
=======
export default getItem;
>>>>>>> 5492b14741d286b7f3d4b901981fc5a813074b17
