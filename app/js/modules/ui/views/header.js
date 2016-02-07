'use strict';

var View = require('../../../extensions/view'),
    ShowIntroButtonView = require('./header/showintrobutton'),
    ShowContentButtonView = require('./header/showcontentbutton'),
    NextButtonView = require('./header/nextbutton'),
    PrevButtonView = require('./header/prevbutton'),
    template = require('../templates/header.hbs'),

    HeaderView = View.extend({

        template: template,

        initialize: function() {
            this._super.apply(this, arguments);
            console.log(this);
            this.listenTo(this.model, 'change:currentContentUrl', this.onContentUrlChange);
            this.onContentUrlChange();
        },

        onContentUrlChange: function () {
            var currentContentUrl = this.model.get('currentContentUrl');
            if (currentContentUrl) {
                this.show();
            } else {
                this.hide();
            }
        },

        show: function () {
            this.$el.removeClass('hide');
        },

        hide: function () {
            this.$el.addClass('hide');
        },

        views: function () {
            return {
                '.show-intro-button': ShowIntroButtonView,
                '.show-content-button': ShowContentButtonView,
                '.next-button': NextButtonView,
                '.prev-button': PrevButtonView
            };
        }

    });

module.exports = HeaderView;