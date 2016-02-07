'use strict';
/*jshint bitwise: false*/

var Backbone = require('backbone'),

    CoreModel = Backbone.Model.extend({

    	isReady: false,

    	initialize: function() {
            // Needs to be updated - assuming models don't fetch here.
    		this.onReady();
    	},

    	onReady: function () {
    		this.isReady = true;
    		this.trigger('ready');
    	}

    });

module.exports = CoreModel;