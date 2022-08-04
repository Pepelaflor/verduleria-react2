import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import APICall from "./promises/Promise";
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
  filterById()
}, [])

const filterById = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
        APICall().then((res) => setData(res));
    }, []);
  data.some((product) => {
    if(product.id == id) {
      setProductData(product)
    }
  })
}
return (
  <div className="container-item-detail">
    <h2>Detalle</h2>
    <ItemDetail data={productData}/>
  </div>
)
}



export default ItemDetailContainer