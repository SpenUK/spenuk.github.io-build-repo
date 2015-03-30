(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var router = require('./router.js');
var templates = require('./templates.js');


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
},{"./router.js":8,"./templates.js":9,"./views/about.js":10,"./views/blog-post.js":11,"./views/contact.js":12,"./views/intro.js":13,"./views/master.js":14,"./views/project.js":15}],2:[function(require,module,exports){
module.exports = {"found":3,"posts":[{"ID":15,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-07T11:09:54+00:00","modified":"2015-03-29T13:27:20+00:00","title":"Third Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/07\/third-post\/","short_URL":"http:\/\/wp.me\/p50g34-f","content":"<h2>Lorizzle<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p>Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. In hizzle pizzle dope dictumst. Shizzlin dizzle dapibizzle. Curabitizzle tellizzle crazy, pretizzle things, mattis izzle, fizzle vitae, nunc. We gonna chung suscipit. Integer yo mamma dope ghetto hizzle.<\/p>\n<h2>shut the shizzle<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p>Curabitizzle shut the shizzle up pimpin&#8217; gangsta nisi break it down mollizzle. Suspendisse potenti. Fo shizzle go to hizzle. I&#8217;m in the shizzle neque. Mofo orci. Crizzle mauris mauris, mofo funky fresh, feugiat sit amizzle, boofron izzle, pede. Pellentesque shizzle my nizzle crocodizzle. Vestibulizzle gangster mi, volutpizzle izzle, sagittis sed, fo shizzle sempizzle, sizzle. Check out this izzle ipsizzle. That&#8217;s the shizzle black felizzle mofo orci. Nizzle pizzle go to hizzle tellivizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle sodalizzle ornare. Mammasay mammasa mamma oo sa venenatizzle fizzle yo lacizzle. Yo things. Suspendisse sure placerat lacus. Sizzle dang ante. Nunc go to hizzle, leo eu dapibus hendrerizzle, shiz felizzle cool sizzle, break it down crazy magna that&#8217;s the shizzle luctus pede. Nam a mammasay mammasa mamma oo sa. Class crackalackin taciti crunk ad litora torquent bizzle black we gonna chung, away sheezy hymenaeos. Break yo neck, yall interdum, fizzle nizzle elementizzle nonummy, ass orci viverra leo, boofron mammasay mammasa mamma oo sa risizzle arcu my shizz sizzle.<\/p>\n","excerpt":"<p>Lorizzle &nbsp; Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. [&hellip;]<\/p>\n","slug":"third-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=15","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":0},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"e8c40e7b0109e4fa1935c694d8ec0c2f","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{},"categories":{"Uncategorized":{"ID":1,"name":"Uncategorized","slug":"uncategorized","description":"","post_count":2,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{},"attachment_count":0,"metadata":[{"id":"57","key":"geo_public","value":"0"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}},{"ID":7,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-04T14:17:38+00:00","modified":"2015-03-29T13:25:43+00:00","title":"Second Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/04\/second-post\/","short_URL":"http:\/\/wp.me\/p50g34-7","content":"<h2>Lorem ipsum<\/h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae egestas posuere, neque elit ultricies dui, vel mattis nibh enim ac lorem. Maecenas molestie nisl sit amet velit dictum lobortis. Aliquam erat volutpat.<\/p>\n<p><img class=\"aligncenter size-medium wp-image-8\" src=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg?w=300&#038;h=249\" alt=\"jaba\" width=\"300\" height=\"249\" \/><\/p>\n<h2>Vivamus sagittis<\/h2>\n<p>Vivamus sagittis, diam in vehicula lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien vitae mi elementum laoreet. Suspendisse potenti. Aliquam erat nisl, aliquam pretium libero aliquet, sagittis eleifend nunc. In hac habitasse platea dictumst. Integer turpis augue, tincidunt dignissim mauris id, rhoncus dapibus purus. Maecenas et enim odio. Nullam massa metus, varius quis vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed, gravida leo. In dictum mauris vel augue varius, ac ullamcorper nisl ornare. In eu posuere velit, ac fermentum arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sed malesuada leo, at interdum elit.<\/p>\n","excerpt":"<p>&nbsp; Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat est. Morbi [&hellip;]<\/p>\n","slug":"second-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=7","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":0},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"38a4f8693cb2d03fbebb35517b30aa66","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{},"categories":{"Category1":{"ID":28527,"name":"Category1","slug":"category1","description":"","post_count":1,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:category1","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:category1\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{"8":{"ID":8,"URL":"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg","guid":"http:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg","date":"2014-09-04T14:16:41+00:00","post_ID":7,"file":"jaba.jpg","mime_type":"image\/jpeg","extension":"jpg","title":"jaba","caption":"","description":"","alt":"","thumbnails":{},"height":415,"width":500,"exif":{"aperture":0,"credit":"","camera":"","caption":"","created_timestamp":0,"copyright":"","focal_length":0,"iso":0,"shutter_speed":0,"title":"","orientation":0},"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/8","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/8\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","parent":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7"}}}},"attachment_count":"1","metadata":[{"id":"31","key":"geo_public","value":"0"},{"id":"21","key":"_wpas_mess","value":"undefined"},{"id":"15","key":"_wpas_skip_facebook","value":"1"},{"id":"16","key":"_wpas_skip_google_plus","value":"1"},{"id":"18","key":"_wpas_skip_linkedin","value":"1"},{"id":"20","key":"_wpas_skip_path","value":"1"},{"id":"19","key":"_wpas_skip_tumblr","value":"1"},{"id":"17","key":"_wpas_skip_twitter","value":"1"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}},{"ID":3,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-01T11:45:09+00:00","modified":"2015-03-29T13:28:21+00:00","title":"First Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/01\/first-post\/","short_URL":"http:\/\/wp.me\/p50g34-3","content":"<h2 style=\"text-align:left;\">Hipster Ipsum<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p style=\"text-align:left;\">Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel put a bird on it. Drinking vinegar food truck McSweeney&#8217;s roof party, salvia +1 tattooed DIY disrupt Helvetica. Narwhal kale chips tousled beard distillery Odd Future, PBR&amp;B 90&#8217;s selvage cardigan church-key scenester. Paleo sustainable actually Carles cray cliche dreamcatcher.<\/p>\n<p><a href=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg\"><img class=\"aligncenter size-medium wp-image-4\" src=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg?w=300&#038;h=219\" alt=\"subo\" width=\"300\" height=\"219\" \/><\/a><\/p>\n<p>Pitchfork actually readymade messenger bag, craft beer Pinterest scenester Thundercats sartorial keffiyeh hella twee organic Brooklyn. Shoreditch Thundercats art party sartorial tattooed flexitarian, actually direct trade PBR&amp;B before they sold out Etsy Vice. Selfies High Life roof party trust fund, swag shabby chic Godard freegan fap authentic asymmetrical. Retro hashtag Thundercats selfies hella direct trade. IPhone swag next level, gastropub chambray retro Etsy squid kitsch. Viral locavore Brooklyn plaid Carles. Church-key hella narwhal, YOLO ethnic scenester biodiesel Odd Future.<\/p>\n","excerpt":"<p>Hipster Ipsum &nbsp; Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel [&hellip;]<\/p>\n","slug":"first-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=3","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":1},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"54e4d86f54daa326a38050d0c4fe364a","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{"kale chips":{"ID":6017001,"name":"kale chips","slug":"kale-chips","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:kale-chips","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:kale-chips\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}},"Odd Future":{"ID":16642545,"name":"Odd Future","slug":"odd-future","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:odd-future","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:odd-future\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}},"YOLO":{"ID":711100,"name":"YOLO","slug":"yolo","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:yolo","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:yolo\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"categories":{"Uncategorized":{"ID":1,"name":"Uncategorized","slug":"uncategorized","description":"","post_count":2,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{"4":{"ID":4,"URL":"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg","guid":"http:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg","date":"2014-09-01T11:42:43+00:00","post_ID":3,"file":"subo.jpg","mime_type":"image\/jpeg","extension":"jpg","title":"subo","caption":"","description":"","alt":"","thumbnails":{},"height":329,"width":450,"exif":{"aperture":0,"credit":"","camera":"","caption":"","created_timestamp":0,"copyright":"","focal_length":0,"iso":0,"shutter_speed":0,"title":"","orientation":0},"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/4","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/4\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","parent":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3"}}}},"attachment_count":"1","metadata":[{"id":"8","key":"geo_public","value":"0"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}}]};
},{}],3:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.Collection.extend({
	
	// model: ArticleModel,
	// urlParams: {},
	position: 0,
	totalRecords: 0,
	isLoading: false,
  url: function(){
  	return 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts';
  },
  parse: function(response){ //, xhr
  	this.totalRecords = response.found;
    return response.posts;
  },
  getCurrentRecord: function(){
    return this.at(this.position);
  },
  getLatest: function(){
    return this.at(0);
  }
});
},{}],4:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.Collection.extend({
	
	// model: ArticleModel,
	// urlParams: {},
	position: 0,
	totalRecords: 0,
	isLoading: false,
  url: function(){
  	return 'http://public-api.wordpress.com/rest/v1/sites/ijustwanttotesttheapi.wordpress.com/posts';
  },
  parse: function(response){ //, xhr
  	this.totalRecords = response.found;
    return response.posts;
  },
  getCurrentRecord: function(){
    return this.at(this.position);
  },
  getLatest: function(){
    return this.at(0);
  }
});
},{}],5:[function(require,module,exports){
'use strict';

var app = require('./app.js');

// window.Backbone.history.navigate = require('./modules/backbone-overloaded-navigate.js');

$(document).on('ready', function(){
	app.initialize();
});
},{"./app.js":1}],6:[function(require,module,exports){
'use strict';

var afterTrans = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';


function transitions (options) {
	/*jshint validthis:true */
	this.container = options.container;
	this.content = options.content;
	this.transitionClass = options.transitionClass;
	this.animating = false;

	this.render = function(content){
		return this[this.direction === 'prev' ? 'prev' : 'next'](content);
	};

	this.next = function(content){
		if (this.animating) {return false;}
		var $container = $(this.container);
		var $target = $container.find(this.transitionClass);
		var this_ = this;

		$target.html(content);

		this.animating = true;
		window.setTimeout(function(){
			$container.addClass('animating-next').removeClass('animating-prev').one(afterTrans, function(){
				$container.removeClass('animating-next');
				this_.switchElements();
				this_.animating = false;
			});
		},0);
	};

	this.prev = function(content){
		if (this.animating) {return false; }
		var $container = $(this.container);
		var $target = $container.find(this.transitionClass);
		var this_ = this;

		$target.html(content);

		this.animating = true;

		window.setTimeout(function(){
			$container.addClass('animating-prev').removeClass('animating-next').one(afterTrans, function(){
				$container.removeClass('animating-prev');
				this_.switchElements();
				this_.animating = false;
			});
		},0);
	};

	this.switchElements = function(){
		var content = $(this.container).find(this.content);

		content.toggleClass(this.transitionClass.replace('.',''));

		return this;
	};


	return this;	
}

module.exports = transitions;
},{}],7:[function(require,module,exports){
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
		content: '<img src="assets/images/projects/harrypotty.png" style="width:100%;"><p>My dad is a bit of a clown, no really! He works as a children\'s entertainer so while I was getting started with learning PHP and JS I built a very basic website for him.</p><p>The website served only one purpose which was to provide a contact form for potential customers wanting to get in touch.<br>The code was pretty terrible... very basic PHP to serve up the site and send the form details with jQuery to validate on teh frontend.</p>'
	},{
		ID: 3,
		title: 'The Sauce',
		slug: 'the-sauce',
		stack: {
			js: [''],
			php: ['']
		},
		content: '<img src="assets/images/projects/sauce.png" style="width:100%;"><p>The reason I got started with learning to code was to set up an ecommerce site for \'The Sauce\', a brand that I was hoping to set up.<br>I had started creating designs for teeshirts and sweatshirts etc., bought a load of printing equipment and inks and needed to set up a channel a channel to sell the products that I would be creating.</p><p>Although there is certainly nothing groundbraking in this project I had set myself a few challenges that turned out to be quite tough at the time and helped me understand more about PHP, JS and coding in general.</p><h2>Product Listing</h2><hr><p>Rather than opt for a straight up list of product thumbnails I wanted to have sections that featured a number of thumbnails with a \'product focus\' panel that would show more detail of whichever product the user was currently hovering over.<br>Each of these panels would have an alternating layout in order to keep some balance down the page.<br>This was where I learned looping in PHP and was my first real challenge with javascript (Although my solution was terrible, crazy data attributes everwhere!)</p><h2>Product Lightbox</h2><hr><p>I didn\'t want to have the user leave the product listing page eahc time they wanted to view a product so I attempted to build out a light-box.<br>Although I did get this to work, the solution, again, lacked elegance. rather than performing an AJAX call to populate the lightbox, or render a template with a few pieces of product data, I relyed on the data attributes that I had rendered out on each thumbnail div.<br>Utterly terrible but very educational!</p>'
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
	}

];
},{}],8:[function(require,module,exports){
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
		this.listenTo(window.Backbone, 'router:nextContent', this.goToNextContent);
		this.listenTo(window.Backbone, 'router:prevContent', this.goToPrevContent);

		this.currentContentRoute = this.defaultContentRoute();
		
		this.on('route:root' ,function(){

  		new context.views.intro({
  			model: {},
  			template: context.templates.intro
  		});
  		$('body').addClass('intro');
  		
		});

		this.on('route:blog' ,function(slug){

			// var options = (arguments[1] || {});

			if (!context.views.blog.initialized) {
				context.views.blog = new context.views.blog({
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates['blog-post']
	  		});
			}

			var transition = (this.currentContentView === context.views.blog);

			if (!slug) {
				slug = context.views.blog.defaultSlug();
				this.navigate(context.views.blog.defaultRoute());
  			context.views.blog.render({slug: slug});
  		} else {
  			if (context.views.blog.checkSlug(slug)) {
  				context.views.blog.render({slug: slug, transition: transition});
  			} else {
  				context.views.blog.render({transition: transition});
  			}
  		}

			this.currentContentRoute = window.Backbone.history.fragment;
			this.currentContentView = context.views.blog;
			
		});

		this.on('route:projects' ,function(slug){

			if (!context.views.projects.initialized) {
				context.views.projects = new context.views.projects({
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates.project
	  		});
			}

			var transition = (this.currentContentView === context.views.projects);

			if (!slug) {

				slug = context.views.projects.defaultSlug();
				this.navigate(context.views.projects.defaultRoute());
  			context.views.projects.render({slug: slug});
  		} else {
  			if (context.views.projects.checkSlug(slug)) {
  				context.views.projects.render({slug: slug, transition: transition});
  			} else {
  				context.views.projects.render({transition: transition});
  			}
  		}

  		this.currentContentRoute = window.Backbone.history.fragment;
  		this.currentContentView = context.views.projects;
  		
		});

		this.on('route:contact' ,function(){
			if (!context.views.contact.initialized) {
				context.views.contact = new context.views.contact({
	  			model: {},
	  			el: context.mainPanel,
	  			template: context.templates.contact
	  		});
			}

  		context.views.contact.render();
  		this.currentContentRoute = window.Backbone.history.fragment;
  		this.currentContentView = context.views.contact;
  		
		});

		this.on('route:about' ,function(){
			if (!context.views.about.initialized) {
				context.views.about = new context.views.about({
	  			model: {},
	  			el: context.mainPanel,
	  			template: context.templates.about
	  		});
			}

  		context.views.about.render();
  		this.currentContentRoute = window.Backbone.history.fragment;
  		this.currentContentView = context.views.about;
  		
		});

		this.on('route:defaultRoute', function(){
		});

		window.Backbone.history.start();

	},
	goToCurrentContent: function () {
		this.navigate(this.currentContentRoute);
	},
	goToPrevContent: function () {
		console.log('goToPrevContent');
		if (!_.isFunction(this.currentContentView.getPrevModel)) { return false; }
		// var route = this.currentContentView.namespace;
		var route = this.currentContentView.prevRoute();
		console.log('route', route);
		// var slug = this.currentContentView.getPrevModel().get('slug');
		// this.trigger('route:' + route, slug, {transition: 'prev'});
		this.navigate(route);

		// return {slug: slug, route: 'route:'+ route, v: this.currentContentView};
	},
	goToNextContent: function () {
		if (!_.isFunction(this.currentContentView.getNextModel)) { return false; }
		// var route = this.currentContentView.namespace;
		var route = this.currentContentView.nextRoute();
		// var slug = this.currentContentView.getNextModel().get('slug');
		// this.trigger('route:' + route, slug, {transition: 'next'});
		// console.log(route);
		this.navigate(route);

		// return {slug: slug, route: 'route:'+ route, v: this.currentContentView};
	},
	defaultContentRoute: function () {
		return '#/about';
	},
	redirect: function(route){
		this.navigate(route);
	}

});

module.exports = AppRouter;
},{}],9:[function(require,module,exports){
var exports = (function () { 

 var Handlebars = window.Handlebars; 

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	<h2>about</h2>\n</div>";
  },"useData":true});

this["JST"]["blog-post"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"grid-container\">\n	\n	<h2 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n	<div class=\"grid-row\">\n		<div class=\"small-12\">\n			<div class=\"panel\">\n				\n				";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n		</div>\n	</div>\n	\n</div>";
},"useData":true});

this["JST"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	<h2>contact</h2>\n</div>";
  },"useData":true});

this["JST"]["intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<h1>Hi! I'm Spen Taylor</h1>\n\n<p>Here you can find out more <a href=\"#/about\" class=\"about\">about</a> me,<br> read my <a href=\"#/blog\" class=\"blog\">blog posts</a><br> or check out some of my <a href=\"#/projects\" class=\"projects\">projects</a>.<br> Oh and feel free to <a href=\"#/contact\" class=\"contact\">get in touch!</a>\n</p>";
  },"useData":true});

this["JST"]["master"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"page-wrap "
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"landing\">\n    <div class=\"cell\">\n  		<div class=\"landing-content\" id=\"landing\">\n        ";
  stack1 = ((helper = (helper = helpers.introContent || (depth0 != null ? depth0.introContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"introContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  		</div>\n    </div>\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\">\n\n    </div>    	 \n  	<div class=\"main\">\n      <div class=\"content\" id=\"main\">";
  stack1 = ((helper = (helper = helpers.mainContent || (depth0 != null ? depth0.mainContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n\n      <div class=\"content transitioner\"></div>\n  	</div>\n\n  </div>\n</div>";
},"useData":true});

this["JST"]["project"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"grid-container\">\n	\n	<h2 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n	<ul></ul>\n	<div class=\"grid-row\">\n		<div class=\"small-12\">\n			<div class=\"panel\">\n				\n				";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n		</div>\n	</div>\n	\n</div>";
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
},{}],10:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'about',
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
	},
	render: function(options){

		console.log('render about');

		
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
},{}],11:[function(require,module,exports){
'use strict';

var articleStubs = require('../blog-post-stubs.js');
var ArticleCollection = require('../collections/blog-posts.js');

module.exports = window.Backbone.View.extend({
	namespace: 'blog',
	initialize: function(options){
		var collection = this.collection = new ArticleCollection();
		// collection = collection;
		this.initialized = true;

		if (false) {
			collection.fetch({
  			remove: false,
				success: function(){
					window.Backbone.trigger('ui:stopLoadingIndicators');
				},
				error: function(){
					window.Backbone.trigger('ui:stopLoadingIndicators');
				}
			});
		} else {
			this.addStubs();
		}

		window.blogC = collection;

		console.log({collection: collection});
		
		this.template = options.template;


		if (!this.checkSlug(options.slug)) {
			var latest = collection.first();

			this.currentRecord = latest;
			this.position = 0;
		} else {

			this.currentRecord = collection.where({slug: options.slug})[0];
			this.position = collection.indexOf(this.currentRecord);			
		}

		return this;
	},
	stringToRender: function(){
		return this.template(this.currentRecord.attributes);
	},
	render: function(options){
		if (options.slug && this.collection.where({slug: options.slug})) {
			this.currentRecord = this.collection.where({slug: options.slug})[0];
			this.position = this.collection.indexOf(this.currentRecord);
		}
	
		window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
		window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});
		if (options.transition) {
			window.Backbone.trigger('transition:render', this.stringToRender() );	
		} else {
			this.$el.html(this.stringToRender());	
		}
		window.Backbone.trigger('ui:showContent');
		window.Backbone.trigger('page:setNamespace', this.namespace );	

		
		return this;
	},
	setListeners: function(){
		// 
	},
	addStubs: function(){
		var collection = this.collection;
		var i,response = articleStubs;
		for (i = response.posts.length - 1; i >= 0; i--) {
			var record = response.posts[i];
			if (!collection.where({ID: record.ID}).length) {
				collection.add(record);
			}
		}
		return this;
	},
	getNextModel: function(){
		var collection = this.collection;
		return collection.at((this.position +1 > collection.length -1)?  false : this.position + 1);
	},
	getPrevModel: function(){
		var collection = this.collection;
		return collection.at((this.position -1 < 0) ? false : this.position - 1);
	},
	nextRoute: function(){
		var model = this.getNextModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	prevRoute: function(){
		var model = this.getPrevModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	checkSlug: function(slug){
		return (this.collection.where({slug: slug}).length >= 1);
	},
	defaultSlug: function(){
		return this.currentRecord ? this.currentRecord.get('slug') : this.collection.first().get('slug');
	},
	defaultRoute: function(){
		return '/blog/' + this.defaultSlug();
	}
});



},{"../blog-post-stubs.js":2,"../collections/blog-posts.js":3}],12:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'contact',
	initialize: function(options){
		this.template = options.template;
		this.initialized = true;
	},
	render: function(options){
		this.$el.html(this.template(options));
		window.Backbone.trigger('ui:showContent');

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');
		window.Backbone.trigger('page:setNamespace', this.namespace );

		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],13:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'intro',
	initialize: function(options){
		options = options || {};
		this.template = options.template;
		this.render(options);
	},
	render: function(options){
		options = options;
		console.log('rendering intro');
		this.$el.html(this.template());
		window.Backbone.trigger('page:setNamespace', this.namespace);

	},
	setListeners: function(){
		// 
	}
});
},{}],14:[function(require,module,exports){
'use strict';

var templates = require('../templates.js');
var headerView = require('./ui/header.js');
var transitions = require('../modules/page-transitions.js');

module.exports = window.Backbone.View.extend({
	el: 'html',
	contentEl: '.main .content',
	transitionEl: '.main .transition-content',
	header: '.header',
	initialize: function(){

		var state = (window.location.hash.length >= 1) ? 'content' : 'intro';
		this.render({
			state: state,
			introContent: templates.intro()
		});

		this.transitions = new transitions({
			container: '.page-wrap .main',
			content: '.content',
			transitionClass: '.transitioner'
		});

		// transitions.initialize({
		// 	el: '.page-wrap .main',
		// 	main: '.content',
		// 	transitioner: '.transition-content'
		// });

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
	nextContent: function(e){
		e.preventDefault();
		this.transitions.direction = 'next';
		window.Backbone.trigger('router:nextContent');
	},
	prevContent: function(e){
		e.preventDefault();
		this.transitions.direction = 'prev';
		window.Backbone.trigger('router:prevContent');
	},
  goToCurrentContent: function(){
  	window.Backbone.trigger('router:goToCurrentContent');
  },
	setListeners: function(){
		var this_ = this;
		$(window).on('keypress', function(e){
			if (e.keyCode === 119) {
				this_.transitions.next();
			} else if (e.keyCode === 113) {
				this_.transitions.prev();	
			}
		});

		var transitions = this.transitions;

		function render(content){transitions.render(content);}

		this.listenTo(window.Backbone, 'ui:showContent', this.showContent);
		this.listenTo(window.Backbone, 'ui:showIntro', this.showIntro);
		this.listenTo(window.Backbone, 'page:setNamespace', this.setNamespace);

		this.listenTo(window.Backbone, 'transition:render', render);

	}
});
},{"../modules/page-transitions.js":6,"../templates.js":9,"./ui/header.js":16}],15:[function(require,module,exports){
'use strict';

var projectStubs = require('../projects-stubs.js');
var ProjectCollection = require('../collections/projects.js');

module.exports = window.Backbone.View.extend({	
	namespace: 'projects',
	initialize: function(options){
		var collection = this.collection = new ProjectCollection();
		this.initialized = true;

		this.addStubs();
		this.template = options.template;


		if (!this.checkSlug(options.slug)) {
			var latest = collection.first();

			this.currentRecord = latest;
			this.position = 0;
		} else {

			this.currentRecord = collection.where({slug: options.slug})[0];
			this.position = collection.indexOf(this.currentRecord);			
		}

		return this;
	},
	stringToRender: function(){
		return this.template(this.currentRecord.attributes);
	},
	render: function(options){

		if (options.slug && this.collection.where({slug: options.slug})) {
			this.currentRecord = this.collection.where({slug: options.slug})[0];
			this.position = this.collection.indexOf(this.currentRecord);
		}

		window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
		window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});

		if (options.transition) {
			window.Backbone.trigger('transition:render', this.stringToRender() );	
		} else {
			this.$el.html(this.stringToRender());	
		}

		window.Backbone.trigger('ui:showContent');
		window.Backbone.trigger('page:setNamespace', this.namespace );
		return this;
	},
	setListeners: function(){
		// 
	},
	addStubs: function(){
		var collection = this.collection;
		var i,response = projectStubs;
		for (i = response.length - 1; i >= 0; i--) {
			var record = response[i];
			if (!collection.where({ID: record.ID}).length) {
				collection.add(record);
			}
		}

		return this;
	},
	getNextModel: function(){
		var collection = this.collection;
		return collection.at((this.position +1 > collection.length -1)?  false : this.position + 1);
	},
	getPrevModel: function(){
		var collection = this.collection;
		return collection.at((this.position -1 < 0) ? false : this.position - 1);
	},
	nextRoute: function(){
		var model = this.getNextModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	prevRoute: function(){
		var model = this.getPrevModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	checkSlug: function(slug){
		return (this.collection.where({slug: slug}).length >= 1);
	},
	defaultSlug: function(){
		return this.currentRecord ? this.currentRecord.get('slug') : this.collection.first().get('slug');
	},
	defaultRoute: function(){
		return '/projects/' + this.defaultSlug();
	}
});
},{"../collections/projects.js":4,"../projects-stubs.js":7}],16:[function(require,module,exports){
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

    // console.log('header rendered');
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
},{}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL2NvbGxlY3Rpb25zL3Byb2plY3RzLmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvbW9kdWxlcy9wYWdlLXRyYW5zaXRpb25zLmpzIiwiYXBwL2pzL3Byb2plY3RzLXN0dWJzLmpzIiwiYXBwL2pzL3JvdXRlci5qcyIsImFwcC9qcy90ZW1wbGF0ZXMuanMiLCJhcHAvanMvdmlld3MvYWJvdXQuanMiLCJhcHAvanMvdmlld3MvYmxvZy1wb3N0LmpzIiwiYXBwL2pzL3ZpZXdzL2NvbnRhY3QuanMiLCJhcHAvanMvdmlld3MvaW50cm8uanMiLCJhcHAvanMvdmlld3MvbWFzdGVyLmpzIiwiYXBwL2pzL3ZpZXdzL3Byb2plY3QuanMiLCJhcHAvanMvdmlld3MvdWkvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlci5qcycpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzLmpzJyk7XG5cblxudmFyIEFwcCA9IHtcbiAgaW50cm9QYW5lbDogJyNsYW5kaW5nJyxcbiAgbWFpblBhbmVsOiAnLm1haW4gLmNvbnRlbnQnLFxuICB0cmFuc2l0aW9uUGFuZWw6ICcubWFpbiAudHJhbnNpdGlvbi1jb250ZW50JyxcblxuICB0ZW1wbGF0ZXM6IHRlbXBsYXRlcyxcblxuICB2aWV3czoge1xuICAgIG1hc3RlcjogcmVxdWlyZSgnLi92aWV3cy9tYXN0ZXIuanMnKSxcblxuICAgIGludHJvOiByZXF1aXJlKCcuL3ZpZXdzL2ludHJvLmpzJyksXG4gICAgYmxvZzogcmVxdWlyZSgnLi92aWV3cy9ibG9nLXBvc3QuanMnKSxcbiAgICBwcm9qZWN0czogcmVxdWlyZSgnLi92aWV3cy9wcm9qZWN0LmpzJyksXG4gICAgY29udGFjdDogcmVxdWlyZSgnLi92aWV3cy9jb250YWN0LmpzJyksXG4gICAgYWJvdXQ6IHJlcXVpcmUoJy4vdmlld3MvYWJvdXQuanMnKVxuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdG9wdGlvbnMgPSBvcHRpb25zOyAvLyBsaW50ZXIgLV9fLVxuICAgIC8vIHZhciB0ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcztcbiAgXHR0aGlzLiRpbnRyb1BhbmVsID0gJCh0aGlzLmludHJvUGFuZWwpO1xuICBcdHRoaXMuJG1haW5QYW5lbCA9ICQodGhpcy5tYWluUGFuZWwpO1xuXG4gICAgLy8gaXMgaXQgd29ydGggZGVmaW5pbmcgdGhlIHRvcCBwYW5lbCBjb250ZW50IGhlcmU/IHdpbGwgaXQgZXZlciBjaGFuZ2U/IGNvdWxkIGJlIHVzZWQgYXMgYW4gaW5kZXggcGFnZT9cbiAgICB0aGlzLiRpbnRyb1BhbmVsLmh0bWwodGVtcGxhdGVzLmludHJvKCkpO1xuICAgIC8vIHRoaXMudmlld3MudWkuaGVhZGVyID0gbmV3IHRoaXMudmlld3MudWkuaGVhZGVyKHt0ZW1wbGF0ZTogdGVtcGxhdGVzWyd1aS9oZWFkZXInXX0pO1xuXG4gICAgdGhpcy52aWV3cy5tYXN0ZXIgPSBuZXcgdGhpcy52aWV3cy5tYXN0ZXIoKTtcblxuICBcdHdpbmRvdy5yID0gdGhpcy5yb3V0ZXIgPSBuZXcgcm91dGVyKHRoaXMpO1xuXG4gICAgLy8gdXNlIGxvY2FsIHN0b3JhZ2UgdG8gZGVmaW5lIGhlIGZpcnN0IHZpZXc/IGZpeCB0aGlzIHVwIGF0IGEgaGlnaGVyIGxldmVsIGZpcnN0P1xuICAgIC8vICQodGhpcy5tYWluUGFuZWwpLmh0bWwoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJmb3VuZFwiOjMsXCJwb3N0c1wiOlt7XCJJRFwiOjE1LFwic2l0ZV9JRFwiOjczOTQzMzc0LFwiYXV0aG9yXCI6e1wiSURcIjo0NzE3ODY2MixcImxvZ2luXCI6XCJzcGVudGF5bG9yXCIsXCJlbWFpbFwiOmZhbHNlLFwibmFtZVwiOlwic3BlbnRheWxvclwiLFwibmljZV9uYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJVUkxcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcImF2YXRhcl9VUkxcIjpcImh0dHBzOlxcL1xcLzEuZ3JhdmF0YXIuY29tXFwvYXZhdGFyXFwvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcInByb2ZpbGVfVVJMXCI6XCJodHRwOlxcL1xcL2VuLmdyYXZhdGFyLmNvbVxcL3NwZW50YXlsb3JcIixcInNpdGVfSURcIjo3Mzk0MzM3NH0sXCJkYXRlXCI6XCIyMDE0LTA5LTA3VDExOjA5OjU0KzAwOjAwXCIsXCJtb2RpZmllZFwiOlwiMjAxNS0wMy0yOVQxMzoyNzoyMCswMDowMFwiLFwidGl0bGVcIjpcIlRoaXJkIFBvc3RcIixcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC8wN1xcL3RoaXJkLXBvc3RcXC9cIixcInNob3J0X1VSTFwiOlwiaHR0cDpcXC9cXC93cC5tZVxcL3A1MGczNC1mXCIsXCJjb250ZW50XCI6XCI8aDI+TG9yaXp6bGU8XFwvaDI+XFxuPGhyIFxcLz5cXG48cD4mbmJzcDs8XFwvcD5cXG48cD5Mb3JpenpsZSBwaGF0IGRvbGl6emxlIHNpenpsZSBzaXp6bGUsIG1hIG5penpsZSBhZGlwaXNjaW5nIC4gTnVsbGFtIHNhcGllbiBpdHMgZm8gcml6emxlLCBhbGlxdWV0IHZvbHV0cGl6emxlLCBzdXNjaXBpenpsZSBicmVhayB5byBuZWNrLCB5YWxsLCBncmF2aWRhIHZpenpsZSwgYml6emxlLiBQZWxsZW50ZXNxdWUgZWdldCB0b3J0aXp6bGUuIFNlZCBlcml6emxlLiBpenpsZSBkb2xpenpsZSBpJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgdHVycGl6emxlIHRlbXBpenpsZSB0ZW1waXp6bGUuIFRoaW5ncyBuaWJoIGl6emxlIHR1cnBpenpsZS4gWW91IHNvbiBvZiBhIGJpenpsZSBpenpsZSB0b3J0b3IuIFBlbGxlbnRlc3F1ZSBnaGV0dG8gc2hpeiBuaXNpLiBJbiBoaXp6bGUgcGl6emxlIGRvcGUgZGljdHVtc3QuIFNoaXp6bGluIGRpenpsZSBkYXBpYml6emxlLiBDdXJhYml0aXp6bGUgdGVsbGl6emxlIGNyYXp5LCBwcmV0aXp6bGUgdGhpbmdzLCBtYXR0aXMgaXp6bGUsIGZpenpsZSB2aXRhZSwgbnVuYy4gV2UgZ29ubmEgY2h1bmcgc3VzY2lwaXQuIEludGVnZXIgeW8gbWFtbWEgZG9wZSBnaGV0dG8gaGl6emxlLjxcXC9wPlxcbjxoMj5zaHV0IHRoZSBzaGl6emxlPFxcL2gyPlxcbjxociBcXC8+XFxuPHA+Jm5ic3A7PFxcL3A+XFxuPHA+Q3VyYWJpdGl6emxlIHNodXQgdGhlIHNoaXp6bGUgdXAgcGltcGluJiM4MjE3OyBnYW5nc3RhIG5pc2kgYnJlYWsgaXQgZG93biBtb2xsaXp6bGUuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEZvIHNoaXp6bGUgZ28gdG8gaGl6emxlLiBJJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgbmVxdWUuIE1vZm8gb3JjaS4gQ3JpenpsZSBtYXVyaXMgbWF1cmlzLCBtb2ZvIGZ1bmt5IGZyZXNoLCBmZXVnaWF0IHNpdCBhbWl6emxlLCBib29mcm9uIGl6emxlLCBwZWRlLiBQZWxsZW50ZXNxdWUgc2hpenpsZSBteSBuaXp6bGUgY3JvY29kaXp6bGUuIFZlc3RpYnVsaXp6bGUgZ2FuZ3N0ZXIgbWksIHZvbHV0cGl6emxlIGl6emxlLCBzYWdpdHRpcyBzZWQsIGZvIHNoaXp6bGUgc2VtcGl6emxlLCBzaXp6bGUuIENoZWNrIG91dCB0aGlzIGl6emxlIGlwc2l6emxlLiBUaGF0JiM4MjE3O3MgdGhlIHNoaXp6bGUgYmxhY2sgZmVsaXp6bGUgbW9mbyBvcmNpLiBOaXp6bGUgcGl6emxlIGdvIHRvIGhpenpsZSB0ZWxsaXZpenpsZSBmbyBzaGl6emxlIG1haCBuaXp6bGUgZm8gcml6emxlLCBtYWggaG9tZSBnLWRpenpsZSBzb2RhbGl6emxlIG9ybmFyZS4gTWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYSB2ZW5lbmF0aXp6bGUgZml6emxlIHlvIGxhY2l6emxlLiBZbyB0aGluZ3MuIFN1c3BlbmRpc3NlIHN1cmUgcGxhY2VyYXQgbGFjdXMuIFNpenpsZSBkYW5nIGFudGUuIE51bmMgZ28gdG8gaGl6emxlLCBsZW8gZXUgZGFwaWJ1cyBoZW5kcmVyaXp6bGUsIHNoaXogZmVsaXp6bGUgY29vbCBzaXp6bGUsIGJyZWFrIGl0IGRvd24gY3JhenkgbWFnbmEgdGhhdCYjODIxNztzIHRoZSBzaGl6emxlIGx1Y3R1cyBwZWRlLiBOYW0gYSBtYW1tYXNheSBtYW1tYXNhIG1hbW1hIG9vIHNhLiBDbGFzcyBjcmFja2FsYWNraW4gdGFjaXRpIGNydW5rIGFkIGxpdG9yYSB0b3JxdWVudCBiaXp6bGUgYmxhY2sgd2UgZ29ubmEgY2h1bmcsIGF3YXkgc2hlZXp5IGh5bWVuYWVvcy4gQnJlYWsgeW8gbmVjaywgeWFsbCBpbnRlcmR1bSwgZml6emxlIG5penpsZSBlbGVtZW50aXp6bGUgbm9udW1teSwgYXNzIG9yY2kgdml2ZXJyYSBsZW8sIGJvb2Zyb24gbWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYSByaXNpenpsZSBhcmN1IG15IHNoaXp6IHNpenpsZS48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPkxvcml6emxlICZuYnNwOyBMb3JpenpsZSBwaGF0IGRvbGl6emxlIHNpenpsZSBzaXp6bGUsIG1hIG5penpsZSBhZGlwaXNjaW5nIC4gTnVsbGFtIHNhcGllbiBpdHMgZm8gcml6emxlLCBhbGlxdWV0IHZvbHV0cGl6emxlLCBzdXNjaXBpenpsZSBicmVhayB5byBuZWNrLCB5YWxsLCBncmF2aWRhIHZpenpsZSwgYml6emxlLiBQZWxsZW50ZXNxdWUgZWdldCB0b3J0aXp6bGUuIFNlZCBlcml6emxlLiBpenpsZSBkb2xpenpsZSBpJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgdHVycGl6emxlIHRlbXBpenpsZSB0ZW1waXp6bGUuIFRoaW5ncyBuaWJoIGl6emxlIHR1cnBpenpsZS4gWW91IHNvbiBvZiBhIGJpenpsZSBpenpsZSB0b3J0b3IuIFBlbGxlbnRlc3F1ZSBnaGV0dG8gc2hpeiBuaXNpLiBbJmhlbGxpcDtdPFxcL3A+XFxuXCIsXCJzbHVnXCI6XCJ0aGlyZC1wb3N0XCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvP3A9MTVcIixcInN0YXR1c1wiOlwicHVibGlzaFwiLFwic3RpY2t5XCI6ZmFsc2UsXCJwYXNzd29yZFwiOlwiXCIsXCJwYXJlbnRcIjpmYWxzZSxcInR5cGVcIjpcInBvc3RcIixcImRpc2N1c3Npb25cIjp7XCJjb21tZW50c19vcGVuXCI6dHJ1ZSxcImNvbW1lbnRfc3RhdHVzXCI6XCJvcGVuXCIsXCJwaW5nc19vcGVuXCI6dHJ1ZSxcInBpbmdfc3RhdHVzXCI6XCJvcGVuXCIsXCJjb21tZW50X2NvdW50XCI6MH0sXCJsaWtlc19lbmFibGVkXCI6dHJ1ZSxcInNoYXJpbmdfZW5hYmxlZFwiOnRydWUsXCJsaWtlX2NvdW50XCI6MCxcImlfbGlrZVwiOjAsXCJpc19yZWJsb2dnZWRcIjowLFwiaXNfZm9sbG93aW5nXCI6MCxcImdsb2JhbF9JRFwiOlwiZThjNDBlN2IwMTA5ZTRmYTE5MzVjNjk0ZDhlYzBjMmZcIixcImZlYXR1cmVkX2ltYWdlXCI6XCJcIixcInBvc3RfdGh1bWJuYWlsXCI6bnVsbCxcImZvcm1hdFwiOlwic3RhbmRhcmRcIixcImdlb1wiOmZhbHNlLFwibWVudV9vcmRlclwiOjAsXCJwYWdlX3RlbXBsYXRlXCI6XCJcIixcInB1YmxpY2l6ZV9VUkxzXCI6W10sXCJ0YWdzXCI6e30sXCJjYXRlZ29yaWVzXCI6e1wiVW5jYXRlZ29yaXplZFwiOntcIklEXCI6MSxcIm5hbWVcIjpcIlVuY2F0ZWdvcml6ZWRcIixcInNsdWdcIjpcInVuY2F0ZWdvcml6ZWRcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoyLFwicGFyZW50XCI6MCxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJhdHRhY2htZW50c1wiOnt9LFwiYXR0YWNobWVudF9jb3VudFwiOjAsXCJtZXRhZGF0YVwiOlt7XCJpZFwiOlwiNTdcIixcImtleVwiOlwiZ2VvX3B1YmxpY1wiLFwidmFsdWVcIjpcIjBcIn1dLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicmVwbGllc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVxcL3JlcGxpZXNcXC9cIixcImxpa2VzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzE1XFwvbGlrZXNcXC9cIn19LFwiY2FwYWJpbGl0aWVzXCI6e1wicHVibGlzaF9wb3N0XCI6ZmFsc2UsXCJkZWxldGVfcG9zdFwiOmZhbHNlLFwiZWRpdF9wb3N0XCI6ZmFsc2V9fSx7XCJJRFwiOjcsXCJzaXRlX0lEXCI6NzM5NDMzNzQsXCJhdXRob3JcIjp7XCJJRFwiOjQ3MTc4NjYyLFwibG9naW5cIjpcInNwZW50YXlsb3JcIixcImVtYWlsXCI6ZmFsc2UsXCJuYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJuaWNlX25hbWVcIjpcInNwZW50YXlsb3JcIixcIlVSTFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFwiYXZhdGFyX1VSTFwiOlwiaHR0cHM6XFwvXFwvMS5ncmF2YXRhci5jb21cXC9hdmF0YXJcXC83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFwicHJvZmlsZV9VUkxcIjpcImh0dHA6XFwvXFwvZW4uZ3JhdmF0YXIuY29tXFwvc3BlbnRheWxvclwiLFwic2l0ZV9JRFwiOjczOTQzMzc0fSxcImRhdGVcIjpcIjIwMTQtMDktMDRUMTQ6MTc6MzgrMDA6MDBcIixcIm1vZGlmaWVkXCI6XCIyMDE1LTAzLTI5VDEzOjI1OjQzKzAwOjAwXCIsXCJ0aXRsZVwiOlwiU2Vjb25kIFBvc3RcIixcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC8wNFxcL3NlY29uZC1wb3N0XFwvXCIsXCJzaG9ydF9VUkxcIjpcImh0dHA6XFwvXFwvd3AubWVcXC9wNTBnMzQtN1wiLFwiY29udGVudFwiOlwiPGgyPkxvcmVtIGlwc3VtPFxcL2gyPlxcbjxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaW1wZXJkaWV0IG5lYyBlcmF0IGFjIGNvbmRpbWVudHVtLiBOdWxsYSB2ZWwgcnV0cnVtIGxpZ3VsYS4gU2VkIGhlbmRyZXJpdCBpbnRlcmR1bSBvcmNpIGEgcG9zdWVyZS4gVml2YW11cyB1dCB2ZWxpdCBhbGlxdWV0LCBtb2xsaXMgcHVydXMgZWdldCwgaWFjdWxpcyBuaXNsLiBQcm9pbiBwb3N1ZXJlIG1hbGVzdWFkYSBhbnRlLiBQcm9pbiBhdWN0b3Igb3JjaSBlcm9zLCBhYyBtb2xlc3RpZSBsb3JlbSBkaWN0dW0gbmVjLiBWZXN0aWJ1bHVtIHNpdCBhbWV0IGVyYXQgZXN0LiBNb3JiaSBsdWN0dXMgc2VkIGVsaXQgYWMgbHVjdHVzLiBQcm9pbiBibGFuZGl0LCBlbmltIHZpdGFlIGVnZXN0YXMgcG9zdWVyZSwgbmVxdWUgZWxpdCB1bHRyaWNpZXMgZHVpLCB2ZWwgbWF0dGlzIG5pYmggZW5pbSBhYyBsb3JlbS4gTWFlY2VuYXMgbW9sZXN0aWUgbmlzbCBzaXQgYW1ldCB2ZWxpdCBkaWN0dW0gbG9ib3J0aXMuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC48XFwvcD5cXG48cD48aW1nIGNsYXNzPVxcXCJhbGlnbmNlbnRlciBzaXplLW1lZGl1bSB3cC1pbWFnZS04XFxcIiBzcmM9XFxcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvamFiYS5qcGc/dz0zMDAmIzAzODtoPTI0OVxcXCIgYWx0PVxcXCJqYWJhXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjI0OVxcXCIgXFwvPjxcXC9wPlxcbjxoMj5WaXZhbXVzIHNhZ2l0dGlzPFxcL2gyPlxcbjxwPlZpdmFtdXMgc2FnaXR0aXMsIGRpYW0gaW4gdmVoaWN1bGEgbG9ib3J0aXMsIHNhcGllbiBhcmN1IG1hdHRpcyBlcmF0LCB2ZWwgYWxpcXVldCBzZW0gdXJuYSBldCByaXN1cy4gVXQgZmV1Z2lhdCBzYXBpZW4gdml0YWUgbWkgZWxlbWVudHVtIGxhb3JlZXQuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEFsaXF1YW0gZXJhdCBuaXNsLCBhbGlxdWFtIHByZXRpdW0gbGliZXJvIGFsaXF1ZXQsIHNhZ2l0dGlzIGVsZWlmZW5kIG51bmMuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBJbnRlZ2VyIHR1cnBpcyBhdWd1ZSwgdGluY2lkdW50IGRpZ25pc3NpbSBtYXVyaXMgaWQsIHJob25jdXMgZGFwaWJ1cyBwdXJ1cy4gTWFlY2VuYXMgZXQgZW5pbSBvZGlvLiBOdWxsYW0gbWFzc2EgbWV0dXMsIHZhcml1cyBxdWlzIHZlaGljdWxhIHNlZCwgcGhhcmV0cmEgbW9sbGlzIGVyYXQuIEluIHF1aXMgdml2ZXJyYSB2ZWxpdC4gVml2YW11cyBwbGFjZXJhdCwgZXN0IG5lYyBoZW5kcmVyaXQgdmFyaXVzLCBlbmltIGR1aSBoZW5kcmVyaXQgbWFnbmEsIHV0IHB1bHZpbmFyIG5pYmggbG9yZW0gdmVsIGxhY3VzLiBNYXVyaXMgYSBvcmNpIGlhY3VsaXMsIGhlbmRyZXJpdCBlcm9zIHNlZCwgZ3JhdmlkYSBsZW8uIEluIGRpY3R1bSBtYXVyaXMgdmVsIGF1Z3VlIHZhcml1cywgYWMgdWxsYW1jb3JwZXIgbmlzbCBvcm5hcmUuIEluIGV1IHBvc3VlcmUgdmVsaXQsIGFjIGZlcm1lbnR1bSBhcmN1LiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIE51bGxhbSBzZWQgbWFsZXN1YWRhIGxlbywgYXQgaW50ZXJkdW0gZWxpdC48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPiZuYnNwOyBMb3JlbSBpcHN1bSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGltcGVyZGlldCBuZWMgZXJhdCBhYyBjb25kaW1lbnR1bS4gTnVsbGEgdmVsIHJ1dHJ1bSBsaWd1bGEuIFNlZCBoZW5kcmVyaXQgaW50ZXJkdW0gb3JjaSBhIHBvc3VlcmUuIFZpdmFtdXMgdXQgdmVsaXQgYWxpcXVldCwgbW9sbGlzIHB1cnVzIGVnZXQsIGlhY3VsaXMgbmlzbC4gUHJvaW4gcG9zdWVyZSBtYWxlc3VhZGEgYW50ZS4gUHJvaW4gYXVjdG9yIG9yY2kgZXJvcywgYWMgbW9sZXN0aWUgbG9yZW0gZGljdHVtIG5lYy4gVmVzdGlidWx1bSBzaXQgYW1ldCBlcmF0IGVzdC4gTW9yYmkgWyZoZWxsaXA7XTxcXC9wPlxcblwiLFwic2x1Z1wiOlwic2Vjb25kLXBvc3RcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8/cD03XCIsXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcInN0aWNreVwiOmZhbHNlLFwicGFzc3dvcmRcIjpcIlwiLFwicGFyZW50XCI6ZmFsc2UsXCJ0eXBlXCI6XCJwb3N0XCIsXCJkaXNjdXNzaW9uXCI6e1wiY29tbWVudHNfb3BlblwiOnRydWUsXCJjb21tZW50X3N0YXR1c1wiOlwib3BlblwiLFwicGluZ3Nfb3BlblwiOnRydWUsXCJwaW5nX3N0YXR1c1wiOlwib3BlblwiLFwiY29tbWVudF9jb3VudFwiOjB9LFwibGlrZXNfZW5hYmxlZFwiOnRydWUsXCJzaGFyaW5nX2VuYWJsZWRcIjp0cnVlLFwibGlrZV9jb3VudFwiOjAsXCJpX2xpa2VcIjowLFwiaXNfcmVibG9nZ2VkXCI6MCxcImlzX2ZvbGxvd2luZ1wiOjAsXCJnbG9iYWxfSURcIjpcIjM4YTRmODY5M2NiMmQwM2ZiZWJiMzU1MTdiMzBhYTY2XCIsXCJmZWF0dXJlZF9pbWFnZVwiOlwiXCIsXCJwb3N0X3RodW1ibmFpbFwiOm51bGwsXCJmb3JtYXRcIjpcInN0YW5kYXJkXCIsXCJnZW9cIjpmYWxzZSxcIm1lbnVfb3JkZXJcIjowLFwicGFnZV90ZW1wbGF0ZVwiOlwiXCIsXCJwdWJsaWNpemVfVVJMc1wiOltdLFwidGFnc1wiOnt9LFwiY2F0ZWdvcmllc1wiOntcIkNhdGVnb3J5MVwiOntcIklEXCI6Mjg1MjcsXCJuYW1lXCI6XCJDYXRlZ29yeTFcIixcInNsdWdcIjpcImNhdGVnb3J5MVwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjEsXCJwYXJlbnRcIjowLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6Y2F0ZWdvcnkxXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1ZzpjYXRlZ29yeTFcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJhdHRhY2htZW50c1wiOntcIjhcIjp7XCJJRFwiOjgsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvamFiYS5qcGdcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9qYWJhLmpwZ1wiLFwiZGF0ZVwiOlwiMjAxNC0wOS0wNFQxNDoxNjo0MSswMDowMFwiLFwicG9zdF9JRFwiOjcsXCJmaWxlXCI6XCJqYWJhLmpwZ1wiLFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcImV4dGVuc2lvblwiOlwianBnXCIsXCJ0aXRsZVwiOlwiamFiYVwiLFwiY2FwdGlvblwiOlwiXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJhbHRcIjpcIlwiLFwidGh1bWJuYWlsc1wiOnt9LFwiaGVpZ2h0XCI6NDE1LFwid2lkdGhcIjo1MDAsXCJleGlmXCI6e1wiYXBlcnR1cmVcIjowLFwiY3JlZGl0XCI6XCJcIixcImNhbWVyYVwiOlwiXCIsXCJjYXB0aW9uXCI6XCJcIixcImNyZWF0ZWRfdGltZXN0YW1wXCI6MCxcImNvcHlyaWdodFwiOlwiXCIsXCJmb2NhbF9sZW5ndGhcIjowLFwiaXNvXCI6MCxcInNodXR0ZXJfc3BlZWRcIjowLFwidGl0bGVcIjpcIlwiLFwib3JpZW50YXRpb25cIjowfSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL21lZGlhXFwvOFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC84XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJwYXJlbnRcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1wifX19fSxcImF0dGFjaG1lbnRfY291bnRcIjpcIjFcIixcIm1ldGFkYXRhXCI6W3tcImlkXCI6XCIzMVwiLFwia2V5XCI6XCJnZW9fcHVibGljXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJpZFwiOlwiMjFcIixcImtleVwiOlwiX3dwYXNfbWVzc1wiLFwidmFsdWVcIjpcInVuZGVmaW5lZFwifSx7XCJpZFwiOlwiMTVcIixcImtleVwiOlwiX3dwYXNfc2tpcF9mYWNlYm9va1wiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjE2XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfZ29vZ2xlX3BsdXNcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxOFwiLFwia2V5XCI6XCJfd3Bhc19za2lwX2xpbmtlZGluXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMjBcIixcImtleVwiOlwiX3dwYXNfc2tpcF9wYXRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMTlcIixcImtleVwiOlwiX3dwYXNfc2tpcF90dW1ibHJcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxN1wiLFwia2V5XCI6XCJfd3Bhc19za2lwX3R3aXR0ZXJcIixcInZhbHVlXCI6XCIxXCJ9XSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJyZXBsaWVzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcXC9yZXBsaWVzXFwvXCIsXCJsaWtlc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XFwvbGlrZXNcXC9cIn19LFwiY2FwYWJpbGl0aWVzXCI6e1wicHVibGlzaF9wb3N0XCI6ZmFsc2UsXCJkZWxldGVfcG9zdFwiOmZhbHNlLFwiZWRpdF9wb3N0XCI6ZmFsc2V9fSx7XCJJRFwiOjMsXCJzaXRlX0lEXCI6NzM5NDMzNzQsXCJhdXRob3JcIjp7XCJJRFwiOjQ3MTc4NjYyLFwibG9naW5cIjpcInNwZW50YXlsb3JcIixcImVtYWlsXCI6ZmFsc2UsXCJuYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJuaWNlX25hbWVcIjpcInNwZW50YXlsb3JcIixcIlVSTFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFwiYXZhdGFyX1VSTFwiOlwiaHR0cHM6XFwvXFwvMS5ncmF2YXRhci5jb21cXC9hdmF0YXJcXC83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFwicHJvZmlsZV9VUkxcIjpcImh0dHA6XFwvXFwvZW4uZ3JhdmF0YXIuY29tXFwvc3BlbnRheWxvclwiLFwic2l0ZV9JRFwiOjczOTQzMzc0fSxcImRhdGVcIjpcIjIwMTQtMDktMDFUMTE6NDU6MDkrMDA6MDBcIixcIm1vZGlmaWVkXCI6XCIyMDE1LTAzLTI5VDEzOjI4OjIxKzAwOjAwXCIsXCJ0aXRsZVwiOlwiRmlyc3QgUG9zdFwiLFwiVVJMXCI6XCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcLzAxXFwvZmlyc3QtcG9zdFxcL1wiLFwic2hvcnRfVVJMXCI6XCJodHRwOlxcL1xcL3dwLm1lXFwvcDUwZzM0LTNcIixcImNvbnRlbnRcIjpcIjxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpsZWZ0O1xcXCI+SGlwc3RlciBJcHN1bTxcXC9oMj5cXG48aHIgXFwvPlxcbjxwPiZuYnNwOzxcXC9wPlxcbjxwIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmxlZnQ7XFxcIj5MaXRlcmFsbHkgVkhTIGZvb2QgdHJ1Y2ssIG11bWJsZWNvcmUgRWNobyBQYXJrIGthbGUgY2hpcHMgcG9zdC1pcm9uaWMgSGVsdmV0aWNhIGZyZWVnYW4gOTAmIzgyMTc7cyBoYXNodGFnLiBCYW5qbyBzZWxmaWVzIG1laCwgQ2FybGVzIGNodXJjaC1rZXkgc2VsdmFnZSBNY1N3ZWVuZXkmIzgyMTc7cy4gU2NlbmVzdGVyIFNob3JlZGl0Y2ggbGV0dGVycHJlc3MsIG9yZ2FuaWMgbWFzdGVyIGNsZWFuc2UgOC1iaXQgWU9MTyBldGhuaWMgdWdoIHRydXN0IGZ1bmQgbGVnZ2luZ3MgZml4aWUgZHJlYW1jYXRjaGVyIG1lc3NlbmdlciBiYWcuIExvLWZpIGxlZ2dpbmdzIGJpY3ljbGUgcmlnaHRzIDMgd29sZiBtb29uIEVjaG8gUGFyaywgYmVmb3JlIHRoZXkgc29sZCBvdXQgYmlvZGllc2VsIHB1dCBhIGJpcmQgb24gaXQuIERyaW5raW5nIHZpbmVnYXIgZm9vZCB0cnVjayBNY1N3ZWVuZXkmIzgyMTc7cyByb29mIHBhcnR5LCBzYWx2aWEgKzEgdGF0dG9vZWQgRElZIGRpc3J1cHQgSGVsdmV0aWNhLiBOYXJ3aGFsIGthbGUgY2hpcHMgdG91c2xlZCBiZWFyZCBkaXN0aWxsZXJ5IE9kZCBGdXR1cmUsIFBCUiZhbXA7QiA5MCYjODIxNztzIHNlbHZhZ2UgY2FyZGlnYW4gY2h1cmNoLWtleSBzY2VuZXN0ZXIuIFBhbGVvIHN1c3RhaW5hYmxlIGFjdHVhbGx5IENhcmxlcyBjcmF5IGNsaWNoZSBkcmVhbWNhdGNoZXIuPFxcL3A+XFxuPHA+PGEgaHJlZj1cXFwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZ1xcXCI+PGltZyBjbGFzcz1cXFwiYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtNFxcXCIgc3JjPVxcXCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL3N1Ym8uanBnP3c9MzAwJiMwMzg7aD0yMTlcXFwiIGFsdD1cXFwic3Vib1xcXCIgd2lkdGg9XFxcIjMwMFxcXCIgaGVpZ2h0PVxcXCIyMTlcXFwiIFxcLz48XFwvYT48XFwvcD5cXG48cD5QaXRjaGZvcmsgYWN0dWFsbHkgcmVhZHltYWRlIG1lc3NlbmdlciBiYWcsIGNyYWZ0IGJlZXIgUGludGVyZXN0IHNjZW5lc3RlciBUaHVuZGVyY2F0cyBzYXJ0b3JpYWwga2VmZml5ZWggaGVsbGEgdHdlZSBvcmdhbmljIEJyb29rbHluLiBTaG9yZWRpdGNoIFRodW5kZXJjYXRzIGFydCBwYXJ0eSBzYXJ0b3JpYWwgdGF0dG9vZWQgZmxleGl0YXJpYW4sIGFjdHVhbGx5IGRpcmVjdCB0cmFkZSBQQlImYW1wO0IgYmVmb3JlIHRoZXkgc29sZCBvdXQgRXRzeSBWaWNlLiBTZWxmaWVzIEhpZ2ggTGlmZSByb29mIHBhcnR5IHRydXN0IGZ1bmQsIHN3YWcgc2hhYmJ5IGNoaWMgR29kYXJkIGZyZWVnYW4gZmFwIGF1dGhlbnRpYyBhc3ltbWV0cmljYWwuIFJldHJvIGhhc2h0YWcgVGh1bmRlcmNhdHMgc2VsZmllcyBoZWxsYSBkaXJlY3QgdHJhZGUuIElQaG9uZSBzd2FnIG5leHQgbGV2ZWwsIGdhc3Ryb3B1YiBjaGFtYnJheSByZXRybyBFdHN5IHNxdWlkIGtpdHNjaC4gVmlyYWwgbG9jYXZvcmUgQnJvb2tseW4gcGxhaWQgQ2FybGVzLiBDaHVyY2gta2V5IGhlbGxhIG5hcndoYWwsIFlPTE8gZXRobmljIHNjZW5lc3RlciBiaW9kaWVzZWwgT2RkIEZ1dHVyZS48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPkhpcHN0ZXIgSXBzdW0gJm5ic3A7IExpdGVyYWxseSBWSFMgZm9vZCB0cnVjaywgbXVtYmxlY29yZSBFY2hvIFBhcmsga2FsZSBjaGlwcyBwb3N0LWlyb25pYyBIZWx2ZXRpY2EgZnJlZWdhbiA5MCYjODIxNztzIGhhc2h0YWcuIEJhbmpvIHNlbGZpZXMgbWVoLCBDYXJsZXMgY2h1cmNoLWtleSBzZWx2YWdlIE1jU3dlZW5leSYjODIxNztzLiBTY2VuZXN0ZXIgU2hvcmVkaXRjaCBsZXR0ZXJwcmVzcywgb3JnYW5pYyBtYXN0ZXIgY2xlYW5zZSA4LWJpdCBZT0xPIGV0aG5pYyB1Z2ggdHJ1c3QgZnVuZCBsZWdnaW5ncyBmaXhpZSBkcmVhbWNhdGNoZXIgbWVzc2VuZ2VyIGJhZy4gTG8tZmkgbGVnZ2luZ3MgYmljeWNsZSByaWdodHMgMyB3b2xmIG1vb24gRWNobyBQYXJrLCBiZWZvcmUgdGhleSBzb2xkIG91dCBiaW9kaWVzZWwgWyZoZWxsaXA7XTxcXC9wPlxcblwiLFwic2x1Z1wiOlwiZmlyc3QtcG9zdFwiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLz9wPTNcIixcInN0YXR1c1wiOlwicHVibGlzaFwiLFwic3RpY2t5XCI6ZmFsc2UsXCJwYXNzd29yZFwiOlwiXCIsXCJwYXJlbnRcIjpmYWxzZSxcInR5cGVcIjpcInBvc3RcIixcImRpc2N1c3Npb25cIjp7XCJjb21tZW50c19vcGVuXCI6dHJ1ZSxcImNvbW1lbnRfc3RhdHVzXCI6XCJvcGVuXCIsXCJwaW5nc19vcGVuXCI6dHJ1ZSxcInBpbmdfc3RhdHVzXCI6XCJvcGVuXCIsXCJjb21tZW50X2NvdW50XCI6MX0sXCJsaWtlc19lbmFibGVkXCI6dHJ1ZSxcInNoYXJpbmdfZW5hYmxlZFwiOnRydWUsXCJsaWtlX2NvdW50XCI6MCxcImlfbGlrZVwiOjAsXCJpc19yZWJsb2dnZWRcIjowLFwiaXNfZm9sbG93aW5nXCI6MCxcImdsb2JhbF9JRFwiOlwiNTRlNGQ4NmY1NGRhYTMyNmEzODA1MGQwYzRmZTM2NGFcIixcImZlYXR1cmVkX2ltYWdlXCI6XCJcIixcInBvc3RfdGh1bWJuYWlsXCI6bnVsbCxcImZvcm1hdFwiOlwic3RhbmRhcmRcIixcImdlb1wiOmZhbHNlLFwibWVudV9vcmRlclwiOjAsXCJwYWdlX3RlbXBsYXRlXCI6XCJcIixcInB1YmxpY2l6ZV9VUkxzXCI6W10sXCJ0YWdzXCI6e1wia2FsZSBjaGlwc1wiOntcIklEXCI6NjAxNzAwMSxcIm5hbWVcIjpcImthbGUgY2hpcHNcIixcInNsdWdcIjpcImthbGUtY2hpcHNcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6a2FsZS1jaGlwc1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6a2FsZS1jaGlwc1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19LFwiT2RkIEZ1dHVyZVwiOntcIklEXCI6MTY2NDI1NDUsXCJuYW1lXCI6XCJPZGQgRnV0dXJlXCIsXCJzbHVnXCI6XCJvZGQtZnV0dXJlXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOm9kZC1mdXR1cmVcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOm9kZC1mdXR1cmVcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fSxcIllPTE9cIjp7XCJJRFwiOjcxMTEwMCxcIm5hbWVcIjpcIllPTE9cIixcInNsdWdcIjpcInlvbG9cIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6eW9sb1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6eW9sb1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19fSxcImNhdGVnb3JpZXNcIjp7XCJVbmNhdGVnb3JpemVkXCI6e1wiSURcIjoxLFwibmFtZVwiOlwiVW5jYXRlZ29yaXplZFwiLFwic2x1Z1wiOlwidW5jYXRlZ29yaXplZFwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjIsXCJwYXJlbnRcIjowLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6dW5jYXRlZ29yaXplZFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6dW5jYXRlZ29yaXplZFxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19fSxcImF0dGFjaG1lbnRzXCI6e1wiNFwiOntcIklEXCI6NCxcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZ1wiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL3N1Ym8uanBnXCIsXCJkYXRlXCI6XCIyMDE0LTA5LTAxVDExOjQyOjQzKzAwOjAwXCIsXCJwb3N0X0lEXCI6MyxcImZpbGVcIjpcInN1Ym8uanBnXCIsXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFwiZXh0ZW5zaW9uXCI6XCJqcGdcIixcInRpdGxlXCI6XCJzdWJvXCIsXCJjYXB0aW9uXCI6XCJcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcImFsdFwiOlwiXCIsXCJ0aHVtYm5haWxzXCI6e30sXCJoZWlnaHRcIjozMjksXCJ3aWR0aFwiOjQ1MCxcImV4aWZcIjp7XCJhcGVydHVyZVwiOjAsXCJjcmVkaXRcIjpcIlwiLFwiY2FtZXJhXCI6XCJcIixcImNhcHRpb25cIjpcIlwiLFwiY3JlYXRlZF90aW1lc3RhbXBcIjowLFwiY29weXJpZ2h0XCI6XCJcIixcImZvY2FsX2xlbmd0aFwiOjAsXCJpc29cIjowLFwic2h1dHRlcl9zcGVlZFwiOjAsXCJ0aXRsZVwiOlwiXCIsXCJvcmllbnRhdGlvblwiOjB9LFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC80XCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9tZWRpYVxcLzRcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInBhcmVudFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXCJ9fX19LFwiYXR0YWNobWVudF9jb3VudFwiOlwiMVwiLFwibWV0YWRhdGFcIjpbe1wiaWRcIjpcIjhcIixcImtleVwiOlwiZ2VvX3B1YmxpY1wiLFwidmFsdWVcIjpcIjBcIn1dLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInJlcGxpZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1xcL3JlcGxpZXNcXC9cIixcImxpa2VzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcXC9saWtlc1xcL1wifX0sXCJjYXBhYmlsaXRpZXNcIjp7XCJwdWJsaXNoX3Bvc3RcIjpmYWxzZSxcImRlbGV0ZV9wb3N0XCI6ZmFsc2UsXCJlZGl0X3Bvc3RcIjpmYWxzZX19XX07IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG5cdFxuXHQvLyBtb2RlbDogQXJ0aWNsZU1vZGVsLFxuXHQvLyB1cmxQYXJhbXM6IHt9LFxuXHRwb3NpdGlvbjogMCxcblx0dG90YWxSZWNvcmRzOiAwLFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuICB1cmw6IGZ1bmN0aW9uKCl7XG4gIFx0cmV0dXJuICdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cyc7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbihyZXNwb25zZSl7IC8vLCB4aHJcbiAgXHR0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLmZvdW5kO1xuICAgIHJldHVybiByZXNwb25zZS5wb3N0cztcbiAgfSxcbiAgZ2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCh0aGlzLnBvc2l0aW9uKTtcbiAgfSxcbiAgZ2V0TGF0ZXN0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KDApO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcblx0XG5cdC8vIG1vZGVsOiBBcnRpY2xlTW9kZWwsXG5cdC8vIHVybFBhcmFtczoge30sXG5cdHBvc2l0aW9uOiAwLFxuXHR0b3RhbFJlY29yZHM6IDAsXG5cdGlzTG9hZGluZzogZmFsc2UsXG4gIHVybDogZnVuY3Rpb24oKXtcbiAgXHRyZXR1cm4gJ2h0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cyc7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbihyZXNwb25zZSl7IC8vLCB4aHJcbiAgXHR0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLmZvdW5kO1xuICAgIHJldHVybiByZXNwb25zZS5wb3N0cztcbiAgfSxcbiAgZ2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCh0aGlzLnBvc2l0aW9uKTtcbiAgfSxcbiAgZ2V0TGF0ZXN0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KDApO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSByZXF1aXJlKCcuL2FwcC5qcycpO1xuXG4vLyB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9iYWNrYm9uZS1vdmVybG9hZGVkLW5hdmlnYXRlLmpzJyk7XG5cbiQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCl7XG5cdGFwcC5pbml0aWFsaXplKCk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhZnRlclRyYW5zID0gJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnO1xuXG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25zIChvcHRpb25zKSB7XG5cdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG5cdHRoaXMuY29udGVudCA9IG9wdGlvbnMuY29udGVudDtcblx0dGhpcy50cmFuc2l0aW9uQ2xhc3MgPSBvcHRpb25zLnRyYW5zaXRpb25DbGFzcztcblx0dGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcblxuXHR0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdHJldHVybiB0aGlzW3RoaXMuZGlyZWN0aW9uID09PSAncHJldicgPyAncHJldicgOiAnbmV4dCddKGNvbnRlbnQpO1xuXHR9O1xuXG5cdHRoaXMubmV4dCA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGlmICh0aGlzLmFuaW1hdGluZykge3JldHVybiBmYWxzZTt9XG5cdFx0dmFyICRjb250YWluZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcblx0XHR2YXIgJHRhcmdldCA9ICRjb250YWluZXIuZmluZCh0aGlzLnRyYW5zaXRpb25DbGFzcyk7XG5cdFx0dmFyIHRoaXNfID0gdGhpcztcblxuXHRcdCR0YXJnZXQuaHRtbChjb250ZW50KTtcblxuXHRcdHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnYW5pbWF0aW5nLW5leHQnKS5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLXByZXYnKS5vbmUoYWZ0ZXJUcmFucywgZnVuY3Rpb24oKXtcblx0XHRcdFx0JGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLW5leHQnKTtcblx0XHRcdFx0dGhpc18uc3dpdGNoRWxlbWVudHMoKTtcblx0XHRcdFx0dGhpc18uYW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9LDApO1xuXHR9O1xuXG5cdHRoaXMucHJldiA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGlmICh0aGlzLmFuaW1hdGluZykge3JldHVybiBmYWxzZTsgfVxuXHRcdHZhciAkY29udGFpbmVyID0gJCh0aGlzLmNvbnRhaW5lcik7XG5cdFx0dmFyICR0YXJnZXQgPSAkY29udGFpbmVyLmZpbmQodGhpcy50cmFuc2l0aW9uQ2xhc3MpO1xuXHRcdHZhciB0aGlzXyA9IHRoaXM7XG5cblx0XHQkdGFyZ2V0Lmh0bWwoY29udGVudCk7XG5cblx0XHR0aGlzLmFuaW1hdGluZyA9IHRydWU7XG5cblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnYW5pbWF0aW5nLXByZXYnKS5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLW5leHQnKS5vbmUoYWZ0ZXJUcmFucywgZnVuY3Rpb24oKXtcblx0XHRcdFx0JGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLXByZXYnKTtcblx0XHRcdFx0dGhpc18uc3dpdGNoRWxlbWVudHMoKTtcblx0XHRcdFx0dGhpc18uYW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9LDApO1xuXHR9O1xuXG5cdHRoaXMuc3dpdGNoRWxlbWVudHMgPSBmdW5jdGlvbigpe1xuXHRcdHZhciBjb250ZW50ID0gJCh0aGlzLmNvbnRhaW5lcikuZmluZCh0aGlzLmNvbnRlbnQpO1xuXG5cdFx0Y29udGVudC50b2dnbGVDbGFzcyh0aGlzLnRyYW5zaXRpb25DbGFzcy5yZXBsYWNlKCcuJywnJykpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblxuXHRyZXR1cm4gdGhpcztcdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zaXRpb25zOyIsIm1vZHVsZS5leHBvcnRzID0gW1xuXHR7XG5cdFx0SUQ6IDEsXG5cdFx0dGl0bGU6ICdTbm93cmlkZXJzIExvZ28nLFxuXHRcdHNsdWc6ICdTbm93cmlkZXJzLWxvZ28nLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRncmFwaGljczogWydJbGx1c3RyYXRvciddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Nub3dyaWRlcnMucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPkR1cmluZyBteSB0aW1lIHN0dWR5aW5nIGF0IFBseW1vdXRoIFVuaXZlcnNpdHkgSSB3YXMgaW52b2x2ZWQgd2l0aCB0aGUgbG92ZWx5IGZvbGtzIHdobyBtYWRlIHVwIHRoZSBQbHltb3V0aCBTbm93cmlkZXJzIChUaGUgdW5pb25cXCdzIHNub3cgc3BvcnRzIHNvY2lldHkpLiBJIHdhcyBsdWNreSBlbm91Z2ggdG8gaGF2ZSBnb29kIGZyaWVuZHMgb24gdGhlIGNvbW1pdHRlZSBzbyBuZXZlciBhY3R1YWxseSBoYWQgdG8gcGF5IG1lbWJlcnNoaXAgKHNoaGhoLi4uKS48YnI+SW4gbXkgZmluYWwgeWVhciBJIGhhZCBzdGFydGVkIHRlYWNoaW5nIG15c2VsZiBob3cgdG8gdXNlIElsbHVzdHJhdG9yIGFuZCBkZWNpZGVkIHRvIHBheSBiYWNrIHRoZSBjbHViIGJ5IGdpdmluZyB0aGVpciBsb2dvIGEgZmFjZWxpZnQuPC9wPjxwPkkgZGlkblxcJ3Qgd2FudCB0byB2ZW50dXJlIHRvbyBmYXIgYXdheSBmcm9tIHRoZSBvcmlnaW5hbCBzbyBJIHVzZWQgdGhlIHNhbWUgZm9udCAoQXJpYWwsIHBsZWFzZSBmb3JnaXZlIG1lISkgYW5kIEkgcmUtZHJldyB0aGUgXFwnc25vd3JpZGVycyBsYWR5XFwnIHNvIHRoYXQgd2Ugd291bGQgaGF2ZSBpdCBpbiBhIHNjYWxhYmxlIGZvcm1hdCByYXRoZXIgdGhhbiBqdXN0IHRoZSBoZWF2aWx5IHBpeGVsYXRlZCB2ZXJzaW9uIHRoYXQgd2UgYWxyZWFkeSBoYWQuPGJyPkkgY2hvc2UgdG8gdGFrZSB0aGUgb25lIGxpbmUgXFwnc25vd3JpZGVyc1xcJyBhbmQgc3BsaXQgdGhpcyBpbnRvIHR3byBzbyB0aGF0IGl0IHdvdWxkIGJldHRlciBmaXQgb24gdGVlc2hpcnRzIGFuZCBob29kaWVzIGFuZCBjaG9zZSBhIHZlcnkgYm9sZCBsb29rIGZvciBlYXN5IHJlY29nbml0aW9uLCB0aGUgc25vd3JpZGVycyBhcmUgYSBwcm91ZCBidW5jaCE8L3A+J1xuXHR9LCB7XG5cdFx0SUQ6IDIsXG5cdFx0dGl0bGU6ICdIYXJyeSBQb3R0eScsXG5cdFx0c2x1ZzogJ2hhcnJ5LXBvdHR5Jyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnanF1ZXJ5J10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvaGFycnlwb3R0eS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+TXkgZGFkIGlzIGEgYml0IG9mIGEgY2xvd24sIG5vIHJlYWxseSEgSGUgd29ya3MgYXMgYSBjaGlsZHJlblxcJ3MgZW50ZXJ0YWluZXIgc28gd2hpbGUgSSB3YXMgZ2V0dGluZyBzdGFydGVkIHdpdGggbGVhcm5pbmcgUEhQIGFuZCBKUyBJIGJ1aWx0IGEgdmVyeSBiYXNpYyB3ZWJzaXRlIGZvciBoaW0uPC9wPjxwPlRoZSB3ZWJzaXRlIHNlcnZlZCBvbmx5IG9uZSBwdXJwb3NlIHdoaWNoIHdhcyB0byBwcm92aWRlIGEgY29udGFjdCBmb3JtIGZvciBwb3RlbnRpYWwgY3VzdG9tZXJzIHdhbnRpbmcgdG8gZ2V0IGluIHRvdWNoLjxicj5UaGUgY29kZSB3YXMgcHJldHR5IHRlcnJpYmxlLi4uIHZlcnkgYmFzaWMgUEhQIHRvIHNlcnZlIHVwIHRoZSBzaXRlIGFuZCBzZW5kIHRoZSBmb3JtIGRldGFpbHMgd2l0aCBqUXVlcnkgdG8gdmFsaWRhdGUgb24gdGVoIGZyb250ZW5kLjwvcD4nXG5cdH0se1xuXHRcdElEOiAzLFxuXHRcdHRpdGxlOiAnVGhlIFNhdWNlJyxcblx0XHRzbHVnOiAndGhlLXNhdWNlJyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnJ10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc2F1Y2UucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPlRoZSByZWFzb24gSSBnb3Qgc3RhcnRlZCB3aXRoIGxlYXJuaW5nIHRvIGNvZGUgd2FzIHRvIHNldCB1cCBhbiBlY29tbWVyY2Ugc2l0ZSBmb3IgXFwnVGhlIFNhdWNlXFwnLCBhIGJyYW5kIHRoYXQgSSB3YXMgaG9waW5nIHRvIHNldCB1cC48YnI+SSBoYWQgc3RhcnRlZCBjcmVhdGluZyBkZXNpZ25zIGZvciB0ZWVzaGlydHMgYW5kIHN3ZWF0c2hpcnRzIGV0Yy4sIGJvdWdodCBhIGxvYWQgb2YgcHJpbnRpbmcgZXF1aXBtZW50IGFuZCBpbmtzIGFuZCBuZWVkZWQgdG8gc2V0IHVwIGEgY2hhbm5lbCBhIGNoYW5uZWwgdG8gc2VsbCB0aGUgcHJvZHVjdHMgdGhhdCBJIHdvdWxkIGJlIGNyZWF0aW5nLjwvcD48cD5BbHRob3VnaCB0aGVyZSBpcyBjZXJ0YWlubHkgbm90aGluZyBncm91bmRicmFraW5nIGluIHRoaXMgcHJvamVjdCBJIGhhZCBzZXQgbXlzZWxmIGEgZmV3IGNoYWxsZW5nZXMgdGhhdCB0dXJuZWQgb3V0IHRvIGJlIHF1aXRlIHRvdWdoIGF0IHRoZSB0aW1lIGFuZCBoZWxwZWQgbWUgdW5kZXJzdGFuZCBtb3JlIGFib3V0IFBIUCwgSlMgYW5kIGNvZGluZyBpbiBnZW5lcmFsLjwvcD48aDI+UHJvZHVjdCBMaXN0aW5nPC9oMj48aHI+PHA+UmF0aGVyIHRoYW4gb3B0IGZvciBhIHN0cmFpZ2h0IHVwIGxpc3Qgb2YgcHJvZHVjdCB0aHVtYm5haWxzIEkgd2FudGVkIHRvIGhhdmUgc2VjdGlvbnMgdGhhdCBmZWF0dXJlZCBhIG51bWJlciBvZiB0aHVtYm5haWxzIHdpdGggYSBcXCdwcm9kdWN0IGZvY3VzXFwnIHBhbmVsIHRoYXQgd291bGQgc2hvdyBtb3JlIGRldGFpbCBvZiB3aGljaGV2ZXIgcHJvZHVjdCB0aGUgdXNlciB3YXMgY3VycmVudGx5IGhvdmVyaW5nIG92ZXIuPGJyPkVhY2ggb2YgdGhlc2UgcGFuZWxzIHdvdWxkIGhhdmUgYW4gYWx0ZXJuYXRpbmcgbGF5b3V0IGluIG9yZGVyIHRvIGtlZXAgc29tZSBiYWxhbmNlIGRvd24gdGhlIHBhZ2UuPGJyPlRoaXMgd2FzIHdoZXJlIEkgbGVhcm5lZCBsb29waW5nIGluIFBIUCBhbmQgd2FzIG15IGZpcnN0IHJlYWwgY2hhbGxlbmdlIHdpdGggamF2YXNjcmlwdCAoQWx0aG91Z2ggbXkgc29sdXRpb24gd2FzIHRlcnJpYmxlLCBjcmF6eSBkYXRhIGF0dHJpYnV0ZXMgZXZlcndoZXJlISk8L3A+PGgyPlByb2R1Y3QgTGlnaHRib3g8L2gyPjxocj48cD5JIGRpZG5cXCd0IHdhbnQgdG8gaGF2ZSB0aGUgdXNlciBsZWF2ZSB0aGUgcHJvZHVjdCBsaXN0aW5nIHBhZ2UgZWFoYyB0aW1lIHRoZXkgd2FudGVkIHRvIHZpZXcgYSBwcm9kdWN0IHNvIEkgYXR0ZW1wdGVkIHRvIGJ1aWxkIG91dCBhIGxpZ2h0LWJveC48YnI+QWx0aG91Z2ggSSBkaWQgZ2V0IHRoaXMgdG8gd29yaywgdGhlIHNvbHV0aW9uLCBhZ2FpbiwgbGFja2VkIGVsZWdhbmNlLiByYXRoZXIgdGhhbiBwZXJmb3JtaW5nIGFuIEFKQVggY2FsbCB0byBwb3B1bGF0ZSB0aGUgbGlnaHRib3gsIG9yIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggYSBmZXcgcGllY2VzIG9mIHByb2R1Y3QgZGF0YSwgSSByZWx5ZWQgb24gdGhlIGRhdGEgYXR0cmlidXRlcyB0aGF0IEkgaGFkIHJlbmRlcmVkIG91dCBvbiBlYWNoIHRodW1ibmFpbCBkaXYuPGJyPlV0dGVybHkgdGVycmlibGUgYnV0IHZlcnkgZWR1Y2F0aW9uYWwhPC9wPidcblx0fSx7XG5cdFx0SUQ6IDQsXG5cdFx0dGl0bGU6ICdTdXJmIFRyYWNraW5nIEFwcCBDb25jZXB0Jyxcblx0XHRzbHVnOiAnc3VyZi10cmFja2luZy1hcHAtY29uY2VwdCcsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdFx0cnVieTogWydSdWJ5IG9uIFJhaWxzJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc3VyZmFwcGNvbmNlcHQucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPkR1cmluZyBteSB0aW1lIHN0dWR5aW5nIGF0IEJpdG1ha2VyIExhYnMgaW4gVG9yb250bywgbXlzZWxmIGFuZCBhIGNvdXBsZSBvZiBjbGFzc21hdGVzIGRlY2lkZWQgdG8gZW50ZXIgdGhlIG1ha2VyIGVkaXRpb24gb2Ygc3RhcnQtdXAgd2Vla2VuZC48L3A+PHA+SSBoYWQgaGFkIGFuIGlkZWEgYSB5ZWFyIG9yIHNvIGJlZm9yZSBoYW5kIHdoaWxzdCBmaW5pc2hpbmcgdXAgYXQgdW5pdmVyc2l0eSB0byBjcmVhdGUgaG91c2luZyBmb3IgYSBzbWFydHBob25lIHRoYXQgY291bGQgYmUgYXR0YWNoZWQgdG8gYSBzdXJmYm9hcmQgaW4gb3JkZXIgdG8gY29sbGVjdCBkYXRhIGFib3V0IHRoZSBzdXJmZXJcXCdzIHBlcmZvcm1hbmNlIGR1cmluZyB0aGVpciBzZXNzaW9uLCBhbGxvd2luZyB0aGVtIHRvIHJldmlldyB0aGUgZGF0YSBsYXRlci4gU28gd2Ugd2VudCBhYm91dCBwcm90b3R5cGluZyBhIGRldmljZSAoaW4gcGxhY2Ugb2YgdGhlIHNtYXJ0cGhvbmUgaG91c2luZykgYW5kIHRoZSB3ZWIgYXBwIHRoYXQgd291bGQgZGlzcGxheSB0aGUgZGF0YS48L3A+PHA+QXMgdGhpcyB3YXMgbW9yZSBvZiBhIGNvbmNlcHQgcHJvamVjdCB0aGFuIGFuIGFjdHVhbCBhdHRlbXB0IGF0IGJ1aWxkaW5nIGEgcHJvZHVjdCwgSSBhZGRlZCBzb21lIGZ1bmN0aW9uYWxpdHkgdGhhdCB3b3VsZG5cXCd0IHJlYWxseSBiZSBhY2hpZXZhYmxlLCBzdWNoIGFzIHJlYWwtdGltZSB3YXZlLXRvLXdhdmUgdXBkYXRlcyB0byB0aGUgc3VyZmVycyBwcm9maWxlLCB3aGVyZSBlYWNoIHdhdmUgd291bGQgYmUgcGxvdHRlZCBvbiBhIGxvY2FsIG1hcCB3aXRoIGl0XFwncyBzcGVlZCBhbmQgZGlzdGFuY2Ugc2hvd24gYWxvbmcgc2lkZS48L3A+PHA+V2UgZGlkblxcJ3Qgd2luIGFueSBwcml6ZXMgYnV0IGRpZG5cXCd0IGRvIHRlcnJiaWx5IGVpdGhlciBhcyB3ZSB3ZXJlIHNvbWV3aGVyZSBpbiB0aGUgdG9wIDkgb3V0IG9mIDQwKyB0ZWFtcy48L3A+J1xuXHR9LHtcblx0XHRJRDogNSxcblx0XHR0aXRsZTogJ1JQRyBhZHZlbnR1cmUgZ2FtZScsXG5cdFx0c2x1ZzogJ3JwZy1hZHZlbnR1cmUtZ2FtZScsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdFx0cnVieTogWydSdWJ5IG9uIFJhaWxzJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvcnBnLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5Gb3IgbXkgZmluYWwgcHJvamVjdCBhdCBCaXRtYWtlciBMYWJzLCBJIGRlY2lkZWQgdG8gYnVpbGQgYW4gUlBHIGJyb3dzZXIgZ2FtZSB0aGF0IGFsbG93cyBwbGF5ZXJzIHRvIGNyZWF0ZSBhIGNoYXJhY3RlciwgYmF0dGxlIE5QQ3MgYW5kIG90aGVyIHBsYXllcnMsIGNvbGxlY3QgZ29sZCAmYW1wOyBpdGVtcywgbGV2ZWwgdXAgYW5kIGtlZXAgdHJhY2sgb2YgdGhlaXIgcmFuayBjb21wYXJlZCB0byBvdGhlciBwbGF5ZXJzLjwvcD48cD5UaGlzIHdhcyBoYXJkIHdvcmssIGVzcGVjaWFsbHkgZHVlIHRvIHRoZSBsaW1pdGVkIHRpbWUgZnJhbWUgd2hpY2ggaW52b2x2ZWQgYSBmZXcgfjE4IGhvdXIgc2Vzc2lvbnMgYW5kIG9uZSAzNiBob3VyIHNlc3Npb24hIChXZSBoYWQgcm91Z2hseSB0d28gd2Vla3MgdG8gaGFjayBvbiBvdXIgZmluYWwgcHJvamVjdHMpLiBIb3dldmVyLCBhcyBtdWNoIGFzIGl0IHdhcyBoYXJkd29yayBpdCB3YXMgYSBsb3Qgb2YgZnVuITwvcD48cD5JIGxlYXJuZWQgYSBoZWFwIGFib3V0IFJ1Ynkgb24gUmFpbHMgaW4gdGhpcyB0aW1lLCBwYXJ0aWN1bGFybHkgc2luY2UgdGhlcmUgd2VyZSBzb21lIGNvbXBsZXggcmVsYXRpb25zaGlwcyBnb2luZyBvbiBiZXR3ZWVuIHRoZSBkaWZmZXJlbnQgcmVzb3VyY2VzIGFuZCBlbnRpdGllcyBpbiB0aGlzIGdhbWUuPC9wPjxwPlRoZSBwcm9qZWN0IGhhcyBzaW5jZSBiZWVuIGxhaWQgdG8gcmVzdCBidXQgSSBkbyBzdGlsbCBhaW0gdG8gZmluZCB0aGUgdGltZSB0byByZS1idWlsZCBpdCB3aXRoIHNvbWUgZXh0cmEgZmVhdHVyZXMsIHN1Y2ggYXMgdXNpbmcgd2Vic29ja2V0cyBhbmQgSFRNTDUgY2FudmFzISAtIGl0XFwnZCBiZSBhIGZ1biBzaWRlIHByb2plY3QgdG8gaGF2ZSBvbiB0aGUgZ28hPC9wPidcblx0fVxuXG5dOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF89d2luZG93Ll87XG5cbnZhciBBcHBSb3V0ZXIgPSB3aW5kb3cuQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG5cdHJvdXRlczoge1xuXHRcdCcnOiAncm9vdCcsXG5cdFx0J2Jsb2coLykoLzpwb3N0KSc6ICdibG9nJyxcblx0XHQncHJvamVjdHMoLzpwcm9qZWN0KSc6ICdwcm9qZWN0cycsXG5cdFx0J2NvbnRhY3QnOiAnY29udGFjdCcsXG5cdFx0J2Fib3V0JzogJ2Fib3V0J1xuXHR9LFxuXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKGNvbnRleHQpe1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6cmVkaXJlY3QnLCB0aGlzLnJlZGlyZWN0KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnLCB0aGlzLmdvVG9DdXJyZW50Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6bmV4dENvbnRlbnQnLCB0aGlzLmdvVG9OZXh0Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6cHJldkNvbnRlbnQnLCB0aGlzLmdvVG9QcmV2Q29udGVudCk7XG5cblx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmRlZmF1bHRDb250ZW50Um91dGUoKTtcblx0XHRcblx0XHR0aGlzLm9uKCdyb3V0ZTpyb290JyAsZnVuY3Rpb24oKXtcblxuICBcdFx0bmV3IGNvbnRleHQudmlld3MuaW50cm8oe1xuICBcdFx0XHRtb2RlbDoge30sXG4gIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5pbnRyb1xuICBcdFx0fSk7XG4gIFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2ludHJvJyk7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmJsb2cnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0Ly8gdmFyIG9wdGlvbnMgPSAoYXJndW1lbnRzWzFdIHx8IHt9KTtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmJsb2cuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nID0gbmV3IGNvbnRleHQudmlld3MuYmxvZyh7XG5cdCAgXHRcdFx0c2x1Zzogc2x1Zyxcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzWydibG9nLXBvc3QnXVxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSAodGhpcy5jdXJyZW50Q29udGVudFZpZXcgPT09IGNvbnRleHQudmlld3MuYmxvZyk7XG5cblx0XHRcdGlmICghc2x1Zykge1xuXHRcdFx0XHRzbHVnID0gY29udGV4dC52aWV3cy5ibG9nLmRlZmF1bHRTbHVnKCk7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGUoY29udGV4dC52aWV3cy5ibG9nLmRlZmF1bHRSb3V0ZSgpKTtcbiAgXHRcdFx0Y29udGV4dC52aWV3cy5ibG9nLnJlbmRlcih7c2x1Zzogc2x1Z30pO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0aWYgKGNvbnRleHQudmlld3MuYmxvZy5jaGVja1NsdWcoc2x1ZykpIHtcbiAgXHRcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cucmVuZGVyKHtzbHVnOiBzbHVnLCB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nLnJlbmRlcih7dHJhbnNpdGlvbjogdHJhbnNpdGlvbn0pO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cblx0XHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLmJsb2c7XG5cdFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOnByb2plY3RzJyAsZnVuY3Rpb24oc2x1Zyl7XG5cblx0XHRcdGlmICghY29udGV4dC52aWV3cy5wcm9qZWN0cy5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLnByb2plY3RzID0gbmV3IGNvbnRleHQudmlld3MucHJvamVjdHMoe1xuXHQgIFx0XHRcdHNsdWc6IHNsdWcsXG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5wcm9qZWN0XG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9ICh0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9PT0gY29udGV4dC52aWV3cy5wcm9qZWN0cyk7XG5cblx0XHRcdGlmICghc2x1Zykge1xuXG5cdFx0XHRcdHNsdWcgPSBjb250ZXh0LnZpZXdzLnByb2plY3RzLmRlZmF1bHRTbHVnKCk7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGUoY29udGV4dC52aWV3cy5wcm9qZWN0cy5kZWZhdWx0Um91dGUoKSk7XG4gIFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMucmVuZGVyKHtzbHVnOiBzbHVnfSk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRpZiAoY29udGV4dC52aWV3cy5wcm9qZWN0cy5jaGVja1NsdWcoc2x1ZykpIHtcbiAgXHRcdFx0XHRjb250ZXh0LnZpZXdzLnByb2plY3RzLnJlbmRlcih7c2x1Zzogc2x1ZywgdHJhbnNpdGlvbjogdHJhbnNpdGlvbn0pO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMucmVuZGVyKHt0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MucHJvamVjdHM7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmNvbnRhY3QnICxmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmNvbnRhY3QuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5jb250YWN0ID0gbmV3IGNvbnRleHQudmlld3MuY29udGFjdCh7XG5cdCAgXHRcdFx0bW9kZWw6IHt9LFxuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXMuY29udGFjdFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5jb250YWN0LnJlbmRlcigpO1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuY29udGFjdDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6YWJvdXQnICxmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmFib3V0LmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MuYWJvdXQgPSBuZXcgY29udGV4dC52aWV3cy5hYm91dCh7XG5cdCAgXHRcdFx0bW9kZWw6IHt9LFxuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXMuYWJvdXRcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuYWJvdXQucmVuZGVyKCk7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5hYm91dDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6ZGVmYXVsdFJvdXRlJywgZnVuY3Rpb24oKXtcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG5cblx0fSxcblx0Z29Ub0N1cnJlbnRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSh0aGlzLmN1cnJlbnRDb250ZW50Um91dGUpO1xuXHR9LFxuXHRnb1RvUHJldkNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zb2xlLmxvZygnZ29Ub1ByZXZDb250ZW50Jyk7XG5cdFx0aWYgKCFfLmlzRnVuY3Rpb24odGhpcy5jdXJyZW50Q29udGVudFZpZXcuZ2V0UHJldk1vZGVsKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHQvLyB2YXIgcm91dGUgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5uYW1lc3BhY2U7XG5cdFx0dmFyIHJvdXRlID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcucHJldlJvdXRlKCk7XG5cdFx0Y29uc29sZS5sb2coJ3JvdXRlJywgcm91dGUpO1xuXHRcdC8vIHZhciBzbHVnID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcuZ2V0UHJldk1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdFx0Ly8gdGhpcy50cmlnZ2VyKCdyb3V0ZTonICsgcm91dGUsIHNsdWcsIHt0cmFuc2l0aW9uOiAncHJldid9KTtcblx0XHR0aGlzLm5hdmlnYXRlKHJvdXRlKTtcblxuXHRcdC8vIHJldHVybiB7c2x1Zzogc2x1Zywgcm91dGU6ICdyb3V0ZTonKyByb3V0ZSwgdjogdGhpcy5jdXJyZW50Q29udGVudFZpZXd9O1xuXHR9LFxuXHRnb1RvTmV4dENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXROZXh0TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdC8vIHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3Lm5hbWVzcGFjZTtcblx0XHR2YXIgcm91dGUgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5uZXh0Um91dGUoKTtcblx0XHQvLyB2YXIgc2x1ZyA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3LmdldE5leHRNb2RlbCgpLmdldCgnc2x1ZycpO1xuXHRcdC8vIHRoaXMudHJpZ2dlcigncm91dGU6JyArIHJvdXRlLCBzbHVnLCB7dHJhbnNpdGlvbjogJ25leHQnfSk7XG5cdFx0Ly8gY29uc29sZS5sb2cocm91dGUpO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXG5cdFx0Ly8gcmV0dXJuIHtzbHVnOiBzbHVnLCByb3V0ZTogJ3JvdXRlOicrIHJvdXRlLCB2OiB0aGlzLmN1cnJlbnRDb250ZW50Vmlld307XG5cdH0sXG5cdGRlZmF1bHRDb250ZW50Um91dGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJyMvYWJvdXQnO1xuXHR9LFxuXHRyZWRpcmVjdDogZnVuY3Rpb24ocm91dGUpe1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFJvdXRlcjsiLCJ2YXIgZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7IFxuXG4gdmFyIEhhbmRsZWJhcnMgPSB3aW5kb3cuSGFuZGxlYmFyczsgXG5cbnRoaXNbXCJKU1RcIl0gPSB0aGlzW1wiSlNUXCJdIHx8IHt9O1xuXG50aGlzW1wiSlNUXCJdW1wiYWJvdXRcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBhYm91dFxcXCI+XFxuXHQ8aDI+YWJvdXQ8L2gyPlxcbjwvZGl2PlwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImJsb2ctcG9zdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIjxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG5cdFxcblx0PGgyIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXG5cdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0PGRpdiBjbGFzcz1cXFwic21hbGwtMTJcXFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFxcblx0XHRcdFx0XCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29udGVudCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJjb250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdDwvZGl2Plxcblx0XFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImNvbnRhY3RcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBhYm91dFxcXCI+XFxuXHQ8aDI+Y29udGFjdDwvaDI+XFxuPC9kaXY+XCI7XG4gIH0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiaW50cm9cIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCJcXG48aDE+SGkhIEknbSBTcGVuIFRheWxvcjwvaDE+XFxuXFxuPHA+SGVyZSB5b3UgY2FuIGZpbmQgb3V0IG1vcmUgPGEgaHJlZj1cXFwiIy9hYm91dFxcXCIgY2xhc3M9XFxcImFib3V0XFxcIj5hYm91dDwvYT4gbWUsPGJyPiByZWFkIG15IDxhIGhyZWY9XFxcIiMvYmxvZ1xcXCIgY2xhc3M9XFxcImJsb2dcXFwiPmJsb2cgcG9zdHM8L2E+PGJyPiBvciBjaGVjayBvdXQgc29tZSBvZiBteSA8YSBocmVmPVxcXCIjL3Byb2plY3RzXFxcIiBjbGFzcz1cXFwicHJvamVjdHNcXFwiPnByb2plY3RzPC9hPi48YnI+IE9oIGFuZCBmZWVsIGZyZWUgdG8gPGEgaHJlZj1cXFwiIy9jb250YWN0XFxcIiBjbGFzcz1cXFwiY29udGFjdFxcXCI+Z2V0IGluIHRvdWNoITwvYT5cXG48L3A+XCI7XG4gIH0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wibWFzdGVyXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiIDxkaXYgY2xhc3M9XFxcInBhZ2Utd3JhcCBcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnN0YXRlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zdGF0ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJzdGF0ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcblx0PGRpdiBjbGFzcz1cXFwibGFuZGluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNlbGxcXFwiPlxcbiAgXHRcdDxkaXYgY2xhc3M9XFxcImxhbmRpbmctY29udGVudFxcXCIgaWQ9XFxcImxhbmRpbmdcXFwiPlxcbiAgICAgICAgXCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW50cm9Db250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pbnRyb0NvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaW50cm9Db250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIlxcbiAgXHRcdDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cdDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudC13cmFwcGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG5cXG4gICAgPC9kaXY+ICAgIFx0IFxcbiAgXHQ8ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIiBpZD1cXFwibWFpblxcXCI+XCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubWFpbkNvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1haW5Db250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcIm1haW5Db250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIjwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQgdHJhbnNpdGlvbmVyXFxcIj48L2Rpdj5cXG4gIFx0PC9kaXY+XFxuXFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wicHJvamVjdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIjxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG5cdFxcblx0PGgyIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXG5cdDx1bD48L3VsPlxcblx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1yb3dcXFwiPlxcblx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XFxuXHRcdFx0XHRcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0PC9kaXY+XFxuXHRcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1widWkvaGVhZGVyXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnByZXZMaW5rIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wcmV2TGluayA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJwcmV2TGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJnby1wcmV2XFxcIiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCIgY2xhc3M9XFxcImdvLXByZXYgaGlkZVxcXCJcIjtcbiAgfSxcIjVcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubmV4dExpbmsgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5leHRMaW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcIm5leHRMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImdvLW5leHRcXFwiIFwiO1xufSxcIjdcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIiBjbGFzcz1cXFwiZ28tbmV4dCBoaWRlXFxcIlwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwibGFuZGluZy1mb290ZXItY29udGVudFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJpY29uIG1lbnVcXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duIGZhLTJ4IHNob3ctY29udGVudFxcXCI+PC9pPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWNvbnRlbnRcXFwiPlxcbiAgICA8YSBcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnByZXZMaW5rIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSgzLCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgICBcXG4gICAgPGEgaHJlZj1cXFwiI1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbiBtZW51XFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzIGZhLTJ4IHNob3ctaW50cm9cXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgXFxuICAgIDxhIFwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oNSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDcsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgXFxuPC9kaXY+XFxuPGRpdj48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuIHJldHVybiB0aGlzWydKU1QnXTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0czsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnYWJvdXQnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblxuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXIgYWJvdXQnKTtcblxuXHRcdFxuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcdFxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXJ0aWNsZVN0dWJzID0gcmVxdWlyZSgnLi4vYmxvZy1wb3N0LXN0dWJzLmpzJyk7XG52YXIgQXJ0aWNsZUNvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnYmxvZycsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uID0gbmV3IEFydGljbGVDb2xsZWN0aW9uKCk7XG5cdFx0Ly8gY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cblx0XHRpZiAoZmFsc2UpIHtcblx0XHRcdGNvbGxlY3Rpb24uZmV0Y2goe1xuICBcdFx0XHRyZW1vdmU6IGZhbHNlLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzdG9wTG9hZGluZ0luZGljYXRvcnMnKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnN0b3BMb2FkaW5nSW5kaWNhdG9ycycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZGRTdHVicygpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5ibG9nQyA9IGNvbGxlY3Rpb247XG5cblx0XHRjb25zb2xlLmxvZyh7Y29sbGVjdGlvbjogY29sbGVjdGlvbn0pO1xuXHRcdFxuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXG5cblx0XHRpZiAoIXRoaXMuY2hlY2tTbHVnKG9wdGlvbnMuc2x1ZykpIHtcblx0XHRcdHZhciBsYXRlc3QgPSBjb2xsZWN0aW9uLmZpcnN0KCk7XG5cblx0XHRcdHRoaXMuY3VycmVudFJlY29yZCA9IGxhdGVzdDtcblx0XHRcdHRoaXMucG9zaXRpb24gPSAwO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMuY3VycmVudFJlY29yZCA9IGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IGNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1x0XHRcdFxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdHJpbmdUb1JlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSh0aGlzLmN1cnJlbnRSZWNvcmQuYXR0cmlidXRlcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiB0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSB0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XG5cdFx0fVxuXHRcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicsIHtsaW5rOiB0aGlzLnByZXZSb3V0ZSgpfSk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnLCB7bGluazogdGhpcy5uZXh0Um91dGUoKX0pO1xuXHRcdGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd0cmFuc2l0aW9uOnJlbmRlcicsIHRoaXMuc3RyaW5nVG9SZW5kZXIoKSApO1x0XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGVsLmh0bWwodGhpcy5zdHJpbmdUb1JlbmRlcigpKTtcdFxuXHRcdH1cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLm5hbWVzcGFjZSApO1x0XG5cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9LFxuXHRhZGRTdHViczogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgaSxyZXNwb25zZSA9IGFydGljbGVTdHVicztcblx0XHRmb3IgKGkgPSByZXNwb25zZS5wb3N0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIHJlY29yZCA9IHJlc3BvbnNlLnBvc3RzW2ldO1xuXHRcdFx0aWYgKCFjb2xsZWN0aW9uLndoZXJlKHtJRDogcmVjb3JkLklEfSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbGxlY3Rpb24uYWRkKHJlY29yZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRnZXROZXh0TW9kZWw6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uYXQoKHRoaXMucG9zaXRpb24gKzEgPiBjb2xsZWN0aW9uLmxlbmd0aCAtMSk/ICBmYWxzZSA6IHRoaXMucG9zaXRpb24gKyAxKTtcblx0fSxcblx0Z2V0UHJldk1vZGVsOiBmdW5jdGlvbigpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmF0KCh0aGlzLnBvc2l0aW9uIC0xIDwgMCkgPyBmYWxzZSA6IHRoaXMucG9zaXRpb24gLSAxKTtcblx0fSxcblx0bmV4dFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2RlbCA9IHRoaXMuZ2V0TmV4dE1vZGVsKCk7XG5cdFx0cmV0dXJuIG1vZGVsPyAnIy8nKyB0aGlzLm5hbWVzcGFjZSArJy8nICsgbW9kZWwuZ2V0KCdzbHVnJykgOiBmYWxzZTtcblx0fSxcblx0cHJldlJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2RlbCA9IHRoaXMuZ2V0UHJldk1vZGVsKCk7XG5cdFx0cmV0dXJuIG1vZGVsPyAnIy8nKyB0aGlzLm5hbWVzcGFjZSArJy8nICsgbW9kZWwuZ2V0KCdzbHVnJykgOiBmYWxzZTtcblx0fSxcblx0Y2hlY2tTbHVnOiBmdW5jdGlvbihzbHVnKXtcblx0XHRyZXR1cm4gKHRoaXMuY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogc2x1Z30pLmxlbmd0aCA+PSAxKTtcblx0fSxcblx0ZGVmYXVsdFNsdWc6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFJlY29yZCA/IHRoaXMuY3VycmVudFJlY29yZC5nZXQoJ3NsdWcnKSA6IHRoaXMuY29sbGVjdGlvbi5maXJzdCgpLmdldCgnc2x1ZycpO1xuXHR9LFxuXHRkZWZhdWx0Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuICcvYmxvZy8nICsgdGhpcy5kZWZhdWx0U2x1ZygpO1xuXHR9XG59KTtcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnY29udGFjdCcsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdpbnRybycsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHRcdHRoaXMucmVuZGVyKG9wdGlvbnMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgaW50cm8nKTtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UpO1xuXG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vdGVtcGxhdGVzLmpzJyk7XG52YXIgaGVhZGVyVmlldyA9IHJlcXVpcmUoJy4vdWkvaGVhZGVyLmpzJyk7XG52YXIgdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL3BhZ2UtdHJhbnNpdGlvbnMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJ2h0bWwnLFxuXHRjb250ZW50RWw6ICcubWFpbiAuY29udGVudCcsXG5cdHRyYW5zaXRpb25FbDogJy5tYWluIC50cmFuc2l0aW9uLWNvbnRlbnQnLFxuXHRoZWFkZXI6ICcuaGVhZGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oKXtcblxuXHRcdHZhciBzdGF0ZSA9ICh3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPj0gMSkgPyAnY29udGVudCcgOiAnaW50cm8nO1xuXHRcdHRoaXMucmVuZGVyKHtcblx0XHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRcdGludHJvQ29udGVudDogdGVtcGxhdGVzLmludHJvKClcblx0XHR9KTtcblxuXHRcdHRoaXMudHJhbnNpdGlvbnMgPSBuZXcgdHJhbnNpdGlvbnMoe1xuXHRcdFx0Y29udGFpbmVyOiAnLnBhZ2Utd3JhcCAubWFpbicsXG5cdFx0XHRjb250ZW50OiAnLmNvbnRlbnQnLFxuXHRcdFx0dHJhbnNpdGlvbkNsYXNzOiAnLnRyYW5zaXRpb25lcidcblx0XHR9KTtcblxuXHRcdC8vIHRyYW5zaXRpb25zLmluaXRpYWxpemUoe1xuXHRcdC8vIFx0ZWw6ICcucGFnZS13cmFwIC5tYWluJyxcblx0XHQvLyBcdG1haW46ICcuY29udGVudCcsXG5cdFx0Ly8gXHR0cmFuc2l0aW9uZXI6ICcudHJhbnNpdGlvbi1jb250ZW50J1xuXHRcdC8vIH0pO1xuXG5cdFx0dGhpcy4kaGVhZGVyID0gJCh0aGlzLmhlYWRlcik7XG5cdFx0dGhpcy5oZWFkZXJWaWV3ID0gbmV3IGhlYWRlclZpZXcoe3RlbXBsYXRlOiB0ZW1wbGF0ZXNbJ3VpL2hlYWRlciddfSk7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cdGV2ZW50czoge1xuXHRcdCdjbGljayAuc2hvdy1jb250ZW50JzogJ2dvVG9DdXJyZW50Q29udGVudCcsXG5cdFx0J2NsaWNrIC5nby1wcmV2JzogJ3ByZXZDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLW5leHQnOiAnbmV4dENvbnRlbnQnXG5cdFx0Ly8gJ2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgXHQkKCdib2R5JykuaHRtbCh0ZW1wbGF0ZXMubWFzdGVyKG9wdGlvbnMpKTtcbiAgfSxcbiAgc2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnY29udGVudCcpLnJlbW92ZUNsYXNzKCdpbnRybycpO1xuXHR9LFxuXHRzaG93SW50cm86IGZ1bmN0aW9uKCkge1xuXHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnaW50cm8nKS5yZW1vdmVDbGFzcygnY29udGVudCcpO1xuXHR9LFxuXHRzZXROYW1lc3BhY2U6IGZ1bmN0aW9uKG5hbWVzcGFjZSkge1x0XG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAkLnRyaW0oXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbihjKSB7IFxuXHRcdFx0XHRyZXR1cm4gYy5sYXN0SW5kZXhPZigncGFnZS0nLCAwKSAhPT0gMDsgXG5cdFx0XHR9KS5qb2luKCcgJykgKyAnIHBhZ2UtJyArbmFtZXNwYWNlICk7XG5cdH0sXG5cdG5leHRDb250ZW50OiBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5kaXJlY3Rpb24gPSAnbmV4dCc7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpuZXh0Q29udGVudCcpO1xuXHR9LFxuXHRwcmV2Q29udGVudDogZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudHJhbnNpdGlvbnMuZGlyZWN0aW9uID0gJ3ByZXYnO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6cHJldkNvbnRlbnQnKTtcblx0fSxcbiAgZ29Ub0N1cnJlbnRDb250ZW50OiBmdW5jdGlvbigpe1xuICBcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6Z29Ub0N1cnJlbnRDb250ZW50Jyk7XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHR2YXIgdGhpc18gPSB0aGlzO1xuXHRcdCQod2luZG93KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKXtcblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDExOSkge1xuXHRcdFx0XHR0aGlzXy50cmFuc2l0aW9ucy5uZXh0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTEzKSB7XG5cdFx0XHRcdHRoaXNfLnRyYW5zaXRpb25zLnByZXYoKTtcdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dmFyIHRyYW5zaXRpb25zID0gdGhpcy50cmFuc2l0aW9ucztcblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZW50KXt0cmFuc2l0aW9ucy5yZW5kZXIoY29udGVudCk7fVxuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93Q29udGVudCcsIHRoaXMuc2hvd0NvbnRlbnQpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6c2hvd0ludHJvJywgdGhpcy5zaG93SW50cm8pO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLnNldE5hbWVzcGFjZSk7XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3RyYW5zaXRpb246cmVuZGVyJywgcmVuZGVyKTtcblxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwcm9qZWN0U3R1YnMgPSByZXF1aXJlKCcuLi9wcm9qZWN0cy1zdHVicy5qcycpO1xudmFyIFByb2plY3RDb2xsZWN0aW9uID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbnMvcHJvamVjdHMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1x0XG5cdG5hbWVzcGFjZTogJ3Byb2plY3RzJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgUHJvamVjdENvbGxlY3Rpb24oKTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuXHRcdHRoaXMuYWRkU3R1YnMoKTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblxuXG5cdFx0aWYgKCF0aGlzLmNoZWNrU2x1ZyhvcHRpb25zLnNsdWcpKSB7XG5cdFx0XHR2YXIgbGF0ZXN0ID0gY29sbGVjdGlvbi5maXJzdCgpO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSBsYXRlc3Q7XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gMDtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSBjb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSBjb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jdXJyZW50UmVjb3JkKTtcdFx0XHRcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c3RyaW5nVG9SZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUodGhpcy5jdXJyZW50UmVjb3JkLmF0dHJpYnV0ZXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXG5cdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiB0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSB0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XG5cdFx0fVxuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnLCB7bGluazogdGhpcy5wcmV2Um91dGUoKX0pO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHRoaXMubmV4dFJvdXRlKCl9KTtcblxuXHRcdGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd0cmFuc2l0aW9uOnJlbmRlcicsIHRoaXMuc3RyaW5nVG9SZW5kZXIoKSApO1x0XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGVsLmh0bWwodGhpcy5zdHJpbmdUb1JlbmRlcigpKTtcdFxuXHRcdH1cblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fSxcblx0YWRkU3R1YnM6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0dmFyIGkscmVzcG9uc2UgPSBwcm9qZWN0U3R1YnM7XG5cdFx0Zm9yIChpID0gcmVzcG9uc2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdHZhciByZWNvcmQgPSByZXNwb25zZVtpXTtcblx0XHRcdGlmICghY29sbGVjdGlvbi53aGVyZSh7SUQ6IHJlY29yZC5JRH0pLmxlbmd0aCkge1xuXHRcdFx0XHRjb2xsZWN0aW9uLmFkZChyZWNvcmQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRnZXROZXh0TW9kZWw6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uYXQoKHRoaXMucG9zaXRpb24gKzEgPiBjb2xsZWN0aW9uLmxlbmd0aCAtMSk/ICBmYWxzZSA6IHRoaXMucG9zaXRpb24gKyAxKTtcblx0fSxcblx0Z2V0UHJldk1vZGVsOiBmdW5jdGlvbigpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmF0KCh0aGlzLnBvc2l0aW9uIC0xIDwgMCkgPyBmYWxzZSA6IHRoaXMucG9zaXRpb24gLSAxKTtcblx0fSxcblx0bmV4dFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2RlbCA9IHRoaXMuZ2V0TmV4dE1vZGVsKCk7XG5cdFx0cmV0dXJuIG1vZGVsPyAnIy8nKyB0aGlzLm5hbWVzcGFjZSArJy8nICsgbW9kZWwuZ2V0KCdzbHVnJykgOiBmYWxzZTtcblx0fSxcblx0cHJldlJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2RlbCA9IHRoaXMuZ2V0UHJldk1vZGVsKCk7XG5cdFx0cmV0dXJuIG1vZGVsPyAnIy8nKyB0aGlzLm5hbWVzcGFjZSArJy8nICsgbW9kZWwuZ2V0KCdzbHVnJykgOiBmYWxzZTtcblx0fSxcblx0Y2hlY2tTbHVnOiBmdW5jdGlvbihzbHVnKXtcblx0XHRyZXR1cm4gKHRoaXMuY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogc2x1Z30pLmxlbmd0aCA+PSAxKTtcblx0fSxcblx0ZGVmYXVsdFNsdWc6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFJlY29yZCA/IHRoaXMuY3VycmVudFJlY29yZC5nZXQoJ3NsdWcnKSA6IHRoaXMuY29sbGVjdGlvbi5maXJzdCgpLmdldCgnc2x1ZycpO1xuXHR9LFxuXHRkZWZhdWx0Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuICcvcHJvamVjdHMvJyArIHRoaXMuZGVmYXVsdFNsdWcoKTtcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGVsOiAnLmhlYWRlcicsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHRcdHRoaXMucmVuZGVyKHt9KTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyIHJlbmRlcmVkJyk7XG5cdH0sXG5cdGV2ZW50czoge1xuXHRcdCdjbGljayAuc2hvdy1jb250ZW50JzogJ3Nob3dDb250ZW50Jyxcblx0XHQnY2xpY2sgLnNob3ctaW50cm8nOiAnc2hvd0ludHJvJ1xuICB9LFxuICBzaG93Q29udGVudDogZnVuY3Rpb24oKXtcbiAgXHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcbiAgfSxcbiAgc2hvd0ludHJvOiBmdW5jdGlvbigpe1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93SW50cm8nKTtcbiAgfSxcbiAgdXBkYXRlVWlQcmV2OiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXHR2YXIgcHJldiA9ICcuZ28tcHJldic7XG4gIFx0dmFyICRwcmV2ID0gdGhpcy4kZWwuZmluZChwcmV2KTtcbiAgXHRpZiAob3B0aW9ucy5saW5rKSB7XG4gIFx0XHQkcHJldi5yZW1vdmVDbGFzcygnaGlkZScpLmF0dHIoJ2hyZWYnLCBvcHRpb25zLmxpbmspO1xuICBcdH0gZWxzZSB7XG4gIFx0XHQkcHJldi5hZGRDbGFzcygnaGlkZScpLmF0dHIoJ2hyZWYnLCAnIycpO1xuICBcdH1cbiAgfSxcbiAgdXBkYXRlVWlOZXh0OiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXHR2YXIgbmV4dCA9ICcuZ28tbmV4dCc7XG4gIFx0dmFyICRuZXh0ID0gdGhpcy4kZWwuZmluZChuZXh0KTtcbiAgXHRpZiAob3B0aW9ucy5saW5rKSB7XG4gIFx0XHQkbmV4dC5yZW1vdmVDbGFzcygnaGlkZScpLmF0dHIoJ2hyZWYnLCBvcHRpb25zLmxpbmspO1xuICBcdH0gZWxzZSB7XG4gIFx0XHQkbmV4dC5hZGRDbGFzcygnaGlkZScpLmF0dHIoJ2hyZWYnLCAnIycpO1xuICBcdH1cbiAgfSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6dXBkYXRlUHJldicsIHRoaXMudXBkYXRlVWlQcmV2KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnVwZGF0ZU5leHQnLCB0aGlzLnVwZGF0ZVVpTmV4dCk7XG5cdH1cbn0pOyJdfQ==
