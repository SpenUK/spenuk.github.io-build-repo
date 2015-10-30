'use strict';

require('backbone-super');

var app = require('./app.js');

$(document).on('ready', function(){
	app.initialize();
});