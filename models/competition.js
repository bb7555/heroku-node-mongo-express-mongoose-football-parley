// The Gamelist data model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;
 
var competitionSchema = new mongoose.Schema({
    week_id: {type:Number, ref:'Gamelist'},
    comments: String,
    line: Boolean
});
 
module.exports = mongoose.model('UserProfile', userProfileSchema);
