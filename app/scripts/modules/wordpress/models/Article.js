'use strict';

define([
  // 'jquery',
  'underscore',
  'backbone',
], function( _, Backbone) {

	
	console.log('Article Model');

	var ArticleModel = Backbone.Model.extend({
		rendered: false,
		initialize: function(){
		}

	});
	return ArticleModel;
});