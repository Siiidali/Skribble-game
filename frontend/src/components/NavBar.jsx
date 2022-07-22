import logo from '../assets/logo.svg'
import settings from '../assets/settings.svg'
import './NavBar.css'
function NavBar() {
    const handleClick = ()=>{
        console.log("sidali")
    }
    return ( 
        <div className='navbar'>
            <div className='elements'>
            <div className='logo'>
                <img src={logo} alt="skribbl" />
            </div>
            <div className='settings'>
                <img src={settings} alt="settings" onClick={handleClick} />
            </div>
            </div>
        </div>
     );
}

export default NavBar;