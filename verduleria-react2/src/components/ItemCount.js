import React, { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
const ItemCount = ({stock, setQuantitySelected, productData, cartProducts}) => {
    const { addProductToCart } = useContext(CartContext)
    const [counter, setContador] = useState(0)

        const addNumber = () => {
            if(counter < stock) {
                setContador(counter + 1);
            }else(alert('Ya no hay mas stock!'))}

        const delNumber = () => {
            if(counter > 0) {
            setContador(counter - 1);
            }else(alert('error'))

        }

        const onAdd = () => {
           // console.log('Agregar al carrito:', productData, 'cartProducts', cartProducts)
            addProductToCart({...productData, counter})
            setQuantitySelected(counter)
        }
        return (
            <div className="CounterContainer">
                <div>
                    <button className="count-del" onClick={delNumber}>-</button>
                    <p className="ItemCount">{counter}</p>
                    <button className="count-add" onClick={addNumber}>+</button>
                    {
                    counter > 0? <button className="cartAdd-button" onClick={onAdd}>Agregar al carrito</button> : ''
                    }
                </div>
            </div>
        )
    }

    export default ItemCount;

    