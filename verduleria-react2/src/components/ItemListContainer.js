import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemProduct from "./ItemProduct/ItemProduct";

export default function ItemListContainer () {
    const product1 = {
        name: 'Lechuga',
        price: 200,
        stock: 5
    }
    
    const product2 = {
        name: 'Lechuga',
        price: 200,
        stock: 5
    }
    return (
        <div className="Items">
        <ItemList/>
        </div>
        
    );
}