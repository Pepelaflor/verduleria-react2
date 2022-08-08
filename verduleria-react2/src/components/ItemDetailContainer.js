import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import APICall from "./promises/Promise";
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({})
  const { id } = useParams()
  
 useEffect(() => {
  APICall().then((res) => setProductData(filterById(res)));
 }, []);

const filterById = ( arrayResponse ) => {
  return arrayResponse.find((p) => p.id == id)
}
return (
  <div className="container-item-detail">
    <h2>Detalle</h2>
    <ItemDetail data={productData}/>
  </div>
)
}



export default ItemDetailContainer