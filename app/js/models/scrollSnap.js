'use strict';

module.exports = {
	initialize: function(){

	},
	triggerUp: function(){
		window.Backbone.trigger('ui:showIntro');
	},
	triggerDown: function(){
		window.Backbone.trigger('ui:showContent');
	},
	checkDelta: function(){
		
	},
	setListeners: function(){
		var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? 'DOMMouseScroll' : 'mousewheel'; //FF doesn't recognize mousewheel as of FF3.x
 
		if (document.attachEvent) { //if IE (and Opera depending on user setting)
		    document.attachEvent('on'+mousewheelevt, function(e){console.log(e);});
		} else if (document.addEventListener) { //WC3 browsers
		    document.addEventListener(mousewheelevt, function(e){console.log(e);}, false);
		}
	}

};