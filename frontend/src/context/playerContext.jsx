import { useState } from "react";
import { createContext } from "react";


export const PlayerContext = createContext();
export const PlayerContextProvider = ({children})=>{
    const [name,setName] = useState('');
    const [rounds,setRounds] = useState(2);
    const [code,setCode] = useState('');
    const [score,setScore] = useState(0);
    const [isDrawing, setIsDrawing] = useState(false);
    const [playerIndex,setPlayerIndex] = useState(null);
    return (
    <PlayerContext.Provider value={{
        name,setName,
        rounds,setRounds,
        code,setCode,
        score,setScore,
        isDrawing,setIsDrawing,
        playerIndex,setPlayerIndex
        }}>
        {children}
    </PlayerContext.Provider>
    );
    
}