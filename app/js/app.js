'use strict';

var routerModule = require('./modules/router/module'),
    AboutView = require('./modules/about/views/about'),
    ContactView = require('./modules/contact/views/contact'),
    BlogPostsView = require('./modules/blog/views/blogposts'),
    ProjectsView = require('./modules/projects/views/projects'),
    MasterView = require('./modules/master/views/master'),

    /**
     *
     */
    App = {
        introPanel: '#landing',
        mainPanel: '.content-wrapper .content',
        transitionPanel: '.main .transition-content',

        views: {
            Master: MasterView,
            Projects: ProjectsView,
            Contact: ContactView,
            About: AboutView,
            Blog: BlogPostsView
        },

        initialize: function(){
            this.$introPanel = $(this.introPanel);
            this.$mainPanel = $(this.mainPanel);

            this.views.master = new MasterView();

            // Get rid of the need to pass in this eventually
            window.r = this.router = routerModule.getRouter({
                app: this
            });
        }
    };

module.exports = App;