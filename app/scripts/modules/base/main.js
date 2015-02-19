'use strict';	

console.log('base module included');

define(function (require) {

	var Module = {
		nameSpace: 'base',
		Views: {},
		Extensions: {},
		Collections: {},
		Models: {}
	}
	var ext = Module.Extensions;
			ext.HomeView = require('modules/base/views/home')(Module);
			// testing only - to be removed
			ext.TestView = require('modules/base/views/test')(Module);
			ext.Test2View = require('modules/base/views/nestedGrids')(Module);

	Module.init = function(){
		console.log('Base Module inited');

		var this_ = this;
		var Router = Backbone.Router.extend({
			routes: {
				'' : 'getHomePage',
				'test' : 'getTestPage',
				'nestedGrids' : 'nestedGrids',
				'test2' : 'getTest2Page',
				'test3' : 'getTest3Page',
				'test4' : 'getTest4Page'
			},
			init: function(){
				this.on('route:getHomePage' ,function(){
					console.log('home route');
					(this_.Views.home = new this_.Extensions.HomeView).init();
				});

				this.on('route:getTestPage' ,function(){
					console.log('test route');
					(this_.Views.test = new this_.Extensions.TestView).init();
				});

				this.on('route:getTest2Page' ,function(){
					console.log('test2 route');
					(this_.Views.nestedGrid = new this_.Extensions.Test2View).init();
				});

				this.on('route:getTest3Page' ,function(){
					console.log('test3 route');
					(this_.Views.nestedGrid = new this_.Extensions.Test2View).init();
				});

				this.on('route:getTest4Page' ,function(){
					console.log('test4 route');
					(this_.Views.nestedGrid = new this_.Extensions.Test2View).init();
				});

				this.on('route:nestedGrids' ,function(){
					console.log('test2 route');
					(this_.Views.nestedGrid = new this_.Extensions.Test2View).init();
				});
				// Ideally get rid of the stop/start;
				Backbone.history.stop();
				Backbone.history.start();
			}
		});

		this.Router = new Router();
		this.Router.init();
	}

	return Module;

});