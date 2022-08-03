const Game = require("../models/gameModel");

const createGame = async(req,res)=>{
    const {code,name,rounds} = req.body ; 
    try {
        const game = await Game.create({
            code,
            rounds,
            players:[{name,score:0}]
        })
        if(game){
            res.status(200).json({
                game,
                success : 'room created with success'
            })
        }else{
            throw Error('error')
        }
    } catch (error) {
        res.status(400).json({
            error : 'error with creating the room , please try again ',
            message: error.message
        })
    }    
 }

const joinGame = async(req,res)=>{
    const {name,code} = req.body 
    try {
        const oldGame = await Game.find({code});
        oldGame[0].players.push({name,score : 0});
       const players = oldGame[0].players;
        const game = await Game.findOneAndUpdate({code},
            {
                players : players
            }
            ).exec();
        if(game){
            res.status(200).json({
                game,
                success : 'room created with success'
            })
        }else{
            throw Error('error')
        }
    } catch (error) {
        res.status(400).json({
            error : "Room dosn't exist , please try again",
            message: error.message
        })
    }
}

const getGame = async(req,res)=>{
    const code = req.params.room
    console.log("get request");
    try {
        const game = await Game.findOne({code});
        console.log(game);
        if(game){
            res.status(200).json({
                game,
                success : 'room finded with success'
            })
        }
        else{
            throw Error('error')
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            error : 'error with fiding the room , please try again ',
            message: error.message
        })
    }
}


module.exports = {
    createGame,
    joinGame,
    getGame
}