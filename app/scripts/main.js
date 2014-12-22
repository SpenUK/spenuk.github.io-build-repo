'use strict';

// main.js used only for configurations and as an entry point into app.js, where the actual app logic will live.

require.config({
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery',
		'underscore': '../bower_components/underscore-amd/underscore',
		'backbone': '../bower_components/backbone-amd/backbone',
		'handlebars': '../bower_components/handlebars/handlebars'
	}
});

define([
'app',
],function(App){

		App.init();

});