import React from "react";

function Boton({ text, esBotonDeClic }){
  return(
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }>
      {text}
    </button>
  );
}