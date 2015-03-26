'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		this.template = options.template;
		this.initialized = true;
	},
	render: function(options){
		this.$el.html(this.template(options));
		window.Backbone.trigger('ui:showContent');
		return this;
	},
	setListeners: function(){
		// 
	}
});