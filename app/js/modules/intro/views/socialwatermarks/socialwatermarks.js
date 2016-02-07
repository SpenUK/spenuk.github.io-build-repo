'use strict';

var CollectionViewExtension = require('../../../../extensions/collectionview'),
	socialModule = require('../../../../modules/social/module'),
	SocialWatermarkView = require('./socialwatermark'),
	template = require('../../templates/socialwatermarks/socialwatermarks.hbs'),

	SocialWatermarksView = CollectionViewExtension.extend({

		itemView: SocialWatermarkView,

		template: template,

		collection: socialModule.getSocialCollection()

	});

module.exports = SocialWatermarksView;
