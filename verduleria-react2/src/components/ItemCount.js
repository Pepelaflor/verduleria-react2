import React, { useState  }from "react";




function ItemCount ({stock, initial, onAdd}) {
    const [num, setNum, ] = useState(0);
    const incNum = () => {
       
         setNum(num + 1);   
        
    };

    const decNum = () => {
        if(num < 0) {
        setNum(num - 1);
        }else{
            setNum(0);
        }
    };

    return (
        <div className="CounterContainer">
            <button className="ItemCount" onClick={decNum}>-</button>
            <h3 className="ItemCount">{num=1}</h3>
            <button className="ItemCount" onClick={incNum}>+</button>
        </div>
    )
}

export default ItemCount;