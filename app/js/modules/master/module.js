'use strict';

var MasterView = require('./views/master'),

	MasterModule = {

		transition: function () {
			MasterView.thing();
		},

		getView: function () {
			if (!this.view) {
				this.view = new MasterView();
			}

			return this.view;
		},
	};

module.exports = MasterModule;
