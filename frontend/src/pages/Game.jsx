import Chat from "../components/Chat";
import Players from "../components/Players";
import Board from '../components/Board';
import './Game.css'
import home from '../assets/home.svg'
import { useGameContext } from "../hooks/useGameContext";
import { usePlayerContext } from "../hooks/usePlayerContext";

function Game({socket}) {

    const {currentRound,setCurrentRound,rounds} = useGameContext();
    const {score} = usePlayerContext();
    return ( 
        
        <div className="game-container">
            <div className="nav-bar">
                <div className="player-score">
                    <h1>!QUB SCORE : <span>{score}</span></h1>
                </div>
                <div className="rounds-container">
                    <h3>Rounds : {currentRound}</h3>
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