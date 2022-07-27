import { useState } from "react";
import { createContext } from "react";


export const PlayerContext = createContext();
export const PlayerContextProvider = ({children})=>{
    const [name,setName] = useState('');
    const [rounds,setRounds] = useState(2);
    const [code,setCode] = useState('');
    return (
    <PlayerContext.Provider value={{name,setName,rounds,setRounds,code,setCode}}>
        {children}
    </PlayerContext.Provider>
    );
    
}