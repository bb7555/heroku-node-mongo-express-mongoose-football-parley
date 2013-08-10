//module dependencies
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy
  , ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

//heroku mongo connection string
  var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/football-parley';

var app = express();

// connect to Mongo when the app initializes
mongoose.connect(uristring);

// all environments
app.use(express.static(__dirname + '/public'));
app.use(express.cookieParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(express.cookieParser('your secret here'));
//app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));


passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
 
 
 
var TWITTER_CONSUMER_KEY = "8YMlh7hUKQHd7qjMc6VURA";
var TWITTER_CONSUMER_SECRET = "YThSFH8PJVytUF2A0gEhFUvRcAPpXLsq03fsXL6bT4";
 
passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://football-parley.herokuapp.com/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    // NOTE: You'll probably want to associate the Twitter profile with a
    //       user record in your application's DB.
    var user = profile;
    return done(null, user);
  }
));
 


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


app.get('/account',
  ensureLoggedIn('/login'),
  function(req, res) {
    res.send('Hello ' + req.user.username);
  });
 
app.get('/login',
  function(req, res) {
    res.send('<html><body><a href="/auth/twitter">Sign in with Twitter</a></body></html>');
  });
  
app.get('/logout',
  function(req, res) {
    req.logout();
    res.redirect('/');
  });
 
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { successReturnToOrRedirect: '/account', failureRedirect: '/login' }));


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
