'use strict';

define([
  'jquery'
], function($) {

	// Setting custom easings on the $ object
	//  Could be moved out into another more global script
	$.easing.easeInBack = function (x, t, b, c, d, s) {
    if (s === undefined) { s = 1.2; }
    return c*(t/=d)*t*((s+1)*t - s) + b;
  };

  // Could be  moved out into a utilities object?
  function buildHtml (html) {
		var a=document.createElement('div');
				a.className = 'container';
				a.innerHTML = html;

		return (a.childElementCount === 1)?a.firstChild:a;
	} 

	function randomize (array) {
		var a =[],i,r,x;		
		for (i = array.length - 1; i >= 0; i--) {
			r = Math.floor(Math.random()*array.length);
			x = array.splice(r ,1);
			a.push(x[0]);
		};
		return a;
	}

  // 
	var Transitions = {

		inEl: 'inPage',
		outEl: 'outPage',

		fadeIn: function (html, speed) {
			var parentScope = this;
			speed = (typeof speed != 'undefined') ? speed : 400;

			var $inEl = $('#'+this.inEl),
					$outEl = $('#'+this.outEl);

			$inEl.html(html);

			$outEl.fadeOut(speed);
			$inEl.fadeIn(speed, function(){
    		$outEl.attr('id', parentScope.inEl);
    		$inEl.attr('id',parentScope.outEl);
    	});
			
		},

		appear: function (html, speed) {
			var parentScope = this;
			speed = (typeof speed != 'undefined') ? speed : 400;

			var $inEl = $('#'+this.inEl),
					$outEl = $('#'+this.outEl),		
					animInterval = 100;
					$inEl.html(html);

			var $targets = $inEl.find('.transition'),
					targetCount = $targets.length;

			console.log({targetCount: targetCount, targets: $targets, inEl: $inEl});

			$outEl.animate({opacity: 0}, speed);
			$inEl.animate({opacity: 1},100, function(){



				$(randomize($targets)).each(function (i) {
					var $el = $(this);

					var after = (i !== targetCount-1)? null : function(){
						$outEl.attr('id', parentScope.inEl);
						$inEl.attr('id',parentScope.outEl);
					};
					window.setTimeout(function() {
						// This should be dynamic. each element should have an associated start state and end state.
							// This would be either tracked by backbone (view? or a collection of 'transition models'?).
							// Here the values are fixed and will be fixed on the targetted elements.	
						$el.animate({
							left: 0,
							top: 0,
							opacity: 1
						},{
							// duration: speed
							duration: speed,
							complete: after
				    	// specialEasing: {
				      	// left: 'easeInBack',
				      	// opacity: 'easeInBack'
				      	// top: 'easeInBack'
				    	// }
				    });
					}, i*animInterval);
				});

			});

		}
		// ,



		// slideIn: function(html, speed){
		// 	var parentScope = this,	

		// 	speed = (typeof speed !== 'undefined') ? speed : 400;
		// 	html = (typeof html !== 'undefined') ? html : $(this.right).html();
		// 	var $outEl = $('#'+this.left);
		// 	var $inEl = $('#'+this.right);
		// 	var $wrapper = $('#'+this.wrapper);
		// 		// var $outEl = $(wrapper),
		// 				// $inEl = (function(h){
		// 					// var a=document.createElement('div');a.innerHTML=h;return a.firstChild;
		// 				// })('<div class="transitioning"></div>');	

		// 	$inEl.html(html);

		// 	$wrapper.animate({ 
		// 			left: '-100%'
		// 		},{
		// 			duration: speed,
		//     	specialEasing: {
		//       	left: 'easeInBack'
		//     	},
		// 	    complete: function(){
		// 	    	// window.setTimeout(function(){
		// 	    		// console.log('left: 0 set on wrapper');
		// 		    	$wrapper.css({left: 0});	
		// 	    	// }, 1000);
		// 	    	// window.setTimeout(function(){
		// 	    		// console.log('right/left swapped');
		// 	    		$outEl.attr('id',parentScope.right);
		// 		    	$inEl.attr('id',parentScope.left);
		// 	    	// }, 2000);

		// 	    }
		//   });

		// 	return $inEl;
		// }
	};

	return Transitions;

});
