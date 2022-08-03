import { useState , useMemo } from "react";
import { useGameContext } from "../hooks/useGameContext";
import logo from '../assets/Boy.svg'
import './Players.css'
import { useEffect } from "react";




function Players({socket}) {

    const {statePlayers,dispatch} = useGameContext();
    console.log(statePlayers);
    
    useEffect(()=>{
        socket.on('player-joined', (score,name)=>{
            dispatch({type: 'ADD_PLAYER', payload: {name,score}}) 
        })
    },[statePlayers]);
   

    let i = 0;
    return ( 
        <div className="players-container">
           {statePlayers.map(player=>{
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