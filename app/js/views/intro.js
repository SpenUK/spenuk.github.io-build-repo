'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		options = options || {};
		this.template = options.template;
		this.render(options);
	},
	render: function(options){
		options = options;
		console.log('rendering intro');
		this.$el.html(this.template());
		$('body').addClass('intro').removeClass('content');

	},
	setListeners: function(){
		// 
	}
});