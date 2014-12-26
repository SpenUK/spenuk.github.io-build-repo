'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

	return function(Module){
		console.log('SidePanel required');
		var sidePanelModel = new Module.Extensions.SidePanelModel;
		console.log('sidePanelModel', sidePanelModel);

		var SidePanelView = Backbone.View.extend({
			model: sidePanelModel,
			el: '.side-panel__wrapper',

			initialize: function(){
				var parentScope = this;
				this.render();	
				this.model.on('change', function(){
					parentScope.render();
				});
			},
			events: {
				'click .remove': 'disableTag',
	  		'click .add': 'enableTag'
			},
			enableTag: function(tag){
		  	var tag = $(tag.target).closest('.tag').find('.tag-title').text();
		  	// Backbone.trigger('blog:filterTags');
		  	this.model.enableTag(tag);
		  },
		  disableTag: function(tag){
				var tag = $(tag.target).closest('.tag').find('.tag-title').text();
				// Backbone.trigger('blog:disableTag');
				this.model.disableTag(tag);
		  },
			template: Handlebars.templates['sidePanel.hbs'],
			render: function(){
				var html = this.template(this.model.toJSON());
				this.$el.html(html);
			}

		});

		return SidePanelView;
	}
});