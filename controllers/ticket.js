//get data models
var TICKET = require('../models/ticket.js');


exports.list = function(req, res){
	TICKET.find(function(err, tickets){
		res.render('tickets_index', {
			title: 'List of all tickets',
			tickets: tickets
		});
	});
}

exports.create = function(req, res){
	res.render('tickets_create', {
		title: 'Create a new Game Entry'
	})
}

exports.save = function(req, res){
	 new TICKET({homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, week_id: req.body.week_id}).save(function(error, docs){

		res.redirect('/tickets/index');
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

		res.redirect('/tickets/index');
	});
}

exports.delete = function(req, res){
	TICKET.remove(function(err){
		TICKET.findById(req.query._id, function(){

			res.redirect('/tickets/index');
		});
	});
}

