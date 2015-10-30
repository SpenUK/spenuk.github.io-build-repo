'use strict';

var ViewExtension = require('../../../extensions/view'),
	template = require('../templates/blogpost.hbs'),

	BlogPostView = ViewExtension.extend({

		namespace: 'blog post',

		template: template,

		render: function() {
			this.$el.html(this.template(this.serialize()));

			return this;
		},

		serialize: function () {
			return {
				title: this.model.get('title'),
				content: this.model.get('content')
			};
		}

	});

module.exports = BlogPostView;
