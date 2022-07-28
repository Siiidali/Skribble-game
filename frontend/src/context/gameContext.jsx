import { useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";

export const playersReducer = (statePlayers,action)=>{
    switch (action.type) {
        case 'SET_PLAYERS':
            return [...action.payload];
           
        
        case 'ADD_PLAYER':
            return [...statePlayers,action.payload];
            
        case 'UPDATE_PLAYER':
            return ;

    
        default:
            return statePlayers;
          
    }
}
export const GameContext = createContext();
export const GameContextProvider = ({children})=>{

    
    const [messages,setMessages] = useState([]);
    const [statePlayers,dispatch] = useReducer(playersReducer,[])

    return (
    <GameContext.Provider value={{statePlayers,dispatch,messages,setMessages}}>
        {children}
    </GameContext.Provider>
    );
    
}