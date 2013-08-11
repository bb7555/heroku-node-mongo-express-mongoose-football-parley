// The Gamelist data model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;
 
var userProfileSchema = new mongoose.Schema({
    twitter_id: String,
    username: String
});
 
module.exports = mongoose.model('UserProfile', userProfileSchema);
