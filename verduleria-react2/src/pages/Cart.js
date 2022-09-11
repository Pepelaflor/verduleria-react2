import { CartContext} from "../context/CartContext"
import { useContext, useState} from "react"
import db from "../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import Popup from "../components/PopUp"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";




const Cart = () => { 
    const navigate = useNavigate();
    
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const {cartProducts, setCartProducts, delProduct, totalPrice, totalItem} = useContext(CartContext)
    const orderProducts = cartProducts
    const [order, setOrder] = useState({
        items: orderProducts.map((product) => {
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
    const redirect = () => {
        setTimeout(() => {
            navigate('/Success')
        }, 1000);
    }
    const cartEmpty = cartProducts.length == 0
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

    if (cartEmpty) {return (
        <div className="Checkout-container">
            <h1>Carrito vacio</h1>
            <br></br>
            <p>No hay productos en tu carrito</p>
            <br></br>
            <p>Volve al catalogo para continuar con tu compra</p>

        </div>
    ) } else {
     return (
        
        <div className="Checkout-container">
           {console.log('orden', order)}
           {console.log('total compra', totalPrice)}
            <h4>Tu pedido</h4>
            <p>Cantidad de items en el carrito: {totalItem}</p>
            {cartProducts.map((product) => {
                const {name, img, price, counter} = product
                return (
                    <div className="Checkout-container2">
                        <button className="button-detail" onClick={() => delProduct(product)}>X</button>
                        <p className="p-detail">Producto: {name}</p>
                        <p className="p-detail">Costo: {price}$</p>
                        <p className="p-detail">Cantidad: {counter}</p>
                        
                    </div>
                )
            })}
            <p>Total: {totalPrice}$</p>

            <button onClick={togglePopup}>Continua con tu pedido</button>
            {isOpen && <Popup
            content={<>
                  <h3>Tu pedido ya casi esta pronto...</h3>
            <p>Porfavor, llenar los campos con tus datos</p>
            <form onSubmit={submitData}>
                <input className="input-form" type='text'
                 name='name'
                  placeholder="Nombre"
                  onChange={handleChange}
                  value ={formData.name}>
                  </input>
                <input className="input-form" type='number'
                 name='phone'
                  placeholder="Numero de telefono"
                  onChange={handleChange}
                  value={formData.phone}>
                  </input>
                <input className="input-form" type='email'
                 name='email'
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}>
                  </input>
                <button onClick={redirect} type="submit">Confirmar pedido</button>
            </form>
         </>}
         handleClose={togglePopup}
         />}
            
        </div>
     )}
}

export default Cart