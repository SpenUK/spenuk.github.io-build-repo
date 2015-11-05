'use strict';

var ProjectsCollection = require('./collections/projects'),

	ProjectsModule = {
		getProjectsCollection: function () {
			if (!this.projectsCollection) {
				this.projectsCollection = new ProjectsCollection();
			}
			return this.projectsCollection;
		}
	};

module.exports = ProjectsModule;