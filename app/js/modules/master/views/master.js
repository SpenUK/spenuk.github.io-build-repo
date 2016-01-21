'use strict';

var _ = require('underscore'),
	View = require('../../../extensions/view'),
	IntroView = require('../../../modules/intro/views/intro'),
	HeaderView = require('../../../modules/ui/views/header'),
	TransitionView = require('../../../modules/pagetransitions/views/pagetransitions'),
	template = require('../../../modules/master/templates/master.hbs'),

	scrollTracker = require('../../../helpers/scroll-tracker'),

	MasterView = View.extend({

		el: 'body',

		template: template,

		initialize: function(){

			this.state = (window.location.hash.length >= 1) ? 'content-state' : 'intro-state';

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

		events: {
			'click .show-content': 'goToCurrentContent',
			'click .go-prev': 'prevContent',
			'click .go-next': 'nextContent'
			// 'click .show-intro': 'showIntro'
	  	},

	  	views: function () {
	  		return {
	  			'.header': HeaderView,
	  			'.landing': IntroView,
	  			'.transition-container': TransitionView
	  		};
	  	},

	  	render: function(){
	  		this._super.apply(this, arguments);

	  		this.$page = this.$el.find('.page-wrap');
	  		this.transitionView = this.subviewInstances.findWhere({key: '.transition-container'}).get('view');

	  		scrollTracker.initialize();
	  	},

	  	showContent: function() {
			this.$page.addClass('content-state').removeClass('intro-state');
		},

		showIntro: function() {
			this.$page.addClass('intro-state').removeClass('content-state');
		},

		serialize: function () {
			return _.extend({}, this._super(), {
				state: this.state || 'intro'
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

			console.log(viewOptions);

			if (this.currentContentClass !== View) {
				console.log('new view');
				this.currentContentClass = View;
				this.currentContentView = new View(viewOptions);
			}

			window.Backbone.trigger('ui:showContent');
		},

		transition: function (ViewDefinition, options) {
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

			this.transitionView.transition(ViewDefinition);

			window.Backbone.trigger('ui:showContent');
		},

		// setNamespace: function(namespace) {
		// 	document.body.className = $.trim(
		// 		document.body.className.split(' ').filter(function(c) {
		// 			return c.lastIndexOf('page-', 0) !== 0;
		// 		}).join(' ') + ' page-' +namespace );
		// },

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

		// nextContent: function(e){
		// 	console.log('nextContent');
		// 	// if (e) { e.preventDefault(); }
		// 	// if (this.transitions.animating) {return false;}
		// 	// this.transitions.direction = 'next';
		// 	// window.Backbone.trigger('router:nextContent');
		// 	if (this.transitions.animating) {
		// 		if (e) {
		// 			console.log('is animating with e');
		// 			e.preventDefault();
		// 		} else {
		// 			console.log('is animating no e');
		// 		}
		// 	}
		// },

		// prevContent: function(e){
		// 	console.log('prevContent', this.transitions.animating);
		// 	if (e) { e.preventDefault(); }
		// 	if (this.transitions.animating) {return false;}
		// 	this.transitions.direction = 'prev';
		// 	window.Backbone.trigger('router:prevContent');
		// },

	  	// goToCurrentContent: function(){
	  	// 	window.Backbone.trigger('router:goToCurrentContent');
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


		// 	this.listenTo(window.Backbone, 'transition:render', render);

		}
	});

module.exports = MasterView;