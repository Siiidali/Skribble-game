import { useState } from "react";
import { createContext } from "react";


export const GameContext = createContext();
export const GameContextProvider = ({children})=>{

    const [players,setPlayers] = useState([]);
    const [messages,setMessages] = useState([]);

    return (
    <GameContext.Provider value={{players,setPlayers,messages,setMessages}}>
        {children}
    </GameContext.Provider>
    );
    
}