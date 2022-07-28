import Chat from "../components/Chat";
import Players from "../components/Players";
import Board from '../components/Board';
import './Game.css'
import home from '../assets/home.svg'

function Game({socket}) {
    return ( 
        
        <div className="game-container">
            <div className="nav-bar">
                <div className="player-score">
                    <h1>!QUB SCORE : <span>1891</span></h1>
                </div>
                <div className="rounds-container">
                    <h3>Rounds : 01</h3>
                </div>
                <div className="timer">
                    <h3>Timer : 80s</h3>
                </div>
                <div className="home">
                    <img src={home} alt="home" />
                </div>
            </div>
            <div className="the-game">
                <Players socket={socket}/>
                <Board />
                <Chat socket={socket}/>
            </div>
            
            
        </div>
     );
}

export default Game;