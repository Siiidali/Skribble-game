import { useState } from 'react';
import boy from '../assets/Boy.svg'
import girl from '../assets/Girl.svg'
import rock from '../assets/rock.svg'
import './Home.css'
function Home() {
    const [main,setMain] = useState(boy);
    const [right,setRight] = useState(girl);
    const [left,setLeft] = useState(rock);
    const [rounds,setRounds] = useState(2);

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
    
    return ( 
        <div className="home-container">
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
            <h2>!QUB</h2>
            <div className='btns'>
                <button className='btn'>ROOM CODE</button>
                <button className='btn'>CREATE ROOM</button>
            </div>
            <div className='rounds'>
                {rounds>2 && <button className='opr' onClick={moins}>-</button> }
                <button className='number'>Rounds {rounds}</button>
                {rounds<8 && <button className='opr' onClick={plus}>+</button>}
            </div>
            
        </div>
     );
}

export default Home;