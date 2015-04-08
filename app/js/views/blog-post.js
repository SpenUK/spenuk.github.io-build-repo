'use strict';

var stubs = require('../blog-post-stubs.js');
var Collection = require('../collections/blog-posts.js');
var CollectionView = require('./collection-view.js');

module.exports = CollectionView.extend({
	namespace: 'blog',
	initialize: function(options){
		this.collection = new Collection();
		this.initialized = true;
		this.stubs = stubs;
		
		this.template = options.template;

		return this;
	},
	getRecordsFromResponse: function(response){
		return response.posts;
	},
});