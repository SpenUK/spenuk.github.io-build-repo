'use strict';
/*jshint bitwise: false*/

// var _ = require('underscore'),
var Backbone = require('backbone'),

    CoreModel = Backbone.Model.extend({

    	// For debugging shit
    	cName: 'CoreModel',

    	isReady: false,

    	initialize: function() {
    		this.onReady();
    	},

    	onReady: function () {
    		this.isReady = true;
    		this.trigger('ready');
    	}

    });

module.exports = CoreModel;