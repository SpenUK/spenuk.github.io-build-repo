'use strict';

var routerModule = require('./modules/router/module'),
    AboutView = require('./modules/about/views/about'),
    ContactView = require('./modules/contact/views/contact'),
    BlogPostsView = require('./modules/blog/views/blogposts'),
    ProjectsView = require('./modules/projects/views/projects'),
    // MasterView = require('./modules/master/views/master'),
    masterModule = require('./modules/master/module'),

    /**
     *
     */
    App = {
        introPanel: '#landing',
        mainPanel: '.content-wrapper .content',
        transitionPanel: '.main .transition-content',

        views: {
            Projects: ProjectsView,
            Contact: ContactView,
            About: AboutView,
            Blog: BlogPostsView
        },

        initialize: function(){

            this.views.master = masterModule.getView();
            this.views.master.render();

            // Get rid of the need to pass in this eventually
            window.r = this.router = routerModule.getRouter({
                app: this
            });
        },

        setContent: function () {
            this.views.master.setContent.apply(this.views.master, arguments);
        },

        transition: function () {
            this.views.master.transition.apply(this.views.master, arguments);
        },
    };

module.exports = App;