'use strict';

var originalLabels;

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

module.exports = window.Backbone.View.extend({
	namespace: 'contact',
	initialize: function(options){
		this.template = options.template;
		this.initialized = true;
		this.emailAddress = 'smt_@hotmail.co.uk';

		console.log(this.$el);
	},
	render: function(options){
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:showContent');

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');
		window.Backbone.trigger('page:setNamespace', this.namespace );

		this.setOiginalLabels();

		return this;

	},
	events: {
		'submit .contact-form' : 'submitForm',
		'keydown input.tester' : 'type'
	},
	type: function(e){
		var code = e.keyCode || e.which;
		console.log(code);
	},
	validateForm: function(){
		var $form = this.$el.find('.contact-form');

				var $name = $form.find('#name');
				var $email = $form.find('#email');
		// // $subject = $form.find('#subject'),
				var $message = $form.find('#message');

		var errors = [];

		if ($message.val().length > 5) {
			console.log('pass');
			resetLabel($message);
		} else if ($message.val().length) {
			errors.push({$el: $message, message: 'not long enough'});
		} else {
			errors.push({$el: $message, message: 'no message fail'});
		}

		if (validEmail($email.val())) {
			console.log('email pass');
			resetLabel($email);
		} else {
			console.log('email fail');
			errors.push({$el: $email});
		}

		if ($name.val().length > 1) {
			console.log('name pass');
			resetLabel($name);
		} else {
			console.log('name fail');
			errors.push({$el: $name});
		}

		if (errors.length) {
			$.each(errors, function(){
				console.log(this.message);
				addError(this.$el);
			});

			return false;
		}


		return true;
	},
	submitForm: function(e){
		e.preventDefault();

		console.log(this.originalLabels);

		var $form = this.$el.find('.contact-form');
		
		if (this.validateForm()) {
			var sendData = {
				_subject: 'spentaylor.com',
				message: $form.find('#message').val(),
				email: $form.find('#email').val()
			};

			$.ajax({
		    url: '//formspree.io/spen_@hotmail.co.uk', 
		    method: 'POST',
		    data: sendData,
		    dataType: 'json'
			});
		} else {
			console.log('form not valid');
		}
	
		
	},
	setOiginalLabels: function(){
		originalLabels = {
			name: this.$el.find('form label[for="name"]').text(),
			email: this.$el.find('form label[for="email"]').text(),
			message:  this.$el.find('form label[for="message"]').text()
		};
	}
});