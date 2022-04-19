import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador';
import ContadorClicsLogo from './imagenes/Logo-clicks.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  return (
    <div className='App'>
      <div className='contador-clics-logo'>
        <img 
          className='contadorClics-logo'
          src={ContadorClicsLogo}
          alt='Logo del contador de Clics'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
