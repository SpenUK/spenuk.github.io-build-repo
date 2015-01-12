'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

	return function (Module) {

		var nestedGridTest = Backbone.View.extend({
			// el: 'div.homepage',
			init: function(){
				this.render();
			},
			render: function(){
				console.log('===');
				App.Transitions.appear(this.$el.html(this.template()));
			},
			template: JST['layout/nestedGrids'],
			setListeners: function(){
				// 
			}
		});
		return nestedGridTest;
	}

});
