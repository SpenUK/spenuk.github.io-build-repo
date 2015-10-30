'use strict';

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
        
        setCurrentModel: function(options){
            if (options.slug && this.where({slug: options.slug}).length) {
                console.log('match slug');
                this.currentRecord = this.find({slug: options.slug});
                // console.log(this.currentRecord);
            } else if (options.model && this.contains(options.model)) {
                console.log('match model');
                this.currentRecord = options.model;
            } else {
                console.log('no match', this.currentRecord);
                this.currentRecord = this.currentRecord || this.first();
            }

            this.position = this.indexOf(this.currentRecord);

            return this.currentRecord;
        },

        getCurrentModel: function(){
            return this.at(this.position);
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
            return this.at((this.position +1 > this.length -1)?  false : this.position + 1);
        },

        getPrevModel: function(){
            return this.at((this.position -1 < 0) ? false : this.position - 1);
        },

        checkSlug: function(slug){
            return (this.collection.where({slug: slug}).length >= 1);
        },

        defaultSlug: function(){
            return this.currentRecord ? this.currentRecord.get('slug') : this.first().get('slug');
        }

    });

module.exports = Collection;