'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

	return function (Module) {

		var homeView = Backbone.View.extend({
			// el: 'div.homepage',
			init: function(){
				this.render();
			},
			render: function(){
				console.log('===');
				App.Transitions.appear(this.$el.html(this.template()));
			},
			template: JST['layout/testpage'],
			setListeners: function(){
				// 
			}
		});
		return homeView;
	}

});
