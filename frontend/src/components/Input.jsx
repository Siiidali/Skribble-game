import { useState } from "react";
import './Input.css'
function Input({title}) {
    const changeHandler = (e)=>{
        setName(e.target.value);
        console.log(name);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
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