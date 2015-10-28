'use strict';

var core = require('../core/core'),

View = core.View.extend({

	isRendered: false,

	render: function () {
		this.isRendered = true;
		this._super.apply(this, arguments);
	}

});

module.exports = View;