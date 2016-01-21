'use strict';

var _ = require('underscore'),
	// Backbone = require('backbone'), // update once all is converted
	AboutView = require('../about/views/about'),
    ContactView = require('../contact/views/contact'),
    BlogPostsView = require('../blog/views/blogposts'),
    ProjectsView = require('../projects/viewss/project'),


	AppRouter = window.Backbone.Router.extend({

		routes: {
			'': 'root',
			'blog(/)(/:post)': 'blog',
			'projects(/:project)': 'projects',
			'contact': 'contact',
			'about': 'about'
		},

		initialize: function(options){
			var app = this.app = options.app;
				// projectsModule = require('../projects/module');

			this.listenTo(window.Backbone, 'router:redirect', this.redirect);
			this.listenTo(window.Backbone, 'router:goToCurrentContent', this.goToCurrentContent);
			this.listenTo(window.Backbone, 'router:goToLanding', this.goToLanding);
			this.listenTo(window.Backbone, 'router:nextContent', this.goToNextContent);
			this.listenTo(window.Backbone, 'router:prevContent', this.goToPrevContent);
			this.listenTo(window.Backbone, 'router:setCurrentContent', this.setCurrentContent);

			this.currentContentRoute = this.defaultContentRoute();

			this.on('route:root', function () {
				window.Backbone.trigger('ui:showIntro');
	  			this.lastRoute = window.Backbone.history.fragment;
			});

			this.on('route:blog', function (slug) {
		  		app.setContent({
					view: BlogPostsView,
					options: {
						slug: slug
					}
				});

				// this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			});

			this.on('route:projects', function (slug){
				app.transition({
					view: ProjectsView,
					options: {
						slug: slug
					}
				});
			});

			this.on('route:contact', function(){
				app.setContent({
					view: ContactView
				});
			});

			this.on('route:about', function (){
				app.setContent({
					view: AboutView
				});
			});

			this.on('route:defaultRoute', function (){
				console.log('defaultRoute');
			});

			window.Backbone.history.start();

		},
		setCurrentContent: function(content){
			if (content.view) {
				this.currentContentView = content.view;
			}

			if (content.route) {
				this.currentContentRoute = this.lastRoute = content.route;
			}
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