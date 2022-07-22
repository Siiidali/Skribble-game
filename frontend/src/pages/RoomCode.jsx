import Input from "../components/Input";
import './RoomCode.css'
import back from '../assets/back.svg'
function CreatRoom() {
    return ( 
        
        <div className="room-container">
            <div className="things">
            <h1>YOUR ROOM CODE</h1>
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