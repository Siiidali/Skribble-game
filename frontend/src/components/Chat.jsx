import { useState } from 'react';
import {useGameContext} from '../hooks/useGameContext';
import {usePlayerContext} from '../hooks/usePlayerContext';
import './Chat.css'


function Chat({socket}) {
    const {messages,setMessages,word,statePlayers,dispatch} = useGameContext();
    const [newMessage,setNewMessage] = useState('')
    const {code,name} = usePlayerContext();
    const {score,setScore} = usePlayerContext();

    socket.on('message',(message,name)=>{
        setMessages([{name,message},...messages]);
    })
    socket.on('update-score', (newScore,name)=>{
        const newPlayers = statePlayers ; 
        const freshPlayers = newPlayers.map((player)=>{
            if(player.name===name){
                return {name:name , score:newScore};
            }
            return player
        })
        dispatch({type:'SET_PLAYERS', payload: freshPlayers})
    })

    const changeHandler = (e)=>{
        setNewMessage(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        socket.emit('message' , code , newMessage, name)
        setMessages([{name:`${name} (YOU)`,message : newMessage},...messages]);
        console.log(messages);
        if(newMessage === word){
            const newScore = score+100;
            setScore(newScore);
            socket.emit('update-score' , code , newScore , name);
            const newPlayers = statePlayers ; 
            const freshPlayers = newPlayers.map((player)=>{
                if(player.name===name){
                    return {name:name , score:newScore};
                }
                return player
            })
            dispatch({type:'SET_PLAYERS', payload: freshPlayers})
        }
        setNewMessage('');
        
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
           <form className='input-container' onSubmit={submitHandler}>
                <input className='message-input' type="text" onChange={changeHandler} value={newMessage}  placeholder="type your guess here..." maxLength={15}/>
           </form>
        </div>
     );
}

export default Chat;