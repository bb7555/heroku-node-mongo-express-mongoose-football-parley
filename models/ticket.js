// The Gamelist data model
 
var mongoose = require('mongoose')
   , Schema = mongoose.Schema;
 
var ticketSchema = new mongoose.Schema({
    competition_id: {type:String, ref:'Competition'},
    //user_id: {type: String, ref:'UserProfile'},
    paid: Boolean,
    game1: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game2: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game3: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game4: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game5: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game6: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game7: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game8: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game9: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game10: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game11: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game12: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game13: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game14: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game15: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    game16: {
    	game_id:{type:Schema.Types.ObjectId, ref:'Gamelist'},
    	pick: String,
    	winner:Number
    },
    overUnder: Number
});
 
module.exports = mongoose.model('Ticket', ticketSchema);
