'use strict';

var Router = require('./router'),

	routerModule = {
		getRouter:  function(options) {
			if (!this.router && options && options.app) {
				this.router = new Router(options);
			}
			return this.router;
		}
	};

module.exports = routerModule;