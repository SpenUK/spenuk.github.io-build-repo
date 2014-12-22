'use strict';

define([
	'jquery',
	'underscore',
	'backbone'
],function($,_,Backbone){

		return {
			init: function () {
				console.log('Tets1 - Inited');
				this.setListeners();
			},
			setListeners: function () {
				console.log('Tets1 - Listeners Set');
			}
		};

});