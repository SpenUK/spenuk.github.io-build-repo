'use strict';

var ViewExtension = require('../../../extensions/view'),
	SocialWatermarksView = require('./socialwatermarks/socialwatermarks'),
	HeroSVGView = require('./herosvg/herosvg'),
	template = require('../templates/intro.hbs'),

	IntroView = ViewExtension.extend({

		cName: 'IntroView',

		namespace: 'intro',

		template: template,

		initialize: function(){
			this._super.apply(this, arguments);
			this.render();
		},

		render: function(){
			this._super.apply(this, arguments);
			window.Backbone.trigger('page:setNamespace', this.namespace);
		},

		views: function () {
			return {
				'.social-watermarks': SocialWatermarksView,
				'.hero-svg': HeroSVGView
			};
		},

		setListeners: function(){
			//
		}

	});

module.exports = IntroView;