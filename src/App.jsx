import React from 'react';
import Partidas from './componentes/Partidas.jsx';
import './App.css';  
import Inicio from './componentes/inicio.jsx'

const App = () => {
  return (
    <>
      <h1>Bienvenido a Tetris</h1>
      <Partidas />
      <Inicio />

      
    </>
  );
};

export default App;
