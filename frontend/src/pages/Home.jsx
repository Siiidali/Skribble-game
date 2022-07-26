import { useState } from 'react';
import boy from '../assets/Boy.svg'
import girl from '../assets/Girl.svg'
import rock from '../assets/rock.svg'
import { usePlayerContext } from '../hooks/usePlayerContext';
import CreatRoom from './CreatRoom';
import RoomCode from './RoomCode'
import './Home.css'
function Home() {
    const [main,setMain] = useState(boy);
    const [right,setRight] = useState(girl);
    const [left,setLeft] = useState(rock);
    const [step,setStep] = useState(1);
    const {name,rounds,setRounds} = usePlayerContext();
    const clickHandlerLeft  = () => {
        const temp = left
        setLeft(main);
        setMain(temp) 
    }

    const clickHandlerRight  = () => {
        const temp = right
        setRight(main);
        setMain(temp) 
    }
    const moins = () => {
        setRounds(rounds-1);
    }

    const plus = () => {
        setRounds(rounds+1);
    }
    
    const clickHandlerCreate = ()=>{
        setStep(2);
    }
    
    const clickHandlerJoin = ()=>{
        setStep(3);
    }



    return ( 
        <div>
            {step === 1 && <div className='home-container'>
            <div className='bars'>
                <div className='bar filled-bar'></div>
                <div className='bar filled-bar'></div>
                <div className='bar'></div>
            </div>
            <div className="skins">
                <div >
                    <img src={left} alt="" onClick={clickHandlerLeft}  className="skin"/>
                </div>
                <div>
                    <img src={main} alt="" className='main skin'/>
                </div>
                <div>
                    <img src={right} alt="" onClick={clickHandlerRight}  className="skin"/>
                </div>
            </div>
            <h2>{name === ''? 'player' : name }</h2>
            <div className='btns'>
                <button className='btn' onClick={clickHandlerJoin}>ROOM CODE</button>
                <button className='btn' onClick={clickHandlerCreate}>CREATE ROOM</button>
            </div>
            <div className='rounds'>
                {rounds>2 && <button className='opr' onClick={moins}>-</button> }
                <button className='number'>Rounds {rounds}</button>
                {rounds<8 && <button className='opr' onClick={plus}>+</button>}
            </div>
                            
            </div>}
            {step === 2 && <CreatRoom />}
            {step === 3 && <RoomCode />}
        </div>
     );
}

export default Home;