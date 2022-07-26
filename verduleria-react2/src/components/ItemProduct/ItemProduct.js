import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "../ItemCount";
import { useState } from "react";
const ItemProduct = ({title, price, stock, imagen}) => {
    const [counter, setContador] = useState(1)
    const addNumber = () => {
        setContador(counter + 1)
    }

    const delNumber = () => {
        if(counter > 0) {
         setContador(counter - 1)
        }else(alert('error'))

    }
    return (
        <div className="Item">
            <span>{imagen}</span>
            <p>{title}</p>
            <span>{price}</span>
            <span>{stock}</span>
            <div>
                <button onClick={delNumber}>-</button>
                <p>{counter}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct;