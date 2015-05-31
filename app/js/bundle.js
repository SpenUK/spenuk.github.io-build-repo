(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var router = require('./router.js');
var templates = require('./templates.js');

window.testWpApi = function(){
  $.ajax({
    url: 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts',
    dataType: 'jsonp',
    success: function(r){console.log({response: r});},
    error: function(){console.log('error');}
      });
  // $.get('http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts', function(r){console.log(r);}, function(){console.log('error');});
};


var App = {
  introPanel: '#landing',
  mainPanel: '.main .content',
  transitionPanel: '.main .transition-content',

  templates: templates,

  views: {
    master: require('./views/master.js'),

    intro: require('./views/intro.js'),
    blog: require('./views/blog-post.js'),
    projects: require('./views/project.js'),
    contact: require('./views/contact.js'),
    about: require('./views/about.js')
  },

  initialize: function(options){
  	options = options; // linter -__-
    // var templates = this.templates;
  	this.$introPanel = $(this.introPanel);
  	this.$mainPanel = $(this.mainPanel);

    // is it worth defining the top panel content here? will it ever change? could be used as an index page?
    this.$introPanel.html(templates.intro());
    // this.views.ui.header = new this.views.ui.header({template: templates['ui/header']});

    this.views.master = new this.views.master();

  	window.r = this.router = new router(this);

    // use local storage to define he first view? fix this up at a higher level first?
    // $(this.mainPanel).html();
  }
};

module.exports = App;
},{"./router.js":9,"./templates.js":10,"./views/about.js":11,"./views/blog-post.js":12,"./views/contact.js":14,"./views/intro.js":15,"./views/master.js":16,"./views/project.js":17}],2:[function(require,module,exports){
'use strict';

var CollectionExtension = require('./collectionExtension.js');

module.exports = CollectionExtension.extend({
	
	// model: ArticleModel,
	position: 0,
	totalRecords: 0,
	isLoading: false,
  url: function(){
  	return 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts?callback=?';
  },
  parse: function(response){
  	this.totalRecords = response.found;
    return response.posts;
  },
  jsonp: true
});
},{"./collectionExtension.js":3}],3:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.Collection.extend({
	
	position: 0,
	totalRecords: 0,
	isLoading: false,
  parse: function(response){ //, xhr
  	this.totalRecords = response.length;
    return response;
  },
  setCurrentRecord: function(options){
    if (options.slug && this.where({slug: options.slug}).length) {
      this.currentRecord = this.where({slug: options.slug})[0];
    } else if (options.model && this.contains(options.model)) {
      this.currentRecord = options.model;
    }
    this.position = this.indexOf(this.currentRecord);
    return this.currentRecord;
  },
  getCurrentRecord: function(){
    return this.at(this.position);
  },
  getLatest: function(){
    return this.at(0);
  },
  addStubs: function(options){
    options = (options || {});

    var collection = this;
    var stubs = (options.stubs || this.stubs || []);
    var records = this.parse(stubs);

    var i;
    window.setTimeout(function(){
      for (i = records.length - 1; i >= 0; i--) {
        var record = records[i];
        if (!collection.where({ID: record.ID}).length) {
          collection.add(record);
        }
      }
      (options.success || $.noop)();
    }, (options.time || 0));

  },
  getNextModel: function(){
    return this.at((this.position +1 > this.length -1)?  false : this.position + 1);
  },
  getPrevModel: function(){
    return this.at((this.position -1 < 0) ? false : this.position - 1);
  },
  checkSlug: function(slug){
    return (this.collection.where({slug: slug}).length >= 1);
  },
  defaultSlug: function(){
    return this.currentRecord ? this.currentRecord.get('slug') : this.first().get('slug');
  }
});
},{}],4:[function(require,module,exports){
'use strict';

var CollectionExtension = require('./collectionExtension.js');
var stubs = require('../projects-stubs.js');

module.exports = CollectionExtension.extend({
	
	// model: ArticleModel,
  stubs: stubs,
	position: 0,
	totalRecords: 0,
	isLoading: false,
  url: function(){
  	return 'http://public-api.wordpress.com/rest/v1/sites/ijustwanttotesttheapi.wordpress.com/posts';
  },
  stubbed: true
});
},{"../projects-stubs.js":8,"./collectionExtension.js":3}],5:[function(require,module,exports){
'use strict';

var wheelEvent = (/Firefox/i.test(navigator.userAgent))? 'DOMMouseScroll' : 'mousewheel';

module.exports = {
	initialize: function(options){ 
		options = (options || {});

		this.cooldownTime = (options.cooldownTime || 1000);
		this.ready = true;

		var module = this;

		var trackScroll = function(e){
			if (!module.ready) { return false; }

			var evt = (window.event || e); // equalize event object
			var delta= evt.detail ? evt.detail*(-120) : evt.wheelDelta; // check for detail first so Opera uses that instead of wheelDelta
			var deltaX = evt.deltaX;

			if (deltaX > 160) {
				// window.Backbone.trigger('page:prevContent');
				window.Backbone.trigger('swiper:right');
				return module.swiperCooldown();
			} else if (deltaX < -160) {
				// window.Backbone.trigger('page:nextContent');
				window.Backbone.trigger('swiper:left');
				return module.swiperCooldown();
			}

			// An up or down swipe should be near enough vertical.
			// If the X-delta is at all significant then return early before the Y-delta is considered.
			if (Math.abs(deltaX) >= 50) { return false; }

			if (delta > 320) {
				// window.Backbone.trigger('router:goToLanding');	
				window.Backbone.trigger('swiper:up');
				return module.swiperCooldown();
			} else if (delta < -320) {
				// window.Backbone.trigger('router:goToCurrentContent');	
				window.Backbone.trigger('swiper:down');
				return module.swiperCooldown();
			}
		};

		if (document.attachEvent){ //if IE (and Opera depending on user setting)
    	document.attachEvent('on'+wheelEvent, trackScroll);
		} else if (document.addEventListener) {//WC3 browsers
    	document.addEventListener(wheelEvent, trackScroll, false);
		}

	},
	swiperCooldown: function(){
		var module = this;
		module.ready = false;

		window.setTimeout(function(){
			module.ready = true;
		}, module.cooldownTime);
	}

};
},{}],6:[function(require,module,exports){
'use strict';

var app = require('./app.js');



$(document).on('ready', function(){
	app.initialize();
});
},{"./app.js":1}],7:[function(require,module,exports){
'use strict';

var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

function transitions (options) {
	/*jshint validthis:true */
	this.container = options.container;
	this.$main = $(this.main = options.main);
	this.$transitioner = $(this.transitioner = options.transitioner);
	this.animating = false;

	this.$transitioner.remove();

	this.render = function(content){
		return this[this.direction === 'prev' ? 'prev' : 'next'](content);
	};

	this.next = function(content){
		if (this.animating) {return false;}


		var transitions = this;
		var $container = $(this.container);

		this.animating = true;
		$container.addClass('animate-next');
		this.$transitioner.html(content).insertAfter(this.$main);

		setTimeout(function(){
			$container.addClass('go').one(transitionEnd, function(){
				transitions.$main.html(content);
				$container.removeClass('animate-next go');
				transitions.$transitioner.remove();
				transitions.animating = false;
			});
		},0);

	};

	this.prev = function(content){
		if (this.animating) {return false;}

		var transitions = this;
		var $container = $(this.container);


		this.animating = true;
		this.$transitioner.html(content).insertBefore(this.$main);
		$container.addClass('animate-prev');
		
		setTimeout(function(){
			$container.addClass('go').one(transitionEnd, function(){
				transitions.$main.html(content);
				$container.removeClass('animate-prev go');
				transitions.$transitioner.remove();
				transitions.animating = false;
			});
		},10); // for some reason, setting to 0 causes a glitch?
	};

	return this;	
}

module.exports = transitions;
},{}],8:[function(require,module,exports){
module.exports = [
	{
		ID: 1,
		title: 'Snowriders Logo',
		slug: 'Snowriders-logo',
		stack: {
			graphics: ['Illustrator']
		},
		content: '<img src="assets/images/projects/snowriders.png" style="width:100%;"><p>During my time studying at Plymouth University I was involved with the lovely folks who made up the Plymouth Snowriders (The union\'s snow sports society). I was lucky enough to have good friends on the committee so never actually had to pay membership (shhhh...).<br>In my final year I had started teaching myself how to use Illustrator and decided to pay back the club by giving their logo a facelift.</p><p>I didn\'t want to venture too far away from the original so I used the same font (Arial, please forgive me!) and I re-drew the \'snowriders lady\' so that we would have it in a scalable format rather than just the heavily pixelated version that we already had.<br>I chose to take the one line \'snowriders\' and split this into two so that it would better fit on teeshirts and hoodies and chose a very bold look for easy recognition, the snowriders are a proud bunch!</p>'
	}, {
		ID: 2,
		title: 'Harry Potty',
		slug: 'harry-potty',
		stack: {
			js: ['jquery'],
			php: ['']
		},
		content: '<img src="assets/images/projects/harrypotty.png" style="width:100%;"><p>My dad is a bit of a clown, no really! He works as a children\'s entertainer so while I was getting started with learning PHP and JS I built a very basic website for him.</p><p>The website served only one purpose which was to provide a contact form for potential customers wanting to get in touch.<br>The code was pretty terrible... very basic PHP to serve up the site and send the form details with jQuery to validate on the frontend.</p>'
	},{
		ID: 3,
		title: 'The Sauce',
		slug: 'the-sauce',
		stack: {
			js: [''],
			php: ['']
		},
		content: '<img src="assets/images/projects/sauce.png" style="width:100%;"><p>The reason I got started with learning to code was to set up an ecommerce site for \'The Sauce\', a brand that I was hoping to set up.<br>I had started creating designs for teeshirts and sweatshirts etc., bought a load of printing equipment and inks and needed to set up a channel a channel to sell the products that I would be creating.</p><p>Although there is certainly nothing groundbreaking in this project I had set myself a few challenges that turned out to be quite tough at the time and helped me understand more about PHP, JS and coding in general.</p><h2>Product Listing</h2><hr><p>Rather than opt for a straight up list of product thumbnails I wanted to have sections that featured a number of thumbnails with a \'product focus\' panel that would show more detail of whichever product the user was currently hovering over.<br>Each of these panels would have an alternating layout in order to keep some balance down the page.<br>This was where I learned looping in PHP and was my first real challenge with javascript (Although my solution was terrible, crazy data attributes everwhere!)</p><h2>Product Lightbox</h2><hr><p>I didn\'t want to have the user leave the product listing page eahc time they wanted to view a product so I attempted to build out a light-box.<br>Although I did get this to work, the solution, again, lacked elegance. rather than performing an AJAX call to populate the lightbox, or render a template with a few pieces of product data, I relyed on the data attributes that I had rendered out on each thumbnail div.<br>Utterly terrible but very educational!</p>'
	},{
		ID: 4,
		title: 'Surf Tracking App Concept',
		slug: 'surf-tracking-app-concept',
		stack: {
			js: ['jQuery'],
			ruby: ['Ruby on Rails']
		},
		content: '<img src="assets/images/projects/surfappconcept.png" style="width:100%;"><p>During my time studying at Bitmaker Labs in Toronto, myself and a couple of classmates decided to enter the maker edition of start-up weekend.</p><p>I had had an idea a year or so before hand whilst finishing up at university to create housing for a smartphone that could be attached to a surfboard in order to collect data about the surfer\'s performance during their session, allowing them to review the data later. So we went about prototyping a device (in place of the smartphone housing) and the web app that would display the data.</p><p>As this was more of a concept project than an actual attempt at building a product, I added some functionality that wouldn\'t really be achievable, such as real-time wave-to-wave updates to the surfers profile, where each wave would be plotted on a local map with it\'s speed and distance shown along side.</p><p>We didn\'t win any prizes but didn\'t do terrbily either as we were somewhere in the top 9 out of 40+ teams.</p>'
	},{
		ID: 5,
		title: 'RPG adventure game',
		slug: 'rpg-adventure-game',
		stack: {
			js: ['jQuery'],
			ruby: ['Ruby on Rails']
		},
		content: '<img src="assets/images/projects/rpg.png" style="width:100%;"><p>For my final project at Bitmaker Labs, I decided to build an RPG browser game that allows players to create a character, battle NPCs and other players, collect gold &amp; items, level up and keep track of their rank compared to other players.</p><p>This was hard work, especially due to the limited time frame which involved a few ~18 hour sessions and one 36 hour session! (We had roughly two weeks to hack on our final projects). However, as much as it was hardwork it was a lot of fun!</p><p>I learned a heap about Ruby on Rails in this time, particularly since there were some complex relationships going on between the different resources and entities in this game.</p><p>The project has since been laid to rest but I do still aim to find the time to re-build it with some extra features, such as using websockets and HTML5 canvas! - it\'d be a fun side project to have on the go!</p>'
		// },{
		// 	ID: XX,
		// 	title: 'River Island Checkout',
		// 	slug: 'river-island-checkout',
		// 	stack: {
		// 		js: ['jQuery'],
		// 		'c#': ['Razor', '.net']
		// 	},
		// 	apis: ['Google Maps'],
		// 	content: '<img src="assets/images/projects/river-island-checkout.png" style="width:100%;"><p></p>'
		// },{
		// 	ID: XX,
		// 	title: 'Nintendo Customer Service',
		// 	slug: 'nintendo-customer-service',
		// 	stack: {
		// 		js: ['jQuery'],
		// 		php: ['SilverStripe']
		// 	},
		// 	content: '<img src="assets/images/projects/nintendo-customer-service.png" style="width:100%;"><p></p>'
		// },{
		// 	ID: XX,
		// 	title: 'Jura Tastival 2015',
		// 	slug: 'jura-tastival-2015',
		// 	stack: {
		// 		js: ['jQuery', 'Grunt']
		// 	},
		// 	content: '<img src="assets/images/projects/jura-tastival-2015.png" style="width:100%;"><p></p>'
		// },{
		// 	ID: XX,
		// 	title: 'Whyte & Mackay',
		// 	slug: 'whyte-and-mackay',
		// 	stack: {
		// 		js: ['jQuery', 'Grunt', 'Skrollr']
		// 	},
		// 	content: '<img src="assets/images/projects/whyte-and-mackay.png" style="width:100%;"><p></p>'
		// },{
		// 	ID: XX,
		// 	title: 'CapriSun Minions',
		// 	slug: 'capriSun-minions',
		// 	stack: {
		// 		js: ['jQuery'],
		// 		php: ['SilverStripe']
		// 	},
		// 	content: '<img src="assets/images/projects/capriSun-minions.png" style="width:100%;"><p></p>'
		},{
			ID: 6,
			title: 'Greenvale Potatopals',
			slug: 'greenvale-potatopals',
			stack: {
				js: ['jQuery'],
				php: ['SilverStripe']
			},
			content: '<img src="assets/images/projects/greenvale.png" style="width:100%;"><p></p><p>GreenVale Potatoes were running a promotion where customers buying their products could enter on-pack codes to redeem and collect points... or rather \'Potatokens\'!</p> <p>This was quite a fun project to work on. As well as it having a fun cartoony style it presented a few simple but interesting challenges to overcome.</p> <p>The main challenge was the handling of the token redemptions, there were a number of different ways for a user to earn these tokens, through different on-pack and magazine codes and through facebook friend referals - certain sources were repeatable, others were not. Another challenge was to integrate a third party API that handled the validation of the promo codes - which turned out to have a couple of bugs!</p> '
		}

];




},{}],9:[function(require,module,exports){
'use strict';

var _=window._;

var AppRouter = window.Backbone.Router.extend({
	routes: {
		'': 'root',
		'blog(/)(/:post)': 'blog',
		'projects(/:project)': 'projects',
		'contact': 'contact',
		'about': 'about'
	},

	initialize: function(context){

		this.listenTo(window.Backbone, 'router:redirect', this.redirect);
		this.listenTo(window.Backbone, 'router:goToCurrentContent', this.goToCurrentContent);
		this.listenTo(window.Backbone, 'router:goToLanding', this.goToLanding);
		this.listenTo(window.Backbone, 'router:nextContent', this.goToNextContent);
		this.listenTo(window.Backbone, 'router:prevContent', this.goToPrevContent);
		this.listenTo(window.Backbone, 'router:setCurrentContent', this.setCurrentContent);

		this.currentContentRoute = this.defaultContentRoute();
		
		this.on('route:root' ,function(){

			if (!context.views.intro.initialized) {
				context.views.intro = new context.views.intro({
	  			el: context.introPanel,
	  			template: context.templates.intro
	  		});
			}

			window.Backbone.trigger('ui:showIntro');

  		// new context.views.intro({
  		// 	template: context.templates.intro
  		// });
  		// $('body').addClass('intro');

  		this.lastRoute = window.Backbone.history.fragment;
		});

		this.on('route:blog' ,function(slug){

			// Only transition if the current view is not changing (but the resource is).
			var transition = (this.currentContentView === context.views.blog && this.lastRoute !== '');

			if (!context.views.blog.initialized) {
				context.views.blog = new context.views.blog({
	  			el: context.mainPanel,
	  			template: context.templates['blog-post']
	  		});
			}

  		context.views.blog.render({slug: slug, transition: transition});
  		window.Backbone.trigger('page:message', '<p>Eek, lots of Ipsum! I\'ll start writing actual posts once this site is fixed up properly. For now, enjoy all the various ipsums!</p>');

			this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			this.currentContentView = context.views.blog;
			
		});

		this.on('route:projects' ,function(slug){
			// Only transition if the current view is not changing (but the resource is).
			var transition = (this.currentContentView === context.views.projects && this.lastRoute !== '');

			if (!context.views.projects.initialized) {
				context.views.projects = new context.views.projects({
	  			el: context.mainPanel,
	  			template: context.templates.project,
	  		});
			}

			context.views.projects.render({slug: slug, transition: transition});

			this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
			this.currentContentView = context.views.projects;
  		
		});

		this.on('route:contact' ,function(){
			if (!context.views.contact.initialized) {
				context.views.contact = new context.views.contact({
	  			el: context.mainPanel,
	  			template: context.templates.contact
	  		});
			}

  		context.views.contact.render();
  		this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
  		this.currentContentView = context.views.contact;
  		
		});

		this.on('route:about' ,function(){
			if (!context.views.about.initialized) {
				context.views.about = new context.views.about({
	  			el: context.mainPanel,
	  			template: context.templates.about
	  		});
			}

  		context.views.about.render();
  		this.currentContentRoute = this.lastRoute = window.Backbone.history.fragment;
  		this.currentContentView = context.views.about;
  		
		});

		this.on('route:defaultRoute', function(){
		});

		window.Backbone.history.start();

	},
	setCurrentContent: function(content){
		if (content.view) {this.currentContentView = content.view; }
		if (content.route) {this.currentContentRoute = this.lastRoute = content.route; }
	},
	goToLanding: function () {
		this.navigate('', {trigger: true});
	},
	goToCurrentContent: function () {
		this.navigate(this.currentContentRoute, {trigger: true});
	},
	goToPrevContent: function () {
		if (!_.isFunction(this.currentContentView.getPrevModel)) { return false; }
		var route = this.currentContentView.prevRoute();
		if (!route) { return false; }
		this.navigate(route);
	},
	goToNextContent: function () {
		if (!_.isFunction(this.currentContentView.getNextModel)) { return false; }
		var route = this.currentContentView.nextRoute();
		if (!route) { return false; }
		this.navigate(route);
	},
	defaultContentRoute: function () {
		return '#/about';
	},
	redirect: function(route){
		this.navigate(route, {trigger: true});
	}

});

module.exports = AppRouter;
},{}],10:[function(require,module,exports){
var exports = (function () { 

 var Handlebars = window.Handlebars; 

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	\n	<h1 class=\"title\">About Me....</h1>\n	<div class=\"panel\" style=\"color: rgba(180,180,180,1); text-align: center;\">\n		<h2>Yikes!</h2>\n		<p>This bit's coming soon I promise!</p>\n	</div>\n\n</div>";
  },"useData":true});

this["JST"]["blog-post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"with","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"grid-container\">\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<h1 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n					<div class=\"panel\">\n						\n						";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"5":function(depth0,helpers,partials,data) {
  return "		<div class=\"grid-container placeholder-view\">\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<div class=\"panel\">\n						<h2 style=\"text-align:center; color: #999\">Eek!</h2>\n						<p>There seems to have been an error.</p>\n						<p>Not to worry! You should be able to see my blog posts on Wordpress.</p>\n					</div>\n				</div>\n			</div>\n		</div>\n";
  },"7":function(depth0,helpers,partials,data) {
  return "		<div class=\"grid-container placeholder-view\">\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n						<h2 style=\"text-align:center; color: #999\">Loading...</h2>\n				</div>\n			</div>\n		</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

this["JST"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container contact\">\n\n	<div class=\"grid-row\">\n\n		<div class=\"small-12 large-4\">\n			<div class=\"connect\">\n				\n				<h2>Connect</h2>\n				<ul class=\"social-icons\">\n					<li>\n						<a target=\"_blank\" href=\"https://twitter.com/Spen_Taylor\">\n							<div class=\"button twitter\">\n								<i class=\"fa fa-twitter left\"></i>\n								<p>Twitter</p>\n							</div>\n						</a>\n					</li>\n					<li>\n						<a target=\"_blank\" href=\"https://github.com/SpenUK\">\n							<div class=\"button github\">\n								<i class=\"fa fa-github left\"></i>\n								<p>GitHub</p>\n							</div>\n						</a>\n					</li>\n					<li>\n						<a target=\"_blank\" href=\"http://uk.linkedin.com/in/spentaylor\">\n							<div class=\"button linked-in\">\n								<i class=\"fa fa-linkedin left\"></i>\n								<p>LinkedIn</p>\n							</div>\n						</a>\n					</li>\n				</ul>\n			</div>\n		</div>\n\n		<div class=\"small-12 large-8\">\n			<div class=\"say-hello\">\n				<h2>Say Hello!</h2>\n				<form class=\"contact-form\">\n\n					<div class=\"fields\">\n\n						<div class=\"submission-error\">\n							Yikes! Something went wrong, try again!\n							<i class=\"fa fa-close right\"></i>\n						</div>\n\n						<div class=\"field\">\n				    	<input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Name\"/>\n						</div>\n\n						<div class=\"field\">\n				    	<input type=\"text\" name=\"email\" id=\"email\"  placeholder=\"Email\"/>\n				    </div>\n\n\n						<div class=\"field\">\n				    	<textarea name=\"message\" id=\"message\" rows=\"6\" placeholder=\"What's up?\"></textarea>\n						</div>\n\n						<div class=\"thanks-message\">\n							<div class=\"panel\">\n								<h2>Awesome!</h2>\n								<p>Thanks for gettin in touch!<br> I'll be sure to get back to you soon!</p>\n							</div>\n						</div>\n\n					</div>\n			    \n\n			    <button class=\"submit\" value=\"Send\"><span>Fire away!</span><i class=\"fa fa-spinner fa-spin\"></i><i class=\"fa fa-thumbs-up\"></i></button>\n				</form>\n			</div>\n		</div>\n\n		</div>\n\n</div>";
},"useData":true});

this["JST"]["intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"social-icons\">\n	<li><a target=\"_blank\" href=\"https://twitter.com/Spen_Taylor\"><i class=\"fa fa-twitter\"></i></a></li>\n	<li><a target=\"_blank\" href=\"https://github.com/SpenUK\"><i class=\"fa fa-github\"></i></a></li>\n	<li><a target=\"_blank\" href=\"http://uk.linkedin.com/in/spentaylor\"><i class=\"fa fa-linkedin\"></i></a></li>\n</ul>\n\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n	 width=\"100%\" viewBox=\"0 0 1000 160\" enable-background=\"new 0 0 1000 160\" style=\"max-width: 900px; margin-bottom: 40px;\">\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M90.479,99.398c0,6.198-1.572,11.701-4.717,16.509c-3.145,4.809-7.68,8.545-13.604,11.211\n			c-5.925,2.666-12.875,3.999-20.85,3.999c-6.654,0-12.236-0.468-16.748-1.401s-9.206-2.563-14.082-4.888v-24.062\n			c5.149,2.644,10.504,4.706,16.064,6.187c5.56,1.481,10.664,2.222,15.312,2.222c4.01,0,6.949-0.694,8.818-2.085\n			c1.868-1.39,2.803-3.179,2.803-5.366c0-1.367-0.376-2.563-1.128-3.589s-1.96-2.062-3.623-3.11\n			c-1.664-1.048-6.096-3.189-13.296-6.426c-6.518-2.962-11.405-5.833-14.663-8.613c-3.259-2.779-5.674-5.97-7.246-9.57\n			c-1.572-3.6-2.358-7.861-2.358-12.783c0-9.205,3.35-16.383,10.049-21.533c6.699-5.149,15.904-7.725,27.617-7.725\n			c10.345,0,20.895,2.393,31.65,7.178L82.208,56.4c-9.343-4.283-17.409-6.426-24.199-6.426c-3.51,0-6.062,0.615-7.656,1.846\n			c-1.596,1.23-2.393,2.758-2.393,4.58c0,1.96,1.014,3.715,3.042,5.264c2.027,1.55,7.53,4.375,16.509,8.477\n			c8.613,3.874,14.595,8.032,17.944,12.476S90.479,92.654,90.479,99.398z\"/>\n	</g>\n	<g>\n		<path fill=\"#43BFB4\" d=\"M90.479,89.398c0,6.198-1.572,11.701-4.717,16.509c-3.145,4.809-7.68,8.545-13.604,11.211\n			c-5.925,2.666-12.875,3.999-20.85,3.999c-6.654,0-12.236-0.468-16.748-1.401s-9.206-2.563-14.082-4.888V90.766\n			c5.149,2.644,10.504,4.706,16.064,6.187c5.56,1.481,10.664,2.222,15.312,2.222c4.01,0,6.949-0.694,8.818-2.085\n			c1.868-1.39,2.803-3.179,2.803-5.366c0-1.367-0.376-2.563-1.128-3.589s-1.96-2.062-3.623-3.11\n			c-1.664-1.048-6.096-3.189-13.296-6.426c-6.518-2.962-11.405-5.833-14.663-8.613c-3.259-2.779-5.674-5.97-7.246-9.57\n			c-1.572-3.6-2.358-7.861-2.358-12.783c0-9.205,3.35-16.383,10.049-21.533c6.699-5.149,15.904-7.725,27.617-7.725\n			c10.345,0,20.895,2.393,31.65,7.178L82.208,46.4c-9.343-4.283-17.409-6.426-24.199-6.426c-3.51,0-6.062,0.615-7.656,1.846\n			c-1.596,1.23-2.393,2.758-2.393,4.58c0,1.96,1.014,3.715,3.042,5.264c2.027,1.55,7.53,4.375,16.509,8.477\n			c8.613,3.874,14.595,8.032,17.944,12.476S90.479,82.654,90.479,89.398z\"/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M178.458,61.596c0,11.166-3.293,19.79-9.878,25.874c-6.586,6.084-15.939,9.126-28.062,9.126h-7.588v33.154\n			h-27.002V29.809h34.59c12.623,0,22.103,2.758,28.438,8.271C175.29,43.595,178.458,51.434,178.458,61.596z M132.931,74.584h4.922\n			c4.056,0,7.28-1.139,9.673-3.418c2.393-2.278,3.589-5.423,3.589-9.434c0-6.744-3.737-10.117-11.211-10.117h-6.973V74.584z\"/>\n	</g>\n	<g>\n		<path fill=\"#EEEB5F\" d=\"M178.458,51.596c0,11.166-3.293,19.79-9.878,25.874c-6.586,6.084-15.939,9.126-28.062,9.126h-7.588v33.154\n			h-27.002V19.809h34.59c12.623,0,22.103,2.758,28.438,8.271C175.29,33.595,178.458,41.434,178.458,51.596z M132.931,64.584h4.922\n			c4.056,0,7.28-1.139,9.673-3.418c2.393-2.278,3.589-5.423,3.589-9.434c0-6.744-3.737-10.117-11.211-10.117h-6.973V64.584z\"/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M253.722,129.75h-59.336V29.809h59.336v21.67h-32.334v15.723h29.941v21.67h-29.941v18.867h32.334V129.75z\"\n			/>\n	</g>\n	<g>\n		<path fill=\"#F15C6F\" d=\"M253.722,119.75h-59.336V19.809h59.336v21.67h-32.334v15.723h29.941v21.67h-29.941v18.867h32.334V119.75z\"\n			/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M366.378,129.75h-35.41l-36.504-70.41h-0.615c0.865,11.074,1.299,19.528,1.299,25.361v45.049h-23.926\n			V29.809h35.273l36.367,69.453h0.41c-0.639-10.071-0.957-18.16-0.957-24.268V29.809h24.062V129.75z\"/>\n	</g>\n	<g>\n		<path fill=\"#EEEB5F\" d=\"M366.378,119.75h-35.41l-36.504-70.41h-0.615c0.865,11.074,1.299,19.528,1.299,25.361v45.049h-23.926\n			V19.809h35.273l36.367,69.453h0.41c-0.639-10.071-0.957-18.16-0.957-24.268V19.809h24.062V119.75z\"/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M468.438,129.75h-27.002V51.889h-24.404v-22.08h75.742v22.08h-24.336V129.75z\"/>\n	</g>\n	<g>\n		<path fill=\"#43BFB4\" d=\"M468.438,119.75h-27.002V41.889h-24.404v-22.08h75.742v22.08h-24.336V119.75z\"/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M568.38,129.75l-4.922-18.73h-32.471l-5.059,18.73h-29.668l32.607-100.352h36.025l33.018,100.352H568.38z\n			 M557.853,88.871l-4.307-16.406c-1.003-3.646-2.222-8.362-3.657-14.15c-1.436-5.787-2.382-9.935-2.837-12.441\n			c-0.41,2.324-1.22,6.152-2.427,11.484c-1.208,5.332-3.886,15.837-8.032,31.514H557.853z\"/>\n	</g>\n	<g>\n		<path fill=\"#EEEB5F\" d=\"M568.38,119.75l-4.922-18.73h-32.471l-5.059,18.73h-29.668l32.607-100.352h36.025l33.018,100.352H568.38z\n			 M557.853,78.871l-4.307-16.406c-1.003-3.646-2.222-8.362-3.657-14.15c-1.436-5.787-2.382-9.935-2.837-12.441\n			c-0.41,2.324-1.22,6.152-2.427,11.484c-1.208,5.332-3.886,15.837-8.032,31.514H557.853z\"/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M644.396,66.859l17.227-37.051h29.258l-32.881,60.908v39.033h-27.207V91.537l-32.881-61.729h29.395\n			L644.396,66.859z\"/>\n	</g>\n	<g>\n		<path fill=\"#F15C6F\" d=\"M644.396,56.859l17.227-37.051h29.258l-32.881,60.908v39.033h-27.207V81.537l-32.881-61.729h29.395\n			L644.396,56.859z\"/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M701.681,129.75V29.809h27.002v78.135h38.486v21.807H701.681z\"/>\n	</g>\n	<g>\n		<path fill=\"#43BFB4\" d=\"M701.681,119.75V19.809h27.002v78.135h38.486v21.807H701.681z\"/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M876.681,79.643c0,16.816-4.125,29.6-12.373,38.35c-8.249,8.75-20.326,13.125-36.23,13.125\n			c-15.678,0-27.697-4.397-36.06-13.193c-8.363-8.795-12.544-21.602-12.544-38.418c0-16.634,4.158-29.337,12.476-38.11\n			c8.316-8.772,20.405-13.159,36.265-13.159c15.904,0,27.959,4.353,36.162,13.057C872.579,49.998,876.681,62.781,876.681,79.643z\n			 M807.911,79.643c0,19.323,6.722,28.984,20.166,28.984c6.836,0,11.905-2.347,15.21-7.041c3.304-4.693,4.956-12.008,4.956-21.943\n			c0-9.98-1.675-17.352-5.024-22.114c-3.35-4.762-8.352-7.144-15.005-7.144C814.679,50.385,807.911,60.138,807.911,79.643z\"/>\n	</g>\n	<g>\n		<path fill=\"#EEEB5F\" d=\"M876.681,69.643c0,16.816-4.125,29.6-12.373,38.35c-8.249,8.75-20.326,13.125-36.23,13.125\n			c-15.678,0-27.697-4.397-36.06-13.193c-8.363-8.795-12.544-21.602-12.544-38.418c0-16.634,4.158-29.337,12.476-38.11\n			c8.316-8.772,20.405-13.159,36.265-13.159c15.904,0,27.959,4.353,36.162,13.057C872.579,39.998,876.681,52.781,876.681,69.643z\n			 M807.911,69.643c0,19.323,6.722,28.984,20.166,28.984c6.836,0,11.905-2.347,15.21-7.041c3.304-4.693,4.956-12.008,4.956-21.943\n			c0-9.98-1.675-17.352-5.024-22.114c-3.35-4.762-8.352-7.144-15.005-7.144C814.679,40.385,807.911,50.138,807.911,69.643z\"/>\n	</g>\n</g>\n<g>\n	<g>\n		<path fill=\"#666\" opacity=\"0.5\" d=\"M921.729,93.383v36.367h-27.002V29.809h32.744c27.161,0,40.742,9.844,40.742,29.531\n			c0,11.576-5.651,20.531-16.953,26.865l29.121,43.545h-30.625l-21.191-36.367H921.729z M921.729,73.08h5.059\n			c9.434,0,14.15-4.17,14.15-12.51c0-6.881-4.626-10.322-13.877-10.322h-5.332V73.08z\"/>\n	</g>\n	<g>\n		<path fill=\"#F15C6F\" d=\"M921.729,83.383v36.367h-27.002V19.809h32.744c27.161,0,40.742,9.844,40.742,29.531\n			c0,11.576-5.651,20.531-16.953,26.865l29.121,43.545h-30.625l-21.191-36.367H921.729z M921.729,63.08h5.059\n			c9.434,0,14.15-4.17,14.15-12.51c0-6.881-4.626-10.322-13.877-10.322h-5.332V63.08z\"/>\n	</g>\n</g>\n</svg>\n\n<div class=\"page-icons-wrapper\">\n\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/projects\" class=\"projects\">\n			<img class=\"page-icon\" src=\"assets/images/projects-code.png\">\n			<h4>projects</h4>\n		</a>\n	</div>\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/blog\" class=\"blog\">\n			<img class=\"page-icon\" src=\"assets/images/blog-book.png\">\n			<h4>blog</h4>\n		</a>\n	</div>\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/contact\" class=\"contact\">\n			<img class=\"page-icon\" src=\"assets/images/contact-speech-bubbles.png\">\n			<h4>contact</h4>\n		</a>\n	</div>\n\n</div>\n\n<p style=\"position: absolute; bottom: 60px; padding: 20px; width: 100%; margin: auto; font-size: .85em; color: #bbb;\">I'm still working on this site, so please bear with me!</p>";
},"useData":true});

this["JST"]["master"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " <div class=\"page-wrap\">\n	<div class=\"landing\">\n    <div class=\"cell\">\n  		<div class=\"landing-content\" id=\"landing\">\n        ";
  stack1 = ((helper = (helper = helpers.introContent || (depth0 != null ? depth0.introContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"introContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  		</div>\n    </div>\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\"></div>\n\n  	<div class=\"main\">\n      \n      <div class=\"transition-container\">\n        <div class=\"content content-main\" id=\"main\">";
  stack1 = ((helper = (helper = helpers.mainContent || (depth0 != null ? depth0.mainContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n        <div class=\"content transitioner\" id=\"trans\"></div>\n      </div>\n  	</div>\n\n  </div>\n</div>";
},"useData":true});

this["JST"]["project"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"with","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"grid-container\">\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<h1 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n					<div class=\"panel\">\n						\n						";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"5":function(depth0,helpers,partials,data) {
  return "		<div class=\"grid-container placeholder-view\">\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<div class=\"panel\">\n						<h2 style=\"text-align:center; color: #999\">Eek!</h2>\n						<p>There seems to have been an error.</p>\n						<p>Not to worry! You should be able to see my projects on Wordpress.</p>\n					</div>\n				</div>\n			</div>\n		</div>\n";
  },"7":function(depth0,helpers,partials,data) {
  return "		<div class=\"grid-container placeholder-view\">\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n						<h2 style=\"text-align:center; color: #999\">Loading...</h2>\n				</div>\n			</div>\n		</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

this["JST"]["ui/header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " href=\""
    + escapeExpression(((helper = (helper = helpers.prevLink || (depth0 != null ? depth0.prevLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prevLink","hash":{},"data":data}) : helper)))
    + "\" class=\"go-prev\" ";
},"3":function(depth0,helpers,partials,data) {
  return " class=\"go-prev hide\"";
  },"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " href=\""
    + escapeExpression(((helper = (helper = helpers.nextLink || (depth0 != null ? depth0.nextLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nextLink","hash":{},"data":data}) : helper)))
    + "\" class=\"go-next\" ";
},"7":function(depth0,helpers,partials,data) {
  return " class=\"go-next hide\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"landing-footer-content\">\n  <div class=\"icon menu\">\n    <i class=\"fa fa-chevron-down fa-2x show-content\"></i>\n  </div>\n</div>\n\n<div class=\"header-content\">\n    <a ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prevLink : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n      <div class=\"icon\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </div>\n    </a>\n    \n    <a href=\"#\">\n      <div class=\"icon menu\">\n        <i class=\"fa fa-bars fa-2x show-intro\"></i>\n      </div>\n    </a>\n  \n    <a ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.nextLink : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n      <div class=\"icon\">\n        <i class=\"fa fa-chevron-right\"></i>\n      </div>\n    </a>\n  \n</div>\n<div></div>";
},"useData":true});
 return this['JST'];
})();

module.exports = exports;
},{}],11:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'about',
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
	},
	render: function(options){
		
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');
		window.Backbone.trigger('ui:showContent');
		window.Backbone.trigger('page:setNamespace', this.namespace );	

		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],12:[function(require,module,exports){
'use strict';

var Collection = require('../collections/blog-posts.js');
var CollectionView = require('./collection-view.js');

module.exports = CollectionView.extend({
	namespace: 'blog',
	initialize: function(options){
		this.collection = new Collection();
		this.initialized = true;
		this.template = options.template;

		window.test = this;

		return this;
	}
});
},{"../collections/blog-posts.js":2,"./collection-view.js":13}],13:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({	
	stringToRender: function(options){
		options = (options || {});
		if (options.error) {
			return this.template({error: true});
		}
		return this.template({attributes: this.collection.currentRecord.attributes});
	},
	render: function(options){
		options = (options || {});

		// var view = this,
		var collection = this.collection;
		
		if (!this.collection.length) {
			this.$el.html(this.template());

			window.Backbone.trigger('ui:showContent');
			window.Backbone.trigger('ui:updatePrev');
			window.Backbone.trigger('ui:updateNext');
			window.Backbone.trigger('page:setNamespace', this.namespace);
			this.fetchRender(options);

		} else {
 
			if (options.slug && collection.where({slug: options.slug}).length) {
				collection.setCurrentRecord({slug: options.slug});
			} else {
				
			}

			if (options.transition) {
				window.Backbone.trigger('transition:render', this.stringToRender() );	
			} else {
				this.$el.html(this.stringToRender());	
			}	
			window.Backbone.trigger('ui:showContent');
			window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
			window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});
			window.Backbone.trigger('page:setNamespace', this.namespace );
		}

		return this;
	},
	fetchRender: function(options){
		var view = this,
				collection = this.collection;
		if (!collection.stubs) { // to be set to something more meaningful when an api is available
			collection.fetch({
  			remove: false,
  			dataType: (collection.jsonp ? 'jsonp':'json'),
  			timeout : 5000,
				success: function(){
					if (options.slug && collection.where({slug: options.slug}).length) {
						collection.setCurrentRecord({slug: options.slug});
					} else {
						collection.setCurrentRecord({slug: collection.defaultSlug()});
					}

					window.Backbone.trigger('ui:updatePrev', {link: view.prevRoute()});
					window.Backbone.trigger('ui:updateNext', {link: view.nextRoute()});
					window.Backbone.trigger('page:setNamespace', view.namespace );

					window.Backbone.trigger('transition:render', view.stringToRender() );		

				},
				error: function(){
					window.Backbone.trigger('transition:render', view.stringToRender({error: true}));	
				}
			});
		} else {
			collection.addStubs({success: function(){

				if (options.slug && collection.where({slug: options.slug}).length) {
					collection.setCurrentRecord({slug: options.slug});
				} else {
					collection.setCurrentRecord(collection.first());
				}

				window.Backbone.trigger('router:redirect', view.defaultRoute());

				window.Backbone.trigger('ui:showContent');
				window.Backbone.trigger('ui:updatePrev', {link: view.prevRoute()});
				window.Backbone.trigger('ui:updateNext', {link: view.nextRoute()});
				window.Backbone.trigger('page:setNamespace', view.namespace );


				window.Backbone.trigger('transition:render', view.stringToRender() );	

			}});
		}
	},
	setCurrent: function(slug){
		this.collection.setCurrentRecord({slug:slug});

		return this;
	},
	getNextModel: function(){
		return this.collection.getNextModel();
	},
	getPrevModel: function(){
		return this.collection.getPrevModel();
	},
	nextRoute: function(){
		var model = this.collection.getNextModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	prevRoute: function(){
		var model = this.collection.getPrevModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	checkSlug: function(slug){
		return this.collection.checkSlug(slug);
	},
	defaultSlug: function(){
		return this.collection.defaultSlug();
	},
	defaultRoute: function(){
		return '/'+ this.namespace +'/' + this.defaultSlug();
	}
});
},{}],14:[function(require,module,exports){
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

module.exports = window.Backbone.View.extend({
	namespace: 'contact',
	initialize: function(options){
		this.template = options.template;
		this.initialized = true;
		this.emailAddress = 'smt_@hotmail.co.uk';

	},
	render: function(options){
		this.$el.html(this.template(options));

		this.pending = false;

		window.Backbone.trigger('ui:showContent');

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');
		window.Backbone.trigger('page:setNamespace', this.namespace );

		return this;

	},
	events: {
		'submit .contact-form' : 'submitForm',
		'click .submission-error .fa-close': 'removeFormError'
	},
	validateForm: function(){
		var $form = this.$el.find('.contact-form');

		var $name = $form.find('#name');
		var $email = $form.find('#email');
// // $subject = $form.find('#subject'),
		var $message = $form.find('#message');

		var errors = [];

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



},{}],15:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'intro',
	initialize: function(options){
		options = options || {};
		this.template = options.template;
		this.initialized = true;
		this.render(options);
	},
	render: function(options){
		options = options;
		this.$el.html(this.template());
		window.Backbone.trigger('page:setNamespace', this.namespace);

	},
	setListeners: function(){
		// 
	}
});
},{}],16:[function(require,module,exports){
'use strict';

var templates = require('../templates.js');
var headerView = require('./ui/header.js');
var transitions = require('../modules/page-transitions.js');
var scrollTracker = require('../helpers/scroll-tracker.js');

module.exports = window.Backbone.View.extend({
	el: 'html',
	header: '.header',
	initialize: function(){

		var state = (window.location.hash.length >= 1) ? 'content' : 'intro';
		this.render({
			state: state,
			introContent: templates.intro()
		});

		this.transitions = new transitions({
			container: '.page-wrap .main .transition-container',
			main: '.content-main',
			transitioner: '.transitioner'
		});

		// var view = this;
		$(document).on('keydown', function(e){
			if (e.which === 39) {
				window.Backbone.trigger('page:nextContent');
			} else if (e.which === 37) {
				window.Backbone.trigger('page:prevContent');
			} else {
				return;
			}
		});

		this.$header = $(this.header);
		this.headerView = new headerView({template: templates['ui/header']});
		this.initialized = true;
		this.setListeners();

		return this;

	},
	events: {
		'click .show-content': 'goToCurrentContent',
		'click .go-prev': 'prevContent',
		'click .go-next': 'nextContent'
		// 'click .show-intro': 'showIntro'
  },
  render: function(options){
  	$('body').html(templates.master(options));

  	scrollTracker.initialize();
  },
  showContent: function() {
		$('body').addClass('content').removeClass('intro');
	},
	showIntro: function() {
		$('body').addClass('intro').removeClass('content');
	},
	setNamespace: function(namespace) {	
		document.body.className = $.trim(
			document.body.className.split(' ').filter(function(c) { 
				return c.lastIndexOf('page-', 0) !== 0; 
			}).join(' ') + ' page-' +namespace );
	},
	swiperUp: function(){
		if (!this.swiperUpReady()) { return false; }
		this.showIntro();
	},
	swiperDown: function(){
		if (!this.swiperDownReady()) { return false; }
		this.showContent();
		this.goToCurrentContent();
	},
	swiperLeft: function(){
		if (!this.swiperLeftReady()) { return false; }
		this.nextContent();
	},
	swiperRight: function(){
		if (!this.swiperRightReady()) { return false; }
		this.prevContent();
	},
	swiperUpReady: function(){
		return false;
		// return $('body.content .content-main').scrollTop() <= 0;
	},
	swiperDownReady: function(){
		return $('body.intro').length >= 1;
	},
	swiperLeftReady: function(){
		return true;
	},
	swiperRightReady: function(){
		return true;
	},
	nextContent: function(e){
		if (e) { e.preventDefault(); }
		if (this.transitions.animating) {return false;}
		this.transitions.direction = 'next';
		window.Backbone.trigger('router:nextContent');
	},
	prevContent: function(e){
		if (e) { e.preventDefault(); }
		if (this.transitions.animating) {return false;}
		this.transitions.direction = 'prev';
		window.Backbone.trigger('router:prevContent');
	},
  goToCurrentContent: function(){
  	window.Backbone.trigger('router:goToCurrentContent');
  },
	setListeners: function(){

		var transitions = this.transitions;

		function render(content){transitions.render(content);}

		this.listenTo(window.Backbone, 'ui:showContent', this.showContent);
		this.listenTo(window.Backbone, 'ui:showIntro', this.showIntro);
		this.listenTo(window.Backbone, 'page:setNamespace', this.setNamespace);
		this.listenTo(window.Backbone, 'page:nextContent', this.nextContent);
		this.listenTo(window.Backbone, 'page:prevContent', this.prevContent);

		this.listenTo(window.Backbone, 'swiper:up', this.swiperUp);
		this.listenTo(window.Backbone, 'swiper:down', this.swiperDown);
		this.listenTo(window.Backbone, 'swiper:left', this.swiperLeft);
		this.listenTo(window.Backbone, 'swiper:right', this.swiperRight);


		this.listenTo(window.Backbone, 'transition:render', render);

	}
});
},{"../helpers/scroll-tracker.js":5,"../modules/page-transitions.js":7,"../templates.js":10,"./ui/header.js":18}],17:[function(require,module,exports){
'use strict';

var Collection = require('../collections/projects.js');
var CollectionView = require('./collection-view.js');

module.exports = CollectionView.extend({	
	namespace: 'projects',
	initialize: function(options){
		this.collection = new Collection();
		this.initialized = true;
		this.template = options.template;

		return this;
	}
});
},{"../collections/projects.js":4,"./collection-view.js":13}],18:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	el: '.header',
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
		this.render({});
		this.setListeners();
	},
	render: function(options){
		this.$el.html(this.template(options));
	},
	events: {
		'click .show-content': 'showContent',
		'click .show-intro': 'showIntro'
  },
  showContent: function(){
  	window.Backbone.trigger('ui:showContent');
  },
  showIntro: function(){
		window.Backbone.trigger('ui:showIntro');
  },
  updateUiPrev: function(options){
    options = options || {};
  	var prev = '.go-prev';
  	var $prev = this.$el.find(prev);
  	if (options.link) {
  		$prev.removeClass('hide').attr('href', options.link);
  	} else {
  		$prev.addClass('hide').attr('href', '#');
  	}
  },
  updateUiNext: function(options){
    options = options || {};
  	var next = '.go-next';
  	var $next = this.$el.find(next);
  	if (options.link) {
  		$next.removeClass('hide').attr('href', options.link);
  	} else {
  		$next.addClass('hide').attr('href', '#');
  	}
  },
	setListeners: function(){
		// 
		this.listenTo(window.Backbone, 'ui:updatePrev', this.updateUiPrev);
		this.listenTo(window.Backbone, 'ui:updateNext', this.updateUiNext);
	}
});
},{}]},{},[6])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2NvbGxlY3Rpb25zL2Jsb2ctcG9zdHMuanMiLCJhcHAvanMvY29sbGVjdGlvbnMvY29sbGVjdGlvbkV4dGVuc2lvbi5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9wcm9qZWN0cy5qcyIsImFwcC9qcy9oZWxwZXJzL3Njcm9sbC10cmFja2VyLmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvbW9kdWxlcy9wYWdlLXRyYW5zaXRpb25zLmpzIiwiYXBwL2pzL3Byb2plY3RzLXN0dWJzLmpzIiwiYXBwL2pzL3JvdXRlci5qcyIsImFwcC9qcy90ZW1wbGF0ZXMuanMiLCJhcHAvanMvdmlld3MvYWJvdXQuanMiLCJhcHAvanMvdmlld3MvYmxvZy1wb3N0LmpzIiwiYXBwL2pzL3ZpZXdzL2NvbGxlY3Rpb24tdmlldy5qcyIsImFwcC9qcy92aWV3cy9jb250YWN0LmpzIiwiYXBwL2pzL3ZpZXdzL2ludHJvLmpzIiwiYXBwL2pzL3ZpZXdzL21hc3Rlci5qcyIsImFwcC9qcy92aWV3cy9wcm9qZWN0LmpzIiwiYXBwL2pzL3ZpZXdzL3VpL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyLmpzJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMuanMnKTtcblxud2luZG93LnRlc3RXcEFwaSA9IGZ1bmN0aW9uKCl7XG4gICQuYWpheCh7XG4gICAgdXJsOiAnaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxLjEvc2l0ZXMvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vcG9zdHMnLFxuICAgIGRhdGFUeXBlOiAnanNvbnAnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHIpe2NvbnNvbGUubG9nKHtyZXNwb25zZTogcn0pO30sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ2Vycm9yJyk7fVxuICAgICAgfSk7XG4gIC8vICQuZ2V0KCdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cycsIGZ1bmN0aW9uKHIpe2NvbnNvbGUubG9nKHIpO30sIGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ2Vycm9yJyk7fSk7XG59O1xuXG5cbnZhciBBcHAgPSB7XG4gIGludHJvUGFuZWw6ICcjbGFuZGluZycsXG4gIG1haW5QYW5lbDogJy5tYWluIC5jb250ZW50JyxcbiAgdHJhbnNpdGlvblBhbmVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cbiAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMsXG5cbiAgdmlld3M6IHtcbiAgICBtYXN0ZXI6IHJlcXVpcmUoJy4vdmlld3MvbWFzdGVyLmpzJyksXG5cbiAgICBpbnRybzogcmVxdWlyZSgnLi92aWV3cy9pbnRyby5qcycpLFxuICAgIGJsb2c6IHJlcXVpcmUoJy4vdmlld3MvYmxvZy1wb3N0LmpzJyksXG4gICAgcHJvamVjdHM6IHJlcXVpcmUoJy4vdmlld3MvcHJvamVjdC5qcycpLFxuICAgIGNvbnRhY3Q6IHJlcXVpcmUoJy4vdmlld3MvY29udGFjdC5qcycpLFxuICAgIGFib3V0OiByZXF1aXJlKCcuL3ZpZXdzL2Fib3V0LmpzJylcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgXHRvcHRpb25zID0gb3B0aW9uczsgLy8gbGludGVyIC1fXy1cbiAgICAvLyB2YXIgdGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZXM7XG4gIFx0dGhpcy4kaW50cm9QYW5lbCA9ICQodGhpcy5pbnRyb1BhbmVsKTtcbiAgXHR0aGlzLiRtYWluUGFuZWwgPSAkKHRoaXMubWFpblBhbmVsKTtcblxuICAgIC8vIGlzIGl0IHdvcnRoIGRlZmluaW5nIHRoZSB0b3AgcGFuZWwgY29udGVudCBoZXJlPyB3aWxsIGl0IGV2ZXIgY2hhbmdlPyBjb3VsZCBiZSB1c2VkIGFzIGFuIGluZGV4IHBhZ2U/XG4gICAgdGhpcy4kaW50cm9QYW5lbC5odG1sKHRlbXBsYXRlcy5pbnRybygpKTtcbiAgICAvLyB0aGlzLnZpZXdzLnVpLmhlYWRlciA9IG5ldyB0aGlzLnZpZXdzLnVpLmhlYWRlcih7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblxuICAgIHRoaXMudmlld3MubWFzdGVyID0gbmV3IHRoaXMudmlld3MubWFzdGVyKCk7XG5cbiAgXHR3aW5kb3cuciA9IHRoaXMucm91dGVyID0gbmV3IHJvdXRlcih0aGlzKTtcblxuICAgIC8vIHVzZSBsb2NhbCBzdG9yYWdlIHRvIGRlZmluZSBoZSBmaXJzdCB2aWV3PyBmaXggdGhpcyB1cCBhdCBhIGhpZ2hlciBsZXZlbCBmaXJzdD9cbiAgICAvLyAkKHRoaXMubWFpblBhbmVsKS5odG1sKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENvbGxlY3Rpb25FeHRlbnNpb24gPSByZXF1aXJlKCcuL2NvbGxlY3Rpb25FeHRlbnNpb24uanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW9uRXh0ZW5zaW9uLmV4dGVuZCh7XG5cdFxuXHQvLyBtb2RlbDogQXJ0aWNsZU1vZGVsLFxuXHRwb3NpdGlvbjogMCxcblx0dG90YWxSZWNvcmRzOiAwLFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuICB1cmw6IGZ1bmN0aW9uKCl7XG4gIFx0cmV0dXJuICdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cz9jYWxsYmFjaz0/JztcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgXHR0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLmZvdW5kO1xuICAgIHJldHVybiByZXNwb25zZS5wb3N0cztcbiAgfSxcbiAganNvbnA6IHRydWVcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuXHRcblx0cG9zaXRpb246IDAsXG5cdHRvdGFsUmVjb3JkczogMCxcblx0aXNMb2FkaW5nOiBmYWxzZSxcbiAgcGFyc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKXsgLy8sIHhoclxuICBcdHRoaXMudG90YWxSZWNvcmRzID0gcmVzcG9uc2UubGVuZ3RoO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSxcbiAgc2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgaWYgKG9wdGlvbnMuc2x1ZyAmJiB0aGlzLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VycmVudFJlY29yZCA9IHRoaXMud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5tb2RlbCAmJiB0aGlzLmNvbnRhaW5zKG9wdGlvbnMubW9kZWwpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRSZWNvcmQgPSBvcHRpb25zLm1vZGVsO1xuICAgIH1cbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJlY29yZDtcbiAgfSxcbiAgZ2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCh0aGlzLnBvc2l0aW9uKTtcbiAgfSxcbiAgZ2V0TGF0ZXN0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KDApO1xuICB9LFxuICBhZGRTdHViczogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KTtcblxuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgc3R1YnMgPSAob3B0aW9ucy5zdHVicyB8fCB0aGlzLnN0dWJzIHx8IFtdKTtcbiAgICB2YXIgcmVjb3JkcyA9IHRoaXMucGFyc2Uoc3R1YnMpO1xuXG4gICAgdmFyIGk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGZvciAoaSA9IHJlY29yZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHJlY29yZCA9IHJlY29yZHNbaV07XG4gICAgICAgIGlmICghY29sbGVjdGlvbi53aGVyZSh7SUQ6IHJlY29yZC5JRH0pLmxlbmd0aCkge1xuICAgICAgICAgIGNvbGxlY3Rpb24uYWRkKHJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIChvcHRpb25zLnN1Y2Nlc3MgfHwgJC5ub29wKSgpO1xuICAgIH0sIChvcHRpb25zLnRpbWUgfHwgMCkpO1xuXG4gIH0sXG4gIGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCgodGhpcy5wb3NpdGlvbiArMSA+IHRoaXMubGVuZ3RoIC0xKT8gIGZhbHNlIDogdGhpcy5wb3NpdGlvbiArIDEpO1xuICB9LFxuICBnZXRQcmV2TW9kZWw6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQoKHRoaXMucG9zaXRpb24gLTEgPCAwKSA/IGZhbHNlIDogdGhpcy5wb3NpdGlvbiAtIDEpO1xuICB9LFxuICBjaGVja1NsdWc6IGZ1bmN0aW9uKHNsdWcpe1xuICAgIHJldHVybiAodGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBzbHVnfSkubGVuZ3RoID49IDEpO1xuICB9LFxuICBkZWZhdWx0U2x1ZzogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVjb3JkID8gdGhpcy5jdXJyZW50UmVjb3JkLmdldCgnc2x1ZycpIDogdGhpcy5maXJzdCgpLmdldCgnc2x1ZycpO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDb2xsZWN0aW9uRXh0ZW5zaW9uID0gcmVxdWlyZSgnLi9jb2xsZWN0aW9uRXh0ZW5zaW9uLmpzJyk7XG52YXIgc3R1YnMgPSByZXF1aXJlKCcuLi9wcm9qZWN0cy1zdHVicy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25FeHRlbnNpb24uZXh0ZW5kKHtcblx0XG5cdC8vIG1vZGVsOiBBcnRpY2xlTW9kZWwsXG4gIHN0dWJzOiBzdHVicyxcblx0cG9zaXRpb246IDAsXG5cdHRvdGFsUmVjb3JkczogMCxcblx0aXNMb2FkaW5nOiBmYWxzZSxcbiAgdXJsOiBmdW5jdGlvbigpe1xuICBcdHJldHVybiAnaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tL3Bvc3RzJztcbiAgfSxcbiAgc3R1YmJlZDogdHJ1ZVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2hlZWxFdmVudCA9ICgvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpPyAnRE9NTW91c2VTY3JvbGwnIDogJ21vdXNld2hlZWwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7IFxuXHRcdG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSk7XG5cblx0XHR0aGlzLmNvb2xkb3duVGltZSA9IChvcHRpb25zLmNvb2xkb3duVGltZSB8fCAxMDAwKTtcblx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcblxuXHRcdHZhciBtb2R1bGUgPSB0aGlzO1xuXG5cdFx0dmFyIHRyYWNrU2Nyb2xsID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpZiAoIW1vZHVsZS5yZWFkeSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdFx0dmFyIGV2dCA9ICh3aW5kb3cuZXZlbnQgfHwgZSk7IC8vIGVxdWFsaXplIGV2ZW50IG9iamVjdFxuXHRcdFx0dmFyIGRlbHRhPSBldnQuZGV0YWlsID8gZXZ0LmRldGFpbCooLTEyMCkgOiBldnQud2hlZWxEZWx0YTsgLy8gY2hlY2sgZm9yIGRldGFpbCBmaXJzdCBzbyBPcGVyYSB1c2VzIHRoYXQgaW5zdGVhZCBvZiB3aGVlbERlbHRhXG5cdFx0XHR2YXIgZGVsdGFYID0gZXZ0LmRlbHRhWDtcblxuXHRcdFx0aWYgKGRlbHRhWCA+IDE2MCkge1xuXHRcdFx0XHQvLyB3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpwcmV2Q29udGVudCcpO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcignc3dpcGVyOnJpZ2h0Jyk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuc3dpcGVyQ29vbGRvd24oKTtcblx0XHRcdH0gZWxzZSBpZiAoZGVsdGFYIDwgLTE2MCkge1xuXHRcdFx0XHQvLyB3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpuZXh0Q29udGVudCcpO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcignc3dpcGVyOmxlZnQnKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5zd2lwZXJDb29sZG93bigpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbiB1cCBvciBkb3duIHN3aXBlIHNob3VsZCBiZSBuZWFyIGVub3VnaCB2ZXJ0aWNhbC5cblx0XHRcdC8vIElmIHRoZSBYLWRlbHRhIGlzIGF0IGFsbCBzaWduaWZpY2FudCB0aGVuIHJldHVybiBlYXJseSBiZWZvcmUgdGhlIFktZGVsdGEgaXMgY29uc2lkZXJlZC5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YVgpID49IDUwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0XHRpZiAoZGVsdGEgPiAzMjApIHtcblx0XHRcdFx0Ly8gd2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvTGFuZGluZycpO1x0XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdzd2lwZXI6dXAnKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5zd2lwZXJDb29sZG93bigpO1xuXHRcdFx0fSBlbHNlIGlmIChkZWx0YSA8IC0zMjApIHtcblx0XHRcdFx0Ly8gd2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnKTtcdFxuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcignc3dpcGVyOmRvd24nKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5zd2lwZXJDb29sZG93bigpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpeyAvL2lmIElFIChhbmQgT3BlcmEgZGVwZW5kaW5nIG9uIHVzZXIgc2V0dGluZylcbiAgICBcdGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbicrd2hlZWxFdmVudCwgdHJhY2tTY3JvbGwpO1xuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgey8vV0MzIGJyb3dzZXJzXG4gICAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHRyYWNrU2Nyb2xsLCBmYWxzZSk7XG5cdFx0fVxuXG5cdH0sXG5cdHN3aXBlckNvb2xkb3duOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2R1bGUgPSB0aGlzO1xuXHRcdG1vZHVsZS5yZWFkeSA9IGZhbHNlO1xuXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdG1vZHVsZS5yZWFkeSA9IHRydWU7XG5cdFx0fSwgbW9kdWxlLmNvb2xkb3duVGltZSk7XG5cdH1cblxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSByZXF1aXJlKCcuL2FwcC5qcycpO1xuXG5cblxuJChkb2N1bWVudCkub24oJ3JlYWR5JywgZnVuY3Rpb24oKXtcblx0YXBwLmluaXRpYWxpemUoKTtcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRyYW5zaXRpb25FbmQgPSAndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCc7XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25zIChvcHRpb25zKSB7XG5cdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG5cdHRoaXMuJG1haW4gPSAkKHRoaXMubWFpbiA9IG9wdGlvbnMubWFpbik7XG5cdHRoaXMuJHRyYW5zaXRpb25lciA9ICQodGhpcy50cmFuc2l0aW9uZXIgPSBvcHRpb25zLnRyYW5zaXRpb25lcik7XG5cdHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG5cblx0dGhpcy4kdHJhbnNpdGlvbmVyLnJlbW92ZSgpO1xuXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5kaXJlY3Rpb24gPT09ICdwcmV2JyA/ICdwcmV2JyA6ICduZXh0J10oY29udGVudCk7XG5cdH07XG5cblx0dGhpcy5uZXh0ID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0aWYgKHRoaXMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlO31cblxuXG5cdFx0dmFyIHRyYW5zaXRpb25zID0gdGhpcztcblx0XHR2YXIgJGNvbnRhaW5lciA9ICQodGhpcy5jb250YWluZXIpO1xuXG5cdFx0dGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuXHRcdCRjb250YWluZXIuYWRkQ2xhc3MoJ2FuaW1hdGUtbmV4dCcpO1xuXHRcdHRoaXMuJHRyYW5zaXRpb25lci5odG1sKGNvbnRlbnQpLmluc2VydEFmdGVyKHRoaXMuJG1haW4pO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnZ28nKS5vbmUodHJhbnNpdGlvbkVuZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0dHJhbnNpdGlvbnMuJG1haW4uaHRtbChjb250ZW50KTtcblx0XHRcdFx0JGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYW5pbWF0ZS1uZXh0IGdvJyk7XG5cdFx0XHRcdHRyYW5zaXRpb25zLiR0cmFuc2l0aW9uZXIucmVtb3ZlKCk7XG5cdFx0XHRcdHRyYW5zaXRpb25zLmFuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0fSwwKTtcblxuXHR9O1xuXG5cdHRoaXMucHJldiA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGlmICh0aGlzLmFuaW1hdGluZykge3JldHVybiBmYWxzZTt9XG5cblx0XHR2YXIgdHJhbnNpdGlvbnMgPSB0aGlzO1xuXHRcdHZhciAkY29udGFpbmVyID0gJCh0aGlzLmNvbnRhaW5lcik7XG5cblxuXHRcdHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcblx0XHR0aGlzLiR0cmFuc2l0aW9uZXIuaHRtbChjb250ZW50KS5pbnNlcnRCZWZvcmUodGhpcy4kbWFpbik7XG5cdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnYW5pbWF0ZS1wcmV2Jyk7XG5cdFx0XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnZ28nKS5vbmUodHJhbnNpdGlvbkVuZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0dHJhbnNpdGlvbnMuJG1haW4uaHRtbChjb250ZW50KTtcblx0XHRcdFx0JGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYW5pbWF0ZS1wcmV2IGdvJyk7XG5cdFx0XHRcdHRyYW5zaXRpb25zLiR0cmFuc2l0aW9uZXIucmVtb3ZlKCk7XG5cdFx0XHRcdHRyYW5zaXRpb25zLmFuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0fSwxMCk7IC8vIGZvciBzb21lIHJlYXNvbiwgc2V0dGluZyB0byAwIGNhdXNlcyBhIGdsaXRjaD9cblx0fTtcblxuXHRyZXR1cm4gdGhpcztcdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zaXRpb25zOyIsIm1vZHVsZS5leHBvcnRzID0gW1xuXHR7XG5cdFx0SUQ6IDEsXG5cdFx0dGl0bGU6ICdTbm93cmlkZXJzIExvZ28nLFxuXHRcdHNsdWc6ICdTbm93cmlkZXJzLWxvZ28nLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRncmFwaGljczogWydJbGx1c3RyYXRvciddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Nub3dyaWRlcnMucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPkR1cmluZyBteSB0aW1lIHN0dWR5aW5nIGF0IFBseW1vdXRoIFVuaXZlcnNpdHkgSSB3YXMgaW52b2x2ZWQgd2l0aCB0aGUgbG92ZWx5IGZvbGtzIHdobyBtYWRlIHVwIHRoZSBQbHltb3V0aCBTbm93cmlkZXJzIChUaGUgdW5pb25cXCdzIHNub3cgc3BvcnRzIHNvY2lldHkpLiBJIHdhcyBsdWNreSBlbm91Z2ggdG8gaGF2ZSBnb29kIGZyaWVuZHMgb24gdGhlIGNvbW1pdHRlZSBzbyBuZXZlciBhY3R1YWxseSBoYWQgdG8gcGF5IG1lbWJlcnNoaXAgKHNoaGhoLi4uKS48YnI+SW4gbXkgZmluYWwgeWVhciBJIGhhZCBzdGFydGVkIHRlYWNoaW5nIG15c2VsZiBob3cgdG8gdXNlIElsbHVzdHJhdG9yIGFuZCBkZWNpZGVkIHRvIHBheSBiYWNrIHRoZSBjbHViIGJ5IGdpdmluZyB0aGVpciBsb2dvIGEgZmFjZWxpZnQuPC9wPjxwPkkgZGlkblxcJ3Qgd2FudCB0byB2ZW50dXJlIHRvbyBmYXIgYXdheSBmcm9tIHRoZSBvcmlnaW5hbCBzbyBJIHVzZWQgdGhlIHNhbWUgZm9udCAoQXJpYWwsIHBsZWFzZSBmb3JnaXZlIG1lISkgYW5kIEkgcmUtZHJldyB0aGUgXFwnc25vd3JpZGVycyBsYWR5XFwnIHNvIHRoYXQgd2Ugd291bGQgaGF2ZSBpdCBpbiBhIHNjYWxhYmxlIGZvcm1hdCByYXRoZXIgdGhhbiBqdXN0IHRoZSBoZWF2aWx5IHBpeGVsYXRlZCB2ZXJzaW9uIHRoYXQgd2UgYWxyZWFkeSBoYWQuPGJyPkkgY2hvc2UgdG8gdGFrZSB0aGUgb25lIGxpbmUgXFwnc25vd3JpZGVyc1xcJyBhbmQgc3BsaXQgdGhpcyBpbnRvIHR3byBzbyB0aGF0IGl0IHdvdWxkIGJldHRlciBmaXQgb24gdGVlc2hpcnRzIGFuZCBob29kaWVzIGFuZCBjaG9zZSBhIHZlcnkgYm9sZCBsb29rIGZvciBlYXN5IHJlY29nbml0aW9uLCB0aGUgc25vd3JpZGVycyBhcmUgYSBwcm91ZCBidW5jaCE8L3A+J1xuXHR9LCB7XG5cdFx0SUQ6IDIsXG5cdFx0dGl0bGU6ICdIYXJyeSBQb3R0eScsXG5cdFx0c2x1ZzogJ2hhcnJ5LXBvdHR5Jyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnanF1ZXJ5J10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvaGFycnlwb3R0eS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+TXkgZGFkIGlzIGEgYml0IG9mIGEgY2xvd24sIG5vIHJlYWxseSEgSGUgd29ya3MgYXMgYSBjaGlsZHJlblxcJ3MgZW50ZXJ0YWluZXIgc28gd2hpbGUgSSB3YXMgZ2V0dGluZyBzdGFydGVkIHdpdGggbGVhcm5pbmcgUEhQIGFuZCBKUyBJIGJ1aWx0IGEgdmVyeSBiYXNpYyB3ZWJzaXRlIGZvciBoaW0uPC9wPjxwPlRoZSB3ZWJzaXRlIHNlcnZlZCBvbmx5IG9uZSBwdXJwb3NlIHdoaWNoIHdhcyB0byBwcm92aWRlIGEgY29udGFjdCBmb3JtIGZvciBwb3RlbnRpYWwgY3VzdG9tZXJzIHdhbnRpbmcgdG8gZ2V0IGluIHRvdWNoLjxicj5UaGUgY29kZSB3YXMgcHJldHR5IHRlcnJpYmxlLi4uIHZlcnkgYmFzaWMgUEhQIHRvIHNlcnZlIHVwIHRoZSBzaXRlIGFuZCBzZW5kIHRoZSBmb3JtIGRldGFpbHMgd2l0aCBqUXVlcnkgdG8gdmFsaWRhdGUgb24gdGhlIGZyb250ZW5kLjwvcD4nXG5cdH0se1xuXHRcdElEOiAzLFxuXHRcdHRpdGxlOiAnVGhlIFNhdWNlJyxcblx0XHRzbHVnOiAndGhlLXNhdWNlJyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnJ10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc2F1Y2UucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPlRoZSByZWFzb24gSSBnb3Qgc3RhcnRlZCB3aXRoIGxlYXJuaW5nIHRvIGNvZGUgd2FzIHRvIHNldCB1cCBhbiBlY29tbWVyY2Ugc2l0ZSBmb3IgXFwnVGhlIFNhdWNlXFwnLCBhIGJyYW5kIHRoYXQgSSB3YXMgaG9waW5nIHRvIHNldCB1cC48YnI+SSBoYWQgc3RhcnRlZCBjcmVhdGluZyBkZXNpZ25zIGZvciB0ZWVzaGlydHMgYW5kIHN3ZWF0c2hpcnRzIGV0Yy4sIGJvdWdodCBhIGxvYWQgb2YgcHJpbnRpbmcgZXF1aXBtZW50IGFuZCBpbmtzIGFuZCBuZWVkZWQgdG8gc2V0IHVwIGEgY2hhbm5lbCBhIGNoYW5uZWwgdG8gc2VsbCB0aGUgcHJvZHVjdHMgdGhhdCBJIHdvdWxkIGJlIGNyZWF0aW5nLjwvcD48cD5BbHRob3VnaCB0aGVyZSBpcyBjZXJ0YWlubHkgbm90aGluZyBncm91bmRicmVha2luZyBpbiB0aGlzIHByb2plY3QgSSBoYWQgc2V0IG15c2VsZiBhIGZldyBjaGFsbGVuZ2VzIHRoYXQgdHVybmVkIG91dCB0byBiZSBxdWl0ZSB0b3VnaCBhdCB0aGUgdGltZSBhbmQgaGVscGVkIG1lIHVuZGVyc3RhbmQgbW9yZSBhYm91dCBQSFAsIEpTIGFuZCBjb2RpbmcgaW4gZ2VuZXJhbC48L3A+PGgyPlByb2R1Y3QgTGlzdGluZzwvaDI+PGhyPjxwPlJhdGhlciB0aGFuIG9wdCBmb3IgYSBzdHJhaWdodCB1cCBsaXN0IG9mIHByb2R1Y3QgdGh1bWJuYWlscyBJIHdhbnRlZCB0byBoYXZlIHNlY3Rpb25zIHRoYXQgZmVhdHVyZWQgYSBudW1iZXIgb2YgdGh1bWJuYWlscyB3aXRoIGEgXFwncHJvZHVjdCBmb2N1c1xcJyBwYW5lbCB0aGF0IHdvdWxkIHNob3cgbW9yZSBkZXRhaWwgb2Ygd2hpY2hldmVyIHByb2R1Y3QgdGhlIHVzZXIgd2FzIGN1cnJlbnRseSBob3ZlcmluZyBvdmVyLjxicj5FYWNoIG9mIHRoZXNlIHBhbmVscyB3b3VsZCBoYXZlIGFuIGFsdGVybmF0aW5nIGxheW91dCBpbiBvcmRlciB0byBrZWVwIHNvbWUgYmFsYW5jZSBkb3duIHRoZSBwYWdlLjxicj5UaGlzIHdhcyB3aGVyZSBJIGxlYXJuZWQgbG9vcGluZyBpbiBQSFAgYW5kIHdhcyBteSBmaXJzdCByZWFsIGNoYWxsZW5nZSB3aXRoIGphdmFzY3JpcHQgKEFsdGhvdWdoIG15IHNvbHV0aW9uIHdhcyB0ZXJyaWJsZSwgY3JhenkgZGF0YSBhdHRyaWJ1dGVzIGV2ZXJ3aGVyZSEpPC9wPjxoMj5Qcm9kdWN0IExpZ2h0Ym94PC9oMj48aHI+PHA+SSBkaWRuXFwndCB3YW50IHRvIGhhdmUgdGhlIHVzZXIgbGVhdmUgdGhlIHByb2R1Y3QgbGlzdGluZyBwYWdlIGVhaGMgdGltZSB0aGV5IHdhbnRlZCB0byB2aWV3IGEgcHJvZHVjdCBzbyBJIGF0dGVtcHRlZCB0byBidWlsZCBvdXQgYSBsaWdodC1ib3guPGJyPkFsdGhvdWdoIEkgZGlkIGdldCB0aGlzIHRvIHdvcmssIHRoZSBzb2x1dGlvbiwgYWdhaW4sIGxhY2tlZCBlbGVnYW5jZS4gcmF0aGVyIHRoYW4gcGVyZm9ybWluZyBhbiBBSkFYIGNhbGwgdG8gcG9wdWxhdGUgdGhlIGxpZ2h0Ym94LCBvciByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGEgZmV3IHBpZWNlcyBvZiBwcm9kdWN0IGRhdGEsIEkgcmVseWVkIG9uIHRoZSBkYXRhIGF0dHJpYnV0ZXMgdGhhdCBJIGhhZCByZW5kZXJlZCBvdXQgb24gZWFjaCB0aHVtYm5haWwgZGl2Ljxicj5VdHRlcmx5IHRlcnJpYmxlIGJ1dCB2ZXJ5IGVkdWNhdGlvbmFsITwvcD4nXG5cdH0se1xuXHRcdElEOiA0LFxuXHRcdHRpdGxlOiAnU3VyZiBUcmFja2luZyBBcHAgQ29uY2VwdCcsXG5cdFx0c2x1ZzogJ3N1cmYtdHJhY2tpbmctYXBwLWNvbmNlcHQnLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydqUXVlcnknXSxcblx0XHRcdHJ1Ynk6IFsnUnVieSBvbiBSYWlscyddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3N1cmZhcHBjb25jZXB0LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5EdXJpbmcgbXkgdGltZSBzdHVkeWluZyBhdCBCaXRtYWtlciBMYWJzIGluIFRvcm9udG8sIG15c2VsZiBhbmQgYSBjb3VwbGUgb2YgY2xhc3NtYXRlcyBkZWNpZGVkIHRvIGVudGVyIHRoZSBtYWtlciBlZGl0aW9uIG9mIHN0YXJ0LXVwIHdlZWtlbmQuPC9wPjxwPkkgaGFkIGhhZCBhbiBpZGVhIGEgeWVhciBvciBzbyBiZWZvcmUgaGFuZCB3aGlsc3QgZmluaXNoaW5nIHVwIGF0IHVuaXZlcnNpdHkgdG8gY3JlYXRlIGhvdXNpbmcgZm9yIGEgc21hcnRwaG9uZSB0aGF0IGNvdWxkIGJlIGF0dGFjaGVkIHRvIGEgc3VyZmJvYXJkIGluIG9yZGVyIHRvIGNvbGxlY3QgZGF0YSBhYm91dCB0aGUgc3VyZmVyXFwncyBwZXJmb3JtYW5jZSBkdXJpbmcgdGhlaXIgc2Vzc2lvbiwgYWxsb3dpbmcgdGhlbSB0byByZXZpZXcgdGhlIGRhdGEgbGF0ZXIuIFNvIHdlIHdlbnQgYWJvdXQgcHJvdG90eXBpbmcgYSBkZXZpY2UgKGluIHBsYWNlIG9mIHRoZSBzbWFydHBob25lIGhvdXNpbmcpIGFuZCB0aGUgd2ViIGFwcCB0aGF0IHdvdWxkIGRpc3BsYXkgdGhlIGRhdGEuPC9wPjxwPkFzIHRoaXMgd2FzIG1vcmUgb2YgYSBjb25jZXB0IHByb2plY3QgdGhhbiBhbiBhY3R1YWwgYXR0ZW1wdCBhdCBidWlsZGluZyBhIHByb2R1Y3QsIEkgYWRkZWQgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgd291bGRuXFwndCByZWFsbHkgYmUgYWNoaWV2YWJsZSwgc3VjaCBhcyByZWFsLXRpbWUgd2F2ZS10by13YXZlIHVwZGF0ZXMgdG8gdGhlIHN1cmZlcnMgcHJvZmlsZSwgd2hlcmUgZWFjaCB3YXZlIHdvdWxkIGJlIHBsb3R0ZWQgb24gYSBsb2NhbCBtYXAgd2l0aCBpdFxcJ3Mgc3BlZWQgYW5kIGRpc3RhbmNlIHNob3duIGFsb25nIHNpZGUuPC9wPjxwPldlIGRpZG5cXCd0IHdpbiBhbnkgcHJpemVzIGJ1dCBkaWRuXFwndCBkbyB0ZXJyYmlseSBlaXRoZXIgYXMgd2Ugd2VyZSBzb21ld2hlcmUgaW4gdGhlIHRvcCA5IG91dCBvZiA0MCsgdGVhbXMuPC9wPidcblx0fSx7XG5cdFx0SUQ6IDUsXG5cdFx0dGl0bGU6ICdSUEcgYWR2ZW50dXJlIGdhbWUnLFxuXHRcdHNsdWc6ICdycGctYWR2ZW50dXJlLWdhbWUnLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydqUXVlcnknXSxcblx0XHRcdHJ1Ynk6IFsnUnVieSBvbiBSYWlscyddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3JwZy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+Rm9yIG15IGZpbmFsIHByb2plY3QgYXQgQml0bWFrZXIgTGFicywgSSBkZWNpZGVkIHRvIGJ1aWxkIGFuIFJQRyBicm93c2VyIGdhbWUgdGhhdCBhbGxvd3MgcGxheWVycyB0byBjcmVhdGUgYSBjaGFyYWN0ZXIsIGJhdHRsZSBOUENzIGFuZCBvdGhlciBwbGF5ZXJzLCBjb2xsZWN0IGdvbGQgJmFtcDsgaXRlbXMsIGxldmVsIHVwIGFuZCBrZWVwIHRyYWNrIG9mIHRoZWlyIHJhbmsgY29tcGFyZWQgdG8gb3RoZXIgcGxheWVycy48L3A+PHA+VGhpcyB3YXMgaGFyZCB3b3JrLCBlc3BlY2lhbGx5IGR1ZSB0byB0aGUgbGltaXRlZCB0aW1lIGZyYW1lIHdoaWNoIGludm9sdmVkIGEgZmV3IH4xOCBob3VyIHNlc3Npb25zIGFuZCBvbmUgMzYgaG91ciBzZXNzaW9uISAoV2UgaGFkIHJvdWdobHkgdHdvIHdlZWtzIHRvIGhhY2sgb24gb3VyIGZpbmFsIHByb2plY3RzKS4gSG93ZXZlciwgYXMgbXVjaCBhcyBpdCB3YXMgaGFyZHdvcmsgaXQgd2FzIGEgbG90IG9mIGZ1biE8L3A+PHA+SSBsZWFybmVkIGEgaGVhcCBhYm91dCBSdWJ5IG9uIFJhaWxzIGluIHRoaXMgdGltZSwgcGFydGljdWxhcmx5IHNpbmNlIHRoZXJlIHdlcmUgc29tZSBjb21wbGV4IHJlbGF0aW9uc2hpcHMgZ29pbmcgb24gYmV0d2VlbiB0aGUgZGlmZmVyZW50IHJlc291cmNlcyBhbmQgZW50aXRpZXMgaW4gdGhpcyBnYW1lLjwvcD48cD5UaGUgcHJvamVjdCBoYXMgc2luY2UgYmVlbiBsYWlkIHRvIHJlc3QgYnV0IEkgZG8gc3RpbGwgYWltIHRvIGZpbmQgdGhlIHRpbWUgdG8gcmUtYnVpbGQgaXQgd2l0aCBzb21lIGV4dHJhIGZlYXR1cmVzLCBzdWNoIGFzIHVzaW5nIHdlYnNvY2tldHMgYW5kIEhUTUw1IGNhbnZhcyEgLSBpdFxcJ2QgYmUgYSBmdW4gc2lkZSBwcm9qZWN0IHRvIGhhdmUgb24gdGhlIGdvITwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ1JpdmVyIElzbGFuZCBDaGVja291dCcsXG5cdFx0Ly8gXHRzbHVnOiAncml2ZXItaXNsYW5kLWNoZWNrb3V0Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdC8vIFx0XHQnYyMnOiBbJ1Jhem9yJywgJy5uZXQnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGFwaXM6IFsnR29vZ2xlIE1hcHMnXSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvcml2ZXItaXNsYW5kLWNoZWNrb3V0LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD48L3A+J1xuXHRcdC8vIH0se1xuXHRcdC8vIFx0SUQ6IFhYLFxuXHRcdC8vIFx0dGl0bGU6ICdOaW50ZW5kbyBDdXN0b21lciBTZXJ2aWNlJyxcblx0XHQvLyBcdHNsdWc6ICduaW50ZW5kby1jdXN0b21lci1zZXJ2aWNlJyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdC8vIFx0XHRwaHA6IFsnU2lsdmVyU3RyaXBlJ11cblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL25pbnRlbmRvLWN1c3RvbWVyLXNlcnZpY2UucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ0p1cmEgVGFzdGl2YWwgMjAxNScsXG5cdFx0Ly8gXHRzbHVnOiAnanVyYS10YXN0aXZhbC0yMDE1Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeScsICdHcnVudCddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9qdXJhLXRhc3RpdmFsLTIwMTUucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ1doeXRlICYgTWFja2F5Jyxcblx0XHQvLyBcdHNsdWc6ICd3aHl0ZS1hbmQtbWFja2F5Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeScsICdHcnVudCcsICdTa3JvbGxyJ11cblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3doeXRlLWFuZC1tYWNrYXkucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ0NhcHJpU3VuIE1pbmlvbnMnLFxuXHRcdC8vIFx0c2x1ZzogJ2NhcHJpU3VuLW1pbmlvbnMnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0Ly8gXHRcdHBocDogWydTaWx2ZXJTdHJpcGUnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvY2FwcmlTdW4tbWluaW9ucy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHR9LHtcblx0XHRcdElEOiA2LFxuXHRcdFx0dGl0bGU6ICdHcmVlbnZhbGUgUG90YXRvcGFscycsXG5cdFx0XHRzbHVnOiAnZ3JlZW52YWxlLXBvdGF0b3BhbHMnLFxuXHRcdFx0c3RhY2s6IHtcblx0XHRcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0XHRcdHBocDogWydTaWx2ZXJTdHJpcGUnXVxuXHRcdFx0fSxcblx0XHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvZ3JlZW52YWxlLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD48L3A+PHA+R3JlZW5WYWxlIFBvdGF0b2VzIHdlcmUgcnVubmluZyBhIHByb21vdGlvbiB3aGVyZSBjdXN0b21lcnMgYnV5aW5nIHRoZWlyIHByb2R1Y3RzIGNvdWxkIGVudGVyIG9uLXBhY2sgY29kZXMgdG8gcmVkZWVtIGFuZCBjb2xsZWN0IHBvaW50cy4uLiBvciByYXRoZXIgXFwnUG90YXRva2Vuc1xcJyE8L3A+IDxwPlRoaXMgd2FzIHF1aXRlIGEgZnVuIHByb2plY3QgdG8gd29yayBvbi4gQXMgd2VsbCBhcyBpdCBoYXZpbmcgYSBmdW4gY2FydG9vbnkgc3R5bGUgaXQgcHJlc2VudGVkIGEgZmV3IHNpbXBsZSBidXQgaW50ZXJlc3RpbmcgY2hhbGxlbmdlcyB0byBvdmVyY29tZS48L3A+IDxwPlRoZSBtYWluIGNoYWxsZW5nZSB3YXMgdGhlIGhhbmRsaW5nIG9mIHRoZSB0b2tlbiByZWRlbXB0aW9ucywgdGhlcmUgd2VyZSBhIG51bWJlciBvZiBkaWZmZXJlbnQgd2F5cyBmb3IgYSB1c2VyIHRvIGVhcm4gdGhlc2UgdG9rZW5zLCB0aHJvdWdoIGRpZmZlcmVudCBvbi1wYWNrIGFuZCBtYWdhemluZSBjb2RlcyBhbmQgdGhyb3VnaCBmYWNlYm9vayBmcmllbmQgcmVmZXJhbHMgLSBjZXJ0YWluIHNvdXJjZXMgd2VyZSByZXBlYXRhYmxlLCBvdGhlcnMgd2VyZSBub3QuIEFub3RoZXIgY2hhbGxlbmdlIHdhcyB0byBpbnRlZ3JhdGUgYSB0aGlyZCBwYXJ0eSBBUEkgdGhhdCBoYW5kbGVkIHRoZSB2YWxpZGF0aW9uIG9mIHRoZSBwcm9tbyBjb2RlcyAtIHdoaWNoIHR1cm5lZCBvdXQgdG8gaGF2ZSBhIGNvdXBsZSBvZiBidWdzITwvcD4gJ1xuXHRcdH1cblxuXTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF89d2luZG93Ll87XG5cbnZhciBBcHBSb3V0ZXIgPSB3aW5kb3cuQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG5cdHJvdXRlczoge1xuXHRcdCcnOiAncm9vdCcsXG5cdFx0J2Jsb2coLykoLzpwb3N0KSc6ICdibG9nJyxcblx0XHQncHJvamVjdHMoLzpwcm9qZWN0KSc6ICdwcm9qZWN0cycsXG5cdFx0J2NvbnRhY3QnOiAnY29udGFjdCcsXG5cdFx0J2Fib3V0JzogJ2Fib3V0J1xuXHR9LFxuXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKGNvbnRleHQpe1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6cmVkaXJlY3QnLCB0aGlzLnJlZGlyZWN0KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnLCB0aGlzLmdvVG9DdXJyZW50Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6Z29Ub0xhbmRpbmcnLCB0aGlzLmdvVG9MYW5kaW5nKTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpuZXh0Q29udGVudCcsIHRoaXMuZ29Ub05leHRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpwcmV2Q29udGVudCcsIHRoaXMuZ29Ub1ByZXZDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpzZXRDdXJyZW50Q29udGVudCcsIHRoaXMuc2V0Q3VycmVudENvbnRlbnQpO1xuXG5cdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5kZWZhdWx0Q29udGVudFJvdXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5vbigncm91dGU6cm9vdCcgLGZ1bmN0aW9uKCl7XG5cblx0XHRcdGlmICghY29udGV4dC52aWV3cy5pbnRyby5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmludHJvID0gbmV3IGNvbnRleHQudmlld3MuaW50cm8oe1xuXHQgIFx0XHRcdGVsOiBjb250ZXh0LmludHJvUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0ludHJvJyk7XG5cbiAgXHRcdC8vIG5ldyBjb250ZXh0LnZpZXdzLmludHJvKHtcbiAgXHRcdC8vIFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG4gIFx0XHQvLyB9KTtcbiAgXHRcdC8vICQoJ2JvZHknKS5hZGRDbGFzcygnaW50cm8nKTtcblxuICBcdFx0dGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmJsb2cnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0Ly8gT25seSB0cmFuc2l0aW9uIGlmIHRoZSBjdXJyZW50IHZpZXcgaXMgbm90IGNoYW5naW5nIChidXQgdGhlIHJlc291cmNlIGlzKS5cblx0XHRcdHZhciB0cmFuc2l0aW9uID0gKHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID09PSBjb250ZXh0LnZpZXdzLmJsb2cgJiYgdGhpcy5sYXN0Um91dGUgIT09ICcnKTtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmJsb2cuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nID0gbmV3IGNvbnRleHQudmlld3MuYmxvZyh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlc1snYmxvZy1wb3N0J11cblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuYmxvZy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcbiAgXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOm1lc3NhZ2UnLCAnPHA+RWVrLCBsb3RzIG9mIElwc3VtISBJXFwnbGwgc3RhcnQgd3JpdGluZyBhY3R1YWwgcG9zdHMgb25jZSB0aGlzIHNpdGUgaXMgZml4ZWQgdXAgcHJvcGVybHkuIEZvciBub3csIGVuam95IGFsbCB0aGUgdmFyaW91cyBpcHN1bXMhPC9wPicpO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmxhc3RSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLmJsb2c7XG5cdFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOnByb2plY3RzJyAsZnVuY3Rpb24oc2x1Zyl7XG5cdFx0XHQvLyBPbmx5IHRyYW5zaXRpb24gaWYgdGhlIGN1cnJlbnQgdmlldyBpcyBub3QgY2hhbmdpbmcgKGJ1dCB0aGUgcmVzb3VyY2UgaXMpLlxuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSAodGhpcy5jdXJyZW50Q29udGVudFZpZXcgPT09IGNvbnRleHQudmlld3MucHJvamVjdHMgJiYgdGhpcy5sYXN0Um91dGUgIT09ICcnKTtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLnByb2plY3RzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMgPSBuZXcgY29udGV4dC52aWV3cy5wcm9qZWN0cyh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5wcm9qZWN0LFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29udGV4dC52aWV3cy5wcm9qZWN0cy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcblxuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0XHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5wcm9qZWN0cztcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6Y29udGFjdCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuY29udGFjdC5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QgPSBuZXcgY29udGV4dC52aWV3cy5jb250YWN0KHtcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmNvbnRhY3Rcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuY29udGFjdC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuY29udGFjdDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6YWJvdXQnICxmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmFib3V0LmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MuYWJvdXQgPSBuZXcgY29udGV4dC52aWV3cy5hYm91dCh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5hYm91dFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5hYm91dC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuYWJvdXQ7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmRlZmF1bHRSb3V0ZScsIGZ1bmN0aW9uKCl7XG5cdFx0fSk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuXG5cdH0sXG5cdHNldEN1cnJlbnRDb250ZW50OiBmdW5jdGlvbihjb250ZW50KXtcblx0XHRpZiAoY29udGVudC52aWV3KSB7dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZW50LnZpZXc7IH1cblx0XHRpZiAoY29udGVudC5yb3V0ZSkge3RoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gY29udGVudC5yb3V0ZTsgfVxuXHR9LFxuXHRnb1RvTGFuZGluZzogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubmF2aWdhdGUoJycsIHt0cmlnZ2VyOiB0cnVlfSk7XG5cdH0sXG5cdGdvVG9DdXJyZW50Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubmF2aWdhdGUodGhpcy5jdXJyZW50Q29udGVudFJvdXRlLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuXHR9LFxuXHRnb1RvUHJldkNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXRQcmV2TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3LnByZXZSb3V0ZSgpO1xuXHRcdGlmICghcm91dGUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dGhpcy5uYXZpZ2F0ZShyb3V0ZSk7XG5cdH0sXG5cdGdvVG9OZXh0Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdGlmICghXy5pc0Z1bmN0aW9uKHRoaXMuY3VycmVudENvbnRlbnRWaWV3LmdldE5leHRNb2RlbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dmFyIHJvdXRlID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcubmV4dFJvdXRlKCk7XG5cdFx0aWYgKCFyb3V0ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR0aGlzLm5hdmlnYXRlKHJvdXRlKTtcblx0fSxcblx0ZGVmYXVsdENvbnRlbnRSb3V0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnIy9hYm91dCc7XG5cdH0sXG5cdHJlZGlyZWN0OiBmdW5jdGlvbihyb3V0ZSl7XG5cdFx0dGhpcy5uYXZpZ2F0ZShyb3V0ZSwge3RyaWdnZXI6IHRydWV9KTtcblx0fVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBSb3V0ZXI7IiwidmFyIGV4cG9ydHMgPSAoZnVuY3Rpb24gKCkgeyBcblxuIHZhciBIYW5kbGViYXJzID0gd2luZG93LkhhbmRsZWJhcnM7IFxuXG50aGlzW1wiSlNUXCJdID0gdGhpc1tcIkpTVFwiXSB8fCB7fTtcblxudGhpc1tcIkpTVFwiXVtcImFib3V0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgYWJvdXRcXFwiPlxcblx0XFxuXHQ8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5BYm91dCBNZS4uLi48L2gxPlxcblx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiIHN0eWxlPVxcXCJjb2xvcjogcmdiYSgxODAsMTgwLDE4MCwxKTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCI+XFxuXHRcdDxoMj5ZaWtlcyE8L2gyPlxcblx0XHQ8cD5UaGlzIGJpdCdzIGNvbWluZyBzb29uIEkgcHJvbWlzZSE8L3A+XFxuXHQ8L2Rpdj5cXG5cXG48L2Rpdj5cIjtcbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJibG9nLXBvc3RcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ3dpdGgnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmF0dHJpYnV0ZXMgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJ3aXRoXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgyLCBkYXRhKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCJcXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgYnVmZmVyID0gXCJcdFx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXJcXFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XFxcInNtYWxsLTEyXFxcIj5cXG5cdFx0XHRcdFx0PGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMT5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XHRcdFxcblx0XHRcdFx0XHRcdFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiY29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCJcXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcXG5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmVycm9yIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDUsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg3LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBwbGFjZWhvbGRlci12aWV3XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFx0XHQ8aDIgc3R5bGU9XFxcInRleHQtYWxpZ246Y2VudGVyOyBjb2xvcjogIzk5OVxcXCI+RWVrITwvaDI+XFxuXHRcdFx0XHRcdFx0PHA+VGhlcmUgc2VlbXMgdG8gaGF2ZSBiZWVuIGFuIGVycm9yLjwvcD5cXG5cdFx0XHRcdFx0XHQ8cD5Ob3QgdG8gd29ycnkhIFlvdSBzaG91bGQgYmUgYWJsZSB0byBzZWUgbXkgYmxvZyBwb3N0cyBvbiBXb3JkcHJlc3MuPC9wPlxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cIjtcbiAgfSxcIjdcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBwbGFjZWhvbGRlci12aWV3XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdFx0PGgyIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmNlbnRlcjsgY29sb3I6ICM5OTlcXFwiPkxvYWRpbmcuLi48L2gyPlxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2PlxcblwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazE7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdHRyaWJ1dGVzIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg0LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyByZXR1cm4gc3RhY2sxOyB9XG4gIGVsc2UgeyByZXR1cm4gJyc7IH1cbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJjb250YWN0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgY29udGFjdFxcXCI+XFxuXFxuXHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXFxuXHRcdDxkaXYgY2xhc3M9XFxcInNtYWxsLTEyIGxhcmdlLTRcXFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcImNvbm5lY3RcXFwiPlxcblx0XHRcdFx0XFxuXHRcdFx0XHQ8aDI+Q29ubmVjdDwvaDI+XFxuXHRcdFx0XHQ8dWwgY2xhc3M9XFxcInNvY2lhbC1pY29uc1xcXCI+XFxuXHRcdFx0XHRcdDxsaT5cXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TcGVuX1RheWxvclxcXCI+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJidXR0b24gdHdpdHRlclxcXCI+XFxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyIGxlZnRcXFwiPjwvaT5cXG5cdFx0XHRcdFx0XHRcdFx0PHA+VHdpdHRlcjwvcD5cXG5cdFx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDwvYT5cXG5cdFx0XHRcdFx0PC9saT5cXG5cdFx0XHRcdFx0PGxpPlxcblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vU3BlblVLXFxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbiBnaXRodWJcXFwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cXFwiZmEgZmEtZ2l0aHViIGxlZnRcXFwiPjwvaT5cXG5cdFx0XHRcdFx0XHRcdFx0PHA+R2l0SHViPC9wPlxcblx0XHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PC9hPlxcblx0XHRcdFx0XHQ8L2xpPlxcblx0XHRcdFx0XHQ8bGk+XFxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHA6Ly91ay5saW5rZWRpbi5jb20vaW4vc3BlbnRheWxvclxcXCI+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJidXR0b24gbGlua2VkLWluXFxcIj5cXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluIGxlZnRcXFwiPjwvaT5cXG5cdFx0XHRcdFx0XHRcdFx0PHA+TGlua2VkSW48L3A+XFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2E+XFxuXHRcdFx0XHRcdDwvbGk+XFxuXHRcdFx0XHQ8L3VsPlxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cXG5cdFx0PGRpdiBjbGFzcz1cXFwic21hbGwtMTIgbGFyZ2UtOFxcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwic2F5LWhlbGxvXFxcIj5cXG5cdFx0XHRcdDxoMj5TYXkgSGVsbG8hPC9oMj5cXG5cdFx0XHRcdDxmb3JtIGNsYXNzPVxcXCJjb250YWN0LWZvcm1cXFwiPlxcblxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJmaWVsZHNcXFwiPlxcblxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInN1Ym1pc3Npb24tZXJyb3JcXFwiPlxcblx0XHRcdFx0XHRcdFx0WWlrZXMhIFNvbWV0aGluZyB3ZW50IHdyb25nLCB0cnkgYWdhaW4hXFxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cXFwiZmEgZmEtY2xvc2UgcmlnaHRcXFwiPjwvaT5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuXHRcdFx0XHQgICAgXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgaWQ9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYW1lXFxcIi8+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcblx0XHRcdFx0ICAgIFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBpZD1cXFwiZW1haWxcXFwiICBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiLz5cXG5cdFx0XHRcdCAgICA8L2Rpdj5cXG5cXG5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuXHRcdFx0XHQgICAgXHQ8dGV4dGFyZWEgbmFtZT1cXFwibWVzc2FnZVxcXCIgaWQ9XFxcIm1lc3NhZ2VcXFwiIHJvd3M9XFxcIjZcXFwiIHBsYWNlaG9sZGVyPVxcXCJXaGF0J3MgdXA/XFxcIj48L3RleHRhcmVhPlxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInRoYW5rcy1tZXNzYWdlXFxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFx0XHRcdFx0PGgyPkF3ZXNvbWUhPC9oMj5cXG5cdFx0XHRcdFx0XHRcdFx0PHA+VGhhbmtzIGZvciBnZXR0aW4gaW4gdG91Y2ghPGJyPiBJJ2xsIGJlIHN1cmUgdG8gZ2V0IGJhY2sgdG8geW91IHNvb24hPC9wPlxcblx0XHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdCAgICBcXG5cXG5cdFx0XHQgICAgPGJ1dHRvbiBjbGFzcz1cXFwic3VibWl0XFxcIiB2YWx1ZT1cXFwiU2VuZFxcXCI+PHNwYW4+RmlyZSBhd2F5ITwvc3Bhbj48aSBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXFxcIj48L2k+PGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy11cFxcXCI+PC9pPjwvYnV0dG9uPlxcblx0XHRcdFx0PC9mb3JtPlxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cXG5cdFx0PC9kaXY+XFxuXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImludHJvXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiPHVsIGNsYXNzPVxcXCJzb2NpYWwtaWNvbnNcXFwiPlxcblx0PGxpPjxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL1NwZW5fVGF5bG9yXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdHdpdHRlclxcXCI+PC9pPjwvYT48L2xpPlxcblx0PGxpPjxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vU3BlblVLXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZ2l0aHViXFxcIj48L2k+PC9hPjwvbGk+XFxuXHQ8bGk+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHA6Ly91ay5saW5rZWRpbi5jb20vaW4vc3BlbnRheWxvclxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluXFxcIj48L2k+PC9hPjwvbGk+XFxuPC91bD5cXG5cXG48c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIlxcblx0IHdpZHRoPVxcXCIxMDAlXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwMCAxNjBcXFwiIGVuYWJsZS1iYWNrZ3JvdW5kPVxcXCJuZXcgMCAwIDEwMDAgMTYwXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiA5MDBweDsgbWFyZ2luLWJvdHRvbTogNDBweDtcXFwiPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTkwLjQ3OSw5OS4zOThjMCw2LjE5OC0xLjU3MiwxMS43MDEtNC43MTcsMTYuNTA5Yy0zLjE0NSw0LjgwOS03LjY4LDguNTQ1LTEzLjYwNCwxMS4yMTFcXG5cdFx0XHRjLTUuOTI1LDIuNjY2LTEyLjg3NSwzLjk5OS0yMC44NSwzLjk5OWMtNi42NTQsMC0xMi4yMzYtMC40NjgtMTYuNzQ4LTEuNDAxcy05LjIwNi0yLjU2My0xNC4wODItNC44ODh2LTI0LjA2Mlxcblx0XHRcdGM1LjE0OSwyLjY0NCwxMC41MDQsNC43MDYsMTYuMDY0LDYuMTg3YzUuNTYsMS40ODEsMTAuNjY0LDIuMjIyLDE1LjMxMiwyLjIyMmM0LjAxLDAsNi45NDktMC42OTQsOC44MTgtMi4wODVcXG5cdFx0XHRjMS44NjgtMS4zOSwyLjgwMy0zLjE3OSwyLjgwMy01LjM2NmMwLTEuMzY3LTAuMzc2LTIuNTYzLTEuMTI4LTMuNTg5cy0xLjk2LTIuMDYyLTMuNjIzLTMuMTFcXG5cdFx0XHRjLTEuNjY0LTEuMDQ4LTYuMDk2LTMuMTg5LTEzLjI5Ni02LjQyNmMtNi41MTgtMi45NjItMTEuNDA1LTUuODMzLTE0LjY2My04LjYxM2MtMy4yNTktMi43NzktNS42NzQtNS45Ny03LjI0Ni05LjU3XFxuXHRcdFx0Yy0xLjU3Mi0zLjYtMi4zNTgtNy44NjEtMi4zNTgtMTIuNzgzYzAtOS4yMDUsMy4zNS0xNi4zODMsMTAuMDQ5LTIxLjUzM2M2LjY5OS01LjE0OSwxNS45MDQtNy43MjUsMjcuNjE3LTcuNzI1XFxuXHRcdFx0YzEwLjM0NSwwLDIwLjg5NSwyLjM5MywzMS42NSw3LjE3OEw4Mi4yMDgsNTYuNGMtOS4zNDMtNC4yODMtMTcuNDA5LTYuNDI2LTI0LjE5OS02LjQyNmMtMy41MSwwLTYuMDYyLDAuNjE1LTcuNjU2LDEuODQ2XFxuXHRcdFx0Yy0xLjU5NiwxLjIzLTIuMzkzLDIuNzU4LTIuMzkzLDQuNThjMCwxLjk2LDEuMDE0LDMuNzE1LDMuMDQyLDUuMjY0YzIuMDI3LDEuNTUsNy41Myw0LjM3NSwxNi41MDksOC40NzdcXG5cdFx0XHRjOC42MTMsMy44NzQsMTQuNTk1LDguMDMyLDE3Ljk0NCwxMi40NzZTOTAuNDc5LDkyLjY1NCw5MC40NzksOTkuMzk4elxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM0M0JGQjRcXFwiIGQ9XFxcIk05MC40NzksODkuMzk4YzAsNi4xOTgtMS41NzIsMTEuNzAxLTQuNzE3LDE2LjUwOWMtMy4xNDUsNC44MDktNy42OCw4LjU0NS0xMy42MDQsMTEuMjExXFxuXHRcdFx0Yy01LjkyNSwyLjY2Ni0xMi44NzUsMy45OTktMjAuODUsMy45OTljLTYuNjU0LDAtMTIuMjM2LTAuNDY4LTE2Ljc0OC0xLjQwMXMtOS4yMDYtMi41NjMtMTQuMDgyLTQuODg4VjkwLjc2Nlxcblx0XHRcdGM1LjE0OSwyLjY0NCwxMC41MDQsNC43MDYsMTYuMDY0LDYuMTg3YzUuNTYsMS40ODEsMTAuNjY0LDIuMjIyLDE1LjMxMiwyLjIyMmM0LjAxLDAsNi45NDktMC42OTQsOC44MTgtMi4wODVcXG5cdFx0XHRjMS44NjgtMS4zOSwyLjgwMy0zLjE3OSwyLjgwMy01LjM2NmMwLTEuMzY3LTAuMzc2LTIuNTYzLTEuMTI4LTMuNTg5cy0xLjk2LTIuMDYyLTMuNjIzLTMuMTFcXG5cdFx0XHRjLTEuNjY0LTEuMDQ4LTYuMDk2LTMuMTg5LTEzLjI5Ni02LjQyNmMtNi41MTgtMi45NjItMTEuNDA1LTUuODMzLTE0LjY2My04LjYxM2MtMy4yNTktMi43NzktNS42NzQtNS45Ny03LjI0Ni05LjU3XFxuXHRcdFx0Yy0xLjU3Mi0zLjYtMi4zNTgtNy44NjEtMi4zNTgtMTIuNzgzYzAtOS4yMDUsMy4zNS0xNi4zODMsMTAuMDQ5LTIxLjUzM2M2LjY5OS01LjE0OSwxNS45MDQtNy43MjUsMjcuNjE3LTcuNzI1XFxuXHRcdFx0YzEwLjM0NSwwLDIwLjg5NSwyLjM5MywzMS42NSw3LjE3OEw4Mi4yMDgsNDYuNGMtOS4zNDMtNC4yODMtMTcuNDA5LTYuNDI2LTI0LjE5OS02LjQyNmMtMy41MSwwLTYuMDYyLDAuNjE1LTcuNjU2LDEuODQ2XFxuXHRcdFx0Yy0xLjU5NiwxLjIzLTIuMzkzLDIuNzU4LTIuMzkzLDQuNThjMCwxLjk2LDEuMDE0LDMuNzE1LDMuMDQyLDUuMjY0YzIuMDI3LDEuNTUsNy41Myw0LjM3NSwxNi41MDksOC40NzdcXG5cdFx0XHRjOC42MTMsMy44NzQsMTQuNTk1LDguMDMyLDE3Ljk0NCwxMi40NzZTOTAuNDc5LDgyLjY1NCw5MC40NzksODkuMzk4elxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk0xNzguNDU4LDYxLjU5NmMwLDExLjE2Ni0zLjI5MywxOS43OS05Ljg3OCwyNS44NzRjLTYuNTg2LDYuMDg0LTE1LjkzOSw5LjEyNi0yOC4wNjIsOS4xMjZoLTcuNTg4djMzLjE1NFxcblx0XHRcdGgtMjcuMDAyVjI5LjgwOWgzNC41OWMxMi42MjMsMCwyMi4xMDMsMi43NTgsMjguNDM4LDguMjcxQzE3NS4yOSw0My41OTUsMTc4LjQ1OCw1MS40MzQsMTc4LjQ1OCw2MS41OTZ6IE0xMzIuOTMxLDc0LjU4NGg0LjkyMlxcblx0XHRcdGM0LjA1NiwwLDcuMjgtMS4xMzksOS42NzMtMy40MThjMi4zOTMtMi4yNzgsMy41ODktNS40MjMsMy41ODktOS40MzRjMC02Ljc0NC0zLjczNy0xMC4xMTctMTEuMjExLTEwLjExN2gtNi45NzNWNzQuNTg0elxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiNFRUVCNUZcXFwiIGQ9XFxcIk0xNzguNDU4LDUxLjU5NmMwLDExLjE2Ni0zLjI5MywxOS43OS05Ljg3OCwyNS44NzRjLTYuNTg2LDYuMDg0LTE1LjkzOSw5LjEyNi0yOC4wNjIsOS4xMjZoLTcuNTg4djMzLjE1NFxcblx0XHRcdGgtMjcuMDAyVjE5LjgwOWgzNC41OWMxMi42MjMsMCwyMi4xMDMsMi43NTgsMjguNDM4LDguMjcxQzE3NS4yOSwzMy41OTUsMTc4LjQ1OCw0MS40MzQsMTc4LjQ1OCw1MS41OTZ6IE0xMzIuOTMxLDY0LjU4NGg0LjkyMlxcblx0XHRcdGM0LjA1NiwwLDcuMjgtMS4xMzksOS42NzMtMy40MThjMi4zOTMtMi4yNzgsMy41ODktNS40MjMsMy41ODktOS40MzRjMC02Ljc0NC0zLjczNy0xMC4xMTctMTEuMjExLTEwLjExN2gtNi45NzNWNjQuNTg0elxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk0yNTMuNzIyLDEyOS43NWgtNTkuMzM2VjI5LjgwOWg1OS4zMzZ2MjEuNjdoLTMyLjMzNHYxNS43MjNoMjkuOTQxdjIxLjY3aC0yOS45NDF2MTguODY3aDMyLjMzNFYxMjkuNzV6XFxcIlxcblx0XHRcdC8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiI0YxNUM2RlxcXCIgZD1cXFwiTTI1My43MjIsMTE5Ljc1aC01OS4zMzZWMTkuODA5aDU5LjMzNnYyMS42N2gtMzIuMzM0djE1LjcyM2gyOS45NDF2MjEuNjdoLTI5Ljk0MXYxOC44NjdoMzIuMzM0VjExOS43NXpcXFwiXFxuXHRcdFx0Lz5cXG5cdDwvZz5cXG48L2c+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNMzY2LjM3OCwxMjkuNzVoLTM1LjQxbC0zNi41MDQtNzAuNDFoLTAuNjE1YzAuODY1LDExLjA3NCwxLjI5OSwxOS41MjgsMS4yOTksMjUuMzYxdjQ1LjA0OWgtMjMuOTI2XFxuXHRcdFx0VjI5LjgwOWgzNS4yNzNsMzYuMzY3LDY5LjQ1M2gwLjQxYy0wLjYzOS0xMC4wNzEtMC45NTctMTguMTYtMC45NTctMjQuMjY4VjI5LjgwOWgyNC4wNjJWMTI5Ljc1elxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiNFRUVCNUZcXFwiIGQ9XFxcIk0zNjYuMzc4LDExOS43NWgtMzUuNDFsLTM2LjUwNC03MC40MWgtMC42MTVjMC44NjUsMTEuMDc0LDEuMjk5LDE5LjUyOCwxLjI5OSwyNS4zNjF2NDUuMDQ5aC0yMy45MjZcXG5cdFx0XHRWMTkuODA5aDM1LjI3M2wzNi4zNjcsNjkuNDUzaDAuNDFjLTAuNjM5LTEwLjA3MS0wLjk1Ny0xOC4xNi0wLjk1Ny0yNC4yNjhWMTkuODA5aDI0LjA2MlYxMTkuNzV6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTQ2OC40MzgsMTI5Ljc1aC0yNy4wMDJWNTEuODg5aC0yNC40MDR2LTIyLjA4aDc1Ljc0MnYyMi4wOGgtMjQuMzM2VjEyOS43NXpcXFwiLz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNDNCRkI0XFxcIiBkPVxcXCJNNDY4LjQzOCwxMTkuNzVoLTI3LjAwMlY0MS44ODloLTI0LjQwNHYtMjIuMDhoNzUuNzQydjIyLjA4aC0yNC4zMzZWMTE5Ljc1elxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk01NjguMzgsMTI5Ljc1bC00LjkyMi0xOC43M2gtMzIuNDcxbC01LjA1OSwxOC43M2gtMjkuNjY4bDMyLjYwNy0xMDAuMzUyaDM2LjAyNWwzMy4wMTgsMTAwLjM1Mkg1NjguMzh6XFxuXHRcdFx0IE01NTcuODUzLDg4Ljg3MWwtNC4zMDctMTYuNDA2Yy0xLjAwMy0zLjY0Ni0yLjIyMi04LjM2Mi0zLjY1Ny0xNC4xNWMtMS40MzYtNS43ODctMi4zODItOS45MzUtMi44MzctMTIuNDQxXFxuXHRcdFx0Yy0wLjQxLDIuMzI0LTEuMjIsNi4xNTItMi40MjcsMTEuNDg0Yy0xLjIwOCw1LjMzMi0zLjg4NiwxNS44MzctOC4wMzIsMzEuNTE0SDU1Ny44NTN6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiI0VFRUI1RlxcXCIgZD1cXFwiTTU2OC4zOCwxMTkuNzVsLTQuOTIyLTE4LjczaC0zMi40NzFsLTUuMDU5LDE4LjczaC0yOS42NjhsMzIuNjA3LTEwMC4zNTJoMzYuMDI1bDMzLjAxOCwxMDAuMzUySDU2OC4zOHpcXG5cdFx0XHQgTTU1Ny44NTMsNzguODcxbC00LjMwNy0xNi40MDZjLTEuMDAzLTMuNjQ2LTIuMjIyLTguMzYyLTMuNjU3LTE0LjE1Yy0xLjQzNi01Ljc4Ny0yLjM4Mi05LjkzNS0yLjgzNy0xMi40NDFcXG5cdFx0XHRjLTAuNDEsMi4zMjQtMS4yMiw2LjE1Mi0yLjQyNywxMS40ODRjLTEuMjA4LDUuMzMyLTMuODg2LDE1LjgzNy04LjAzMiwzMS41MTRINTU3Ljg1M3pcXFwiLz5cXG5cdDwvZz5cXG48L2c+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNNjQ0LjM5Niw2Ni44NTlsMTcuMjI3LTM3LjA1MWgyOS4yNThsLTMyLjg4MSw2MC45MDh2MzkuMDMzaC0yNy4yMDdWOTEuNTM3bC0zMi44ODEtNjEuNzI5aDI5LjM5NVxcblx0XHRcdEw2NDQuMzk2LDY2Ljg1OXpcXFwiLz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjRjE1QzZGXFxcIiBkPVxcXCJNNjQ0LjM5Niw1Ni44NTlsMTcuMjI3LTM3LjA1MWgyOS4yNThsLTMyLjg4MSw2MC45MDh2MzkuMDMzaC0yNy4yMDdWODEuNTM3bC0zMi44ODEtNjEuNzI5aDI5LjM5NVxcblx0XHRcdEw2NDQuMzk2LDU2Ljg1OXpcXFwiLz5cXG5cdDwvZz5cXG48L2c+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNNzAxLjY4MSwxMjkuNzVWMjkuODA5aDI3LjAwMnY3OC4xMzVoMzguNDg2djIxLjgwN0g3MDEuNjgxelxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM0M0JGQjRcXFwiIGQ9XFxcIk03MDEuNjgxLDExOS43NVYxOS44MDloMjcuMDAydjc4LjEzNWgzOC40ODZ2MjEuODA3SDcwMS42ODF6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTg3Ni42ODEsNzkuNjQzYzAsMTYuODE2LTQuMTI1LDI5LjYtMTIuMzczLDM4LjM1Yy04LjI0OSw4Ljc1LTIwLjMyNiwxMy4xMjUtMzYuMjMsMTMuMTI1XFxuXHRcdFx0Yy0xNS42NzgsMC0yNy42OTctNC4zOTctMzYuMDYtMTMuMTkzYy04LjM2My04Ljc5NS0xMi41NDQtMjEuNjAyLTEyLjU0NC0zOC40MThjMC0xNi42MzQsNC4xNTgtMjkuMzM3LDEyLjQ3Ni0zOC4xMVxcblx0XHRcdGM4LjMxNi04Ljc3MiwyMC40MDUtMTMuMTU5LDM2LjI2NS0xMy4xNTljMTUuOTA0LDAsMjcuOTU5LDQuMzUzLDM2LjE2MiwxMy4wNTdDODcyLjU3OSw0OS45OTgsODc2LjY4MSw2Mi43ODEsODc2LjY4MSw3OS42NDN6XFxuXHRcdFx0IE04MDcuOTExLDc5LjY0M2MwLDE5LjMyMyw2LjcyMiwyOC45ODQsMjAuMTY2LDI4Ljk4NGM2LjgzNiwwLDExLjkwNS0yLjM0NywxNS4yMS03LjA0MWMzLjMwNC00LjY5Myw0Ljk1Ni0xMi4wMDgsNC45NTYtMjEuOTQzXFxuXHRcdFx0YzAtOS45OC0xLjY3NS0xNy4zNTItNS4wMjQtMjIuMTE0Yy0zLjM1LTQuNzYyLTguMzUyLTcuMTQ0LTE1LjAwNS03LjE0NEM4MTQuNjc5LDUwLjM4NSw4MDcuOTExLDYwLjEzOCw4MDcuOTExLDc5LjY0M3pcXFwiLz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjRUVFQjVGXFxcIiBkPVxcXCJNODc2LjY4MSw2OS42NDNjMCwxNi44MTYtNC4xMjUsMjkuNi0xMi4zNzMsMzguMzVjLTguMjQ5LDguNzUtMjAuMzI2LDEzLjEyNS0zNi4yMywxMy4xMjVcXG5cdFx0XHRjLTE1LjY3OCwwLTI3LjY5Ny00LjM5Ny0zNi4wNi0xMy4xOTNjLTguMzYzLTguNzk1LTEyLjU0NC0yMS42MDItMTIuNTQ0LTM4LjQxOGMwLTE2LjYzNCw0LjE1OC0yOS4zMzcsMTIuNDc2LTM4LjExXFxuXHRcdFx0YzguMzE2LTguNzcyLDIwLjQwNS0xMy4xNTksMzYuMjY1LTEzLjE1OWMxNS45MDQsMCwyNy45NTksNC4zNTMsMzYuMTYyLDEzLjA1N0M4NzIuNTc5LDM5Ljk5OCw4NzYuNjgxLDUyLjc4MSw4NzYuNjgxLDY5LjY0M3pcXG5cdFx0XHQgTTgwNy45MTEsNjkuNjQzYzAsMTkuMzIzLDYuNzIyLDI4Ljk4NCwyMC4xNjYsMjguOTg0YzYuODM2LDAsMTEuOTA1LTIuMzQ3LDE1LjIxLTcuMDQxYzMuMzA0LTQuNjkzLDQuOTU2LTEyLjAwOCw0Ljk1Ni0yMS45NDNcXG5cdFx0XHRjMC05Ljk4LTEuNjc1LTE3LjM1Mi01LjAyNC0yMi4xMTRjLTMuMzUtNC43NjItOC4zNTItNy4xNDQtMTUuMDA1LTcuMTQ0QzgxNC42NzksNDAuMzg1LDgwNy45MTEsNTAuMTM4LDgwNy45MTEsNjkuNjQzelxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk05MjEuNzI5LDkzLjM4M3YzNi4zNjdoLTI3LjAwMlYyOS44MDloMzIuNzQ0YzI3LjE2MSwwLDQwLjc0Miw5Ljg0NCw0MC43NDIsMjkuNTMxXFxuXHRcdFx0YzAsMTEuNTc2LTUuNjUxLDIwLjUzMS0xNi45NTMsMjYuODY1bDI5LjEyMSw0My41NDVoLTMwLjYyNWwtMjEuMTkxLTM2LjM2N0g5MjEuNzI5eiBNOTIxLjcyOSw3My4wOGg1LjA1OVxcblx0XHRcdGM5LjQzNCwwLDE0LjE1LTQuMTcsMTQuMTUtMTIuNTFjMC02Ljg4MS00LjYyNi0xMC4zMjItMTMuODc3LTEwLjMyMmgtNS4zMzJWNzMuMDh6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiI0YxNUM2RlxcXCIgZD1cXFwiTTkyMS43MjksODMuMzgzdjM2LjM2N2gtMjcuMDAyVjE5LjgwOWgzMi43NDRjMjcuMTYxLDAsNDAuNzQyLDkuODQ0LDQwLjc0MiwyOS41MzFcXG5cdFx0XHRjMCwxMS41NzYtNS42NTEsMjAuNTMxLTE2Ljk1MywyNi44NjVsMjkuMTIxLDQzLjU0NWgtMzAuNjI1bC0yMS4xOTEtMzYuMzY3SDkyMS43Mjl6IE05MjEuNzI5LDYzLjA4aDUuMDU5XFxuXHRcdFx0YzkuNDM0LDAsMTQuMTUtNC4xNywxNC4xNS0xMi41MWMwLTYuODgxLTQuNjI2LTEwLjMyMi0xMy44NzctMTAuMzIyaC01LjMzMlY2My4wOHpcXFwiLz5cXG5cdDwvZz5cXG48L2c+XFxuPC9zdmc+XFxuXFxuPGRpdiBjbGFzcz1cXFwicGFnZS1pY29ucy13cmFwcGVyXFxcIj5cXG5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcInBhZ2UtaWNvbi13cmFwcGVyXFxcIj5cXG5cdFx0PGEgaHJlZj1cXFwiIy9wcm9qZWN0c1xcXCIgY2xhc3M9XFxcInByb2plY3RzXFxcIj5cXG5cdFx0XHQ8aW1nIGNsYXNzPVxcXCJwYWdlLWljb25cXFwiIHNyYz1cXFwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy1jb2RlLnBuZ1xcXCI+XFxuXHRcdFx0PGg0PnByb2plY3RzPC9oND5cXG5cdFx0PC9hPlxcblx0PC9kaXY+XFxuXFxuXHQ8ZGl2IGNsYXNzPVxcXCJwYWdlLWljb24td3JhcHBlclxcXCI+XFxuXHRcdDxhIGhyZWY9XFxcIiMvYmxvZ1xcXCIgY2xhc3M9XFxcImJsb2dcXFwiPlxcblx0XHRcdDxpbWcgY2xhc3M9XFxcInBhZ2UtaWNvblxcXCIgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL2Jsb2ctYm9vay5wbmdcXFwiPlxcblx0XHRcdDxoND5ibG9nPC9oND5cXG5cdFx0PC9hPlxcblx0PC9kaXY+XFxuXFxuXHQ8ZGl2IGNsYXNzPVxcXCJwYWdlLWljb24td3JhcHBlclxcXCI+XFxuXHRcdDxhIGhyZWY9XFxcIiMvY29udGFjdFxcXCIgY2xhc3M9XFxcImNvbnRhY3RcXFwiPlxcblx0XHRcdDxpbWcgY2xhc3M9XFxcInBhZ2UtaWNvblxcXCIgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL2NvbnRhY3Qtc3BlZWNoLWJ1YmJsZXMucG5nXFxcIj5cXG5cdFx0XHQ8aDQ+Y29udGFjdDwvaDQ+XFxuXHRcdDwvYT5cXG5cdDwvZGl2PlxcblxcbjwvZGl2PlxcblxcbjxwIHN0eWxlPVxcXCJwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogNjBweDsgcGFkZGluZzogMjBweDsgd2lkdGg6IDEwMCU7IG1hcmdpbjogYXV0bzsgZm9udC1zaXplOiAuODVlbTsgY29sb3I6ICNiYmI7XFxcIj5JJ20gc3RpbGwgd29ya2luZyBvbiB0aGlzIHNpdGUsIHNvIHBsZWFzZSBiZWFyIHdpdGggbWUhPC9wPlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJtYXN0ZXJcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBidWZmZXIgPSBcIiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXdyYXBcXFwiPlxcblx0PGRpdiBjbGFzcz1cXFwibGFuZGluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNlbGxcXFwiPlxcbiAgXHRcdDxkaXYgY2xhc3M9XFxcImxhbmRpbmctY29udGVudFxcXCIgaWQ9XFxcImxhbmRpbmdcXFwiPlxcbiAgICAgICAgXCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW50cm9Db250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pbnRyb0NvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaW50cm9Db250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIlxcbiAgXHRcdDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cdDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudC13cmFwcGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj48L2Rpdj5cXG5cXG4gIFx0PGRpdiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgXFxuICAgICAgPGRpdiBjbGFzcz1cXFwidHJhbnNpdGlvbi1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudCBjb250ZW50LW1haW5cXFwiIGlkPVxcXCJtYWluXFxcIj5cIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5tYWluQ29udGVudCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpbkNvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwibWFpbkNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50IHRyYW5zaXRpb25lclxcXCIgaWQ9XFxcInRyYW5zXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gIFx0PC9kaXY+XFxuXFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wicHJvamVjdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snd2l0aCddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXR0cmlidXRlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcIndpdGhcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lclxcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1yb3dcXFwiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic21hbGwtMTJcXFwiPlxcblx0XHRcdFx0XHQ8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5cIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gxPlxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxuXHRcdFx0XHRcdFx0XFxuXHRcdFx0XHRcdFx0XCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29udGVudCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJjb250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cIjtcbn0sXCI0XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIlxcblwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZXJyb3IgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oNSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDcsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyIHBsYWNlaG9sZGVyLXZpZXdcXFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XFxcInNtYWxsLTEyXFxcIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XHRcdDxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXI7IGNvbG9yOiAjOTk5XFxcIj5FZWshPC9oMj5cXG5cdFx0XHRcdFx0XHQ8cD5UaGVyZSBzZWVtcyB0byBoYXZlIGJlZW4gYW4gZXJyb3IuPC9wPlxcblx0XHRcdFx0XHRcdDxwPk5vdCB0byB3b3JyeSEgWW91IHNob3VsZCBiZSBhYmxlIHRvIHNlZSBteSBwcm9qZWN0cyBvbiBXb3JkcHJlc3MuPC9wPlxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cIjtcbiAgfSxcIjdcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBwbGFjZWhvbGRlci12aWV3XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdFx0PGgyIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmNlbnRlcjsgY29sb3I6ICM5OTlcXFwiPkxvYWRpbmcuLi48L2gyPlxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2PlxcblwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazE7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdHRyaWJ1dGVzIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg0LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyByZXR1cm4gc3RhY2sxOyB9XG4gIGVsc2UgeyByZXR1cm4gJyc7IH1cbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJ1aS9oZWFkZXJcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMucHJldkxpbmsgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnByZXZMaW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInByZXZMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImdvLXByZXZcXFwiIFwiO1xufSxcIjNcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIiBjbGFzcz1cXFwiZ28tcHJldiBoaWRlXFxcIlwiO1xuICB9LFwiNVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gXCIgaHJlZj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5uZXh0TGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwibmV4dExpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiZ28tbmV4dFxcXCIgXCI7XG59LFwiN1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiIGNsYXNzPVxcXCJnby1uZXh0IGhpZGVcXFwiXCI7XG4gIH0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCI8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWZvb3Rlci1jb250ZW50XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImljb24gbWVudVxcXCI+XFxuICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWRvd24gZmEtMnggc2hvdy1jb250ZW50XFxcIj48L2k+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGVudFxcXCI+XFxuICAgIDxhIFwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucHJldkxpbmsgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDMsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdFxcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICAgIFxcbiAgICA8YSBocmVmPVxcXCIjXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uIG1lbnVcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWJhcnMgZmEtMnggc2hvdy1pbnRyb1xcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICBcXG4gICAgPGEgXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uZXh0TGluayA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSg1LCBkYXRhKSxcImludmVyc2VcIjp0aGlzLnByb2dyYW0oNywgZGF0YSksXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1yaWdodFxcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICBcXG48L2Rpdj5cXG48ZGl2PjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG4gcmV0dXJuIHRoaXNbJ0pTVCddO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdhYm91dCcsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdFxuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcdFxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL2Jsb2ctcG9zdHMuanMnKTtcbnZhciBDb2xsZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4vY29sbGVjdGlvbi12aWV3LmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGlvblZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnYmxvZycsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cblx0XHR3aW5kb3cudGVzdCA9IHRoaXM7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XHRcblx0c3RyaW5nVG9SZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSk7XG5cdFx0aWYgKG9wdGlvbnMuZXJyb3IpIHtcblx0XHRcdHJldHVybiB0aGlzLnRlbXBsYXRlKHtlcnJvcjogdHJ1ZX0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSh7YXR0cmlidXRlczogdGhpcy5jb2xsZWN0aW9uLmN1cnJlbnRSZWNvcmQuYXR0cmlidXRlc30pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSk7XG5cblx0XHQvLyB2YXIgdmlldyA9IHRoaXMsXG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0XG5cdFx0aWYgKCF0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG5cblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jyk7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLm5hbWVzcGFjZSk7XG5cdFx0XHR0aGlzLmZldGNoUmVuZGVyKG9wdGlvbnMpO1xuXG5cdFx0fSBlbHNlIHtcbiBcblx0XHRcdGlmIChvcHRpb25zLnNsdWcgJiYgY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbGxlY3Rpb24uc2V0Q3VycmVudFJlY29yZCh7c2x1Zzogb3B0aW9ucy5zbHVnfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB0aGlzLnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnN0cmluZ1RvUmVuZGVyKCkpO1x0XG5cdFx0XHR9XHRcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnLCB7bGluazogdGhpcy5wcmV2Um91dGUoKX0pO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnLCB7bGluazogdGhpcy5uZXh0Um91dGUoKX0pO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0ZmV0Y2hSZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHZhciB2aWV3ID0gdGhpcyxcblx0XHRcdFx0Y29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRpZiAoIWNvbGxlY3Rpb24uc3R1YnMpIHsgLy8gdG8gYmUgc2V0IHRvIHNvbWV0aGluZyBtb3JlIG1lYW5pbmdmdWwgd2hlbiBhbiBhcGkgaXMgYXZhaWxhYmxlXG5cdFx0XHRjb2xsZWN0aW9uLmZldGNoKHtcbiAgXHRcdFx0cmVtb3ZlOiBmYWxzZSxcbiAgXHRcdFx0ZGF0YVR5cGU6IChjb2xsZWN0aW9uLmpzb25wID8gJ2pzb25wJzonanNvbicpLFxuICBcdFx0XHR0aW1lb3V0IDogNTAwMCxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5zbHVnICYmIGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKHtzbHVnOiBvcHRpb25zLnNsdWd9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKHtzbHVnOiBjb2xsZWN0aW9uLmRlZmF1bHRTbHVnKCl9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicsIHtsaW5rOiB2aWV3LnByZXZSb3V0ZSgpfSk7XG5cdFx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnLCB7bGluazogdmlldy5uZXh0Um91dGUoKX0pO1xuXHRcdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHZpZXcubmFtZXNwYWNlICk7XG5cblx0XHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB2aWV3LnN0cmluZ1RvUmVuZGVyKCkgKTtcdFx0XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3RyYW5zaXRpb246cmVuZGVyJywgdmlldy5zdHJpbmdUb1JlbmRlcih7ZXJyb3I6IHRydWV9KSk7XHRcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbGxlY3Rpb24uYWRkU3R1YnMoe3N1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG5cblx0XHRcdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiBjb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb2xsZWN0aW9uLnNldEN1cnJlbnRSZWNvcmQoe3NsdWc6IG9wdGlvbnMuc2x1Z30pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbGxlY3Rpb24uc2V0Q3VycmVudFJlY29yZChjb2xsZWN0aW9uLmZpcnN0KCkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpyZWRpcmVjdCcsIHZpZXcuZGVmYXVsdFJvdXRlKCkpO1xuXG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicsIHtsaW5rOiB2aWV3LnByZXZSb3V0ZSgpfSk7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHZpZXcubmV4dFJvdXRlKCl9KTtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdmlldy5uYW1lc3BhY2UgKTtcblxuXG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd0cmFuc2l0aW9uOnJlbmRlcicsIHZpZXcuc3RyaW5nVG9SZW5kZXIoKSApO1x0XG5cblx0XHRcdH19KTtcblx0XHR9XG5cdH0sXG5cdHNldEN1cnJlbnQ6IGZ1bmN0aW9uKHNsdWcpe1xuXHRcdHRoaXMuY29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKHtzbHVnOnNsdWd9KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRnZXROZXh0TW9kZWw6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbi5nZXROZXh0TW9kZWwoKTtcblx0fSxcblx0Z2V0UHJldk1vZGVsOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb24uZ2V0UHJldk1vZGVsKCk7XG5cdH0sXG5cdG5leHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgbW9kZWwgPSB0aGlzLmNvbGxlY3Rpb24uZ2V0TmV4dE1vZGVsKCk7XG5cdFx0cmV0dXJuIG1vZGVsPyAnIy8nKyB0aGlzLm5hbWVzcGFjZSArJy8nICsgbW9kZWwuZ2V0KCdzbHVnJykgOiBmYWxzZTtcblx0fSxcblx0cHJldlJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2RlbCA9IHRoaXMuY29sbGVjdGlvbi5nZXRQcmV2TW9kZWwoKTtcblx0XHRyZXR1cm4gbW9kZWw/ICcjLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyBtb2RlbC5nZXQoJ3NsdWcnKSA6IGZhbHNlO1xuXHR9LFxuXHRjaGVja1NsdWc6IGZ1bmN0aW9uKHNsdWcpe1xuXHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb24uY2hlY2tTbHVnKHNsdWcpO1xuXHR9LFxuXHRkZWZhdWx0U2x1ZzogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uLmRlZmF1bHRTbHVnKCk7XG5cdH0sXG5cdGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJy8nKyB0aGlzLm5hbWVzcGFjZSArJy8nICsgdGhpcy5kZWZhdWx0U2x1ZygpO1xuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHZhbGlkRW1haWwoc3RyaW5nKSB7XG4gICAgdmFyIHJlID0gL14oW1xcdy1dKyg/OlxcLltcXHctXSspKilAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJC9pO1xuICAgIHJldHVybiByZS50ZXN0KHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0TGFiZWwoZWwpe1xuXHRlbC5jbG9zZXN0KCcuZmllbGQnKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3IoZWwpe1xuXHRlbC5jbG9zZXN0KCcuZmllbGQnKS5hZGRDbGFzcygnZXJyb3InKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdjb250YWN0Jyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5lbWFpbEFkZHJlc3MgPSAnc210X0Bob3RtYWlsLmNvLnVrJztcblxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cblx0XHR0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXHRldmVudHM6IHtcblx0XHQnc3VibWl0IC5jb250YWN0LWZvcm0nIDogJ3N1Ym1pdEZvcm0nLFxuXHRcdCdjbGljayAuc3VibWlzc2lvbi1lcnJvciAuZmEtY2xvc2UnOiAncmVtb3ZlRm9ybUVycm9yJ1xuXHR9LFxuXHR2YWxpZGF0ZUZvcm06IGZ1bmN0aW9uKCl7XG5cdFx0dmFyICRmb3JtID0gdGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpO1xuXG5cdFx0dmFyICRuYW1lID0gJGZvcm0uZmluZCgnI25hbWUnKTtcblx0XHR2YXIgJGVtYWlsID0gJGZvcm0uZmluZCgnI2VtYWlsJyk7XG4vLyAvLyAkc3ViamVjdCA9ICRmb3JtLmZpbmQoJyNzdWJqZWN0JyksXG5cdFx0dmFyICRtZXNzYWdlID0gJGZvcm0uZmluZCgnI21lc3NhZ2UnKTtcblxuXHRcdHZhciBlcnJvcnMgPSBbXTtcblxuXHRcdGlmICgkbWVzc2FnZS52YWwoKS5sZW5ndGggPiA1KSB7XG5cdFx0XHRyZXNldExhYmVsKCRtZXNzYWdlKTtcblx0XHR9IGVsc2UgaWYgKCRtZXNzYWdlLnZhbCgpLmxlbmd0aCkge1xuXHRcdFx0ZXJyb3JzLnB1c2goeyRlbDogJG1lc3NhZ2UsIG1lc3NhZ2U6ICdub3QgbG9uZyBlbm91Z2gnfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVycm9ycy5wdXNoKHskZWw6ICRtZXNzYWdlLCBtZXNzYWdlOiAnbm8gbWVzc2FnZSBmYWlsJ30pO1xuXHRcdH1cblxuXHRcdGlmICh2YWxpZEVtYWlsKCRlbWFpbC52YWwoKSkpIHtcblx0XHRcdHJlc2V0TGFiZWwoJGVtYWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXJyb3JzLnB1c2goeyRlbDogJGVtYWlsfSk7XG5cdFx0fVxuXG5cdFx0aWYgKCRuYW1lLnZhbCgpLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJlc2V0TGFiZWwoJG5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlcnJvcnMucHVzaCh7JGVsOiAkbmFtZX0pO1xuXHRcdH1cblxuXHRcdGlmIChlcnJvcnMubGVuZ3RoKSB7XG5cdFx0XHQkLmVhY2goZXJyb3JzLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRhZGRFcnJvcih0aGlzLiRlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRzdWJtaXRGb3JtOiBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIHZpZXcgPSB0aGlzO1xuXG5cdFx0aWYgKHRoaXMucGVuZGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdHZhciAkZm9ybSA9IHRoaXMuJGVsLmZpbmQoJy5jb250YWN0LWZvcm0nKTtcblx0XHRcblx0XHRpZiAodGhpcy52YWxpZGF0ZUZvcm0oKSkge1xuXG5cdFx0XHQkZm9ybS5hZGRDbGFzcygncGVuZGluZycpO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuXHRcdFx0dmFyIHNlbmREYXRhID0ge1xuXHRcdFx0XHRfc3ViamVjdDogJ3NwZW50YXlsb3IuY29tJyxcblx0XHRcdFx0bWVzc2FnZTogJGZvcm0uZmluZCgnI21lc3NhZ2UnKS52YWwoKSxcblx0XHRcdFx0ZW1haWw6ICRmb3JtLmZpbmQoJyNlbWFpbCcpLnZhbCgpXG5cdFx0XHR9O1xuXG5cdFx0XHQkLmFqYXgoe1xuXHRcdCAgICB1cmw6ICcvL2Zvcm1zcHJlZS5pby9zcGVuX0Bob3RtYWlsLmNvLnVrJywgXG5cdFx0ICAgIG1ldGhvZDogJ1BPU1QnLFxuXHRcdCAgICBkYXRhOiBzZW5kRGF0YSxcblx0XHQgICAgZGF0YVR5cGU6ICdqc29uJyxcblx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdCAgICBcdHZpZXcuZm9ybVN1Y2Nlc3MocmVzcG9uc2UpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnJvcjogZnVuY3Rpb24oKXtcblx0XHQgICAgXHR2aWV3LmZvcm1FcnJvcigpO1xuXHRcdCAgICB9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFxuXHRcdFxuXHR9LFxuXHRmb3JtU3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdHZhciAkZm9ybSA9IHRoaXMuJGVsLmZpbmQoJy5jb250YWN0LWZvcm0nKTtcblx0XHQkZm9ybS5yZW1vdmVDbGFzcygncGVuZGluZycpO1xuXG5cdFx0aWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdCRmb3JtLmFkZENsYXNzKCdkb25lJykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZvcm1FcnJvcigpO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHR9LFxuXHRmb3JtRXJyb3I6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyICRmb3JtID0gdGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpLmFkZENsYXNzKCdlcnJvcicpO1xuXG5cdFx0JGZvcm0ucmVtb3ZlQ2xhc3MoJ3BlbmRpbmcnKTtcblx0XHR0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblx0fSxcblx0cmVtb3ZlRm9ybUVycm9yOiBmdW5jdGlvbigpe1xuXHRcdHRoaXMuJGVsLmZpbmQoJy5jb250YWN0LWZvcm0nKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcblx0fVxufSk7XG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2ludHJvJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5yZW5kZXIob3B0aW9ucyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlKTtcblxuXHR9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy5qcycpO1xudmFyIGhlYWRlclZpZXcgPSByZXF1aXJlKCcuL3VpL2hlYWRlci5qcycpO1xudmFyIHRyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9wYWdlLXRyYW5zaXRpb25zLmpzJyk7XG52YXIgc2Nyb2xsVHJhY2tlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvc2Nyb2xsLXRyYWNrZXIuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJ2h0bWwnLFxuXHRoZWFkZXI6ICcuaGVhZGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oKXtcblxuXHRcdHZhciBzdGF0ZSA9ICh3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPj0gMSkgPyAnY29udGVudCcgOiAnaW50cm8nO1xuXHRcdHRoaXMucmVuZGVyKHtcblx0XHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRcdGludHJvQ29udGVudDogdGVtcGxhdGVzLmludHJvKClcblx0XHR9KTtcblxuXHRcdHRoaXMudHJhbnNpdGlvbnMgPSBuZXcgdHJhbnNpdGlvbnMoe1xuXHRcdFx0Y29udGFpbmVyOiAnLnBhZ2Utd3JhcCAubWFpbiAudHJhbnNpdGlvbi1jb250YWluZXInLFxuXHRcdFx0bWFpbjogJy5jb250ZW50LW1haW4nLFxuXHRcdFx0dHJhbnNpdGlvbmVyOiAnLnRyYW5zaXRpb25lcidcblx0XHR9KTtcblxuXHRcdC8vIHZhciB2aWV3ID0gdGhpcztcblx0XHQkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYgKGUud2hpY2ggPT09IDM5KSB7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOm5leHRDb250ZW50Jyk7XG5cdFx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT09IDM3KSB7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnByZXZDb250ZW50Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKHRoaXMuaGVhZGVyKTtcblx0XHR0aGlzLmhlYWRlclZpZXcgPSBuZXcgaGVhZGVyVmlldyh7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnZ29Ub0N1cnJlbnRDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLXByZXYnOiAncHJldkNvbnRlbnQnLFxuXHRcdCdjbGljayAuZ28tbmV4dCc6ICduZXh0Q29udGVudCdcblx0XHQvLyAnY2xpY2sgLnNob3ctaW50cm8nOiAnc2hvd0ludHJvJ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdCQoJ2JvZHknKS5odG1sKHRlbXBsYXRlcy5tYXN0ZXIob3B0aW9ucykpO1xuXG4gIFx0c2Nyb2xsVHJhY2tlci5pbml0aWFsaXplKCk7XG4gIH0sXG4gIHNob3dDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnaW50cm8nKTtcblx0fSxcblx0c2hvd0ludHJvOiBmdW5jdGlvbigpIHtcblx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2ludHJvJykucmVtb3ZlQ2xhc3MoJ2NvbnRlbnQnKTtcblx0fSxcblx0c2V0TmFtZXNwYWNlOiBmdW5jdGlvbihuYW1lc3BhY2UpIHtcdFxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gJC50cmltKFxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24oYykgeyBcblx0XHRcdFx0cmV0dXJuIGMubGFzdEluZGV4T2YoJ3BhZ2UtJywgMCkgIT09IDA7IFxuXHRcdFx0fSkuam9pbignICcpICsgJyBwYWdlLScgK25hbWVzcGFjZSApO1xuXHR9LFxuXHRzd2lwZXJVcDogZnVuY3Rpb24oKXtcblx0XHRpZiAoIXRoaXMuc3dpcGVyVXBSZWFkeSgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRoaXMuc2hvd0ludHJvKCk7XG5cdH0sXG5cdHN3aXBlckRvd246IGZ1bmN0aW9uKCl7XG5cdFx0aWYgKCF0aGlzLnN3aXBlckRvd25SZWFkeSgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRoaXMuc2hvd0NvbnRlbnQoKTtcblx0XHR0aGlzLmdvVG9DdXJyZW50Q29udGVudCgpO1xuXHR9LFxuXHRzd2lwZXJMZWZ0OiBmdW5jdGlvbigpe1xuXHRcdGlmICghdGhpcy5zd2lwZXJMZWZ0UmVhZHkoKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR0aGlzLm5leHRDb250ZW50KCk7XG5cdH0sXG5cdHN3aXBlclJpZ2h0OiBmdW5jdGlvbigpe1xuXHRcdGlmICghdGhpcy5zd2lwZXJSaWdodFJlYWR5KCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dGhpcy5wcmV2Q29udGVudCgpO1xuXHR9LFxuXHRzd2lwZXJVcFJlYWR5OiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiBmYWxzZTtcblx0XHQvLyByZXR1cm4gJCgnYm9keS5jb250ZW50IC5jb250ZW50LW1haW4nKS5zY3JvbGxUb3AoKSA8PSAwO1xuXHR9LFxuXHRzd2lwZXJEb3duUmVhZHk6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuICQoJ2JvZHkuaW50cm8nKS5sZW5ndGggPj0gMTtcblx0fSxcblx0c3dpcGVyTGVmdFJlYWR5OiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRzd2lwZXJSaWdodFJlYWR5OiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRuZXh0Q29udGVudDogZnVuY3Rpb24oZSl7XG5cdFx0aWYgKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG5cdFx0aWYgKHRoaXMudHJhbnNpdGlvbnMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlO31cblx0XHR0aGlzLnRyYW5zaXRpb25zLmRpcmVjdGlvbiA9ICduZXh0Jztcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOm5leHRDb250ZW50Jyk7XG5cdH0sXG5cdHByZXZDb250ZW50OiBmdW5jdGlvbihlKXtcblx0XHRpZiAoZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cblx0XHRpZiAodGhpcy50cmFuc2l0aW9ucy5hbmltYXRpbmcpIHtyZXR1cm4gZmFsc2U7fVxuXHRcdHRoaXMudHJhbnNpdGlvbnMuZGlyZWN0aW9uID0gJ3ByZXYnO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6cHJldkNvbnRlbnQnKTtcblx0fSxcbiAgZ29Ub0N1cnJlbnRDb250ZW50OiBmdW5jdGlvbigpe1xuICBcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6Z29Ub0N1cnJlbnRDb250ZW50Jyk7XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblxuXHRcdHZhciB0cmFuc2l0aW9ucyA9IHRoaXMudHJhbnNpdGlvbnM7XG5cblx0XHRmdW5jdGlvbiByZW5kZXIoY29udGVudCl7dHJhbnNpdGlvbnMucmVuZGVyKGNvbnRlbnQpO31cblxuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6c2hvd0NvbnRlbnQnLCB0aGlzLnNob3dDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnNob3dJbnRybycsIHRoaXMuc2hvd0ludHJvKTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5zZXROYW1lc3BhY2UpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncGFnZTpuZXh0Q29udGVudCcsIHRoaXMubmV4dENvbnRlbnQpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncGFnZTpwcmV2Q29udGVudCcsIHRoaXMucHJldkNvbnRlbnQpO1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdzd2lwZXI6dXAnLCB0aGlzLnN3aXBlclVwKTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3N3aXBlcjpkb3duJywgdGhpcy5zd2lwZXJEb3duKTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3N3aXBlcjpsZWZ0JywgdGhpcy5zd2lwZXJMZWZ0KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3N3aXBlcjpyaWdodCcsIHRoaXMuc3dpcGVyUmlnaHQpO1xuXG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3RyYW5zaXRpb246cmVuZGVyJywgcmVuZGVyKTtcblxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDb2xsZWN0aW9uID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbnMvcHJvamVjdHMuanMnKTtcbnZhciBDb2xsZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4vY29sbGVjdGlvbi12aWV3LmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGlvblZpZXcuZXh0ZW5kKHtcdFxuXHRuYW1lc3BhY2U6ICdwcm9qZWN0cycsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGVsOiAnLmhlYWRlcicsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHRcdHRoaXMucmVuZGVyKHt9KTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cdH0sXG5cdGV2ZW50czoge1xuXHRcdCdjbGljayAuc2hvdy1jb250ZW50JzogJ3Nob3dDb250ZW50Jyxcblx0XHQnY2xpY2sgLnNob3ctaW50cm8nOiAnc2hvd0ludHJvJ1xuICB9LFxuICBzaG93Q29udGVudDogZnVuY3Rpb24oKXtcbiAgXHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcbiAgfSxcbiAgc2hvd0ludHJvOiBmdW5jdGlvbigpe1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93SW50cm8nKTtcbiAgfSxcbiAgdXBkYXRlVWlQcmV2OiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXHR2YXIgcHJldiA9ICcuZ28tcHJldic7XG4gIFx0dmFyICRwcmV2ID0gdGhpcy4kZWwuZmluZChwcmV2KTtcbiAgXHRpZiAob3B0aW9ucy5saW5rKSB7XG4gIFx0XHQkcHJldi5yZW1vdmVDbGFzcygnaGlkZScpLmF0dHIoJ2hyZWYnLCBvcHRpb25zLmxpbmspO1xuICBcdH0gZWxzZSB7XG4gIFx0XHQkcHJldi5hZGRDbGFzcygnaGlkZScpLmF0dHIoJ2hyZWYnLCAnIycpO1xuICBcdH1cbiAgfSxcbiAgdXBkYXRlVWlOZXh0OiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXHR2YXIgbmV4dCA9ICcuZ28tbmV4dCc7XG4gIFx0dmFyICRuZXh0ID0gdGhpcy4kZWwuZmluZChuZXh0KTtcbiAgXHRpZiAob3B0aW9ucy5saW5rKSB7XG4gIFx0XHQkbmV4dC5yZW1vdmVDbGFzcygnaGlkZScpLmF0dHIoJ2hyZWYnLCBvcHRpb25zLmxpbmspO1xuICBcdH0gZWxzZSB7XG4gIFx0XHQkbmV4dC5hZGRDbGFzcygnaGlkZScpLmF0dHIoJ2hyZWYnLCAnIycpO1xuICBcdH1cbiAgfSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6dXBkYXRlUHJldicsIHRoaXMudXBkYXRlVWlQcmV2KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnVwZGF0ZU5leHQnLCB0aGlzLnVwZGF0ZVVpTmV4dCk7XG5cdH1cbn0pOyJdfQ==
