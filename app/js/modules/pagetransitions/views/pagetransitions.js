'use strict';

var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',

    ViewExtension = require('../../../extensions/view'),
    template = require('../templates/pagetransitions.hbs'),

    /**
     * PageTransitionView should be responsible for holding a current page and
     * sliding new pages in and out (with CSS transitions)
     */
    PageTransitionsView = ViewExtension.extend({

        isTransitioning: false,

        direction: 'left',

        initialize: function() {
            this._super.apply(this, arguments);
            this.render();

            transitionEnd = transitionEnd;
        },

        template: template,

        contentEl: '.transition-wrapper',

        transitionerEl: '.transition-transitioner',

        events: {
        	'fromLeft': 'fromLeft',
        	'fromRight': 'fromRight'
        },

        transition: function (ViewDefinition, options) {
            this._transitionIn(ViewDefinition, options);
        },

        fromLeft: function (ViewDefinition, options) {
            this._transitionIn(ViewDefinition, options, 'left');
        },

        fromRight: function (ViewDefinition, options) {
            this._transitionIn(ViewDefinition, options, 'right');
        },

        _transitionIn: function (ViewDefinition, options, direction) {
            var View, viewOptions;

            direction = direction;

            if (this.isTransitioning) {
                console.log('return early');
                return false;
            }

            console.log(ViewDefinition);

            ViewDefinition = this._expandViewDefinition(ViewDefinition);
            View = ViewDefinition.View;
            viewOptions = ViewDefinition.options;

            viewOptions.el = this.transitionerEl;

            // if (this.currentViewClass === View) {
            //     console.log('class matches');
            // } else {
            //     console.log('class doesnt match');
            // }

            this.currentViewClass = View;
            this.currentContent = new View(viewOptions);
            this.currentContent.render();
        },

        render: function () {
            this._super.apply(this, arguments);
            this.$contentEl = this.$el.find(this.contentEl);
            this.$transitionerEl = this.$el.find(this.transitionerEl);
        }

    });

module.exports = PageTransitionsView;

// this.transitions = new Transitions({
// 	container: '.page-wrap .main .transition-container',
// 	main: '.content-main',
// 	transitioner: '.transitioner'
// });