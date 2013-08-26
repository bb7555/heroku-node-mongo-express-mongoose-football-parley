// The Gamelist data model
 
var mongoose = require('mongoose')
   , Schema = mongoose.Schema;
 
var competitionSchema = new mongoose.Schema({
    competitionName: {type: String, ref: 'Gamelist', ref:'Ticket'},
    comments: String,
    line: Boolean
});
 
module.exports = mongoose.model('Competition', competitionSchema);
