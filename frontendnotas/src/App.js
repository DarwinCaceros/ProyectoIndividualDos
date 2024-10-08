import React from 'react';
import './App.css';
import ListadoNotas from './components/ListadoNotas';

const App = () => {
  return(
    <div className="App">
      <header>
        <h1>Sistema de Gestion de Notas para alumnos</h1>
      </header>
      <main>
        <ListadoNotas />
      </main>
    </div>
  );
};
export default App;