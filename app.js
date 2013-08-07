//module dependencies
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');
  //, GameListProvider = require('./gamelist').GameListProvider;


var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

//instantiate data objects/models
//var gamelistProvider = new GameListProvider();


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app routes

app.get('/', routes.index);
app.get('/games', function(req, res){
  var mongoose = require ("mongoose");

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.  
var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/gamelist';


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

	res.render('index',{
		title: 'Enter Games into Week' 
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
