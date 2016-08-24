'use strict';

var ViewExtension = require('../../../extensions/view'),
	template = require('../templates/about.hbs'),

	AboutView = ViewExtension.extend({

		template: template,

		acceptedParams: ['uiModel'],

		initialize: function() {
			this._super.apply(this, arguments);

			this.uiModel.set({
				currentContentUrl: '#/about',
				nextUrl: null,
				prevUrl: null
			});
		},

	});

module.exports = AboutView;
