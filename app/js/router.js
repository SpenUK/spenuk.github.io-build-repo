'use strict';

var _ = require('underscore'),

	AppRouter = window.Backbone.Router.extend({
		routes: {
			'': 'root',
			'blog(/)(/:post)': 'blog',
			'projects(/:project)': 'projects',
			'contact': 'contact',
			'about': 'about'
		},

		initialize: function(context){

			console.log('router init');

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
				var transition = (this.currentContentView === context.views.blog && this.lastRoute !== '');

				// Replace this pattern with a module pattern, collection cahing etc.
				// Views should be re-instantietd each time they are routed to.
				if (!context.views.blog.initialized) {
					context.views.blog = new context.views.blog({
			  			el: context.mainPanel
			  		});
				}

		  		context.views.blog.render({slug: slug, transition: transition});
		  		// window.Backbone.trigger('page:message', '<p>Eek, lots of Ipsum! I\'ll start writing actual posts once this site is fixed up properly. For now, enjoy all the various ipsums!</p>');

				this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
				this.currentContentView = context.views.blog;
				
			});

			this.on('route:projects' ,function(slug){
				var transition = (this.currentContentView === context.views.projects && this.lastRoute !== '');

					new context.views.projects({
			  			el: context.mainPanel,
			  			slug: slug,
			  			transition: transition
			  		});

				this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
				console.log(this.currentContentRoute);
				this.currentContentView = context.views.projects;
	  		
			});

			this.on('route:contact' ,function(){
				if (!context.views.contact.initialized) {
					context.views.contact = new context.views.contact({
			  			el: context.mainPanel,
			  			template: context.templates.contact
			  		});
				}

	  		// context.views.contact.render();
	  		this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
	  		this.currentContentView = context.views.contact;
	  		
			});

			this.on('route:about' ,function(){
				if (!context.views.about.initialized) {
					context.views.about = new context.views.about({
		  			el: context.mainPanel,
		  			template: context.templates.about
		  		});
				}

	  		context.views.about.render();
	  		this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
	  		this.currentContentView = context.views.about;
	  		
			});

			this.on('route:defaultRoute', function(){
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