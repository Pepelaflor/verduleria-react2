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
}



export default ItemDetailContainer