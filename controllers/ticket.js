//get data models
var TICKET = require('../models/ticket.js');
var Gamelist = require('../models/gamelist.js');
var COMPETITION = require('../models/competition.js');
var RESOLVE = require('../models/resolve.js');

exports.list = function(req, res){
	TICKET.find(function(err, tickets){
		COMPETITION.find(function(err, competitions){
			res.render('tickets_index', {
				title: 'List of all tickets',
				tickets: tickets,
				competitions: competitions
			});
		});
	});
}

exports.create = function(req, res){
	COMPETITION.findOne({'competitionName': req.query._id}, function(err, competition){
		Gamelist.find().where('competition_name').equals(req.query._id).exec(function(err, games){
			res.render('tickets_create', {
				title: 'Create a new Game Entry',
				games:games,
				competition:competition
			});
		});
	});
}

exports.save = function(req, res){
	 new TICKET({competition: req.body.competition, overUnder: req.body.overUnder,
	  game1: {game_id: req.body.game1game_id, pick: req.body.game1pick},
	  game2: {game_id: req.body.game2game_id, pick: req.body.game2pick},
	  game3: {game_id: req.body.game3game_id, pick: req.body.game3pick},
	  game4: {game_id: req.body.game4game_id, pick: req.body.game4pick},
	  game5: {game_id: req.body.game5game_id, pick: req.body.game5pick},
	  game6: {game_id: req.body.game6game_id, pick: req.body.game6pick},
	  game7: {game_id: req.body.game7game_id, pick: req.body.game7pick},
	  game8: {game_id: req.body.game8game_id, pick: req.body.game8pick},
	  game9: {game_id: req.body.game9game_id, pick: req.body.game9pick},
	  game10: {game_id: req.body.game10game_id, pick: req.body.game10pick},
	  game11: {game_id: req.body.game11game_id, pick: req.body.game11pick},
	  game12: {game_id: req.body.game12game_id, pick: req.body.game12pick},
	  game13: {game_id: req.body.game13game_id, pick: req.body.game13pick},
	  game14: {game_id: req.body.game14game_id, pick: req.body.game14pick}, 
	  game15: {game_id: req.body.game15game_id, pick: req.body.game15pick},
	  game16: {game_id: req.body.game16game_id, pick: req.body.game16pick} 
	  
	}).save(function(error, docs){

		res.redirect('/ticket/index');
	});
}

exports.single = function(req, res){

		TICKET.findOne({'_id': req.query._id}, function(error, ticket){
			res.render('tickets_update', {
				title: 'Update single TICKET entry',
				ticket: ticket
			});
		});
}

exports.update = function(req, res){
	TICKET.update({_id: req.body._id}, {homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, week_id: req.body.week_id}, function(){

		res.redirect('/ticket/index');
	});
}

exports.delete = function(req, res){
	TICKET.remove({_id:req.query._id},function(err){
			res.redirect('/ticket/index');	
	});
}


exports.breakdown = function(req, res){
	RESOLVE.findOne({'competition':req.query._id}, function(error, resolver){
		
	});
}
