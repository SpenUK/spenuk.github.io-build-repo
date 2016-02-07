'use strict';

var ModelExtension = require('../../extensions/model'),
	ContactView = require('./views/contact'),

	contactModule = {

		getContactModel: function () {
			if (!this.contactModel) {
				this.contactModel =  new ModelExtension({
					emailAddress: 'smt_@hotmail.co.uk'
				});
			}
			return this.contactModel;
		},


		getContactView: function () {
			return {
				view: ContactView,
				options: {
					module: this,
					model: this.getContactModel()
				}
			};
		}
	};

module.exports = contactModule;