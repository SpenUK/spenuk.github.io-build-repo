'use strict';

var CollectionExtension = require('./collectionExtension.js');

module.exports = CollectionExtension.extend({
	
	// model: ArticleModel,
	position: 0,
	totalRecords: 0,
	isLoading: false,
  url: function(){
  	return 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts?callback=?';
  },
  parse: function(response){
  	this.totalRecords = response.found;
    return response.posts;
  },
  jsonp: true
});