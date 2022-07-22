import logo from '../assets/logo.svg'
import Input from '../components/Input'
import './NickName.css'
function NickName() {
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
            <Input title={'NICKNAME'}/>
            </div>
            
        </div>
    );
}

export default NickName;