import { useState } from "react";
import { createContext } from "react";


export const PlayerContext = createContext();
export const PlayerContextProvider = ({children})=>{
    const [name,setName] = useState('');
    const [rounds,setRounds] = useState(2);
    return (
    <PlayerContext.Provider value={{name,setName,rounds,setRounds}}>
        {children}
    </PlayerContext.Provider>
    );
    
}