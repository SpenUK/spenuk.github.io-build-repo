'use strict';

define([
  'jquery',
	// 'transit'
	'shared/transitTemp'
], function($) {

	// Setting custom easings on the $ object
	// Could be moved out into another more global script
	$.easing.easeInBack = function (x, t, b, c, d, s) {
    if (s === undefined) { s = 1.2; }
    return c*(t/=d)*t*((s+1)*t - s) + b;
  };

  // Could be  moved out into a utilities object?
  // takes an html string blob and treats the outer most element as a DOM element,
  // if there is only one el on the top level (i.e. the content is wrapped in a container) then that el is returned,
  // otherwise the html is retuned wrapped in a containing div.

 //  function buildHtml (html) {
	// 	var a=document.createElement('div');
	// 			a.className = 'container';
	// 			a.innerHTML = html;

	// 	return (a.childElementCount === 1)?a.firstChild:a;
	// } 

	function cloneAndAppend (el) {
		var $el = $(el);

		if ($el.length >= 1) {
			var $newEl = $el.first().clone().addClass('clone');
					$newEl.insertAfter($el);

			return $newEl;
		} else {

			return false;
		}
		
	}

	// Another function that could do with being moved into a more globally accessible module
	function randomize (array) {
		var a =[],i,r,x;		
		for (i = array.length - 1; i >= 0; i--) {
			r = Math.floor(Math.random()*array.length);
			x = array.splice(r ,1);
			a.push(x[0]);
		}
		return a;
	}

  // 
	var Transitions = {

		init: function (options) {
			console.log('init Transitons');
			options = options || {};
			this.$inEl = $(this.inEl = (typeof options.page !== 'undefined') ? options.page : this.defaults.page);
			console.log({inEl: this.inEl, outEl: this.outEl});
			this.$outEl = cloneAndAppend(this.inEl);

			this.$inEl.ref = 'original';
			this.$outEl.ref = 'clone';

			this.defaults.animation = (typeof options.animation !== 'undefined') ? options.animation : this.defaults.animation;
			this.transitionSpeed = (typeof options.transitionSpeed !== 'undefined') ? options.transitionSpeed : this.defaults.transitionSpeed;
			return this;
		},

		render: function (params) {
			console.log('template render');
			if (typeof params.html === 'undefined') { console.log('params.html is not defined'); return false; }
			var anim = (typeof params.animation === 'undefined' || typeof this[params.animation] === 'undefined') ? this.defaults.animation : params.animation;
			this.$inEl.html(params.html);

			console.log(anim);
			// run the animation with the anim value - either a specified animation type or the default.
			this[anim]();

			return this;
		},

		fadeIn: function (options) {
			var parentScope = this;
					options = options || {};
			var	speed = (typeof options.speed !== 'undefined') ? options.speed : this.defaults.transitionSpeed;

			this.$outEl.fadeOut(options);
			this.$inEl.fadeIn(speed, function(){
				parentScope.pageSwitch();
    	});
			return this.pageSwitch();
		},

		appear: function (options) {

			var parentScope = this;
					options = options || {};
			var	speed = (typeof options.speed !== 'undefined') ? options.speed : this.defaults.transitionSpeed;

			var $targets = this.$inEl.find('.transition'),
					targetCount = $targets.length;

			var animInterval = (speed / targetCount);

			// console.log({ref: this.$outEl.ref});

			this.$outEl.animate({opacity: 0}, speed);
			this.$outEl.animate({opacity: 0}, 2000);

			this.$inEl.animate({opacity: 1},100, function(){
			// this.$inEl.animate({opacity: 1},1000, function(){

				// console.log({targets: $targets});

				$(randomize($targets)).each(function (i) {
					var $el = $(this);

					// var after = (i !== targetCount-1)? null : parentScope.pageSwitch;
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
							// complete: function () { 
							// 	if (typeof after === 'function') {
							// 		after(parentScope);	
							// 	};
								
							// },
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
			
			// return this;
		}, // end appear

		topple: function (options) {
			// var parentScope = this;

			options = options || {};
			var	speed = (typeof options.speed !== 'undefined') ? options.speed : this.defaults.transitionSpeed;

			var $inTargets = this.$inEl.find('.transition');
			var $outTargets = this.$outEl.find('.transition');

			var inAnimInterval = (speed / $inTargets.length);
			var outAnimInterval = (speed / $outTargets.length);

			var H = $(window).height();

			$inTargets.css('transform', 'translate(0,-'+$(window).height()+')');

			this.$inEl.animate({
				opacity: 1
			});

			$outTargets.each(function(i){
				var $el = $(this);

				// console.log($el.closest('.page'));
				window.setTimeout(function(){
					// $el.transition({translate: [0,H], opacity: 0}, 500,'easeInBack');
				}, inAnimInterval * i);
			});

			$inTargets.each(function(i){
				var $el = $(this);

				window.setTimeout(function(){
					$el.transition({translate: [0,0], opacity: 1}, 1500,'easeInBack');
				}, outAnimInterval * i);
			});

			return this.pageSwitch();
		},


		pageSwitch: function () {
			// this.debugInOut();
			var a = this.$inEl,
					b = this.$outEl;

					this.$inEl = b;
					this.$outEl = a;

					// this.$outEl.css({backgroundColor: 'rgba(0,180,180,0.5)'});
					// this.$inEl.css({backgroundColor: 'rgba(180,0,180,0.5)'});

			return this;
		},
		debugInOut: function () {
			var parentScope = this;
			console.log({out: parentScope.$outEl.html().length, in: parentScope.$inEl.html().length});
			var inRef = parentScope.$inEl.ref;
			var outRef = parentScope.$outEl.ref;
			console.log('els',{out: parentScope.$outEl, in: parentScope.$inEl});
			console.log('refs',{outRef: outRef, inRef: inRef});
		},

		defaults: {
			// inEl: 'pageIn',
			// outEl: 'pageOut',
			page: '.page',
			inEl: 'pageTransition1',
			outEl: 'pageTransition2',
			animation: 'appear',
			transitionSpeed: 400
		}


	};

	return Transitions;

});
