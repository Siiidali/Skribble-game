import { useState } from "react";
import { createContext } from "react";


export const GameContext = createContext();
export const GameContextProvider = ({children})=>{

    const [players,setPlayers] = useState([]);

    return (
    <GameContext.Provider value={{players,setPlayers}}>
        {children}
    </GameContext.Provider>
    );
    
}