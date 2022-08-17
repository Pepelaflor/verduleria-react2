import { CartContext } from "../context/CartContext"
import { useContext } from "react"
const Cart = () => {
    const cartProducts = useContext(CartContext)
    const cartCount = cartProducts.length
     return (
        <div className="Checkout-container">
            <p>Cantidad de items en el carrito: {cartCount}</p>
            {cartProducts.map((product) => {
                return (
                    <div className="Item">
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
     )
}

export default Cart