'use strict';

var	ViewExtension = require('../../../extensions/view'),
	template = require('../templates/project.hbs'),

	/**
	 *
	 */
	ProjectsView = ViewExtension.extend({

		template: template,

		acceptedParams: ['uiModel', 'slug'],

		isReady: false,

		initialize: function(options){
			options = options || {};

			this._super.apply(this, arguments);

			if (!this.collection.isReady()) {
				this.listenToOnce(this.collection, 'ready', this.setModel);
			} else {
				this.setModel();
			}
		},

		setModel: function () {
			var model = this.collection.findWhere({slug: this.slug}) || this.collection.getCurrentModel();
			this.collection.setCurrentModel(model);
			this.model = model;


			this.uiModel.set({
				currentContentUrl: this.collection.getCurrentRoute(),
				nextUrl: this.collection.getNextRoute(),
				prevUrl: this.collection.getPrevRoute()
			});

			this.onReady();
		}

	});

module.exports = ProjectsView;
