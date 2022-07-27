const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
require("dotenv").config();
const gameRoutes = require('./routes/gameRoutes');
const socket = require('socket.io');
const socketConnection = require('./socket/socketConnection');



const app = express();
const server = http.createServer(app);
const io =  socket(server,{
    cors: {
        origin: "http://localhost:4000"
    }
});


app.use(cors({ origin: true, credentials: true }));
const dbURL = process.env.URLDB;
mongoose.connect(dbURL,{ useNewUrlParser: true , useUnifiedTopology:true}).then((result)=>{
    console.log('Connected to database');
    // listin to requests
    
    server.listen(process.env.PORT,(()=>{
        console.log("listining to requests ...");
    }));
}).catch((error)=>{
    console.log(error);
});

io.on('connection', socketConnection);

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//     })
// )
app.use(express.json());
app.use('/api/game',gameRoutes);
