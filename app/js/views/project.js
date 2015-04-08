'use strict';

var stubs = require('../projects-stubs.js');
var ProjectCollection = require('../collections/projects.js');
var CollectionView = require('./collection-view.js');

module.exports = CollectionView.extend({	
	namespace: 'projects',
	initialize: function(options){
		this.collection = new ProjectCollection();
		this.initialized = true;
		this.stubs = stubs;

		this.template = options.template;

		return this;
	}
});