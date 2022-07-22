import Input from "../components/Input";
import './CreatRoom.css'
import back from '../assets/back.svg'
function CreatRoom() {
    return ( 
        
        <div className="room-container">
            <div className="things">
            <h1>CREATE ROOM</h1>
            <Input title='ROOM NAME' ></Input>
            </div>
            <div className="arrow">
                <img src={back} alt="" />
                <div>sidali</div>
            </div>
           
        </div>
        
     );
}

export default CreatRoom;