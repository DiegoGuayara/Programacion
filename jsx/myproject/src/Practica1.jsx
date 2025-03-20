import { useState } from "react";

function Practica1(){
    const [count, setCount] = useState(0)

    return (
        <div>
        <p>El valor de count es: {count}</p>
        <button onClick={() => setCount(count+1)}>Presiona aqui para aumentar</button>
        <button onClick={() => setCount(count-1)}>Presiona aqui para disminuir</button>
        </div>
    )
}

export default Practica1