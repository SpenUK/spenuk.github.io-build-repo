'use strict';

// main.js used for pulling in modules.
// Doing this in app.js may be better/ more flexible/ semantic

require.config({
	paths: {
		'jquery'				: '../bower_components/jquery/dist/jquery',
		'underscore'		: '../bower_components/underscore-amd/underscore',
		'backbone'			: '../bower_components/backbone-amd/backbone',
		'handlebars'		: '../bower_components/handlebars/handlebars',
		// 'transit'				: '../node_modules/jquery.transit/jquery.transit'
		// Transit needs to be installed properly, currently bower install fails - why?
		'transit'				: '/scripts/shared/transitTemp'
	}
});

require([
'app',
'modules/base/main'
],function(App, BaseModule){
		// console.log('in main define');
		
		// App.Modules.Wordpress = require('modules/wordpress/main');
		// App.Modules.Wordpress.init();

		// require([
		// 	'modules/wordpress/main'
		// ], function(Wordpress){
		// 	App.Modules.Wordpress = Wordpress;
		// 	App.Modules.Wordpress.init();
		// });

		// App.init();

		(App.Modules.Base = BaseModule).init();

		$('#side-bar, .header').on('click', '.dismiss-button.show', function(){
			$('#push-wrapper').removeClass('side-bar-hidden');
			// $('#push-wrapper').css({transform: 'translate3d(0,0,0)'});
			$(this).removeClass('show').addClass('close');
		});

		$('#side-bar, .header').on('click', '.dismiss-button.close', function(){
			var barWidth = $('#side-bar').width();
			$('#push-wrapper').addClass('side-bar-hidden');
			// $('#push-wrapper').css('transform', 'translate3d(-'+barWidth.toString()+'px,0,0)');
			$(this).removeClass('close').addClass('show');
		});

});


