import { useState } from 'react';
import {useGameContext} from '../hooks/useGameContext';
import {usePlayerContext} from '../hooks/usePlayerContext';


function Chat({socket}) {
    const {messages,setMessages} = useGameContext();
    const [newMessage,setNewMessage] = useState('')
    const {code,name} = usePlayerContext();

    socket.on('message',(message,name)=>{
        setMessages([...messages,{name,message}]);
    })

    const changeHandler = (e)=>{
        setNewMessage(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        socket.emit('message' , code , newMessage, name)
        setMessages([...messages,{name:`${name} (YOU)`,message : newMessage}]);
        console.log(messages);
    }

    let i = 0 ;
    return ( 
        <div className="chat-container">
           <div className='messages'>
                {messages && messages.map(message=>{
                    return (
                        <div key={i++} className='message'>
                            <h3>{message.name}</h3>
                            <p>{message.message}</p>
                        </div>
                    );
                })}
           </div>
           <form onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} value={newMessage}/>
           </form>
        </div>
     );
}

export default Chat;