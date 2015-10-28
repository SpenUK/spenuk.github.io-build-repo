'use strict';
/*jshint bitwise: false*/

// var _ = require('../../vendor/underscore'),
    // Backbone = require('../../vendor/backbone'),

var _ = require('underscore'),
    Backbone = require('backbone'),

    CoreView = Backbone.View.extend({

        cName: 'CoreView',

        $window : $('window'),

        $body : $('body'),

        /**
         * Should be overriden an array of accepted paramaters
         * Paramaters in this list will be set 
         */
        acceptedParams: [],

        subviewInstances: {},

        isReady: false,

        /**
         *
         */
        initialize: function (options) {
            options = options || {};

            var self = this;

            this._setAcceptedParams(options);

            this.render = _.wrap(this.render, function(render) {
                var args = arguments;

                self.beforeRender.apply(self,args);
                render.apply(self,args);
                self.afterRender.apply(self,args);

                return self;
            });
        },

        beforeRender: function () {
            this.trigger('beforeRender');
        },

        afterRender: function () {
            this.trigger('afterRender');
        },

        render: function () {
            this.$el.html(this.template(this.serialize()));
            this._renderSubviews();
            // this._super.apply(this, arguments);

            return this;
        },

        wrapRender: function () {
            var self = this;

            this.render = _.wrap(this.render, function(render) {
                var args = arguments;

                self.beforeRender.apply(self,args);
                render.apply(self,args);
                self.afterRender.apply(self,args);

                return self;
            });
        },

        onReady: function () {
            this.trigger('ready');
            this.isReady = true;
        },

        serialize: function () {
            return this.model ? this.model.attributes : {};
        },

        /**
         *
         */
        _renderSubviews: function () {
            // could buffer?
            var views = _.result(this, 'views');
            _.each(views, function (viewDefinition, key) {
                this._renderSubview(viewDefinition, key);
            }, this);
        },

        /**
         * What a bloody mess! Must be a better way to expand out the definition.
         */
        _renderSubview: function (viewDefinition, key) {
            var View,
                view,
                options = {};

            viewDefinition = this._expandViewDefinition(viewDefinition);

            View = viewDefinition.View;
            options = viewDefinition.options;

            view = this.subviewInstances[key] = new View(_.extend(options, {
                el: key
            }));

            console.log(view.cName, view.el);

            view.listenTo(this, 'afterRender', function(){
                if (view.isReady) {
                    view.render();
                } else {
                    view.listenToOnce(view, 'ready', function(){
                        view.render();
                    });
                }

                if (!view.model || view.model.isReady) {
                    view.onReady();
                } else {
                    view.listenToOnce(view.model, 'ready', view.onReady);
                }
            });

            this.listenTo(view, 'destroy', function(){
                this.subviewInstances[key] = null;
            });

            return view;
        },

        _expandViewDefinition: function (viewDefinition) {
            var View,
                options = {},
                definitionIsView = !!viewDefinition.extend;
                
            if (definitionIsView) {
                View = viewDefinition;
            } else {
                if (_.isFunction(viewDefinition)) {
                    viewDefinition = viewDefinition();
                }

                View = !!viewDefinition.view.extend ? viewDefinition.view : _.result(viewDefinition, 'view');
                options = _.result(viewDefinition, 'options');
            }

            options = _.extend(options, {});

            if (!_.isFunction(View)) {
                return false;
            } else {
                return {
                    View: View,
                    options: options
                };
            }
        },

        /**
         * Uses the acceptedParams array to set those params on 'this'.
         */
        _setAcceptedParams: function (options) {
            var self = this;
            if (!_.isArray(this.acceptedParams)) {
                return false;
            }
            _.each(this.acceptedParams, function(param){
              if (options[param]) {
                self[param] = options[param];
              }
            });
        }

    });

module.exports = CoreView;