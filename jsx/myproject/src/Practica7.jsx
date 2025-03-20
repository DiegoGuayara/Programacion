import { useState } from "react";

function Practica7(){
    const [cont, setCont] = useState(0);

    function aumentar(){
        if(cont < 10){
            setCont(cont + 1)
        }
    }

    function disminuir(){
        if(cont > 0){
            setCont(cont - 1)
        }
    }

    return (
        <div>
            <p>Contador: {cont}</p>

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )

}

export default Practica7;