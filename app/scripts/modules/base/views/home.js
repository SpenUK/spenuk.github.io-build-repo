'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

	return function (Module) {

		var homeView = Backbone.View.extend({
			// el: 'div.homepage',
			init: function(options){
				options = (typeof options === 'undefined')? {} : options;
				this.render(options);
			},
			render: function(options){
				console.log('Home View Render');
				var html = this.$el.html(this.template());
				
				if (typeof options.animation !== 'undefiend' && typeof App.Transitions[options.animation] !== 'undefined') {
					console.log('animation option defined');
					App.Transitions.render(html)[options.animation]();
				} else {
					console.log('animation option undefined');
					App.Transitions.render(html).appear();
				}

			},
			template: JST['layout/homepage'],
			setListeners: function(){
				// 
			}
		});
		return homeView;
	}

});
