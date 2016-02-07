'use strict';

var AboutView = require('./views/about'),

	AboutModule = {

		getAboutView: function () {
			return {
				view: AboutView,
				options: {
					module: this
				}
			};
		}

	};

module.exports = AboutModule;
