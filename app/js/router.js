'use strict';

var _=window._;

var AppRouter = window.Backbone.Router.extend({
	routes: {
		'': 'root',
		'blog(/)(/:post)': 'blog',
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

			if (!context.views.intro.initialized) {
				context.views.intro = new context.views.intro({
	  			el: context.introPanel,
	  			template: context.templates.intro
	  		});
			}

			window.Backbone.trigger('ui:showIntro');

  		// new context.views.intro({
  		// 	template: context.templates.intro
  		// });
  		// $('body').addClass('intro');

  		this.lastRoute = window.Backbone.history.fragment;
		});

		this.on('route:blog' ,function(slug){

			// Only transition if the current view is not changing (but the resource is).
			var transition = (this.currentContentView === context.views.blog && this.lastRoute !== '');

			if (!context.views.blog.initialized) {
				context.views.blog = new context.views.blog({
	  			el: context.mainPanel,
	  			template: context.templates['blog-post']
	  		});
			}

  		context.views.blog.render({slug: slug, transition: transition});
  		window.Backbone.trigger('page:message', '<p>Eek, lots of Ipsum! I\'ll start writing actual posts once this site is fixed up properly. For now, enjoy all the various ipsums!</p>');

			this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			this.currentContentView = context.views.blog;
			
		});

		this.on('route:projects' ,function(slug){
			// Only transition if the current view is not changing (but the resource is).
			var transition = (this.currentContentView === context.views.projects && this.lastRoute !== '');

			if (!context.views.projects.initialized) {
				context.views.projects = new context.views.projects({
	  			el: context.mainPanel,
	  			template: context.templates.project,
	  		});
			}

			context.views.projects.render({slug: slug, transition: transition});

			this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			this.currentContentView = context.views.projects;
  		
		});

		this.on('route:contact' ,function(){
			if (!context.views.contact.initialized) {
				context.views.contact = new context.views.contact({
	  			el: context.mainPanel,
	  			template: context.templates.contact
	  		});
			}

  		context.views.contact.render();
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
		if (!_.isFunction(this.currentContentView.getPrevModel)) { return false; }
		var route = this.currentContentView.prevRoute();
		this.navigate(route);
	},
	goToNextContent: function () {
		if (!_.isFunction(this.currentContentView.getNextModel)) { return false; }
		var route = this.currentContentView.nextRoute();
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