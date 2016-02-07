'use strict';

var View = require('../../../../extensions/view'),
    template = require('../../templates/header/prevbutton.hbs'),

    PrevButtonView = View.extend({

        template: template,

        showClass: 'show',

        initialize: function() {
            this._super.apply(this, arguments);
            this.listenTo(this.model, 'change:prevUrl', this.onUrlChange);
        },

        events: {
            'click a': 'onLinkClick'
        },

        onLinkClick: function () {
            window.Backbone.trigger('ui:setDirection', 'prev');
        },

        onUrlChange: function () {
            if (this.model.get('prevUrl')) {
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

module.exports = PrevButtonView;