'use strict';

var CollectionViewExtension = require('../../../../extensions/collectionview'),
	socialModule = require('../../../../modules/social/module'),
	SocialButtonView = require('./socialbutton'),
	template = require('../../templates/social/socialbuttons'),

	/**
	 * 
	 */
	SocialButtonsView = CollectionViewExtension.extend({

		cName: 'SocialButtonsView',

		namespace: 'social buttons',

		itemView: SocialButtonView,

		template: template,

		initialize: function(){
			this.collection = socialModule.getSocialCollection();
			this._super.apply(this, arguments);
		}

	});

module.exports = SocialButtonsView;
