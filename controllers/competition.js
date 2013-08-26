//get data models
var COMPETITION = require('../models/competition.js');

exports.list = function(req, res){
	COMPETITION.find(function(err, competitions){
		res.render('competition_index', {
			title: 'List of all competitions',
			competitions: competitions
		});
	});
}

exports.create = function(req, res){	
		res.render('competition_create', {
			title: 'Create a new Competition',
		});	
}

exports.save = function(req, res){
	var lineVar = req.body.line
	if(lineVar === "True"){lineVar = true;}else{lineVar = false;}
	 new COMPETITION({week_id: req.body.week_id, line: lineVar, comments: req.body.comments, competitionName: req.body.competitionName}).save(function(error, docs){
		res.redirect('/competition/index');
	});
}

exports.single = function(req, res){

		COMPETITION.findOne({'_id': req.query._id}, function(error, competition){
			res.render('competition_update', {
				title: 'Update single COMPETITION entry',
				competition: competition
			});
		});
}

exports.update = function(req, res){
	var lineVar = req.body.line
	if(lineVar === "True"){lineVar = true;}else{lineVar = false;}
	COMPETITION.update({_id: req.body._id}, {week_id: req.body.week_id, line: lineVar, comments: req.body.comments, competitionName: req.body.competitionName}, function(){

		res.redirect('/competition/index');
	});
}

exports.delete = function(req, res){
	COMPETITION.remove({_id:req.query._id},function(err){

			res.redirect('/competition/index');
		
	});
}

