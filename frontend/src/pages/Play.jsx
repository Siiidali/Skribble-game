import boy from '../assets/Boy.svg'
import girl from '../assets/Girl.svg'
import rock from '../assets/rock.svg'
import play from '../assets/play.svg'
import './Play.css'
import {usePlayerContext} from '../hooks/usePlayerContext';
import {useGameContext} from '../hooks/useGameContext';
import {useNavigate} from 'react-router-dom';

function Play({socket}) {
    const navigate = useNavigate();

    const {code,name} = usePlayerContext();
    const room = code ;
    const {statePlayers,dispatch} = useGameContext();

    const clickHandler = async(e)=>{
        try {
            const responce = await fetch(`http://localhost:4000/api/game/${code}`);
            if(responce.ok){
                const data = await responce.json();
                dispatch({type: 'SET_PLAYERS', payload: data.game.players})
                console.log(data.game.players);
                console.log(statePlayers);
                socket.emit('create room' , room );
                socket.emit('player joined' , room , name)
                navigate(`/game/${code}`,{replace:true});
            }
            
        } catch (error) {
            console.log(error.message);
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
        <h1>! QUB</h1>
        <img className='play' src={play} alt="" onClick={clickHandler} />
    </div>
    );
}

export default Play;