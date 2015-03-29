'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'intro',
	initialize: function(options){
		options = options || {};
		this.template = options.template;
		this.render(options);
	},
	render: function(options){
		options = options;
		console.log('rendering intro');
		this.$el.html(this.template());
		window.Backbone.trigger('page:setNamespace', this.namespace);

	},
	setListeners: function(){
		// 
	}
});