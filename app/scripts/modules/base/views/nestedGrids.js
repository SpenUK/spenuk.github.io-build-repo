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
				var html = this.$el.html(this.template());
				App.Transitions.render(html).appear();

			},
			template: JST['layout/nestedGrids'],
			setListeners: function(){
				// 
			}
		});
		return nestedGridTest;
	}

});
