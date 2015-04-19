'use strict';

var Collection = require('../collections/blog-posts.js');
var CollectionView = require('./collection-view.js');

module.exports = CollectionView.extend({
	namespace: 'blog',
	initialize: function(options){
		this.collection = new Collection();
		this.initialized = true;
		this.template = options.template;

		window.test = this;

		return this;
	}
});