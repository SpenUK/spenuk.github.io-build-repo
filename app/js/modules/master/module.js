'use strict';

var MasterView = require('./views/master'),

	MasterModule = {

		/**
		 * Should not need more than one instance, so getView only returns
		 * the existing view or creates a new one if it doesn't already exist
		 * @return {[type]} [description]
		 */
		getView: function () {
			if (!this.view) {
				this.view = new MasterView();
			}

			return this.view;
		},
	};

module.exports = MasterModule;
