'use strict';

var CollectionViewExtension = require('./collectionview'),
    routerModule = require('../modules/router/module'),
// var ViewExtension = require('./view'),
    // transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',

    /**
     * FaderView should be responsible for holding a current page and
     * sliding new pages in and out (with CSS transitions)
     */

    // FaderView = ViewExtension.extend({
    FaderView = CollectionViewExtension.extend({

        isTransitioning: false,

        initialize: function (options) {
            console.log(options);
            this.$el.addClass('fader-view');
            this.listenTo(this.collection, 'updatedCurrent', this.renderCurrent);
        	this._super.apply(this, arguments);
        },

        events: {
        	'goNext': 'goNext',
        	'goPext': 'goPext',
            'click .next-button': 'goNext',
            'click .prev-button': 'goPrev'
        },

        render: function () {
            this._super.apply(this, arguments);
            this.renderCurrent();
        },

        goNext: function () {
            console.log(this.master);
            // var nextModel = this.collection.getNextModel(),
                // slug = '';


            // if (nextModel) {
            //     slug = nextModel.get('slug') || slug;
            // }
                // this.collection.setCurrentModel(prevModel);
            // console.log(this.namespace + '/' + slug);
            // routerModule.navigate(this.namespace + '/' + slug);
            // this.collection.setCurrentModel(nextModel);
        },

        goPrev: function () {
            var prevModel = this.collection.getPrevModel(),
                slug = '';

            if (prevModel) {
                slug = prevModel.get('slug') || slug;
            }
            // this.collection.setCurrentModel(prevModel);
            console.log(this.namespace + '/' + slug);
            routerModule.navigate(this.namespace + '/' + slug);
        }

    });

module.exports = FaderView;


// this.transitions = new Transitions({
// 	container: '.page-wrap .main .transition-container',
// 	main: '.content-main',
// 	transitioner: '.transitioner'
// });