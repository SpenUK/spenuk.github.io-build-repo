'use strict';
define(function (require) {

  window.Handlebars = require('handlebars');
  console.log(window.Handlebars); // Seems calling is the only way to set up global Handlebars obj
  // require('templatesLoader');
  var templates = require('templates');
  // ,
      // handlebarsHelpers = require('helpers/handlebarsHelpers'),
      // handlebarsPartials = require('helpers/partials'),

      // scrolling  = require('scrolling');

  var HomepageView = require('modules/base/views/home')();

  window.App = {

  	PageWrapper: '#page-wrapper',

    Extensions: {
    	Views: {
    		homepage: HomepageView	
    	},
    	Models: {},
    	Collections: {}
    },
    Views: {
    	
    },
    Models: {},
    Collections: {},
    Modules: {},
    Transitions: require('transitions/main'),
    // Scrolling: scrolling,
    // Utilities: require('utilities'),
    Router: new (require('router'))(),
    init: function(){
    	this.Views.homepage = new this.Extensions.Views.homepage();

    	this.Views.homepage.init();
      // this.Scrolling.initialize();
      console.log('App Init');


    }

  };



  return window.App;
});



