// src/App.js

import React from 'react';
import OfficeScene from './components/OfficeScene';
import './styles/global.css'; // Importa os estilos globais

function App() {
  return (
    <div className="App" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0' // Cor de fundo suave para toda a aplicação
    }}>
      <OfficeScene />
    </div>
  );
}

export default App;

