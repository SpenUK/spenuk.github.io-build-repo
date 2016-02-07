'use strict';

var CollectionExtension = require('../../../extensions/collection'),
    Model = require('../models/project'),
    stubs = require('../projects-stubs'),

    ProjectCollection = CollectionExtension.extend({

        totalRecords: 0,

        isLoading: false,

        jsonp: true,

        stubs: stubs,

        model: Model,

        initialize: function() {
            this._super.apply(this, arguments);
            this.fetch();
        },

        url: function(){
            return 'http://public-api.wordpress.com/rest/v1/sites/ijustwanttotesttheapi.wordpress.com/posts';
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
            return response;
        }

    });

module.exports = ProjectCollection;