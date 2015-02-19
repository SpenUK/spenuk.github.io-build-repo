'use strict';
define(function (require) {

  window.Handlebars = require('handlebars');



  var handlebarsHelpers = require('helpers/handlebarsHelpers')(window.Handlebars),
      handlebarsPartials = require('helpers/partials')(window.Handlebars);

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
      console.log('Templates: ', this.Templates);
    }
  };

  return window.App;
});