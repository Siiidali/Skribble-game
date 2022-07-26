
import './RoomCode.css'
import back from '../assets/back.svg'
import {usePlayerContext} from '../hooks/usePlayerContext';
import { useState } from 'react';
function CreatRoom() {
    const [code,setCode] = useState('')
    

    const changeHandler = (e)=>{
        setCode(e.target.value);
    }

    const submitHandler = (e)=>{
        console.log(e);
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
            </div>
            <div className="arrow">
                <img src={back} alt="" />
                <div>sidali</div>
            </div>
           
        </div>
        
     );
}

export default CreatRoom;