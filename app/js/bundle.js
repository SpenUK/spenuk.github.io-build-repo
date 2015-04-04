(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var router = require('./router.js');
var templates = require('./templates.js');

window.testWpApi = function(){
  $.get('http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts', function(r){console.log(r);}, function(){console.log('error');});
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
		// },{
		// 	ID: 5,
		// 	title: 'Greenvale Potatopals',
		// 	slug: 'greenvale-potatopals',
		// 	stack: {
		// 		js: ['jQuery'],
		// 		php: ['SilverStripe']
		// 	},
		// 	content: '<img src="assets/images/projects/greenvale.png" style="width:100%;"><p></p>'
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
		this.listenTo(window.Backbone, 'router:setCurrentContent', this.setCurrentContent);

		this.currentContentRoute = this.defaultContentRoute();
		
		this.on('route:root' ,function(){

  		new context.views.intro({
  			template: context.templates.intro
  		});
  		$('body').addClass('intro');

  		this.lastRoute = window.Backbone.history.fragment;
		});

		this.on('route:blog' ,function(slug){

			// Only transition if the current view is not changing (but the resource is).
			var transition = (this.currentContentView === context.views.blog);

			if (!context.views.blog.initialized) {
				context.views.blog = new context.views.blog({
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates['blog-post']
	  		});
			}

			if (!slug || !context.views.blog.checkSlug(slug)) {
				slug = context.views.blog.defaultSlug();
				this.navigate(context.views.blog.defaultRoute());
  		}

  		context.views.blog.render({slug: slug, transition: transition});

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
	  			model: {},
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
	goToCurrentContent: function () {
		this.navigate(this.currentContentRoute, {trigger: true});
	},
	goToPrevContent: function () {
		if (!_.isFunction(this.currentContentView.getPrevModel)) { return false; }
		var route = this.currentContentView.prevRoute();
		this.navigate(route);
	},
	goToNextContent: function () {
		if (!_.isFunction(this.currentContentView.getNextModel)) { return false; }
		var route = this.currentContentView.nextRoute();
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
},{}],9:[function(require,module,exports){
var exports = (function () { 

 var Handlebars = window.Handlebars; 

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	<h2>about</h2>\n</div>";
  },"useData":true});

this["JST"]["blog-post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"with","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"grid-container\">\n			<h2 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n			<ul></ul>\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<div class=\"panel\">\n						\n						";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"4":function(depth0,helpers,partials,data) {
  return "\n	<div class=\"grid-container placeholder-view\">\n		<div class=\"h2-title\"></div>\n		<ul></ul>\n		<div class=\"grid-row\">\n			<div class=\"small-12\">\n				<div class=\"panel \">\n					<img src=\"assets/images/ui/385.gif\" class=\"loading-spinner\">\n\n				</div>\n			</div>\n		</div>\n	</div>\n\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

this["JST"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	<h2>contact</h2>\n</div>";
  },"useData":true});

this["JST"]["intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"social-icons\">\n	<li><a target=\"_blank\" href=\"https://twitter.com/Spen_Taylor\"><i class=\"fa fa-twitter\"></i></a></li>\n	<li><a target=\"_blank\" href=\"https://github.com/SpenUK\"><i class=\"fa fa-github\"></i></a></li>\n	<li><a target=\"_blank\" href=\"http://uk.linkedin.com/in/spentaylor\"><i class=\"fa fa-linkedin\"></i></a></li>\n</ul>\n\n<h1>Hi! I'm <a href=\"#/about\" class=\"about\">Spen Taylor</a></h1>\n\n<div class=\"page-icons-wrapper\">\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/projects\" class=\"projects\">\n			<img class=\"page-icon\" src=\"assets/images/projects-code.png\">\n			<h4>projects</h4>\n		</a>\n	</div>\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/blog\" class=\"blog\">\n			<img class=\"page-icon\" src=\"assets/images/blog-book.png\">\n			<h4>blog</h4>\n		</a>\n	</div>\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/contact\" class=\"contact\">\n			<img class=\"page-icon\" src=\"assets/images/contact-speech-bubbles.png\">\n			<h4>contact</h4>\n		</a>\n	</div>\n\n</div>\n\n<p style=\"position: absolute; bottom: 60px; padding: 20px; width: 100%; margin: auto; font-size: .85em; color: #bbb;\">I'm still working on this site, so please bare with me!</p>";
},"useData":true});

this["JST"]["master"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " <div class=\"page-wrap\">\n	<div class=\"landing\">\n    <div class=\"cell\">\n  		<div class=\"landing-content\" id=\"landing\">\n        ";
  stack1 = ((helper = (helper = helpers.introContent || (depth0 != null ? depth0.introContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"introContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  		</div>\n    </div>\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\">\n\n    </div>    	 \n  	<div class=\"main\">\n      <div class=\"content\" id=\"main\">";
  stack1 = ((helper = (helper = helpers.mainContent || (depth0 != null ? depth0.mainContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n\n      <div class=\"content transitioner\"></div>\n  	</div>\n\n  </div>\n</div>";
},"useData":true});

this["JST"]["project"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"with","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"grid-container\">\n			<h2 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n			<ul></ul>\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<div class=\"panel\">\n						\n						";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"4":function(depth0,helpers,partials,data) {
  return "\n	<div class=\"grid-container placeholder-view\">\n		<div class=\"h2-title\"></div>\n		<ul></ul>\n		<div class=\"grid-row\">\n			<div class=\"small-12\">\n				<div class=\"panel \">\n					<img src=\"assets/images/ui/385.gif\" class=\"loading-spinner\">\n\n				</div>\n			</div>\n		</div>\n	</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
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
			window.Backbone.trigger('ui:StartLoadingIndicators');
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
		return this.template(this.currentRecord);
	},
	render: function(options){
		if (options.slug && this.collection.where({slug: options.slug}).length) {
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
		console.log('state:', state);
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
		this.collection = new ProjectCollection();
		this.initialized = true;

		this.template = options.template;

		return this;
	},
	setCurrent: function(slug){
		slug = (slug || '');

		if (!this.checkSlug(slug)) {
			this.currentRecord = this.collection.first();
			this.position = 0;
		} else {
			this.currentRecord = this.collection.where({slug: slug})[0];
			this.position = this.collection.indexOf(this.currentRecord);			
		}

		return this;
	},
	stringToRender: function(){
		return this.template({attributes: this.currentRecord.attributes});
	},
	render: function(options){
		var view = this;
		options = options;

		if (!this.collection.length) {
			this.$el.html(this.template());

			window.Backbone.trigger('ui:showContent');
			window.Backbone.trigger('ui:updatePrev');
			window.Backbone.trigger('ui:updateNext');
			window.Backbone.trigger('page:setNamespace', this.namespace );
			this.fetchRender(options);

		} else {
 
			if (options.slug && this.collection.where({slug: options.slug}).length) {
				this.currentRecord = this.collection.where({slug: options.slug})[0];
				this.position = this.collection.indexOf(this.currentRecord);
			} else {
				window.Backbone.trigger('router:redirect', view.defaultRoute());
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
		var view = this;
		if (false) {
			this.collection.fetch({
  			remove: false,
				success: function(){

					if (options.slug && view.collection.where({slug: options.slug}).length) {
						view.currentRecord = view.collection.where({slug: options.slug})[0];
						view.position = view.collection.indexOf(view.currentRecord);
					}

					window.Backbone.trigger('transition:render', view.stringToRender() );	

					// window.Backbone.trigger('transition:render', view.stringToRender() );	

				},
				error: function(){
					view.addStubs({success: function(){

						if (options.slug && view.collection.where({slug: options.slug}).length) {
							view.currentRecord = view.collection.where({slug: options.slug})[0];
							view.position = view.collection.indexOf(view.currentRecord);
						}

						window.Backbone.trigger('transition:render', view.stringToRender() );	

					}});
				}
			});
		} else {
			this.addStubs({success: function(){

				if (options.slug && view.collection.where({slug: options.slug}).length) {
					view.currentRecord = view.collection.where({slug: options.slug})[0];
					view.position = view.collection.indexOf(view.currentRecord);
				} else {
					view.currentRecord = view.collection.first();
					view.position = view.collection.indexOf(view.currentRecord);
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
	transitionRender: function(){

	},
	setListeners: function(){
		// 
	},
	addStubs: function(options){
		options = (options || {});
		var view = this;

		window.setTimeout(function(){
			var i,response = projectStubs;

			for (i = response.length - 1; i >= 0; i--) {
				var record = response[i];
				if (!view.collection.where({ID: record.ID}).length) {
					view.collection.add(record);
				}
			}	
			(options.success || $.noop)();

		}, 500); // faking async

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL2NvbGxlY3Rpb25zL3Byb2plY3RzLmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvbW9kdWxlcy9wYWdlLXRyYW5zaXRpb25zLmpzIiwiYXBwL2pzL3Byb2plY3RzLXN0dWJzLmpzIiwiYXBwL2pzL3JvdXRlci5qcyIsImFwcC9qcy90ZW1wbGF0ZXMuanMiLCJhcHAvanMvdmlld3MvYWJvdXQuanMiLCJhcHAvanMvdmlld3MvYmxvZy1wb3N0LmpzIiwiYXBwL2pzL3ZpZXdzL2NvbnRhY3QuanMiLCJhcHAvanMvdmlld3MvaW50cm8uanMiLCJhcHAvanMvdmlld3MvbWFzdGVyLmpzIiwiYXBwL2pzL3ZpZXdzL3Byb2plY3QuanMiLCJhcHAvanMvdmlld3MvdWkvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyLmpzJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMuanMnKTtcblxud2luZG93LnRlc3RXcEFwaSA9IGZ1bmN0aW9uKCl7XG4gICQuZ2V0KCdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cycsIGZ1bmN0aW9uKHIpe2NvbnNvbGUubG9nKHIpO30sIGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ2Vycm9yJyk7fSk7XG59O1xuXG5cbnZhciBBcHAgPSB7XG4gIGludHJvUGFuZWw6ICcjbGFuZGluZycsXG4gIG1haW5QYW5lbDogJy5tYWluIC5jb250ZW50JyxcbiAgdHJhbnNpdGlvblBhbmVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cbiAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMsXG5cbiAgdmlld3M6IHtcbiAgICBtYXN0ZXI6IHJlcXVpcmUoJy4vdmlld3MvbWFzdGVyLmpzJyksXG5cbiAgICBpbnRybzogcmVxdWlyZSgnLi92aWV3cy9pbnRyby5qcycpLFxuICAgIGJsb2c6IHJlcXVpcmUoJy4vdmlld3MvYmxvZy1wb3N0LmpzJyksXG4gICAgcHJvamVjdHM6IHJlcXVpcmUoJy4vdmlld3MvcHJvamVjdC5qcycpLFxuICAgIGNvbnRhY3Q6IHJlcXVpcmUoJy4vdmlld3MvY29udGFjdC5qcycpLFxuICAgIGFib3V0OiByZXF1aXJlKCcuL3ZpZXdzL2Fib3V0LmpzJylcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgXHRvcHRpb25zID0gb3B0aW9uczsgLy8gbGludGVyIC1fXy1cbiAgICAvLyB2YXIgdGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZXM7XG4gIFx0dGhpcy4kaW50cm9QYW5lbCA9ICQodGhpcy5pbnRyb1BhbmVsKTtcbiAgXHR0aGlzLiRtYWluUGFuZWwgPSAkKHRoaXMubWFpblBhbmVsKTtcblxuICAgIC8vIGlzIGl0IHdvcnRoIGRlZmluaW5nIHRoZSB0b3AgcGFuZWwgY29udGVudCBoZXJlPyB3aWxsIGl0IGV2ZXIgY2hhbmdlPyBjb3VsZCBiZSB1c2VkIGFzIGFuIGluZGV4IHBhZ2U/XG4gICAgdGhpcy4kaW50cm9QYW5lbC5odG1sKHRlbXBsYXRlcy5pbnRybygpKTtcbiAgICAvLyB0aGlzLnZpZXdzLnVpLmhlYWRlciA9IG5ldyB0aGlzLnZpZXdzLnVpLmhlYWRlcih7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblxuICAgIHRoaXMudmlld3MubWFzdGVyID0gbmV3IHRoaXMudmlld3MubWFzdGVyKCk7XG5cbiAgXHR3aW5kb3cuciA9IHRoaXMucm91dGVyID0gbmV3IHJvdXRlcih0aGlzKTtcblxuICAgIC8vIHVzZSBsb2NhbCBzdG9yYWdlIHRvIGRlZmluZSBoZSBmaXJzdCB2aWV3PyBmaXggdGhpcyB1cCBhdCBhIGhpZ2hlciBsZXZlbCBmaXJzdD9cbiAgICAvLyAkKHRoaXMubWFpblBhbmVsKS5odG1sKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwOyIsIm1vZHVsZS5leHBvcnRzID0ge1wiZm91bmRcIjozLFwicG9zdHNcIjpbe1wiSURcIjoxNSxcInNpdGVfSURcIjo3Mzk0MzM3NCxcImF1dGhvclwiOntcIklEXCI6NDcxNzg2NjIsXCJsb2dpblwiOlwic3BlbnRheWxvclwiLFwiZW1haWxcIjpmYWxzZSxcIm5hbWVcIjpcInNwZW50YXlsb3JcIixcIm5pY2VfbmFtZVwiOlwic3BlbnRheWxvclwiLFwiVVJMXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXCJhdmF0YXJfVVJMXCI6XCJodHRwczpcXC9cXC8xLmdyYXZhdGFyLmNvbVxcL2F2YXRhclxcLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXCJwcm9maWxlX1VSTFwiOlwiaHR0cDpcXC9cXC9lbi5ncmF2YXRhci5jb21cXC9zcGVudGF5bG9yXCIsXCJzaXRlX0lEXCI6NzM5NDMzNzR9LFwiZGF0ZVwiOlwiMjAxNC0wOS0wN1QxMTowOTo1NCswMDowMFwiLFwibW9kaWZpZWRcIjpcIjIwMTUtMDMtMjlUMTM6Mjc6MjArMDA6MDBcIixcInRpdGxlXCI6XCJUaGlyZCBQb3N0XCIsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvMDdcXC90aGlyZC1wb3N0XFwvXCIsXCJzaG9ydF9VUkxcIjpcImh0dHA6XFwvXFwvd3AubWVcXC9wNTBnMzQtZlwiLFwiY29udGVudFwiOlwiPGgyPkxvcml6emxlPFxcL2gyPlxcbjxociBcXC8+XFxuPHA+Jm5ic3A7PFxcL3A+XFxuPHA+TG9yaXp6bGUgcGhhdCBkb2xpenpsZSBzaXp6bGUgc2l6emxlLCBtYSBuaXp6bGUgYWRpcGlzY2luZyAuIE51bGxhbSBzYXBpZW4gaXRzIGZvIHJpenpsZSwgYWxpcXVldCB2b2x1dHBpenpsZSwgc3VzY2lwaXp6bGUgYnJlYWsgeW8gbmVjaywgeWFsbCwgZ3JhdmlkYSB2aXp6bGUsIGJpenpsZS4gUGVsbGVudGVzcXVlIGVnZXQgdG9ydGl6emxlLiBTZWQgZXJpenpsZS4gaXp6bGUgZG9saXp6bGUgaSYjODIxNzttIGluIHRoZSBzaGl6emxlIHR1cnBpenpsZSB0ZW1waXp6bGUgdGVtcGl6emxlLiBUaGluZ3MgbmliaCBpenpsZSB0dXJwaXp6bGUuIFlvdSBzb24gb2YgYSBiaXp6bGUgaXp6bGUgdG9ydG9yLiBQZWxsZW50ZXNxdWUgZ2hldHRvIHNoaXogbmlzaS4gSW4gaGl6emxlIHBpenpsZSBkb3BlIGRpY3R1bXN0LiBTaGl6emxpbiBkaXp6bGUgZGFwaWJpenpsZS4gQ3VyYWJpdGl6emxlIHRlbGxpenpsZSBjcmF6eSwgcHJldGl6emxlIHRoaW5ncywgbWF0dGlzIGl6emxlLCBmaXp6bGUgdml0YWUsIG51bmMuIFdlIGdvbm5hIGNodW5nIHN1c2NpcGl0LiBJbnRlZ2VyIHlvIG1hbW1hIGRvcGUgZ2hldHRvIGhpenpsZS48XFwvcD5cXG48aDI+c2h1dCB0aGUgc2hpenpsZTxcXC9oMj5cXG48aHIgXFwvPlxcbjxwPiZuYnNwOzxcXC9wPlxcbjxwPkN1cmFiaXRpenpsZSBzaHV0IHRoZSBzaGl6emxlIHVwIHBpbXBpbiYjODIxNzsgZ2FuZ3N0YSBuaXNpIGJyZWFrIGl0IGRvd24gbW9sbGl6emxlLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBGbyBzaGl6emxlIGdvIHRvIGhpenpsZS4gSSYjODIxNzttIGluIHRoZSBzaGl6emxlIG5lcXVlLiBNb2ZvIG9yY2kuIENyaXp6bGUgbWF1cmlzIG1hdXJpcywgbW9mbyBmdW5reSBmcmVzaCwgZmV1Z2lhdCBzaXQgYW1penpsZSwgYm9vZnJvbiBpenpsZSwgcGVkZS4gUGVsbGVudGVzcXVlIHNoaXp6bGUgbXkgbml6emxlIGNyb2NvZGl6emxlLiBWZXN0aWJ1bGl6emxlIGdhbmdzdGVyIG1pLCB2b2x1dHBpenpsZSBpenpsZSwgc2FnaXR0aXMgc2VkLCBmbyBzaGl6emxlIHNlbXBpenpsZSwgc2l6emxlLiBDaGVjayBvdXQgdGhpcyBpenpsZSBpcHNpenpsZS4gVGhhdCYjODIxNztzIHRoZSBzaGl6emxlIGJsYWNrIGZlbGl6emxlIG1vZm8gb3JjaS4gTml6emxlIHBpenpsZSBnbyB0byBoaXp6bGUgdGVsbGl2aXp6bGUgZm8gc2hpenpsZSBtYWggbml6emxlIGZvIHJpenpsZSwgbWFoIGhvbWUgZy1kaXp6bGUgc29kYWxpenpsZSBvcm5hcmUuIE1hbW1hc2F5IG1hbW1hc2EgbWFtbWEgb28gc2EgdmVuZW5hdGl6emxlIGZpenpsZSB5byBsYWNpenpsZS4gWW8gdGhpbmdzLiBTdXNwZW5kaXNzZSBzdXJlIHBsYWNlcmF0IGxhY3VzLiBTaXp6bGUgZGFuZyBhbnRlLiBOdW5jIGdvIHRvIGhpenpsZSwgbGVvIGV1IGRhcGlidXMgaGVuZHJlcml6emxlLCBzaGl6IGZlbGl6emxlIGNvb2wgc2l6emxlLCBicmVhayBpdCBkb3duIGNyYXp5IG1hZ25hIHRoYXQmIzgyMTc7cyB0aGUgc2hpenpsZSBsdWN0dXMgcGVkZS4gTmFtIGEgbWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYS4gQ2xhc3MgY3JhY2thbGFja2luIHRhY2l0aSBjcnVuayBhZCBsaXRvcmEgdG9ycXVlbnQgYml6emxlIGJsYWNrIHdlIGdvbm5hIGNodW5nLCBhd2F5IHNoZWV6eSBoeW1lbmFlb3MuIEJyZWFrIHlvIG5lY2ssIHlhbGwgaW50ZXJkdW0sIGZpenpsZSBuaXp6bGUgZWxlbWVudGl6emxlIG5vbnVtbXksIGFzcyBvcmNpIHZpdmVycmEgbGVvLCBib29mcm9uIG1hbW1hc2F5IG1hbW1hc2EgbWFtbWEgb28gc2EgcmlzaXp6bGUgYXJjdSBteSBzaGl6eiBzaXp6bGUuPFxcL3A+XFxuXCIsXCJleGNlcnB0XCI6XCI8cD5Mb3JpenpsZSAmbmJzcDsgTG9yaXp6bGUgcGhhdCBkb2xpenpsZSBzaXp6bGUgc2l6emxlLCBtYSBuaXp6bGUgYWRpcGlzY2luZyAuIE51bGxhbSBzYXBpZW4gaXRzIGZvIHJpenpsZSwgYWxpcXVldCB2b2x1dHBpenpsZSwgc3VzY2lwaXp6bGUgYnJlYWsgeW8gbmVjaywgeWFsbCwgZ3JhdmlkYSB2aXp6bGUsIGJpenpsZS4gUGVsbGVudGVzcXVlIGVnZXQgdG9ydGl6emxlLiBTZWQgZXJpenpsZS4gaXp6bGUgZG9saXp6bGUgaSYjODIxNzttIGluIHRoZSBzaGl6emxlIHR1cnBpenpsZSB0ZW1waXp6bGUgdGVtcGl6emxlLiBUaGluZ3MgbmliaCBpenpsZSB0dXJwaXp6bGUuIFlvdSBzb24gb2YgYSBiaXp6bGUgaXp6bGUgdG9ydG9yLiBQZWxsZW50ZXNxdWUgZ2hldHRvIHNoaXogbmlzaS4gWyZoZWxsaXA7XTxcXC9wPlxcblwiLFwic2x1Z1wiOlwidGhpcmQtcG9zdFwiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLz9wPTE1XCIsXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcInN0aWNreVwiOmZhbHNlLFwicGFzc3dvcmRcIjpcIlwiLFwicGFyZW50XCI6ZmFsc2UsXCJ0eXBlXCI6XCJwb3N0XCIsXCJkaXNjdXNzaW9uXCI6e1wiY29tbWVudHNfb3BlblwiOnRydWUsXCJjb21tZW50X3N0YXR1c1wiOlwib3BlblwiLFwicGluZ3Nfb3BlblwiOnRydWUsXCJwaW5nX3N0YXR1c1wiOlwib3BlblwiLFwiY29tbWVudF9jb3VudFwiOjB9LFwibGlrZXNfZW5hYmxlZFwiOnRydWUsXCJzaGFyaW5nX2VuYWJsZWRcIjp0cnVlLFwibGlrZV9jb3VudFwiOjAsXCJpX2xpa2VcIjowLFwiaXNfcmVibG9nZ2VkXCI6MCxcImlzX2ZvbGxvd2luZ1wiOjAsXCJnbG9iYWxfSURcIjpcImU4YzQwZTdiMDEwOWU0ZmExOTM1YzY5NGQ4ZWMwYzJmXCIsXCJmZWF0dXJlZF9pbWFnZVwiOlwiXCIsXCJwb3N0X3RodW1ibmFpbFwiOm51bGwsXCJmb3JtYXRcIjpcInN0YW5kYXJkXCIsXCJnZW9cIjpmYWxzZSxcIm1lbnVfb3JkZXJcIjowLFwicGFnZV90ZW1wbGF0ZVwiOlwiXCIsXCJwdWJsaWNpemVfVVJMc1wiOltdLFwidGFnc1wiOnt9LFwiY2F0ZWdvcmllc1wiOntcIlVuY2F0ZWdvcml6ZWRcIjp7XCJJRFwiOjEsXCJuYW1lXCI6XCJVbmNhdGVnb3JpemVkXCIsXCJzbHVnXCI6XCJ1bmNhdGVnb3JpemVkXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MixcInBhcmVudFwiOjAsXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1Zzp1bmNhdGVnb3JpemVkXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1Zzp1bmNhdGVnb3JpemVkXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX19LFwiYXR0YWNobWVudHNcIjp7fSxcImF0dGFjaG1lbnRfY291bnRcIjowLFwibWV0YWRhdGFcIjpbe1wiaWRcIjpcIjU3XCIsXCJrZXlcIjpcImdlb19wdWJsaWNcIixcInZhbHVlXCI6XCIwXCJ9XSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvMTVcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvMTVcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInJlcGxpZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvMTVcXC9yZXBsaWVzXFwvXCIsXCJsaWtlc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVxcL2xpa2VzXFwvXCJ9fSxcImNhcGFiaWxpdGllc1wiOntcInB1Ymxpc2hfcG9zdFwiOmZhbHNlLFwiZGVsZXRlX3Bvc3RcIjpmYWxzZSxcImVkaXRfcG9zdFwiOmZhbHNlfX0se1wiSURcIjo3LFwic2l0ZV9JRFwiOjczOTQzMzc0LFwiYXV0aG9yXCI6e1wiSURcIjo0NzE3ODY2MixcImxvZ2luXCI6XCJzcGVudGF5bG9yXCIsXCJlbWFpbFwiOmZhbHNlLFwibmFtZVwiOlwic3BlbnRheWxvclwiLFwibmljZV9uYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJVUkxcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcImF2YXRhcl9VUkxcIjpcImh0dHBzOlxcL1xcLzEuZ3JhdmF0YXIuY29tXFwvYXZhdGFyXFwvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcInByb2ZpbGVfVVJMXCI6XCJodHRwOlxcL1xcL2VuLmdyYXZhdGFyLmNvbVxcL3NwZW50YXlsb3JcIixcInNpdGVfSURcIjo3Mzk0MzM3NH0sXCJkYXRlXCI6XCIyMDE0LTA5LTA0VDE0OjE3OjM4KzAwOjAwXCIsXCJtb2RpZmllZFwiOlwiMjAxNS0wMy0yOVQxMzoyNTo0MyswMDowMFwiLFwidGl0bGVcIjpcIlNlY29uZCBQb3N0XCIsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvMDRcXC9zZWNvbmQtcG9zdFxcL1wiLFwic2hvcnRfVVJMXCI6XCJodHRwOlxcL1xcL3dwLm1lXFwvcDUwZzM0LTdcIixcImNvbnRlbnRcIjpcIjxoMj5Mb3JlbSBpcHN1bTxcXC9oMj5cXG48cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGltcGVyZGlldCBuZWMgZXJhdCBhYyBjb25kaW1lbnR1bS4gTnVsbGEgdmVsIHJ1dHJ1bSBsaWd1bGEuIFNlZCBoZW5kcmVyaXQgaW50ZXJkdW0gb3JjaSBhIHBvc3VlcmUuIFZpdmFtdXMgdXQgdmVsaXQgYWxpcXVldCwgbW9sbGlzIHB1cnVzIGVnZXQsIGlhY3VsaXMgbmlzbC4gUHJvaW4gcG9zdWVyZSBtYWxlc3VhZGEgYW50ZS4gUHJvaW4gYXVjdG9yIG9yY2kgZXJvcywgYWMgbW9sZXN0aWUgbG9yZW0gZGljdHVtIG5lYy4gVmVzdGlidWx1bSBzaXQgYW1ldCBlcmF0IGVzdC4gTW9yYmkgbHVjdHVzIHNlZCBlbGl0IGFjIGx1Y3R1cy4gUHJvaW4gYmxhbmRpdCwgZW5pbSB2aXRhZSBlZ2VzdGFzIHBvc3VlcmUsIG5lcXVlIGVsaXQgdWx0cmljaWVzIGR1aSwgdmVsIG1hdHRpcyBuaWJoIGVuaW0gYWMgbG9yZW0uIE1hZWNlbmFzIG1vbGVzdGllIG5pc2wgc2l0IGFtZXQgdmVsaXQgZGljdHVtIGxvYm9ydGlzLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuPFxcL3A+XFxuPHA+PGltZyBjbGFzcz1cXFwiYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtOFxcXCIgc3JjPVxcXCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL2phYmEuanBnP3c9MzAwJiMwMzg7aD0yNDlcXFwiIGFsdD1cXFwiamFiYVxcXCIgd2lkdGg9XFxcIjMwMFxcXCIgaGVpZ2h0PVxcXCIyNDlcXFwiIFxcLz48XFwvcD5cXG48aDI+Vml2YW11cyBzYWdpdHRpczxcXC9oMj5cXG48cD5WaXZhbXVzIHNhZ2l0dGlzLCBkaWFtIGluIHZlaGljdWxhIGxvYm9ydGlzLCBzYXBpZW4gYXJjdSBtYXR0aXMgZXJhdCwgdmVsIGFsaXF1ZXQgc2VtIHVybmEgZXQgcmlzdXMuIFV0IGZldWdpYXQgc2FwaWVuIHZpdGFlIG1pIGVsZW1lbnR1bSBsYW9yZWV0LiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBBbGlxdWFtIGVyYXQgbmlzbCwgYWxpcXVhbSBwcmV0aXVtIGxpYmVybyBhbGlxdWV0LCBzYWdpdHRpcyBlbGVpZmVuZCBudW5jLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gSW50ZWdlciB0dXJwaXMgYXVndWUsIHRpbmNpZHVudCBkaWduaXNzaW0gbWF1cmlzIGlkLCByaG9uY3VzIGRhcGlidXMgcHVydXMuIE1hZWNlbmFzIGV0IGVuaW0gb2Rpby4gTnVsbGFtIG1hc3NhIG1ldHVzLCB2YXJpdXMgcXVpcyB2ZWhpY3VsYSBzZWQsIHBoYXJldHJhIG1vbGxpcyBlcmF0LiBJbiBxdWlzIHZpdmVycmEgdmVsaXQuIFZpdmFtdXMgcGxhY2VyYXQsIGVzdCBuZWMgaGVuZHJlcml0IHZhcml1cywgZW5pbSBkdWkgaGVuZHJlcml0IG1hZ25hLCB1dCBwdWx2aW5hciBuaWJoIGxvcmVtIHZlbCBsYWN1cy4gTWF1cmlzIGEgb3JjaSBpYWN1bGlzLCBoZW5kcmVyaXQgZXJvcyBzZWQsIGdyYXZpZGEgbGVvLiBJbiBkaWN0dW0gbWF1cmlzIHZlbCBhdWd1ZSB2YXJpdXMsIGFjIHVsbGFtY29ycGVyIG5pc2wgb3JuYXJlLiBJbiBldSBwb3N1ZXJlIHZlbGl0LCBhYyBmZXJtZW50dW0gYXJjdS4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBOdWxsYW0gc2VkIG1hbGVzdWFkYSBsZW8sIGF0IGludGVyZHVtIGVsaXQuPFxcL3A+XFxuXCIsXCJleGNlcnB0XCI6XCI8cD4mbmJzcDsgTG9yZW0gaXBzdW0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpbXBlcmRpZXQgbmVjIGVyYXQgYWMgY29uZGltZW50dW0uIE51bGxhIHZlbCBydXRydW0gbGlndWxhLiBTZWQgaGVuZHJlcml0IGludGVyZHVtIG9yY2kgYSBwb3N1ZXJlLiBWaXZhbXVzIHV0IHZlbGl0IGFsaXF1ZXQsIG1vbGxpcyBwdXJ1cyBlZ2V0LCBpYWN1bGlzIG5pc2wuIFByb2luIHBvc3VlcmUgbWFsZXN1YWRhIGFudGUuIFByb2luIGF1Y3RvciBvcmNpIGVyb3MsIGFjIG1vbGVzdGllIGxvcmVtIGRpY3R1bSBuZWMuIFZlc3RpYnVsdW0gc2l0IGFtZXQgZXJhdCBlc3QuIE1vcmJpIFsmaGVsbGlwO108XFwvcD5cXG5cIixcInNsdWdcIjpcInNlY29uZC1wb3N0XCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvP3A9N1wiLFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXCJzdGlja3lcIjpmYWxzZSxcInBhc3N3b3JkXCI6XCJcIixcInBhcmVudFwiOmZhbHNlLFwidHlwZVwiOlwicG9zdFwiLFwiZGlzY3Vzc2lvblwiOntcImNvbW1lbnRzX29wZW5cIjp0cnVlLFwiY29tbWVudF9zdGF0dXNcIjpcIm9wZW5cIixcInBpbmdzX29wZW5cIjp0cnVlLFwicGluZ19zdGF0dXNcIjpcIm9wZW5cIixcImNvbW1lbnRfY291bnRcIjowfSxcImxpa2VzX2VuYWJsZWRcIjp0cnVlLFwic2hhcmluZ19lbmFibGVkXCI6dHJ1ZSxcImxpa2VfY291bnRcIjowLFwiaV9saWtlXCI6MCxcImlzX3JlYmxvZ2dlZFwiOjAsXCJpc19mb2xsb3dpbmdcIjowLFwiZ2xvYmFsX0lEXCI6XCIzOGE0Zjg2OTNjYjJkMDNmYmViYjM1NTE3YjMwYWE2NlwiLFwiZmVhdHVyZWRfaW1hZ2VcIjpcIlwiLFwicG9zdF90aHVtYm5haWxcIjpudWxsLFwiZm9ybWF0XCI6XCJzdGFuZGFyZFwiLFwiZ2VvXCI6ZmFsc2UsXCJtZW51X29yZGVyXCI6MCxcInBhZ2VfdGVtcGxhdGVcIjpcIlwiLFwicHVibGljaXplX1VSTHNcIjpbXSxcInRhZ3NcIjp7fSxcImNhdGVnb3JpZXNcIjp7XCJDYXRlZ29yeTFcIjp7XCJJRFwiOjI4NTI3LFwibmFtZVwiOlwiQ2F0ZWdvcnkxXCIsXCJzbHVnXCI6XCJjYXRlZ29yeTFcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwicGFyZW50XCI6MCxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOmNhdGVnb3J5MVwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6Y2F0ZWdvcnkxXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX19LFwiYXR0YWNobWVudHNcIjp7XCI4XCI6e1wiSURcIjo4LFwiVVJMXCI6XCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL2phYmEuanBnXCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvamFiYS5qcGdcIixcImRhdGVcIjpcIjIwMTQtMDktMDRUMTQ6MTY6NDErMDA6MDBcIixcInBvc3RfSURcIjo3LFwiZmlsZVwiOlwiamFiYS5qcGdcIixcIm1pbWVfdHlwZVwiOlwiaW1hZ2VcXC9qcGVnXCIsXCJleHRlbnNpb25cIjpcImpwZ1wiLFwidGl0bGVcIjpcImphYmFcIixcImNhcHRpb25cIjpcIlwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwiYWx0XCI6XCJcIixcInRodW1ibmFpbHNcIjp7fSxcImhlaWdodFwiOjQxNSxcIndpZHRoXCI6NTAwLFwiZXhpZlwiOntcImFwZXJ0dXJlXCI6MCxcImNyZWRpdFwiOlwiXCIsXCJjYW1lcmFcIjpcIlwiLFwiY2FwdGlvblwiOlwiXCIsXCJjcmVhdGVkX3RpbWVzdGFtcFwiOjAsXCJjb3B5cmlnaHRcIjpcIlwiLFwiZm9jYWxfbGVuZ3RoXCI6MCxcImlzb1wiOjAsXCJzaHV0dGVyX3NwZWVkXCI6MCxcInRpdGxlXCI6XCJcIixcIm9yaWVudGF0aW9uXCI6MH0sXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9tZWRpYVxcLzhcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL21lZGlhXFwvOFxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicGFyZW50XCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcIn19fX0sXCJhdHRhY2htZW50X2NvdW50XCI6XCIxXCIsXCJtZXRhZGF0YVwiOlt7XCJpZFwiOlwiMzFcIixcImtleVwiOlwiZ2VvX3B1YmxpY1wiLFwidmFsdWVcIjpcIjBcIn0se1wiaWRcIjpcIjIxXCIsXCJrZXlcIjpcIl93cGFzX21lc3NcIixcInZhbHVlXCI6XCJ1bmRlZmluZWRcIn0se1wiaWRcIjpcIjE1XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfZmFjZWJvb2tcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxNlwiLFwia2V5XCI6XCJfd3Bhc19za2lwX2dvb2dsZV9wbHVzXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMThcIixcImtleVwiOlwiX3dwYXNfc2tpcF9saW5rZWRpblwiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjIwXCIsXCJrZXlcIjpcIl93cGFzX3NraXBfcGF0aFwiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjE5XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfdHVtYmxyXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMTdcIixcImtleVwiOlwiX3dwYXNfc2tpcF90d2l0dGVyXCIsXCJ2YWx1ZVwiOlwiMVwifV0sXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicmVwbGllc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XFwvcmVwbGllc1xcL1wiLFwibGlrZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1xcL2xpa2VzXFwvXCJ9fSxcImNhcGFiaWxpdGllc1wiOntcInB1Ymxpc2hfcG9zdFwiOmZhbHNlLFwiZGVsZXRlX3Bvc3RcIjpmYWxzZSxcImVkaXRfcG9zdFwiOmZhbHNlfX0se1wiSURcIjozLFwic2l0ZV9JRFwiOjczOTQzMzc0LFwiYXV0aG9yXCI6e1wiSURcIjo0NzE3ODY2MixcImxvZ2luXCI6XCJzcGVudGF5bG9yXCIsXCJlbWFpbFwiOmZhbHNlLFwibmFtZVwiOlwic3BlbnRheWxvclwiLFwibmljZV9uYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJVUkxcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcImF2YXRhcl9VUkxcIjpcImh0dHBzOlxcL1xcLzEuZ3JhdmF0YXIuY29tXFwvYXZhdGFyXFwvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcInByb2ZpbGVfVVJMXCI6XCJodHRwOlxcL1xcL2VuLmdyYXZhdGFyLmNvbVxcL3NwZW50YXlsb3JcIixcInNpdGVfSURcIjo3Mzk0MzM3NH0sXCJkYXRlXCI6XCIyMDE0LTA5LTAxVDExOjQ1OjA5KzAwOjAwXCIsXCJtb2RpZmllZFwiOlwiMjAxNS0wMy0yOVQxMzoyODoyMSswMDowMFwiLFwidGl0bGVcIjpcIkZpcnN0IFBvc3RcIixcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC8wMVxcL2ZpcnN0LXBvc3RcXC9cIixcInNob3J0X1VSTFwiOlwiaHR0cDpcXC9cXC93cC5tZVxcL3A1MGczNC0zXCIsXCJjb250ZW50XCI6XCI8aDIgc3R5bGU9XFxcInRleHQtYWxpZ246bGVmdDtcXFwiPkhpcHN0ZXIgSXBzdW08XFwvaDI+XFxuPGhyIFxcLz5cXG48cD4mbmJzcDs8XFwvcD5cXG48cCBzdHlsZT1cXFwidGV4dC1hbGlnbjpsZWZ0O1xcXCI+TGl0ZXJhbGx5IFZIUyBmb29kIHRydWNrLCBtdW1ibGVjb3JlIEVjaG8gUGFyayBrYWxlIGNoaXBzIHBvc3QtaXJvbmljIEhlbHZldGljYSBmcmVlZ2FuIDkwJiM4MjE3O3MgaGFzaHRhZy4gQmFuam8gc2VsZmllcyBtZWgsIENhcmxlcyBjaHVyY2gta2V5IHNlbHZhZ2UgTWNTd2VlbmV5JiM4MjE3O3MuIFNjZW5lc3RlciBTaG9yZWRpdGNoIGxldHRlcnByZXNzLCBvcmdhbmljIG1hc3RlciBjbGVhbnNlIDgtYml0IFlPTE8gZXRobmljIHVnaCB0cnVzdCBmdW5kIGxlZ2dpbmdzIGZpeGllIGRyZWFtY2F0Y2hlciBtZXNzZW5nZXIgYmFnLiBMby1maSBsZWdnaW5ncyBiaWN5Y2xlIHJpZ2h0cyAzIHdvbGYgbW9vbiBFY2hvIFBhcmssIGJlZm9yZSB0aGV5IHNvbGQgb3V0IGJpb2RpZXNlbCBwdXQgYSBiaXJkIG9uIGl0LiBEcmlua2luZyB2aW5lZ2FyIGZvb2QgdHJ1Y2sgTWNTd2VlbmV5JiM4MjE3O3Mgcm9vZiBwYXJ0eSwgc2FsdmlhICsxIHRhdHRvb2VkIERJWSBkaXNydXB0IEhlbHZldGljYS4gTmFyd2hhbCBrYWxlIGNoaXBzIHRvdXNsZWQgYmVhcmQgZGlzdGlsbGVyeSBPZGQgRnV0dXJlLCBQQlImYW1wO0IgOTAmIzgyMTc7cyBzZWx2YWdlIGNhcmRpZ2FuIGNodXJjaC1rZXkgc2NlbmVzdGVyLiBQYWxlbyBzdXN0YWluYWJsZSBhY3R1YWxseSBDYXJsZXMgY3JheSBjbGljaGUgZHJlYW1jYXRjaGVyLjxcXC9wPlxcbjxwPjxhIGhyZWY9XFxcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvc3Viby5qcGdcXFwiPjxpbWcgY2xhc3M9XFxcImFsaWduY2VudGVyIHNpemUtbWVkaXVtIHdwLWltYWdlLTRcXFwiIHNyYz1cXFwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZz93PTMwMCYjMDM4O2g9MjE5XFxcIiBhbHQ9XFxcInN1Ym9cXFwiIHdpZHRoPVxcXCIzMDBcXFwiIGhlaWdodD1cXFwiMjE5XFxcIiBcXC8+PFxcL2E+PFxcL3A+XFxuPHA+UGl0Y2hmb3JrIGFjdHVhbGx5IHJlYWR5bWFkZSBtZXNzZW5nZXIgYmFnLCBjcmFmdCBiZWVyIFBpbnRlcmVzdCBzY2VuZXN0ZXIgVGh1bmRlcmNhdHMgc2FydG9yaWFsIGtlZmZpeWVoIGhlbGxhIHR3ZWUgb3JnYW5pYyBCcm9va2x5bi4gU2hvcmVkaXRjaCBUaHVuZGVyY2F0cyBhcnQgcGFydHkgc2FydG9yaWFsIHRhdHRvb2VkIGZsZXhpdGFyaWFuLCBhY3R1YWxseSBkaXJlY3QgdHJhZGUgUEJSJmFtcDtCIGJlZm9yZSB0aGV5IHNvbGQgb3V0IEV0c3kgVmljZS4gU2VsZmllcyBIaWdoIExpZmUgcm9vZiBwYXJ0eSB0cnVzdCBmdW5kLCBzd2FnIHNoYWJieSBjaGljIEdvZGFyZCBmcmVlZ2FuIGZhcCBhdXRoZW50aWMgYXN5bW1ldHJpY2FsLiBSZXRybyBoYXNodGFnIFRodW5kZXJjYXRzIHNlbGZpZXMgaGVsbGEgZGlyZWN0IHRyYWRlLiBJUGhvbmUgc3dhZyBuZXh0IGxldmVsLCBnYXN0cm9wdWIgY2hhbWJyYXkgcmV0cm8gRXRzeSBzcXVpZCBraXRzY2guIFZpcmFsIGxvY2F2b3JlIEJyb29rbHluIHBsYWlkIENhcmxlcy4gQ2h1cmNoLWtleSBoZWxsYSBuYXJ3aGFsLCBZT0xPIGV0aG5pYyBzY2VuZXN0ZXIgYmlvZGllc2VsIE9kZCBGdXR1cmUuPFxcL3A+XFxuXCIsXCJleGNlcnB0XCI6XCI8cD5IaXBzdGVyIElwc3VtICZuYnNwOyBMaXRlcmFsbHkgVkhTIGZvb2QgdHJ1Y2ssIG11bWJsZWNvcmUgRWNobyBQYXJrIGthbGUgY2hpcHMgcG9zdC1pcm9uaWMgSGVsdmV0aWNhIGZyZWVnYW4gOTAmIzgyMTc7cyBoYXNodGFnLiBCYW5qbyBzZWxmaWVzIG1laCwgQ2FybGVzIGNodXJjaC1rZXkgc2VsdmFnZSBNY1N3ZWVuZXkmIzgyMTc7cy4gU2NlbmVzdGVyIFNob3JlZGl0Y2ggbGV0dGVycHJlc3MsIG9yZ2FuaWMgbWFzdGVyIGNsZWFuc2UgOC1iaXQgWU9MTyBldGhuaWMgdWdoIHRydXN0IGZ1bmQgbGVnZ2luZ3MgZml4aWUgZHJlYW1jYXRjaGVyIG1lc3NlbmdlciBiYWcuIExvLWZpIGxlZ2dpbmdzIGJpY3ljbGUgcmlnaHRzIDMgd29sZiBtb29uIEVjaG8gUGFyaywgYmVmb3JlIHRoZXkgc29sZCBvdXQgYmlvZGllc2VsIFsmaGVsbGlwO108XFwvcD5cXG5cIixcInNsdWdcIjpcImZpcnN0LXBvc3RcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8/cD0zXCIsXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcInN0aWNreVwiOmZhbHNlLFwicGFzc3dvcmRcIjpcIlwiLFwicGFyZW50XCI6ZmFsc2UsXCJ0eXBlXCI6XCJwb3N0XCIsXCJkaXNjdXNzaW9uXCI6e1wiY29tbWVudHNfb3BlblwiOnRydWUsXCJjb21tZW50X3N0YXR1c1wiOlwib3BlblwiLFwicGluZ3Nfb3BlblwiOnRydWUsXCJwaW5nX3N0YXR1c1wiOlwib3BlblwiLFwiY29tbWVudF9jb3VudFwiOjF9LFwibGlrZXNfZW5hYmxlZFwiOnRydWUsXCJzaGFyaW5nX2VuYWJsZWRcIjp0cnVlLFwibGlrZV9jb3VudFwiOjAsXCJpX2xpa2VcIjowLFwiaXNfcmVibG9nZ2VkXCI6MCxcImlzX2ZvbGxvd2luZ1wiOjAsXCJnbG9iYWxfSURcIjpcIjU0ZTRkODZmNTRkYWEzMjZhMzgwNTBkMGM0ZmUzNjRhXCIsXCJmZWF0dXJlZF9pbWFnZVwiOlwiXCIsXCJwb3N0X3RodW1ibmFpbFwiOm51bGwsXCJmb3JtYXRcIjpcInN0YW5kYXJkXCIsXCJnZW9cIjpmYWxzZSxcIm1lbnVfb3JkZXJcIjowLFwicGFnZV90ZW1wbGF0ZVwiOlwiXCIsXCJwdWJsaWNpemVfVVJMc1wiOltdLFwidGFnc1wiOntcImthbGUgY2hpcHNcIjp7XCJJRFwiOjYwMTcwMDEsXCJuYW1lXCI6XCJrYWxlIGNoaXBzXCIsXCJzbHVnXCI6XCJrYWxlLWNoaXBzXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOmthbGUtY2hpcHNcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOmthbGUtY2hpcHNcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fSxcIk9kZCBGdXR1cmVcIjp7XCJJRFwiOjE2NjQyNTQ1LFwibmFtZVwiOlwiT2RkIEZ1dHVyZVwiLFwic2x1Z1wiOlwib2RkLWZ1dHVyZVwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjEsXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC90YWdzXFwvc2x1ZzpvZGQtZnV0dXJlXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC90YWdzXFwvc2x1ZzpvZGQtZnV0dXJlXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX0sXCJZT0xPXCI6e1wiSURcIjo3MTExMDAsXCJuYW1lXCI6XCJZT0xPXCIsXCJzbHVnXCI6XCJ5b2xvXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOnlvbG9cIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOnlvbG9cXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJjYXRlZ29yaWVzXCI6e1wiVW5jYXRlZ29yaXplZFwiOntcIklEXCI6MSxcIm5hbWVcIjpcIlVuY2F0ZWdvcml6ZWRcIixcInNsdWdcIjpcInVuY2F0ZWdvcml6ZWRcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoyLFwicGFyZW50XCI6MCxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJhdHRhY2htZW50c1wiOntcIjRcIjp7XCJJRFwiOjQsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvc3Viby5qcGdcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZ1wiLFwiZGF0ZVwiOlwiMjAxNC0wOS0wMVQxMTo0Mjo0MyswMDowMFwiLFwicG9zdF9JRFwiOjMsXCJmaWxlXCI6XCJzdWJvLmpwZ1wiLFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcImV4dGVuc2lvblwiOlwianBnXCIsXCJ0aXRsZVwiOlwic3Vib1wiLFwiY2FwdGlvblwiOlwiXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJhbHRcIjpcIlwiLFwidGh1bWJuYWlsc1wiOnt9LFwiaGVpZ2h0XCI6MzI5LFwid2lkdGhcIjo0NTAsXCJleGlmXCI6e1wiYXBlcnR1cmVcIjowLFwiY3JlZGl0XCI6XCJcIixcImNhbWVyYVwiOlwiXCIsXCJjYXB0aW9uXCI6XCJcIixcImNyZWF0ZWRfdGltZXN0YW1wXCI6MCxcImNvcHlyaWdodFwiOlwiXCIsXCJmb2NhbF9sZW5ndGhcIjowLFwiaXNvXCI6MCxcInNodXR0ZXJfc3BlZWRcIjowLFwidGl0bGVcIjpcIlwiLFwib3JpZW50YXRpb25cIjowfSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL21lZGlhXFwvNFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC80XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJwYXJlbnRcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1wifX19fSxcImF0dGFjaG1lbnRfY291bnRcIjpcIjFcIixcIm1ldGFkYXRhXCI6W3tcImlkXCI6XCI4XCIsXCJrZXlcIjpcImdlb19wdWJsaWNcIixcInZhbHVlXCI6XCIwXCJ9XSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJyZXBsaWVzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcXC9yZXBsaWVzXFwvXCIsXCJsaWtlc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXFwvbGlrZXNcXC9cIn19LFwiY2FwYWJpbGl0aWVzXCI6e1wicHVibGlzaF9wb3N0XCI6ZmFsc2UsXCJkZWxldGVfcG9zdFwiOmZhbHNlLFwiZWRpdF9wb3N0XCI6ZmFsc2V9fV19OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuXHRcblx0Ly8gbW9kZWw6IEFydGljbGVNb2RlbCxcblx0Ly8gdXJsUGFyYW1zOiB7fSxcblx0cG9zaXRpb246IDAsXG5cdHRvdGFsUmVjb3JkczogMCxcblx0aXNMb2FkaW5nOiBmYWxzZSxcbiAgdXJsOiBmdW5jdGlvbigpe1xuICBcdHJldHVybiAnaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxLjEvc2l0ZXMvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vcG9zdHMnO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24ocmVzcG9uc2UpeyAvLywgeGhyXG4gIFx0dGhpcy50b3RhbFJlY29yZHMgPSByZXNwb25zZS5mb3VuZDtcbiAgICByZXR1cm4gcmVzcG9uc2UucG9zdHM7XG4gIH0sXG4gIGdldEN1cnJlbnRSZWNvcmQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQodGhpcy5wb3NpdGlvbik7XG4gIH0sXG4gIGdldExhdGVzdDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCgwKTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG5cdFxuXHQvLyBtb2RlbDogQXJ0aWNsZU1vZGVsLFxuXHQvLyB1cmxQYXJhbXM6IHt9LFxuXHRwb3NpdGlvbjogMCxcblx0dG90YWxSZWNvcmRzOiAwLFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuICB1cmw6IGZ1bmN0aW9uKCl7XG4gIFx0cmV0dXJuICdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vcG9zdHMnO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24ocmVzcG9uc2UpeyAvLywgeGhyXG4gIFx0dGhpcy50b3RhbFJlY29yZHMgPSByZXNwb25zZS5mb3VuZDtcbiAgICByZXR1cm4gcmVzcG9uc2UucG9zdHM7XG4gIH0sXG4gIGdldEN1cnJlbnRSZWNvcmQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQodGhpcy5wb3NpdGlvbik7XG4gIH0sXG4gIGdldExhdGVzdDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCgwKTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gcmVxdWlyZSgnLi9hcHAuanMnKTtcblxuXG5cbiQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCl7XG5cdGFwcC5pbml0aWFsaXplKCk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhZnRlclRyYW5zID0gJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnO1xuXG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25zIChvcHRpb25zKSB7XG5cdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG5cdHRoaXMuY29udGVudCA9IG9wdGlvbnMuY29udGVudDtcblx0dGhpcy50cmFuc2l0aW9uQ2xhc3MgPSBvcHRpb25zLnRyYW5zaXRpb25DbGFzcztcblx0dGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcblxuXHR0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdHJldHVybiB0aGlzW3RoaXMuZGlyZWN0aW9uID09PSAncHJldicgPyAncHJldicgOiAnbmV4dCddKGNvbnRlbnQpO1xuXHR9O1xuXG5cdHRoaXMubmV4dCA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGlmICh0aGlzLmFuaW1hdGluZykge3JldHVybiBmYWxzZTt9XG5cdFx0dmFyICRjb250YWluZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcblx0XHR2YXIgJHRhcmdldCA9ICRjb250YWluZXIuZmluZCh0aGlzLnRyYW5zaXRpb25DbGFzcyk7XG5cdFx0dmFyIHRoaXNfID0gdGhpcztcblxuXHRcdCR0YXJnZXQuaHRtbChjb250ZW50KTtcblxuXHRcdHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnYW5pbWF0aW5nLW5leHQnKS5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLXByZXYnKS5vbmUoYWZ0ZXJUcmFucywgZnVuY3Rpb24oKXtcblx0XHRcdFx0JGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLW5leHQnKTtcblx0XHRcdFx0dGhpc18uc3dpdGNoRWxlbWVudHMoKTtcblx0XHRcdFx0dGhpc18uYW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9LDApO1xuXHR9O1xuXG5cdHRoaXMucHJldiA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGlmICh0aGlzLmFuaW1hdGluZykge3JldHVybiBmYWxzZTsgfVxuXHRcdHZhciAkY29udGFpbmVyID0gJCh0aGlzLmNvbnRhaW5lcik7XG5cdFx0dmFyICR0YXJnZXQgPSAkY29udGFpbmVyLmZpbmQodGhpcy50cmFuc2l0aW9uQ2xhc3MpO1xuXHRcdHZhciB0aGlzXyA9IHRoaXM7XG5cblx0XHQkdGFyZ2V0Lmh0bWwoY29udGVudCk7XG5cblx0XHR0aGlzLmFuaW1hdGluZyA9IHRydWU7XG5cblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnYW5pbWF0aW5nLXByZXYnKS5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLW5leHQnKS5vbmUoYWZ0ZXJUcmFucywgZnVuY3Rpb24oKXtcblx0XHRcdFx0JGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLXByZXYnKTtcblx0XHRcdFx0dGhpc18uc3dpdGNoRWxlbWVudHMoKTtcblx0XHRcdFx0dGhpc18uYW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9LDApO1xuXHR9O1xuXG5cdHRoaXMuc3dpdGNoRWxlbWVudHMgPSBmdW5jdGlvbigpe1xuXHRcdHZhciBjb250ZW50ID0gJCh0aGlzLmNvbnRhaW5lcikuZmluZCh0aGlzLmNvbnRlbnQpO1xuXG5cdFx0Y29udGVudC50b2dnbGVDbGFzcyh0aGlzLnRyYW5zaXRpb25DbGFzcy5yZXBsYWNlKCcuJywnJykpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblxuXHRyZXR1cm4gdGhpcztcdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zaXRpb25zOyIsIm1vZHVsZS5leHBvcnRzID0gW1xuXHR7XG5cdFx0SUQ6IDEsXG5cdFx0dGl0bGU6ICdTbm93cmlkZXJzIExvZ28nLFxuXHRcdHNsdWc6ICdTbm93cmlkZXJzLWxvZ28nLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRncmFwaGljczogWydJbGx1c3RyYXRvciddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Nub3dyaWRlcnMucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPkR1cmluZyBteSB0aW1lIHN0dWR5aW5nIGF0IFBseW1vdXRoIFVuaXZlcnNpdHkgSSB3YXMgaW52b2x2ZWQgd2l0aCB0aGUgbG92ZWx5IGZvbGtzIHdobyBtYWRlIHVwIHRoZSBQbHltb3V0aCBTbm93cmlkZXJzIChUaGUgdW5pb25cXCdzIHNub3cgc3BvcnRzIHNvY2lldHkpLiBJIHdhcyBsdWNreSBlbm91Z2ggdG8gaGF2ZSBnb29kIGZyaWVuZHMgb24gdGhlIGNvbW1pdHRlZSBzbyBuZXZlciBhY3R1YWxseSBoYWQgdG8gcGF5IG1lbWJlcnNoaXAgKHNoaGhoLi4uKS48YnI+SW4gbXkgZmluYWwgeWVhciBJIGhhZCBzdGFydGVkIHRlYWNoaW5nIG15c2VsZiBob3cgdG8gdXNlIElsbHVzdHJhdG9yIGFuZCBkZWNpZGVkIHRvIHBheSBiYWNrIHRoZSBjbHViIGJ5IGdpdmluZyB0aGVpciBsb2dvIGEgZmFjZWxpZnQuPC9wPjxwPkkgZGlkblxcJ3Qgd2FudCB0byB2ZW50dXJlIHRvbyBmYXIgYXdheSBmcm9tIHRoZSBvcmlnaW5hbCBzbyBJIHVzZWQgdGhlIHNhbWUgZm9udCAoQXJpYWwsIHBsZWFzZSBmb3JnaXZlIG1lISkgYW5kIEkgcmUtZHJldyB0aGUgXFwnc25vd3JpZGVycyBsYWR5XFwnIHNvIHRoYXQgd2Ugd291bGQgaGF2ZSBpdCBpbiBhIHNjYWxhYmxlIGZvcm1hdCByYXRoZXIgdGhhbiBqdXN0IHRoZSBoZWF2aWx5IHBpeGVsYXRlZCB2ZXJzaW9uIHRoYXQgd2UgYWxyZWFkeSBoYWQuPGJyPkkgY2hvc2UgdG8gdGFrZSB0aGUgb25lIGxpbmUgXFwnc25vd3JpZGVyc1xcJyBhbmQgc3BsaXQgdGhpcyBpbnRvIHR3byBzbyB0aGF0IGl0IHdvdWxkIGJldHRlciBmaXQgb24gdGVlc2hpcnRzIGFuZCBob29kaWVzIGFuZCBjaG9zZSBhIHZlcnkgYm9sZCBsb29rIGZvciBlYXN5IHJlY29nbml0aW9uLCB0aGUgc25vd3JpZGVycyBhcmUgYSBwcm91ZCBidW5jaCE8L3A+J1xuXHR9LCB7XG5cdFx0SUQ6IDIsXG5cdFx0dGl0bGU6ICdIYXJyeSBQb3R0eScsXG5cdFx0c2x1ZzogJ2hhcnJ5LXBvdHR5Jyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnanF1ZXJ5J10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvaGFycnlwb3R0eS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+TXkgZGFkIGlzIGEgYml0IG9mIGEgY2xvd24sIG5vIHJlYWxseSEgSGUgd29ya3MgYXMgYSBjaGlsZHJlblxcJ3MgZW50ZXJ0YWluZXIgc28gd2hpbGUgSSB3YXMgZ2V0dGluZyBzdGFydGVkIHdpdGggbGVhcm5pbmcgUEhQIGFuZCBKUyBJIGJ1aWx0IGEgdmVyeSBiYXNpYyB3ZWJzaXRlIGZvciBoaW0uPC9wPjxwPlRoZSB3ZWJzaXRlIHNlcnZlZCBvbmx5IG9uZSBwdXJwb3NlIHdoaWNoIHdhcyB0byBwcm92aWRlIGEgY29udGFjdCBmb3JtIGZvciBwb3RlbnRpYWwgY3VzdG9tZXJzIHdhbnRpbmcgdG8gZ2V0IGluIHRvdWNoLjxicj5UaGUgY29kZSB3YXMgcHJldHR5IHRlcnJpYmxlLi4uIHZlcnkgYmFzaWMgUEhQIHRvIHNlcnZlIHVwIHRoZSBzaXRlIGFuZCBzZW5kIHRoZSBmb3JtIGRldGFpbHMgd2l0aCBqUXVlcnkgdG8gdmFsaWRhdGUgb24gdGVoIGZyb250ZW5kLjwvcD4nXG5cdH0se1xuXHRcdElEOiAzLFxuXHRcdHRpdGxlOiAnVGhlIFNhdWNlJyxcblx0XHRzbHVnOiAndGhlLXNhdWNlJyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnJ10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc2F1Y2UucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPlRoZSByZWFzb24gSSBnb3Qgc3RhcnRlZCB3aXRoIGxlYXJuaW5nIHRvIGNvZGUgd2FzIHRvIHNldCB1cCBhbiBlY29tbWVyY2Ugc2l0ZSBmb3IgXFwnVGhlIFNhdWNlXFwnLCBhIGJyYW5kIHRoYXQgSSB3YXMgaG9waW5nIHRvIHNldCB1cC48YnI+SSBoYWQgc3RhcnRlZCBjcmVhdGluZyBkZXNpZ25zIGZvciB0ZWVzaGlydHMgYW5kIHN3ZWF0c2hpcnRzIGV0Yy4sIGJvdWdodCBhIGxvYWQgb2YgcHJpbnRpbmcgZXF1aXBtZW50IGFuZCBpbmtzIGFuZCBuZWVkZWQgdG8gc2V0IHVwIGEgY2hhbm5lbCBhIGNoYW5uZWwgdG8gc2VsbCB0aGUgcHJvZHVjdHMgdGhhdCBJIHdvdWxkIGJlIGNyZWF0aW5nLjwvcD48cD5BbHRob3VnaCB0aGVyZSBpcyBjZXJ0YWlubHkgbm90aGluZyBncm91bmRicmFraW5nIGluIHRoaXMgcHJvamVjdCBJIGhhZCBzZXQgbXlzZWxmIGEgZmV3IGNoYWxsZW5nZXMgdGhhdCB0dXJuZWQgb3V0IHRvIGJlIHF1aXRlIHRvdWdoIGF0IHRoZSB0aW1lIGFuZCBoZWxwZWQgbWUgdW5kZXJzdGFuZCBtb3JlIGFib3V0IFBIUCwgSlMgYW5kIGNvZGluZyBpbiBnZW5lcmFsLjwvcD48aDI+UHJvZHVjdCBMaXN0aW5nPC9oMj48aHI+PHA+UmF0aGVyIHRoYW4gb3B0IGZvciBhIHN0cmFpZ2h0IHVwIGxpc3Qgb2YgcHJvZHVjdCB0aHVtYm5haWxzIEkgd2FudGVkIHRvIGhhdmUgc2VjdGlvbnMgdGhhdCBmZWF0dXJlZCBhIG51bWJlciBvZiB0aHVtYm5haWxzIHdpdGggYSBcXCdwcm9kdWN0IGZvY3VzXFwnIHBhbmVsIHRoYXQgd291bGQgc2hvdyBtb3JlIGRldGFpbCBvZiB3aGljaGV2ZXIgcHJvZHVjdCB0aGUgdXNlciB3YXMgY3VycmVudGx5IGhvdmVyaW5nIG92ZXIuPGJyPkVhY2ggb2YgdGhlc2UgcGFuZWxzIHdvdWxkIGhhdmUgYW4gYWx0ZXJuYXRpbmcgbGF5b3V0IGluIG9yZGVyIHRvIGtlZXAgc29tZSBiYWxhbmNlIGRvd24gdGhlIHBhZ2UuPGJyPlRoaXMgd2FzIHdoZXJlIEkgbGVhcm5lZCBsb29waW5nIGluIFBIUCBhbmQgd2FzIG15IGZpcnN0IHJlYWwgY2hhbGxlbmdlIHdpdGggamF2YXNjcmlwdCAoQWx0aG91Z2ggbXkgc29sdXRpb24gd2FzIHRlcnJpYmxlLCBjcmF6eSBkYXRhIGF0dHJpYnV0ZXMgZXZlcndoZXJlISk8L3A+PGgyPlByb2R1Y3QgTGlnaHRib3g8L2gyPjxocj48cD5JIGRpZG5cXCd0IHdhbnQgdG8gaGF2ZSB0aGUgdXNlciBsZWF2ZSB0aGUgcHJvZHVjdCBsaXN0aW5nIHBhZ2UgZWFoYyB0aW1lIHRoZXkgd2FudGVkIHRvIHZpZXcgYSBwcm9kdWN0IHNvIEkgYXR0ZW1wdGVkIHRvIGJ1aWxkIG91dCBhIGxpZ2h0LWJveC48YnI+QWx0aG91Z2ggSSBkaWQgZ2V0IHRoaXMgdG8gd29yaywgdGhlIHNvbHV0aW9uLCBhZ2FpbiwgbGFja2VkIGVsZWdhbmNlLiByYXRoZXIgdGhhbiBwZXJmb3JtaW5nIGFuIEFKQVggY2FsbCB0byBwb3B1bGF0ZSB0aGUgbGlnaHRib3gsIG9yIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggYSBmZXcgcGllY2VzIG9mIHByb2R1Y3QgZGF0YSwgSSByZWx5ZWQgb24gdGhlIGRhdGEgYXR0cmlidXRlcyB0aGF0IEkgaGFkIHJlbmRlcmVkIG91dCBvbiBlYWNoIHRodW1ibmFpbCBkaXYuPGJyPlV0dGVybHkgdGVycmlibGUgYnV0IHZlcnkgZWR1Y2F0aW9uYWwhPC9wPidcblx0fSx7XG5cdFx0SUQ6IDQsXG5cdFx0dGl0bGU6ICdTdXJmIFRyYWNraW5nIEFwcCBDb25jZXB0Jyxcblx0XHRzbHVnOiAnc3VyZi10cmFja2luZy1hcHAtY29uY2VwdCcsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdFx0cnVieTogWydSdWJ5IG9uIFJhaWxzJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc3VyZmFwcGNvbmNlcHQucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPkR1cmluZyBteSB0aW1lIHN0dWR5aW5nIGF0IEJpdG1ha2VyIExhYnMgaW4gVG9yb250bywgbXlzZWxmIGFuZCBhIGNvdXBsZSBvZiBjbGFzc21hdGVzIGRlY2lkZWQgdG8gZW50ZXIgdGhlIG1ha2VyIGVkaXRpb24gb2Ygc3RhcnQtdXAgd2Vla2VuZC48L3A+PHA+SSBoYWQgaGFkIGFuIGlkZWEgYSB5ZWFyIG9yIHNvIGJlZm9yZSBoYW5kIHdoaWxzdCBmaW5pc2hpbmcgdXAgYXQgdW5pdmVyc2l0eSB0byBjcmVhdGUgaG91c2luZyBmb3IgYSBzbWFydHBob25lIHRoYXQgY291bGQgYmUgYXR0YWNoZWQgdG8gYSBzdXJmYm9hcmQgaW4gb3JkZXIgdG8gY29sbGVjdCBkYXRhIGFib3V0IHRoZSBzdXJmZXJcXCdzIHBlcmZvcm1hbmNlIGR1cmluZyB0aGVpciBzZXNzaW9uLCBhbGxvd2luZyB0aGVtIHRvIHJldmlldyB0aGUgZGF0YSBsYXRlci4gU28gd2Ugd2VudCBhYm91dCBwcm90b3R5cGluZyBhIGRldmljZSAoaW4gcGxhY2Ugb2YgdGhlIHNtYXJ0cGhvbmUgaG91c2luZykgYW5kIHRoZSB3ZWIgYXBwIHRoYXQgd291bGQgZGlzcGxheSB0aGUgZGF0YS48L3A+PHA+QXMgdGhpcyB3YXMgbW9yZSBvZiBhIGNvbmNlcHQgcHJvamVjdCB0aGFuIGFuIGFjdHVhbCBhdHRlbXB0IGF0IGJ1aWxkaW5nIGEgcHJvZHVjdCwgSSBhZGRlZCBzb21lIGZ1bmN0aW9uYWxpdHkgdGhhdCB3b3VsZG5cXCd0IHJlYWxseSBiZSBhY2hpZXZhYmxlLCBzdWNoIGFzIHJlYWwtdGltZSB3YXZlLXRvLXdhdmUgdXBkYXRlcyB0byB0aGUgc3VyZmVycyBwcm9maWxlLCB3aGVyZSBlYWNoIHdhdmUgd291bGQgYmUgcGxvdHRlZCBvbiBhIGxvY2FsIG1hcCB3aXRoIGl0XFwncyBzcGVlZCBhbmQgZGlzdGFuY2Ugc2hvd24gYWxvbmcgc2lkZS48L3A+PHA+V2UgZGlkblxcJ3Qgd2luIGFueSBwcml6ZXMgYnV0IGRpZG5cXCd0IGRvIHRlcnJiaWx5IGVpdGhlciBhcyB3ZSB3ZXJlIHNvbWV3aGVyZSBpbiB0aGUgdG9wIDkgb3V0IG9mIDQwKyB0ZWFtcy48L3A+J1xuXHR9LHtcblx0XHRJRDogNSxcblx0XHR0aXRsZTogJ1JQRyBhZHZlbnR1cmUgZ2FtZScsXG5cdFx0c2x1ZzogJ3JwZy1hZHZlbnR1cmUtZ2FtZScsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdFx0cnVieTogWydSdWJ5IG9uIFJhaWxzJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvcnBnLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5Gb3IgbXkgZmluYWwgcHJvamVjdCBhdCBCaXRtYWtlciBMYWJzLCBJIGRlY2lkZWQgdG8gYnVpbGQgYW4gUlBHIGJyb3dzZXIgZ2FtZSB0aGF0IGFsbG93cyBwbGF5ZXJzIHRvIGNyZWF0ZSBhIGNoYXJhY3RlciwgYmF0dGxlIE5QQ3MgYW5kIG90aGVyIHBsYXllcnMsIGNvbGxlY3QgZ29sZCAmYW1wOyBpdGVtcywgbGV2ZWwgdXAgYW5kIGtlZXAgdHJhY2sgb2YgdGhlaXIgcmFuayBjb21wYXJlZCB0byBvdGhlciBwbGF5ZXJzLjwvcD48cD5UaGlzIHdhcyBoYXJkIHdvcmssIGVzcGVjaWFsbHkgZHVlIHRvIHRoZSBsaW1pdGVkIHRpbWUgZnJhbWUgd2hpY2ggaW52b2x2ZWQgYSBmZXcgfjE4IGhvdXIgc2Vzc2lvbnMgYW5kIG9uZSAzNiBob3VyIHNlc3Npb24hIChXZSBoYWQgcm91Z2hseSB0d28gd2Vla3MgdG8gaGFjayBvbiBvdXIgZmluYWwgcHJvamVjdHMpLiBIb3dldmVyLCBhcyBtdWNoIGFzIGl0IHdhcyBoYXJkd29yayBpdCB3YXMgYSBsb3Qgb2YgZnVuITwvcD48cD5JIGxlYXJuZWQgYSBoZWFwIGFib3V0IFJ1Ynkgb24gUmFpbHMgaW4gdGhpcyB0aW1lLCBwYXJ0aWN1bGFybHkgc2luY2UgdGhlcmUgd2VyZSBzb21lIGNvbXBsZXggcmVsYXRpb25zaGlwcyBnb2luZyBvbiBiZXR3ZWVuIHRoZSBkaWZmZXJlbnQgcmVzb3VyY2VzIGFuZCBlbnRpdGllcyBpbiB0aGlzIGdhbWUuPC9wPjxwPlRoZSBwcm9qZWN0IGhhcyBzaW5jZSBiZWVuIGxhaWQgdG8gcmVzdCBidXQgSSBkbyBzdGlsbCBhaW0gdG8gZmluZCB0aGUgdGltZSB0byByZS1idWlsZCBpdCB3aXRoIHNvbWUgZXh0cmEgZmVhdHVyZXMsIHN1Y2ggYXMgdXNpbmcgd2Vic29ja2V0cyBhbmQgSFRNTDUgY2FudmFzISAtIGl0XFwnZCBiZSBhIGZ1biBzaWRlIHByb2plY3QgdG8gaGF2ZSBvbiB0aGUgZ28hPC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiBYWCxcblx0XHQvLyBcdHRpdGxlOiAnUml2ZXIgSXNsYW5kIENoZWNrb3V0Jyxcblx0XHQvLyBcdHNsdWc6ICdyaXZlci1pc2xhbmQtY2hlY2tvdXQnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0Ly8gXHRcdCdjIyc6IFsnUmF6b3InLCAnLm5ldCddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0YXBpczogWydHb29nbGUgTWFwcyddLFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9yaXZlci1pc2xhbmQtY2hlY2tvdXQucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ05pbnRlbmRvIEN1c3RvbWVyIFNlcnZpY2UnLFxuXHRcdC8vIFx0c2x1ZzogJ25pbnRlbmRvLWN1c3RvbWVyLXNlcnZpY2UnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0Ly8gXHRcdHBocDogWydTaWx2ZXJTdHJpcGUnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvbmludGVuZG8tY3VzdG9tZXItc2VydmljZS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiBYWCxcblx0XHQvLyBcdHRpdGxlOiAnSnVyYSBUYXN0aXZhbCAyMDE1Jyxcblx0XHQvLyBcdHNsdWc6ICdqdXJhLXRhc3RpdmFsLTIwMTUnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5JywgJ0dydW50J11cblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL2p1cmEtdGFzdGl2YWwtMjAxNS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiBYWCxcblx0XHQvLyBcdHRpdGxlOiAnV2h5dGUgJiBNYWNrYXknLFxuXHRcdC8vIFx0c2x1ZzogJ3doeXRlLWFuZC1tYWNrYXknLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5JywgJ0dydW50JywgJ1Nrcm9sbHInXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvd2h5dGUtYW5kLW1hY2theS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiBYWCxcblx0XHQvLyBcdHRpdGxlOiAnQ2FwcmlTdW4gTWluaW9ucycsXG5cdFx0Ly8gXHRzbHVnOiAnY2FwcmlTdW4tbWluaW9ucycsXG5cdFx0Ly8gXHRzdGFjazoge1xuXHRcdC8vIFx0XHRqczogWydqUXVlcnknXSxcblx0XHQvLyBcdFx0cGhwOiBbJ1NpbHZlclN0cmlwZSddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9jYXByaVN1bi1taW5pb25zLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD48L3A+J1xuXHRcdC8vIH0se1xuXHRcdC8vIFx0SUQ6IDUsXG5cdFx0Ly8gXHR0aXRsZTogJ0dyZWVudmFsZSBQb3RhdG9wYWxzJyxcblx0XHQvLyBcdHNsdWc6ICdncmVlbnZhbGUtcG90YXRvcGFscycsXG5cdFx0Ly8gXHRzdGFjazoge1xuXHRcdC8vIFx0XHRqczogWydqUXVlcnknXSxcblx0XHQvLyBcdFx0cGhwOiBbJ1NpbHZlclN0cmlwZSddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9ncmVlbnZhbGUucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0fVxuXG5dO1xuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgXz13aW5kb3cuXztcblxudmFyIEFwcFJvdXRlciA9IHdpbmRvdy5CYWNrYm9uZS5Sb3V0ZXIuZXh0ZW5kKHtcblx0cm91dGVzOiB7XG5cdFx0Jyc6ICdyb290Jyxcblx0XHQnYmxvZygvKSgvOnBvc3QpJzogJ2Jsb2cnLFxuXHRcdCdwcm9qZWN0cygvOnByb2plY3QpJzogJ3Byb2plY3RzJyxcblx0XHQnY29udGFjdCc6ICdjb250YWN0Jyxcblx0XHQnYWJvdXQnOiAnYWJvdXQnXG5cdH0sXG5cblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oY29udGV4dCl7XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpyZWRpcmVjdCcsIHRoaXMucmVkaXJlY3QpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncm91dGVyOmdvVG9DdXJyZW50Q29udGVudCcsIHRoaXMuZ29Ub0N1cnJlbnRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpuZXh0Q29udGVudCcsIHRoaXMuZ29Ub05leHRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpwcmV2Q29udGVudCcsIHRoaXMuZ29Ub1ByZXZDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpzZXRDdXJyZW50Q29udGVudCcsIHRoaXMuc2V0Q3VycmVudENvbnRlbnQpO1xuXG5cdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5kZWZhdWx0Q29udGVudFJvdXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5vbigncm91dGU6cm9vdCcgLGZ1bmN0aW9uKCl7XG5cbiAgXHRcdG5ldyBjb250ZXh0LnZpZXdzLmludHJvKHtcbiAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG4gIFx0XHR9KTtcbiAgXHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnaW50cm8nKTtcblxuICBcdFx0dGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmJsb2cnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0Ly8gT25seSB0cmFuc2l0aW9uIGlmIHRoZSBjdXJyZW50IHZpZXcgaXMgbm90IGNoYW5naW5nIChidXQgdGhlIHJlc291cmNlIGlzKS5cblx0XHRcdHZhciB0cmFuc2l0aW9uID0gKHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID09PSBjb250ZXh0LnZpZXdzLmJsb2cpO1xuXG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuYmxvZy5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cgPSBuZXcgY29udGV4dC52aWV3cy5ibG9nKHtcblx0ICBcdFx0XHRzbHVnOiBzbHVnLFxuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXNbJ2Jsb2ctcG9zdCddXG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXNsdWcgfHwgIWNvbnRleHQudmlld3MuYmxvZy5jaGVja1NsdWcoc2x1ZykpIHtcblx0XHRcdFx0c2x1ZyA9IGNvbnRleHQudmlld3MuYmxvZy5kZWZhdWx0U2x1ZygpO1xuXHRcdFx0XHR0aGlzLm5hdmlnYXRlKGNvbnRleHQudmlld3MuYmxvZy5kZWZhdWx0Um91dGUoKSk7XG4gIFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuYmxvZy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcblxuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0XHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5ibG9nO1xuXHRcdFx0XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdyb3V0ZTpwcm9qZWN0cycgLGZ1bmN0aW9uKHNsdWcpe1xuXHRcdFx0Ly8gT25seSB0cmFuc2l0aW9uIGlmIHRoZSBjdXJyZW50IHZpZXcgaXMgbm90IGNoYW5naW5nIChidXQgdGhlIHJlc291cmNlIGlzKS5cblx0XHRcdHZhciB0cmFuc2l0aW9uID0gKHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID09PSBjb250ZXh0LnZpZXdzLnByb2plY3RzICYmIHRoaXMubGFzdFJvdXRlICE9PSAnJyk7XG5cblx0XHRcdGlmICghY29udGV4dC52aWV3cy5wcm9qZWN0cy5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLnByb2plY3RzID0gbmV3IGNvbnRleHQudmlld3MucHJvamVjdHMoe1xuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXMucHJvamVjdCxcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMucmVuZGVyKHtzbHVnOiBzbHVnLCB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG5cblx0XHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MucHJvamVjdHM7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmNvbnRhY3QnICxmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmNvbnRhY3QuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5jb250YWN0ID0gbmV3IGNvbnRleHQudmlld3MuY29udGFjdCh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5jb250YWN0XG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG4gIFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QucmVuZGVyKCk7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmxhc3RSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLmNvbnRhY3Q7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmFib3V0JyAsZnVuY3Rpb24oKXtcblx0XHRcdGlmICghY29udGV4dC52aWV3cy5hYm91dC5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmFib3V0ID0gbmV3IGNvbnRleHQudmlld3MuYWJvdXQoe1xuXHQgIFx0XHRcdG1vZGVsOiB7fSxcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmFib3V0XG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG4gIFx0XHRjb250ZXh0LnZpZXdzLmFib3V0LnJlbmRlcigpO1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5hYm91dDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6ZGVmYXVsdFJvdXRlJywgZnVuY3Rpb24oKXtcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG5cblx0fSxcblx0c2V0Q3VycmVudENvbnRlbnQ6IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGlmIChjb250ZW50LnZpZXcpIHt0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRlbnQudmlldzsgfVxuXHRcdGlmIChjb250ZW50LnJvdXRlKSB7dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSBjb250ZW50LnJvdXRlOyB9XG5cdH0sXG5cdGdvVG9DdXJyZW50Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubmF2aWdhdGUodGhpcy5jdXJyZW50Q29udGVudFJvdXRlLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuXHR9LFxuXHRnb1RvUHJldkNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXRQcmV2TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3LnByZXZSb3V0ZSgpO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXHR9LFxuXHRnb1RvTmV4dENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXROZXh0TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3Lm5leHRSb3V0ZSgpO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXHR9LFxuXHRkZWZhdWx0Q29udGVudFJvdXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICcjL2Fib3V0Jztcblx0fSxcblx0cmVkaXJlY3Q6IGZ1bmN0aW9uKHJvdXRlKXtcblx0XHR0aGlzLm5hdmlnYXRlKHJvdXRlLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFJvdXRlcjsiLCJ2YXIgZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7IFxuXG4gdmFyIEhhbmRsZWJhcnMgPSB3aW5kb3cuSGFuZGxlYmFyczsgXG5cbnRoaXNbXCJKU1RcIl0gPSB0aGlzW1wiSlNUXCJdIHx8IHt9O1xuXG50aGlzW1wiSlNUXCJdW1wiYWJvdXRcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBhYm91dFxcXCI+XFxuXHQ8aDI+YWJvdXQ8L2gyPlxcbjwvZGl2PlwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImJsb2ctcG9zdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snd2l0aCddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXR0cmlidXRlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcIndpdGhcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lclxcXCI+XFxuXHRcdFx0PGgyIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXG5cdFx0XHQ8dWw+PC91bD5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFx0XHRcXG5cdFx0XHRcdFx0XHRcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2PlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlxcblx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgcGxhY2Vob2xkZXItdmlld1xcXCI+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImgyLXRpdGxlXFxcIj48L2Rpdj5cXG5cdFx0PHVsPjwvdWw+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJwYW5lbCBcXFwiPlxcblx0XHRcdFx0XHQ8aW1nIHNyYz1cXFwiYXNzZXRzL2ltYWdlcy91aS8zODUuZ2lmXFxcIiBjbGFzcz1cXFwibG9hZGluZy1zcGlubmVyXFxcIj5cXG5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdDwvZGl2PlxcblxcblwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazE7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdHRyaWJ1dGVzIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg0LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyByZXR1cm4gc3RhY2sxOyB9XG4gIGVsc2UgeyByZXR1cm4gJyc7IH1cbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJjb250YWN0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgYWJvdXRcXFwiPlxcblx0PGgyPmNvbnRhY3Q8L2gyPlxcbjwvZGl2PlwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImludHJvXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiPHVsIGNsYXNzPVxcXCJzb2NpYWwtaWNvbnNcXFwiPlxcblx0PGxpPjxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL1NwZW5fVGF5bG9yXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdHdpdHRlclxcXCI+PC9pPjwvYT48L2xpPlxcblx0PGxpPjxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vU3BlblVLXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZ2l0aHViXFxcIj48L2k+PC9hPjwvbGk+XFxuXHQ8bGk+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHA6Ly91ay5saW5rZWRpbi5jb20vaW4vc3BlbnRheWxvclxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluXFxcIj48L2k+PC9hPjwvbGk+XFxuPC91bD5cXG5cXG48aDE+SGkhIEknbSA8YSBocmVmPVxcXCIjL2Fib3V0XFxcIiBjbGFzcz1cXFwiYWJvdXRcXFwiPlNwZW4gVGF5bG9yPC9hPjwvaDE+XFxuXFxuPGRpdiBjbGFzcz1cXFwicGFnZS1pY29ucy13cmFwcGVyXFxcIj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcInBhZ2UtaWNvbi13cmFwcGVyXFxcIj5cXG5cdFx0PGEgaHJlZj1cXFwiIy9wcm9qZWN0c1xcXCIgY2xhc3M9XFxcInByb2plY3RzXFxcIj5cXG5cdFx0XHQ8aW1nIGNsYXNzPVxcXCJwYWdlLWljb25cXFwiIHNyYz1cXFwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy1jb2RlLnBuZ1xcXCI+XFxuXHRcdFx0PGg0PnByb2plY3RzPC9oND5cXG5cdFx0PC9hPlxcblx0PC9kaXY+XFxuXFxuXHQ8ZGl2IGNsYXNzPVxcXCJwYWdlLWljb24td3JhcHBlclxcXCI+XFxuXHRcdDxhIGhyZWY9XFxcIiMvYmxvZ1xcXCIgY2xhc3M9XFxcImJsb2dcXFwiPlxcblx0XHRcdDxpbWcgY2xhc3M9XFxcInBhZ2UtaWNvblxcXCIgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL2Jsb2ctYm9vay5wbmdcXFwiPlxcblx0XHRcdDxoND5ibG9nPC9oND5cXG5cdFx0PC9hPlxcblx0PC9kaXY+XFxuXFxuXHQ8ZGl2IGNsYXNzPVxcXCJwYWdlLWljb24td3JhcHBlclxcXCI+XFxuXHRcdDxhIGhyZWY9XFxcIiMvY29udGFjdFxcXCIgY2xhc3M9XFxcImNvbnRhY3RcXFwiPlxcblx0XHRcdDxpbWcgY2xhc3M9XFxcInBhZ2UtaWNvblxcXCIgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL2NvbnRhY3Qtc3BlZWNoLWJ1YmJsZXMucG5nXFxcIj5cXG5cdFx0XHQ8aDQ+Y29udGFjdDwvaDQ+XFxuXHRcdDwvYT5cXG5cdDwvZGl2PlxcblxcbjwvZGl2PlxcblxcbjxwIHN0eWxlPVxcXCJwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogNjBweDsgcGFkZGluZzogMjBweDsgd2lkdGg6IDEwMCU7IG1hcmdpbjogYXV0bzsgZm9udC1zaXplOiAuODVlbTsgY29sb3I6ICNiYmI7XFxcIj5JJ20gc3RpbGwgd29ya2luZyBvbiB0aGlzIHNpdGUsIHNvIHBsZWFzZSBiYXJlIHdpdGggbWUhPC9wPlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJtYXN0ZXJcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBidWZmZXIgPSBcIiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXdyYXBcXFwiPlxcblx0PGRpdiBjbGFzcz1cXFwibGFuZGluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNlbGxcXFwiPlxcbiAgXHRcdDxkaXYgY2xhc3M9XFxcImxhbmRpbmctY29udGVudFxcXCIgaWQ9XFxcImxhbmRpbmdcXFwiPlxcbiAgICAgICAgXCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW50cm9Db250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pbnRyb0NvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaW50cm9Db250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIlxcbiAgXHRcdDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cdDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudC13cmFwcGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG5cXG4gICAgPC9kaXY+ICAgIFx0IFxcbiAgXHQ8ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIiBpZD1cXFwibWFpblxcXCI+XCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubWFpbkNvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1haW5Db250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcIm1haW5Db250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIjwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQgdHJhbnNpdGlvbmVyXFxcIj48L2Rpdj5cXG4gIFx0PC9kaXY+XFxuXFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wicHJvamVjdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snd2l0aCddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXR0cmlidXRlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcIndpdGhcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lclxcXCI+XFxuXHRcdFx0PGgyIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXG5cdFx0XHQ8dWw+PC91bD5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFx0XHRcXG5cdFx0XHRcdFx0XHRcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2PlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlxcblx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgcGxhY2Vob2xkZXItdmlld1xcXCI+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImgyLXRpdGxlXFxcIj48L2Rpdj5cXG5cdFx0PHVsPjwvdWw+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJwYW5lbCBcXFwiPlxcblx0XHRcdFx0XHQ8aW1nIHNyYz1cXFwiYXNzZXRzL2ltYWdlcy91aS8zODUuZ2lmXFxcIiBjbGFzcz1cXFwibG9hZGluZy1zcGlubmVyXFxcIj5cXG5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdDwvZGl2PlxcblxcblwiO1xufSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIlxcblwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXR0cmlidXRlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhKSxcImludmVyc2VcIjp0aGlzLnByb2dyYW0oNCwgZGF0YSksXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJ1aS9oZWFkZXJcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMucHJldkxpbmsgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnByZXZMaW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInByZXZMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImdvLXByZXZcXFwiIFwiO1xufSxcIjNcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIiBjbGFzcz1cXFwiZ28tcHJldiBoaWRlXFxcIlwiO1xuICB9LFwiNVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gXCIgaHJlZj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5uZXh0TGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwibmV4dExpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiZ28tbmV4dFxcXCIgXCI7XG59LFwiN1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiIGNsYXNzPVxcXCJnby1uZXh0IGhpZGVcXFwiXCI7XG4gIH0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCI8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWZvb3Rlci1jb250ZW50XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImljb24gbWVudVxcXCI+XFxuICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWRvd24gZmEtMnggc2hvdy1jb250ZW50XFxcIj48L2k+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGVudFxcXCI+XFxuICAgIDxhIFwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucHJldkxpbmsgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDMsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdFxcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICAgIFxcbiAgICA8YSBocmVmPVxcXCIjXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uIG1lbnVcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWJhcnMgZmEtMnggc2hvdy1pbnRyb1xcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICBcXG4gICAgPGEgXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uZXh0TGluayA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSg1LCBkYXRhKSxcImludmVyc2VcIjp0aGlzLnByb2dyYW0oNywgZGF0YSksXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1yaWdodFxcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICBcXG48L2Rpdj5cXG48ZGl2PjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG4gcmV0dXJuIHRoaXNbJ0pTVCddO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdhYm91dCcsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXG5cdFx0Y29uc29sZS5sb2coJ3JlbmRlciBhYm91dCcpO1xuXG5cdFx0XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLm5hbWVzcGFjZSApO1x0XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcnRpY2xlU3R1YnMgPSByZXF1aXJlKCcuLi9ibG9nLXBvc3Qtc3R1YnMuanMnKTtcbnZhciBBcnRpY2xlQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL2Jsb2ctcG9zdHMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdibG9nJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgQXJ0aWNsZUNvbGxlY3Rpb24oKTtcblx0XHQvLyBjb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuXHRcdGlmIChmYWxzZSkge1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOlN0YXJ0TG9hZGluZ0luZGljYXRvcnMnKTtcblx0XHRcdGNvbGxlY3Rpb24uZmV0Y2goe1xuICBcdFx0XHRyZW1vdmU6IGZhbHNlLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzdG9wTG9hZGluZ0luZGljYXRvcnMnKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnN0b3BMb2FkaW5nSW5kaWNhdG9ycycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZGRTdHVicygpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblxuXHRcdGlmICghdGhpcy5jaGVja1NsdWcob3B0aW9ucy5zbHVnKSkge1xuXHRcdFx0dmFyIGxhdGVzdCA9IGNvbGxlY3Rpb24uZmlyc3QoKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gbGF0ZXN0O1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IDA7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSlbMF07XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XHRcdFx0XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHN0cmluZ1RvUmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlKHRoaXMuY3VycmVudFJlY29yZCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiB0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1xuXHRcdH1cblx0XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnLCB7bGluazogdGhpcy5wcmV2Um91dGUoKX0pO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHRoaXMubmV4dFJvdXRlKCl9KTtcblx0XHRpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB0aGlzLnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRlbC5odG1sKHRoaXMuc3RyaW5nVG9SZW5kZXIoKSk7XHRcblx0XHR9XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcdFxuXG5cdFx0XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fSxcblx0YWRkU3R1YnM6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0dmFyIGkscmVzcG9uc2UgPSBhcnRpY2xlU3R1YnM7XG5cdFx0Zm9yIChpID0gcmVzcG9uc2UucG9zdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdHZhciByZWNvcmQgPSByZXNwb25zZS5wb3N0c1tpXTtcblx0XHRcdGlmICghY29sbGVjdGlvbi53aGVyZSh7SUQ6IHJlY29yZC5JRH0pLmxlbmd0aCkge1xuXHRcdFx0XHRjb2xsZWN0aW9uLmFkZChyZWNvcmQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0Z2V0TmV4dE1vZGVsOiBmdW5jdGlvbigpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmF0KCh0aGlzLnBvc2l0aW9uICsxID4gY29sbGVjdGlvbi5sZW5ndGggLTEpPyAgZmFsc2UgOiB0aGlzLnBvc2l0aW9uICsgMSk7XG5cdH0sXG5cdGdldFByZXZNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCgodGhpcy5wb3NpdGlvbiAtMSA8IDApID8gZmFsc2UgOiB0aGlzLnBvc2l0aW9uIC0gMSk7XG5cdH0sXG5cdG5leHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgbW9kZWwgPSB0aGlzLmdldE5leHRNb2RlbCgpO1xuXHRcdHJldHVybiBtb2RlbD8gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIG1vZGVsLmdldCgnc2x1ZycpIDogZmFsc2U7XG5cdH0sXG5cdHByZXZSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgbW9kZWwgPSB0aGlzLmdldFByZXZNb2RlbCgpO1xuXHRcdHJldHVybiBtb2RlbD8gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIG1vZGVsLmdldCgnc2x1ZycpIDogZmFsc2U7XG5cdH0sXG5cdGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0cmV0dXJuICh0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IHNsdWd9KS5sZW5ndGggPj0gMSk7XG5cdH0sXG5cdGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRSZWNvcmQgPyB0aGlzLmN1cnJlbnRSZWNvcmQuZ2V0KCdzbHVnJykgOiB0aGlzLmNvbGxlY3Rpb24uZmlyc3QoKS5nZXQoJ3NsdWcnKTtcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAnL2Jsb2cvJyArIHRoaXMuZGVmYXVsdFNsdWcoKTtcblx0fVxufSk7XG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2NvbnRhY3QnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnaW50cm8nLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLnJlbmRlcihvcHRpb25zKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRvcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UpO1xuXG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vdGVtcGxhdGVzLmpzJyk7XG52YXIgaGVhZGVyVmlldyA9IHJlcXVpcmUoJy4vdWkvaGVhZGVyLmpzJyk7XG52YXIgdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL3BhZ2UtdHJhbnNpdGlvbnMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJ2h0bWwnLFxuXHRjb250ZW50RWw6ICcubWFpbiAuY29udGVudCcsXG5cdHRyYW5zaXRpb25FbDogJy5tYWluIC50cmFuc2l0aW9uLWNvbnRlbnQnLFxuXHRoZWFkZXI6ICcuaGVhZGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oKXtcblxuXHRcdHZhciBzdGF0ZSA9ICh3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPj0gMSkgPyAnY29udGVudCcgOiAnaW50cm8nO1xuXHRcdGNvbnNvbGUubG9nKCdzdGF0ZTonLCBzdGF0ZSk7XG5cdFx0dGhpcy5yZW5kZXIoe1xuXHRcdFx0c3RhdGU6IHN0YXRlLFxuXHRcdFx0aW50cm9Db250ZW50OiB0ZW1wbGF0ZXMuaW50cm8oKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50cmFuc2l0aW9ucyA9IG5ldyB0cmFuc2l0aW9ucyh7XG5cdFx0XHRjb250YWluZXI6ICcucGFnZS13cmFwIC5tYWluJyxcblx0XHRcdGNvbnRlbnQ6ICcuY29udGVudCcsXG5cdFx0XHR0cmFuc2l0aW9uQ2xhc3M6ICcudHJhbnNpdGlvbmVyJ1xuXHRcdH0pO1xuXG5cdFx0Ly8gdHJhbnNpdGlvbnMuaW5pdGlhbGl6ZSh7XG5cdFx0Ly8gXHRlbDogJy5wYWdlLXdyYXAgLm1haW4nLFxuXHRcdC8vIFx0bWFpbjogJy5jb250ZW50Jyxcblx0XHQvLyBcdHRyYW5zaXRpb25lcjogJy50cmFuc2l0aW9uLWNvbnRlbnQnXG5cdFx0Ly8gfSk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKHRoaXMuaGVhZGVyKTtcblx0XHR0aGlzLmhlYWRlclZpZXcgPSBuZXcgaGVhZGVyVmlldyh7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnZ29Ub0N1cnJlbnRDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLXByZXYnOiAncHJldkNvbnRlbnQnLFxuXHRcdCdjbGljayAuZ28tbmV4dCc6ICduZXh0Q29udGVudCdcblx0XHQvLyAnY2xpY2sgLnNob3ctaW50cm8nOiAnc2hvd0ludHJvJ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdCQoJ2JvZHknKS5odG1sKHRlbXBsYXRlcy5tYXN0ZXIob3B0aW9ucykpO1xuICB9LFxuICBzaG93Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ludHJvJyk7XG5cdH0sXG5cdHNob3dJbnRybzogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cdH0sXG5cdHNldE5hbWVzcGFjZTogZnVuY3Rpb24obmFtZXNwYWNlKSB7XHRcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICQudHJpbShcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uKGMpIHsgXG5cdFx0XHRcdHJldHVybiBjLmxhc3RJbmRleE9mKCdwYWdlLScsIDApICE9PSAwOyBcblx0XHRcdH0pLmpvaW4oJyAnKSArICcgcGFnZS0nICtuYW1lc3BhY2UgKTtcblx0fSxcblx0bmV4dENvbnRlbnQ6IGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnRyYW5zaXRpb25zLmRpcmVjdGlvbiA9ICduZXh0Jztcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOm5leHRDb250ZW50Jyk7XG5cdH0sXG5cdHByZXZDb250ZW50OiBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5kaXJlY3Rpb24gPSAncHJldic7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpwcmV2Q29udGVudCcpO1xuXHR9LFxuICBnb1RvQ3VycmVudENvbnRlbnQ6IGZ1bmN0aW9uKCl7XG4gIFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnKTtcbiAgfSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdHZhciB0aGlzXyA9IHRoaXM7XG5cdFx0JCh3aW5kb3cpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMTE5KSB7XG5cdFx0XHRcdHRoaXNfLnRyYW5zaXRpb25zLm5leHQoKTtcblx0XHRcdH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMTMpIHtcblx0XHRcdFx0dGhpc18udHJhbnNpdGlvbnMucHJldigpO1x0XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR2YXIgdHJhbnNpdGlvbnMgPSB0aGlzLnRyYW5zaXRpb25zO1xuXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRlbnQpe3RyYW5zaXRpb25zLnJlbmRlcihjb250ZW50KTt9XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnNob3dDb250ZW50JywgdGhpcy5zaG93Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93SW50cm8nLCB0aGlzLnNob3dJbnRybyk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMuc2V0TmFtZXNwYWNlKTtcblxuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndHJhbnNpdGlvbjpyZW5kZXInLCByZW5kZXIpO1xuXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHByb2plY3RTdHVicyA9IHJlcXVpcmUoJy4uL3Byb2plY3RzLXN0dWJzLmpzJyk7XG52YXIgUHJvamVjdENvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9ucy9wcm9qZWN0cy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XHRcblx0bmFtZXNwYWNlOiAncHJvamVjdHMnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmNvbGxlY3Rpb24gPSBuZXcgUHJvamVjdENvbGxlY3Rpb24oKTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldEN1cnJlbnQ6IGZ1bmN0aW9uKHNsdWcpe1xuXHRcdHNsdWcgPSAoc2x1ZyB8fCAnJyk7XG5cblx0XHRpZiAoIXRoaXMuY2hlY2tTbHVnKHNsdWcpKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSB0aGlzLmNvbGxlY3Rpb24uZmlyc3QoKTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSB0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IHNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1x0XHRcdFxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdHJpbmdUb1JlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSh7YXR0cmlidXRlczogdGhpcy5jdXJyZW50UmVjb3JkLmF0dHJpYnV0ZXN9KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR2YXIgdmlldyA9IHRoaXM7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnM7XG5cblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbi5sZW5ndGgpIHtcblx0XHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcblxuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnKTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XG5cdFx0XHR0aGlzLmZldGNoUmVuZGVyKG9wdGlvbnMpO1xuXG5cdFx0fSBlbHNlIHtcbiBcblx0XHRcdGlmIChvcHRpb25zLnNsdWcgJiYgdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOnJlZGlyZWN0Jywgdmlldy5kZWZhdWx0Um91dGUoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3RyYW5zaXRpb246cmVuZGVyJywgdGhpcy5zdHJpbmdUb1JlbmRlcigpICk7XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGVsLmh0bWwodGhpcy5zdHJpbmdUb1JlbmRlcigpKTtcdFxuXHRcdFx0fVx0XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jywge2xpbms6IHRoaXMucHJldlJvdXRlKCl9KTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHRoaXMubmV4dFJvdXRlKCl9KTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGZldGNoUmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR2YXIgdmlldyA9IHRoaXM7XG5cdFx0aWYgKGZhbHNlKSB7XG5cdFx0XHR0aGlzLmNvbGxlY3Rpb24uZmV0Y2goe1xuICBcdFx0XHRyZW1vdmU6IGZhbHNlLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpe1xuXG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiB2aWV3LmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0dmlldy5jdXJyZW50UmVjb3JkID0gdmlldy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdFx0XHRcdHZpZXcucG9zaXRpb24gPSB2aWV3LmNvbGxlY3Rpb24uaW5kZXhPZih2aWV3LmN1cnJlbnRSZWNvcmQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd0cmFuc2l0aW9uOnJlbmRlcicsIHZpZXcuc3RyaW5nVG9SZW5kZXIoKSApO1x0XG5cblx0XHRcdFx0XHQvLyB3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB2aWV3LnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZpZXcuYWRkU3R1YnMoe3N1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG5cblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLnNsdWcgJiYgdmlldy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0dmlldy5jdXJyZW50UmVjb3JkID0gdmlldy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdFx0XHRcdFx0dmlldy5wb3NpdGlvbiA9IHZpZXcuY29sbGVjdGlvbi5pbmRleE9mKHZpZXcuY3VycmVudFJlY29yZCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd0cmFuc2l0aW9uOnJlbmRlcicsIHZpZXcuc3RyaW5nVG9SZW5kZXIoKSApO1x0XG5cblx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFkZFN0dWJzKHtzdWNjZXNzOiBmdW5jdGlvbigpe1xuXG5cdFx0XHRcdGlmIChvcHRpb25zLnNsdWcgJiYgdmlldy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcblx0XHRcdFx0XHR2aWV3LmN1cnJlbnRSZWNvcmQgPSB2aWV3LmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuXHRcdFx0XHRcdHZpZXcucG9zaXRpb24gPSB2aWV3LmNvbGxlY3Rpb24uaW5kZXhPZih2aWV3LmN1cnJlbnRSZWNvcmQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZpZXcuY3VycmVudFJlY29yZCA9IHZpZXcuY29sbGVjdGlvbi5maXJzdCgpO1xuXHRcdFx0XHRcdHZpZXcucG9zaXRpb24gPSB2aWV3LmNvbGxlY3Rpb24uaW5kZXhPZih2aWV3LmN1cnJlbnRSZWNvcmQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpyZWRpcmVjdCcsIHZpZXcuZGVmYXVsdFJvdXRlKCkpO1xuXG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicsIHtsaW5rOiB2aWV3LnByZXZSb3V0ZSgpfSk7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHZpZXcubmV4dFJvdXRlKCl9KTtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdmlldy5uYW1lc3BhY2UgKTtcblxuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB2aWV3LnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXG5cdFx0XHR9fSk7XG5cdFx0fVxuXHR9LFxuXHR0cmFuc2l0aW9uUmVuZGVyOiBmdW5jdGlvbigpe1xuXG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fSxcblx0YWRkU3R1YnM6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSk7XG5cdFx0dmFyIHZpZXcgPSB0aGlzO1xuXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHZhciBpLHJlc3BvbnNlID0gcHJvamVjdFN0dWJzO1xuXG5cdFx0XHRmb3IgKGkgPSByZXNwb25zZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHR2YXIgcmVjb3JkID0gcmVzcG9uc2VbaV07XG5cdFx0XHRcdGlmICghdmlldy5jb2xsZWN0aW9uLndoZXJlKHtJRDogcmVjb3JkLklEfSkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmlldy5jb2xsZWN0aW9uLmFkZChyZWNvcmQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XHRcblx0XHRcdChvcHRpb25zLnN1Y2Nlc3MgfHwgJC5ub29wKSgpO1xuXG5cdFx0fSwgNTAwKTsgLy8gZmFraW5nIGFzeW5jXG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0Z2V0TmV4dE1vZGVsOiBmdW5jdGlvbigpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmF0KCh0aGlzLnBvc2l0aW9uICsxID4gY29sbGVjdGlvbi5sZW5ndGggLTEpPyAgZmFsc2UgOiB0aGlzLnBvc2l0aW9uICsgMSk7XG5cdH0sXG5cdGdldFByZXZNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCgodGhpcy5wb3NpdGlvbiAtMSA8IDApID8gZmFsc2UgOiB0aGlzLnBvc2l0aW9uIC0gMSk7XG5cdH0sXG5cdG5leHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgbW9kZWwgPSB0aGlzLmdldE5leHRNb2RlbCgpO1xuXHRcdHJldHVybiBtb2RlbD8gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIG1vZGVsLmdldCgnc2x1ZycpIDogZmFsc2U7XG5cdH0sXG5cdHByZXZSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgbW9kZWwgPSB0aGlzLmdldFByZXZNb2RlbCgpO1xuXHRcdHJldHVybiBtb2RlbD8gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIG1vZGVsLmdldCgnc2x1ZycpIDogZmFsc2U7XG5cdH0sXG5cdGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0cmV0dXJuICh0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IHNsdWd9KS5sZW5ndGggPj0gMSk7XG5cdH0sXG5cdGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRSZWNvcmQgPyB0aGlzLmN1cnJlbnRSZWNvcmQuZ2V0KCdzbHVnJykgOiB0aGlzLmNvbGxlY3Rpb24uZmlyc3QoKS5nZXQoJ3NsdWcnKTtcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAnL3Byb2plY3RzLycgKyB0aGlzLmRlZmF1bHRTbHVnKCk7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLnJlbmRlcih7fSk7XG5cdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2hlYWRlciByZW5kZXJlZCcpO1xuXHR9LFxuXHRldmVudHM6IHtcblx0XHQnY2xpY2sgLnNob3ctY29udGVudCc6ICdzaG93Q29udGVudCcsXG5cdFx0J2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgc2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKCl7XG4gIFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG4gIH0sXG4gIHNob3dJbnRybzogZnVuY3Rpb24oKXtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0ludHJvJyk7XG4gIH0sXG4gIHVwZGF0ZVVpUHJldjogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFx0dmFyIHByZXYgPSAnLmdvLXByZXYnO1xuICBcdHZhciAkcHJldiA9IHRoaXMuJGVsLmZpbmQocHJldik7XG4gIFx0aWYgKG9wdGlvbnMubGluaykge1xuICBcdFx0JHByZXYucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgb3B0aW9ucy5saW5rKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JHByZXYuYWRkQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgJyMnKTtcbiAgXHR9XG4gIH0sXG4gIHVwZGF0ZVVpTmV4dDogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFx0dmFyIG5leHQgPSAnLmdvLW5leHQnO1xuICBcdHZhciAkbmV4dCA9IHRoaXMuJGVsLmZpbmQobmV4dCk7XG4gIFx0aWYgKG9wdGlvbnMubGluaykge1xuICBcdFx0JG5leHQucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgb3B0aW9ucy5saW5rKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JG5leHQuYWRkQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgJyMnKTtcbiAgXHR9XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnVwZGF0ZVByZXYnLCB0aGlzLnVwZGF0ZVVpUHJldik7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTp1cGRhdGVOZXh0JywgdGhpcy51cGRhdGVVaU5leHQpO1xuXHR9XG59KTsiXX0=
