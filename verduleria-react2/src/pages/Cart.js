import { CartContext } from "../context/CartContext"
import { useContext } from "react"


const Cart = () => {
    const {cartProducts} = useContext(CartContext)
    const cartCount = cartProducts.length
    const {delProduct} = useContext(CartContext)
    
     return (
        
        <div className="Checkout-container">
            <h4>Tu pedido</h4>
            <p>Cantidad de items en el carrito: {cartCount}</p>
            {cartProducts.map((product) => {
                return (
                    <div className="Checkout-container2">
                        <button onClick={delProduct}>X</button>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
     )
}

export default Cart