'use strict';

var CollectionExtension = require('../../../extensions/collection'),
    Model = require('../models/article'),
    stubs = require('../blog-post-stubs'),

    BlogCollection = CollectionExtension.extend({

        totalRecords: 0,

        isLoading: false,

        jsonp: true,

        stubs: stubs,

        model: Model,

        // should fecth elsewhere really.
        initialize: function() {
            this._super.apply(this, arguments);
            this.fetch();
        },

        url: function(){
            return 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts?callback=?';
        },

        getCurrentRoute: function () {
            var model = this.getCurrentModel();
            return model ? model.getRoute() : false;
        },

        getNextRoute: function () {
            var model = this.getNextModel();
            return model ? model.getRoute() : false;
        },

        getPrevRoute: function () {
            var model = this.getPrevModel();
            return model ? model.getRoute() : false;
        },

        parse: function(response){
            this.totalRecords = response.found;
            return response.posts;
        }

    });

module.exports = BlogCollection;
