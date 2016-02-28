'use strict';
/*jshint bitwise: false*/
/*jshint -W087 */

var _ = require('underscore'),
    Backbone = require('backbone'),

    CoreView = Backbone.View.extend({

        $window : $('window'),

        $body : $('body'),

        isReady: true,

        /**
         * Should be overriden with an array of accepted paramaters
         * Paramaters in this list will be set
         */
        acceptedParams: [],

        constructor: function () {
            this.subviewInstances = new Backbone.Collection();

            Backbone.View.prototype.constructor.apply(this, arguments);
        },

        /**
         *
         */
        initialize: function (options) {
            _.bindAll(this, '_removeSubviewInstance', '_removeSubviewInstances');
            options = options || {};
            this._setAcceptedParams(options);
            this.wrapRender();
        },

        beforeRender: function () {
            this.trigger('beforeRender');
        },

        afterRender: function () {
            this.trigger('afterRender');
        },

        render: function () {
            // console.log('render - ext-view');
            // console.log(this.subviewInstances);
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
        // should really be changed to ready(),
        // onReady shouldnt be the trigger, it should be the response
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
        getSubviews: function () {
            return _.result(this, 'views');
        },

        /**
         *
         */
        _renderSubviews: function () {
            var views = this.getSubviews();
            this._removeSubviewInstances();
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
            options = _.extend({}, {
                model: this.model,
                // collection: this.collection
            }, viewDefinition.options);

            // collection doesn't work here, it knocks out any collection that's set in the class definition.


            view = new View(_.extend(options, {
                el: key,
                parentView: this
            }));

            // console.log('adding to svinstances', 'svs', this.subviewInstances, 'v', view, 'k', key);

            this.subviewInstances.add({
                view: view,
                key: key
            });

            // console.log(this.subviewInstances.length);

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
                console.log('destroy...');
                this.subviewInstances[key] = null;
            });

            return view;
        },

        _removeSubviewInstances: function () {
            var i;
            // using collection.each will throw an error
            // as it will be deleting losing index reference when deleting models.
            for (i = this.subviewInstances.length - 1; i >= 0; i--) {
                this._removeSubviewInstance(this.subviewInstances.first());
            }
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

            return {
                View: View,
                options: options
            };
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