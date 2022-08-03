import boy from '../assets/Boy.svg'
import girl from '../assets/Girl.svg'
import rock from '../assets/rock.svg'
import play from '../assets/play.svg'
import './Play.css'
import {usePlayerContext} from '../hooks/usePlayerContext';
import {useGameContext} from '../hooks/useGameContext';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react'

function Play({socket}) {
    const navigate = useNavigate();

    const {code,name,isDrawing,setIsDrawing,setPlayerIndex,playerIndex} = usePlayerContext();
    const room = code ;
    const {statePlayers,dispatch,rounds,setRounds,currentRound,setCurrentRound} = useGameContext();
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(null);

    const clickHandler = async(e)=>{
        
        try {
            setLoading(true)
            const responce = await fetch(`http://localhost:4000/api/game/${code}`);
            const data = await responce.json();
            console.log(responce);
            if(responce.ok){
                setError(null);
                dispatch({type: 'SET_PLAYERS', payload: data.game.players})
                setPlayerIndex(statePlayers.length-1);
                setRounds(data.game.rounds)
                setCurrentRound(data.game.currentRound);
                setIsDrawing(true);
                console.log(data.game.players);
                console.log(statePlayers);
                socket.emit('create room' , room );
                socket.emit('player joined' , room , name)
                navigate(`/game/${code}`,{replace:true});
            }
            if(!responce.ok){
                setError(data.error);
                console.log(data.error);
            }
            setLoading(false);
            
        } catch (error) {
            setError('Server not listining , please try again')
            setLoading(false);
        }
    }

    return ( 
    <div className="play-container">
        <div className='bars'>
                <div className='bar filled-bar'></div>
                <div className='bar filled-bar'></div>
                <div className='bar filled-bar'></div>
        </div>
        <img className='lhaj' src={boy} alt="skin" />
        <h1>{name}</h1>
        <img className='play' src={play} alt="" onClick={clickHandler} />
        {loading==true && <div className='error'> <h3>loading ...</h3> </div>}
        {error && <div className='error'> <h3>{error}</h3> </div>}
    </div>
    );
}

export default Play;