'use strict';

module.exports = window.Backbone.View.extend({	
	stringToRender: function(options){
		options = (options || {});
		if (options.error) {
			return this.template({error: true});
		}
		return this.template({attributes: this.collection.currentRecord.attributes});
	},
	render: function(options){
		options = (options || {});

		// var view = this,
		var collection = this.collection;
		
		if (!this.collection.length) {
			this.$el.html(this.template());

			window.Backbone.trigger('ui:showContent');
			window.Backbone.trigger('ui:updatePrev');
			window.Backbone.trigger('ui:updateNext');
			window.Backbone.trigger('page:setNamespace', this.namespace);
			this.fetchRender(options);

		} else {
 
			if (options.slug && collection.where({slug: options.slug}).length) {
				collection.setCurrentRecord({slug: options.slug});
			} else {
				
			}

			if (options.transition) {
				window.Backbone.trigger('transition:render', this.stringToRender() );	
			} else {
				this.$el.html(this.stringToRender());	
			}	
			window.Backbone.trigger('ui:showContent');
			window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
			window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});
			window.Backbone.trigger('page:setNamespace', this.namespace );
		}

		return this;
	},
	fetchRender: function(options){
		var view = this,
				collection = this.collection;
		if (!collection.stubbed) { // to be set to something more meaningful when an api is available
			collection.fetch({
  			remove: false,
  			dataType: (collection.jsonp ? 'jsonp':'json'),
  			timeout : 5000,
				success: function(){
					if (options.slug && collection.where({slug: options.slug}).length) {
						collection.setCurrentRecord({slug: options.slug});
					} else {
						collection.setCurrentRecord({slug: collection.defaultSlug()});
					}

					window.Backbone.trigger('ui:updatePrev', {link: view.prevRoute()});
					window.Backbone.trigger('ui:updateNext', {link: view.nextRoute()});
					window.Backbone.trigger('page:setNamespace', view.namespace );

					window.Backbone.trigger('transition:render', view.stringToRender() );		

				},
				error: function(){
					window.Backbone.trigger('transition:render', view.stringToRender({error: true}));	
				}
			});
		} else {
			collection.addStubs({success: function(){

				if (options.slug && collection.where({slug: options.slug}).length) {
					collection.setCurrentRecord({slug: options.slug});
				} else {
					collection.setCurrentRecord(collection.first());
				}

				window.Backbone.trigger('router:redirect', view.defaultRoute());

				window.Backbone.trigger('ui:showContent');
				window.Backbone.trigger('ui:updatePrev', {link: view.prevRoute()});
				window.Backbone.trigger('ui:updateNext', {link: view.nextRoute()});
				window.Backbone.trigger('page:setNamespace', view.namespace );


				window.Backbone.trigger('transition:render', view.stringToRender() );	

			}});
		}
	},
	setCurrent: function(slug){
		this.collection.setCurrentRecord({slug:slug});

		return this;
	},
	getNextModel: function(){
		return this.collection.getNextModel();
	},
	getPrevModel: function(){
		return this.collection.getPrevModel();
	},
	nextRoute: function(){
		var model = this.collection.getNextModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	prevRoute: function(){
		var model = this.collection.getPrevModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	checkSlug: function(slug){
		return this.collection.checkSlug(slug);
	},
	defaultSlug: function(){
		return this.collection.defaultSlug();
	},
	defaultRoute: function(){
		return '/'+ this.namespace +'/' + this.defaultSlug();
	}
});