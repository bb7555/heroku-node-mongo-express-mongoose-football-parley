var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

GameListProvider = function(host, port) {
  this.db= new Db('localdb', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};


GameListProvider.prototype.getCollection= function(callback) {
  this.db.collection('gamelists', function(error, gamelist_collection) {
    if( error ) callback(error);
    else callback(null, gamelist_collection);
  });
};

exports.GameListProvider = GameListProvider;