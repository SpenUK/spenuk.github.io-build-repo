'use strict';

var ProjectsCollection = require('./collections/projects'),
	// ProjectsView = require('./views/projects'),

	ProjectsModule = {

		getProjectsCollection: function () {
			if (!this.projectsCollection) {
				console.log('new collection');
				this.projectsCollection = new ProjectsCollection();
			} else {
				console.log('straight return');
			}

			return this.projectsCollection;
		}
	};

module.exports = ProjectsModule;