import { CartContext } from "../context/CartContext"
import Cart from "./Cart"
import { order } from './Cart'
import { useContext, useState} from "react"

const Success = () => {
    const {cartProducts, delProduct, totalPrice, totalItem} = useContext(CartContext)
    return (
        <div>
            <h1>Tu pedido fue realizado con exito!</h1>
            {cartProducts.map((product) => {
                const {name, img, price, counter} = product
                return (
                    <div className="Checkout-container3">
                        <p className="p-detail">Producto: {name}</p>
                        <p className="p-detail">Costo: {price}$</p>
                        <p className="p-detail">Cantidad: {counter}</p>
                    </div>
                )
            })}
                        <h3 className="success-p">El total de tu compra fue de ${totalPrice}</h3>
        </div>
    )
}

export default Success