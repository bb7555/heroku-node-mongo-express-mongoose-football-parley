var mongoose = require ("mongoose");

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.  
var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/gamelist';

GameListProvider = function(){};

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err)GameListProvider =  { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});


var GameListSchema = new mongoose.Schema({
  
    homeTeam: { type: String, trim: true },
    awayTeam: { type: String, trim: true },
  	homeLine: { type: Number, min: 0},
  	awayLine: {type: Number, min: 0}
});

//create our data model
var gamelistModel = mongoose.model('gamelist', GameListSchema);


exports.GameListProvider = GameListProvider;