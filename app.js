//module dependencies
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

//heroku mongo connection string
  var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/football-parley';

var app = express();

// connect to Mongo when the app initializes
mongoose.connect(uristring);

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


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//get app controllers
var gamelist = require('./controllers/gamelist.js');

//app routes

app.get('/', routes.index);
app.get('/games/index', gamelist.list);
app.get('/games/create', gamelist.create);
app.post('/games/create', gamelist.save);
app.get('/games/update', gamelist.single);
app.post('/games/update', gamelist.update);
app.get('/games/delete', gamelist.delete);
app.get('/games/byWeek', gamelist.sort);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
