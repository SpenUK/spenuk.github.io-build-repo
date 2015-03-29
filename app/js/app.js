'use strict';

var router = require('./router.js');
var templates = require('./templates.js');


var App = {
  introPanel: '#landing',
  mainPanel: '.main .content',
  transitionPanel: '.main .transition-content',

  templates: templates,

  views: {
    master: require('./views/master.js'),

    intro: require('./views/intro.js'),
    blog: require('./views/blog-post.js'),
    projects: require('./views/project.js'),
    contact: require('./views/contact.js'),
    about: require('./views/about.js')
  },

  initialize: function(options){
  	options = options; // linter -__-
    // var templates = this.templates;
  	this.$introPanel = $(this.introPanel);
  	this.$mainPanel = $(this.mainPanel);

    // is it worth defining the top panel content here? will it ever change? could be used as an index page?
    this.$introPanel.html(templates.intro());
    // this.views.ui.header = new this.views.ui.header({template: templates['ui/header']});

    this.views.master = new this.views.master();

  	window.r = this.router = new router(this);

    // use local storage to define he first view? fix this up at a higher level first?
    // $(this.mainPanel).html();
  }
};

module.exports = App;