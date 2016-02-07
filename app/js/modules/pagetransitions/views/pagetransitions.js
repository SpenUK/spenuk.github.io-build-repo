'use strict';

var transitionEnd = 'transitionend transitionEnd webkitTransitionEnd oTransitionEnd MSTransitionEnd',

    _ = require('underscore'),
    Backbone = require('backbone'),
    ViewExtension = require('../../../extensions/view'),
    template = require('../templates/pagetransitions.hbs'),

    /**
     * PageTransitionView should be responsible for holding a current page and
     * sliding new pages in and out,
     */
    PageTransitionsView = ViewExtension.extend({

        isTransitioning: false,

        direction: 'left',

        easingKey: 'easeInOutQuart',

        initialize: function() {
            _.bindAll(this, '_simpleTransitionInFadeOut', '_simpleTransitionInSnapBack', '_simpleTransitionInFadeIn');

            this._super.apply(this, arguments);

            this.listenTo(window.Backbone, 'ui:setDirection', this.setDirection);
        },

        template: template,

        contentClass: 'transition-content',

        transitionerClass: 'transition-transitioner',

        contentEl: '.transition-content',

        transitionerEl: '.transition-transitioner',

        transition: function (ViewDefinition, options) {
            var View, viewOptions;

            if (this.isTransitioning) {
                return false;
            }

            ViewDefinition = this._expandViewDefinition(ViewDefinition);
            View = ViewDefinition.View;
            viewOptions = ViewDefinition.options || {};

            viewOptions.el = this.contentEl;

            this.currentViewClass = View;
            this.currentContent = new View(viewOptions);

            this._simpleTransitionIn(ViewDefinition, options);

        },

        setDirection: function (direction) {
            this.direction = direction;
        },

        _renderOnReady: function () {
            var contentView = this.currentContent;
            if (contentView.isReady) {
                contentView.render();
            } else {
                if (contentView.showLoader) {
                    contentView.showLoader();
                }
                contentView.on('ready', contentView.render);
            }
        },

        _simpleTransitionIn: function (ViewDefinition, options) {
            if (options.noTransition) {
                this._renderOnReady();
            } else {
                this._simpleTransitionInFadeOut();
            }
        },

        _simpleTransitionInFadeOut: function () {
            this.$contentEl.animate({
                opacity: 0,
                left: this.direction === 'prev' ? '10%' : '-10%'
            }, 250, this.easingKey, this._simpleTransitionInSnapBack);
        },

        _simpleTransitionInSnapBack: function () {
            this._renderOnReady();
            this.$contentEl.css({
                left: this.direction === 'prev' ? '-10%' : '10%'
            });

            this._simpleTransitionInFadeIn();
        },

        _simpleTransitionInFadeIn: function () {
            this.$contentEl.animate({
                opacity: 1,
                left: 0
            }, 200, this.easingKey);
        },

        _transitionIn: function (ViewDefinition, options, direction) {
            var View, viewOptions;

            direction = direction;

            if (this.isTransitioning) {
                return false;
            }

            ViewDefinition = this._expandViewDefinition(ViewDefinition);
            View = ViewDefinition.View;
            viewOptions = ViewDefinition.options || {};

            viewOptions.el = this.transitionerEl;

            this.currentViewClass = View;
            this.currentContent = new View(viewOptions);

            this.currentContent.render();

            this.triggerTransition();
        },

        triggerTransition: function () {
            this.$el.one(transitionEnd, this.transitionEnd.bind(this));
            this.$el.addClass('transitioning');
        },

        transitionEnd: function () {
            this.switchContent();
            this.isTransitioning = false;
        },

        switchContent: function () {
            var contentEl = this.$contentEl,
                transitionerEl = this.$transitionerEl;

            contentEl.removeClass('transition-content').addClass('transition-transitioner');
            transitionerEl.removeClass('transition-transitioner').addClass('transition-content');

            this.$contentEl = transitionerEl;
            this.$transitionerEl = contentEl;
            this.$el.removeClass('transitioning');
        },

        render: function () {
            this._super.apply(this, arguments);
            this.$contentEl = this.$el.find(this.contentEl);
            this.$transitionerEl = this.$el.find(this.transitionerEl);
        }

    });

Backbone.$.easing.easeInOutQuart = function (x, t, b, c, d) {
    if ((t/=d/2) < 1) {
        return c/2*t*t*t*t + b;
    }

    return -c/2 * ((t-=2)*t*t*t - 2) + b;
};

module.exports = PageTransitionsView;