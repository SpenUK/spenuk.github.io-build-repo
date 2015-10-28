'use strict';

var	Module = require('../module'),
	CollectionViewExtension = require('../../../extensions/collectionview'),
	PagerCollectionViewExtension = require('../../../extensions/slidercollectionview'),
	ProjectView = require('./project'),
	template = require('../templates/projects'),

	CollectionViewExtension = CollectionViewExtension,
	PagerCollectionViewExtension = PagerCollectionViewExtension;

	/**
	 *
	 */
	var ProjectsView = CollectionViewExtension.extend({

	// var ProjectsView = PagerCollectionViewExtension.extend({

		namespace: 'projects',

		itemView: ProjectView,

		template: template,

		initialize: function(options){
			this.collection = Module.getProjectsCollection();

			var Super = this._super;

			if (this.collection.isReady()) {
				this.collection.setCurrentModel({slug: options.slug});
				Super.apply(this, arguments);
			} else {
				this.listenToOnce(this.collection, 'sync', function(){
					this.collection.setCurrentModel({slug: options.slug});
					Super.apply(this, arguments);
				});
			}

			this.initialized = true;
			
		},

		render: function () {
            this._super.apply(this, arguments);

            window.Backbone.trigger('ui:showContent');
            window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
			window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});
            window.Backbone.trigger('page:setNamespace', this.namespace );
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
