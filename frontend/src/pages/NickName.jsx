import logo from '../assets/logo.svg'
import './NickName.css'
import {usePlayerContext} from '../hooks/usePlayerContext';
import {useNavigate} from 'react-router-dom';


function NickName() {
const navigate = useNavigate();
const {name,setName} = usePlayerContext();
    // const [name,setName]=useState('');
    const changeHandler = (e)=>{
        setName(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        navigate(`/step2`)
    }

    return ( 
        <div className="nickname-container">
            <div className='bars'>
                <div className='bar filled-bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div>
            <img src={logo} alt="logo" />
            <br />
            <br />
            <form onSubmit={submitHandler}>
                <input className="input-nickname" classtype="text" onChange={changeHandler} value={name}   placeholder={'NICKNAME'}
                    required
                    maxLength={10}/>
            </form>
            </div>  
        </div>
    );
}

export default NickName;