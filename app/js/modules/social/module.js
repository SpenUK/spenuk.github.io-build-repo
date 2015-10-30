'use strict';
var SocialCollection = require('./collections/social'),

	SocialModule = {
		getSocialCollection: function () {
			return this.socialCollection ? this.socialCollection : new SocialCollection();
		}
	};

module.exports = SocialModule;