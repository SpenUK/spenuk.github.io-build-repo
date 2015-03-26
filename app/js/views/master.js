'use strict';

var templates = require('../templates.js');
var headerView = require('./ui/header.js');

module.exports = window.Backbone.View.extend({
	el: 'html',
	header: '.header',
	initialize: function(){

		// if (options && options.viewState) { 
		// 	this.$el.addClass(options.viewState);
		// }

		console.log('master');
		var state = (window.location.hash.length >= 1) ? 'content' : 'intro';
		this.render({state: state});

		this.$header = $(this.header);
		this.headerView = new headerView({template: templates['ui/header']});
		this.initialized = true;
		this.setListeners();

		
	},
	events: {
		'click .show-content': 'goToCurrentContent'
		// 'click .show-intro': 'showIntro'
  },
  render: function(options){
  	$('body').html(templates.master(options));
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

	setListeners: function(){
		// 
		this.listenTo(window.Backbone, 'ui:updateHeader', this.updateHeader);
		this.listenTo(window.Backbone, 'ui:showContent', this.showContent);
		this.listenTo(window.Backbone, 'ui:showIntro', this.showIntro);

	}
});