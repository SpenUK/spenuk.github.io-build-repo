'use strict';

var ViewExtension = require('../../../../extensions/view'),
	template = require('../../templates/socialwatermarks/socialwatermark.hbs'),

	SocialWatermarkView = ViewExtension.extend({

		template: template,

		tagName: 'li'

	});

module.exports = SocialWatermarkView;
