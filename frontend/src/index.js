import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PlayerContextProvider } from './context/playerContext';
import { GameContextProvider } from './context/gameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <GameContextProvider>
        <PlayerContextProvider>
          <App />
    </PlayerContextProvider>
      </GameContextProvider>
  
);

reportWebVitals();
