'use strict';

var CollectionViewExtension = require('./collectionview'),
    // ViewExtension = require('./view'),
    // transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',

    /**
     * FaderView should be responsible for holding a current page and
     * sliding new pages in and out (with CSS transitions)
     */

    // FaderView = ViewExtension.extend({
    FaderView = CollectionViewExtension.extend({

        isTransitioning: false,

        initialize: function () {
            this.$el.addClass('fader-view');
            this.listenTo(this.collection, 'updatedCurrent', this.render);
        	this._super.apply(this, arguments);
        },

        events: {
        	'goNext': 'goNext',
        	'goPext': 'goPext',
            'click .next-button': 'goNext',
            'click .prev-button': 'goPrev'
        },

        render: function () {
            this.$el.html(this.template(this.serialize()));
            this.renderCurrent();
        },

        goNext: function () {
            var nextModel = this.collection.getNextModel();
            console.log(nextModel);
            this.collection.setCurrentModel(nextModel);
        },

        goPrev: function () {
            var prevModel = this.collection.getPrevModel();
            console.log(prevModel);
            this.collection.setCurrentModel(prevModel);
        }

    });

module.exports = FaderView;


// this.transitions = new Transitions({
// 	container: '.page-wrap .main .transition-container',
// 	main: '.content-main',
// 	transitioner: '.transitioner'
// });