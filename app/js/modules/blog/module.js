'use strict';

var BlogPostsCollection = require('./collections/blogposts'),

	BlogModule = {
		getBlogPostsCollection: function () {
			return this.blogPostsCollection ? this.blogPostsCollection : new BlogPostsCollection();
		}
	};

module.exports = BlogModule;