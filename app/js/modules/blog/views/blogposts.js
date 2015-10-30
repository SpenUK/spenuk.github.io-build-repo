'use strict';


var CollectionViewExtension = require('../../../extensions/collectionview'),
	BlogModule = require('../module'),
	BlogPostView = require('./blogpost'),
	template = require('../templates/blogposts'),

	BlogPostsView = CollectionViewExtension.extend({

		namespace: 'blog posts',
		
		itemView: BlogPostView,

		template: template,

		initialize: function(options){
			console.log(BlogModule);
			this.collection = BlogModule.getBlogPostsCollection();

			// This pattern could be a lot better...
			var Super = this._super;

			if (this.collection.isReady()) {
				this.collection.setCurrentModel({slug: options.slug});
				Super.apply(this, arguments);
			} else {
				this.listenToOnce(this.collection, 'sync', function(){
					this.collection.setCurrentModel({slug: options.slug});
					Super.apply(this, arguments);
				});
			}
		},

		render: function () {
            this._super.apply(this, arguments);

            window.Backbone.trigger('ui:showContent');
            window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
			window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});
            window.Backbone.trigger('page:setNamespace', this.namespace );
            return this;
        },

        nextRoute: function(){
			var model = this.collection.getNextModel();
			return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
		},
		prevRoute: function(){
			var model = this.collection.getPrevModel();
			return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
		}

	});

module.exports = BlogPostsView;
