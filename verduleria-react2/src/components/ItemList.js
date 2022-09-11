import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import ItemProduct from "./ItemProduct/ItemProduct";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, getDocs, query, where} from "firebase/firestore"
import db from "../firebaseConfig";

function ItemList (item) {
   //const [data, setData] = useState([]);
    //useEffect(() => {
    //   APICall().then((res) => setData(res));
   //}, []);
    const {category} = useParams();
   const [listProducts, setListProducts] = useState([])
    const getProducts = async () => {
        const productCollection = collection(db, 'productosverduleria')
        let filter;
        if (category) {
            filter = query (productCollection, where('categoryid','==', category))
        }
        else {
            filter = productCollection;
        }
        const productSnapshot = await getDocs(filter)
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
    },[category])

    return (
    <div className="Items-Container">
        
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