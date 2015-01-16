'use strict';
define(function (require) {

  window.Handlebars = require('handlebars');



    // handlebarsHelpers = require('helpers/handlebarsHelpers'),
    // handlebarsPartials = require('helpers/partials'),

    // scrolling  = require('scrolling');

  window.App = {
    
  	PageWrapper: '#page-wrapper',

    Modules: {},

    Templates: require('templates'),
    Transitions: require('transitions/main').init(),
    Modal: require('shared/modal'),
    // Scrolling: scrolling,
    // Utilities: {}

    init: function(){
      this.Transitions.init();
    }
  };

  return window.App;
});