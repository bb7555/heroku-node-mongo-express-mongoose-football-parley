//get data models
var Gamelist = require('../models/gamelist.js');
var COMPETITION = require('../models/competition.js');

exports.list = function(req, res){
	Gamelist.find(function(err, games){
		res.render('games_index', {
			title: 'List of all games',
			games: games
		});
	});
}

exports.create = function(req, res){
	COMPETITION.find(function(err, competitions){
		res.render('games_create', {
			title: 'Create a new Game Entry',
			competitions: competitions
		});
	});
}

exports.save = function(req, res){
	new Gamelist({competition_name: req.body.competition_name, homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine}).save(function(error, docs){
 
		res.redirect('/games/index');
	});
}

exports.single = function(req, res){
		Gamelist.findOne({'_id': req.query._id}, function(error, game){
			COMPETITION.find(function(err, competitions){
				res.render('games_update', {
					title: 'Update single Gamelist entry',
					game: game,
					competitions: competitions
				});
			});
		});
}

exports.update = function(req, res){
	Gamelist.update({homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, competion_id: req.body.competition_id}, function(){
		res.redirect('/games/index');
	});
}

exports.delete = function(req, res){
	Gamelist.remove({_id: req.query._id},function(err){
			res.redirect('/games/index');		
	});
}

exports.sort = function(req, res){
	Gamelist
		.find()
		.where('week_id').equals(req.query.week_id)
		.exec(function(err, games){
			res.render('games_index', {
				title: 'List of One Week of Games',
				games: games
			});
		});
}