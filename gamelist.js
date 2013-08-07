var mongoose = require ("mongoose");

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.  
var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/gamelist';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
GameListProvider = mongoose.connect(uristring, function (err, res) {
  if (err)GameListProvider =  { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});


GameListProvider.prototype.schema = new mongoose.Schema({
  
    homeTeam: { type: String, trim: true },
    awayTeam: { type: String, trim: true },
  	homeLine: { type: Number, min: 0},
  	awayLine: {type: Number, min: 0}
});

//create our data model
var gamelistModel = mongoose.model('gamelist', GameListProvider.schema);


exports.GameListProvider = GameListProvider;