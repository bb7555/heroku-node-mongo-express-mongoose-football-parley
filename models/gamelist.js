// The Gamelist data model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var GameListSchema = new mongoose.Schema({
  
    homeTeam: { type: String, trim: true },
    awayTeam: { type: String, trim: true },
  	homeLine: { type: Number, min: 0},
  	awayLine: {type: Number, min: 0}
});
 
module.exports = mongoose.model('Gamelist', GameListSchema);
