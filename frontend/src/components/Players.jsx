import { useState } from "react";
import { useGameContext } from "../hooks/useGameContext";
import logo from '../assets/Boy.svg'
import './Players.css'
function Players({socket}) {
    const {players,setPlayers} = useGameContext();
    const [newList,setNewList] = useState([...players]);
    socket.on('player-joined' , (score,name)=>{
       setPlayers([...players,{name,score}]);
    })
    let i = 0;
    return ( 
        <div className="players-container">
           {players.map(player=>{
            return(
                
                    <div key={i++} className="player" >
                        <img src={logo} alt="" />
                        <div className="info">
                            <h3 className="name">{player.name}</h3>
                            <h4 className="score">{player.score}</h4>
                        </div>
                    </div>
               
            )
           })}
        </div>
     );
}

export default Players;