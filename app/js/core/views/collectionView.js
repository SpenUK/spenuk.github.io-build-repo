'use strict';
/*jshint bitwise: false*/

var _ = require('underscore'),
    CoreView = require('./view'),
	CoreCollection = require('../collections/collection'),

    /**
     *
     */
    CollectionView = CoreView.extend({

        cName: 'CollectionView',

        /**
         * Set to true to allow updates to the collection without rendering
         */
        addSilently: false,

        collectionEl: null,

        ordered: true,

    	/**
    	 * Initialises as a collection
    	 */
    	renderedItems: null,

    	/**
    	 *
    	 */
    	initialize: function(options) {
            console.log(this.cName);
    		options = options || {};
    		this.renderedItems = new CoreCollection();
            this._super.apply(this, arguments);
    	},

        render: function () {
            this.renderAll();
            return this;
        },

        renderAll: function () {
            return this._renderAll.apply(this, arguments);
        },

        renderSelection: function () {
            return this._renderSelection.apply(this, arguments);
        },

        renderOne: function () {
            return this._renderOne.apply(this, arguments);
        },

    	/**
    	 *
    	 */
    	_renderAll: function () {
            return this._renderSelection(0, this.collection.length);
    	},

        /**
         *
         */
        _renderSelection: function (offset, limit) {
            var ItemView = this.itemView,
                buffer = this.buffer = this.buffer || document.createDocumentFragment(),
                range = _.range(offset, offset + limit);
                
            _.each(range, function (i) {
                var model = this.collection.at(i);

                if (model) {
                    var itemView = new ItemView({
                        model: model
                    });

                    buffer.appendChild(itemView.render().el);
                }

            }, this);

            this.$el.html(buffer);
        },

    	/**
    	 *
    	 */
    	_renderOne: function (model, options) {
    		options = options || {};
    		var insertionMethod = options.prepend ? 'prepend' : 'append';

    		if (this.itemView) {
    			var itemView = new this.itemView({
    				model: model
    			});

    			this[insertionMethod](itemView.render().el);

    			return itemView;
    		}
    		return false;
    	},

        append: function (html) {
            this.$el.append(html);
        },

        prepend: function (html) {
            this.$el.prepend(html);
        },

    	/**
    	 *
    	 */
    	_removeOne: function (model) {
    		model = model;
    		this.renderedItems.find(model).remove();
    	},

    	/**
    	 *
    	 */
    	_removeAll: function () {
    		this.renderedItems.each(function (item) {
    			item.view.remove();
    		});
    	}

    });

module.exports = CollectionView;