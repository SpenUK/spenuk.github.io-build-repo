'use strict';

define([
  'jquery'
], function($) {

	// Setting custom easings on the $ object
	$.easing.easeInBack = function (x, t, b, c, d, s) {
    if (s === undefined) { s = 1.2; }
    return c*(t/=d)*t*((s+1)*t - s) + b;
  };

  // 
	var Transitions = {

		// init: function () {
		// },
		wrapper: 'transition-wrapper',
		left: 'transition-left',
		right: 'transition-right',

		slideIn: function(html, speed){
			var parentScope = this,	

			speed = (typeof speed !== 'undefined') ? speed : 400;
			html = (typeof html !== 'undefined') ? html : $(this.right).html();
			var $outEl = $('#'+this.left);
			var $inEl = $('#'+this.right);
			var $wrapper = $('#'+this.wrapper);
				// var $outEl = $(wrapper),
						// $inEl = (function(h){
							// var a=document.createElement('div');a.innerHTML=h;return a.firstChild;
						// })('<div class="transitioning"></div>');	

			$inEl.html(html);

			$wrapper.animate({ 
					left: '-100%'
				},{
					duration: speed,
		    	specialEasing: {
		      	left: 'easeInBack'
		    	},
			    complete: function(){
			    	// window.setTimeout(function(){
			    		// console.log('left: 0 set on wrapper');
				    	$wrapper.css({left: 0});	
			    	// }, 1000);
			    	// window.setTimeout(function(){
			    		// console.log('right/left swapped');
			    		$outEl.attr('id',parentScope.right);
				    	$inEl.attr('id',parentScope.left);
			    	// }, 2000);

			    }
		  });

			return $inEl;
		}
	};

	$('#side-bar, .header').on('click', '.dismiss-button.show', function(){
		$('#push-wrapper').removeClass('side-bar-hidden');
		// $('#side-bar').removeClass('hidden');
		$(this).removeClass('show').addClass('close');
	});

	$('#side-bar, .header').on('click', '.dismiss-button.close', function(){
		$('#push-wrapper').addClass('side-bar-hidden');
		// $('#side-bar').addClass('hidden');
		$(this).removeClass('close').addClass('show');
	});




	return Transitions;

});
