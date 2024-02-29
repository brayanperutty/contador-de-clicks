import './App.css';
import Boton from './components/boton';
import Contador from './components/contador';
import freeCodeCampLogo from './img/fcc_secondary_small.svg';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] =  useState(0);

  const manejaClic = () => {
    setNumClics(numClics + 1);  
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo} 
          alt='Logo freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics={numClics} 
        />
        <Boton
          text='Clic'
          esBotonDeClic={true}
          manejaClic={manejaClic}
        />
        <Boton
          text='Reiniciar'
          esBotonDeClic={false}
          manejaClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
