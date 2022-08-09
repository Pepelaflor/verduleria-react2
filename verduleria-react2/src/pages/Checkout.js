import { CartContext } from "../context/CartContext"
import { useContext } from "react"
const Checkout = () => {
    const cartProducts = useContext(CartContext)
     return (
        <div className="Checkout-container">
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

export default Checkout