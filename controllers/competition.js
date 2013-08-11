//get data models
var COMPETITION = require('../models/competition.js');


exports.list = function(req, res){
	COMPETITION.find(function(err, competitions){
		res.render('competitions_index', {
			title: 'List of all competitions',
			competitions: competitions
		});
	});
}

exports.create = function(req, res){
	res.render('competitions_create', {
		title: 'Create a new Game Entry'
	})
}

exports.save = function(req, res){
	 new COMPETITION({homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, week_id: req.body.week_id}).save(function(error, docs){

		res.redirect('/competitions/index');
	});
}

exports.single = function(req, res){

		COMPETITION.findOne({'_id': req.query._id}, function(error, competition){
			res.render('competitions_update', {
				title: 'Update single COMPETITION entry',
				competition: competition
			});
		});
}

exports.update = function(req, res){
	COMPETITION.update({_id: req.body._id}, {homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, week_id: req.body.week_id}, function(){

		res.redirect('/competitions/index');
	});
}

exports.delete = function(req, res){
	COMPETITION.remove(function(err){
		COMPETITION.findById(req.query._id, function(){

			res.redirect('/competitions/index');
		});
	});
}

