'use strict';
var fs = require("fs");
var uuid = require('node-uuid');
var path = require('path');
var db = require('./db.js');

var Api = function (app, config) {
	this.app = app;
	this.uuid = uuid;
	this.sqlQuery = null;
	this.callback = null;
	this.response = {
		data: null,
		success: null,
		errors: []
	}

	try {
		this.db = new db(this, config.db);
	}
	catch(e){
		this.throw('Cannot connect to database', true);
	}

	this.db.db.connect();
};

Api.prototype.throw = function(message, critical) {
	if(critical) {
		this.response.errors.push(message);
		this.response.success = false;
		throw message;
	} else {
		this.response.errors.push(message);
	}
}

Api.prototype.request = function(req, callback) {
	this.callback = callback;
	this.method = req.method;
	this.rawPath = req.path;
	this.data = req.body;
	this.params = req.params;

	if(this.params.resource) {
		this.initResource(this.params.resource);
	} else {
		this.throw('Resource is required');
		this.respond();
	}
}

Api.prototype.respond = function() {
	this.db.db.end();
	this.callback(this.response);
}

Api.prototype.initResource = function(resource) {
	try {
		var resourcePath = path.join(__dirname, 'resources', resource+'.js');
		fs.access(resourcePath, fs.constants.F_OK, (err) => {
			if(err) {
				throw err;
			} else {
				this.resource = require(resourcePath);

				var resource = this.resource(this);
				resource[this.method].call();
			}
		});
	} catch(e) {
		this.throw(e, true);
	}
}

module.exports = Api;
