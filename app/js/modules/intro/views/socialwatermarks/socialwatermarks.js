'use strict';

var CollectionViewExtension = require('../../../../extensions/collectionview'),
// var ViewExtension = require('../../../../extensions/view'),
	// Collection = require('../../../../extensions/collection'),
	socialModule = require('../../../../modules/social/module'),
	SocialWatermarkView = require('./socialwatermark'),
	template = require('../../templates/socialwatermarks/socialwatermarks'),

	SocialWatermarksView = CollectionViewExtension.extend({
	// SocialWatermarksView = ViewExtension.extend({

		cName: 'SocialWatermarksView',

		namespace: 'social watermarks',

		itemView: SocialWatermarkView,

		template: template,

		initialize: function(){
			console.log(socialModule);
			this.collection = socialModule.getSocialCollection();
			this.initialized = true;
			this._super.apply(this, arguments);
		}

	});

module.exports = SocialWatermarksView;
