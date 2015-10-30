'use strict';

var CollectionExtension = require('../../../extensions/collection'),
    Model = require('../models/social'),
    stubs = require('./../stubs'),

    SocialCollection = CollectionExtension.extend({
        
        position: 0,

        totalRecords: 0,

        isLoading: false,

        jsonp: true,

        stubs: stubs,

        model: Model,

        initialize: function() {
            this._super.apply(this, arguments);
            this.fetch();
        }
    });

module.exports = SocialCollection;
