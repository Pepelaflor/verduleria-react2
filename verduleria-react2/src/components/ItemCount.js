import React, { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
const ItemCount = ({stock, setQuantitySelected, productData, cartProducts}) => {
    const { addProductToCart } = useContext(CartContext)
    const [counter, setContador] = useState(1)

        const addNumber = () => {
            if(counter < stock) {
                setContador(counter + 1);
            }
        }

        const delNumber = () => {
            if(counter > 1) {
            setContador(counter - 1);
            }else(alert('error'))

        }

        const onAdd = () => {
            console.log('Agregar al carrito:', productData, 'cartProducts', cartProducts)
            addProductToCart(productData)
            setQuantitySelected(counter)
        }
        return (
            <div className="CounterContainer">
                <div>
                    <button className="ItemCount" onClick={delNumber}>-</button>
                    <p className="ItemCount">{counter}</p>
                    <button className="ItemCount" onClick={addNumber}>+</button>
                    <button onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        )
    }

    export default ItemCount;

    