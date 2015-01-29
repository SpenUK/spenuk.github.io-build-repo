'use strict';

// main.js used for pulling in modules.
// Doing this in app.js may be better/ more flexible/ semantic

require.config({
	paths: {
		'jquery'				: '../bower_components/jquery/dist/jquery',
		'underscore'		: '../bower_components/underscore-amd/underscore',
		'backbone'			: '../bower_components/backbone-amd/backbone',
		'handlebars'		: '../bower_components/handlebars/handlebars'
		// 'transit'				: '/scripts/shared/transitTemp'
	}
	// Transit needs to be installed properly, currently bower install fails - why?
});

require([
'app',
'modules/base/main',
'modules/wordpress/main'
],function(App, BaseModule, WordpressModule){
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
		(App.Modules.Wordpress = WordpressModule).init();

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


