'use strict';

var ModelExtension = require('../../../extensions/model'),

	SocialModel = ModelExtension.extend({
		idAttribute: 'url'
	});

module.exports = SocialModel;
