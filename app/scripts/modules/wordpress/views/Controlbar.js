'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'modules/wordpress/models/controlbar',
], function($, _, Backbone, ControlbarModel ) {

	return function (Module){
		console.log('Controlbar View');

		// RESPONSABILITY NOTES:
		// Not responsible for tracking current article
		// Shouldn't be responsible for much at all - instead it should just listen to events fired from wpView.
		// console.log(Module);

		var controlbarModel = new Module.Extensions.ControlbarModel({title: 'loading...'});

		var ControlBarView = Backbone.View.extend({
			el: $('#wp'),
			selector: '.blog-control-bar',
			model: controlbarModel,
			template: Handlebars.templates['controlBar.hbs'],
			hidden: false,
			initialize: function(){
				var parentScope = this;
				this.model.on('change', this.updateBar, this);
				this.render();
				this.listenTo(Backbone, 'blog:setCurrentArticle', this.setCurrentArticle);
				this.listenTo(Backbone, 'blog:articleSelected', function(model){
					parentScope.setCurrentArticleModel(model.toJSON());
				});	
				this.listenTo(Backbone, 'blog:hideControlBar', this.hideControlBar);	
				this.listenTo(Backbone, 'blog:showControlBar', this.showControlBar);	
			},
			setCurrentArticleModel: function(modelData){
				var parentScope = this;
				parentScope.model.set(modelData);
			},
			hideControlBar: function(){
		  	$(this.selector).slideDown(200);
		  },
		  showControlBar: function(){
		  	$(this.selector).slideUp(200);
		  },
		  updateBar: function(){
		  	this.render();
		  },
			render: function(){
				var html = this.template(this.model.attributes);
				$('#wp .blog-control-bar-bottom__wrapper .blog-control-bar').html(html);
			}
		});

		return ControlBarView;
	}
});