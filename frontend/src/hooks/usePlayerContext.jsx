import { useContext } from "react";
import {PlayerContext} from '../context/playerContext';

export const usePlayerContext = ()=>{
    const context = useContext(PlayerContext)

    if(!context) {
      throw Error('usePlayerContext must be used inside an PlayerContextProvider')
    }
  
    return context
}