'use strict';

var ViewExtension = require('../../../../extensions/view'),
	template = require('../../templates/herosvg/herosvg'),

	HeroSVGView = ViewExtension.extend({

		cName: 'HeroSVGView',

		namespace: 'hero SVG',

		template: template

	});

module.exports = HeroSVGView;
