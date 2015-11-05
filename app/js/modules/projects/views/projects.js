'use strict';

var	projectsModule = require('../module'),
	FaderViewExtension = require('../../../extensions/faderview'),
	ProjectView = require('./project'),
	template = require('../templates/projects.hbs'),

	/**
	 *
	 */
	ProjectsView = FaderViewExtension.extend({

		namespace: 'projects',

		itemView: ProjectView,

		collectionEl: '.projects',

		template: template,

		el: 'article',

		tagName: 'article',

		collection: projectsModule.getProjectsCollection(),

		initialize: function(options){
			var Super = this._super;

			if (this.collection.isReady()) {
				var initialModel = this.collection.findWhere({slug: options.slug});
				this.collection.setCurrentModel(initialModel);
				Super.apply(this, arguments);
			} else {
				this.listenToOnce(this.collection, 'sync', function(){
					var initialModel = this.collection.findWhere({slug: options.slug});
					this.collection.setCurrentModel(initialModel);
					Super.apply(this, arguments);
				});
			}

			console.log(this);
		},

		// views: function () {
		// 	return {
		// 		'.project': {
		// 			view: ProjectView,
		// 			options: {
		// 				model: this.collection.getCurrentModel()
		// 			}
		// 		}
		// 	};
		// },

		render: function () {
            this._super.apply(this, arguments);

			// window.Backbone.trigger('ui:showContent');
			// window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
			// window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});
			// window.Backbone.trigger('page:setNamespace', this.namespace );
			return this;
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
