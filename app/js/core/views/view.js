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

        isReady: false,

        constructor: function () {

            this.subviewInstances = new Backbone.Collection();

            /**
             * Should be overriden an array of accepted paramaters
             * Paramaters in this list will be set
             */
            this.acceptedParams =  [];

            Backbone.View.prototype.constructor.apply(this, arguments);
        },

        /**
         *
         */
        initialize: function (options) {
            options = options || {};

            // var self = this;

            this._setAcceptedParams(options);

            // this.render = _.wrap(this.render, function(render) {
            //     var args = arguments;

            //     self.beforeRender.apply(self,args);
            //     render.apply(self,args);
            //     self.afterRender.apply(self,args);

            //     return self;
            // });
            //
            this.wrapRender();
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
            this._super.apply(this, arguments);

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

        _renderSubview: function (viewDefinition, key) {
            var View,
                view,
                options = {};

            viewDefinition = this._expandViewDefinition(viewDefinition);

            View = viewDefinition.View;
            options = viewDefinition.options;

            view = new View(_.extend(options, {
                el: key,
                parentView: this
            }));

            this.subviewInstances.add({
                view: view,
                key: key
            });

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

        _removeSubviewInstances: function () {
            this.subviewInstances.each(this._removeSubviewInstance, this);
        },

        _removeSubviewInstance: function (model) {
            if (_.isString(model)) {
                model = this.subviewInstances.findWhere({key: model});
            }

            model.get('view').remove();
            model.destroy();
        },


        _expandViewDefinition: function (viewDefinition) {
            var View,
                options = {};

                // console.log(viewDefinition);

            if (_.isObject(viewDefinition) && (viewDefinition.view || viewDefinition.View)) {

                View = viewDefinition.view || viewDefinition.View;
                options = _.result(viewDefinition, 'options');

            } else if (_.isFunction(viewDefinition)) {

                View = viewDefinition;

            }

            if (!_.isFunction(View)) {

                console.log('view is not a function');
                return false;

            }

            // console.log({
            //     View: View,
            //     options: options
            // });

            return {
                View: View,
                options: options
            };
        },

        _expandViewDefinitionx: function (viewDefinition) {
            var View,
                options = {},
                definitionIsView = !!viewDefinition.extend;



            if (definitionIsView) {
                View = viewDefinition;
            } else {
                if (_.isFunction(viewDefinition)) {
                    viewDefinition = viewDefinition();
                }

                // if (_isFunction(View && )) {}

                View = viewDefinition.view ? viewDefinition.view :  viewDefinition;
                options = _.result(viewDefinition, 'options');
            }

            options = _.extend(options, {});

            if (!_.isFunction(View)) {
                console.log('view is not a function');
                return false;
            } else {
                return {
                    View: View,
                    options: options
                };
            }
        },

        _coreParams: ['parent', 'app'],

        /**
         * Uses the acceptedParams array to set those params on 'this'.
         */
        _setAcceptedParams: function (options) {
            var self = this, params;
            if (!_.isArray(this.acceptedParams)) {
                return false;
            }

            params = _.union([],this._coreParams, this.acceptedParams);

            _.each(params, function(param){
              if (options[param]) {
                self[param] = options[param];
              }
            });
        }

    });

module.exports = CoreView;