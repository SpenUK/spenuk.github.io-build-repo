'use strict';

module.exports = window.Backbone.View.extend({
	el: '.header',
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
		this.render({});
		this.setListeners();
		console.log('header view');
	},
	render: function(options){
		this.$el.html(this.template(options));

    // console.log('header rendered');
	},
	events: {
		'click .show-content': 'showContent',
		'click .show-intro': 'showIntro'
  },
  showContent: function(){
  	window.Backbone.trigger('ui:showContent');
  },
  showIntro: function(){
		window.Backbone.trigger('ui:showIntro');
  },
  updateUiPrev: function(options){
    options = options || {};
  	var prev = '.go-prev';
  	var $prev = this.$el.find(prev);
  	if (options.link) {
  		$prev.removeClass('hide').attr('href', options.link);
  	} else {
  		$prev.addClass('hide').attr('href', '#');
  	}
  },
  updateUiNext: function(options){
    options = options || {};
  	var next = '.go-next';
  	var $next = this.$el.find(next);
  	if (options.link) {
  		$next.removeClass('hide').attr('href', options.link);
  	} else {
  		$next.addClass('hide').attr('href', '#');
  	}
  },
	setListeners: function(){
		// 
		this.listenTo(window.Backbone, 'ui:updatePrev', this.updateUiPrev);
		this.listenTo(window.Backbone, 'ui:updateNext', this.updateUiNext);
	}
});