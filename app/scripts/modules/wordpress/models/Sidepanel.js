'use strict';

define([
  // 'jquery',
  'underscore',
  'backbone',
], function( _, Backbone) {

	return function (Module) {
		console.log('SidePanel Model');

		var SidePanel = Backbone.Model.extend({
			initialize: function(){
				this.set('activeTags', {});
				this.set('disabledTags', {});
				this.listenTo(Backbone, 'blog:addNewTags', this.setTags);
				window.poop = this;
			}
		});
		return SidePanel;
	}
});