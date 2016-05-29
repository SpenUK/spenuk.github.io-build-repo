'use strict';

var ViewExtension = require('../../../extensions/view'),
	SocialWatermarksView = require('./socialwatermarks/socialwatermarks'),
	HeroSVGView = require('./herosvg/herosvg'),
	template = require('../templates/intro.hbs'),

	// may need the modules to get the current routes for both projects and blog.
	// Need a graceful way to direct to them though.
	// blogModule = require('../../blog/module'),
    // projectsModule = require('../../projects/module'),
	IntroView = ViewExtension.extend({

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
		}

	});

module.exports = IntroView;