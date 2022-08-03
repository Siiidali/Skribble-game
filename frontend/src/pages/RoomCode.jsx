
import './RoomCode.css'
import back from '../assets/back.svg'
import {usePlayerContext} from '../hooks/usePlayerContext';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function CreatRoom({socket}) {

    const navigate = useNavigate()
    const {code,setCode,name} = usePlayerContext();
    const room = code ; 
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(null);

    const changeHandler = (e)=>{
        setCode(e.target.value);
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        try {
            const game = {code,name};
            setLoading(true)
            const responce = await fetch('http://localhost:4000/api/game/join',{
                method: 'POST',
                body: JSON.stringify(game),
                headers: {
                    'Content-Type': 'application/json'
                }
               
            }) 
            const data = await responce.json();
            if(responce.ok){
                setError(null);
                navigate('/play')
            }else{
                setError(data.error);
            }
            setLoading(false)
            
        } catch (error) {
            setError('Server not listining , please try again')
            setLoading(false)
        }
    }

    return ( 
        
        <div className="room-container">
            <div className="things">
            <h1>YOUR ROOM CODE</h1>
            <form onSubmit={submitHandler}>
                <input className="input-nickname" classtype="text" onChange={changeHandler} value={code}   placeholder={'ROOM CODE'}
                    required
                    maxLength={10}/>
            </form>
            {loading==true && <div className='error'> <h3>loading ...</h3> </div>}
            {error && <div className='error'> <h3>{error}</h3> </div>}
            </div>
           
            <div className="arrow">
                <img src={back} alt="" />
                <div>sidali</div>
            </div>
           
        </div>
        
     );
}

export default CreatRoom;