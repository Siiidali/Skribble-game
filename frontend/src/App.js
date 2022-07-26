
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NickName from './pages/NickName'
import Home from './pages/Home';


import Play from './pages/Play';
import Board from './components/Board';
function App() {
  return (
    <Router>
      <Routes>
          <Route path='/step1' element={<div><NavBar/><NickName/></div>}/>
          <Route path='/step2' element={<div><NavBar/><Home/></div>}/>
          <Route path='/step3' element={<div><NavBar/><Play/></div>}/>
          <Route path='/step4' element={<div><NavBar/><Board/></div>}/>
      </Routes>
    </Router>
  );
}

export default App;
