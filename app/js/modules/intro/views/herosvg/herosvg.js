'use strict';

var ViewExtension = require('../../../../extensions/view'),
	template = require('../../templates/herosvg/herosvg.hbs'),

	HeroSVGView = ViewExtension.extend({

		template: template

	});

module.exports = HeroSVGView;
