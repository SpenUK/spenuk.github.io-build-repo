'use strict';

var CollectionExtension = require('../../../extensions/collection'),
    stubs = require('../../../projects-stubs.js'),

    ProjectCollection = CollectionExtension.extend({
        
        position: 0,

        totalRecords: 0,

        isLoading: false,

        jsonp: true,

        stubbed: true,

        stubs: stubs,

        initialize: function() {
            this._super.apply(this, arguments);
            this.fetch();
        },

        url: function(){
            return 'http://public-api.wordpress.com/rest/v1/sites/ijustwanttotesttheapi.wordpress.com/posts';
        },

        parse: function(response){
            this.totalRecords = response.found;
            return response;
        }

    });

module.exports = ProjectCollection;