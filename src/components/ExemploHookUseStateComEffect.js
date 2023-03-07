import { useState } from "react"


export default function ExemploHookUseState() {

    const [contador, setContador] = useState(0);  // hook useState 

    function handleIncrementar() {
        setContador(contador + 1);    // contador = contador + 1;
    }

  return (
    <div className="container-usestate-hook">
        <button onClick={ handleIncrementar } className="botao-incrementar">
            Você pressionou {contador} vezes.
        </button>
    </div>
  )
}
