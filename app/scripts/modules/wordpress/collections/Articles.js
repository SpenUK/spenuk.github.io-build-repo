'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'modules/wordpress/models/Article',
], function($, _, Backbone, ArticleModel) {

	return function (Module){
		// RESPONSABILITY NOTES:
		// Should keep track of the current 'fetch position', i.e. which article was last fetched to allow url params to be set.
		// Should track the current article - possibly by id? would allow easy next/prev functionality.

		var ArticlesCollection = Backbone.Collection.extend({
			
			model: ArticleModel,
			// urlParams: {},
			position: 0,
			totalRecords: 0,
			isLoading: false,
		  url: function(){
		  	// this URL should be built from defaults or config values
		  	// return 'http://public-api.wordpress.com/rest/v1/sites/' + 'ijustwanttotesttheapi.wordpress.com/' + this.postsExt(this.urlParams);
		  	return 'http://public-api.wordpress.com/rest/v1/sites/ijustwanttotesttheapi.wordpress.com/posts';
		  },
		  parse: function(response, xhr){
		  	this.totalRecords = response.found;
		    return response.posts
		  }
		});
		return ArticlesCollection;
	}
});