'use strict';

var routerModule = require('./modules/router/module'),
    masterModule = require('./modules/master/module'),

    /**
     *
     */
    App = {

        introPanel: '#landing',

        mainPanel: '.content-wrapper .content',

        transitionPanel: '.main .transition-content',

        initialize: function(){

            this.master = masterModule.getView();
            this.master.render();

            // Would be nice to get rid of the need to pass in app.
            this.router = routerModule.getRouter({
                app: this
            });
        },

        setContent: function () {
            this.master.setContent.apply(this.master, arguments);
        },

        transition: function () {
            this.master.transition.apply(this.master, arguments);
        }

    };

module.exports = App;