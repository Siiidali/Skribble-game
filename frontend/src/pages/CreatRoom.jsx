import './CreatRoom.css'
import back from '../assets/back.svg'
import {usePlayerContext} from '../hooks/usePlayerContext';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



function CreatRoom() {
    const navigate = useNavigate();

    const [code,setCode] = useState('');
    const {name,rounds} = usePlayerContext();

    const changeHandler = (e)=>{
        setCode(e.target.value);
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        const responce = await axios.post(`http://localhost/api/game/create`,{
                code,name,rounds
            }) 
        if(responce.success){
            navigate('/step3');
        }
    }

    return ( 
        
        <div className="room-container">
            <div className="things">
            <h1>CREATE ROOM</h1>
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