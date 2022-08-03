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
    const [rounds,setRounds] = useState(null);
    const [currentRound,setCurrentRound] = useState(null);
    const [word,setWord] = useState('rocket');
    const [reset, setReset] = useState(false);
    const [timer,setTimer] = useState(20);
    const [drawingIndex,setDrawingIndex] = useState(0);

    return (
    <GameContext.Provider value={
        {
            statePlayers,dispatch,
            messages,setMessages,
            rounds,setRounds,
            currentRound,setCurrentRound,
            word,setWord,
            reset,setReset,
            timer,setTimer,
            drawingIndex,setDrawingIndex
        }}>
        {children}
    </GameContext.Provider>
    );
    
}