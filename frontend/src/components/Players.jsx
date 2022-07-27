import { useState } from "react";
import { useGameContext } from "../hooks/useGameContext";

function Players({socket}) {
    const {players,setPlayers} = useGameContext();
    const [newList,setNewList] = useState([...players]);
    socket.on('player-joined' , (score,name)=>{
       
       setPlayers([...players,name]);
       
        
    })
    let i = 0;
    return ( 
        <div>
           {players.map(player=>{
            return(
                <div key={i++}>
                    <h4>{player}</h4>
                </div>
            )
           })}
        </div>
     );
}

export default Players;