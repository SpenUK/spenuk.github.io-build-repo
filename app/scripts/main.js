'use strict';

// main.js used for pulling in modules.
// Doing this in app.js may be better/ more flexible/ semantic

require.config({
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery',
		'underscore': '../bower_components/underscore-amd/underscore',
		'backbone': '../bower_components/backbone-amd/backbone',
		'handlebars': '../bower_components/handlebars/handlebars'
	}
});

require([
'app',
],function(App){
		// console.log('in main define');
		
		// App.Modules.Wordpress = require('modules/wordpress/main');
		// App.Modules.Wordpress.init();

		// require([
		// 	'modules/wordpress/main'
		// ], function(Wordpress){
		// 	App.Modules.Wordpress = Wordpress;
		// 	App.Modules.Wordpress.init();
		// });

		App.init();

});


