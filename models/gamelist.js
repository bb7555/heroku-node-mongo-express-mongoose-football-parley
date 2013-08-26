// The Gamelist data model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;
 
var GameListSchema = new mongoose.Schema({
    homeTeam: { type: String, trim: true },
    awayTeam: { type: String, trim: true },
  	homeLine: { type: Number, min: 0 },
  	awayLine: {type: Number, min: 0 },
  	competition: {type:Schema.Types.ObjectId, ref:'Competition'},
  	competition_name: String,
  	winner: String,
  	lineWinner: String
});
 
module.exports = mongoose.model('Gamelist', GameListSchema);
