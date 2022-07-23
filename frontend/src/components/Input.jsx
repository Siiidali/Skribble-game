import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import './Input.css'


function Input({title}) {
    const naviagate = useNavigate();

    const changeHandler = (e)=>{
        setName(e.target.value);
        console.log(name);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        naviagate(`/step2/${name}`)
    }

    const [name,setName] = useState('')
    return ( 
        <form onSubmit={submitHandler}>
            <input className="input-nickname" classtype="text" onChange={changeHandler} value={name}   placeholder={title}
                  required
                  maxLength={10}/>
        </form>
     );
}

export default Input;