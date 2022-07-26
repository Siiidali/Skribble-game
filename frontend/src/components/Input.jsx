import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import './Input.css'
import axios from 'axios';


function Input({title}) {
    const naviagate = useNavigate();
    const [name,setName] = useState('')
    const changeHandler = (e)=>{
        setName(e.target.value);
      
    }
    const submitHandler = async(e)=>{
        e.preventDefault();
        if(title == 'ROOM CODE'){
            const responce = await axios.post(`http://localhost/api/game/join/${name}`,{
                name : name 
            })
            naviagate(`/step3`)
        }
        if(title == 'NICKNAME'){
            naviagate(`/step2/${name}`)
        }
        if(title == 'ROOM NAME'){
            axios.post(`http://localhost/api/game/create`,{

            }) 
        }
        
       
    }

    
    return ( 
        <form onSubmit={submitHandler}>
            <input className="input-nickname" classtype="text" onChange={changeHandler} value={name}   placeholder={title}
                  required
                  maxLength={10}/>
        </form>
     );
}

export default Input;