import React from 'react';
import ReactDOM from 'react-dom'; // Corrige la importación de ReactDOM
import App from './App'; // Importa tu componente principal (App)
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente App aquí */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
