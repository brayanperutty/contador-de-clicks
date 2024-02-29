import React from "react";
import '../styles/boton.css';

function Boton({ text, esBotonDeClic, manejaClic }){
  return(
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={manejaClic}  
    >
      {text}
    </button>
  );
}

export default Boton;