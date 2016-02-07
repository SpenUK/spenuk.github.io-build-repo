'use strict';

var View = require('../../../../extensions/view'),
    template = require('../../templates/header/showcontentbutton.hbs'),

    showContentButtonView = View.extend({

        template: template,

        initialize: function() {
            this._super.apply(this, arguments);
            this.listenTo(this.model, 'change:currentContentUrl', this.render);
        }

    });

module.exports = showContentButtonView;