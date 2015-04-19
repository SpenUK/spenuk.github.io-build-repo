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
},{"./router.js":10,"./templates.js":11,"./views/about.js":12,"./views/blog-post.js":13,"./views/contact.js":15,"./views/intro.js":16,"./views/master.js":17,"./views/project.js":18}],2:[function(require,module,exports){
module.exports = {"found":3,"posts":[{"ID":15,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-07T11:09:54+00:00","modified":"2015-03-29T13:27:20+00:00","title":"Third Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/07\/third-post\/","short_URL":"http:\/\/wp.me\/p50g34-f","content":"<h2>Lorizzle<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p>Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. In hizzle pizzle dope dictumst. Shizzlin dizzle dapibizzle. Curabitizzle tellizzle crazy, pretizzle things, mattis izzle, fizzle vitae, nunc. We gonna chung suscipit. Integer yo mamma dope ghetto hizzle.<\/p>\n<h2>shut the shizzle<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p>Curabitizzle shut the shizzle up pimpin&#8217; gangsta nisi break it down mollizzle. Suspendisse potenti. Fo shizzle go to hizzle. I&#8217;m in the shizzle neque. Mofo orci. Crizzle mauris mauris, mofo funky fresh, feugiat sit amizzle, boofron izzle, pede. Pellentesque shizzle my nizzle crocodizzle. Vestibulizzle gangster mi, volutpizzle izzle, sagittis sed, fo shizzle sempizzle, sizzle. Check out this izzle ipsizzle. That&#8217;s the shizzle black felizzle mofo orci. Nizzle pizzle go to hizzle tellivizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle sodalizzle ornare. Mammasay mammasa mamma oo sa venenatizzle fizzle yo lacizzle. Yo things. Suspendisse sure placerat lacus. Sizzle dang ante. Nunc go to hizzle, leo eu dapibus hendrerizzle, shiz felizzle cool sizzle, break it down crazy magna that&#8217;s the shizzle luctus pede. Nam a mammasay mammasa mamma oo sa. Class crackalackin taciti crunk ad litora torquent bizzle black we gonna chung, away sheezy hymenaeos. Break yo neck, yall interdum, fizzle nizzle elementizzle nonummy, ass orci viverra leo, boofron mammasay mammasa mamma oo sa risizzle arcu my shizz sizzle.<\/p>\n","excerpt":"<p>Lorizzle &nbsp; Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. [&hellip;]<\/p>\n","slug":"third-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=15","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":0},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"e8c40e7b0109e4fa1935c694d8ec0c2f","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{},"categories":{"Uncategorized":{"ID":1,"name":"Uncategorized","slug":"uncategorized","description":"","post_count":2,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{},"attachment_count":0,"metadata":[{"id":"57","key":"geo_public","value":"0"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}},{"ID":7,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-04T14:17:38+00:00","modified":"2015-03-29T13:25:43+00:00","title":"Second Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/04\/second-post\/","short_URL":"http:\/\/wp.me\/p50g34-7","content":"<h2>Lorem ipsum<\/h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae egestas posuere, neque elit ultricies dui, vel mattis nibh enim ac lorem. Maecenas molestie nisl sit amet velit dictum lobortis. Aliquam erat volutpat.<\/p>\n<p><img class=\"aligncenter size-medium wp-image-8\" src=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg?w=300&#038;h=249\" alt=\"jaba\" width=\"300\" height=\"249\" \/><\/p>\n<h2>Vivamus sagittis<\/h2>\n<p>Vivamus sagittis, diam in vehicula lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien vitae mi elementum laoreet. Suspendisse potenti. Aliquam erat nisl, aliquam pretium libero aliquet, sagittis eleifend nunc. In hac habitasse platea dictumst. Integer turpis augue, tincidunt dignissim mauris id, rhoncus dapibus purus. Maecenas et enim odio. Nullam massa metus, varius quis vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed, gravida leo. In dictum mauris vel augue varius, ac ullamcorper nisl ornare. In eu posuere velit, ac fermentum arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sed malesuada leo, at interdum elit.<\/p>\n","excerpt":"<p>&nbsp; Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat est. Morbi [&hellip;]<\/p>\n","slug":"second-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=7","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":0},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"38a4f8693cb2d03fbebb35517b30aa66","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{},"categories":{"Category1":{"ID":28527,"name":"Category1","slug":"category1","description":"","post_count":1,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:category1","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:category1\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{"8":{"ID":8,"URL":"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg","guid":"http:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg","date":"2014-09-04T14:16:41+00:00","post_ID":7,"file":"jaba.jpg","mime_type":"image\/jpeg","extension":"jpg","title":"jaba","caption":"","description":"","alt":"","thumbnails":{},"height":415,"width":500,"exif":{"aperture":0,"credit":"","camera":"","caption":"","created_timestamp":0,"copyright":"","focal_length":0,"iso":0,"shutter_speed":0,"title":"","orientation":0},"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/8","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/8\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","parent":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7"}}}},"attachment_count":"1","metadata":[{"id":"31","key":"geo_public","value":"0"},{"id":"21","key":"_wpas_mess","value":"undefined"},{"id":"15","key":"_wpas_skip_facebook","value":"1"},{"id":"16","key":"_wpas_skip_google_plus","value":"1"},{"id":"18","key":"_wpas_skip_linkedin","value":"1"},{"id":"20","key":"_wpas_skip_path","value":"1"},{"id":"19","key":"_wpas_skip_tumblr","value":"1"},{"id":"17","key":"_wpas_skip_twitter","value":"1"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}},{"ID":3,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-01T11:45:09+00:00","modified":"2015-03-29T13:28:21+00:00","title":"First Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/01\/first-post\/","short_URL":"http:\/\/wp.me\/p50g34-3","content":"<h2 style=\"text-align:left;\">Hipster Ipsum<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p style=\"text-align:left;\">Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel put a bird on it. Drinking vinegar food truck McSweeney&#8217;s roof party, salvia +1 tattooed DIY disrupt Helvetica. Narwhal kale chips tousled beard distillery Odd Future, PBR&amp;B 90&#8217;s selvage cardigan church-key scenester. Paleo sustainable actually Carles cray cliche dreamcatcher.<\/p>\n<p><a href=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg\"><img class=\"aligncenter size-medium wp-image-4\" src=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg?w=300&#038;h=219\" alt=\"subo\" width=\"300\" height=\"219\" \/><\/a><\/p>\n<p>Pitchfork actually readymade messenger bag, craft beer Pinterest scenester Thundercats sartorial keffiyeh hella twee organic Brooklyn. Shoreditch Thundercats art party sartorial tattooed flexitarian, actually direct trade PBR&amp;B before they sold out Etsy Vice. Selfies High Life roof party trust fund, swag shabby chic Godard freegan fap authentic asymmetrical. Retro hashtag Thundercats selfies hella direct trade. IPhone swag next level, gastropub chambray retro Etsy squid kitsch. Viral locavore Brooklyn plaid Carles. Church-key hella narwhal, YOLO ethnic scenester biodiesel Odd Future.<\/p>\n","excerpt":"<p>Hipster Ipsum &nbsp; Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel [&hellip;]<\/p>\n","slug":"first-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=3","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":1},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"54e4d86f54daa326a38050d0c4fe364a","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{"kale chips":{"ID":6017001,"name":"kale chips","slug":"kale-chips","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:kale-chips","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:kale-chips\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}},"Odd Future":{"ID":16642545,"name":"Odd Future","slug":"odd-future","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:odd-future","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:odd-future\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}},"YOLO":{"ID":711100,"name":"YOLO","slug":"yolo","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:yolo","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:yolo\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"categories":{"Uncategorized":{"ID":1,"name":"Uncategorized","slug":"uncategorized","description":"","post_count":2,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{"4":{"ID":4,"URL":"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg","guid":"http:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg","date":"2014-09-01T11:42:43+00:00","post_ID":3,"file":"subo.jpg","mime_type":"image\/jpeg","extension":"jpg","title":"subo","caption":"","description":"","alt":"","thumbnails":{},"height":329,"width":450,"exif":{"aperture":0,"credit":"","camera":"","caption":"","created_timestamp":0,"copyright":"","focal_length":0,"iso":0,"shutter_speed":0,"title":"","orientation":0},"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/4","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/4\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","parent":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3"}}}},"attachment_count":"1","metadata":[{"id":"8","key":"geo_public","value":"0"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}}]};
},{}],3:[function(require,module,exports){
'use strict';

var CollectionExtension = require('./collectionExtension.js');
var stubs = require('../blog-post-stubs.js');

module.exports = CollectionExtension.extend({
	
	// model: ArticleModel,
  stubs: stubs,
	position: 0,
	totalRecords: 0,
	isLoading: false,
  url: function(){
  	return 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts';
  },
  parse: function(response){
  	this.totalRecords = response.found;
    return response.posts;
  }
});
},{"../blog-post-stubs.js":2,"./collectionExtension.js":4}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
  }
});
},{"../projects-stubs.js":9,"./collectionExtension.js":4}],6:[function(require,module,exports){
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


// $(document).mousewheel(function(event, delta, deltaX, deltaY) {
//   	if (deltaX > 10){
// 		$(".square").addClass("animation");
// 	}else if(deltaX < -10){
// 		$(".square").removeClass("animation");
// 	}
// 	if (deltaY != 0){
// 	    ///Anything that makes vertical wheelscroll keeps normal
//     } else {
//         event.preventDefault();
//     }
//     // I have to preventDefault only the horizontal scroll, otherwise page will go back or go forward in history
	
// });
},{}],7:[function(require,module,exports){
'use strict';

var app = require('./app.js');



$(document).on('ready', function(){
	app.initialize();
});
},{"./app.js":1}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
		content: '<img src="assets/images/projects/sauce.png" style="width:100%;"><p>The reason I got started with learning to code was to set up an ecommerce site for \'The Sauce\', a brand that I was hoping to set up.<br>I had started creating designs for teeshirts and sweatshirts etc., bought a load of printing equipment and inks and needed to set up a channel a channel to sell the products that I would be creating.</p><p>Although there is certainly nothing groundbraking in this project I had set myself a few challenges that turned out to be quite tough at the time and helped me understand more about PHP, JS and coding in general.</p><h2>Product Listing</h2><hr><p>Rather than opt for a straight up list of product thumbnails I wanted to have sections that featured a number of thumbnails with a \'product focus\' panel that would show more detail of whichever product the user was currently hovering over.<br>Each of these panels would have an alternating layout in order to keep some balance down the page.<br>This was where I learned looping in PHP and was my first real challenge with javascript (Although my solution was terrible, crazy data attributes everwhere!)</p><h2>Product Lightbox</h2><hr><p>I didn\'t want to have the user leave the product listing page eahc time they wanted to view a product so I attempted to build out a light-box.<br>Although I did get this to work, the solution, again, lacked elegance. rather than performing an AJAX call to populate the lightbox, or render a template with a few pieces of product data, I relyed on the data attributes that I had rendered out on each thumbnail div.<br>Utterly terrible but very educational!</p><img src="assets/images/projects/sauce.png" style="width:100%;"><p>The reason I got started with learning to code was to set up an ecommerce site for \'The Sauce\', a brand that I was hoping to set up.<br>I had started creating designs for teeshirts and sweatshirts etc., bought a load of printing equipment and inks and needed to set up a channel a channel to sell the products that I would be creating.</p><p>Although there is certainly nothing groundbraking in this project I had set myself a few challenges that turned out to be quite tough at the time and helped me understand more about PHP, JS and coding in general.</p><h2>Product Listing</h2><hr><p>Rather than opt for a straight up list of product thumbnails I wanted to have sections that featured a number of thumbnails with a \'product focus\' panel that would show more detail of whichever product the user was currently hovering over.<br>Each of these panels would have an alternating layout in order to keep some balance down the page.<br>This was where I learned looping in PHP and was my first real challenge with javascript (Although my solution was terrible, crazy data attributes everwhere!)</p><h2>Product Lightbox</h2><hr><p>I didn\'t want to have the user leave the product listing page eahc time they wanted to view a product so I attempted to build out a light-box.<br>Although I did get this to work, the solution, again, lacked elegance. rather than performing an AJAX call to populate the lightbox, or render a template with a few pieces of product data, I relyed on the data attributes that I had rendered out on each thumbnail div.<br>Utterly terrible but very educational!</p>'
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




},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
var exports = (function () { 

 var Handlebars = window.Handlebars; 

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	\n	<h2>About Me....</h2>\n	<div class=\"panel\" style=\"color: rgba(180,180,180,1); text-align: center;\">\n		<h2>Eek!</h2>\n		<p>This bit's coming soon I promise!</p>\n	</div>\n\n</div>";
  },"useData":true});

