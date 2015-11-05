'use strict';

var ViewExtension = require('../../../extensions/view'),
	template = require('../templates/project.hbs'),

	ProjectView = ViewExtension.extend({

		namespace: 'project',

		template: template,

		render: function() {
			this.$el.html(this.template(this.serialize()));

			return this;
		},

		serialize: function () {
			return {
				title: this.model.get('title'),
				content: this.model.get('content'),
				stack: this.model.get('stack'),
				ind: this.model.get('ind')
			};
		}
	});

module.exports = ProjectView;