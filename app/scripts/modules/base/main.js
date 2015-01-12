'use strict';	

console.log('main module included');

define(function (require) {

	var BaseModule = {
		Views: {},
		Extensions: {},
		Collections: {},
		Models: {}
	}
	var ext = BaseModule.Extensions;
			ext.HomeView = require('modules/base/views/home')(BaseModule);
			// testing only - to be removed
			ext.TestView = require('modules/base/views/test')(BaseModule);

	BaseModule.init = function(){
		console.log('BaseModule inited');

		var parentScope = this;
		var WordpressRouter = Backbone.Router.extend({
			routes: {
				'' : 'getHomePage',
				'test' : 'getTestPage'
			},
			init: function(){
				this.on('route:getHomePage' ,function(){
					console.log('home route');
					(parentScope.Views.home = new parentScope.Extensions.HomeView).render();
				});

				this.on('route:getTestPage' ,function(){
					console.log('test route');
					(parentScope.Views.test = new parentScope.Extensions.TestView).render();
				});
				// Ideally get rid of the stop/start;
				Backbone.history.stop();
				Backbone.history.start();
			}
		});

		this.Router = new WordpressRouter();
		this.Router.init();
	}

	return BaseModule;

});