'use strict';

var app = require('./app.js');

// window.Backbone.history.navigate = require('./modules/backbone-overloaded-navigate.js');

$(document).on('ready', function(){
	app.initialize();
});