import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PlayerContextProvider } from './context/playerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </React.StrictMode>
);

reportWebVitals();
