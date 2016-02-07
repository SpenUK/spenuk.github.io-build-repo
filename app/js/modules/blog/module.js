'use strict';

var ArticlesCollection = require('./collections/articles'),
	ArticleView = require('./views/article'),

	BlogModule = {

		getArticleView: function (slug) {
			return {
				view: ArticleView,
				options: {
					module: this,
					collection: this.getArticlesCollection(),
					slug: slug
				}
			};
		},

		getArticlesCollection: function () {
			if (!this.ArticlesCollection) {
				this.ArticlesCollection = new ArticlesCollection();
			}

			return this.ArticlesCollection;
		},

		getCurrentRoute: function () {
			var collection = this.getArticlesCollection(),
				model = collection.getCurrentModel(),
				slug = model ? model.getSlug() : '';

			return '/blog/' + slug;
		}
	};

module.exports = BlogModule;