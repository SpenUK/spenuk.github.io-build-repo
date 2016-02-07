'use strict';

var _ = require('underscore'),
	View = require('../../../extensions/view'),
	IntroView = require('../../../modules/intro/views/intro'),
	HeaderView = require('../../../modules/ui/views/header'),
	TransitionView = require('../../../modules/pagetransitions/views/pagetransitions'),
	UIModel = require('../../../modules/ui/models/ui'),
	template = require('../../../modules/master/templates/master.hbs'),

	MasterView = View.extend({

		el: 'body',

		template: template,

		initialize: function(){

			this.state = (window.location.hash.length >= 1) ? 'content-state' : 'intro-state';

			this.uiModel = new UIModel();

			this._super.apply(this, arguments);

			this.setListeners();

			// $(document).on('keydown', function(e){
			// 	if (e.which === 39) {
			// 		window.Backbone.trigger('page:nextContent');
			// 	} else if (e.which === 37) {
			// 		window.Backbone.trigger('page:prevContent');
			// 	} else {
			// 		return;
			// 	}
			// });
		},

	  	views: function () {
	  		return {
	  			'.header': {
	  				view: HeaderView,
	  				options: {
	  					model: this.uiModel
	  				}
	  			},
	  			'.landing': IntroView,
	  			'.transition-container': TransitionView
	  		};
	  	},

	  	render: function(){
	  		this._super.apply(this, arguments);

	  		this.$page = this.$el.find('.page-wrap');
	  		this.transitionView = this.subviewInstances.findWhere({key: '.transition-container'}).get('view');
	  	},

	  	showContent: function() {
			this.$page.addClass('content-state').removeClass('intro-state');
			this.state = 'content-state';
		},

		showIntro: function() {
			this.$page.addClass('intro-state').removeClass('content-state');
			 this.state =  'intro-state';
		},

		serialize: function () {
			return _.extend({}, this._super(), {
				state: this.state || 'intro-state'
			});
		},

		setContent: function (ViewDefinition, options) {
			var View, viewOptions;

			options = options || {};

			ViewDefinition = this._expandViewDefinition(ViewDefinition);

			View = ViewDefinition.View;
            viewOptions = _.extend({}, ViewDefinition.options, {
            	master: this,
				el: options.el || '.content-wrapper .content'
			});

			if (this.currentContentClass !== View) {
				this.currentContentClass = View;
				this.currentContentView = new View(viewOptions);
			}

			window.Backbone.trigger('ui:showContent');
		},

		transition: function (ViewDefinition, options) {
			var View, resourceId;

			options = options || {};

			resourceId = options.resourceId || null;

			ViewDefinition = this._expandViewDefinition(ViewDefinition);

			View = ViewDefinition.View;

            ViewDefinition.options = _.extend({}, ViewDefinition.options, {
            	master: this,
            	uiModel: this.uiModel,
				el: options.el || '.content-wrapper .content'
			});

			this.transitionView.transition(ViewDefinition, {
				noTransition: !this.shouldTransition(resourceId)
			});

			this.currentResourceId = resourceId;

			window.Backbone.trigger('ui:showContent');
		},

		shouldTransition: function (resourceId) {
			var matchingResourceId = !this.currentResourceId || resourceId === this.currentResourceId,
				contentState = this.state === 'content-state';

			return !matchingResourceId && contentState;
		},

		// swiperUp: function(){
		// 	if (!this.swiperUpReady()) { return false; }
		// 	this.showIntro();
		// },

		// swiperDown: function(){
		// 	if (!this.swiperDownReady()) { return false; }
		// 	this.showContent();
		// 	this.goToCurrentContent();
		// },

		// swiperLeft: function(){
		// 	if (!this.swiperLeftReady()) { return false; }
		// 	this.nextContent();
		// },

		// swiperRight: function(){
		// 	if (!this.swiperRightReady()) { return false; }
		// 	this.prevContent();
		// },

		// swiperUpReady: function(){
		// 	return false;
		// 	// return $('body.content .content-main').scrollTop() <= 0;
		// },

		// swiperDownReady: function(){
		// 	return $('body.intro').length >= 1;
		// },

		// swiperLeftReady: function(){
		// 	return true;
		// },

		// swiperRightReady: function(){
		// 	return true;
		// },

		setListeners: function(){

		// 	var transitions = this.transitions;

		// 	function render(content){transitions.render(content);}

			this.listenTo(window.Backbone, 'ui:showContent', this.showContent);
			this.listenTo(window.Backbone, 'ui:showIntro', this.showIntro);
			// this.listenTo(window.Backbone, 'page:setNamespace', this.setNamespace);
			// this.listenTo(window.Backbone, 'page:nextContent', this.nextContent);
			// this.listenTo(window.Backbone, 'page:prevContent', this.prevContent);

		// 	this.listenTo(window.Backbone, 'swiper:up', this.swiperUp);
		// 	this.listenTo(window.Backbone, 'swiper:down', this.swiperDown);
		// 	this.listenTo(window.Backbone, 'swiper:left', this.swiperLeft);
		// 	this.listenTo(window.Backbone, 'swiper:right', this.swiperRight);

		}
	});

module.exports = MasterView;