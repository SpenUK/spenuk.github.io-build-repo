'use strict';	

define(function (require) {

	var wordpressModule = {
		nameSpace: 'wordpress',
		Views: {},
		Extensions: {},
		Collections: {},
		Models: {}
	}
	var ext = wordpressModule.Extensions;
			ext.MasterView = require('modules/wordpress/views/Wordpress')(wordpressModule);
			ext.ArticlesCollection = require('modules/wordpress/collections/Articles')(wordpressModule);
			ext.ArticleView = require('modules/wordpress/views/Article')(wordpressModule);
			ext.ControlbarModel = require('modules/wordpress/models/controlbar')(wordpressModule);
			ext.ControlBarView = require('modules/wordpress/views/ControlBar')(wordpressModule);
			ext.SidePanelModel = require('modules/wordpress/models/SidePanel')(wordpressModule);
			ext.SidePanelView = require('modules/wordpress/views/SidePanel')(wordpressModule);

	wordpressModule.init = function(){

		var parentScope = this;
		var WordpressRouter = Backbone.Router.extend({
			routes: {
				'blog' : 'getBlog',
				'blog/:slug' : 'getBlog'
			},
			init: function(){
				console.log('wordpressModule init');
				this.on('route:getBlog' ,function(slug){
					// Is there a better way to determine wether or not the view is rendered?
					// This is very direct (is the element in the DOM or not?) but is rigid to 'wp'
					if (!document.getElementById('wp')) { 
						// App.Router.setNamespace('blog');
						if (typeof parentScope.Views.Master === 'undefined') {
							parentScope.Views.Master = new parentScope.Extensions.MasterView({slug: slug});
						} else {
							if (typeof slug != 'undefined') {
								// parentScope.Views.Master.render(slug);
								parentScope.Views.Master.initialize(slug);
							} else {
								// parentScope.Views.Master.render();
								parentScope.Views.Master.initialize();
							};
						}
					} else {
						return;
					}
				});
				// Ideally get rid of the stop/start;
				Backbone.history.stop();
				Backbone.history.start();
			}
		});

		(this.Router = new WordpressRouter()).init();
	}

	return wordpressModule;

});