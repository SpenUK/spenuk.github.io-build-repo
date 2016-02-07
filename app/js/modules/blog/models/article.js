'use strict';

var ModelExtension = require('../../../extensions/model'),

	BlogModel = ModelExtension.extend({

		getSlug: function () {
			return this.get('slug').toLowerCase();
		},

		getRoute: function () {
           return '#/blog/' + this.get('slug');
        }

	});

module.exports = BlogModel;
