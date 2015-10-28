'use strict';

var ViewExtension = require('../../../../extensions/view'),
	template = require('../../templates/socialwatermarks/socialwatermark'),

	SocialWatermarkView = ViewExtension.extend({

		cName: 'SocialWatermarkView',

		namespace: 'social watermark',

		template: template,

		tagName: 'li',

		initialize: function(){
			this.initialized = true;
			this._super.apply(this, arguments);
		},

		serialize: function () {
			return {
				url: this.model.get('url'),
				icon: this.model.get('icon')
			};
		}

	});

module.exports = SocialWatermarkView;
