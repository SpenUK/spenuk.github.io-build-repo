'use strict';

var ModelExtension = require('../../../extensions/model'),

	ProjectModel = ModelExtension.extend({

		getSlug: function () {
			return this.get('slug').toLowerCase();
		},

		getRoute: function () {
           return '#/projects/' + this.get('slug');
        }

	});

module.exports = ProjectModel;
