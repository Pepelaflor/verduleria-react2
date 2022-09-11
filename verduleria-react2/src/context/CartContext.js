import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalItem, setTotalItem] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    console.log('cartProducts', cartProducts)

    const addProductToCart = (product) => {
        const isInCart = cartProducts.find(
            (productInCart) => productInCart.id == product.id
        );
        if (isInCart) {
            const newArray = cartProducts.map((productInCart) => {
                if (productInCart.id == product.id) {
                    return {
                        ...productInCart,
                        counter: productInCart.counter + product.counter,
                    };
                } else {
                    return productInCart;
                }
            });
            setCartProducts(newArray);
        }
        else{
            setCartProducts(cartProducts => [...cartProducts, product])
        }
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