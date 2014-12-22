'use strict';

require.config({
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery',
		'underscore': '../bower_components/underscore-amd/underscore',
		'backbone': '../bower_components/backbone-amd/backbone',
		'handlebars': '../bower_components/handlebars/handlebars'
	}
});

require([
'test1',
],function(test1){

		console.log(test1);
		test1.init();

});