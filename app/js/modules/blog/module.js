'use strict';

var BlogPostsCollection = require('./collections/blogposts'),

	BlogModule = {
		getBlogPostsCollection: function () {
			if (!this.blogPostsCollection) {
				this.blogPostsCollection = new BlogPostsCollection();
			}
			return this.blogPostsCollection;
		}
	};

module.exports = BlogModule;