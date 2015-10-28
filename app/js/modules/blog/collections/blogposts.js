'use strict';

var CollectionExtension = require('../../../extensions/collection'),
    stubs = require('../blog-post-stubs'),

    BlogCollection = CollectionExtension.extend({
        
        position: 0,

        totalRecords: 0,

        isLoading: false,

        jsonp: true,

        stubs: stubs,

        stubbed: true,

        initialize: function() {
            this._super.apply(this, arguments);
            this.fetch();
        },

        url: function(){
            return 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts?callback=?';
        },

        parse: function(response){
            this.totalRecords = response.found;
            return response.posts;
        }

    });

module.exports = BlogCollection;
