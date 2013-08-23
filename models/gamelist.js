// The Gamelist data model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;
 
var GameListSchema = new mongoose.Schema({
    homeTeam: { type: String, trim: true, ref:'Ticket' },
    awayTeam: { type: String, trim: true, ref:'Ticket' },
  	homeLine: { type: Number, min: 0, ref:'Ticket'},
  	awayLine: {type: Number, min: 0, ref:'Ticket'},
  	competition_id: {type:Schema.Types.ObjectId, ref:'Competition'},
  	winner: String,
  	lineWinner: String
});
 
module.exports = mongoose.model('Gamelist', GameListSchema);
