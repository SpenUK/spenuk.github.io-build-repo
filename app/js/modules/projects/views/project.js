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



// 'use strict';

// var Collection = require('../collections/projects.js');
// var CollectionView = require('./collection-view.js');

// console.log(new Collection());

// module.exports = CollectionView.extend({	
// 	namespace: 'projects',
// 	initialize: function(options){
// 		this.collection = new Collection();
// 		this.initialized = true;
// 		this.template = options.template;

// 		return this;
// 	}
// });