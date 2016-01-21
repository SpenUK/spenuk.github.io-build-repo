'use strict';

var Router = require('./router'),

	routerModule = {

		getRouter:  function(options) {
			if (!this.router && options && options.app) {
				this.router = new Router(options);
			}
			return this.router;
		},

		navigate: function (url) {
			return this.getRouter().navigate(url);
		}

	};

module.exports = routerModule;