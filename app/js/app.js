'use strict';

var Router = require('./router.js'),
    Master = require('./modules/master/views/master');
      // /Users/Spen/Projects/JS/SpenUKGithubIO/build/app/js/app.js

// var templates = require('./templates.js');

// window.testWpApi = function(){
  // $.ajax({
  //   url: 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts',
  //   dataType: 'jsonp',
  //   success: function(r){console.log({response: r});},
  //   error: function(){console.log('error');}
  //     });
  // $.get('http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts', function(r){console.log(r);}, function(){console.log('error');});
// };

var App = {
  introPanel: '#landing',
  mainPanel: '.content-wrapper .content',
  transitionPanel: '.main .transition-content',

  // templates: templates,

  // views: {
  //   master: require('./views/master.js'),

  //   intro: require('./modules/intro/views/intro'),
  //   // blog: require('./views/blog-post.js'),
  //   // projects: require('./views/project.js'),
  //   projects: require('./modules/projects/views/projects'),
  //   contact: require('./modules/contact/views/contact'),
  //   about: require('./views/about.js')
  // },
  views: {},

  initialize: function(){
    // var templates = this.templates;
  	this.$introPanel = $(this.introPanel);
  	this.$mainPanel = $(this.mainPanel);

    // is it worth defining the top panel content here? will it ever change? could be used as an index page?
    // this.$introPanel.html(templates.intro());
    // this.views.ui.header = new this.views.ui.header({template: templates['ui/header']});

    this.views.master = new Master();

  	window.r = this.router = new Router(this);

    // use local storage to define he first view? fix this up at a higher level first?
    // $(this.mainPanel).html();
  }
};

module.exports = App;