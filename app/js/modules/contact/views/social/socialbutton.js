'use strict';

var ViewExtension = require('../../../../extensions/view'),
	template = require('../../templates/social/socialbutton.hbs'),

	/**
	 *
	 */
	SocialButtonView = ViewExtension.extend({

		cName: 'SocialButtonView',

		namespace: 'social button',

		template: template,

		tagName: 'li',

		serialize: function () {
			return {
				className: this.model.get('className'),
				title: this.model.get('title'),
				url: this.model.get('url'),
				icon: this.model.get('icon')
			};
		}

	});

module.exports = SocialButtonView;
