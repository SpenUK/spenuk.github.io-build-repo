'use strict';

var View = require('../../../../extensions/view'),
    template = require('../../templates/header/nextbutton.hbs'),

    NextButtonView = View.extend({

        template: template,

        showClass: 'show',

        initialize: function() {
            this._super.apply(this, arguments);
            this.listenTo(this.model, 'change:nextUrl', this.onUrlChange);
        },

        events: {
            'click a': 'onLinkClick'
        },

        onLinkClick: function () {
            window.Backbone.trigger('ui:setDirection', 'next');
        },

        onUrlChange: function () {
            if (this.model.get('nextUrl')) {
                this.show();
            } else {
                this.hide();
            }
            this.render();
        },

        show: function () {
            this.$el.addClass(this.showClass);
        },

        hide: function () {
            this.$el.removeClass(this.showClass);
        }

    });

module.exports = NextButtonView;