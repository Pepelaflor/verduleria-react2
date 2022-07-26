import React from "react";
import ItemCount from "./ItemCount";
import ItemProduct from "./ItemProduct/ItemProduct";

export default function ItemListContainer () {
    return (
        <div className="Items">
        <ItemProduct title='Lechuga' price='$200' stock='5'/>
        <ItemProduct title='Tomate' price='$250' stock='4'/>
        </div>
        
    );
}