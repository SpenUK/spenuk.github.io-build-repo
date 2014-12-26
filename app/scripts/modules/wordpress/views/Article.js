'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

	return function (Module){
		console.log('Article View');

		// RESPONSABILITY NOTES:
		// Not responsible for tracking current article - that would cause heavy for-looping later.
		// This should be moved out into the main wordpress view.

		var ArticleView = Backbone.View.extend({

		  initialize: function(options){
		  		console.log('article view inited');
		  		console.log(options.before);
		  		console.log(options.model);
		  		var parentScope = this;
		  		this.container = (typeof options.container != 'undefined') ? options.container : '#wp-viewport';
		    	this.render(options.before);
		    	this.listenTo(Backbone, 'scroll:position', this.scrollHandler);
		    	// fires function once to determine active, as by default all are given the out-of-focus class.
		    	this.model.bind("change:selected", function(model){
		    		if (model.get('selected')) {
		    			parentScope.$el.find('.wp-post__wrapper').removeClass('out-of-focus');
		    		} else {
		    			parentScope.$el.find('.wp-post__wrapper').addClass('out-of-focus');
		    		};
		    	});	

		  },
		  container: '#wp-viewport',
		  template: Handlebars.templates['article.hbs'],
		  
		  render: function(before){
		  	var parentScope = this;
		  	var html = this.template(this.model.toJSON());

		  	this.$el.html(html);
		  	if (typeof before != 'undefined' && before) {
		  		var scrollY = window.scrollY;
		  		this.$el.prependTo(this.container);
		  		var h = this.$el.height();
		  		$(window).scrollTop(scrollY + h);
		  	} else {
		  		this.$el.appendTo(this.container);
		  	};
		    
		  }

		});

		return ArticleView;
	}
});