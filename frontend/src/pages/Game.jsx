import Chat from "../components/Chat";
import Players from "../components/Players";
import './Game.css'
function Game({socket}) {
    return ( 
        <div className="game-container">
            <Players socket={socket} />
            <Chat socket={socket}/>
        </div>
     );
}

export default Game;