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
				console.log('Home View Render');
				var html = this.$el.html(this.template());

				App.Transitions.render(html).appear();
			},
			template: JST['layout/homepage'],
			setListeners: function(){
				// 
			}
		});
		return homeView;
	}

});
