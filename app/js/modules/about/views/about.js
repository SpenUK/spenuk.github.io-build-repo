'use strict';

var ViewExtension = require('../../../extensions/view'),
	template = require('../templates/about.hbs'),

	AboutView = ViewExtension.extend({

		cName: 'AboutView',

		namespace: 'about',

		template: template,

		initialize: function() {
			this._super.apply(this, arguments);
			// better handling of render?
			this.render();
		}

	});

module.exports = AboutView;
