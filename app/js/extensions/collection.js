'use strict';
/*jshint -W087 */

var _ = require('underscore'),
    core = require('../core/core'),

    Collection = core.Collection.extend({

    	position: 0,

    	totalRecords: 0,

    	isLoading: false,

        parse: function(response){ //, xhr
          	this.totalRecords = response.length;
            return response;
        },

        setCurrentModel: function (model) {
            console.log('setting current model', model.attributes);
            if (this.currentModel === model) {
                return false;
            }

            this.currentModel = this.contains(model) ? model : this.currentModel || this.first();
            this.position = this.indexOf(this.currentModel);
            this.trigger('updatedCurrent');

            return this.currentModel;
        },

        getCurrentModel: function(){
            return this.at(this.position) || this.setCurrentModel();
        },

        getLatest: function(){
            return this.at(0);
        },

        fetch: function () {
            if (this.stubs) {
                this.trigger('fetch');
                _.delay(_.bind(this.addStubs, this), 0);
            } else {
                this._super.apply(this, arguments);
            }
        },

        addStubs: function(){
            var stubs = this.parse(this.stubs || []);

            _.each(stubs, this.add, this);
            this.trigger('sync');
        },

        getNextModel: function(){
            return this.at((this.position + 1 > this.length -1)?  false : this.position + 1);
        },

        getPrevModel: function(){
            return this.at((this.position -1 < 0) ? false : this.position - 1);
        },

        checkSlug: function(slug){
            return (this.collection.where({slug: slug}).length >= 1);
        },

        defaultSlug: function(){
            return this.currentModel ? this.currentModel.get('slug') : this.first().get('slug');
        }

    });

module.exports = Collection;