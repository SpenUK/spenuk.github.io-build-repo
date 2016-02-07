'use strict';

var ViewExtension = require('../../../extensions/view'),
	template = require('../templates/about.hbs'),

	AboutView = ViewExtension.extend({

		template: template,

	});

module.exports = AboutView;
