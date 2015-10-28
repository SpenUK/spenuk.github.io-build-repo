'use strict';

var _ = require('underscore'),
	// Backbone = require('backbone'), // update once all is converted
	AboutView = require('./modules/about/views/about'),
	ContactView = require('./modules/contact/views/contact'),
	BlogPostsView = require('./modules/blog/views/blogposts'),
	ProjectsView = require('./modules/projects/views/projects'),

	AppRouter = window.Backbone.Router.extend({
		routes: {
			'': 'root',
			'blog(/)(/:post)': 'blog',
			// 'projects(/)(/:project)': 'projects',
			'projects(/:project)': 'projects',
			'contact': 'contact',
			'about': 'about'
		},

		initialize: function(context){
			this.listenTo(window.Backbone, 'router:redirect', this.redirect);
			this.listenTo(window.Backbone, 'router:goToCurrentContent', this.goToCurrentContent);
			this.listenTo(window.Backbone, 'router:goToLanding', this.goToLanding);
			this.listenTo(window.Backbone, 'router:nextContent', this.goToNextContent);
			this.listenTo(window.Backbone, 'router:prevContent', this.goToPrevContent);
			this.listenTo(window.Backbone, 'router:setCurrentContent', this.setCurrentContent);

			this.currentContentRoute = this.defaultContentRoute();
			
			this.on('route:root' ,function(){
				window.Backbone.trigger('ui:showIntro');
	  			this.lastRoute = window.Backbone.history.fragment;
			});

			this.on('route:blog' ,function(slug){
				// Only transition if the current view is not changing (but the resource is).
				// Boolean to tell it to transition or not
				// This is most likely causing the no trans bug.
				// var transition = (this.currentContentView === context.views.blog && this.lastRoute !== '');

				// Replace this pattern with a module pattern, collection cahing etc.
				// Views should be re-instantietd each time they are routed to.
				this.currentContentView = new BlogPostsView({
		  			el: context.mainPanel,
		  			slug: slug
		  		});

				this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			});

			this.on('route:projects' ,function(slug){
				this.currentContentView = new ProjectsView({
		  			el: context.mainPanel,
		  			slug: slug
		  		});

				window.Backbone.trigger('ui:showContent');
				this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			});

			this.on('route:contact' ,function(){
				this.currentContentView = new ContactView({
		  			el: context.mainPanel
		  		});

				window.Backbone.trigger('ui:showContent');
		  		this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			});

			this.on('route:about' ,function(){
				this.currentContentView = new AboutView({
		  			el: context.mainPanel
		  		});

				window.Backbone.trigger('ui:showContent');
	  			this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			});

			this.on('route:defaultRoute', function(){
				console.log('defaultRoute');
			});

			window.Backbone.history.start();

		},
		setCurrentContent: function(content){
			if (content.view) {this.currentContentView = content.view; }
			if (content.route) {this.currentContentRoute = this.lastRoute = content.route; }
		},
		goToLanding: function () {
			this.navigate('', {trigger: true});
		},
		goToCurrentContent: function () {
			this.navigate(this.currentContentRoute, {trigger: true});
		},
		goToPrevContent: function () {
			console.log('goToPrevContent', this.currentContentView);
			if (!_.isFunction(this.currentContentView.getPrevModel)) {
				console.log('!function');
				return false;
			}
			var route = this.currentContentView.prevRoute();
			if (!route) {
				console.log('!route');
				return false;
			}
			console.log('navigate');
			this.navigate(route);
		},
		goToNextContent: function () {
			console.log('goToNextContent', this.currentContentView);
			if (!_.isFunction(this.currentContentView.getNextModel)) {
				console.log('!function');
				return false;
			}
			var route = this.currentContentView.nextRoute();
			if (!route) {
				console.log('!route');
				return false; 
			}
			console.log('navigate');
			this.navigate(route);
		},
		defaultContentRoute: function () {
			return '#/about';
		},
		redirect: function(route){
			this.navigate(route, {trigger: true});
		}

	});

module.exports = AppRouter;