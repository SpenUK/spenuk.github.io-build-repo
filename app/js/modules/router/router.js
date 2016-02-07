'use strict';
	// Backbone = require('backbone'), // update once all is converted, shouldnt be using window.

var aboutModule = require('../about/module'),
    contactModule = require('../contact/module'),
    blogModule = require('../blog/module'),
    projectsModule = require('../projects/module'),

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

			this.listenTo(window.Backbone, 'router:redirect', this.redirect);

			this.on('route:root', function () {
				window.Backbone.trigger('ui:showIntro');
			});

			this.on('route:blog', function (slug){
				app.transition(blogModule.getArticleView(slug), {
					resourceId: 'blog:' + (slug || 'no-slug')
				});
			});

			this.on('route:projects', function (slug){
				app.transition(projectsModule.getProjectView(slug), {
					resourceId: 'projects:' + (slug || 'no-slug')
				});
			});

			this.on('route:contact', function(){
				app.transition(contactModule.getContactView(), {
					resourceId: 'contact'
				});
			});

			this.on('route:about', function(){
				app.transition(aboutModule.getAboutView(), {
					resourceId: 'about'
				});
			});

			window.Backbone.history.start();

		},

		redirect: function(route){
			this.navigate(route, {trigger: true});
		}

	});

module.exports = AppRouter;