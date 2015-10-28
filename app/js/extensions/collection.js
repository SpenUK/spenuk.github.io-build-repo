'use strict';

var core = require('../core/core'),

    Collection = core.Collection.extend({
    	
    	position: 0,

    	totalRecords: 0,

    	isLoading: false,

        parse: function(response){ //, xhr
            console.log(response);
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
            console.log('fetch');
            if (this.stubbed) {
                this.addStubs();
            } else {
                this._super.apply(this, arguments);
            }
        },

        addStubs: function(options){

            console.log('addStubs');
            this.trigger('fetch');
            options = (options || {});

            var collection = this;
            var stubs = (options.stubs || this.stubs || []);
            var records = this.parse(stubs);

            var i;
            window.setTimeout(function(){
              for (i = records.length - 1; i >= 0; i--) {
                var record = records[i];
                if (!collection.where({ID: record.ID}).length) {
                  collection.add(record);
                }
              }
              (options.success || $.noop)();

              collection.trigger('sync');

            }, (options.delay || 0));
            
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