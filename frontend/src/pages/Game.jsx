import Chat from "../components/Chat";
import Players from "../components/Players";
import Board from '../components/Board';
import './Game.css'
import home from '../assets/home.svg'
import { useGameContext } from "../hooks/useGameContext";
import { usePlayerContext } from "../hooks/usePlayerContext";
import Timer from "../components/Timer";
import pencil from '../assets/pencil.svg'
import trash from '../assets/trash.svg'
import format from '../assets/format.svg'
import arrow from '../assets/order-arrow-right.svg'
import plus from '../assets/plus.svg'

function Game({socket}) {
    console.log('helloooo');
    const {currentRound,setCurrentRound,rounds,timer,setTimer,setDrawingIndex,drawingIndex} = useGameContext();
    const {score,name,setIsDrawing,playerIndex} = usePlayerContext();

    socket.on('next-player',(index)=>{
        setDrawingIndex(index++);
        if(playerIndex == drawingIndex){
            setIsDrawing(true);
            setTimer(20);
        }
        else{
            setTimer(20);
        }
    })

    return ( 
        <div className="game-container">
            <div className="nav-bar">
                <div className="player-score">
                    <h1>{name} SCORE : <span>{score}</span></h1>
                </div>
                <div className="rounds-container">
                    <h3>Rounds : {currentRound}</h3>
                </div>
                <Timer socket={socket}/>
                <div className="home">
                    <img src={home} alt="home" />
                </div>
            </div>
            <div className="the-game">
                <Players socket={socket}/>
                <Board socket={socket}/>
                <Chat socket={socket}/>
            </div>
            <div className="second-nav-bar">
                
                    <img src={trash} alt="" />
                    <img src={arrow} alt="" />
                    <img src={pencil} alt="" />
                    <img src={format} alt="" />
                    <img src={plus} alt="" />
              
            </div>

            
            
        </div>
     );
}

export default Game;