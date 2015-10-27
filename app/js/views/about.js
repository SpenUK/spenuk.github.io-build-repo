'use strict';

var View = require('../extensions/view'),

AboutView = View.extend({

	namespace: 'about',

	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
	},

	render: function(options){
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');
		window.Backbone.trigger('ui:showContent');
		window.Backbone.trigger('page:setNamespace', this.namespace );	

		return this;
	},

	setListeners: function(){
		// 
	}

});

module.exports = AboutView;
