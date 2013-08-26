// The Ticket data model
 
var mongoose = require('mongoose')
   , Schema = mongoose.Schema;
 
var ticketSchema = new mongoose.Schema({
    competition_id: {type:Schema.Types.ObjectId, ref:'Competition'},
    game: {type:Schema.Types.ObjectId, ref:'Gamelist'},
    competition: String,
    //user_id: {type: String, ref:'UserProfile'},
    paid: String,
    game1: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game2: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game3: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game4: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game5: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game6: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game7: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game8: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game9: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game10: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game11: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game12: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game13: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game14: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game15: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    game16: {
    	game_id: String,
    	pick: String,
    	winner:String
    },
    overUnder: Number
});
 
module.exports = mongoose.model('Ticket', ticketSchema);
