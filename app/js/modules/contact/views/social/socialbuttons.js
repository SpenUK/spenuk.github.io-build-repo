'use strict';

var CollectionViewExtension = require('../../../../extensions/collectionview'),

	SocialButtonView = require('./socialbutton'),
	template = require('../../templates/social/socialbuttons.hbs'),

	/**
	 *
	 */
	SocialButtonsView = CollectionViewExtension.extend({

		cName: 'SocialButtonsView',

		namespace: 'social buttons',

		itemView: SocialButtonView,

		template: template

	});

module.exports = SocialButtonsView;
