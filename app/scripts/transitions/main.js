'use strict';

define([
  'jquery'
], function($) {

	// Setting custom easings on the $ object
	// Could be moved out into another more global script
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

	function cloneAndAppend (el) {
		var $el = $(el);

		if ($el.length >= 1) {
			var $newEl = $el.first().clone().addClass('clone');
					$newEl.insertAfter($el);

			return $newEl;
		} else {

			return false;
		};
		
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

		init: function (options) {
			console.log('init Transitons');
			var options = options || {};
			this.$inEl = $(this.inEl = (typeof options.page !== 'undefined') ? options.page : defaults.page);
			this.$outEl = cloneAndAppend(this.inEl);
			this.transitionSpeed = (typeof options.transitionSpeed !== 'undefined') ? options.transitionSpeed : defaults.transitionSpeed;
			return this;
		},
		// init: function (options) {
		// 	var options = options || {};
		// 	this.$inEl = $(this.inEl = (typeof options.inEl !== 'undefined') ? options.inEl : defaults.inEl);
		// 	this.$outEl = $(this.outEl = (typeof options.outEl !== 'undefined') ? options.outEl : defaults.outEl);
		// 	this.transitionSpeed = (typeof options.transitionSpeed !== 'undefined') ? options.transitionSpeed : defaults.transitionSpeed;
		// 	return this;
		// },

		render: function (html) {
			//  How to handle Render / init-ing?
			console.log({'$inEl': this.$inEl, 'inEl': this.inEl});
			this.$inEl.html(html);

			return this;
		},

		fadeIn: function (options) {
			var parentScope = this;
			var options = options || {};
			var	speed = (typeof options.speed != 'undefined') ? options.speed : defaults.transitionSpeed;

			this.$outEl.fadeOut(options);
			this.$inEl.fadeIn(speed, function(){
				parentScope.pageSwitch();
    	});
			return this.pageSwitch();
		},

		appear: function (options) {
			var parentScope = this;
			var options = options || {};
			var	speed = (typeof options.speed != 'undefined') ? options.speed : defaults.transitionSpeed;

			var $targets = this.$inEl.find('.transition'),
					targetCount = $targets.length;

			var animInterval = (speed / targetCount);

			console.log('appear transition');

			this.$outEl.animate({opacity: 0}, speed);
			this.$inEl.animate({opacity: 1},100, function(){



				$(randomize($targets)).each(function (i) {
					var $el = $(this);

					var after = (i !== targetCount-1)? null : parentScope.pageSwitch;
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
							complete: after,
				    	specialEasing: {
				      	left: 'easeInBack',
				      	opacity: 'easeInBack',
				      	top: 'easeInBack'
				    	}
				    });
					}, i*animInterval);
				});

			});
			return this.pageSwitch();
		}, // end appear

		topple: function (options) {
			var parentScope = this;
			var options = options || {};
			var	speed = (typeof options.speed != 'undefined') ? options.speed : defaults.transitionSpeed;

			var $inTargets = this.$inEl.find('.transition');
			var $outTargets = this.$outEl.find('.transition');

			var inAnimInterval = (speed / $inTargets.length);
			var outAnimInterval = (speed / $outTargets.length);

			console.log({ inCount: $inTargets.length, outCount: $outTargets.length});

			$outTargets.each(function(i){
				var $el = $(this);


				window.setTimeout(function(){

				console.log($el);
				// $('#push-wrapper').css({transform: 'translate3d(0,0,0)'});

					$el.css({
						'border' : '2px solid rgba(0,0,0,0.2)',
					  // '-webkit-transform':'translate(0px'+ window.height + + $el.height +'px)',
					  // '-ms-transform':'translate(0px'+ window.height + + $el.height +'px)',
					  // 'transform':'translate(0px'+ window.height + + $el.height +'px)'
					  '-webkit-transform':'translate(0px'+ 200 +'px)',
					  '-ms-transform':'translate(0px'+ 200 +'px)',
					  'transform':'translate(0px'+ 200 +'px)'
					});
					// $el.animate({
					// 	bottom: -($el.height * 1.2)
					// },{
					// 	duration: 300,
		   //  		specialEasing: {
		   //    		bottom: "easeInBack"
		   //  		},
		   //  		complete: function(){
		   //  			console.log('complete', i);
		   //  		}
					// });
				}, 100 * i);

			});

		},




		// slideIn: function(html, speed){
		// 	var parentScope = this,	

		// 	var	speed = (typeof speed !== 'undefined') ? speed : 400;
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

		pageSwitch: function () {
			var a = this.$inEl,
					b = this.$outEl;

					this.$inEl = b;
					this.$outEl = a;

			// this.$inEl.removeClass(this.inEl).addClass(this.outEl);
			// this.$outEl.removeClass(this.outEl).addClass(this.inEl);

			return this;
		}

	};

	var defaults = {
		// inEl: 'pageIn',
		// outEl: 'pageOut',
		page: '.page',
		inEl: 'pageTransition1',
		outEl: 'pageTransition2',
		transitionSpeed: 400
	}

	return Transitions;

});
