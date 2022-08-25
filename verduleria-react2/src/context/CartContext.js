import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalItem, setTotalItem] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    console.log('cartProducts', cartProducts)
    const addProductToCart = (product) => {
        setCartProducts(cartProducts => [...cartProducts, product])
        setTotalItem(totalItem + product.counter);
        setTotalPrice(totalPrice + (product.price * product.counter));
    }

    const delProduct = (product) => {
        console.log('Producto a eliminar:', product)
        setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== product.id))
        setTotalPrice(totalPrice - (product.price * product.counter))
        setTotalItem(totalItem - product.counter)
    }
    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        delProduct,
        totalItem,
        totalPrice
    }

    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider
export { CartContext }