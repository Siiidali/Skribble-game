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

}