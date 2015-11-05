'use strict';

var ModelExtension = require('../../extensions/model'),

	contactModule = {
		getContactModel: function () {
			if (!this.contactModel) {
				this.contactModel =  new ModelExtension({
					emailAddress: 'smt_@hotmail.co.uk'
				});
			}
			return this.contactModel;
		}
	};

module.exports = contactModule;