import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import APICall from "./promises/Promise";
import {useParams} from 'react-router-dom'
import db from "../firebaseConfig";
import {doc, getDoc} from 'firebase/firestore'

    const ItemDetailContainer = () => {
      const [productData, setProductData] = useState({})
      const { id } = useParams()
  
    useEffect(() => {
      getProduct()
      .then((res) => {
        setProductData(res)
      })
    }, [id]);

//const filterById = ( arrayResponse ) => {
  //return arrayResponse.find((p) => p.id == id)
//}

const getProduct = async () => {
  const docRef = doc(db, 'productosverduleria', id)
  const docSnapshot = await getDoc(docRef)
  let product = docSnapshot.data()
  product.id = docSnapshot.id
  return product
}
return (
  <div className="container-item-detail">
    <h2>Detalle</h2>
    <ItemDetail data={productData}/>
  </div>
)
}



export default ItemDetailContainer