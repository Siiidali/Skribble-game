import { useContext } from "react";
import {GameContext} from '../context/gameContext';

export const useGameContext = ()=>{
    const context = useContext(GameContext)

    if(!context) {
      throw Error('useGameContext must be used inside an GameContextProvider')
    }
  
    return context
}