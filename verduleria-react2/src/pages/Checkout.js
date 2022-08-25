const Checkout = () => {
    return (
        <div>
            <h3>Tu pedido ya casi esta pronto...</h3>
            <p>Porfavor, llenar los campos con tus datos</p>
            <form>
                <input type='text'
                 name='name'
                  placeholder="Nombre">
                  </input>
                <input type='number'
                 name='phone'
                  placeholder="Numero de telefono">
                  </input>
                <input type='email'
                 name='email'
                  placeholder="Email">
                  </input>
                <button>Terminar con tu compra</button>
            </form>

            
        </div>
    )
}