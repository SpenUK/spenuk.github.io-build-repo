'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'root',
			'test': 'testRoute',
			'*actions': 'defaultRoute'
		},
		setTheme: function(namespace){
			// Used in conjunction with themes set in scss.
			// Kind of corny, but allows for easy transitions between css styles...
			// from one view to another.
			//  Conflicts with any other use of body's class though, 'no-scroll' for instance would be blocked here.
			document.body.className = namespace;
		},
		initialize: function(){
			var parentScope = this;
			

			// initial routes // There's a better place for this for sure, app.js maybe?
			this.on('route:root' ,function(){
				parentScope.setTheme('home midnight');
			});

			this.on('route:testRoute' ,function(){
				alert('testRoute');
			});

			this.on('route:defaultRoute', function(){
				parentScope.setTheme('home');
			});

			Backbone.history.start();
		}
		// ,
		// addRoutes: function (routes) {
		// 	var parentScope = this, i;
		// 	for ( i = routes.length - 1; i >= 0; i--) {
		// 		var route = routes[i];
		// 		parentScope.route(route.path, route.trigger);
		// 		parentScope.on('route:'+ route.trigger , route.handler);
		// 		console.log(route.path);
		// 	};
			// shit hack - works for initializing but does not solve the issue of navigating back to the route after leaving it.
			// console.log('stopping/starting backbone history');
			// Backbone.history.stop();
			// Backbone.history.start();
		// },


	});

	return AppRouter;

});