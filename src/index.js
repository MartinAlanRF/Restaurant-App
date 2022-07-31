import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css'; */
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Comomento esto para que no se ejecute dos veces 
  mis funciones de javaScript en mis pages */
 /*  <React.StrictMode> */
    <App />
  /* </React.StrictMode> */
);
