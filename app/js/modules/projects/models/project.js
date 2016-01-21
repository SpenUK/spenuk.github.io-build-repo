'use strict';

var ModelExtension = require('../../../extensions/model'),

	ProjectModel = ModelExtension.extend({

		getSlug: function () {
			return this.get('slug').toLowerCase();
		}

	});

module.exports = ProjectModel;
