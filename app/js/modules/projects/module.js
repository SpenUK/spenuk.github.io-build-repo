'use strict';

var ProjectsCollection = require('./collections/projects'),

ProjectsModule = {
	getProjectsCollection: function () {
		return this.projectsCollection ? this.projectsCollection : new ProjectsCollection();
	}
};

module.exports = ProjectsModule;