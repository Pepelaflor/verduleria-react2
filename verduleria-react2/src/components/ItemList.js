import React, { useState, useEffect } from "react";
import ItemProduct from "./ItemProduct/ItemProduct";
import APICall from "./promises/Promise";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, getDocs} from "firebase/firestore"
import db from "../firebaseConfig";

function ItemList (item) {
   //const [data, setData] = useState([]);
    //useEffect(() => {
    //   APICall().then((res) => setData(res));
   //}, []);

   const [listProducts, setListProducts] = useState([])
    const getProducts = async () => {
        const productCollection = collection(db, 'productosverduleria')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
       
        })
        return productList
    }

    useEffect(() => {
        getProducts()
        .then ((res) => {
            setListProducts(res)

        })
    })
    return (
    <div className="Items2">
        {listProducts.map((item, id) => {
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