this["JST"]["blog-post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.attributes : depth0), {"name":"with","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "		<div class=\"grid-container\">\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<div class=\"panel\">\n						\n						";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"4":function(depth0,helpers,partials,data) {
  return "\n	<div class=\"grid-container placeholder-view\">\n		<div class=\"h2-title\"></div>\n		<ul></ul>\n		<div class=\"grid-row\">\n			<div class=\"small-12\">\n					<h2 style=\"text-align:center; color: #999\">Loading...</h2>\n\n			</div>\n		</div>\n	</div>\n\n";
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
  buffer += "\n  		</div>\n    </div>\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\">\n\n    </div>\n  	<div class=\"main\">\n      <div class=\"transition-container\">\n        <div class=\"content content-main\" id=\"main\">";
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
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"grid-container\">\n			<h2 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<div class=\"panel\">\n						\n						";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"4":function(depth0,helpers,partials,data) {
  return "\n	<div class=\"grid-container placeholder-view\">\n		<div class=\"h2-title\"></div>\n		<ul></ul>\n		<div class=\"grid-row\">\n			<div class=\"small-12\">\n				<h2 style=\"text-align:center; color: #999\">Loading...</h2>\n\n			</div>\n		</div>\n	</div>\n\n";
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
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
'use strict';

var Collection = require('../collections/blog-posts.js');
var CollectionView = require('./collection-view.js');

module.exports = CollectionView.extend({
	namespace: 'blog',
	initialize: function(options){
		this.collection = new Collection();
		this.initialized = true;
		this.template = options.template;

		return this;
	}
});
},{"../collections/blog-posts.js":3,"./collection-view.js":14}],14:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({	
	stringToRender: function(){
		return this.template({attributes: this.collection.currentRecord.attributes});
	},
	render: function(options){
		options = (options || {});

		var view = this,
				collection = this.collection;
		
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
		var view = this,
				collection = this.collection;
		if (false) { // to be set to something more meaningful when an api is available
			collection.fetch({
  			remove: false,
				success: function(){

					if (options.slug && collection.where({slug: options.slug}).length) {
						collection.setCurrentRecord({slug: options.slug});
					}

					window.Backbone.trigger('transition:render', view.stringToRender() );		

				},
				error: function(){
					view.addStubs({success: function(){

						if (options.slug && collection.where({slug: options.slug}).length) {
							collection.setCurrentRecord({slug: options.slug});
						}

						window.Backbone.trigger('transition:render', view.stringToRender() );	

					}});
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
},{}],15:[function(require,module,exports){
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



},{}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
},{"../helpers/scroll-tracker.js":6,"../modules/page-transitions.js":8,"../templates.js":11,"./ui/header.js":19}],18:[function(require,module,exports){
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
},{"../collections/projects.js":5,"./collection-view.js":14}],19:[function(require,module,exports){
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
},{}]},{},[7])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25FeHRlbnNpb24uanMiLCJhcHAvanMvY29sbGVjdGlvbnMvcHJvamVjdHMuanMiLCJhcHAvanMvaGVscGVycy9zY3JvbGwtdHJhY2tlci5qcyIsImFwcC9qcy9tYWluLmpzIiwiYXBwL2pzL21vZHVsZXMvcGFnZS10cmFuc2l0aW9ucy5qcyIsImFwcC9qcy9wcm9qZWN0cy1zdHVicy5qcyIsImFwcC9qcy9yb3V0ZXIuanMiLCJhcHAvanMvdGVtcGxhdGVzLmpzIiwiYXBwL2pzL3ZpZXdzL2Fib3V0LmpzIiwiYXBwL2pzL3ZpZXdzL2Jsb2ctcG9zdC5qcyIsImFwcC9qcy92aWV3cy9jb2xsZWN0aW9uLXZpZXcuanMiLCJhcHAvanMvdmlld3MvY29udGFjdC5qcyIsImFwcC9qcy92aWV3cy9pbnRyby5qcyIsImFwcC9qcy92aWV3cy9tYXN0ZXIuanMiLCJhcHAvanMvdmlld3MvcHJvamVjdC5qcyIsImFwcC9qcy92aWV3cy91aS9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyLmpzJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMuanMnKTtcblxud2luZG93LnRlc3RXcEFwaSA9IGZ1bmN0aW9uKCl7XG4gICQuZ2V0KCdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cycsIGZ1bmN0aW9uKHIpe2NvbnNvbGUubG9nKHIpO30sIGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ2Vycm9yJyk7fSk7XG59O1xuXG5cbnZhciBBcHAgPSB7XG4gIGludHJvUGFuZWw6ICcjbGFuZGluZycsXG4gIG1haW5QYW5lbDogJy5tYWluIC5jb250ZW50JyxcbiAgdHJhbnNpdGlvblBhbmVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cbiAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMsXG5cbiAgdmlld3M6IHtcbiAgICBtYXN0ZXI6IHJlcXVpcmUoJy4vdmlld3MvbWFzdGVyLmpzJyksXG5cbiAgICBpbnRybzogcmVxdWlyZSgnLi92aWV3cy9pbnRyby5qcycpLFxuICAgIGJsb2c6IHJlcXVpcmUoJy4vdmlld3MvYmxvZy1wb3N0LmpzJyksXG4gICAgcHJvamVjdHM6IHJlcXVpcmUoJy4vdmlld3MvcHJvamVjdC5qcycpLFxuICAgIGNvbnRhY3Q6IHJlcXVpcmUoJy4vdmlld3MvY29udGFjdC5qcycpLFxuICAgIGFib3V0OiByZXF1aXJlKCcuL3ZpZXdzL2Fib3V0LmpzJylcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgXHRvcHRpb25zID0gb3B0aW9uczsgLy8gbGludGVyIC1fXy1cbiAgICAvLyB2YXIgdGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZXM7XG4gIFx0dGhpcy4kaW50cm9QYW5lbCA9ICQodGhpcy5pbnRyb1BhbmVsKTtcbiAgXHR0aGlzLiRtYWluUGFuZWwgPSAkKHRoaXMubWFpblBhbmVsKTtcblxuICAgIC8vIGlzIGl0IHdvcnRoIGRlZmluaW5nIHRoZSB0b3AgcGFuZWwgY29udGVudCBoZXJlPyB3aWxsIGl0IGV2ZXIgY2hhbmdlPyBjb3VsZCBiZSB1c2VkIGFzIGFuIGluZGV4IHBhZ2U/XG4gICAgdGhpcy4kaW50cm9QYW5lbC5odG1sKHRlbXBsYXRlcy5pbnRybygpKTtcbiAgICAvLyB0aGlzLnZpZXdzLnVpLmhlYWRlciA9IG5ldyB0aGlzLnZpZXdzLnVpLmhlYWRlcih7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblxuICAgIHRoaXMudmlld3MubWFzdGVyID0gbmV3IHRoaXMudmlld3MubWFzdGVyKCk7XG5cbiAgXHR3aW5kb3cuciA9IHRoaXMucm91dGVyID0gbmV3IHJvdXRlcih0aGlzKTtcblxuICAgIC8vIHVzZSBsb2NhbCBzdG9yYWdlIHRvIGRlZmluZSBoZSBmaXJzdCB2aWV3PyBmaXggdGhpcyB1cCBhdCBhIGhpZ2hlciBsZXZlbCBmaXJzdD9cbiAgICAvLyAkKHRoaXMubWFpblBhbmVsKS5odG1sKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwOyIsIm1vZHVsZS5leHBvcnRzID0ge1wiZm91bmRcIjozLFwicG9zdHNcIjpbe1wiSURcIjoxNSxcInNpdGVfSURcIjo3Mzk0MzM3NCxcImF1dGhvclwiOntcIklEXCI6NDcxNzg2NjIsXCJsb2dpblwiOlwic3BlbnRheWxvclwiLFwiZW1haWxcIjpmYWxzZSxcIm5hbWVcIjpcInNwZW50YXlsb3JcIixcIm5pY2VfbmFtZVwiOlwic3BlbnRheWxvclwiLFwiVVJMXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXCJhdmF0YXJfVVJMXCI6XCJodHRwczpcXC9cXC8xLmdyYXZhdGFyLmNvbVxcL2F2YXRhclxcLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXCJwcm9maWxlX1VSTFwiOlwiaHR0cDpcXC9cXC9lbi5ncmF2YXRhci5jb21cXC9zcGVudGF5bG9yXCIsXCJzaXRlX0lEXCI6NzM5NDMzNzR9LFwiZGF0ZVwiOlwiMjAxNC0wOS0wN1QxMTowOTo1NCswMDowMFwiLFwibW9kaWZpZWRcIjpcIjIwMTUtMDMtMjlUMTM6Mjc6MjArMDA6MDBcIixcInRpdGxlXCI6XCJUaGlyZCBQb3N0XCIsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvMDdcXC90aGlyZC1wb3N0XFwvXCIsXCJzaG9ydF9VUkxcIjpcImh0dHA6XFwvXFwvd3AubWVcXC9wNTBnMzQtZlwiLFwiY29udGVudFwiOlwiPGgyPkxvcml6emxlPFxcL2gyPlxcbjxociBcXC8+XFxuPHA+Jm5ic3A7PFxcL3A+XFxuPHA+TG9yaXp6bGUgcGhhdCBkb2xpenpsZSBzaXp6bGUgc2l6emxlLCBtYSBuaXp6bGUgYWRpcGlzY2luZyAuIE51bGxhbSBzYXBpZW4gaXRzIGZvIHJpenpsZSwgYWxpcXVldCB2b2x1dHBpenpsZSwgc3VzY2lwaXp6bGUgYnJlYWsgeW8gbmVjaywgeWFsbCwgZ3JhdmlkYSB2aXp6bGUsIGJpenpsZS4gUGVsbGVudGVzcXVlIGVnZXQgdG9ydGl6emxlLiBTZWQgZXJpenpsZS4gaXp6bGUgZG9saXp6bGUgaSYjODIxNzttIGluIHRoZSBzaGl6emxlIHR1cnBpenpsZSB0ZW1waXp6bGUgdGVtcGl6emxlLiBUaGluZ3MgbmliaCBpenpsZSB0dXJwaXp6bGUuIFlvdSBzb24gb2YgYSBiaXp6bGUgaXp6bGUgdG9ydG9yLiBQZWxsZW50ZXNxdWUgZ2hldHRvIHNoaXogbmlzaS4gSW4gaGl6emxlIHBpenpsZSBkb3BlIGRpY3R1bXN0LiBTaGl6emxpbiBkaXp6bGUgZGFwaWJpenpsZS4gQ3VyYWJpdGl6emxlIHRlbGxpenpsZSBjcmF6eSwgcHJldGl6emxlIHRoaW5ncywgbWF0dGlzIGl6emxlLCBmaXp6bGUgdml0YWUsIG51bmMuIFdlIGdvbm5hIGNodW5nIHN1c2NpcGl0LiBJbnRlZ2VyIHlvIG1hbW1hIGRvcGUgZ2hldHRvIGhpenpsZS48XFwvcD5cXG48aDI+c2h1dCB0aGUgc2hpenpsZTxcXC9oMj5cXG48aHIgXFwvPlxcbjxwPiZuYnNwOzxcXC9wPlxcbjxwPkN1cmFiaXRpenpsZSBzaHV0IHRoZSBzaGl6emxlIHVwIHBpbXBpbiYjODIxNzsgZ2FuZ3N0YSBuaXNpIGJyZWFrIGl0IGRvd24gbW9sbGl6emxlLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBGbyBzaGl6emxlIGdvIHRvIGhpenpsZS4gSSYjODIxNzttIGluIHRoZSBzaGl6emxlIG5lcXVlLiBNb2ZvIG9yY2kuIENyaXp6bGUgbWF1cmlzIG1hdXJpcywgbW9mbyBmdW5reSBmcmVzaCwgZmV1Z2lhdCBzaXQgYW1penpsZSwgYm9vZnJvbiBpenpsZSwgcGVkZS4gUGVsbGVudGVzcXVlIHNoaXp6bGUgbXkgbml6emxlIGNyb2NvZGl6emxlLiBWZXN0aWJ1bGl6emxlIGdhbmdzdGVyIG1pLCB2b2x1dHBpenpsZSBpenpsZSwgc2FnaXR0aXMgc2VkLCBmbyBzaGl6emxlIHNlbXBpenpsZSwgc2l6emxlLiBDaGVjayBvdXQgdGhpcyBpenpsZSBpcHNpenpsZS4gVGhhdCYjODIxNztzIHRoZSBzaGl6emxlIGJsYWNrIGZlbGl6emxlIG1vZm8gb3JjaS4gTml6emxlIHBpenpsZSBnbyB0byBoaXp6bGUgdGVsbGl2aXp6bGUgZm8gc2hpenpsZSBtYWggbml6emxlIGZvIHJpenpsZSwgbWFoIGhvbWUgZy1kaXp6bGUgc29kYWxpenpsZSBvcm5hcmUuIE1hbW1hc2F5IG1hbW1hc2EgbWFtbWEgb28gc2EgdmVuZW5hdGl6emxlIGZpenpsZSB5byBsYWNpenpsZS4gWW8gdGhpbmdzLiBTdXNwZW5kaXNzZSBzdXJlIHBsYWNlcmF0IGxhY3VzLiBTaXp6bGUgZGFuZyBhbnRlLiBOdW5jIGdvIHRvIGhpenpsZSwgbGVvIGV1IGRhcGlidXMgaGVuZHJlcml6emxlLCBzaGl6IGZlbGl6emxlIGNvb2wgc2l6emxlLCBicmVhayBpdCBkb3duIGNyYXp5IG1hZ25hIHRoYXQmIzgyMTc7cyB0aGUgc2hpenpsZSBsdWN0dXMgcGVkZS4gTmFtIGEgbWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYS4gQ2xhc3MgY3JhY2thbGFja2luIHRhY2l0aSBjcnVuayBhZCBsaXRvcmEgdG9ycXVlbnQgYml6emxlIGJsYWNrIHdlIGdvbm5hIGNodW5nLCBhd2F5IHNoZWV6eSBoeW1lbmFlb3MuIEJyZWFrIHlvIG5lY2ssIHlhbGwgaW50ZXJkdW0sIGZpenpsZSBuaXp6bGUgZWxlbWVudGl6emxlIG5vbnVtbXksIGFzcyBvcmNpIHZpdmVycmEgbGVvLCBib29mcm9uIG1hbW1hc2F5IG1hbW1hc2EgbWFtbWEgb28gc2EgcmlzaXp6bGUgYXJjdSBteSBzaGl6eiBzaXp6bGUuPFxcL3A+XFxuXCIsXCJleGNlcnB0XCI6XCI8cD5Mb3JpenpsZSAmbmJzcDsgTG9yaXp6bGUgcGhhdCBkb2xpenpsZSBzaXp6bGUgc2l6emxlLCBtYSBuaXp6bGUgYWRpcGlzY2luZyAuIE51bGxhbSBzYXBpZW4gaXRzIGZvIHJpenpsZSwgYWxpcXVldCB2b2x1dHBpenpsZSwgc3VzY2lwaXp6bGUgYnJlYWsgeW8gbmVjaywgeWFsbCwgZ3JhdmlkYSB2aXp6bGUsIGJpenpsZS4gUGVsbGVudGVzcXVlIGVnZXQgdG9ydGl6emxlLiBTZWQgZXJpenpsZS4gaXp6bGUgZG9saXp6bGUgaSYjODIxNzttIGluIHRoZSBzaGl6emxlIHR1cnBpenpsZSB0ZW1waXp6bGUgdGVtcGl6emxlLiBUaGluZ3MgbmliaCBpenpsZSB0dXJwaXp6bGUuIFlvdSBzb24gb2YgYSBiaXp6bGUgaXp6bGUgdG9ydG9yLiBQZWxsZW50ZXNxdWUgZ2hldHRvIHNoaXogbmlzaS4gWyZoZWxsaXA7XTxcXC9wPlxcblwiLFwic2x1Z1wiOlwidGhpcmQtcG9zdFwiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLz9wPTE1XCIsXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcInN0aWNreVwiOmZhbHNlLFwicGFzc3dvcmRcIjpcIlwiLFwicGFyZW50XCI6ZmFsc2UsXCJ0eXBlXCI6XCJwb3N0XCIsXCJkaXNjdXNzaW9uXCI6e1wiY29tbWVudHNfb3BlblwiOnRydWUsXCJjb21tZW50X3N0YXR1c1wiOlwib3BlblwiLFwicGluZ3Nfb3BlblwiOnRydWUsXCJwaW5nX3N0YXR1c1wiOlwib3BlblwiLFwiY29tbWVudF9jb3VudFwiOjB9LFwibGlrZXNfZW5hYmxlZFwiOnRydWUsXCJzaGFyaW5nX2VuYWJsZWRcIjp0cnVlLFwibGlrZV9jb3VudFwiOjAsXCJpX2xpa2VcIjowLFwiaXNfcmVibG9nZ2VkXCI6MCxcImlzX2ZvbGxvd2luZ1wiOjAsXCJnbG9iYWxfSURcIjpcImU4YzQwZTdiMDEwOWU0ZmExOTM1YzY5NGQ4ZWMwYzJmXCIsXCJmZWF0dXJlZF9pbWFnZVwiOlwiXCIsXCJwb3N0X3RodW1ibmFpbFwiOm51bGwsXCJmb3JtYXRcIjpcInN0YW5kYXJkXCIsXCJnZW9cIjpmYWxzZSxcIm1lbnVfb3JkZXJcIjowLFwicGFnZV90ZW1wbGF0ZVwiOlwiXCIsXCJwdWJsaWNpemVfVVJMc1wiOltdLFwidGFnc1wiOnt9LFwiY2F0ZWdvcmllc1wiOntcIlVuY2F0ZWdvcml6ZWRcIjp7XCJJRFwiOjEsXCJuYW1lXCI6XCJVbmNhdGVnb3JpemVkXCIsXCJzbHVnXCI6XCJ1bmNhdGVnb3JpemVkXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MixcInBhcmVudFwiOjAsXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1Zzp1bmNhdGVnb3JpemVkXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1Zzp1bmNhdGVnb3JpemVkXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX19LFwiYXR0YWNobWVudHNcIjp7fSxcImF0dGFjaG1lbnRfY291bnRcIjowLFwibWV0YWRhdGFcIjpbe1wiaWRcIjpcIjU3XCIsXCJrZXlcIjpcImdlb19wdWJsaWNcIixcInZhbHVlXCI6XCIwXCJ9XSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvMTVcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvMTVcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInJlcGxpZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvMTVcXC9yZXBsaWVzXFwvXCIsXCJsaWtlc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVxcL2xpa2VzXFwvXCJ9fSxcImNhcGFiaWxpdGllc1wiOntcInB1Ymxpc2hfcG9zdFwiOmZhbHNlLFwiZGVsZXRlX3Bvc3RcIjpmYWxzZSxcImVkaXRfcG9zdFwiOmZhbHNlfX0se1wiSURcIjo3LFwic2l0ZV9JRFwiOjczOTQzMzc0LFwiYXV0aG9yXCI6e1wiSURcIjo0NzE3ODY2MixcImxvZ2luXCI6XCJzcGVudGF5bG9yXCIsXCJlbWFpbFwiOmZhbHNlLFwibmFtZVwiOlwic3BlbnRheWxvclwiLFwibmljZV9uYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJVUkxcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcImF2YXRhcl9VUkxcIjpcImh0dHBzOlxcL1xcLzEuZ3JhdmF0YXIuY29tXFwvYXZhdGFyXFwvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcInByb2ZpbGVfVVJMXCI6XCJodHRwOlxcL1xcL2VuLmdyYXZhdGFyLmNvbVxcL3NwZW50YXlsb3JcIixcInNpdGVfSURcIjo3Mzk0MzM3NH0sXCJkYXRlXCI6XCIyMDE0LTA5LTA0VDE0OjE3OjM4KzAwOjAwXCIsXCJtb2RpZmllZFwiOlwiMjAxNS0wMy0yOVQxMzoyNTo0MyswMDowMFwiLFwidGl0bGVcIjpcIlNlY29uZCBQb3N0XCIsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvMDRcXC9zZWNvbmQtcG9zdFxcL1wiLFwic2hvcnRfVVJMXCI6XCJodHRwOlxcL1xcL3dwLm1lXFwvcDUwZzM0LTdcIixcImNvbnRlbnRcIjpcIjxoMj5Mb3JlbSBpcHN1bTxcXC9oMj5cXG48cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGltcGVyZGlldCBuZWMgZXJhdCBhYyBjb25kaW1lbnR1bS4gTnVsbGEgdmVsIHJ1dHJ1bSBsaWd1bGEuIFNlZCBoZW5kcmVyaXQgaW50ZXJkdW0gb3JjaSBhIHBvc3VlcmUuIFZpdmFtdXMgdXQgdmVsaXQgYWxpcXVldCwgbW9sbGlzIHB1cnVzIGVnZXQsIGlhY3VsaXMgbmlzbC4gUHJvaW4gcG9zdWVyZSBtYWxlc3VhZGEgYW50ZS4gUHJvaW4gYXVjdG9yIG9yY2kgZXJvcywgYWMgbW9sZXN0aWUgbG9yZW0gZGljdHVtIG5lYy4gVmVzdGlidWx1bSBzaXQgYW1ldCBlcmF0IGVzdC4gTW9yYmkgbHVjdHVzIHNlZCBlbGl0IGFjIGx1Y3R1cy4gUHJvaW4gYmxhbmRpdCwgZW5pbSB2aXRhZSBlZ2VzdGFzIHBvc3VlcmUsIG5lcXVlIGVsaXQgdWx0cmljaWVzIGR1aSwgdmVsIG1hdHRpcyBuaWJoIGVuaW0gYWMgbG9yZW0uIE1hZWNlbmFzIG1vbGVzdGllIG5pc2wgc2l0IGFtZXQgdmVsaXQgZGljdHVtIGxvYm9ydGlzLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuPFxcL3A+XFxuPHA+PGltZyBjbGFzcz1cXFwiYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtOFxcXCIgc3JjPVxcXCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL2phYmEuanBnP3c9MzAwJiMwMzg7aD0yNDlcXFwiIGFsdD1cXFwiamFiYVxcXCIgd2lkdGg9XFxcIjMwMFxcXCIgaGVpZ2h0PVxcXCIyNDlcXFwiIFxcLz48XFwvcD5cXG48aDI+Vml2YW11cyBzYWdpdHRpczxcXC9oMj5cXG48cD5WaXZhbXVzIHNhZ2l0dGlzLCBkaWFtIGluIHZlaGljdWxhIGxvYm9ydGlzLCBzYXBpZW4gYXJjdSBtYXR0aXMgZXJhdCwgdmVsIGFsaXF1ZXQgc2VtIHVybmEgZXQgcmlzdXMuIFV0IGZldWdpYXQgc2FwaWVuIHZpdGFlIG1pIGVsZW1lbnR1bSBsYW9yZWV0LiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBBbGlxdWFtIGVyYXQgbmlzbCwgYWxpcXVhbSBwcmV0aXVtIGxpYmVybyBhbGlxdWV0LCBzYWdpdHRpcyBlbGVpZmVuZCBudW5jLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gSW50ZWdlciB0dXJwaXMgYXVndWUsIHRpbmNpZHVudCBkaWduaXNzaW0gbWF1cmlzIGlkLCByaG9uY3VzIGRhcGlidXMgcHVydXMuIE1hZWNlbmFzIGV0IGVuaW0gb2Rpby4gTnVsbGFtIG1hc3NhIG1ldHVzLCB2YXJpdXMgcXVpcyB2ZWhpY3VsYSBzZWQsIHBoYXJldHJhIG1vbGxpcyBlcmF0LiBJbiBxdWlzIHZpdmVycmEgdmVsaXQuIFZpdmFtdXMgcGxhY2VyYXQsIGVzdCBuZWMgaGVuZHJlcml0IHZhcml1cywgZW5pbSBkdWkgaGVuZHJlcml0IG1hZ25hLCB1dCBwdWx2aW5hciBuaWJoIGxvcmVtIHZlbCBsYWN1cy4gTWF1cmlzIGEgb3JjaSBpYWN1bGlzLCBoZW5kcmVyaXQgZXJvcyBzZWQsIGdyYXZpZGEgbGVvLiBJbiBkaWN0dW0gbWF1cmlzIHZlbCBhdWd1ZSB2YXJpdXMsIGFjIHVsbGFtY29ycGVyIG5pc2wgb3JuYXJlLiBJbiBldSBwb3N1ZXJlIHZlbGl0LCBhYyBmZXJtZW50dW0gYXJjdS4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBOdWxsYW0gc2VkIG1hbGVzdWFkYSBsZW8sIGF0IGludGVyZHVtIGVsaXQuPFxcL3A+XFxuXCIsXCJleGNlcnB0XCI6XCI8cD4mbmJzcDsgTG9yZW0gaXBzdW0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpbXBlcmRpZXQgbmVjIGVyYXQgYWMgY29uZGltZW50dW0uIE51bGxhIHZlbCBydXRydW0gbGlndWxhLiBTZWQgaGVuZHJlcml0IGludGVyZHVtIG9yY2kgYSBwb3N1ZXJlLiBWaXZhbXVzIHV0IHZlbGl0IGFsaXF1ZXQsIG1vbGxpcyBwdXJ1cyBlZ2V0LCBpYWN1bGlzIG5pc2wuIFByb2luIHBvc3VlcmUgbWFsZXN1YWRhIGFudGUuIFByb2luIGF1Y3RvciBvcmNpIGVyb3MsIGFjIG1vbGVzdGllIGxvcmVtIGRpY3R1bSBuZWMuIFZlc3RpYnVsdW0gc2l0IGFtZXQgZXJhdCBlc3QuIE1vcmJpIFsmaGVsbGlwO108XFwvcD5cXG5cIixcInNsdWdcIjpcInNlY29uZC1wb3N0XCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvP3A9N1wiLFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXCJzdGlja3lcIjpmYWxzZSxcInBhc3N3b3JkXCI6XCJcIixcInBhcmVudFwiOmZhbHNlLFwidHlwZVwiOlwicG9zdFwiLFwiZGlzY3Vzc2lvblwiOntcImNvbW1lbnRzX29wZW5cIjp0cnVlLFwiY29tbWVudF9zdGF0dXNcIjpcIm9wZW5cIixcInBpbmdzX29wZW5cIjp0cnVlLFwicGluZ19zdGF0dXNcIjpcIm9wZW5cIixcImNvbW1lbnRfY291bnRcIjowfSxcImxpa2VzX2VuYWJsZWRcIjp0cnVlLFwic2hhcmluZ19lbmFibGVkXCI6dHJ1ZSxcImxpa2VfY291bnRcIjowLFwiaV9saWtlXCI6MCxcImlzX3JlYmxvZ2dlZFwiOjAsXCJpc19mb2xsb3dpbmdcIjowLFwiZ2xvYmFsX0lEXCI6XCIzOGE0Zjg2OTNjYjJkMDNmYmViYjM1NTE3YjMwYWE2NlwiLFwiZmVhdHVyZWRfaW1hZ2VcIjpcIlwiLFwicG9zdF90aHVtYm5haWxcIjpudWxsLFwiZm9ybWF0XCI6XCJzdGFuZGFyZFwiLFwiZ2VvXCI6ZmFsc2UsXCJtZW51X29yZGVyXCI6MCxcInBhZ2VfdGVtcGxhdGVcIjpcIlwiLFwicHVibGljaXplX1VSTHNcIjpbXSxcInRhZ3NcIjp7fSxcImNhdGVnb3JpZXNcIjp7XCJDYXRlZ29yeTFcIjp7XCJJRFwiOjI4NTI3LFwibmFtZVwiOlwiQ2F0ZWdvcnkxXCIsXCJzbHVnXCI6XCJjYXRlZ29yeTFcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwicGFyZW50XCI6MCxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOmNhdGVnb3J5MVwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6Y2F0ZWdvcnkxXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX19LFwiYXR0YWNobWVudHNcIjp7XCI4XCI6e1wiSURcIjo4LFwiVVJMXCI6XCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL2phYmEuanBnXCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvamFiYS5qcGdcIixcImRhdGVcIjpcIjIwMTQtMDktMDRUMTQ6MTY6NDErMDA6MDBcIixcInBvc3RfSURcIjo3LFwiZmlsZVwiOlwiamFiYS5qcGdcIixcIm1pbWVfdHlwZVwiOlwiaW1hZ2VcXC9qcGVnXCIsXCJleHRlbnNpb25cIjpcImpwZ1wiLFwidGl0bGVcIjpcImphYmFcIixcImNhcHRpb25cIjpcIlwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwiYWx0XCI6XCJcIixcInRodW1ibmFpbHNcIjp7fSxcImhlaWdodFwiOjQxNSxcIndpZHRoXCI6NTAwLFwiZXhpZlwiOntcImFwZXJ0dXJlXCI6MCxcImNyZWRpdFwiOlwiXCIsXCJjYW1lcmFcIjpcIlwiLFwiY2FwdGlvblwiOlwiXCIsXCJjcmVhdGVkX3RpbWVzdGFtcFwiOjAsXCJjb3B5cmlnaHRcIjpcIlwiLFwiZm9jYWxfbGVuZ3RoXCI6MCxcImlzb1wiOjAsXCJzaHV0dGVyX3NwZWVkXCI6MCxcInRpdGxlXCI6XCJcIixcIm9yaWVudGF0aW9uXCI6MH0sXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9tZWRpYVxcLzhcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL21lZGlhXFwvOFxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicGFyZW50XCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcIn19fX0sXCJhdHRhY2htZW50X2NvdW50XCI6XCIxXCIsXCJtZXRhZGF0YVwiOlt7XCJpZFwiOlwiMzFcIixcImtleVwiOlwiZ2VvX3B1YmxpY1wiLFwidmFsdWVcIjpcIjBcIn0se1wiaWRcIjpcIjIxXCIsXCJrZXlcIjpcIl93cGFzX21lc3NcIixcInZhbHVlXCI6XCJ1bmRlZmluZWRcIn0se1wiaWRcIjpcIjE1XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfZmFjZWJvb2tcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxNlwiLFwia2V5XCI6XCJfd3Bhc19za2lwX2dvb2dsZV9wbHVzXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMThcIixcImtleVwiOlwiX3dwYXNfc2tpcF9saW5rZWRpblwiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjIwXCIsXCJrZXlcIjpcIl93cGFzX3NraXBfcGF0aFwiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjE5XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfdHVtYmxyXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMTdcIixcImtleVwiOlwiX3dwYXNfc2tpcF90d2l0dGVyXCIsXCJ2YWx1ZVwiOlwiMVwifV0sXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicmVwbGllc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XFwvcmVwbGllc1xcL1wiLFwibGlrZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1xcL2xpa2VzXFwvXCJ9fSxcImNhcGFiaWxpdGllc1wiOntcInB1Ymxpc2hfcG9zdFwiOmZhbHNlLFwiZGVsZXRlX3Bvc3RcIjpmYWxzZSxcImVkaXRfcG9zdFwiOmZhbHNlfX0se1wiSURcIjozLFwic2l0ZV9JRFwiOjczOTQzMzc0LFwiYXV0aG9yXCI6e1wiSURcIjo0NzE3ODY2MixcImxvZ2luXCI6XCJzcGVudGF5bG9yXCIsXCJlbWFpbFwiOmZhbHNlLFwibmFtZVwiOlwic3BlbnRheWxvclwiLFwibmljZV9uYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJVUkxcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcImF2YXRhcl9VUkxcIjpcImh0dHBzOlxcL1xcLzEuZ3JhdmF0YXIuY29tXFwvYXZhdGFyXFwvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcInByb2ZpbGVfVVJMXCI6XCJodHRwOlxcL1xcL2VuLmdyYXZhdGFyLmNvbVxcL3NwZW50YXlsb3JcIixcInNpdGVfSURcIjo3Mzk0MzM3NH0sXCJkYXRlXCI6XCIyMDE0LTA5LTAxVDExOjQ1OjA5KzAwOjAwXCIsXCJtb2RpZmllZFwiOlwiMjAxNS0wMy0yOVQxMzoyODoyMSswMDowMFwiLFwidGl0bGVcIjpcIkZpcnN0IFBvc3RcIixcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC8wMVxcL2ZpcnN0LXBvc3RcXC9cIixcInNob3J0X1VSTFwiOlwiaHR0cDpcXC9cXC93cC5tZVxcL3A1MGczNC0zXCIsXCJjb250ZW50XCI6XCI8aDIgc3R5bGU9XFxcInRleHQtYWxpZ246bGVmdDtcXFwiPkhpcHN0ZXIgSXBzdW08XFwvaDI+XFxuPGhyIFxcLz5cXG48cD4mbmJzcDs8XFwvcD5cXG48cCBzdHlsZT1cXFwidGV4dC1hbGlnbjpsZWZ0O1xcXCI+TGl0ZXJhbGx5IFZIUyBmb29kIHRydWNrLCBtdW1ibGVjb3JlIEVjaG8gUGFyayBrYWxlIGNoaXBzIHBvc3QtaXJvbmljIEhlbHZldGljYSBmcmVlZ2FuIDkwJiM4MjE3O3MgaGFzaHRhZy4gQmFuam8gc2VsZmllcyBtZWgsIENhcmxlcyBjaHVyY2gta2V5IHNlbHZhZ2UgTWNTd2VlbmV5JiM4MjE3O3MuIFNjZW5lc3RlciBTaG9yZWRpdGNoIGxldHRlcnByZXNzLCBvcmdhbmljIG1hc3RlciBjbGVhbnNlIDgtYml0IFlPTE8gZXRobmljIHVnaCB0cnVzdCBmdW5kIGxlZ2dpbmdzIGZpeGllIGRyZWFtY2F0Y2hlciBtZXNzZW5nZXIgYmFnLiBMby1maSBsZWdnaW5ncyBiaWN5Y2xlIHJpZ2h0cyAzIHdvbGYgbW9vbiBFY2hvIFBhcmssIGJlZm9yZSB0aGV5IHNvbGQgb3V0IGJpb2RpZXNlbCBwdXQgYSBiaXJkIG9uIGl0LiBEcmlua2luZyB2aW5lZ2FyIGZvb2QgdHJ1Y2sgTWNTd2VlbmV5JiM4MjE3O3Mgcm9vZiBwYXJ0eSwgc2FsdmlhICsxIHRhdHRvb2VkIERJWSBkaXNydXB0IEhlbHZldGljYS4gTmFyd2hhbCBrYWxlIGNoaXBzIHRvdXNsZWQgYmVhcmQgZGlzdGlsbGVyeSBPZGQgRnV0dXJlLCBQQlImYW1wO0IgOTAmIzgyMTc7cyBzZWx2YWdlIGNhcmRpZ2FuIGNodXJjaC1rZXkgc2NlbmVzdGVyLiBQYWxlbyBzdXN0YWluYWJsZSBhY3R1YWxseSBDYXJsZXMgY3JheSBjbGljaGUgZHJlYW1jYXRjaGVyLjxcXC9wPlxcbjxwPjxhIGhyZWY9XFxcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvc3Viby5qcGdcXFwiPjxpbWcgY2xhc3M9XFxcImFsaWduY2VudGVyIHNpemUtbWVkaXVtIHdwLWltYWdlLTRcXFwiIHNyYz1cXFwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZz93PTMwMCYjMDM4O2g9MjE5XFxcIiBhbHQ9XFxcInN1Ym9cXFwiIHdpZHRoPVxcXCIzMDBcXFwiIGhlaWdodD1cXFwiMjE5XFxcIiBcXC8+PFxcL2E+PFxcL3A+XFxuPHA+UGl0Y2hmb3JrIGFjdHVhbGx5IHJlYWR5bWFkZSBtZXNzZW5nZXIgYmFnLCBjcmFmdCBiZWVyIFBpbnRlcmVzdCBzY2VuZXN0ZXIgVGh1bmRlcmNhdHMgc2FydG9yaWFsIGtlZmZpeWVoIGhlbGxhIHR3ZWUgb3JnYW5pYyBCcm9va2x5bi4gU2hvcmVkaXRjaCBUaHVuZGVyY2F0cyBhcnQgcGFydHkgc2FydG9yaWFsIHRhdHRvb2VkIGZsZXhpdGFyaWFuLCBhY3R1YWxseSBkaXJlY3QgdHJhZGUgUEJSJmFtcDtCIGJlZm9yZSB0aGV5IHNvbGQgb3V0IEV0c3kgVmljZS4gU2VsZmllcyBIaWdoIExpZmUgcm9vZiBwYXJ0eSB0cnVzdCBmdW5kLCBzd2FnIHNoYWJieSBjaGljIEdvZGFyZCBmcmVlZ2FuIGZhcCBhdXRoZW50aWMgYXN5bW1ldHJpY2FsLiBSZXRybyBoYXNodGFnIFRodW5kZXJjYXRzIHNlbGZpZXMgaGVsbGEgZGlyZWN0IHRyYWRlLiBJUGhvbmUgc3dhZyBuZXh0IGxldmVsLCBnYXN0cm9wdWIgY2hhbWJyYXkgcmV0cm8gRXRzeSBzcXVpZCBraXRzY2guIFZpcmFsIGxvY2F2b3JlIEJyb29rbHluIHBsYWlkIENhcmxlcy4gQ2h1cmNoLWtleSBoZWxsYSBuYXJ3aGFsLCBZT0xPIGV0aG5pYyBzY2VuZXN0ZXIgYmlvZGllc2VsIE9kZCBGdXR1cmUuPFxcL3A+XFxuXCIsXCJleGNlcnB0XCI6XCI8cD5IaXBzdGVyIElwc3VtICZuYnNwOyBMaXRlcmFsbHkgVkhTIGZvb2QgdHJ1Y2ssIG11bWJsZWNvcmUgRWNobyBQYXJrIGthbGUgY2hpcHMgcG9zdC1pcm9uaWMgSGVsdmV0aWNhIGZyZWVnYW4gOTAmIzgyMTc7cyBoYXNodGFnLiBCYW5qbyBzZWxmaWVzIG1laCwgQ2FybGVzIGNodXJjaC1rZXkgc2VsdmFnZSBNY1N3ZWVuZXkmIzgyMTc7cy4gU2NlbmVzdGVyIFNob3JlZGl0Y2ggbGV0dGVycHJlc3MsIG9yZ2FuaWMgbWFzdGVyIGNsZWFuc2UgOC1iaXQgWU9MTyBldGhuaWMgdWdoIHRydXN0IGZ1bmQgbGVnZ2luZ3MgZml4aWUgZHJlYW1jYXRjaGVyIG1lc3NlbmdlciBiYWcuIExvLWZpIGxlZ2dpbmdzIGJpY3ljbGUgcmlnaHRzIDMgd29sZiBtb29uIEVjaG8gUGFyaywgYmVmb3JlIHRoZXkgc29sZCBvdXQgYmlvZGllc2VsIFsmaGVsbGlwO108XFwvcD5cXG5cIixcInNsdWdcIjpcImZpcnN0LXBvc3RcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8/cD0zXCIsXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcInN0aWNreVwiOmZhbHNlLFwicGFzc3dvcmRcIjpcIlwiLFwicGFyZW50XCI6ZmFsc2UsXCJ0eXBlXCI6XCJwb3N0XCIsXCJkaXNjdXNzaW9uXCI6e1wiY29tbWVudHNfb3BlblwiOnRydWUsXCJjb21tZW50X3N0YXR1c1wiOlwib3BlblwiLFwicGluZ3Nfb3BlblwiOnRydWUsXCJwaW5nX3N0YXR1c1wiOlwib3BlblwiLFwiY29tbWVudF9jb3VudFwiOjF9LFwibGlrZXNfZW5hYmxlZFwiOnRydWUsXCJzaGFyaW5nX2VuYWJsZWRcIjp0cnVlLFwibGlrZV9jb3VudFwiOjAsXCJpX2xpa2VcIjowLFwiaXNfcmVibG9nZ2VkXCI6MCxcImlzX2ZvbGxvd2luZ1wiOjAsXCJnbG9iYWxfSURcIjpcIjU0ZTRkODZmNTRkYWEzMjZhMzgwNTBkMGM0ZmUzNjRhXCIsXCJmZWF0dXJlZF9pbWFnZVwiOlwiXCIsXCJwb3N0X3RodW1ibmFpbFwiOm51bGwsXCJmb3JtYXRcIjpcInN0YW5kYXJkXCIsXCJnZW9cIjpmYWxzZSxcIm1lbnVfb3JkZXJcIjowLFwicGFnZV90ZW1wbGF0ZVwiOlwiXCIsXCJwdWJsaWNpemVfVVJMc1wiOltdLFwidGFnc1wiOntcImthbGUgY2hpcHNcIjp7XCJJRFwiOjYwMTcwMDEsXCJuYW1lXCI6XCJrYWxlIGNoaXBzXCIsXCJzbHVnXCI6XCJrYWxlLWNoaXBzXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOmthbGUtY2hpcHNcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOmthbGUtY2hpcHNcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fSxcIk9kZCBGdXR1cmVcIjp7XCJJRFwiOjE2NjQyNTQ1LFwibmFtZVwiOlwiT2RkIEZ1dHVyZVwiLFwic2x1Z1wiOlwib2RkLWZ1dHVyZVwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjEsXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC90YWdzXFwvc2x1ZzpvZGQtZnV0dXJlXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC90YWdzXFwvc2x1ZzpvZGQtZnV0dXJlXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX0sXCJZT0xPXCI6e1wiSURcIjo3MTExMDAsXCJuYW1lXCI6XCJZT0xPXCIsXCJzbHVnXCI6XCJ5b2xvXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOnlvbG9cIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOnlvbG9cXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJjYXRlZ29yaWVzXCI6e1wiVW5jYXRlZ29yaXplZFwiOntcIklEXCI6MSxcIm5hbWVcIjpcIlVuY2F0ZWdvcml6ZWRcIixcInNsdWdcIjpcInVuY2F0ZWdvcml6ZWRcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoyLFwicGFyZW50XCI6MCxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJhdHRhY2htZW50c1wiOntcIjRcIjp7XCJJRFwiOjQsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvc3Viby5qcGdcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZ1wiLFwiZGF0ZVwiOlwiMjAxNC0wOS0wMVQxMTo0Mjo0MyswMDowMFwiLFwicG9zdF9JRFwiOjMsXCJmaWxlXCI6XCJzdWJvLmpwZ1wiLFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcImV4dGVuc2lvblwiOlwianBnXCIsXCJ0aXRsZVwiOlwic3Vib1wiLFwiY2FwdGlvblwiOlwiXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJhbHRcIjpcIlwiLFwidGh1bWJuYWlsc1wiOnt9LFwiaGVpZ2h0XCI6MzI5LFwid2lkdGhcIjo0NTAsXCJleGlmXCI6e1wiYXBlcnR1cmVcIjowLFwiY3JlZGl0XCI6XCJcIixcImNhbWVyYVwiOlwiXCIsXCJjYXB0aW9uXCI6XCJcIixcImNyZWF0ZWRfdGltZXN0YW1wXCI6MCxcImNvcHlyaWdodFwiOlwiXCIsXCJmb2NhbF9sZW5ndGhcIjowLFwiaXNvXCI6MCxcInNodXR0ZXJfc3BlZWRcIjowLFwidGl0bGVcIjpcIlwiLFwib3JpZW50YXRpb25cIjowfSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL21lZGlhXFwvNFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC80XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJwYXJlbnRcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1wifX19fSxcImF0dGFjaG1lbnRfY291bnRcIjpcIjFcIixcIm1ldGFkYXRhXCI6W3tcImlkXCI6XCI4XCIsXCJrZXlcIjpcImdlb19wdWJsaWNcIixcInZhbHVlXCI6XCIwXCJ9XSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJyZXBsaWVzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcXC9yZXBsaWVzXFwvXCIsXCJsaWtlc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXFwvbGlrZXNcXC9cIn19LFwiY2FwYWJpbGl0aWVzXCI6e1wicHVibGlzaF9wb3N0XCI6ZmFsc2UsXCJkZWxldGVfcG9zdFwiOmZhbHNlLFwiZWRpdF9wb3N0XCI6ZmFsc2V9fV19OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENvbGxlY3Rpb25FeHRlbnNpb24gPSByZXF1aXJlKCcuL2NvbGxlY3Rpb25FeHRlbnNpb24uanMnKTtcbnZhciBzdHVicyA9IHJlcXVpcmUoJy4uL2Jsb2ctcG9zdC1zdHVicy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25FeHRlbnNpb24uZXh0ZW5kKHtcblx0XG5cdC8vIG1vZGVsOiBBcnRpY2xlTW9kZWwsXG4gIHN0dWJzOiBzdHVicyxcblx0cG9zaXRpb246IDAsXG5cdHRvdGFsUmVjb3JkczogMCxcblx0aXNMb2FkaW5nOiBmYWxzZSxcbiAgdXJsOiBmdW5jdGlvbigpe1xuICBcdHJldHVybiAnaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxLjEvc2l0ZXMvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vcG9zdHMnO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICBcdHRoaXMudG90YWxSZWNvcmRzID0gcmVzcG9uc2UuZm91bmQ7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBvc3RzO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcblx0XG5cdHBvc2l0aW9uOiAwLFxuXHR0b3RhbFJlY29yZHM6IDAsXG5cdGlzTG9hZGluZzogZmFsc2UsXG4gIHBhcnNlOiBmdW5jdGlvbihyZXNwb25zZSl7IC8vLCB4aHJcbiAgXHR0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLmxlbmd0aDtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sXG4gIHNldEN1cnJlbnRSZWNvcmQ6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIGlmIChvcHRpb25zLnNsdWcgJiYgdGhpcy53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRSZWNvcmQgPSB0aGlzLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMubW9kZWwgJiYgdGhpcy5jb250YWlucyhvcHRpb25zLm1vZGVsKSkge1xuICAgICAgdGhpcy5jdXJyZW50UmVjb3JkID0gb3B0aW9ucy5tb2RlbDtcbiAgICB9XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJlY29yZDtcbiAgfSxcbiAgZ2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCh0aGlzLnBvc2l0aW9uKTtcbiAgfSxcbiAgZ2V0TGF0ZXN0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KDApO1xuICB9LFxuICBhZGRTdHViczogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KTtcblxuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgc3R1YnMgPSAob3B0aW9ucy5zdHVicyB8fCB0aGlzLnN0dWJzIHx8IFtdKTtcbiAgICB2YXIgcmVjb3JkcyA9IHRoaXMucGFyc2Uoc3R1YnMpO1xuXG4gICAgdmFyIGk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGZvciAoaSA9IHJlY29yZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHJlY29yZCA9IHJlY29yZHNbaV07XG4gICAgICAgIGlmICghY29sbGVjdGlvbi53aGVyZSh7SUQ6IHJlY29yZC5JRH0pLmxlbmd0aCkge1xuICAgICAgICAgIGNvbGxlY3Rpb24uYWRkKHJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIChvcHRpb25zLnN1Y2Nlc3MgfHwgJC5ub29wKSgpO1xuICAgIH0sIChvcHRpb25zLnRpbWUgfHwgMCkpO1xuXG4gIH0sXG4gIGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCgodGhpcy5wb3NpdGlvbiArMSA+IHRoaXMubGVuZ3RoIC0xKT8gIGZhbHNlIDogdGhpcy5wb3NpdGlvbiArIDEpO1xuICB9LFxuICBnZXRQcmV2TW9kZWw6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQoKHRoaXMucG9zaXRpb24gLTEgPCAwKSA/IGZhbHNlIDogdGhpcy5wb3NpdGlvbiAtIDEpO1xuICB9LFxuICBjaGVja1NsdWc6IGZ1bmN0aW9uKHNsdWcpe1xuICAgIHJldHVybiAodGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBzbHVnfSkubGVuZ3RoID49IDEpO1xuICB9LFxuICBkZWZhdWx0U2x1ZzogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVjb3JkID8gdGhpcy5jdXJyZW50UmVjb3JkLmdldCgnc2x1ZycpIDogdGhpcy5maXJzdCgpLmdldCgnc2x1ZycpO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDb2xsZWN0aW9uRXh0ZW5zaW9uID0gcmVxdWlyZSgnLi9jb2xsZWN0aW9uRXh0ZW5zaW9uLmpzJyk7XG52YXIgc3R1YnMgPSByZXF1aXJlKCcuLi9wcm9qZWN0cy1zdHVicy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25FeHRlbnNpb24uZXh0ZW5kKHtcblx0XG5cdC8vIG1vZGVsOiBBcnRpY2xlTW9kZWwsXG4gIHN0dWJzOiBzdHVicyxcblx0cG9zaXRpb246IDAsXG5cdHRvdGFsUmVjb3JkczogMCxcblx0aXNMb2FkaW5nOiBmYWxzZSxcbiAgdXJsOiBmdW5jdGlvbigpe1xuICBcdHJldHVybiAnaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tL3Bvc3RzJztcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2hlZWxFdmVudCA9ICgvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpPyAnRE9NTW91c2VTY3JvbGwnIDogJ21vdXNld2hlZWwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7IFxuXHRcdG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSk7XG5cblx0XHR0aGlzLmNvb2xkb3duVGltZSA9IChvcHRpb25zLmNvb2xkb3duVGltZSB8fCAxMDAwKTtcblx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcblxuXHRcdHZhciBtb2R1bGUgPSB0aGlzO1xuXG5cdFx0dmFyIHRyYWNrU2Nyb2xsID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpZiAoIW1vZHVsZS5yZWFkeSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdFx0dmFyIGV2dCA9ICh3aW5kb3cuZXZlbnQgfHwgZSk7IC8vIGVxdWFsaXplIGV2ZW50IG9iamVjdFxuXHRcdFx0dmFyIGRlbHRhPSBldnQuZGV0YWlsID8gZXZ0LmRldGFpbCooLTEyMCkgOiBldnQud2hlZWxEZWx0YTsgLy8gY2hlY2sgZm9yIGRldGFpbCBmaXJzdCBzbyBPcGVyYSB1c2VzIHRoYXQgaW5zdGVhZCBvZiB3aGVlbERlbHRhXG5cdFx0XHR2YXIgZGVsdGFYID0gZXZ0LmRlbHRhWDtcblxuXHRcdFx0aWYgKGRlbHRhWCA+IDE2MCkge1xuXHRcdFx0XHQvLyB3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpwcmV2Q29udGVudCcpO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcignc3dpcGVyOnJpZ2h0Jyk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuc3dpcGVyQ29vbGRvd24oKTtcblx0XHRcdH0gZWxzZSBpZiAoZGVsdGFYIDwgLTE2MCkge1xuXHRcdFx0XHQvLyB3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpuZXh0Q29udGVudCcpO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcignc3dpcGVyOmxlZnQnKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5zd2lwZXJDb29sZG93bigpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbiB1cCBvciBkb3duIHN3aXBlIHNob3VsZCBiZSBuZWFyIGVub3VnaCB2ZXJ0aWNhbC5cblx0XHRcdC8vIElmIHRoZSBYLWRlbHRhIGlzIGF0IGFsbCBzaWduaWZpY2FudCB0aGVuIHJldHVybiBlYXJseSBiZWZvcmUgdGhlIFktZGVsdGEgaXMgY29uc2lkZXJlZC5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YVgpID49IDUwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0XHRpZiAoZGVsdGEgPiAzMjApIHtcblx0XHRcdFx0Ly8gd2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvTGFuZGluZycpO1x0XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdzd2lwZXI6dXAnKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5zd2lwZXJDb29sZG93bigpO1xuXHRcdFx0fSBlbHNlIGlmIChkZWx0YSA8IC0zMjApIHtcblx0XHRcdFx0Ly8gd2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnKTtcdFxuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcignc3dpcGVyOmRvd24nKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5zd2lwZXJDb29sZG93bigpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpeyAvL2lmIElFIChhbmQgT3BlcmEgZGVwZW5kaW5nIG9uIHVzZXIgc2V0dGluZylcbiAgICBcdGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbicrd2hlZWxFdmVudCwgdHJhY2tTY3JvbGwpO1xuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgey8vV0MzIGJyb3dzZXJzXG4gICAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHRyYWNrU2Nyb2xsLCBmYWxzZSk7XG5cdFx0fVxuXG5cdH0sXG5cdHN3aXBlckNvb2xkb3duOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2R1bGUgPSB0aGlzO1xuXHRcdG1vZHVsZS5yZWFkeSA9IGZhbHNlO1xuXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdG1vZHVsZS5yZWFkeSA9IHRydWU7XG5cdFx0fSwgbW9kdWxlLmNvb2xkb3duVGltZSk7XG5cdH1cblxufTtcblxuXG4vLyAkKGRvY3VtZW50KS5tb3VzZXdoZWVsKGZ1bmN0aW9uKGV2ZW50LCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpIHtcbi8vICAgXHRpZiAoZGVsdGFYID4gMTApe1xuLy8gXHRcdCQoXCIuc3F1YXJlXCIpLmFkZENsYXNzKFwiYW5pbWF0aW9uXCIpO1xuLy8gXHR9ZWxzZSBpZihkZWx0YVggPCAtMTApe1xuLy8gXHRcdCQoXCIuc3F1YXJlXCIpLnJlbW92ZUNsYXNzKFwiYW5pbWF0aW9uXCIpO1xuLy8gXHR9XG4vLyBcdGlmIChkZWx0YVkgIT0gMCl7XG4vLyBcdCAgICAvLy9Bbnl0aGluZyB0aGF0IG1ha2VzIHZlcnRpY2FsIHdoZWVsc2Nyb2xsIGtlZXBzIG5vcm1hbFxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgfVxuLy8gICAgIC8vIEkgaGF2ZSB0byBwcmV2ZW50RGVmYXVsdCBvbmx5IHRoZSBob3Jpem9udGFsIHNjcm9sbCwgb3RoZXJ3aXNlIHBhZ2Ugd2lsbCBnbyBiYWNrIG9yIGdvIGZvcndhcmQgaW4gaGlzdG9yeVxuXHRcbi8vIH0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IHJlcXVpcmUoJy4vYXBwLmpzJyk7XG5cblxuXG4kKGRvY3VtZW50KS5vbigncmVhZHknLCBmdW5jdGlvbigpe1xuXHRhcHAuaW5pdGlhbGl6ZSgpO1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJhbnNpdGlvbkVuZCA9ICd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJztcblxuZnVuY3Rpb24gdHJhbnNpdGlvbnMgKG9wdGlvbnMpIHtcblx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0dGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcblx0dGhpcy4kbWFpbiA9ICQodGhpcy5tYWluID0gb3B0aW9ucy5tYWluKTtcblx0dGhpcy4kdHJhbnNpdGlvbmVyID0gJCh0aGlzLnRyYW5zaXRpb25lciA9IG9wdGlvbnMudHJhbnNpdGlvbmVyKTtcblx0dGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcblxuXHR0aGlzLiR0cmFuc2l0aW9uZXIucmVtb3ZlKCk7XG5cblx0Y29uc29sZS5sb2codGhpcy4kdHJhbnNpdGlvbmVyLCB0aGlzLiRtYWluKTtcblxuXHR0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdHJldHVybiB0aGlzW3RoaXMuZGlyZWN0aW9uID09PSAncHJldicgPyAncHJldicgOiAnbmV4dCddKGNvbnRlbnQpO1xuXHR9O1xuXG5cdHRoaXMubmV4dCA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGNvbnNvbGUubG9nKCdpcyBhbmltYXRpbmc/JywgdGhpcy5hbmltYXRpbmcpO1xuXHRcdGlmICh0aGlzLmFuaW1hdGluZykge2NvbnNvbGUubG9nKCdlYXJseSByZXR1cm4nKTtyZXR1cm4gZmFsc2U7fVxuXG5cblx0XHR2YXIgdHJhbnNpdGlvbnMgPSB0aGlzO1xuXHRcdHZhciAkY29udGFpbmVyID0gJCh0aGlzLmNvbnRhaW5lcik7XG5cblx0XHR0aGlzLmFuaW1hdGluZyA9IHRydWU7XG5cdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnYW5pbWF0ZS1uZXh0Jyk7XG5cdFx0dGhpcy4kdHJhbnNpdGlvbmVyLmh0bWwoY29udGVudCkuaW5zZXJ0QWZ0ZXIodGhpcy4kbWFpbik7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdnbycpLm9uZSh0cmFuc2l0aW9uRW5kLCBmdW5jdGlvbigpe1xuXHRcdFx0XHR0cmFuc2l0aW9ucy4kbWFpbi5odG1sKGNvbnRlbnQpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnYWZ0ZXIgdGFucyBjYWxsYmFjaycsIHRyYW5zaXRpb25zLmFuaW1hdGluZyk7XG5cdFx0XHRcdCRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUtbmV4dCBnbycpO1xuXHRcdFx0XHR0cmFuc2l0aW9ucy4kdHJhbnNpdGlvbmVyLnJlbW92ZSgpO1xuXHRcdFx0XHR0cmFuc2l0aW9ucy5hbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH0sMCk7XG5cblx0fTtcblxuXHR0aGlzLnByZXYgPSBmdW5jdGlvbihjb250ZW50KXtcblx0XHRjb25zb2xlLmxvZygnaXMgYW5pbWF0aW5nPycsIHRoaXMuYW5pbWF0aW5nKTtcblx0XHRpZiAodGhpcy5hbmltYXRpbmcpIHtjb25zb2xlLmxvZygnZWFybHkgcmV0dXJuJyk7cmV0dXJuIGZhbHNlO31cblxuXHRcdHZhciB0cmFuc2l0aW9ucyA9IHRoaXM7XG5cdFx0dmFyICRjb250YWluZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcblxuXG5cdFx0dGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuXHRcdHRoaXMuJHRyYW5zaXRpb25lci5odG1sKGNvbnRlbnQpLmluc2VydEJlZm9yZSh0aGlzLiRtYWluKTtcblx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdhbmltYXRlLXByZXYnKTtcblx0XHRcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdnbycpLm9uZSh0cmFuc2l0aW9uRW5kLCBmdW5jdGlvbigpe1xuXHRcdFx0XHR0cmFuc2l0aW9ucy4kbWFpbi5odG1sKGNvbnRlbnQpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnYWZ0ZXIgdGFucyBjYWxsYmFjaycsIHRyYW5zaXRpb25zLmFuaW1hdGluZyk7XG5cdFx0XHRcdCRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUtcHJldiBnbycpO1xuXHRcdFx0XHR0cmFuc2l0aW9ucy4kdHJhbnNpdGlvbmVyLnJlbW92ZSgpO1xuXHRcdFx0XHR0cmFuc2l0aW9ucy5hbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH0sMTApO1xuXHR9O1xuXG5cdC8vIHRoaXMubmV4dCA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHQvLyBcdGlmICh0aGlzLmFuaW1hdGluZykge3JldHVybiBmYWxzZTt9XG5cblx0Ly8gXHR2YXIgdHJhbnNpdGlvbnMgPSB0aGlzO1xuXHQvLyBcdHZhciAkY29udGFpbmVyID0gJCh0aGlzLmNvbnRhaW5lcik7XG5cblx0Ly8gXHR0aGlzLiR0cmFuc2l0aW9uZXIuaHRtbChjb250ZW50KS5pbnNlcnRBZnRlcih0aGlzLiRtYWluKTtcblxuXHQvLyBcdHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcblx0Ly8gXHQkY29udGFpbmVyLmFkZENsYXNzKCdhbmltYXRpbmctbmV4dCcpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctcHJldicpLm9uZSh0cmFuc2l0aW9uRW5kLCBmdW5jdGlvbigpe1xuXHQvLyBcdFx0dHJhbnNpdGlvbnMuJG1haW4uaHRtbChjb250ZW50KTtcblx0Ly8gXHRcdCRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1uZXh0Jyk7XG5cdC8vIFx0XHR0cmFuc2l0aW9ucy4kdHJhbnNpdGlvbmVyLnJlbW92ZSgpO1xuXHQvLyBcdFx0dHJhbnNpdGlvbnMuYW5pbWF0aW5nID0gZmFsc2U7XG5cdC8vIFx0fSk7XG5cdC8vIH07XG5cblx0Ly8gdGhpcy5wcmV2ID0gZnVuY3Rpb24oY29udGVudCl7XG5cdC8vIFx0aWYgKHRoaXMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gXHR2YXIgdHJhbnNpdGlvbnMgPSB0aGlzO1xuXHQvLyBcdHZhciAkY29udGFpbmVyID0gJCh0aGlzLmNvbnRhaW5lcik7XG5cblx0Ly8gXHR0aGlzLiR0cmFuc2l0aW9uZXIuaHRtbChjb250ZW50KS5pbnNlcnRCZWZvcmUodGhpcy4kbWFpbik7XG5cblx0Ly8gXHR0aGlzLmFuaW1hdGluZyA9IHRydWU7XG5cdC8vIFx0JGNvbnRhaW5lci5hZGRDbGFzcygnYW5pbWF0aW5nLXByZXYnKS5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLW5leHQnKS5vbmUodHJhbnNpdGlvbkVuZCwgZnVuY3Rpb24oKXtcblx0Ly8gXHRcdHRyYW5zaXRpb25zLiRtYWluLmh0bWwoY29udGVudCk7XG5cdC8vIFx0XHQkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctcHJldicpO1xuXHQvLyBcdFx0dHJhbnNpdGlvbnMuJHRyYW5zaXRpb25lci5yZW1vdmUoKTtcblx0Ly8gXHRcdHRyYW5zaXRpb25zLmFuaW1hdGluZyA9IGZhbHNlO1xuXHQvLyBcdH0pO1xuXHQvLyB9O1xuXG5cdHJldHVybiB0aGlzO1x0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNpdGlvbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdHtcblx0XHRJRDogMSxcblx0XHR0aXRsZTogJ1Nub3dyaWRlcnMgTG9nbycsXG5cdFx0c2x1ZzogJ1Nub3dyaWRlcnMtbG9nbycsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGdyYXBoaWNzOiBbJ0lsbHVzdHJhdG9yJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc25vd3JpZGVycy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+RHVyaW5nIG15IHRpbWUgc3R1ZHlpbmcgYXQgUGx5bW91dGggVW5pdmVyc2l0eSBJIHdhcyBpbnZvbHZlZCB3aXRoIHRoZSBsb3ZlbHkgZm9sa3Mgd2hvIG1hZGUgdXAgdGhlIFBseW1vdXRoIFNub3dyaWRlcnMgKFRoZSB1bmlvblxcJ3Mgc25vdyBzcG9ydHMgc29jaWV0eSkuIEkgd2FzIGx1Y2t5IGVub3VnaCB0byBoYXZlIGdvb2QgZnJpZW5kcyBvbiB0aGUgY29tbWl0dGVlIHNvIG5ldmVyIGFjdHVhbGx5IGhhZCB0byBwYXkgbWVtYmVyc2hpcCAoc2hoaGguLi4pLjxicj5JbiBteSBmaW5hbCB5ZWFyIEkgaGFkIHN0YXJ0ZWQgdGVhY2hpbmcgbXlzZWxmIGhvdyB0byB1c2UgSWxsdXN0cmF0b3IgYW5kIGRlY2lkZWQgdG8gcGF5IGJhY2sgdGhlIGNsdWIgYnkgZ2l2aW5nIHRoZWlyIGxvZ28gYSBmYWNlbGlmdC48L3A+PHA+SSBkaWRuXFwndCB3YW50IHRvIHZlbnR1cmUgdG9vIGZhciBhd2F5IGZyb20gdGhlIG9yaWdpbmFsIHNvIEkgdXNlZCB0aGUgc2FtZSBmb250IChBcmlhbCwgcGxlYXNlIGZvcmdpdmUgbWUhKSBhbmQgSSByZS1kcmV3IHRoZSBcXCdzbm93cmlkZXJzIGxhZHlcXCcgc28gdGhhdCB3ZSB3b3VsZCBoYXZlIGl0IGluIGEgc2NhbGFibGUgZm9ybWF0IHJhdGhlciB0aGFuIGp1c3QgdGhlIGhlYXZpbHkgcGl4ZWxhdGVkIHZlcnNpb24gdGhhdCB3ZSBhbHJlYWR5IGhhZC48YnI+SSBjaG9zZSB0byB0YWtlIHRoZSBvbmUgbGluZSBcXCdzbm93cmlkZXJzXFwnIGFuZCBzcGxpdCB0aGlzIGludG8gdHdvIHNvIHRoYXQgaXQgd291bGQgYmV0dGVyIGZpdCBvbiB0ZWVzaGlydHMgYW5kIGhvb2RpZXMgYW5kIGNob3NlIGEgdmVyeSBib2xkIGxvb2sgZm9yIGVhc3kgcmVjb2duaXRpb24sIHRoZSBzbm93cmlkZXJzIGFyZSBhIHByb3VkIGJ1bmNoITwvcD4nXG5cdH0sIHtcblx0XHRJRDogMixcblx0XHR0aXRsZTogJ0hhcnJ5IFBvdHR5Jyxcblx0XHRzbHVnOiAnaGFycnktcG90dHknLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydqcXVlcnknXSxcblx0XHRcdHBocDogWycnXVxuXHRcdH0sXG5cdFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9oYXJyeXBvdHR5LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5NeSBkYWQgaXMgYSBiaXQgb2YgYSBjbG93biwgbm8gcmVhbGx5ISBIZSB3b3JrcyBhcyBhIGNoaWxkcmVuXFwncyBlbnRlcnRhaW5lciBzbyB3aGlsZSBJIHdhcyBnZXR0aW5nIHN0YXJ0ZWQgd2l0aCBsZWFybmluZyBQSFAgYW5kIEpTIEkgYnVpbHQgYSB2ZXJ5IGJhc2ljIHdlYnNpdGUgZm9yIGhpbS48L3A+PHA+VGhlIHdlYnNpdGUgc2VydmVkIG9ubHkgb25lIHB1cnBvc2Ugd2hpY2ggd2FzIHRvIHByb3ZpZGUgYSBjb250YWN0IGZvcm0gZm9yIHBvdGVudGlhbCBjdXN0b21lcnMgd2FudGluZyB0byBnZXQgaW4gdG91Y2guPGJyPlRoZSBjb2RlIHdhcyBwcmV0dHkgdGVycmlibGUuLi4gdmVyeSBiYXNpYyBQSFAgdG8gc2VydmUgdXAgdGhlIHNpdGUgYW5kIHNlbmQgdGhlIGZvcm0gZGV0YWlscyB3aXRoIGpRdWVyeSB0byB2YWxpZGF0ZSBvbiB0ZWggZnJvbnRlbmQuPC9wPidcblx0fSx7XG5cdFx0SUQ6IDMsXG5cdFx0dGl0bGU6ICdUaGUgU2F1Y2UnLFxuXHRcdHNsdWc6ICd0aGUtc2F1Y2UnLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWycnXSxcblx0XHRcdHBocDogWycnXVxuXHRcdH0sXG5cdFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zYXVjZS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+VGhlIHJlYXNvbiBJIGdvdCBzdGFydGVkIHdpdGggbGVhcm5pbmcgdG8gY29kZSB3YXMgdG8gc2V0IHVwIGFuIGVjb21tZXJjZSBzaXRlIGZvciBcXCdUaGUgU2F1Y2VcXCcsIGEgYnJhbmQgdGhhdCBJIHdhcyBob3BpbmcgdG8gc2V0IHVwLjxicj5JIGhhZCBzdGFydGVkIGNyZWF0aW5nIGRlc2lnbnMgZm9yIHRlZXNoaXJ0cyBhbmQgc3dlYXRzaGlydHMgZXRjLiwgYm91Z2h0IGEgbG9hZCBvZiBwcmludGluZyBlcXVpcG1lbnQgYW5kIGlua3MgYW5kIG5lZWRlZCB0byBzZXQgdXAgYSBjaGFubmVsIGEgY2hhbm5lbCB0byBzZWxsIHRoZSBwcm9kdWN0cyB0aGF0IEkgd291bGQgYmUgY3JlYXRpbmcuPC9wPjxwPkFsdGhvdWdoIHRoZXJlIGlzIGNlcnRhaW5seSBub3RoaW5nIGdyb3VuZGJyYWtpbmcgaW4gdGhpcyBwcm9qZWN0IEkgaGFkIHNldCBteXNlbGYgYSBmZXcgY2hhbGxlbmdlcyB0aGF0IHR1cm5lZCBvdXQgdG8gYmUgcXVpdGUgdG91Z2ggYXQgdGhlIHRpbWUgYW5kIGhlbHBlZCBtZSB1bmRlcnN0YW5kIG1vcmUgYWJvdXQgUEhQLCBKUyBhbmQgY29kaW5nIGluIGdlbmVyYWwuPC9wPjxoMj5Qcm9kdWN0IExpc3Rpbmc8L2gyPjxocj48cD5SYXRoZXIgdGhhbiBvcHQgZm9yIGEgc3RyYWlnaHQgdXAgbGlzdCBvZiBwcm9kdWN0IHRodW1ibmFpbHMgSSB3YW50ZWQgdG8gaGF2ZSBzZWN0aW9ucyB0aGF0IGZlYXR1cmVkIGEgbnVtYmVyIG9mIHRodW1ibmFpbHMgd2l0aCBhIFxcJ3Byb2R1Y3QgZm9jdXNcXCcgcGFuZWwgdGhhdCB3b3VsZCBzaG93IG1vcmUgZGV0YWlsIG9mIHdoaWNoZXZlciBwcm9kdWN0IHRoZSB1c2VyIHdhcyBjdXJyZW50bHkgaG92ZXJpbmcgb3Zlci48YnI+RWFjaCBvZiB0aGVzZSBwYW5lbHMgd291bGQgaGF2ZSBhbiBhbHRlcm5hdGluZyBsYXlvdXQgaW4gb3JkZXIgdG8ga2VlcCBzb21lIGJhbGFuY2UgZG93biB0aGUgcGFnZS48YnI+VGhpcyB3YXMgd2hlcmUgSSBsZWFybmVkIGxvb3BpbmcgaW4gUEhQIGFuZCB3YXMgbXkgZmlyc3QgcmVhbCBjaGFsbGVuZ2Ugd2l0aCBqYXZhc2NyaXB0IChBbHRob3VnaCBteSBzb2x1dGlvbiB3YXMgdGVycmlibGUsIGNyYXp5IGRhdGEgYXR0cmlidXRlcyBldmVyd2hlcmUhKTwvcD48aDI+UHJvZHVjdCBMaWdodGJveDwvaDI+PGhyPjxwPkkgZGlkblxcJ3Qgd2FudCB0byBoYXZlIHRoZSB1c2VyIGxlYXZlIHRoZSBwcm9kdWN0IGxpc3RpbmcgcGFnZSBlYWhjIHRpbWUgdGhleSB3YW50ZWQgdG8gdmlldyBhIHByb2R1Y3Qgc28gSSBhdHRlbXB0ZWQgdG8gYnVpbGQgb3V0IGEgbGlnaHQtYm94Ljxicj5BbHRob3VnaCBJIGRpZCBnZXQgdGhpcyB0byB3b3JrLCB0aGUgc29sdXRpb24sIGFnYWluLCBsYWNrZWQgZWxlZ2FuY2UuIHJhdGhlciB0aGFuIHBlcmZvcm1pbmcgYW4gQUpBWCBjYWxsIHRvIHBvcHVsYXRlIHRoZSBsaWdodGJveCwgb3IgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBhIGZldyBwaWVjZXMgb2YgcHJvZHVjdCBkYXRhLCBJIHJlbHllZCBvbiB0aGUgZGF0YSBhdHRyaWJ1dGVzIHRoYXQgSSBoYWQgcmVuZGVyZWQgb3V0IG9uIGVhY2ggdGh1bWJuYWlsIGRpdi48YnI+VXR0ZXJseSB0ZXJyaWJsZSBidXQgdmVyeSBlZHVjYXRpb25hbCE8L3A+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3NhdWNlLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5UaGUgcmVhc29uIEkgZ290IHN0YXJ0ZWQgd2l0aCBsZWFybmluZyB0byBjb2RlIHdhcyB0byBzZXQgdXAgYW4gZWNvbW1lcmNlIHNpdGUgZm9yIFxcJ1RoZSBTYXVjZVxcJywgYSBicmFuZCB0aGF0IEkgd2FzIGhvcGluZyB0byBzZXQgdXAuPGJyPkkgaGFkIHN0YXJ0ZWQgY3JlYXRpbmcgZGVzaWducyBmb3IgdGVlc2hpcnRzIGFuZCBzd2VhdHNoaXJ0cyBldGMuLCBib3VnaHQgYSBsb2FkIG9mIHByaW50aW5nIGVxdWlwbWVudCBhbmQgaW5rcyBhbmQgbmVlZGVkIHRvIHNldCB1cCBhIGNoYW5uZWwgYSBjaGFubmVsIHRvIHNlbGwgdGhlIHByb2R1Y3RzIHRoYXQgSSB3b3VsZCBiZSBjcmVhdGluZy48L3A+PHA+QWx0aG91Z2ggdGhlcmUgaXMgY2VydGFpbmx5IG5vdGhpbmcgZ3JvdW5kYnJha2luZyBpbiB0aGlzIHByb2plY3QgSSBoYWQgc2V0IG15c2VsZiBhIGZldyBjaGFsbGVuZ2VzIHRoYXQgdHVybmVkIG91dCB0byBiZSBxdWl0ZSB0b3VnaCBhdCB0aGUgdGltZSBhbmQgaGVscGVkIG1lIHVuZGVyc3RhbmQgbW9yZSBhYm91dCBQSFAsIEpTIGFuZCBjb2RpbmcgaW4gZ2VuZXJhbC48L3A+PGgyPlByb2R1Y3QgTGlzdGluZzwvaDI+PGhyPjxwPlJhdGhlciB0aGFuIG9wdCBmb3IgYSBzdHJhaWdodCB1cCBsaXN0IG9mIHByb2R1Y3QgdGh1bWJuYWlscyBJIHdhbnRlZCB0byBoYXZlIHNlY3Rpb25zIHRoYXQgZmVhdHVyZWQgYSBudW1iZXIgb2YgdGh1bWJuYWlscyB3aXRoIGEgXFwncHJvZHVjdCBmb2N1c1xcJyBwYW5lbCB0aGF0IHdvdWxkIHNob3cgbW9yZSBkZXRhaWwgb2Ygd2hpY2hldmVyIHByb2R1Y3QgdGhlIHVzZXIgd2FzIGN1cnJlbnRseSBob3ZlcmluZyBvdmVyLjxicj5FYWNoIG9mIHRoZXNlIHBhbmVscyB3b3VsZCBoYXZlIGFuIGFsdGVybmF0aW5nIGxheW91dCBpbiBvcmRlciB0byBrZWVwIHNvbWUgYmFsYW5jZSBkb3duIHRoZSBwYWdlLjxicj5UaGlzIHdhcyB3aGVyZSBJIGxlYXJuZWQgbG9vcGluZyBpbiBQSFAgYW5kIHdhcyBteSBmaXJzdCByZWFsIGNoYWxsZW5nZSB3aXRoIGphdmFzY3JpcHQgKEFsdGhvdWdoIG15IHNvbHV0aW9uIHdhcyB0ZXJyaWJsZSwgY3JhenkgZGF0YSBhdHRyaWJ1dGVzIGV2ZXJ3aGVyZSEpPC9wPjxoMj5Qcm9kdWN0IExpZ2h0Ym94PC9oMj48aHI+PHA+SSBkaWRuXFwndCB3YW50IHRvIGhhdmUgdGhlIHVzZXIgbGVhdmUgdGhlIHByb2R1Y3QgbGlzdGluZyBwYWdlIGVhaGMgdGltZSB0aGV5IHdhbnRlZCB0byB2aWV3IGEgcHJvZHVjdCBzbyBJIGF0dGVtcHRlZCB0byBidWlsZCBvdXQgYSBsaWdodC1ib3guPGJyPkFsdGhvdWdoIEkgZGlkIGdldCB0aGlzIHRvIHdvcmssIHRoZSBzb2x1dGlvbiwgYWdhaW4sIGxhY2tlZCBlbGVnYW5jZS4gcmF0aGVyIHRoYW4gcGVyZm9ybWluZyBhbiBBSkFYIGNhbGwgdG8gcG9wdWxhdGUgdGhlIGxpZ2h0Ym94LCBvciByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGEgZmV3IHBpZWNlcyBvZiBwcm9kdWN0IGRhdGEsIEkgcmVseWVkIG9uIHRoZSBkYXRhIGF0dHJpYnV0ZXMgdGhhdCBJIGhhZCByZW5kZXJlZCBvdXQgb24gZWFjaCB0aHVtYm5haWwgZGl2Ljxicj5VdHRlcmx5IHRlcnJpYmxlIGJ1dCB2ZXJ5IGVkdWNhdGlvbmFsITwvcD4nXG5cdH0se1xuXHRcdElEOiA0LFxuXHRcdHRpdGxlOiAnU3VyZiBUcmFja2luZyBBcHAgQ29uY2VwdCcsXG5cdFx0c2x1ZzogJ3N1cmYtdHJhY2tpbmctYXBwLWNvbmNlcHQnLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydqUXVlcnknXSxcblx0XHRcdHJ1Ynk6IFsnUnVieSBvbiBSYWlscyddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3N1cmZhcHBjb25jZXB0LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5EdXJpbmcgbXkgdGltZSBzdHVkeWluZyBhdCBCaXRtYWtlciBMYWJzIGluIFRvcm9udG8sIG15c2VsZiBhbmQgYSBjb3VwbGUgb2YgY2xhc3NtYXRlcyBkZWNpZGVkIHRvIGVudGVyIHRoZSBtYWtlciBlZGl0aW9uIG9mIHN0YXJ0LXVwIHdlZWtlbmQuPC9wPjxwPkkgaGFkIGhhZCBhbiBpZGVhIGEgeWVhciBvciBzbyBiZWZvcmUgaGFuZCB3aGlsc3QgZmluaXNoaW5nIHVwIGF0IHVuaXZlcnNpdHkgdG8gY3JlYXRlIGhvdXNpbmcgZm9yIGEgc21hcnRwaG9uZSB0aGF0IGNvdWxkIGJlIGF0dGFjaGVkIHRvIGEgc3VyZmJvYXJkIGluIG9yZGVyIHRvIGNvbGxlY3QgZGF0YSBhYm91dCB0aGUgc3VyZmVyXFwncyBwZXJmb3JtYW5jZSBkdXJpbmcgdGhlaXIgc2Vzc2lvbiwgYWxsb3dpbmcgdGhlbSB0byByZXZpZXcgdGhlIGRhdGEgbGF0ZXIuIFNvIHdlIHdlbnQgYWJvdXQgcHJvdG90eXBpbmcgYSBkZXZpY2UgKGluIHBsYWNlIG9mIHRoZSBzbWFydHBob25lIGhvdXNpbmcpIGFuZCB0aGUgd2ViIGFwcCB0aGF0IHdvdWxkIGRpc3BsYXkgdGhlIGRhdGEuPC9wPjxwPkFzIHRoaXMgd2FzIG1vcmUgb2YgYSBjb25jZXB0IHByb2plY3QgdGhhbiBhbiBhY3R1YWwgYXR0ZW1wdCBhdCBidWlsZGluZyBhIHByb2R1Y3QsIEkgYWRkZWQgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgd291bGRuXFwndCByZWFsbHkgYmUgYWNoaWV2YWJsZSwgc3VjaCBhcyByZWFsLXRpbWUgd2F2ZS10by13YXZlIHVwZGF0ZXMgdG8gdGhlIHN1cmZlcnMgcHJvZmlsZSwgd2hlcmUgZWFjaCB3YXZlIHdvdWxkIGJlIHBsb3R0ZWQgb24gYSBsb2NhbCBtYXAgd2l0aCBpdFxcJ3Mgc3BlZWQgYW5kIGRpc3RhbmNlIHNob3duIGFsb25nIHNpZGUuPC9wPjxwPldlIGRpZG5cXCd0IHdpbiBhbnkgcHJpemVzIGJ1dCBkaWRuXFwndCBkbyB0ZXJyYmlseSBlaXRoZXIgYXMgd2Ugd2VyZSBzb21ld2hlcmUgaW4gdGhlIHRvcCA5IG91dCBvZiA0MCsgdGVhbXMuPC9wPidcblx0fSx7XG5cdFx0SUQ6IDUsXG5cdFx0dGl0bGU6ICdSUEcgYWR2ZW50dXJlIGdhbWUnLFxuXHRcdHNsdWc6ICdycGctYWR2ZW50dXJlLWdhbWUnLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydqUXVlcnknXSxcblx0XHRcdHJ1Ynk6IFsnUnVieSBvbiBSYWlscyddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3JwZy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+Rm9yIG15IGZpbmFsIHByb2plY3QgYXQgQml0bWFrZXIgTGFicywgSSBkZWNpZGVkIHRvIGJ1aWxkIGFuIFJQRyBicm93c2VyIGdhbWUgdGhhdCBhbGxvd3MgcGxheWVycyB0byBjcmVhdGUgYSBjaGFyYWN0ZXIsIGJhdHRsZSBOUENzIGFuZCBvdGhlciBwbGF5ZXJzLCBjb2xsZWN0IGdvbGQgJmFtcDsgaXRlbXMsIGxldmVsIHVwIGFuZCBrZWVwIHRyYWNrIG9mIHRoZWlyIHJhbmsgY29tcGFyZWQgdG8gb3RoZXIgcGxheWVycy48L3A+PHA+VGhpcyB3YXMgaGFyZCB3b3JrLCBlc3BlY2lhbGx5IGR1ZSB0byB0aGUgbGltaXRlZCB0aW1lIGZyYW1lIHdoaWNoIGludm9sdmVkIGEgZmV3IH4xOCBob3VyIHNlc3Npb25zIGFuZCBvbmUgMzYgaG91ciBzZXNzaW9uISAoV2UgaGFkIHJvdWdobHkgdHdvIHdlZWtzIHRvIGhhY2sgb24gb3VyIGZpbmFsIHByb2plY3RzKS4gSG93ZXZlciwgYXMgbXVjaCBhcyBpdCB3YXMgaGFyZHdvcmsgaXQgd2FzIGEgbG90IG9mIGZ1biE8L3A+PHA+SSBsZWFybmVkIGEgaGVhcCBhYm91dCBSdWJ5IG9uIFJhaWxzIGluIHRoaXMgdGltZSwgcGFydGljdWxhcmx5IHNpbmNlIHRoZXJlIHdlcmUgc29tZSBjb21wbGV4IHJlbGF0aW9uc2hpcHMgZ29pbmcgb24gYmV0d2VlbiB0aGUgZGlmZmVyZW50IHJlc291cmNlcyBhbmQgZW50aXRpZXMgaW4gdGhpcyBnYW1lLjwvcD48cD5UaGUgcHJvamVjdCBoYXMgc2luY2UgYmVlbiBsYWlkIHRvIHJlc3QgYnV0IEkgZG8gc3RpbGwgYWltIHRvIGZpbmQgdGhlIHRpbWUgdG8gcmUtYnVpbGQgaXQgd2l0aCBzb21lIGV4dHJhIGZlYXR1cmVzLCBzdWNoIGFzIHVzaW5nIHdlYnNvY2tldHMgYW5kIEhUTUw1IGNhbnZhcyEgLSBpdFxcJ2QgYmUgYSBmdW4gc2lkZSBwcm9qZWN0IHRvIGhhdmUgb24gdGhlIGdvITwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ1JpdmVyIElzbGFuZCBDaGVja291dCcsXG5cdFx0Ly8gXHRzbHVnOiAncml2ZXItaXNsYW5kLWNoZWNrb3V0Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdC8vIFx0XHQnYyMnOiBbJ1Jhem9yJywgJy5uZXQnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGFwaXM6IFsnR29vZ2xlIE1hcHMnXSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvcml2ZXItaXNsYW5kLWNoZWNrb3V0LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD48L3A+J1xuXHRcdC8vIH0se1xuXHRcdC8vIFx0SUQ6IFhYLFxuXHRcdC8vIFx0dGl0bGU6ICdOaW50ZW5kbyBDdXN0b21lciBTZXJ2aWNlJyxcblx0XHQvLyBcdHNsdWc6ICduaW50ZW5kby1jdXN0b21lci1zZXJ2aWNlJyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdC8vIFx0XHRwaHA6IFsnU2lsdmVyU3RyaXBlJ11cblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL25pbnRlbmRvLWN1c3RvbWVyLXNlcnZpY2UucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ0p1cmEgVGFzdGl2YWwgMjAxNScsXG5cdFx0Ly8gXHRzbHVnOiAnanVyYS10YXN0aXZhbC0yMDE1Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeScsICdHcnVudCddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9qdXJhLXRhc3RpdmFsLTIwMTUucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ1doeXRlICYgTWFja2F5Jyxcblx0XHQvLyBcdHNsdWc6ICd3aHl0ZS1hbmQtbWFja2F5Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeScsICdHcnVudCcsICdTa3JvbGxyJ11cblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3doeXRlLWFuZC1tYWNrYXkucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ0NhcHJpU3VuIE1pbmlvbnMnLFxuXHRcdC8vIFx0c2x1ZzogJ2NhcHJpU3VuLW1pbmlvbnMnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0Ly8gXHRcdHBocDogWydTaWx2ZXJTdHJpcGUnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvY2FwcmlTdW4tbWluaW9ucy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHR9LHtcblx0XHRcdElEOiA2LFxuXHRcdFx0dGl0bGU6ICdHcmVlbnZhbGUgUG90YXRvcGFscycsXG5cdFx0XHRzbHVnOiAnZ3JlZW52YWxlLXBvdGF0b3BhbHMnLFxuXHRcdFx0c3RhY2s6IHtcblx0XHRcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0XHRcdHBocDogWydTaWx2ZXJTdHJpcGUnXVxuXHRcdFx0fSxcblx0XHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvZ3JlZW52YWxlLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD48L3A+PHA+R3JlZW5WYWxlIFBvdGF0b2VzIHdlcmUgcnVubmluZyBhIHByb21vdGlvbiB3aGVyZSBjdXN0b21lcnMgYnV5aW5nIHRoZWlyIHByb2R1Y3RzIGNvdWxkIGVudGVyIG9uLXBhY2sgY29kZXMgdG8gcmVkZWVtIGFuZCBjb2xsZWN0IHBvaW50cy4uLiBvciByYXRoZXIgXFwnUG90YXRva2Vuc1xcJyE8L3A+IDxwPlRoaXMgd2FzIHF1aXRlIGEgZnVuIHByb2plY3QgdG8gd29yayBvbi4gQXMgd2VsbCBhcyBpdCBoYXZpbmcgYSBmdW4gY2FydG9vbnkgc3R5bGUgaXQgcHJlc2VudGVkIGEgZmV3IHNpbXBsZSBidXQgaW50ZXJlc3RpbmcgY2hhbGxlbmdlcyB0byBvdmVyY29tZS48L3A+IDxwPlRoZSBtYWluIGNoYWxsZW5nZSB3YXMgdGhlIGhhbmRsaW5nIG9mIHRoZSB0b2tlbiByZWRlbXB0aW9ucywgdGhlcmUgd2VyZSBhIG51bWJlciBvZiBkaWZmZXJlbnQgd2F5cyBmb3IgYSB1c2VyIHRvIGVhcm4gdGhlc2UgdG9rZW5zLCB0aHJvdWdoIGRpZmZlcmVudCBvbi1wYWNrIGFuZCBtYWdhemluZSBjb2RlcyBhbmQgdGhyb3VnaCBmYWNlYm9vayBmcmllbmQgcmVmZXJhbHMgLSBjZXJ0YWluIHNvdXJjZXMgd2VyZSByZXBlYXRhYmxlLCBvdGhlcnMgd2VyZSBub3QuIEFub3RoZXIgY2hhbGxlbmdlIHdhcyB0byBpbnRlZ3JhdGUgYSB0aGlyZCBwYXJ0eSBBUEkgdGhhdCBoYW5kbGVkIHRoZSB2YWxpZGF0aW9uIG9mIHRoZSBwcm9tbyBjb2RlcyAtIHdoaWNoIHR1cm5lZCBvdXQgdG8gaGF2ZSBhIGNvdXBsZSBvZiBidWdzITwvcD4gJ1xuXHRcdH1cblxuXTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF89d2luZG93Ll87XG5cbnZhciBBcHBSb3V0ZXIgPSB3aW5kb3cuQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG5cdHJvdXRlczoge1xuXHRcdCcnOiAncm9vdCcsXG5cdFx0J2Jsb2coLykoLzpwb3N0KSc6ICdibG9nJyxcblx0XHQncHJvamVjdHMoLzpwcm9qZWN0KSc6ICdwcm9qZWN0cycsXG5cdFx0J2NvbnRhY3QnOiAnY29udGFjdCcsXG5cdFx0J2Fib3V0JzogJ2Fib3V0J1xuXHR9LFxuXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKGNvbnRleHQpe1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6cmVkaXJlY3QnLCB0aGlzLnJlZGlyZWN0KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnLCB0aGlzLmdvVG9DdXJyZW50Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6Z29Ub0xhbmRpbmcnLCB0aGlzLmdvVG9MYW5kaW5nKTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpuZXh0Q29udGVudCcsIHRoaXMuZ29Ub05leHRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpwcmV2Q29udGVudCcsIHRoaXMuZ29Ub1ByZXZDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpzZXRDdXJyZW50Q29udGVudCcsIHRoaXMuc2V0Q3VycmVudENvbnRlbnQpO1xuXG5cdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5kZWZhdWx0Q29udGVudFJvdXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5vbigncm91dGU6cm9vdCcgLGZ1bmN0aW9uKCl7XG5cblx0XHRcdGlmICghY29udGV4dC52aWV3cy5pbnRyby5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmludHJvID0gbmV3IGNvbnRleHQudmlld3MuaW50cm8oe1xuXHQgIFx0XHRcdGVsOiBjb250ZXh0LmludHJvUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0ludHJvJyk7XG5cbiAgXHRcdC8vIG5ldyBjb250ZXh0LnZpZXdzLmludHJvKHtcbiAgXHRcdC8vIFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG4gIFx0XHQvLyB9KTtcbiAgXHRcdC8vICQoJ2JvZHknKS5hZGRDbGFzcygnaW50cm8nKTtcblxuICBcdFx0dGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmJsb2cnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0Ly8gT25seSB0cmFuc2l0aW9uIGlmIHRoZSBjdXJyZW50IHZpZXcgaXMgbm90IGNoYW5naW5nIChidXQgdGhlIHJlc291cmNlIGlzKS5cblx0XHRcdHZhciB0cmFuc2l0aW9uID0gKHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID09PSBjb250ZXh0LnZpZXdzLmJsb2cgJiYgdGhpcy5sYXN0Um91dGUgIT09ICcnKTtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmJsb2cuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nID0gbmV3IGNvbnRleHQudmlld3MuYmxvZyh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlc1snYmxvZy1wb3N0J11cblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuYmxvZy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcbiAgXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOm1lc3NhZ2UnLCAnPHA+RWVrLCBsb3RzIG9mIElwc3VtISBJXFwnbGwgc3RhcnQgd3JpdGluZyBhY3R1YWwgcG9zdHMgb25jZSB0aGlzIHNpdGUgaXMgZml4ZWQgdXAgcHJvcGVybHkuIEZvciBub3csIGVuam95IGFsbCB0aGUgdmFyaW91cyBpcHN1bXMhPC9wPicpO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmxhc3RSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLmJsb2c7XG5cdFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOnByb2plY3RzJyAsZnVuY3Rpb24oc2x1Zyl7XG5cdFx0XHQvLyBPbmx5IHRyYW5zaXRpb24gaWYgdGhlIGN1cnJlbnQgdmlldyBpcyBub3QgY2hhbmdpbmcgKGJ1dCB0aGUgcmVzb3VyY2UgaXMpLlxuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSAodGhpcy5jdXJyZW50Q29udGVudFZpZXcgPT09IGNvbnRleHQudmlld3MucHJvamVjdHMgJiYgdGhpcy5sYXN0Um91dGUgIT09ICcnKTtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLnByb2plY3RzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMgPSBuZXcgY29udGV4dC52aWV3cy5wcm9qZWN0cyh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5wcm9qZWN0LFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29udGV4dC52aWV3cy5wcm9qZWN0cy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcblxuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0XHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5wcm9qZWN0cztcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6Y29udGFjdCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuY29udGFjdC5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QgPSBuZXcgY29udGV4dC52aWV3cy5jb250YWN0KHtcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmNvbnRhY3Rcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuY29udGFjdC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuY29udGFjdDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6YWJvdXQnICxmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmFib3V0LmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MuYWJvdXQgPSBuZXcgY29udGV4dC52aWV3cy5hYm91dCh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5hYm91dFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5hYm91dC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuYWJvdXQ7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmRlZmF1bHRSb3V0ZScsIGZ1bmN0aW9uKCl7XG5cdFx0fSk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuXG5cdH0sXG5cdHNldEN1cnJlbnRDb250ZW50OiBmdW5jdGlvbihjb250ZW50KXtcblx0XHRpZiAoY29udGVudC52aWV3KSB7dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZW50LnZpZXc7IH1cblx0XHRpZiAoY29udGVudC5yb3V0ZSkge3RoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gY29udGVudC5yb3V0ZTsgfVxuXHR9LFxuXHRnb1RvTGFuZGluZzogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubmF2aWdhdGUoJycsIHt0cmlnZ2VyOiB0cnVlfSk7XG5cdH0sXG5cdGdvVG9DdXJyZW50Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubmF2aWdhdGUodGhpcy5jdXJyZW50Q29udGVudFJvdXRlLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuXHR9LFxuXHRnb1RvUHJldkNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXRQcmV2TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3LnByZXZSb3V0ZSgpO1xuXHRcdGlmICghcm91dGUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dGhpcy5uYXZpZ2F0ZShyb3V0ZSk7XG5cdH0sXG5cdGdvVG9OZXh0Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdGlmICghXy5pc0Z1bmN0aW9uKHRoaXMuY3VycmVudENvbnRlbnRWaWV3LmdldE5leHRNb2RlbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dmFyIHJvdXRlID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcubmV4dFJvdXRlKCk7XG5cdFx0aWYgKCFyb3V0ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR0aGlzLm5hdmlnYXRlKHJvdXRlKTtcblx0fSxcblx0ZGVmYXVsdENvbnRlbnRSb3V0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnIy9hYm91dCc7XG5cdH0sXG5cdHJlZGlyZWN0OiBmdW5jdGlvbihyb3V0ZSl7XG5cdFx0dGhpcy5uYXZpZ2F0ZShyb3V0ZSwge3RyaWdnZXI6IHRydWV9KTtcblx0fVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBSb3V0ZXI7IiwidmFyIGV4cG9ydHMgPSAoZnVuY3Rpb24gKCkgeyBcblxuIHZhciBIYW5kbGViYXJzID0gd2luZG93LkhhbmRsZWJhcnM7IFxuXG50aGlzW1wiSlNUXCJdID0gdGhpc1tcIkpTVFwiXSB8fCB7fTtcblxudGhpc1tcIkpTVFwiXVtcImFib3V0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgYWJvdXRcXFwiPlxcblx0XFxuXHQ8aDI+QWJvdXQgTWUuLi4uPC9oMj5cXG5cdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIiBzdHlsZT1cXFwiY29sb3I6IHJnYmEoMTgwLDE4MCwxODAsMSk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiPlxcblx0XHQ8aDI+RWVrITwvaDI+XFxuXHRcdDxwPlRoaXMgYml0J3MgY29taW5nIHNvb24gSSBwcm9taXNlITwvcD5cXG5cdDwvZGl2PlxcblxcbjwvZGl2PlwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImJsb2ctcG9zdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snd2l0aCddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXR0cmlidXRlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcIndpdGhcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGJ1ZmZlciA9IFwiXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFx0XHRcXG5cdFx0XHRcdFx0XHRcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2PlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlxcblx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgcGxhY2Vob2xkZXItdmlld1xcXCI+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImgyLXRpdGxlXFxcIj48L2Rpdj5cXG5cdFx0PHVsPjwvdWw+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXI7IGNvbG9yOiAjOTk5XFxcIj5Mb2FkaW5nLi4uPC9oMj5cXG5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMTtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmF0dHJpYnV0ZXMgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDQsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IHJldHVybiBzdGFjazE7IH1cbiAgZWxzZSB7IHJldHVybiAnJzsgfVxuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImNvbnRhY3RcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBjb250YWN0XFxcIj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cXG5cdFx0PGRpdiBjbGFzcz1cXFwic21hbGwtMTIgbGFyZ2UtNFxcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwiY29ubmVjdFxcXCI+XFxuXHRcdFx0XHRcXG5cdFx0XHRcdDxoMj5Db25uZWN0PC9oMj5cXG5cdFx0XHRcdDx1bCBjbGFzcz1cXFwic29jaWFsLWljb25zXFxcIj5cXG5cdFx0XHRcdFx0PGxpPlxcblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL1NwZW5fVGF5bG9yXFxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbiB0d2l0dGVyXFxcIj5cXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXIgbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5Ud2l0dGVyPC9wPlxcblx0XHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PC9hPlxcblx0XHRcdFx0XHQ8L2xpPlxcblx0XHRcdFx0XHQ8bGk+XFxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9TcGVuVUtcXFwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiYnV0dG9uIGdpdGh1YlxcXCI+XFxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVxcXCJmYSBmYS1naXRodWIgbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5HaXRIdWI8L3A+XFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2E+XFxuXHRcdFx0XHRcdDwvbGk+XFxuXHRcdFx0XHRcdDxsaT5cXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cDovL3VrLmxpbmtlZGluLmNvbS9pbi9zcGVudGF5bG9yXFxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbiBsaW5rZWQtaW5cXFwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW4gbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5MaW5rZWRJbjwvcD5cXG5cdFx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDwvYT5cXG5cdFx0XHRcdFx0PC9saT5cXG5cdFx0XHRcdDwvdWw+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblxcblx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMiBsYXJnZS04XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzYXktaGVsbG9cXFwiPlxcblx0XHRcdFx0PGgyPlNheSBIZWxsbyE8L2gyPlxcblx0XHRcdFx0PGZvcm0gY2xhc3M9XFxcImNvbnRhY3QtZm9ybVxcXCI+XFxuXFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkc1xcXCI+XFxuXFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic3VibWlzc2lvbi1lcnJvclxcXCI+XFxuXHRcdFx0XHRcdFx0XHRZaWtlcyEgU29tZXRoaW5nIHdlbnQgd3JvbmcsIHRyeSBhZ2FpbiFcXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVxcXCJmYSBmYS1jbG9zZSByaWdodFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG5cdFx0XHRcdCAgICBcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBpZD1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWVcXFwiLz5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuXHRcdFx0XHQgICAgXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIvPlxcblx0XHRcdFx0ICAgIDwvZGl2Plxcblxcblxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG5cdFx0XHRcdCAgICBcdDx0ZXh0YXJlYSBuYW1lPVxcXCJtZXNzYWdlXFxcIiBpZD1cXFwibWVzc2FnZVxcXCIgcm93cz1cXFwiNlxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXQncyB1cD9cXFwiPjwvdGV4dGFyZWE+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwidGhhbmtzLW1lc3NhZ2VcXFwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aDI+QXdlc29tZSE8L2gyPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5UaGFua3MgZm9yIGdldHRpbiBpbiB0b3VjaCE8YnI+IEknbGwgYmUgc3VyZSB0byBnZXQgYmFjayB0byB5b3Ugc29vbiE8L3A+XFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0ICAgIFxcblxcblx0XHRcdCAgICA8YnV0dG9uIGNsYXNzPVxcXCJzdWJtaXRcXFwiIHZhbHVlPVxcXCJTZW5kXFxcIj48c3Bhbj5GaXJlIGF3YXkhPC9zcGFuPjxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cXFwiPjwvaT48aSBjbGFzcz1cXFwiZmEgZmEtdGh1bWJzLXVwXFxcIj48L2k+PC9idXR0b24+XFxuXHRcdFx0XHQ8L2Zvcm0+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblxcblx0XHQ8L2Rpdj5cXG5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiaW50cm9cIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8dWwgY2xhc3M9XFxcInNvY2lhbC1pY29uc1xcXCI+XFxuXHQ8bGk+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vU3Blbl9UYXlsb3JcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyXFxcIj48L2k+PC9hPjwvbGk+XFxuXHQ8bGk+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9TcGVuVUtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1naXRodWJcXFwiPjwvaT48L2E+PC9saT5cXG5cdDxsaT48YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cDovL3VrLmxpbmtlZGluLmNvbS9pbi9zcGVudGF5bG9yXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW5cXFwiPjwvaT48L2E+PC9saT5cXG48L3VsPlxcblxcbjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXFxuXHQgd2lkdGg9XFxcIjEwMCVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAwIDE2MFxcXCIgZW5hYmxlLWJhY2tncm91bmQ9XFxcIm5ldyAwIDAgMTAwMCAxNjBcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6IDkwMHB4OyBtYXJnaW4tYm90dG9tOiA0MHB4O1xcXCI+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNOTAuNDc5LDk5LjM5OGMwLDYuMTk4LTEuNTcyLDExLjcwMS00LjcxNywxNi41MDljLTMuMTQ1LDQuODA5LTcuNjgsOC41NDUtMTMuNjA0LDExLjIxMVxcblx0XHRcdGMtNS45MjUsMi42NjYtMTIuODc1LDMuOTk5LTIwLjg1LDMuOTk5Yy02LjY1NCwwLTEyLjIzNi0wLjQ2OC0xNi43NDgtMS40MDFzLTkuMjA2LTIuNTYzLTE0LjA4Mi00Ljg4OHYtMjQuMDYyXFxuXHRcdFx0YzUuMTQ5LDIuNjQ0LDEwLjUwNCw0LjcwNiwxNi4wNjQsNi4xODdjNS41NiwxLjQ4MSwxMC42NjQsMi4yMjIsMTUuMzEyLDIuMjIyYzQuMDEsMCw2Ljk0OS0wLjY5NCw4LjgxOC0yLjA4NVxcblx0XHRcdGMxLjg2OC0xLjM5LDIuODAzLTMuMTc5LDIuODAzLTUuMzY2YzAtMS4zNjctMC4zNzYtMi41NjMtMS4xMjgtMy41ODlzLTEuOTYtMi4wNjItMy42MjMtMy4xMVxcblx0XHRcdGMtMS42NjQtMS4wNDgtNi4wOTYtMy4xODktMTMuMjk2LTYuNDI2Yy02LjUxOC0yLjk2Mi0xMS40MDUtNS44MzMtMTQuNjYzLTguNjEzYy0zLjI1OS0yLjc3OS01LjY3NC01Ljk3LTcuMjQ2LTkuNTdcXG5cdFx0XHRjLTEuNTcyLTMuNi0yLjM1OC03Ljg2MS0yLjM1OC0xMi43ODNjMC05LjIwNSwzLjM1LTE2LjM4MywxMC4wNDktMjEuNTMzYzYuNjk5LTUuMTQ5LDE1LjkwNC03LjcyNSwyNy42MTctNy43MjVcXG5cdFx0XHRjMTAuMzQ1LDAsMjAuODk1LDIuMzkzLDMxLjY1LDcuMTc4TDgyLjIwOCw1Ni40Yy05LjM0My00LjI4My0xNy40MDktNi40MjYtMjQuMTk5LTYuNDI2Yy0zLjUxLDAtNi4wNjIsMC42MTUtNy42NTYsMS44NDZcXG5cdFx0XHRjLTEuNTk2LDEuMjMtMi4zOTMsMi43NTgtMi4zOTMsNC41OGMwLDEuOTYsMS4wMTQsMy43MTUsMy4wNDIsNS4yNjRjMi4wMjcsMS41NSw3LjUzLDQuMzc1LDE2LjUwOSw4LjQ3N1xcblx0XHRcdGM4LjYxMywzLjg3NCwxNC41OTUsOC4wMzIsMTcuOTQ0LDEyLjQ3NlM5MC40NzksOTIuNjU0LDkwLjQ3OSw5OS4zOTh6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzQzQkZCNFxcXCIgZD1cXFwiTTkwLjQ3OSw4OS4zOThjMCw2LjE5OC0xLjU3MiwxMS43MDEtNC43MTcsMTYuNTA5Yy0zLjE0NSw0LjgwOS03LjY4LDguNTQ1LTEzLjYwNCwxMS4yMTFcXG5cdFx0XHRjLTUuOTI1LDIuNjY2LTEyLjg3NSwzLjk5OS0yMC44NSwzLjk5OWMtNi42NTQsMC0xMi4yMzYtMC40NjgtMTYuNzQ4LTEuNDAxcy05LjIwNi0yLjU2My0xNC4wODItNC44ODhWOTAuNzY2XFxuXHRcdFx0YzUuMTQ5LDIuNjQ0LDEwLjUwNCw0LjcwNiwxNi4wNjQsNi4xODdjNS41NiwxLjQ4MSwxMC42NjQsMi4yMjIsMTUuMzEyLDIuMjIyYzQuMDEsMCw2Ljk0OS0wLjY5NCw4LjgxOC0yLjA4NVxcblx0XHRcdGMxLjg2OC0xLjM5LDIuODAzLTMuMTc5LDIuODAzLTUuMzY2YzAtMS4zNjctMC4zNzYtMi41NjMtMS4xMjgtMy41ODlzLTEuOTYtMi4wNjItMy42MjMtMy4xMVxcblx0XHRcdGMtMS42NjQtMS4wNDgtNi4wOTYtMy4xODktMTMuMjk2LTYuNDI2Yy02LjUxOC0yLjk2Mi0xMS40MDUtNS44MzMtMTQuNjYzLTguNjEzYy0zLjI1OS0yLjc3OS01LjY3NC01Ljk3LTcuMjQ2LTkuNTdcXG5cdFx0XHRjLTEuNTcyLTMuNi0yLjM1OC03Ljg2MS0yLjM1OC0xMi43ODNjMC05LjIwNSwzLjM1LTE2LjM4MywxMC4wNDktMjEuNTMzYzYuNjk5LTUuMTQ5LDE1LjkwNC03LjcyNSwyNy42MTctNy43MjVcXG5cdFx0XHRjMTAuMzQ1LDAsMjAuODk1LDIuMzkzLDMxLjY1LDcuMTc4TDgyLjIwOCw0Ni40Yy05LjM0My00LjI4My0xNy40MDktNi40MjYtMjQuMTk5LTYuNDI2Yy0zLjUxLDAtNi4wNjIsMC42MTUtNy42NTYsMS44NDZcXG5cdFx0XHRjLTEuNTk2LDEuMjMtMi4zOTMsMi43NTgtMi4zOTMsNC41OGMwLDEuOTYsMS4wMTQsMy43MTUsMy4wNDIsNS4yNjRjMi4wMjcsMS41NSw3LjUzLDQuMzc1LDE2LjUwOSw4LjQ3N1xcblx0XHRcdGM4LjYxMywzLjg3NCwxNC41OTUsOC4wMzIsMTcuOTQ0LDEyLjQ3NlM5MC40NzksODIuNjU0LDkwLjQ3OSw4OS4zOTh6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTE3OC40NTgsNjEuNTk2YzAsMTEuMTY2LTMuMjkzLDE5Ljc5LTkuODc4LDI1Ljg3NGMtNi41ODYsNi4wODQtMTUuOTM5LDkuMTI2LTI4LjA2Miw5LjEyNmgtNy41ODh2MzMuMTU0XFxuXHRcdFx0aC0yNy4wMDJWMjkuODA5aDM0LjU5YzEyLjYyMywwLDIyLjEwMywyLjc1OCwyOC40MzgsOC4yNzFDMTc1LjI5LDQzLjU5NSwxNzguNDU4LDUxLjQzNCwxNzguNDU4LDYxLjU5NnogTTEzMi45MzEsNzQuNTg0aDQuOTIyXFxuXHRcdFx0YzQuMDU2LDAsNy4yOC0xLjEzOSw5LjY3My0zLjQxOGMyLjM5My0yLjI3OCwzLjU4OS01LjQyMywzLjU4OS05LjQzNGMwLTYuNzQ0LTMuNzM3LTEwLjExNy0xMS4yMTEtMTAuMTE3aC02Ljk3M1Y3NC41ODR6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiI0VFRUI1RlxcXCIgZD1cXFwiTTE3OC40NTgsNTEuNTk2YzAsMTEuMTY2LTMuMjkzLDE5Ljc5LTkuODc4LDI1Ljg3NGMtNi41ODYsNi4wODQtMTUuOTM5LDkuMTI2LTI4LjA2Miw5LjEyNmgtNy41ODh2MzMuMTU0XFxuXHRcdFx0aC0yNy4wMDJWMTkuODA5aDM0LjU5YzEyLjYyMywwLDIyLjEwMywyLjc1OCwyOC40MzgsOC4yNzFDMTc1LjI5LDMzLjU5NSwxNzguNDU4LDQxLjQzNCwxNzguNDU4LDUxLjU5NnogTTEzMi45MzEsNjQuNTg0aDQuOTIyXFxuXHRcdFx0YzQuMDU2LDAsNy4yOC0xLjEzOSw5LjY3My0zLjQxOGMyLjM5My0yLjI3OCwzLjU4OS01LjQyMywzLjU4OS05LjQzNGMwLTYuNzQ0LTMuNzM3LTEwLjExNy0xMS4yMTEtMTAuMTE3aC02Ljk3M1Y2NC41ODR6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTI1My43MjIsMTI5Ljc1aC01OS4zMzZWMjkuODA5aDU5LjMzNnYyMS42N2gtMzIuMzM0djE1LjcyM2gyOS45NDF2MjEuNjdoLTI5Ljk0MXYxOC44NjdoMzIuMzM0VjEyOS43NXpcXFwiXFxuXHRcdFx0Lz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjRjE1QzZGXFxcIiBkPVxcXCJNMjUzLjcyMiwxMTkuNzVoLTU5LjMzNlYxOS44MDloNTkuMzM2djIxLjY3aC0zMi4zMzR2MTUuNzIzaDI5Ljk0MXYyMS42N2gtMjkuOTQxdjE4Ljg2N2gzMi4zMzRWMTE5Ljc1elxcXCJcXG5cdFx0XHQvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk0zNjYuMzc4LDEyOS43NWgtMzUuNDFsLTM2LjUwNC03MC40MWgtMC42MTVjMC44NjUsMTEuMDc0LDEuMjk5LDE5LjUyOCwxLjI5OSwyNS4zNjF2NDUuMDQ5aC0yMy45MjZcXG5cdFx0XHRWMjkuODA5aDM1LjI3M2wzNi4zNjcsNjkuNDUzaDAuNDFjLTAuNjM5LTEwLjA3MS0wLjk1Ny0xOC4xNi0wLjk1Ny0yNC4yNjhWMjkuODA5aDI0LjA2MlYxMjkuNzV6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiI0VFRUI1RlxcXCIgZD1cXFwiTTM2Ni4zNzgsMTE5Ljc1aC0zNS40MWwtMzYuNTA0LTcwLjQxaC0wLjYxNWMwLjg2NSwxMS4wNzQsMS4yOTksMTkuNTI4LDEuMjk5LDI1LjM2MXY0NS4wNDloLTIzLjkyNlxcblx0XHRcdFYxOS44MDloMzUuMjczbDM2LjM2Nyw2OS40NTNoMC40MWMtMC42MzktMTAuMDcxLTAuOTU3LTE4LjE2LTAuOTU3LTI0LjI2OFYxOS44MDloMjQuMDYyVjExOS43NXpcXFwiLz5cXG5cdDwvZz5cXG48L2c+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNNDY4LjQzOCwxMjkuNzVoLTI3LjAwMlY1MS44ODloLTI0LjQwNHYtMjIuMDhoNzUuNzQydjIyLjA4aC0yNC4zMzZWMTI5Ljc1elxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM0M0JGQjRcXFwiIGQ9XFxcIk00NjguNDM4LDExOS43NWgtMjcuMDAyVjQxLjg4OWgtMjQuNDA0di0yMi4wOGg3NS43NDJ2MjIuMDhoLTI0LjMzNlYxMTkuNzV6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTU2OC4zOCwxMjkuNzVsLTQuOTIyLTE4LjczaC0zMi40NzFsLTUuMDU5LDE4LjczaC0yOS42NjhsMzIuNjA3LTEwMC4zNTJoMzYuMDI1bDMzLjAxOCwxMDAuMzUySDU2OC4zOHpcXG5cdFx0XHQgTTU1Ny44NTMsODguODcxbC00LjMwNy0xNi40MDZjLTEuMDAzLTMuNjQ2LTIuMjIyLTguMzYyLTMuNjU3LTE0LjE1Yy0xLjQzNi01Ljc4Ny0yLjM4Mi05LjkzNS0yLjgzNy0xMi40NDFcXG5cdFx0XHRjLTAuNDEsMi4zMjQtMS4yMiw2LjE1Mi0yLjQyNywxMS40ODRjLTEuMjA4LDUuMzMyLTMuODg2LDE1LjgzNy04LjAzMiwzMS41MTRINTU3Ljg1M3pcXFwiLz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjRUVFQjVGXFxcIiBkPVxcXCJNNTY4LjM4LDExOS43NWwtNC45MjItMTguNzNoLTMyLjQ3MWwtNS4wNTksMTguNzNoLTI5LjY2OGwzMi42MDctMTAwLjM1MmgzNi4wMjVsMzMuMDE4LDEwMC4zNTJINTY4LjM4elxcblx0XHRcdCBNNTU3Ljg1Myw3OC44NzFsLTQuMzA3LTE2LjQwNmMtMS4wMDMtMy42NDYtMi4yMjItOC4zNjItMy42NTctMTQuMTVjLTEuNDM2LTUuNzg3LTIuMzgyLTkuOTM1LTIuODM3LTEyLjQ0MVxcblx0XHRcdGMtMC40MSwyLjMyNC0xLjIyLDYuMTUyLTIuNDI3LDExLjQ4NGMtMS4yMDgsNS4zMzItMy44ODYsMTUuODM3LTguMDMyLDMxLjUxNEg1NTcuODUzelxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk02NDQuMzk2LDY2Ljg1OWwxNy4yMjctMzcuMDUxaDI5LjI1OGwtMzIuODgxLDYwLjkwOHYzOS4wMzNoLTI3LjIwN1Y5MS41MzdsLTMyLjg4MS02MS43MjloMjkuMzk1XFxuXHRcdFx0TDY0NC4zOTYsNjYuODU5elxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiNGMTVDNkZcXFwiIGQ9XFxcIk02NDQuMzk2LDU2Ljg1OWwxNy4yMjctMzcuMDUxaDI5LjI1OGwtMzIuODgxLDYwLjkwOHYzOS4wMzNoLTI3LjIwN1Y4MS41MzdsLTMyLjg4MS02MS43MjloMjkuMzk1XFxuXHRcdFx0TDY0NC4zOTYsNTYuODU5elxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk03MDEuNjgxLDEyOS43NVYyOS44MDloMjcuMDAydjc4LjEzNWgzOC40ODZ2MjEuODA3SDcwMS42ODF6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzQzQkZCNFxcXCIgZD1cXFwiTTcwMS42ODEsMTE5Ljc1VjE5LjgwOWgyNy4wMDJ2NzguMTM1aDM4LjQ4NnYyMS44MDdINzAxLjY4MXpcXFwiLz5cXG5cdDwvZz5cXG48L2c+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNODc2LjY4MSw3OS42NDNjMCwxNi44MTYtNC4xMjUsMjkuNi0xMi4zNzMsMzguMzVjLTguMjQ5LDguNzUtMjAuMzI2LDEzLjEyNS0zNi4yMywxMy4xMjVcXG5cdFx0XHRjLTE1LjY3OCwwLTI3LjY5Ny00LjM5Ny0zNi4wNi0xMy4xOTNjLTguMzYzLTguNzk1LTEyLjU0NC0yMS42MDItMTIuNTQ0LTM4LjQxOGMwLTE2LjYzNCw0LjE1OC0yOS4zMzcsMTIuNDc2LTM4LjExXFxuXHRcdFx0YzguMzE2LTguNzcyLDIwLjQwNS0xMy4xNTksMzYuMjY1LTEzLjE1OWMxNS45MDQsMCwyNy45NTksNC4zNTMsMzYuMTYyLDEzLjA1N0M4NzIuNTc5LDQ5Ljk5OCw4NzYuNjgxLDYyLjc4MSw4NzYuNjgxLDc5LjY0M3pcXG5cdFx0XHQgTTgwNy45MTEsNzkuNjQzYzAsMTkuMzIzLDYuNzIyLDI4Ljk4NCwyMC4xNjYsMjguOTg0YzYuODM2LDAsMTEuOTA1LTIuMzQ3LDE1LjIxLTcuMDQxYzMuMzA0LTQuNjkzLDQuOTU2LTEyLjAwOCw0Ljk1Ni0yMS45NDNcXG5cdFx0XHRjMC05Ljk4LTEuNjc1LTE3LjM1Mi01LjAyNC0yMi4xMTRjLTMuMzUtNC43NjItOC4zNTItNy4xNDQtMTUuMDA1LTcuMTQ0QzgxNC42NzksNTAuMzg1LDgwNy45MTEsNjAuMTM4LDgwNy45MTEsNzkuNjQzelxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiNFRUVCNUZcXFwiIGQ9XFxcIk04NzYuNjgxLDY5LjY0M2MwLDE2LjgxNi00LjEyNSwyOS42LTEyLjM3MywzOC4zNWMtOC4yNDksOC43NS0yMC4zMjYsMTMuMTI1LTM2LjIzLDEzLjEyNVxcblx0XHRcdGMtMTUuNjc4LDAtMjcuNjk3LTQuMzk3LTM2LjA2LTEzLjE5M2MtOC4zNjMtOC43OTUtMTIuNTQ0LTIxLjYwMi0xMi41NDQtMzguNDE4YzAtMTYuNjM0LDQuMTU4LTI5LjMzNywxMi40NzYtMzguMTFcXG5cdFx0XHRjOC4zMTYtOC43NzIsMjAuNDA1LTEzLjE1OSwzNi4yNjUtMTMuMTU5YzE1LjkwNCwwLDI3Ljk1OSw0LjM1MywzNi4xNjIsMTMuMDU3Qzg3Mi41NzksMzkuOTk4LDg3Ni42ODEsNTIuNzgxLDg3Ni42ODEsNjkuNjQzelxcblx0XHRcdCBNODA3LjkxMSw2OS42NDNjMCwxOS4zMjMsNi43MjIsMjguOTg0LDIwLjE2NiwyOC45ODRjNi44MzYsMCwxMS45MDUtMi4zNDcsMTUuMjEtNy4wNDFjMy4zMDQtNC42OTMsNC45NTYtMTIuMDA4LDQuOTU2LTIxLjk0M1xcblx0XHRcdGMwLTkuOTgtMS42NzUtMTcuMzUyLTUuMDI0LTIyLjExNGMtMy4zNS00Ljc2Mi04LjM1Mi03LjE0NC0xNS4wMDUtNy4xNDRDODE0LjY3OSw0MC4zODUsODA3LjkxMSw1MC4xMzgsODA3LjkxMSw2OS42NDN6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTkyMS43MjksOTMuMzgzdjM2LjM2N2gtMjcuMDAyVjI5LjgwOWgzMi43NDRjMjcuMTYxLDAsNDAuNzQyLDkuODQ0LDQwLjc0MiwyOS41MzFcXG5cdFx0XHRjMCwxMS41NzYtNS42NTEsMjAuNTMxLTE2Ljk1MywyNi44NjVsMjkuMTIxLDQzLjU0NWgtMzAuNjI1bC0yMS4xOTEtMzYuMzY3SDkyMS43Mjl6IE05MjEuNzI5LDczLjA4aDUuMDU5XFxuXHRcdFx0YzkuNDM0LDAsMTQuMTUtNC4xNywxNC4xNS0xMi41MWMwLTYuODgxLTQuNjI2LTEwLjMyMi0xMy44NzctMTAuMzIyaC01LjMzMlY3My4wOHpcXFwiLz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjRjE1QzZGXFxcIiBkPVxcXCJNOTIxLjcyOSw4My4zODN2MzYuMzY3aC0yNy4wMDJWMTkuODA5aDMyLjc0NGMyNy4xNjEsMCw0MC43NDIsOS44NDQsNDAuNzQyLDI5LjUzMVxcblx0XHRcdGMwLDExLjU3Ni01LjY1MSwyMC41MzEtMTYuOTUzLDI2Ljg2NWwyOS4xMjEsNDMuNTQ1aC0zMC42MjVsLTIxLjE5MS0zNi4zNjdIOTIxLjcyOXogTTkyMS43MjksNjMuMDhoNS4wNTlcXG5cdFx0XHRjOS40MzQsMCwxNC4xNS00LjE3LDE0LjE1LTEyLjUxYzAtNi44ODEtNC42MjYtMTAuMzIyLTEzLjg3Ny0xMC4zMjJoLTUuMzMyVjYzLjA4elxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48L3N2Zz5cXG5cXG48ZGl2IGNsYXNzPVxcXCJwYWdlLWljb25zLXdyYXBwZXJcXFwiPlxcblxcblxcblx0PGRpdiBjbGFzcz1cXFwicGFnZS1pY29uLXdyYXBwZXJcXFwiPlxcblx0XHQ8YSBocmVmPVxcXCIjL3Byb2plY3RzXFxcIiBjbGFzcz1cXFwicHJvamVjdHNcXFwiPlxcblx0XHRcdDxpbWcgY2xhc3M9XFxcInBhZ2UtaWNvblxcXCIgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzLWNvZGUucG5nXFxcIj5cXG5cdFx0XHQ8aDQ+cHJvamVjdHM8L2g0Plxcblx0XHQ8L2E+XFxuXHQ8L2Rpdj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcInBhZ2UtaWNvbi13cmFwcGVyXFxcIj5cXG5cdFx0PGEgaHJlZj1cXFwiIy9ibG9nXFxcIiBjbGFzcz1cXFwiYmxvZ1xcXCI+XFxuXHRcdFx0PGltZyBjbGFzcz1cXFwicGFnZS1pY29uXFxcIiBzcmM9XFxcImFzc2V0cy9pbWFnZXMvYmxvZy1ib29rLnBuZ1xcXCI+XFxuXHRcdFx0PGg0PmJsb2c8L2g0Plxcblx0XHQ8L2E+XFxuXHQ8L2Rpdj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcInBhZ2UtaWNvbi13cmFwcGVyXFxcIj5cXG5cdFx0PGEgaHJlZj1cXFwiIy9jb250YWN0XFxcIiBjbGFzcz1cXFwiY29udGFjdFxcXCI+XFxuXHRcdFx0PGltZyBjbGFzcz1cXFwicGFnZS1pY29uXFxcIiBzcmM9XFxcImFzc2V0cy9pbWFnZXMvY29udGFjdC1zcGVlY2gtYnViYmxlcy5wbmdcXFwiPlxcblx0XHRcdDxoND5jb250YWN0PC9oND5cXG5cdFx0PC9hPlxcblx0PC9kaXY+XFxuXFxuPC9kaXY+XFxuXFxuPHAgc3R5bGU9XFxcInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiA2MHB4OyBwYWRkaW5nOiAyMHB4OyB3aWR0aDogMTAwJTsgbWFyZ2luOiBhdXRvOyBmb250LXNpemU6IC44NWVtOyBjb2xvcjogI2JiYjtcXFwiPkknbSBzdGlsbCB3b3JraW5nIG9uIHRoaXMgc2l0ZSwgc28gcGxlYXNlIGJlYXIgd2l0aCBtZSE8L3A+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcIm1hc3RlclwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGJ1ZmZlciA9IFwiIDxkaXYgY2xhc3M9XFxcInBhZ2Utd3JhcFxcXCI+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2VsbFxcXCI+XFxuICBcdFx0PGRpdiBjbGFzcz1cXFwibGFuZGluZy1jb250ZW50XFxcIiBpZD1cXFwibGFuZGluZ1xcXCI+XFxuICAgICAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbnRyb0NvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmludHJvQ29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpbnRyb0NvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICBcdFx0PC9kaXY+XFxuICAgIDwvZGl2Plxcblx0PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXdyYXBwZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcblxcbiAgICA8L2Rpdj5cXG4gIFx0PGRpdiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidHJhbnNpdGlvbi1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudCBjb250ZW50LW1haW5cXFwiIGlkPVxcXCJtYWluXFxcIj5cIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5tYWluQ29udGVudCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpbkNvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwibWFpbkNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50IHRyYW5zaXRpb25lclxcXCIgaWQ9XFxcInRyYW5zXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gIFx0PC9kaXY+XFxuXFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wicHJvamVjdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snd2l0aCddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXR0cmlidXRlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcIndpdGhcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lclxcXCI+XFxuXHRcdFx0PGgyIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFx0XHRcXG5cdFx0XHRcdFx0XHRcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2PlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlxcblx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgcGxhY2Vob2xkZXItdmlld1xcXCI+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImgyLXRpdGxlXFxcIj48L2Rpdj5cXG5cdFx0PHVsPjwvdWw+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHQ8aDIgc3R5bGU9XFxcInRleHQtYWxpZ246Y2VudGVyOyBjb2xvcjogIzk5OVxcXCI+TG9hZGluZy4uLjwvaDI+XFxuXFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0PC9kaXY+XFxuXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiXFxuXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdHRyaWJ1dGVzIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg0LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcInVpL2hlYWRlclwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gXCIgaHJlZj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5wcmV2TGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucHJldkxpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwicHJldkxpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiZ28tcHJldlxcXCIgXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiIGNsYXNzPVxcXCJnby1wcmV2IGhpZGVcXFwiXCI7XG4gIH0sXCI1XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm5leHRMaW5rIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uZXh0TGluayA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJuZXh0TGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJnby1uZXh0XFxcIiBcIjtcbn0sXCI3XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCIgY2xhc3M9XFxcImdvLW5leHQgaGlkZVxcXCJcIjtcbiAgfSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIjxkaXYgY2xhc3M9XFxcImxhbmRpbmctZm9vdGVyLWNvbnRlbnRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaWNvbiBtZW51XFxcIj5cXG4gICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tZG93biBmYS0yeCBzaG93LWNvbnRlbnRcXFwiPjwvaT5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250ZW50XFxcIj5cXG4gICAgPGEgXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wcmV2TGluayA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhKSxcImludmVyc2VcIjp0aGlzLnByb2dyYW0oMywgZGF0YSksXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICBidWZmZXIgKz0gXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1sZWZ0XFxcIj48L2k+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvYT5cXG4gICAgXFxuICAgIDxhIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb24gbWVudVxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYmFycyBmYS0yeCBzaG93LWludHJvXFxcIj48L2k+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvYT5cXG4gIFxcbiAgICA8YSBcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5leHRMaW5rIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDUsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg3LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvYT5cXG4gIFxcbjwvZGl2PlxcbjxkaXY+PC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcbiByZXR1cm4gdGhpc1snSlNUJ107XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2Fib3V0Jyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLm5hbWVzcGFjZSApO1x0XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDb2xsZWN0aW9uID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbnMvYmxvZy1wb3N0cy5qcycpO1xudmFyIENvbGxlY3Rpb25WaWV3ID0gcmVxdWlyZSgnLi9jb2xsZWN0aW9uLXZpZXcuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW9uVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdibG9nJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy5jb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24oKTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcdFxuXHRzdHJpbmdUb1JlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSh7YXR0cmlidXRlczogdGhpcy5jb2xsZWN0aW9uLmN1cnJlbnRSZWNvcmQuYXR0cmlidXRlc30pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSk7XG5cblx0XHR2YXIgdmlldyA9IHRoaXMsXG5cdFx0XHRcdGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0XG5cdFx0aWYgKCF0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG5cblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jyk7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLm5hbWVzcGFjZSk7XG5cdFx0XHR0aGlzLmZldGNoUmVuZGVyKG9wdGlvbnMpO1xuXG5cdFx0fSBlbHNlIHtcbiBcblx0XHRcdGlmIChvcHRpb25zLnNsdWcgJiYgY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbGxlY3Rpb24uc2V0Q3VycmVudFJlY29yZCh7c2x1Zzogb3B0aW9ucy5zbHVnfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOnJlZGlyZWN0Jywgdmlldy5kZWZhdWx0Um91dGUoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3RyYW5zaXRpb246cmVuZGVyJywgdGhpcy5zdHJpbmdUb1JlbmRlcigpICk7XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGVsLmh0bWwodGhpcy5zdHJpbmdUb1JlbmRlcigpKTtcdFxuXHRcdFx0fVx0XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jywge2xpbms6IHRoaXMucHJldlJvdXRlKCl9KTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHRoaXMubmV4dFJvdXRlKCl9KTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGZldGNoUmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR2YXIgdmlldyA9IHRoaXMsXG5cdFx0XHRcdGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0aWYgKGZhbHNlKSB7IC8vIHRvIGJlIHNldCB0byBzb21ldGhpbmcgbW9yZSBtZWFuaW5nZnVsIHdoZW4gYW4gYXBpIGlzIGF2YWlsYWJsZVxuXHRcdFx0Y29sbGVjdGlvbi5mZXRjaCh7XG4gIFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG5cblx0XHRcdFx0XHRpZiAob3B0aW9ucy5zbHVnICYmIGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKHtzbHVnOiBvcHRpb25zLnNsdWd9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB2aWV3LnN0cmluZ1RvUmVuZGVyKCkgKTtcdFx0XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmlldy5hZGRTdHVicyh7c3VjY2VzczogZnVuY3Rpb24oKXtcblxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiBjb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKHtzbHVnOiBvcHRpb25zLnNsdWd9KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3RyYW5zaXRpb246cmVuZGVyJywgdmlldy5zdHJpbmdUb1JlbmRlcigpICk7XHRcblxuXHRcdFx0XHRcdH19KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbGxlY3Rpb24uYWRkU3R1YnMoe3N1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG5cblx0XHRcdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiBjb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb2xsZWN0aW9uLnNldEN1cnJlbnRSZWNvcmQoe3NsdWc6IG9wdGlvbnMuc2x1Z30pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbGxlY3Rpb24uc2V0Q3VycmVudFJlY29yZChjb2xsZWN0aW9uLmZpcnN0KCkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpyZWRpcmVjdCcsIHZpZXcuZGVmYXVsdFJvdXRlKCkpO1xuXG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicsIHtsaW5rOiB2aWV3LnByZXZSb3V0ZSgpfSk7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHZpZXcubmV4dFJvdXRlKCl9KTtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdmlldy5uYW1lc3BhY2UgKTtcblxuXG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd0cmFuc2l0aW9uOnJlbmRlcicsIHZpZXcuc3RyaW5nVG9SZW5kZXIoKSApO1x0XG5cblx0XHRcdH19KTtcblx0XHR9XG5cdH0sXG5cdHNldEN1cnJlbnQ6IGZ1bmN0aW9uKHNsdWcpe1xuXHRcdHRoaXMuY29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKHtzbHVnOnNsdWd9KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRnZXROZXh0TW9kZWw6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbi5nZXROZXh0TW9kZWwoKTtcblx0fSxcblx0Z2V0UHJldk1vZGVsOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb24uZ2V0UHJldk1vZGVsKCk7XG5cdH0sXG5cdG5leHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgbW9kZWwgPSB0aGlzLmNvbGxlY3Rpb24uZ2V0TmV4dE1vZGVsKCk7XG5cdFx0cmV0dXJuIG1vZGVsPyAnIy8nKyB0aGlzLm5hbWVzcGFjZSArJy8nICsgbW9kZWwuZ2V0KCdzbHVnJykgOiBmYWxzZTtcblx0fSxcblx0cHJldlJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2RlbCA9IHRoaXMuY29sbGVjdGlvbi5nZXRQcmV2TW9kZWwoKTtcblx0XHRyZXR1cm4gbW9kZWw/ICcjLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyBtb2RlbC5nZXQoJ3NsdWcnKSA6IGZhbHNlO1xuXHR9LFxuXHRjaGVja1NsdWc6IGZ1bmN0aW9uKHNsdWcpe1xuXHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb24uY2hlY2tTbHVnKHNsdWcpO1xuXHR9LFxuXHRkZWZhdWx0U2x1ZzogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uLmRlZmF1bHRTbHVnKCk7XG5cdH0sXG5cdGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJy8nKyB0aGlzLm5hbWVzcGFjZSArJy8nICsgdGhpcy5kZWZhdWx0U2x1ZygpO1xuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHZhbGlkRW1haWwoc3RyaW5nKSB7XG4gICAgdmFyIHJlID0gL14oW1xcdy1dKyg/OlxcLltcXHctXSspKilAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJC9pO1xuICAgIHJldHVybiByZS50ZXN0KHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0TGFiZWwoZWwpe1xuXHRlbC5jbG9zZXN0KCcuZmllbGQnKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3IoZWwpe1xuXHRlbC5jbG9zZXN0KCcuZmllbGQnKS5hZGRDbGFzcygnZXJyb3InKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdjb250YWN0Jyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5lbWFpbEFkZHJlc3MgPSAnc210X0Bob3RtYWlsLmNvLnVrJztcblxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cblx0XHR0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXHRldmVudHM6IHtcblx0XHQnc3VibWl0IC5jb250YWN0LWZvcm0nIDogJ3N1Ym1pdEZvcm0nLFxuXHRcdCdjbGljayAuc3VibWlzc2lvbi1lcnJvciAuZmEtY2xvc2UnOiAncmVtb3ZlRm9ybUVycm9yJ1xuXHR9LFxuXHR2YWxpZGF0ZUZvcm06IGZ1bmN0aW9uKCl7XG5cdFx0dmFyICRmb3JtID0gdGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpO1xuXG5cdFx0dmFyICRuYW1lID0gJGZvcm0uZmluZCgnI25hbWUnKTtcblx0XHR2YXIgJGVtYWlsID0gJGZvcm0uZmluZCgnI2VtYWlsJyk7XG4vLyAvLyAkc3ViamVjdCA9ICRmb3JtLmZpbmQoJyNzdWJqZWN0JyksXG5cdFx0dmFyICRtZXNzYWdlID0gJGZvcm0uZmluZCgnI21lc3NhZ2UnKTtcblxuXHRcdHZhciBlcnJvcnMgPSBbXTtcblxuXHRcdGlmICgkbWVzc2FnZS52YWwoKS5sZW5ndGggPiA1KSB7XG5cdFx0XHRyZXNldExhYmVsKCRtZXNzYWdlKTtcblx0XHR9IGVsc2UgaWYgKCRtZXNzYWdlLnZhbCgpLmxlbmd0aCkge1xuXHRcdFx0ZXJyb3JzLnB1c2goeyRlbDogJG1lc3NhZ2UsIG1lc3NhZ2U6ICdub3QgbG9uZyBlbm91Z2gnfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVycm9ycy5wdXNoKHskZWw6ICRtZXNzYWdlLCBtZXNzYWdlOiAnbm8gbWVzc2FnZSBmYWlsJ30pO1xuXHRcdH1cblxuXHRcdGlmICh2YWxpZEVtYWlsKCRlbWFpbC52YWwoKSkpIHtcblx0XHRcdHJlc2V0TGFiZWwoJGVtYWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXJyb3JzLnB1c2goeyRlbDogJGVtYWlsfSk7XG5cdFx0fVxuXG5cdFx0aWYgKCRuYW1lLnZhbCgpLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJlc2V0TGFiZWwoJG5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlcnJvcnMucHVzaCh7JGVsOiAkbmFtZX0pO1xuXHRcdH1cblxuXHRcdGlmIChlcnJvcnMubGVuZ3RoKSB7XG5cdFx0XHQkLmVhY2goZXJyb3JzLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRhZGRFcnJvcih0aGlzLiRlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRzdWJtaXRGb3JtOiBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIHZpZXcgPSB0aGlzO1xuXG5cdFx0aWYgKHRoaXMucGVuZGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdHZhciAkZm9ybSA9IHRoaXMuJGVsLmZpbmQoJy5jb250YWN0LWZvcm0nKTtcblx0XHRcblx0XHRpZiAodGhpcy52YWxpZGF0ZUZvcm0oKSkge1xuXG5cdFx0XHQkZm9ybS5hZGRDbGFzcygncGVuZGluZycpO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuXHRcdFx0dmFyIHNlbmREYXRhID0ge1xuXHRcdFx0XHRfc3ViamVjdDogJ3NwZW50YXlsb3IuY29tJyxcblx0XHRcdFx0bWVzc2FnZTogJGZvcm0uZmluZCgnI21lc3NhZ2UnKS52YWwoKSxcblx0XHRcdFx0ZW1haWw6ICRmb3JtLmZpbmQoJyNlbWFpbCcpLnZhbCgpXG5cdFx0XHR9O1xuXG5cdFx0XHQkLmFqYXgoe1xuXHRcdCAgICB1cmw6ICcvL2Zvcm1zcHJlZS5pby9zcGVuX0Bob3RtYWlsLmNvLnVrJywgXG5cdFx0ICAgIG1ldGhvZDogJ1BPU1QnLFxuXHRcdCAgICBkYXRhOiBzZW5kRGF0YSxcblx0XHQgICAgZGF0YVR5cGU6ICdqc29uJyxcblx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdCAgICBcdHZpZXcuZm9ybVN1Y2Nlc3MocmVzcG9uc2UpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnJvcjogZnVuY3Rpb24oKXtcblx0XHQgICAgXHR2aWV3LmZvcm1FcnJvcigpO1xuXHRcdCAgICB9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFxuXHRcdFxuXHR9LFxuXHRmb3JtU3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdHZhciAkZm9ybSA9IHRoaXMuJGVsLmZpbmQoJy5jb250YWN0LWZvcm0nKTtcblx0XHQkZm9ybS5yZW1vdmVDbGFzcygncGVuZGluZycpO1xuXG5cdFx0aWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdCRmb3JtLmFkZENsYXNzKCdkb25lJykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZvcm1FcnJvcigpO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHR9LFxuXHRmb3JtRXJyb3I6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyICRmb3JtID0gdGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpLmFkZENsYXNzKCdlcnJvcicpO1xuXG5cdFx0JGZvcm0ucmVtb3ZlQ2xhc3MoJ3BlbmRpbmcnKTtcblx0XHR0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblx0fSxcblx0cmVtb3ZlRm9ybUVycm9yOiBmdW5jdGlvbigpe1xuXHRcdHRoaXMuJGVsLmZpbmQoJy5jb250YWN0LWZvcm0nKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcblx0fVxufSk7XG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2ludHJvJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5yZW5kZXIob3B0aW9ucyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlKTtcblxuXHR9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy5qcycpO1xudmFyIGhlYWRlclZpZXcgPSByZXF1aXJlKCcuL3VpL2hlYWRlci5qcycpO1xudmFyIHRyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9wYWdlLXRyYW5zaXRpb25zLmpzJyk7XG52YXIgc2Nyb2xsVHJhY2tlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvc2Nyb2xsLXRyYWNrZXIuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJ2h0bWwnLFxuXHRoZWFkZXI6ICcuaGVhZGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oKXtcblxuXHRcdHZhciBzdGF0ZSA9ICh3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPj0gMSkgPyAnY29udGVudCcgOiAnaW50cm8nO1xuXHRcdHRoaXMucmVuZGVyKHtcblx0XHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRcdGludHJvQ29udGVudDogdGVtcGxhdGVzLmludHJvKClcblx0XHR9KTtcblxuXHRcdHRoaXMudHJhbnNpdGlvbnMgPSBuZXcgdHJhbnNpdGlvbnMoe1xuXHRcdFx0Y29udGFpbmVyOiAnLnBhZ2Utd3JhcCAubWFpbiAudHJhbnNpdGlvbi1jb250YWluZXInLFxuXHRcdFx0bWFpbjogJy5jb250ZW50LW1haW4nLFxuXHRcdFx0dHJhbnNpdGlvbmVyOiAnLnRyYW5zaXRpb25lcidcblx0XHR9KTtcblxuXHRcdC8vIHZhciB2aWV3ID0gdGhpcztcblx0XHQkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYgKGUud2hpY2ggPT09IDM5KSB7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOm5leHRDb250ZW50Jyk7XG5cdFx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT09IDM3KSB7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnByZXZDb250ZW50Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKHRoaXMuaGVhZGVyKTtcblx0XHR0aGlzLmhlYWRlclZpZXcgPSBuZXcgaGVhZGVyVmlldyh7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnZ29Ub0N1cnJlbnRDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLXByZXYnOiAncHJldkNvbnRlbnQnLFxuXHRcdCdjbGljayAuZ28tbmV4dCc6ICduZXh0Q29udGVudCdcblx0XHQvLyAnY2xpY2sgLnNob3ctaW50cm8nOiAnc2hvd0ludHJvJ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdCQoJ2JvZHknKS5odG1sKHRlbXBsYXRlcy5tYXN0ZXIob3B0aW9ucykpO1xuXG4gIFx0c2Nyb2xsVHJhY2tlci5pbml0aWFsaXplKCk7XG4gIH0sXG4gIHNob3dDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnaW50cm8nKTtcblx0fSxcblx0c2hvd0ludHJvOiBmdW5jdGlvbigpIHtcblx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2ludHJvJykucmVtb3ZlQ2xhc3MoJ2NvbnRlbnQnKTtcblx0fSxcblx0c2V0TmFtZXNwYWNlOiBmdW5jdGlvbihuYW1lc3BhY2UpIHtcdFxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gJC50cmltKFxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24oYykgeyBcblx0XHRcdFx0cmV0dXJuIGMubGFzdEluZGV4T2YoJ3BhZ2UtJywgMCkgIT09IDA7IFxuXHRcdFx0fSkuam9pbignICcpICsgJyBwYWdlLScgK25hbWVzcGFjZSApO1xuXHR9LFxuXHRzd2lwZXJVcDogZnVuY3Rpb24oKXtcblx0XHRpZiAoIXRoaXMuc3dpcGVyVXBSZWFkeSgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRoaXMuc2hvd0ludHJvKCk7XG5cdH0sXG5cdHN3aXBlckRvd246IGZ1bmN0aW9uKCl7XG5cdFx0aWYgKCF0aGlzLnN3aXBlckRvd25SZWFkeSgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRoaXMuc2hvd0NvbnRlbnQoKTtcblx0fSxcblx0c3dpcGVyTGVmdDogZnVuY3Rpb24oKXtcblx0XHRpZiAoIXRoaXMuc3dpcGVyTGVmdFJlYWR5KCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dGhpcy5uZXh0Q29udGVudCgpO1xuXHR9LFxuXHRzd2lwZXJSaWdodDogZnVuY3Rpb24oKXtcblx0XHRpZiAoIXRoaXMuc3dpcGVyUmlnaHRSZWFkeSgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRoaXMucHJldkNvbnRlbnQoKTtcblx0fSxcblx0c3dpcGVyVXBSZWFkeTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0Ly8gcmV0dXJuICQoJ2JvZHkuY29udGVudCAuY29udGVudC1tYWluJykuc2Nyb2xsVG9wKCkgPD0gMDtcblx0fSxcblx0c3dpcGVyRG93blJlYWR5OiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAkKCdib2R5LmludHJvJykubGVuZ3RoID49IDE7XG5cdH0sXG5cdHN3aXBlckxlZnRSZWFkeTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0c3dpcGVyUmlnaHRSZWFkeTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0bmV4dENvbnRlbnQ6IGZ1bmN0aW9uKGUpe1xuXHRcdGlmIChlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuXHRcdGlmICh0aGlzLnRyYW5zaXRpb25zLmFuaW1hdGluZykge3JldHVybiBmYWxzZTt9XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5kaXJlY3Rpb24gPSAnbmV4dCc7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpuZXh0Q29udGVudCcpO1xuXHR9LFxuXHRwcmV2Q29udGVudDogZnVuY3Rpb24oZSl7XG5cdFx0aWYgKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG5cdFx0aWYgKHRoaXMudHJhbnNpdGlvbnMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlO31cblx0XHR0aGlzLnRyYW5zaXRpb25zLmRpcmVjdGlvbiA9ICdwcmV2Jztcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOnByZXZDb250ZW50Jyk7XG5cdH0sXG4gIGdvVG9DdXJyZW50Q29udGVudDogZnVuY3Rpb24oKXtcbiAgXHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOmdvVG9DdXJyZW50Q29udGVudCcpO1xuICB9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cblx0XHR2YXIgdHJhbnNpdGlvbnMgPSB0aGlzLnRyYW5zaXRpb25zO1xuXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRlbnQpe3RyYW5zaXRpb25zLnJlbmRlcihjb250ZW50KTt9XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnNob3dDb250ZW50JywgdGhpcy5zaG93Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93SW50cm8nLCB0aGlzLnNob3dJbnRybyk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMuc2V0TmFtZXNwYWNlKTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3BhZ2U6bmV4dENvbnRlbnQnLCB0aGlzLm5leHRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3BhZ2U6cHJldkNvbnRlbnQnLCB0aGlzLnByZXZDb250ZW50KTtcblxuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAnc3dpcGVyOnVwJywgdGhpcy5zd2lwZXJVcCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdzd2lwZXI6ZG93bicsIHRoaXMuc3dpcGVyRG93bik7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdzd2lwZXI6bGVmdCcsIHRoaXMuc3dpcGVyTGVmdCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdzd2lwZXI6cmlnaHQnLCB0aGlzLnN3aXBlclJpZ2h0KTtcblxuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd0cmFuc2l0aW9uOnJlbmRlcicsIHJlbmRlcik7XG5cblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL3Byb2plY3RzLmpzJyk7XG52YXIgQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlKCcuL2NvbGxlY3Rpb24tdmlldy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25WaWV3LmV4dGVuZCh7XHRcblx0bmFtZXNwYWNlOiAncHJvamVjdHMnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmNvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbigpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLnJlbmRlcih7fSk7XG5cdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXHR9LFxuXHRldmVudHM6IHtcblx0XHQnY2xpY2sgLnNob3ctY29udGVudCc6ICdzaG93Q29udGVudCcsXG5cdFx0J2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgc2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKCl7XG4gIFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG4gIH0sXG4gIHNob3dJbnRybzogZnVuY3Rpb24oKXtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0ludHJvJyk7XG4gIH0sXG4gIHVwZGF0ZVVpUHJldjogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFx0dmFyIHByZXYgPSAnLmdvLXByZXYnO1xuICBcdHZhciAkcHJldiA9IHRoaXMuJGVsLmZpbmQocHJldik7XG4gIFx0aWYgKG9wdGlvbnMubGluaykge1xuICBcdFx0JHByZXYucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgb3B0aW9ucy5saW5rKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JHByZXYuYWRkQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgJyMnKTtcbiAgXHR9XG4gIH0sXG4gIHVwZGF0ZVVpTmV4dDogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFx0dmFyIG5leHQgPSAnLmdvLW5leHQnO1xuICBcdHZhciAkbmV4dCA9IHRoaXMuJGVsLmZpbmQobmV4dCk7XG4gIFx0aWYgKG9wdGlvbnMubGluaykge1xuICBcdFx0JG5leHQucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgb3B0aW9ucy5saW5rKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JG5leHQuYWRkQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgJyMnKTtcbiAgXHR9XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnVwZGF0ZVByZXYnLCB0aGlzLnVwZGF0ZVVpUHJldik7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTp1cGRhdGVOZXh0JywgdGhpcy51cGRhdGVVaU5leHQpO1xuXHR9XG59KTsiXX0=
