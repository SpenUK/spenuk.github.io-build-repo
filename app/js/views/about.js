'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
	},
	render: function(options){
		window.Backbone.trigger('ui:showContent');
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:updateHeader');

		return this;
	},
	setListeners: function(){
		// 
	}
});