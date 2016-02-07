'use strict';

var CollectionExtension = require('../../../extensions/collection'),
    Model = require('../models/social'),
    stubs = require('./../stubs'),

    SocialCollection = CollectionExtension.extend({

        totalRecords: 0,

        isLoading: false,

        jsonp: true,

        stubs: stubs,

        model: Model,

        initialize: function() {
            if (!this.length) {
                this.add(this.stubs);
            }

            this._super.apply(this, arguments);
        }
    });

module.exports = SocialCollection;
