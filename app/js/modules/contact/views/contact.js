'use strict';

function validEmail(string) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(string);
}

function resetLabel(el){
	el.closest('.field').removeClass('error');
}

function addError(el){
	el.closest('.field').addClass('error');
}

var ViewExtension = require('../../../extensions/view'),
	contactModule = require('../module'),
	SocialButtonsView = require('./social/socialbuttons'),
	ContactFormView = require('./form/form'),
	template = require('../templates/contact'),

	ContactView = ViewExtension.extend({

		cName: 'contact',

		namespace: 'contact',

		template: template,

		initialize: function(){
			this.model = contactModule.getContactModel();

			this._super.apply(this, arguments);

			this.render();
		},

		views: function () {
			return {
				'.social-buttons': SocialButtonsView,
				'.form-holder': ContactFormView
			};
		},

		// render: function(){
		// 	// this.$el.html(this.template(options));

		// 	this.pending = false;

		// 	window.Backbone.trigger('ui:showContent');

		// 	window.Backbone.trigger('ui:updatePrev');
		// 	window.Backbone.trigger('ui:updateNext');
		// 	window.Backbone.trigger('page:setNamespace', this.namespace );

		// 	return this;

		// },

		events: {
			'submit .contact-form' : 'submitForm',
			'click .submission-error .fa-close': 'removeFormError'
		},

		validateForm: function(){
			var $form = this.$el.find('.contact-form'),
				$name = $form.find('#name'),
				$email = $form.find('#email'),
				$message = $form.find('#message'),
				errors = [];

			if ($message.val().length > 5) {
				resetLabel($message);
			} else if ($message.val().length) {
				errors.push({$el: $message, message: 'not long enough'});
			} else {
				errors.push({$el: $message, message: 'no message fail'});
			}

			if (validEmail($email.val())) {
				resetLabel($email);
			} else {
				errors.push({$el: $email});
			}

			if ($name.val().length > 1) {
				resetLabel($name);
			} else {
				errors.push({$el: $name});
			}

			if (errors.length) {
				$.each(errors, function(){
					addError(this.$el);
				});

				return false;
			}

			return true;
		},

		submitForm: function(e){
			e.preventDefault();
			var view = this;

			if (this.pending) { return false; }

			var $form = this.$el.find('.contact-form');
			
			if (this.validateForm()) {

				$form.addClass('pending');
				this.pending = true;

				var sendData = {
					_subject: 'spentaylor.com',
					message: $form.find('#message').val(),
					email: $form.find('#email').val()
				};

				$.ajax({
			    url: '//formspree.io/spen_@hotmail.co.uk', 
			    method: 'POST',
			    data: sendData,
			    dataType: 'json',
			    success: function(response){
			    	view.formSuccess(response);
			    },
			    error: function(){
			    	view.formError();
			    }
				});
			}
		},

		formSuccess: function(response){
			var $form = this.$el.find('.contact-form');
			$form.removeClass('pending');

			if (response.success) {
				$form.addClass('done').removeClass('error');
				this.pending = true;
			} else {
				this.formError();
				this.pending = false;
			}
			
		},

		formError: function(){
			var $form = this.$el.find('.contact-form').addClass('error');

			$form.removeClass('pending');
			this.pending = false;
		},

		removeFormError: function(){
			this.$el.find('.contact-form').removeClass('error');
		}

	});

module.exports = ContactView;
