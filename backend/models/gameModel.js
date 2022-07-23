const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    code : {
        type: String ,
        required : true,
        unique: true,
    },
    rounds : {
        type: Number,
        required: true,
    },
    players : {
        type: Array,
        required: false
    },
    currentRound : {
        type: Number,
        required: false , 
        default : 2 
    }
});

const Game = mongoose.model('game',gameSchema);
module.exports = Game ; 