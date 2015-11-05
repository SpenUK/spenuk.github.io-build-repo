'use strict';

var CollectionViewExtension = require('./collectionview'),
	ViewExtension = require('./view'),

    /**
     * PagerCollectionView should be responsible for holding a current page and 
     * sliding new pages in and out (with CSS transitions)
     */

    PagerCollectionView = CollectionViewExtension.extend({

    	contentEl: 'content',
        
        itemView: ViewExtension,

        isTransitioning: false,

        acceptedParams: [],

        // initialize: function () {
        // 	this.$contentEl = $(this.contentEl);
        // 	this._super.apply(this, arguments);
        // },

        events: {
        	'goNext': 'goNext',
        	'goPext': 'goPext'
        },

        goNext: function () {

        },

        goPrev: function () {

        },

        render: function () {
            this.renderOne(this.collection.getCurrentModel());
        }

    });

module.exports = PagerCollectionView;


// this.transitions = new Transitions({
// 	container: '.page-wrap .main .transition-container',
// 	main: '.content-main',
// 	transitioner: '.transitioner'
// });