//Mongo on Heroku Setup
var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/mydb'; 

mongo.Db.connect(mongoUri, function (err, db) {
  db.collection('mydocs', function(er, collection) {
    collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
    });
  });
});

//module dependencies
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , GameListProvider = require('./gamelist').GameListProvider;


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
var gamelistProvider = new GameListProvider(mongoUri, 27017);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app routes

app.get('/', routes.index);
app.get('/games', function(req, res){

	res.render('index',{
		title: 'Enter Games into Week' 
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
