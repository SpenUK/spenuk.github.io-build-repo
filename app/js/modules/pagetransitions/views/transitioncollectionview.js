'use strict';

var CollectionViewExtension = require('../../../extensions/collectionview'),
	ViewExtension = require('../../../extensions/view'),

    /**
     * TransitionView should be responsible for holding a current page and
     * sliding new pages in and out (with CSS transitions)
     */

    TransitionCollectionView = CollectionViewExtension.extend({

    	contentEl: 'content',

        itemView: ViewExtension,

        isTransitioning: false,

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

// module.exports = TransitionCollectionView;
TransitionCollectionView = TransitionCollectionView;

module.exports = [2,2,2,2,2];


// this.transitions = new Transitions({
// 	container: '.page-wrap .main .transition-container',
// 	main: '.content-main',
// 	transitioner: '.transitioner'
// });