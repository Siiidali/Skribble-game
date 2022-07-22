import boy from '../assets/Boy.svg'
import girl from '../assets/Girl.svg'
import rock from '../assets/rock.svg'
import play from '../assets/play.svg'
import './Play.css'

function Play() {
    return ( 
    <div className="play-container">
        <div className='bars'>
                <div className='bar filled-bar'></div>
                <div className='bar filled-bar'></div>
                <div className='bar filled-bar'></div>
        </div>
        <img className='lhaj' src={boy} alt="skin" />
        <h1>! QUB</h1>
        <img className='play' src={play} alt="" />
    </div>
    );
}

export default Play;