//get data models
var UserProfile = require('../models/userProfile.js');

exports.list = function(req, res){
	UserProfile.find(function(err, userprofiles){
		res.render('userprofiles_index', {
			title: 'List of all userprofiles',
			userprofiles: userprofiles
		});
	});
}

exports.create = function(req, res){
	res.render('userprofiles_create', {
		title: 'Create a new Game Entry'
	})
}

exports.save = function(req, res){
	 new UserProfile({homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, week_id: req.body.week_id}).save(function(error, docs){

		res.redirect('/userprofiles/index');
	});
}

exports.single = function(req, res){

		UserProfile.findOne({'_id': req.query._id}, function(error, userprofile){
			res.render('userprofiles_update', {
				title: 'Update single UserProfile entry',
				userprofile: userprofile
			});
		});
}

exports.update = function(req, res){
	UserProfile.update({_id: req.body._id}, {homeTeam: req.body.homeTeam, awayTeam: req.body.awayTeam, homeLine: req.body.homeLine, awayLine: req.body.awayLine, week_id: req.body.week_id}, function(){

		res.redirect('/userprofiles/index');
	});
}

exports.delete = function(req, res){
	UserProfile.remove(function(err){
		UserProfile.findById(req.query._id, function(){

			res.redirect('/userprofiles/index');
		});
	});
}

exports.sort = function(req, res){
	UserProfile
		.find()
		.where('week_id').equals(req.query.week_id)
		.exec(function(err, userprofiles){
			res.render('userprofiles_index', {
				title: 'List of One Week of Games',
				userprofiles: userprofiles
			});
		});
}