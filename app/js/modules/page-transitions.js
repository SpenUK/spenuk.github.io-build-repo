'use strict';

var afterTrans = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';


function transitions (options) {
	/*jshint validthis:true */
	this.container = options.container;
	this.$main = $(this.main = options.main);
	this.$transitioner = $(this.transitioner = options.transitioner);
	this.animating = false;

	this.$transitioner.remove();

	console.log({tr: this.$transitioner, m: this.$main});

	this.render = function(content){
		return this[this.direction === 'prev' ? 'prev' : 'next'](content);
	};

	this.next = function(content){
		if (this.animating) {return false;}

		var transitions = this;
		var $container = $(this.container);

		this.$transitioner.html(content).insertAfter(this.$main);

		this.animating = true;
		// window.setTimeout(function(){
			$container.addClass('animating-next').removeClass('animating-prev').one(afterTrans, function(){

				transitions.$main.html(content);
				$container.removeClass('animating-next');
				transitions.$transitioner.remove();
				// this_.switchElements();
				transitions.animating = false;
			});
		// },0);
	};

	this.prev = function(content){
		if (this.animating) {return false; }

		var transitions = this;
		var $container = $(this.container);

		this.$transitioner.html(content).insertBefore(this.$main);

		this.animating = true;
		// window.setTimeout(function(){
			$container.addClass('animating-prev').removeClass('animating-next').one(afterTrans, function(){

				transitions.$main.html(content);
				$container.removeClass('animating-prev');
				transitions.$transitioner.remove();
				transitions.animating = false;
			});
		// },0);
	};

	return this;	
}

module.exports = transitions;