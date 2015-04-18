'use strict';

var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

function transitions (options) {
	/*jshint validthis:true */
	this.container = options.container;
	this.$main = $(this.main = options.main);
	this.$transitioner = $(this.transitioner = options.transitioner);
	this.animating = false;

	this.$transitioner.remove();

	console.log(this.$transitioner, this.$main);

	this.render = function(content){
		return this[this.direction === 'prev' ? 'prev' : 'next'](content);
	};

	this.next = function(content){
		console.log('is animating?', this.animating);
		if (this.animating) {console.log('early return');return false;}


		var transitions = this;
		var $container = $(this.container);

		this.animating = true;
		$container.addClass('animate-next');
		this.$transitioner.html(content).insertAfter(this.$main);

		setTimeout(function(){
			$container.addClass('go').one(transitionEnd, function(){
				transitions.$main.html(content);
				console.log('after tans callback', transitions.animating);
				$container.removeClass('animate-next go');
				transitions.$transitioner.remove();
				transitions.animating = false;
			});
		},0);

	};

	this.prev = function(content){
		console.log('is animating?', this.animating);
		if (this.animating) {console.log('early return');return false;}

		var transitions = this;
		var $container = $(this.container);


		this.animating = true;
		this.$transitioner.html(content).insertBefore(this.$main);
		$container.addClass('animate-prev');
		
		setTimeout(function(){
			$container.addClass('go').one(transitionEnd, function(){
				transitions.$main.html(content);
				console.log('after tans callback', transitions.animating);
				$container.removeClass('animate-prev go');
				transitions.$transitioner.remove();
				transitions.animating = false;
			});
		},10);
	};

	// this.next = function(content){
	// 	if (this.animating) {return false;}

	// 	var transitions = this;
	// 	var $container = $(this.container);

	// 	this.$transitioner.html(content).insertAfter(this.$main);

	// 	this.animating = true;
	// 	$container.addClass('animating-next').removeClass('animating-prev').one(transitionEnd, function(){
	// 		transitions.$main.html(content);
	// 		$container.removeClass('animating-next');
	// 		transitions.$transitioner.remove();
	// 		transitions.animating = false;
	// 	});
	// };

	// this.prev = function(content){
	// 	if (this.animating) {return false; }

	// 	var transitions = this;
	// 	var $container = $(this.container);

	// 	this.$transitioner.html(content).insertBefore(this.$main);

	// 	this.animating = true;
	// 	$container.addClass('animating-prev').removeClass('animating-next').one(transitionEnd, function(){
	// 		transitions.$main.html(content);
	// 		$container.removeClass('animating-prev');
	// 		transitions.$transitioner.remove();
	// 		transitions.animating = false;
	// 	});
	// };

	return this;	
}

module.exports = transitions;