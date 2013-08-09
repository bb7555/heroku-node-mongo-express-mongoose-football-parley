//get data models
var Gamelist = require('../models/gamelist.js');

exports.list = function(req, res){
	Gamelist.find(function(err, games){
		res.render('games_index', {
			title: 'List of all games',
			games: games
		});
	});
}

exports.create = function(req, res){
	res.render('games_create', {
		title: 'Create a new Game Entry'
	})
}

exports.save = function(req, res){
	 new Gamelist({homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, week_id: req.body.week_id}).save(function(error, docs){

		res.redirect('/games/index');
	});
}

exports.single = function(req, res){

		Gamelist.findOne({'_id': req.query._id}, function(error, game){
			res.render('games_update', {
				title: 'Update single Gamelist entry',
				game: game
			});
		});
}

exports.update = function(req, res){
	Gamelist.update({_id: req.body._id}, {homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, week_id: req.body.week_id}, function(){

		res.redirect('/games/index');
	});
}

exports.delete = function(req, res){
	Gamelist.remove(function(err){
		Gamelist.findById(req.query._id, function(){

			res.redirect('/games/index');
		});
	});
}

exports.sort = function(req, res){
	
}