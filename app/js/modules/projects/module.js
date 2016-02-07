'use strict';

var ProjectsCollection = require('./collections/projects'),
	ProjectView = require('./views/project'),

	ProjectsModule = {

		getProjectView: function (slug) {
			return {
				view: ProjectView,
				options: {
					module: this,
					collection: this.getProjectsCollection(),
					slug: slug
				}
			};
		},

		getProjectsCollection: function () {
			if (!this.projectsCollection) {
				this.projectsCollection = new ProjectsCollection();
			}

			return this.projectsCollection;
		},

		getCurrentRoute: function () {
			var collection = this.getProjectsCollection(),
				model = collection.getCurrentModel(),
				slug = model ? model.getSlug() : '';

			return '/projects/' + slug;
		}

	};

module.exports = ProjectsModule;