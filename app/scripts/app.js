'use strict';

define(function (require) {

// define([
//   'handlebars',
// ], function(Handlebars) {

  var Handlebars  = require('handlebars');

  console.log('typeof Handlebars', typeof Handlebars);
  // ,
      // handlebarsHelpers = require('helpers/handlebarsHelpers'),
      // handlebarsPartials = require('helpers/partials'),

      // scrolling  = require('scrolling');

  window.App = {

    Extensions: {},
    Views: {},
    Models: {},
    Collections: {},
    Modules: {},
    // Scrolling: scrolling,
    // Utilities: require('utilities'),
    Router: new (require('router'))(),
    init: function(){
      // this.Scrolling.initialize();
    }

  };

  return window.App;
});



