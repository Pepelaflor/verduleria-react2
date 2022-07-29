import React, { useState } from "react"
function ItemCount ({stock}) {
    const [counter, setContador] = useState(1)

        const addNumber = () => {
            if(counter < stock) {
                setContador(counter + 1);
            }
        }

        const delNumber = () => {
            if(counter > 1) {
            setContador(counter - 1);
            }else(alert('error'))

        }
        return (
            <div className="CounterContainer">
                <div>
                    <button className="ItemCount" onClick={delNumber}>-</button>
                    <p className="ItemCount">{counter}</p>
                    <button className="ItemCount" onClick={addNumber}>+</button>
                </div>
            </div>
        )
    }

    export default ItemCount;

    