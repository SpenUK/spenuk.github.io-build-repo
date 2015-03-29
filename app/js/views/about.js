'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'about',
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
	},
	render: function(options){

		console.log('render about');

		window.Backbone.trigger('ui:showContent');
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');

		return this;
	},
	setListeners: function(){
		// 
	}
});