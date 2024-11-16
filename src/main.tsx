import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ou outro arquivo principal
import './index.css'; // Certifique-se de que o estilo existe

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
