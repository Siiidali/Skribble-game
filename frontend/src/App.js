
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NickName from './pages/NickName'
import Home from './pages/Home';
import io from 'socket.io-client' ; 

import Play from './pages/Play';
import Board from './components/Board';
import Chat from './components/Chat';
import Game from './pages/Game';
import Players from './components/Players';



function App() {

  const socket = io('http://localhost:4000/', { transports: ['websocket'] , reconnection : false});

  return (
    <Router>
      <Routes>
          <Route path='/' element={<div><NavBar/><NickName/></div>}/>
          <Route path='/home' element={<div><NavBar/><Home socket={socket}/></div>}/>
          <Route path='/play' element={<div><NavBar/><Play socket={socket}/></div>}/>
          <Route path='/step4' element={<div><NavBar/><Board/></div>}/>
          <Route path='/chat' element={<div><NavBar/><Chat/></div>}/>
          <Route path='/game/:room' element={<div><NavBar/><Game socket={socket}/></div>}/>

      </Routes>
    </Router>
  );
}

export default App;
