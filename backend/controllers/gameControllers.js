const Game = require("../models/gameModel");

const createGame = async(req,res)=>{
    const {code,name,rounds} = req.body ; 
    try {
        const game = await Game.create({
            code,
            rounds,
            players:[name]
        })
        if(game){
            res.status(200).json({
                game,
                success : 'room created with success'
            })
        }
    } catch (error) {
        res.status(400).json({
            error : 'error with creating the room',
            message: error.message
        })
    }    
 }

const joinGame = async(req,res)=>{
    const code = req.params.room
    const {name} = req.body 
    try {
        const oldGame = await Game.find({code});
       oldGame[0].players.push(name);
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
        }
    } catch (error) {
        
    }
}

const getGame = async(req,res)=>{
    const code = req.params.room
    try {
        const game = await Game.find({code});
        if(game){
            res.status(200).json({
                game,
                success : 'room finded with success'
            })
        }
    } catch (error) {
        res.status(400).json({
            error : 'error with fiding the room',
            message: error.message
        })
    }
}


module.exports = {
    createGame,
    joinGame,
    getGame
}