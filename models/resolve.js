// The Ticket data model
 
var mongoose = require('mongoose')
   , Schema = mongoose.Schema;
 
var resolveSchema = new mongoose.Schema({
    competition_id: {type:Schema.Types.ObjectId, ref:'Competition'},
    game: {type:Schema.Types.ObjectId, ref:'Gamelist'},
    competition: String,
    game1: String,
    game2:  String,
    game3:  String,
    game4:  String,
    game5:  String,
    game6:  String,
    game7:  String,
    game8:  String,
    game9:  String,
    game10:  String,
    game11:  String,
    game12:  String,
    game13:  String,
    game14:  String,
    game15:  String,
    game16:  String,
    overUnder: Number
});
 
module.exports = mongoose.model('Resolve', resolveSchema);
