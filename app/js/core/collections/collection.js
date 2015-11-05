'use strict';
/*jshint bitwise: false*/

// var _ = require('underscore'),
var Backbone = require('backbone'),

    CoreCollection = Backbone.Collection.extend({

        status: 'initialized',

    	initialize: function() {
    		this._super.apply(this, arguments);

    		this.listenTo(this, 'sync', this.onReady);
    	},

    	onReady: function () {
    		this.status = 'ready';
    		this.trigger('ready');
    	},

    	isReady: function () {
    		return this.status === 'ready';
    	}
    });

module.exports = CoreCollection;