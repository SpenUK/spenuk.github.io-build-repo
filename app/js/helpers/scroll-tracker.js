'use strict';

var TO = null;
var wheelEvent = (/Firefox/i.test(navigator.userAgent))? 'DOMMouseScroll' : 'mousewheel';
var up = 'up';
var down = 'down';

module.exports = {
	initialize: function(options){ 
		options = (options || {});

		this.tolerance = (options.tolerance || 200);

		var scrollTime = 0;

		var direction;

		var module = this;

		var $header = $('.header');
		var $body = $('body');
		var headerInlineStyles = ($header.attr('style') || '');
		// var headerHeight = $header.height();

		var trackScroll = function(e){
			var evt = (window.event || e);//equalize event object
			var delta= evt.detail ? evt.detail*(-120) : evt.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta

			var reset = false;
			var lastDirection = direction;
			direction = (delta > 0)? up : down;

			if (TO !== null) {
				clearTimeout(TO);
				if (lastDirection === direction) {
					// needs stricter timing... currently relies on JS process rate, so not reliably 1 to 1.
					scrollTime += 1;	
				} else {
					scrollTime = 0;
					reset = true;
				}
				
			}

			if (scrollTime > 20) {
				// $header.css('background-color', 'cyan');
				// $header.css('height', headerHeight + ((scrollTime -20) * 0.5));
			} else {
				// console.log(headerInlineStyles);
				$header.attr('style', headerInlineStyles);
			}

			if (scrollTime >= 80 ) {
				if (direction === up && $body.hasClass('content')) {
					module.trigger(up);
				}
				if (direction === down && $body.hasClass('intro')) {
					module.trigger(down);
				}

				scrollTime = 0;
				$header.attr('style', headerInlineStyles);
			}

			TO = setTimeout(function(){
				scrollTime = 0;
				$header.attr('style', headerInlineStyles);
			}, module.tolerance);
		};

		if (document.attachEvent){ //if IE (and Opera depending on user setting)
    	document.attachEvent('on'+wheelEvent, trackScroll);
		} else if (document.addEventListener) {//WC3 browsers
    	document.addEventListener(wheelEvent, trackScroll, false);
		}

	},
	trigger: function(direction) {
		if (direction === up) {
			window.Backbone.trigger('router:goToLanding');	
		} else {
			window.Backbone.trigger('router:goToCurrentContent');	
		}
	}

};

// function displaywheel(e){
//     var evt=window.event || e //equalize event object
//     var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
//     document.getElementById('wheelvalue').innerHTML=delta //delta returns +120 when wheel is scrolled up, -120 when down
// }