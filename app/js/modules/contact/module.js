'use strict';

var ModelExtension = require('../../extensions/model'),

	contactModule = {
		getContactModel: function () {
			return this.contactModel ? this.contactModel : new ModelExtension({
				emailAddress: 'smt_@hotmail.co.uk'
			});
		}
	};

module.exports = contactModule;