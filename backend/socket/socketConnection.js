module.exports = socketConnection = function(socket){


    console.log('new player');
    
    socket.on('create room',(room)=>{
        socket.join(room);
        console.log('room created');
    })

    socket.on('player joined' , (room , name) => {
        const score = 0 ;
        socket.to(room).emit('player-joined' , score , name)
        console.log('player joined');
    })

    socket.on('update player' , (room , score , name )=>{
        socket.to(room).emit('update player' , score , name )
    })

    socket.on('message' , (code , newMessage , name)=>{
        socket.to(code).emit('message' , newMessage , name );
    })

    socket.on('update-score',(code,newScore,name)=>{
        socket.to(code).emit('update-score',newScore,name);
        console.log('updated score');
    })

    socket.on('draw', (oldX, oldY, x, y, room) => {
        socket.to(room).emit('draw', oldX, oldY, x, y);
    });

    socket.on('reset', (room) => {
        socket.to(room).emit('reset');
    });

    socket.on('timer', (timer, room) => {
        if (timer >= 0) socket.to(room).emit('timer', timer);
    });

    socket.on('next-player', (room,index) => {
        socket.to(room).emit('next-player',index);
    });
}