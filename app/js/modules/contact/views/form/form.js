'use strict';

var ViewExtension = require('../../../../extensions/view'),
	template = require('../../templates/form/form'),

	/**
	 *
	 */
	FormView = ViewExtension.extend({

		cName: 'FormView',

		namespace: 'form view',

		template: template

	});

module.exports = FormView;
