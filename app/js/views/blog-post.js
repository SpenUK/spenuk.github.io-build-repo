'use strict';

var articleStubs = require('../blog-post-stubs.js');
var ArticleCollection = require('../collections/blog-posts.js');

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		var collection = this.collection = new ArticleCollection();
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

		window.Backbone.trigger('ui:updateHeader', {
			prevLink: this.prevRoute(),
			nextLink: this.nextRoute()
		});

		window.Backbone.trigger('ui:showContent');

		this.$el.html(this.stringToRender());
		return this;
	},
	setListeners: function(){
		// 
	},
	addStubs: function(){
		var collection = this.collection;
		var i,response = articleStubs;
		for (i = response.posts.length - 1; i >= 0; i--) {
			var record = response.posts[i];
			if (!collection.where({ID: record.ID}).length) {
				collection.add(record);
			}
		}

		return this;
	},
	nextRoute: function(){
		var collection = this.collection;
		var targetIndex = (this.position +1 > collection.length -1)?  0 : this.position + 1;
		var nextSlug = collection.at(targetIndex).get('slug');
		return '#/blog/' + nextSlug;
	},
	prevRoute: function(){
		var collection = this.collection;
		var targetIndex = (this.position -1 < 0) ? collection.length -1 : this.position - 1;
		var prevSlug = collection.at(targetIndex).get('slug');
		return '#/blog/' + prevSlug;
	},
	checkSlug: function(slug){
		return (this.collection.where({slug: slug}).length >= 1);
	},
	defaultSlug: function(){
		return this.currentRecord ? this.currentRecord.get('slug') : this.collection.first().get('slug');
	},
	defaultRoute: function(){
		return '/blog/' + this.defaultSlug();
	}
});

