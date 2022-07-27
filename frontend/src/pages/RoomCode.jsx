
import './RoomCode.css'
import back from '../assets/back.svg'
import {usePlayerContext} from '../hooks/usePlayerContext';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function CreatRoom({socket}) {
    const navigate = useNavigate()
    const {code,setCode,name} = usePlayerContext();
    const room = code ; 

    const changeHandler = (e)=>{
        setCode(e.target.value);
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        try {
            const game = {code,name};
            const responce = await fetch('http://localhost:4000/api/game/join',{
                method: 'POST',
                body: JSON.stringify(game),
                headers: {
                    'Content-Type': 'application/json'
                }
               
            }) 
            if(responce.ok){
                
                navigate('/step3')
            }
        } catch (error) {
            console.log(error.message)
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
            </div>
            <div className="arrow">
                <img src={back} alt="" />
                <div>sidali</div>
            </div>
           
        </div>
        
     );
}

export default CreatRoom;