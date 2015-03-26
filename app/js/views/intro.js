'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		options = (typeof options === 'undefined')? {} : options;
		this.render(options);
	},
	render: function(options){
		options = options;
		$('body').addClass('intro').removeClass('content');

	},
	template: '?',
	setListeners: function(){
		// 
	}
});