'use strict';

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

		this.currentContentRoute = this.defaultContentRoute();
		
		this.on('route:root' ,function(){

  		new context.views.intro({
  			model: {},
  			template: context.templates.intro
  		});
  		
			console.log('before the after');
			this.afterRoute();
		});

		this.on('route:blog' ,function(slug){

			if (!context.views.blog.initialized) {
				context.views.blog = new context.views.blog({
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates['blog-post']
	  		});
			}

			if (!slug) {

				slug = context.views.blog.defaultSlug();
				this.navigate(context.views.blog.defaultRoute());
  			context.views.blog.render({slug: slug});
  		} else {
  			if (context.views.blog.checkSlug(slug)) {
  				context.views.blog.render({slug: slug});
  			} else {
  				context.views.blog.render({});
  			}
  		}

			this.currentContentRoute = window.Backbone.history.fragment;
			
			console.log('before the after');
			this.afterRoute();
		});

		this.on('route:projects' ,function(slug){

			if (!context.views.projects.initialized) {
				context.views.projects = new context.views.projects({
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates.project
	  		});
			}

			if (!slug) {

				slug = context.views.projects.defaultSlug();
				this.navigate(context.views.projects.defaultRoute());
  			context.views.projects.render({slug: slug});
  		} else {
  			if (context.views.projects.checkSlug(slug)) {
  				context.views.projects.render({slug: slug});
  			} else {
  				context.views.projects.render({});
  			}
  		}


  		this.currentContentRoute = window.Backbone.history.fragment;
  		
			console.log('before the after');
			this.afterRoute();
		});

		this.on('route:contact' ,function(){
			if (!context.views.contact.initialized) {
				context.views.contact = new context.views.contact({
	  			model: {},
	  			el: context.mainPanel,
	  			template: context.templates.contact
	  		});
			}

  		context.views.contact.render();
  		// this.currentContent = context.views.contact;
  		this.currentContentRoute = window.Backbone.history.fragment;
  		
			console.log('before the after');
			this.afterRoute();
		});

		this.on('route:about' ,function(){
			if (!context.views.about.initialized) {
				context.views.about = new context.views.about({
	  			model: {},
	  			el: context.mainPanel,
	  			template: context.templates.about
	  		});
			}

  		context.views.about.render();
  		this.currentContentRoute = window.Backbone.history.fragment;
  		
		});

		this.on('route:defaultRoute', function(){
			console.log('before the after');
			this.afterRoute();
		});

		window.Backbone.history.start();

	},
	goToCurrentContent: function () {
		this.navigate(this.currentContentRoute);

	},
	defaultContentRoute: function () {
		return 'about';
	},
	afterRoute: function (){
		// $('.block-initial-transition').removeClass('block-initial-transition');
		console.log('after');
		// $('html').addClass('initialized');
	},
	redirect: function(route){
		console.log('redirect');
		this.navigate(route);
	}

});

module.exports = AppRouter;