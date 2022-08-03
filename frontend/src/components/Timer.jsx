import { useGameContext } from "../hooks/useGameContext";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useEffect } from 'react';


function Timer({socket}) {

    const {timer,setTimer,drawingIndex,setDrawingIndex} = useGameContext();
    const {isDrawing,setIsDrawing,code} = usePlayerContext();
    const room = code;

    useEffect(() => {
        setTimeout(() => {
            if (isDrawing) {
                if (timer > 0) {
                    setTimer(timer - 1);
                    socket.emit('timer', timer, room);
                }
            }
            if (timer === 0) {
                setIsDrawing(false);
                setDrawingIndex(drawingIndex++);
                socket.emit('timer', timer, room);
                socket.emit('next-player', room);
            }
        }, 1000);
    });

    socket.on('timer', (timer) => {
        if (!isDrawing) {
            setTimer(timer);
        }
    });
    return ( 
        <div className="timer">
            <h3 className="timer">timer : {timer} s</h3>
        </div>
     );
}

export default Timer;