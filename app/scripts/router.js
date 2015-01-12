'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

	return function (Module){
		console.log(Module);

		var AppRouter = Backbone.Router.extend({
			routes: {
				'': 'root',
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
				// Defining them here is not in keeping with modularity, but does that matter for these routes?
				this.on('route:root' ,function(){

					this.Views.homepage = new this.Extensions.Views.homepage();
	    		this.Views.homepage.init();

				});

				this.on('route:testRoute' ,function(){

					this.Views.homepage = new this.Extensions.Views.homepage();
					console.log('test');
	    		this.Views.homepage.init();

				});

				this.on('route:test2Route' ,function(){

					this.Views.homepage = new this.Extensions.Views.homepage();
					console.log('test2');
	    		this.Views.homepage.init();

				});

				this.on('route:defaultRoute', function(){
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

	}

});