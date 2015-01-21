'use strict';

define([
  'jquery',
	'transit'
], function($, Transit) {

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


	// Another function that could do with being moved into a more globally accessible module
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

		render: function (html) {
			// Render is purely responsible for injecting HTML into the $inEl, after that transition logic would take over.
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

			var H = $(window).height();

			console.log({ inCount: $inTargets.length, outCount: $outTargets.length});

			$inTargets.css('transform', 'translate(0,-'+$(window).height()+')');

			this.$inEl.animate({
				opacity: 1
			});

			$outTargets.each(function(i){
				var $el = $(this),
						elH = $el.height();

				window.setTimeout(function(){
					$el.transition({translate: [0,H]}, 500,'easeInBack');
				}, 60 * i);
			});

			$inTargets.each(function(i){
				var $el = $(this),
						elH = $el.height();

						console.log($el);

				window.setTimeout(function(){
					$el.transition({translate: [0,0], opacity: 1}, 1500,'easeInBack');
				}, 60 * i);
			});

			return this.pageSwitch();

		},


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
