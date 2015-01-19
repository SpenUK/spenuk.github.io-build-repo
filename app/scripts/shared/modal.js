'use strict';

define([
  'jquery',
], function($) {

	var Modal = {
		init: function (options) {
			var defaults = this.defaults;
			this.$el = $(this.el = (options && options.el) ? options.el : defaults.el);
			this.$shader = $(this.shader = (options && options.shader) ? options.shader : defaults.shader);
			this.$container = $(this.container = (options && options.container) ? options.container : defaults.container);
			this.$closeButton = $(this.closeButton = (options && options.closeButton) ? options.closeButton : defaults.container);

			this.setListeners();

			return this;
		},
		openWith: function (reference) {
			this.changeContent(reference).show();

			return this;
		},
		changeContent: function(reference){
			if (typeof reference == 'undefined' || $(reference).length <= 0) return this;
			var content;

			// jQuery throws an error if html (<) is used as a selector, 
			// try/catch sets the content depending on whether html is passed
			try {
  			content = ($(reference).length >= 1) ? $(reference).html() : reference;
  		} catch(e) {
  			content = reference;
  		}

			this.$container.html(content);

			return this;
		},
		show: function () {
			this.$el.fadeIn(this.speed);

			return this;
		},
		hide: function(){
			var parentScope = this;
			var H = this.$el.height();

			this.$shader.fadeOut(300);
			this.$container.animate({bottom: -(H * 1.2)},{duration: 300,
		    specialEasing: {
		      bottom: "easeInBack"
		    },
		    complete: function(){
		    	parentScope.$shader.show();
		  		parentScope.$container.css({bottom: 'auto'});
		  		parentScope.$el.hide();
		    }
		  });

			return this;
		},
		setListeners: function () {
			var parentScope = this;
			$('body').on('click', '.fa-google-plus.fa-2x', function (e) {
				e.preventDefault();

				parentScope.openWith();
			});

			this.$el.on('click', '.modal__button--dismiss', function(){
				parentScope.hide();
			});

			$(document).on('keyup', function(e){
				if (e.which === 27) {parentScope.hide()};
			});

			this.$el.on('click', '.modal__shader', function(){
				parentScope.hide();
			});

			return this;
		},
		defaults: {
			el: '#modal',
			shader: '.modal__shader',
			container: '.modal__container',
			closeButton: '.modal__button--dismiss',
			speed: 400
		}
	}

	Modal.init();

	return Modal;
});