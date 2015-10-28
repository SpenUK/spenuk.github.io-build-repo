'use strict';

var CollectionViewExtension = require('../../../../extensions/collectionview'),
// var ViewExtension = require('../../../../extensions/view'),
	Collection = require('../../../../extensions/collection'),
	SocialWatermarkView = require('./socialwatermark'),
	template = require('../../templates/socialwatermarks/socialwatermarks'),

	SocialWatermarksView = CollectionViewExtension.extend({
	// SocialWatermarksView = ViewExtension.extend({

		cName: 'SocialWatermarksView',

		namespace: 'social watermarks',

		itemView: SocialWatermarkView,

		template: template,

		initialize: function(){
			this.collection = new Collection([
				{
					title: 'twitter',
					url: 'https://twitter.com/Spen_Taylor',
					icon: 'fa-twitter'
				}, {
					title: 'github',
					url: 'https://github.com/SpenUK',
					icon: 'fa-github'
				}, {
					title: 'linkedin',
					url: 'http://uk.linkedin.com/',
					icon: 'fa-linkedin'
				}, {
					title: 'dribbble',
					url: 'https://www.dribbble.com/',
					icon: 'fa-dribbble'
				}
			]);
			this.initialized = true;
			this._super.apply(this, arguments);
		}

	});

module.exports = SocialWatermarksView;
