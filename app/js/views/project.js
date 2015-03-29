'use strict';

var projectStubs = require('../projects-stubs.js');
var ProjectCollection = require('../collections/projects.js');

module.exports = window.Backbone.View.extend({
	namespace: 'projects',
	initialize: function(options){
		var collection = this.collection = new ProjectCollection();
		// collection = collection;
		this.initialized = true;

		this.addStubs();
		this.template = options.template;


		if (!this.checkSlug(options.slug)) {
			var latest = collection.first();

			this.currentRecord = latest;
			this.position = 0;
		} else {

			this.currentRecord = collection.where({slug: options.slug})[0];
			this.position = collection.indexOf(this.currentRecord);			
		}

		return this;
	},
	stringToRender: function(){
		return this.template(this.currentRecord.attributes);
	},
	render: function(options){

		if (options.slug && this.collection.where({slug: options.slug})) {
			this.currentRecord = this.collection.where({slug: options.slug})[0];
			this.position = this.collection.indexOf(this.currentRecord);
		}

		window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
		window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});

		if (options.transition) {
			window.Backbone.trigger('transition:render', { content: this.stringToRender()});	
		} else {
			this.$el.html(this.stringToRender());	
		}

		window.Backbone.trigger('ui:showContent');
		return this;
	},
	setListeners: function(){
		// 
	},
	addStubs: function(){
		var collection = this.collection;
		var i,response = projectStubs;
		for (i = response.length - 1; i >= 0; i--) {
			var record = response[i];
			if (!collection.where({ID: record.ID}).length) {
				collection.add(record);
			}
		}

		return this;
	},
	getNextModel: function(){
		var collection = this.collection;
		var targetIndex = (this.position +1 > collection.length -1)?  0 : this.position + 1;
		return collection.at(targetIndex);
	},
	getPrevModel: function(){
		var collection = this.collection;
		var targetIndex = (this.position -1 < 0) ? collection.length -1 : this.position - 1;
		return collection.at(targetIndex);
	},
	nextRoute: function(){
		return '#/'+ this.namespace +'/' + this.getNextModel().get('slug');
	},
	prevRoute: function(){
		return '#/'+ this.namespace +'/' + this.getPrevModel().get('slug');
	},
	checkSlug: function(slug){
		return (this.collection.where({slug: slug}).length >= 1);
	},
	defaultSlug: function(){
		console.log(this.collection);
		return this.currentRecord ? this.currentRecord.get('slug') : this.collection.first().get('slug');
	},
	defaultRoute: function(){
		var thing = this.defaultSlug();
		console.log(thing);
		return '/projects/' + this.defaultSlug();
	}
});