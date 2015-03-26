'use strict';

var templates = require('../templates.js');
var headerView = require('./ui/header.js');

module.exports = window.Backbone.View.extend({
	el: 'body',
	header: '.header',
	initialize: function(){
		// if (options && options.viewState) {
		// 	this.$el.addClass(options.viewState);
		// }
		this.$header = $(this.header);
		this.headerView = new headerView({template: templates['ui/header']});
		this.initialized = true;
		this.setListeners();

		console.log(this.$el);
	},
	events: {
		'click .show-content': 'goToCurrentContent'
		// 'click .show-intro': 'showIntro'
  },
  showContent: function() {

		$('body').addClass('content').removeClass('intro');
		// this.landingHandler();
	},
	showIntro: function() {
		$('body').addClass('intro').removeClass('content');
	},
  updateHeader: function(options){
  	this.$header.html(templates['ui/header'](options));
  },
  goToCurrentContent: function(){
  	window.Backbone.trigger('router:goToCurrentContent', '#/blog/second-post');
  },

  // landingHandler: function () {
  // 	console.log('first route');
  // 	this.landingHandler = function(){
  // 		console.log('second route');
  // 		$('.page-wrap').removeClass('block-transition');
  // 		this.landingHandler = function(){};
  // 	};
  // },
	setListeners: function(){
		// 
		this.listenTo(window.Backbone, 'ui:updateHeader', this.updateHeader);
		this.listenTo(window.Backbone, 'ui:showContent', this.showContent);
		this.listenTo(window.Backbone, 'ui:showIntro', this.showIntro);
	}
});