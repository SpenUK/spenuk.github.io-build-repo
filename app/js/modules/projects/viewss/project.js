'use strict';

var	_ = require('underscore'),
	projectsModule = require('../module'),
	ViewExtension = require('../../../extensions/view'),
	template = require('../templates/project.hbs'),

	/**
	 *
	 */
	ProjectsView = ViewExtension.extend({

		namespace: 'projects',

		template: template,

		el: 'article',

		tagName: 'article',

		collection: projectsModule.getProjectsCollection(),

		initialize: function(options){
			var model;

			if (!this.collection.isReady()) {
				this.listenToOnce(this.collection, 'ready', this.initialize);
				return false;
			}

			if (!this.collection.findWhere({slug: options.slug})) {
				var currentModel = this.collection.getCurrentModel();
				console.log('none found', currentModel.getSlug());

				window.Backbone.trigger('router:redirect', '/projects/' + currentModel.getSlug());
				return false;
			}

			model = this.collection.findWhere({slug: options.slug}) || this.collection.getCurrentModel();
			this.collection.setCurrentModel(model);
			this.model = model;

			// this._super.apply(this, arguments);
		},

		serialize: function () {
			return _.extend({}, this.model.toJSON(), {
				// nextUrl: '#/projects/surf-tracking-app-concept',
				// prevUrl: '#/projects/the-sauce'
				nextUrl: this.nextRoute(),
				prevUrl: this.prevRoute()
			});
		},

        nextRoute: function(){
			var model = this.collection.getNextModel();
			return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
		},
		prevRoute: function(){
			var model = this.collection.getPrevModel();
			return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
		},

	});

module.exports = ProjectsView;
