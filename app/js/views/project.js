'use strict';

// var Collection = require('../collections/projects.js');
// var CollectionView = require('./collection-view.js');

var Collection = require('../modules/projects/collections/projects.js');
var CollectionView = require('../extensions/collectionview');

module.exports = CollectionView.extend({

	cName: 'projects',

	namespace: 'projects',

	initialize: function(options){
		this.collection = new Collection();
		this.initialized = true;
		this.template = options.template;
	}
});