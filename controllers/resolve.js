//get data models
var TICKET = require('../models/ticket.js');
var Gamelist = require('../models/gamelist.js');
var COMPETITION = require('../models/competition.js');
var RESOLVE = require('../models/resolve.js');

exports.list = function(req, res){
	RESOLVE.find(function(err, resolves){
			res.render('resolves_index', {
				title: 'List of all resolvers',
				resolves:resolves
			});
	});
}

exports.create = function(req, res){
	
		COMPETITION.find(function(err, competitions){
			res.render('resolves_create', {
				title: 'Create a new Competition Resolver',
				competitions:competitions
			});
		});
	
}

exports.save = function(req, res){
	 new RESOLVE({competition: req.body.competition}).save(function(error, docs){

		res.redirect('/resolve/index');
	});
}

exports.single = function(req, res){

		RESOLVE.findOne({'competition': req.query._id}, function(error, resolves){
			
			Gamelist.find().where('competition_name').equals(req.query._id).exec(function(err, games){

				res.render('resolves_update', {
					title: 'Set Resolver Winners',
					resolves:resolves,
					games:games
				});
		
			});

		});
}

exports.update = function(req, res){
	RESOLVE.update({_id: req.body._id}, {overUnder: req.body.overUnder,
	  game1: req.body.game1,
	  game2: req.body.game2,
	  game3: req.body.game3,
	  game4: req.body.game4,
	  game5: req.body.game5,
	  game6: req.body.game6,
	  game7: req.body.game7,
	  game8: req.body.game8,
	  game9: req.body.game9,
	  game10: req.body.game10,
	  game11: req.body.game11,
	  game12: req.body.game12,
	  game13: req.body.game13,
	  game14: req.body.game14,
	  game15: req.body.game15,
	  game16: req.body.game16,
	  
	}, function(){

		res.redirect('/resolve/index');
	});
}

exports.delete = function(req, res){
	RESOLVE.remove({_id:req.query._id},function(err){
			res.redirect('/resolve/index');	
	});
}


