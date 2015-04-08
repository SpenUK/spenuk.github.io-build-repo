'use strict';

module.exports = window.Backbone.View.extend({	
	setCurrent: function(slug){
		slug = (slug || '');

		if (!this.checkSlug(slug)) {
			this.currentRecord = this.collection.first();
			this.position = 0;
		} else {
			this.currentRecord = this.collection.where({slug: slug})[0];
			this.position = this.collection.indexOf(this.currentRecord);			
		}

		return this;
	},
	stringToRender: function(){
		return this.template({attributes: this.currentRecord.attributes});
	},
	render: function(options){
		var view = this;
		options = options;

		if (!this.collection.length) {
			this.$el.html(this.template());

			window.Backbone.trigger('ui:showContent');
			window.Backbone.trigger('ui:updatePrev');
			window.Backbone.trigger('ui:updateNext');
			window.Backbone.trigger('page:setNamespace', this.namespace);
			this.fetchRender(options);

		} else {
 
			if (options.slug && this.collection.where({slug: options.slug}).length) {
				this.currentRecord = this.collection.where({slug: options.slug})[0];
				this.position = this.collection.indexOf(this.currentRecord);
			} else {
				window.Backbone.trigger('router:redirect', view.defaultRoute());
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
		console.log('fetch render');
		var view = this;
		if (false) {
			this.collection.fetch({
  			remove: false,
				success: function(){

					if (options.slug && view.collection.where({slug: options.slug}).length) {
						view.currentRecord = view.collection.where({slug: options.slug})[0];
						view.position = view.collection.indexOf(view.currentRecord);
					}

					window.Backbone.trigger('transition:render', view.stringToRender() );		

				},
				error: function(){
					view.addStubs({success: function(){

						if (options.slug && view.collection.where({slug: options.slug}).length) {
							view.currentRecord = view.collection.where({slug: options.slug})[0];
							view.position = view.collection.indexOf(view.currentRecord);
						}

						window.Backbone.trigger('transition:render', view.stringToRender() );	

					}});
				}
			});
		} else {
			this.addStubs({success: function(){

				if (options.slug && view.collection.where({slug: options.slug}).length) {
					view.currentRecord = view.collection.where({slug: options.slug})[0];
					view.position = view.collection.indexOf(view.currentRecord);
				} else {
					view.currentRecord = view.collection.first();
					view.position = view.collection.indexOf(view.currentRecord);
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
	addStubs: function(options){
		options = (options || {});
		var view = this;
		console.log('adding stubs', view.stubs);

		window.setTimeout(function(){
			var i,response = view.getRecordsFromResponse(view.stubs);

			for (i = response.length - 1; i >= 0; i--) {
				var record = response[i];
				if (!view.collection.where({ID: record.ID}).length) {
					console.log('adding', i);
					view.collection.add(record);
				} else {
					console.log('not adding');
				}
			}	
			(options.success || $.noop)();

		}, 500); // faking async

		return this;
	},
	getRecordsFromResponse: function(response){
		return response;
	},
	getNextModel: function(){
		var collection = this.collection;
		return collection.at((this.position +1 > collection.length -1)?  false : this.position + 1);
	},
	getPrevModel: function(){
		var collection = this.collection;
		return collection.at((this.position -1 < 0) ? false : this.position - 1);
	},
	nextRoute: function(){
		var model = this.getNextModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	prevRoute: function(){
		var model = this.getPrevModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	checkSlug: function(slug){
		return (this.collection.where({slug: slug}).length >= 1);
	},
	defaultSlug: function(){
		console.log(this.currentRecord, this.collection);
		return this.currentRecord ? this.currentRecord.get('slug') : this.collection.first().get('slug');
	},
	defaultRoute: function(){
		return '/'+ this.namespace +'/' + this.defaultSlug();
	}
});