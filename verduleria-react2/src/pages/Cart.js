import { CartContext} from "../context/CartContext"
import { useContext, useState} from "react"
import db from "../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"


const Cart = () => {
    const {cartProducts, delProduct, totalPrice, totalItem} = useContext(CartContext)
    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return{
                id: product.id,
                title: product.name,
                price: product.price,
                amount: product.counter
            }
        }),
        buyer: {},
        total: totalPrice

    })
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ' '
    })
    
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name] : e.target.value })   
        console.log('data', formData) 
    }
    
    const submitData = (e) => {
        e.preventDefault()
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        console.log('orden generada', orderDoc)
        console.log('order id', orderDoc.id)
    }
     return (
        
        <div className="Checkout-container">
            {console.log('orden', order)}
            {console.log('total compra', totalPrice)}
                <h3>Tu pedido ya casi esta pronto...</h3>
            <p>Porfavor, llenar los campos con tus datos</p>
            <form onSubmit={submitData}>
                <input type='text'
                 name='name'
                  placeholder="Nombre"
                  onChange={handleChange}
                  value ={formData.name}>
                  </input>
                <input type='number'
                 name='phone'
                  placeholder="Numero de telefono"
                  onChange={handleChange}
                  value={formData.phone}>
                  </input>
                <input type='email'
                 name='email'
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}>
                  </input>
                <button type="submit">Terminar con tu compra</button>
            </form>

            <h4>Tu pedido</h4>
            <p>Cantidad de items en el carrito: {totalItem}</p>
            {cartProducts.map((product) => {
                const {name, img, price} = product
                return (
                    <div className="Checkout-container2">
                        <button onClick={() => delProduct(product)}>X</button>
                        <p>{name}</p>
                        <p>{price}</p>
                    </div>
                )
            })}
            <p>Total: {totalPrice}</p>
        </div>
     )
}

export default Cart