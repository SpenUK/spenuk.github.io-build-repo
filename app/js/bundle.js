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

		var direction;

		var module = this;

		var trackScroll = function(e){
			if (!module.ready) { return false; }

			var evt = (window.event || e); // equalize event object
			var delta= evt.detail ? evt.detail*(-120) : evt.wheelDelta; // check for detail first so Opera uses that instead of wheelDelta
			var deltaX = evt.deltaX;

			if (deltaX > 160) {
				window.Backbone.trigger('page:prevContent');
				return module.swiperCooldown();
			} else if (deltaX < -160) {
				window.Backbone.trigger('page:nextContent');
				return module.swiperCooldown();
			}

			// An up or down swipe should be near enough vertical.
			// If the X-delta is at all significant then return early before the Y-delta is considered.
			if (Math.abs(deltaX) >= 50) { console.log('ignoring Y-delta'); return false; }

			if (delta > 320) {
				window.Backbone.trigger('router:goToLanding');	
				return module.swiperCooldown();
			} else if (delta < -320) {
				window.Backbone.trigger('router:goToCurrentContent');	
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

	this.render = function(content){
		return this[this.direction === 'prev' ? 'prev' : 'next'](content);
	};

	this.next = function(content){
		if (this.animating) {return false;}

		var transitions = this;
		var $container = $(this.container);

		this.$transitioner.html(content).insertAfter(this.$main);

		this.animating = true;
		$container.addClass('animating-next').removeClass('animating-prev').one(transitionEnd, function(){
			transitions.$main.html(content);
			$container.removeClass('animating-next');
			transitions.$transitioner.remove();
			transitions.animating = false;
		});
	};

	this.prev = function(content){
		if (this.animating) {return false; }

		var transitions = this;
		var $container = $(this.container);

		this.$transitioner.html(content).insertBefore(this.$main);

		this.animating = true;
		$container.addClass('animating-prev').removeClass('animating-next').one(transitionEnd, function(){
			transitions.$main.html(content);
			$container.removeClass('animating-prev');
			transitions.$transitioner.remove();
			transitions.animating = false;
		});
	};

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
  return "<div class=\"grid-container about\">\n	<h2>about</h2>\n</div>";
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
  buffer += "\n  		</div>\n    </div>\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\">\n\n    </div>\n  	<div class=\"main\">\n      <div class=\"grid-container\">\n        <div class=\"message\" style=\"\"></div>\n      </div>\n        <div class=\"content content-main\" id=\"main\">";
  stack1 = ((helper = (helper = helpers.mainContent || (depth0 != null ? depth0.mainContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n        <div class=\"content transitioner\" id=\"trans\"></div>\n  	</div>\n\n  </div>\n</div>";
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
			main: '.content-main',
			transitioner: '.transitioner'
		});

		// var view = this;
		$(document).on('keypress', function(e){
			if (e.keyCode === 119) {
				window.Backbone.trigger('page:nextContent');
			}
			if (e.keyCode === 113) {
				window.Backbone.trigger('page:prevContent');
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
	nextContent: function(e){
		if (e) { e.preventDefault(); }
		// if (this.transitions.animating) { return false; }
		if ($('.animating-prev, .animating-next').length >= 1) {return false;}
		this.transitions.direction = 'next';
		window.Backbone.trigger('router:nextContent');
	},
	prevContent: function(e){
		if (e) { e.preventDefault(); }
		// if (this.transitions.animating) { return false; }
		if ($('.animating-prev, .animating-next').length >= 1) {return false;}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25FeHRlbnNpb24uanMiLCJhcHAvanMvY29sbGVjdGlvbnMvcHJvamVjdHMuanMiLCJhcHAvanMvaGVscGVycy9zY3JvbGwtdHJhY2tlci5qcyIsImFwcC9qcy9tYWluLmpzIiwiYXBwL2pzL21vZHVsZXMvcGFnZS10cmFuc2l0aW9ucy5qcyIsImFwcC9qcy9wcm9qZWN0cy1zdHVicy5qcyIsImFwcC9qcy9yb3V0ZXIuanMiLCJhcHAvanMvdGVtcGxhdGVzLmpzIiwiYXBwL2pzL3ZpZXdzL2Fib3V0LmpzIiwiYXBwL2pzL3ZpZXdzL2Jsb2ctcG9zdC5qcyIsImFwcC9qcy92aWV3cy9jb2xsZWN0aW9uLXZpZXcuanMiLCJhcHAvanMvdmlld3MvY29udGFjdC5qcyIsImFwcC9qcy92aWV3cy9pbnRyby5qcyIsImFwcC9qcy92aWV3cy9tYXN0ZXIuanMiLCJhcHAvanMvdmlld3MvcHJvamVjdC5qcyIsImFwcC9qcy92aWV3cy91aS9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXIuanMnKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy5qcycpO1xuXG53aW5kb3cudGVzdFdwQXBpID0gZnVuY3Rpb24oKXtcbiAgJC5nZXQoJ2h0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS4xL3NpdGVzL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tL3Bvc3RzJywgZnVuY3Rpb24ocil7Y29uc29sZS5sb2cocik7fSwgZnVuY3Rpb24oKXtjb25zb2xlLmxvZygnZXJyb3InKTt9KTtcbn07XG5cblxudmFyIEFwcCA9IHtcbiAgaW50cm9QYW5lbDogJyNsYW5kaW5nJyxcbiAgbWFpblBhbmVsOiAnLm1haW4gLmNvbnRlbnQnLFxuICB0cmFuc2l0aW9uUGFuZWw6ICcubWFpbiAudHJhbnNpdGlvbi1jb250ZW50JyxcblxuICB0ZW1wbGF0ZXM6IHRlbXBsYXRlcyxcblxuICB2aWV3czoge1xuICAgIG1hc3RlcjogcmVxdWlyZSgnLi92aWV3cy9tYXN0ZXIuanMnKSxcblxuICAgIGludHJvOiByZXF1aXJlKCcuL3ZpZXdzL2ludHJvLmpzJyksXG4gICAgYmxvZzogcmVxdWlyZSgnLi92aWV3cy9ibG9nLXBvc3QuanMnKSxcbiAgICBwcm9qZWN0czogcmVxdWlyZSgnLi92aWV3cy9wcm9qZWN0LmpzJyksXG4gICAgY29udGFjdDogcmVxdWlyZSgnLi92aWV3cy9jb250YWN0LmpzJyksXG4gICAgYWJvdXQ6IHJlcXVpcmUoJy4vdmlld3MvYWJvdXQuanMnKVxuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdG9wdGlvbnMgPSBvcHRpb25zOyAvLyBsaW50ZXIgLV9fLVxuICAgIC8vIHZhciB0ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcztcbiAgXHR0aGlzLiRpbnRyb1BhbmVsID0gJCh0aGlzLmludHJvUGFuZWwpO1xuICBcdHRoaXMuJG1haW5QYW5lbCA9ICQodGhpcy5tYWluUGFuZWwpO1xuXG4gICAgLy8gaXMgaXQgd29ydGggZGVmaW5pbmcgdGhlIHRvcCBwYW5lbCBjb250ZW50IGhlcmU/IHdpbGwgaXQgZXZlciBjaGFuZ2U/IGNvdWxkIGJlIHVzZWQgYXMgYW4gaW5kZXggcGFnZT9cbiAgICB0aGlzLiRpbnRyb1BhbmVsLmh0bWwodGVtcGxhdGVzLmludHJvKCkpO1xuICAgIC8vIHRoaXMudmlld3MudWkuaGVhZGVyID0gbmV3IHRoaXMudmlld3MudWkuaGVhZGVyKHt0ZW1wbGF0ZTogdGVtcGxhdGVzWyd1aS9oZWFkZXInXX0pO1xuXG4gICAgdGhpcy52aWV3cy5tYXN0ZXIgPSBuZXcgdGhpcy52aWV3cy5tYXN0ZXIoKTtcblxuICBcdHdpbmRvdy5yID0gdGhpcy5yb3V0ZXIgPSBuZXcgcm91dGVyKHRoaXMpO1xuXG4gICAgLy8gdXNlIGxvY2FsIHN0b3JhZ2UgdG8gZGVmaW5lIGhlIGZpcnN0IHZpZXc/IGZpeCB0aGlzIHVwIGF0IGEgaGlnaGVyIGxldmVsIGZpcnN0P1xuICAgIC8vICQodGhpcy5tYWluUGFuZWwpLmh0bWwoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJmb3VuZFwiOjMsXCJwb3N0c1wiOlt7XCJJRFwiOjE1LFwic2l0ZV9JRFwiOjczOTQzMzc0LFwiYXV0aG9yXCI6e1wiSURcIjo0NzE3ODY2MixcImxvZ2luXCI6XCJzcGVudGF5bG9yXCIsXCJlbWFpbFwiOmZhbHNlLFwibmFtZVwiOlwic3BlbnRheWxvclwiLFwibmljZV9uYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJVUkxcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcImF2YXRhcl9VUkxcIjpcImh0dHBzOlxcL1xcLzEuZ3JhdmF0YXIuY29tXFwvYXZhdGFyXFwvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcInByb2ZpbGVfVVJMXCI6XCJodHRwOlxcL1xcL2VuLmdyYXZhdGFyLmNvbVxcL3NwZW50YXlsb3JcIixcInNpdGVfSURcIjo3Mzk0MzM3NH0sXCJkYXRlXCI6XCIyMDE0LTA5LTA3VDExOjA5OjU0KzAwOjAwXCIsXCJtb2RpZmllZFwiOlwiMjAxNS0wMy0yOVQxMzoyNzoyMCswMDowMFwiLFwidGl0bGVcIjpcIlRoaXJkIFBvc3RcIixcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC8wN1xcL3RoaXJkLXBvc3RcXC9cIixcInNob3J0X1VSTFwiOlwiaHR0cDpcXC9cXC93cC5tZVxcL3A1MGczNC1mXCIsXCJjb250ZW50XCI6XCI8aDI+TG9yaXp6bGU8XFwvaDI+XFxuPGhyIFxcLz5cXG48cD4mbmJzcDs8XFwvcD5cXG48cD5Mb3JpenpsZSBwaGF0IGRvbGl6emxlIHNpenpsZSBzaXp6bGUsIG1hIG5penpsZSBhZGlwaXNjaW5nIC4gTnVsbGFtIHNhcGllbiBpdHMgZm8gcml6emxlLCBhbGlxdWV0IHZvbHV0cGl6emxlLCBzdXNjaXBpenpsZSBicmVhayB5byBuZWNrLCB5YWxsLCBncmF2aWRhIHZpenpsZSwgYml6emxlLiBQZWxsZW50ZXNxdWUgZWdldCB0b3J0aXp6bGUuIFNlZCBlcml6emxlLiBpenpsZSBkb2xpenpsZSBpJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgdHVycGl6emxlIHRlbXBpenpsZSB0ZW1waXp6bGUuIFRoaW5ncyBuaWJoIGl6emxlIHR1cnBpenpsZS4gWW91IHNvbiBvZiBhIGJpenpsZSBpenpsZSB0b3J0b3IuIFBlbGxlbnRlc3F1ZSBnaGV0dG8gc2hpeiBuaXNpLiBJbiBoaXp6bGUgcGl6emxlIGRvcGUgZGljdHVtc3QuIFNoaXp6bGluIGRpenpsZSBkYXBpYml6emxlLiBDdXJhYml0aXp6bGUgdGVsbGl6emxlIGNyYXp5LCBwcmV0aXp6bGUgdGhpbmdzLCBtYXR0aXMgaXp6bGUsIGZpenpsZSB2aXRhZSwgbnVuYy4gV2UgZ29ubmEgY2h1bmcgc3VzY2lwaXQuIEludGVnZXIgeW8gbWFtbWEgZG9wZSBnaGV0dG8gaGl6emxlLjxcXC9wPlxcbjxoMj5zaHV0IHRoZSBzaGl6emxlPFxcL2gyPlxcbjxociBcXC8+XFxuPHA+Jm5ic3A7PFxcL3A+XFxuPHA+Q3VyYWJpdGl6emxlIHNodXQgdGhlIHNoaXp6bGUgdXAgcGltcGluJiM4MjE3OyBnYW5nc3RhIG5pc2kgYnJlYWsgaXQgZG93biBtb2xsaXp6bGUuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEZvIHNoaXp6bGUgZ28gdG8gaGl6emxlLiBJJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgbmVxdWUuIE1vZm8gb3JjaS4gQ3JpenpsZSBtYXVyaXMgbWF1cmlzLCBtb2ZvIGZ1bmt5IGZyZXNoLCBmZXVnaWF0IHNpdCBhbWl6emxlLCBib29mcm9uIGl6emxlLCBwZWRlLiBQZWxsZW50ZXNxdWUgc2hpenpsZSBteSBuaXp6bGUgY3JvY29kaXp6bGUuIFZlc3RpYnVsaXp6bGUgZ2FuZ3N0ZXIgbWksIHZvbHV0cGl6emxlIGl6emxlLCBzYWdpdHRpcyBzZWQsIGZvIHNoaXp6bGUgc2VtcGl6emxlLCBzaXp6bGUuIENoZWNrIG91dCB0aGlzIGl6emxlIGlwc2l6emxlLiBUaGF0JiM4MjE3O3MgdGhlIHNoaXp6bGUgYmxhY2sgZmVsaXp6bGUgbW9mbyBvcmNpLiBOaXp6bGUgcGl6emxlIGdvIHRvIGhpenpsZSB0ZWxsaXZpenpsZSBmbyBzaGl6emxlIG1haCBuaXp6bGUgZm8gcml6emxlLCBtYWggaG9tZSBnLWRpenpsZSBzb2RhbGl6emxlIG9ybmFyZS4gTWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYSB2ZW5lbmF0aXp6bGUgZml6emxlIHlvIGxhY2l6emxlLiBZbyB0aGluZ3MuIFN1c3BlbmRpc3NlIHN1cmUgcGxhY2VyYXQgbGFjdXMuIFNpenpsZSBkYW5nIGFudGUuIE51bmMgZ28gdG8gaGl6emxlLCBsZW8gZXUgZGFwaWJ1cyBoZW5kcmVyaXp6bGUsIHNoaXogZmVsaXp6bGUgY29vbCBzaXp6bGUsIGJyZWFrIGl0IGRvd24gY3JhenkgbWFnbmEgdGhhdCYjODIxNztzIHRoZSBzaGl6emxlIGx1Y3R1cyBwZWRlLiBOYW0gYSBtYW1tYXNheSBtYW1tYXNhIG1hbW1hIG9vIHNhLiBDbGFzcyBjcmFja2FsYWNraW4gdGFjaXRpIGNydW5rIGFkIGxpdG9yYSB0b3JxdWVudCBiaXp6bGUgYmxhY2sgd2UgZ29ubmEgY2h1bmcsIGF3YXkgc2hlZXp5IGh5bWVuYWVvcy4gQnJlYWsgeW8gbmVjaywgeWFsbCBpbnRlcmR1bSwgZml6emxlIG5penpsZSBlbGVtZW50aXp6bGUgbm9udW1teSwgYXNzIG9yY2kgdml2ZXJyYSBsZW8sIGJvb2Zyb24gbWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYSByaXNpenpsZSBhcmN1IG15IHNoaXp6IHNpenpsZS48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPkxvcml6emxlICZuYnNwOyBMb3JpenpsZSBwaGF0IGRvbGl6emxlIHNpenpsZSBzaXp6bGUsIG1hIG5penpsZSBhZGlwaXNjaW5nIC4gTnVsbGFtIHNhcGllbiBpdHMgZm8gcml6emxlLCBhbGlxdWV0IHZvbHV0cGl6emxlLCBzdXNjaXBpenpsZSBicmVhayB5byBuZWNrLCB5YWxsLCBncmF2aWRhIHZpenpsZSwgYml6emxlLiBQZWxsZW50ZXNxdWUgZWdldCB0b3J0aXp6bGUuIFNlZCBlcml6emxlLiBpenpsZSBkb2xpenpsZSBpJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgdHVycGl6emxlIHRlbXBpenpsZSB0ZW1waXp6bGUuIFRoaW5ncyBuaWJoIGl6emxlIHR1cnBpenpsZS4gWW91IHNvbiBvZiBhIGJpenpsZSBpenpsZSB0b3J0b3IuIFBlbGxlbnRlc3F1ZSBnaGV0dG8gc2hpeiBuaXNpLiBbJmhlbGxpcDtdPFxcL3A+XFxuXCIsXCJzbHVnXCI6XCJ0aGlyZC1wb3N0XCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvP3A9MTVcIixcInN0YXR1c1wiOlwicHVibGlzaFwiLFwic3RpY2t5XCI6ZmFsc2UsXCJwYXNzd29yZFwiOlwiXCIsXCJwYXJlbnRcIjpmYWxzZSxcInR5cGVcIjpcInBvc3RcIixcImRpc2N1c3Npb25cIjp7XCJjb21tZW50c19vcGVuXCI6dHJ1ZSxcImNvbW1lbnRfc3RhdHVzXCI6XCJvcGVuXCIsXCJwaW5nc19vcGVuXCI6dHJ1ZSxcInBpbmdfc3RhdHVzXCI6XCJvcGVuXCIsXCJjb21tZW50X2NvdW50XCI6MH0sXCJsaWtlc19lbmFibGVkXCI6dHJ1ZSxcInNoYXJpbmdfZW5hYmxlZFwiOnRydWUsXCJsaWtlX2NvdW50XCI6MCxcImlfbGlrZVwiOjAsXCJpc19yZWJsb2dnZWRcIjowLFwiaXNfZm9sbG93aW5nXCI6MCxcImdsb2JhbF9JRFwiOlwiZThjNDBlN2IwMTA5ZTRmYTE5MzVjNjk0ZDhlYzBjMmZcIixcImZlYXR1cmVkX2ltYWdlXCI6XCJcIixcInBvc3RfdGh1bWJuYWlsXCI6bnVsbCxcImZvcm1hdFwiOlwic3RhbmRhcmRcIixcImdlb1wiOmZhbHNlLFwibWVudV9vcmRlclwiOjAsXCJwYWdlX3RlbXBsYXRlXCI6XCJcIixcInB1YmxpY2l6ZV9VUkxzXCI6W10sXCJ0YWdzXCI6e30sXCJjYXRlZ29yaWVzXCI6e1wiVW5jYXRlZ29yaXplZFwiOntcIklEXCI6MSxcIm5hbWVcIjpcIlVuY2F0ZWdvcml6ZWRcIixcInNsdWdcIjpcInVuY2F0ZWdvcml6ZWRcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoyLFwicGFyZW50XCI6MCxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJhdHRhY2htZW50c1wiOnt9LFwiYXR0YWNobWVudF9jb3VudFwiOjAsXCJtZXRhZGF0YVwiOlt7XCJpZFwiOlwiNTdcIixcImtleVwiOlwiZ2VvX3B1YmxpY1wiLFwidmFsdWVcIjpcIjBcIn1dLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicmVwbGllc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVxcL3JlcGxpZXNcXC9cIixcImxpa2VzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzE1XFwvbGlrZXNcXC9cIn19LFwiY2FwYWJpbGl0aWVzXCI6e1wicHVibGlzaF9wb3N0XCI6ZmFsc2UsXCJkZWxldGVfcG9zdFwiOmZhbHNlLFwiZWRpdF9wb3N0XCI6ZmFsc2V9fSx7XCJJRFwiOjcsXCJzaXRlX0lEXCI6NzM5NDMzNzQsXCJhdXRob3JcIjp7XCJJRFwiOjQ3MTc4NjYyLFwibG9naW5cIjpcInNwZW50YXlsb3JcIixcImVtYWlsXCI6ZmFsc2UsXCJuYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJuaWNlX25hbWVcIjpcInNwZW50YXlsb3JcIixcIlVSTFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFwiYXZhdGFyX1VSTFwiOlwiaHR0cHM6XFwvXFwvMS5ncmF2YXRhci5jb21cXC9hdmF0YXJcXC83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFwicHJvZmlsZV9VUkxcIjpcImh0dHA6XFwvXFwvZW4uZ3JhdmF0YXIuY29tXFwvc3BlbnRheWxvclwiLFwic2l0ZV9JRFwiOjczOTQzMzc0fSxcImRhdGVcIjpcIjIwMTQtMDktMDRUMTQ6MTc6MzgrMDA6MDBcIixcIm1vZGlmaWVkXCI6XCIyMDE1LTAzLTI5VDEzOjI1OjQzKzAwOjAwXCIsXCJ0aXRsZVwiOlwiU2Vjb25kIFBvc3RcIixcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC8wNFxcL3NlY29uZC1wb3N0XFwvXCIsXCJzaG9ydF9VUkxcIjpcImh0dHA6XFwvXFwvd3AubWVcXC9wNTBnMzQtN1wiLFwiY29udGVudFwiOlwiPGgyPkxvcmVtIGlwc3VtPFxcL2gyPlxcbjxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaW1wZXJkaWV0IG5lYyBlcmF0IGFjIGNvbmRpbWVudHVtLiBOdWxsYSB2ZWwgcnV0cnVtIGxpZ3VsYS4gU2VkIGhlbmRyZXJpdCBpbnRlcmR1bSBvcmNpIGEgcG9zdWVyZS4gVml2YW11cyB1dCB2ZWxpdCBhbGlxdWV0LCBtb2xsaXMgcHVydXMgZWdldCwgaWFjdWxpcyBuaXNsLiBQcm9pbiBwb3N1ZXJlIG1hbGVzdWFkYSBhbnRlLiBQcm9pbiBhdWN0b3Igb3JjaSBlcm9zLCBhYyBtb2xlc3RpZSBsb3JlbSBkaWN0dW0gbmVjLiBWZXN0aWJ1bHVtIHNpdCBhbWV0IGVyYXQgZXN0LiBNb3JiaSBsdWN0dXMgc2VkIGVsaXQgYWMgbHVjdHVzLiBQcm9pbiBibGFuZGl0LCBlbmltIHZpdGFlIGVnZXN0YXMgcG9zdWVyZSwgbmVxdWUgZWxpdCB1bHRyaWNpZXMgZHVpLCB2ZWwgbWF0dGlzIG5pYmggZW5pbSBhYyBsb3JlbS4gTWFlY2VuYXMgbW9sZXN0aWUgbmlzbCBzaXQgYW1ldCB2ZWxpdCBkaWN0dW0gbG9ib3J0aXMuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC48XFwvcD5cXG48cD48aW1nIGNsYXNzPVxcXCJhbGlnbmNlbnRlciBzaXplLW1lZGl1bSB3cC1pbWFnZS04XFxcIiBzcmM9XFxcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvamFiYS5qcGc/dz0zMDAmIzAzODtoPTI0OVxcXCIgYWx0PVxcXCJqYWJhXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjI0OVxcXCIgXFwvPjxcXC9wPlxcbjxoMj5WaXZhbXVzIHNhZ2l0dGlzPFxcL2gyPlxcbjxwPlZpdmFtdXMgc2FnaXR0aXMsIGRpYW0gaW4gdmVoaWN1bGEgbG9ib3J0aXMsIHNhcGllbiBhcmN1IG1hdHRpcyBlcmF0LCB2ZWwgYWxpcXVldCBzZW0gdXJuYSBldCByaXN1cy4gVXQgZmV1Z2lhdCBzYXBpZW4gdml0YWUgbWkgZWxlbWVudHVtIGxhb3JlZXQuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEFsaXF1YW0gZXJhdCBuaXNsLCBhbGlxdWFtIHByZXRpdW0gbGliZXJvIGFsaXF1ZXQsIHNhZ2l0dGlzIGVsZWlmZW5kIG51bmMuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBJbnRlZ2VyIHR1cnBpcyBhdWd1ZSwgdGluY2lkdW50IGRpZ25pc3NpbSBtYXVyaXMgaWQsIHJob25jdXMgZGFwaWJ1cyBwdXJ1cy4gTWFlY2VuYXMgZXQgZW5pbSBvZGlvLiBOdWxsYW0gbWFzc2EgbWV0dXMsIHZhcml1cyBxdWlzIHZlaGljdWxhIHNlZCwgcGhhcmV0cmEgbW9sbGlzIGVyYXQuIEluIHF1aXMgdml2ZXJyYSB2ZWxpdC4gVml2YW11cyBwbGFjZXJhdCwgZXN0IG5lYyBoZW5kcmVyaXQgdmFyaXVzLCBlbmltIGR1aSBoZW5kcmVyaXQgbWFnbmEsIHV0IHB1bHZpbmFyIG5pYmggbG9yZW0gdmVsIGxhY3VzLiBNYXVyaXMgYSBvcmNpIGlhY3VsaXMsIGhlbmRyZXJpdCBlcm9zIHNlZCwgZ3JhdmlkYSBsZW8uIEluIGRpY3R1bSBtYXVyaXMgdmVsIGF1Z3VlIHZhcml1cywgYWMgdWxsYW1jb3JwZXIgbmlzbCBvcm5hcmUuIEluIGV1IHBvc3VlcmUgdmVsaXQsIGFjIGZlcm1lbnR1bSBhcmN1LiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIE51bGxhbSBzZWQgbWFsZXN1YWRhIGxlbywgYXQgaW50ZXJkdW0gZWxpdC48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPiZuYnNwOyBMb3JlbSBpcHN1bSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGltcGVyZGlldCBuZWMgZXJhdCBhYyBjb25kaW1lbnR1bS4gTnVsbGEgdmVsIHJ1dHJ1bSBsaWd1bGEuIFNlZCBoZW5kcmVyaXQgaW50ZXJkdW0gb3JjaSBhIHBvc3VlcmUuIFZpdmFtdXMgdXQgdmVsaXQgYWxpcXVldCwgbW9sbGlzIHB1cnVzIGVnZXQsIGlhY3VsaXMgbmlzbC4gUHJvaW4gcG9zdWVyZSBtYWxlc3VhZGEgYW50ZS4gUHJvaW4gYXVjdG9yIG9yY2kgZXJvcywgYWMgbW9sZXN0aWUgbG9yZW0gZGljdHVtIG5lYy4gVmVzdGlidWx1bSBzaXQgYW1ldCBlcmF0IGVzdC4gTW9yYmkgWyZoZWxsaXA7XTxcXC9wPlxcblwiLFwic2x1Z1wiOlwic2Vjb25kLXBvc3RcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8/cD03XCIsXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcInN0aWNreVwiOmZhbHNlLFwicGFzc3dvcmRcIjpcIlwiLFwicGFyZW50XCI6ZmFsc2UsXCJ0eXBlXCI6XCJwb3N0XCIsXCJkaXNjdXNzaW9uXCI6e1wiY29tbWVudHNfb3BlblwiOnRydWUsXCJjb21tZW50X3N0YXR1c1wiOlwib3BlblwiLFwicGluZ3Nfb3BlblwiOnRydWUsXCJwaW5nX3N0YXR1c1wiOlwib3BlblwiLFwiY29tbWVudF9jb3VudFwiOjB9LFwibGlrZXNfZW5hYmxlZFwiOnRydWUsXCJzaGFyaW5nX2VuYWJsZWRcIjp0cnVlLFwibGlrZV9jb3VudFwiOjAsXCJpX2xpa2VcIjowLFwiaXNfcmVibG9nZ2VkXCI6MCxcImlzX2ZvbGxvd2luZ1wiOjAsXCJnbG9iYWxfSURcIjpcIjM4YTRmODY5M2NiMmQwM2ZiZWJiMzU1MTdiMzBhYTY2XCIsXCJmZWF0dXJlZF9pbWFnZVwiOlwiXCIsXCJwb3N0X3RodW1ibmFpbFwiOm51bGwsXCJmb3JtYXRcIjpcInN0YW5kYXJkXCIsXCJnZW9cIjpmYWxzZSxcIm1lbnVfb3JkZXJcIjowLFwicGFnZV90ZW1wbGF0ZVwiOlwiXCIsXCJwdWJsaWNpemVfVVJMc1wiOltdLFwidGFnc1wiOnt9LFwiY2F0ZWdvcmllc1wiOntcIkNhdGVnb3J5MVwiOntcIklEXCI6Mjg1MjcsXCJuYW1lXCI6XCJDYXRlZ29yeTFcIixcInNsdWdcIjpcImNhdGVnb3J5MVwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjEsXCJwYXJlbnRcIjowLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6Y2F0ZWdvcnkxXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1ZzpjYXRlZ29yeTFcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJhdHRhY2htZW50c1wiOntcIjhcIjp7XCJJRFwiOjgsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvamFiYS5qcGdcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9qYWJhLmpwZ1wiLFwiZGF0ZVwiOlwiMjAxNC0wOS0wNFQxNDoxNjo0MSswMDowMFwiLFwicG9zdF9JRFwiOjcsXCJmaWxlXCI6XCJqYWJhLmpwZ1wiLFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcImV4dGVuc2lvblwiOlwianBnXCIsXCJ0aXRsZVwiOlwiamFiYVwiLFwiY2FwdGlvblwiOlwiXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJhbHRcIjpcIlwiLFwidGh1bWJuYWlsc1wiOnt9LFwiaGVpZ2h0XCI6NDE1LFwid2lkdGhcIjo1MDAsXCJleGlmXCI6e1wiYXBlcnR1cmVcIjowLFwiY3JlZGl0XCI6XCJcIixcImNhbWVyYVwiOlwiXCIsXCJjYXB0aW9uXCI6XCJcIixcImNyZWF0ZWRfdGltZXN0YW1wXCI6MCxcImNvcHlyaWdodFwiOlwiXCIsXCJmb2NhbF9sZW5ndGhcIjowLFwiaXNvXCI6MCxcInNodXR0ZXJfc3BlZWRcIjowLFwidGl0bGVcIjpcIlwiLFwib3JpZW50YXRpb25cIjowfSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL21lZGlhXFwvOFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC84XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJwYXJlbnRcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1wifX19fSxcImF0dGFjaG1lbnRfY291bnRcIjpcIjFcIixcIm1ldGFkYXRhXCI6W3tcImlkXCI6XCIzMVwiLFwia2V5XCI6XCJnZW9fcHVibGljXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJpZFwiOlwiMjFcIixcImtleVwiOlwiX3dwYXNfbWVzc1wiLFwidmFsdWVcIjpcInVuZGVmaW5lZFwifSx7XCJpZFwiOlwiMTVcIixcImtleVwiOlwiX3dwYXNfc2tpcF9mYWNlYm9va1wiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjE2XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfZ29vZ2xlX3BsdXNcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxOFwiLFwia2V5XCI6XCJfd3Bhc19za2lwX2xpbmtlZGluXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMjBcIixcImtleVwiOlwiX3dwYXNfc2tpcF9wYXRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMTlcIixcImtleVwiOlwiX3dwYXNfc2tpcF90dW1ibHJcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxN1wiLFwia2V5XCI6XCJfd3Bhc19za2lwX3R3aXR0ZXJcIixcInZhbHVlXCI6XCIxXCJ9XSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJyZXBsaWVzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcXC9yZXBsaWVzXFwvXCIsXCJsaWtlc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XFwvbGlrZXNcXC9cIn19LFwiY2FwYWJpbGl0aWVzXCI6e1wicHVibGlzaF9wb3N0XCI6ZmFsc2UsXCJkZWxldGVfcG9zdFwiOmZhbHNlLFwiZWRpdF9wb3N0XCI6ZmFsc2V9fSx7XCJJRFwiOjMsXCJzaXRlX0lEXCI6NzM5NDMzNzQsXCJhdXRob3JcIjp7XCJJRFwiOjQ3MTc4NjYyLFwibG9naW5cIjpcInNwZW50YXlsb3JcIixcImVtYWlsXCI6ZmFsc2UsXCJuYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJuaWNlX25hbWVcIjpcInNwZW50YXlsb3JcIixcIlVSTFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFwiYXZhdGFyX1VSTFwiOlwiaHR0cHM6XFwvXFwvMS5ncmF2YXRhci5jb21cXC9hdmF0YXJcXC83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFwicHJvZmlsZV9VUkxcIjpcImh0dHA6XFwvXFwvZW4uZ3JhdmF0YXIuY29tXFwvc3BlbnRheWxvclwiLFwic2l0ZV9JRFwiOjczOTQzMzc0fSxcImRhdGVcIjpcIjIwMTQtMDktMDFUMTE6NDU6MDkrMDA6MDBcIixcIm1vZGlmaWVkXCI6XCIyMDE1LTAzLTI5VDEzOjI4OjIxKzAwOjAwXCIsXCJ0aXRsZVwiOlwiRmlyc3QgUG9zdFwiLFwiVVJMXCI6XCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcLzAxXFwvZmlyc3QtcG9zdFxcL1wiLFwic2hvcnRfVVJMXCI6XCJodHRwOlxcL1xcL3dwLm1lXFwvcDUwZzM0LTNcIixcImNvbnRlbnRcIjpcIjxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpsZWZ0O1xcXCI+SGlwc3RlciBJcHN1bTxcXC9oMj5cXG48aHIgXFwvPlxcbjxwPiZuYnNwOzxcXC9wPlxcbjxwIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmxlZnQ7XFxcIj5MaXRlcmFsbHkgVkhTIGZvb2QgdHJ1Y2ssIG11bWJsZWNvcmUgRWNobyBQYXJrIGthbGUgY2hpcHMgcG9zdC1pcm9uaWMgSGVsdmV0aWNhIGZyZWVnYW4gOTAmIzgyMTc7cyBoYXNodGFnLiBCYW5qbyBzZWxmaWVzIG1laCwgQ2FybGVzIGNodXJjaC1rZXkgc2VsdmFnZSBNY1N3ZWVuZXkmIzgyMTc7cy4gU2NlbmVzdGVyIFNob3JlZGl0Y2ggbGV0dGVycHJlc3MsIG9yZ2FuaWMgbWFzdGVyIGNsZWFuc2UgOC1iaXQgWU9MTyBldGhuaWMgdWdoIHRydXN0IGZ1bmQgbGVnZ2luZ3MgZml4aWUgZHJlYW1jYXRjaGVyIG1lc3NlbmdlciBiYWcuIExvLWZpIGxlZ2dpbmdzIGJpY3ljbGUgcmlnaHRzIDMgd29sZiBtb29uIEVjaG8gUGFyaywgYmVmb3JlIHRoZXkgc29sZCBvdXQgYmlvZGllc2VsIHB1dCBhIGJpcmQgb24gaXQuIERyaW5raW5nIHZpbmVnYXIgZm9vZCB0cnVjayBNY1N3ZWVuZXkmIzgyMTc7cyByb29mIHBhcnR5LCBzYWx2aWEgKzEgdGF0dG9vZWQgRElZIGRpc3J1cHQgSGVsdmV0aWNhLiBOYXJ3aGFsIGthbGUgY2hpcHMgdG91c2xlZCBiZWFyZCBkaXN0aWxsZXJ5IE9kZCBGdXR1cmUsIFBCUiZhbXA7QiA5MCYjODIxNztzIHNlbHZhZ2UgY2FyZGlnYW4gY2h1cmNoLWtleSBzY2VuZXN0ZXIuIFBhbGVvIHN1c3RhaW5hYmxlIGFjdHVhbGx5IENhcmxlcyBjcmF5IGNsaWNoZSBkcmVhbWNhdGNoZXIuPFxcL3A+XFxuPHA+PGEgaHJlZj1cXFwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZ1xcXCI+PGltZyBjbGFzcz1cXFwiYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtNFxcXCIgc3JjPVxcXCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL3N1Ym8uanBnP3c9MzAwJiMwMzg7aD0yMTlcXFwiIGFsdD1cXFwic3Vib1xcXCIgd2lkdGg9XFxcIjMwMFxcXCIgaGVpZ2h0PVxcXCIyMTlcXFwiIFxcLz48XFwvYT48XFwvcD5cXG48cD5QaXRjaGZvcmsgYWN0dWFsbHkgcmVhZHltYWRlIG1lc3NlbmdlciBiYWcsIGNyYWZ0IGJlZXIgUGludGVyZXN0IHNjZW5lc3RlciBUaHVuZGVyY2F0cyBzYXJ0b3JpYWwga2VmZml5ZWggaGVsbGEgdHdlZSBvcmdhbmljIEJyb29rbHluLiBTaG9yZWRpdGNoIFRodW5kZXJjYXRzIGFydCBwYXJ0eSBzYXJ0b3JpYWwgdGF0dG9vZWQgZmxleGl0YXJpYW4sIGFjdHVhbGx5IGRpcmVjdCB0cmFkZSBQQlImYW1wO0IgYmVmb3JlIHRoZXkgc29sZCBvdXQgRXRzeSBWaWNlLiBTZWxmaWVzIEhpZ2ggTGlmZSByb29mIHBhcnR5IHRydXN0IGZ1bmQsIHN3YWcgc2hhYmJ5IGNoaWMgR29kYXJkIGZyZWVnYW4gZmFwIGF1dGhlbnRpYyBhc3ltbWV0cmljYWwuIFJldHJvIGhhc2h0YWcgVGh1bmRlcmNhdHMgc2VsZmllcyBoZWxsYSBkaXJlY3QgdHJhZGUuIElQaG9uZSBzd2FnIG5leHQgbGV2ZWwsIGdhc3Ryb3B1YiBjaGFtYnJheSByZXRybyBFdHN5IHNxdWlkIGtpdHNjaC4gVmlyYWwgbG9jYXZvcmUgQnJvb2tseW4gcGxhaWQgQ2FybGVzLiBDaHVyY2gta2V5IGhlbGxhIG5hcndoYWwsIFlPTE8gZXRobmljIHNjZW5lc3RlciBiaW9kaWVzZWwgT2RkIEZ1dHVyZS48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPkhpcHN0ZXIgSXBzdW0gJm5ic3A7IExpdGVyYWxseSBWSFMgZm9vZCB0cnVjaywgbXVtYmxlY29yZSBFY2hvIFBhcmsga2FsZSBjaGlwcyBwb3N0LWlyb25pYyBIZWx2ZXRpY2EgZnJlZWdhbiA5MCYjODIxNztzIGhhc2h0YWcuIEJhbmpvIHNlbGZpZXMgbWVoLCBDYXJsZXMgY2h1cmNoLWtleSBzZWx2YWdlIE1jU3dlZW5leSYjODIxNztzLiBTY2VuZXN0ZXIgU2hvcmVkaXRjaCBsZXR0ZXJwcmVzcywgb3JnYW5pYyBtYXN0ZXIgY2xlYW5zZSA4LWJpdCBZT0xPIGV0aG5pYyB1Z2ggdHJ1c3QgZnVuZCBsZWdnaW5ncyBmaXhpZSBkcmVhbWNhdGNoZXIgbWVzc2VuZ2VyIGJhZy4gTG8tZmkgbGVnZ2luZ3MgYmljeWNsZSByaWdodHMgMyB3b2xmIG1vb24gRWNobyBQYXJrLCBiZWZvcmUgdGhleSBzb2xkIG91dCBiaW9kaWVzZWwgWyZoZWxsaXA7XTxcXC9wPlxcblwiLFwic2x1Z1wiOlwiZmlyc3QtcG9zdFwiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLz9wPTNcIixcInN0YXR1c1wiOlwicHVibGlzaFwiLFwic3RpY2t5XCI6ZmFsc2UsXCJwYXNzd29yZFwiOlwiXCIsXCJwYXJlbnRcIjpmYWxzZSxcInR5cGVcIjpcInBvc3RcIixcImRpc2N1c3Npb25cIjp7XCJjb21tZW50c19vcGVuXCI6dHJ1ZSxcImNvbW1lbnRfc3RhdHVzXCI6XCJvcGVuXCIsXCJwaW5nc19vcGVuXCI6dHJ1ZSxcInBpbmdfc3RhdHVzXCI6XCJvcGVuXCIsXCJjb21tZW50X2NvdW50XCI6MX0sXCJsaWtlc19lbmFibGVkXCI6dHJ1ZSxcInNoYXJpbmdfZW5hYmxlZFwiOnRydWUsXCJsaWtlX2NvdW50XCI6MCxcImlfbGlrZVwiOjAsXCJpc19yZWJsb2dnZWRcIjowLFwiaXNfZm9sbG93aW5nXCI6MCxcImdsb2JhbF9JRFwiOlwiNTRlNGQ4NmY1NGRhYTMyNmEzODA1MGQwYzRmZTM2NGFcIixcImZlYXR1cmVkX2ltYWdlXCI6XCJcIixcInBvc3RfdGh1bWJuYWlsXCI6bnVsbCxcImZvcm1hdFwiOlwic3RhbmRhcmRcIixcImdlb1wiOmZhbHNlLFwibWVudV9vcmRlclwiOjAsXCJwYWdlX3RlbXBsYXRlXCI6XCJcIixcInB1YmxpY2l6ZV9VUkxzXCI6W10sXCJ0YWdzXCI6e1wia2FsZSBjaGlwc1wiOntcIklEXCI6NjAxNzAwMSxcIm5hbWVcIjpcImthbGUgY2hpcHNcIixcInNsdWdcIjpcImthbGUtY2hpcHNcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6a2FsZS1jaGlwc1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6a2FsZS1jaGlwc1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19LFwiT2RkIEZ1dHVyZVwiOntcIklEXCI6MTY2NDI1NDUsXCJuYW1lXCI6XCJPZGQgRnV0dXJlXCIsXCJzbHVnXCI6XCJvZGQtZnV0dXJlXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOm9kZC1mdXR1cmVcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOm9kZC1mdXR1cmVcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fSxcIllPTE9cIjp7XCJJRFwiOjcxMTEwMCxcIm5hbWVcIjpcIllPTE9cIixcInNsdWdcIjpcInlvbG9cIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6eW9sb1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6eW9sb1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19fSxcImNhdGVnb3JpZXNcIjp7XCJVbmNhdGVnb3JpemVkXCI6e1wiSURcIjoxLFwibmFtZVwiOlwiVW5jYXRlZ29yaXplZFwiLFwic2x1Z1wiOlwidW5jYXRlZ29yaXplZFwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjIsXCJwYXJlbnRcIjowLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6dW5jYXRlZ29yaXplZFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6dW5jYXRlZ29yaXplZFxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19fSxcImF0dGFjaG1lbnRzXCI6e1wiNFwiOntcIklEXCI6NCxcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZ1wiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL3N1Ym8uanBnXCIsXCJkYXRlXCI6XCIyMDE0LTA5LTAxVDExOjQyOjQzKzAwOjAwXCIsXCJwb3N0X0lEXCI6MyxcImZpbGVcIjpcInN1Ym8uanBnXCIsXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFwiZXh0ZW5zaW9uXCI6XCJqcGdcIixcInRpdGxlXCI6XCJzdWJvXCIsXCJjYXB0aW9uXCI6XCJcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcImFsdFwiOlwiXCIsXCJ0aHVtYm5haWxzXCI6e30sXCJoZWlnaHRcIjozMjksXCJ3aWR0aFwiOjQ1MCxcImV4aWZcIjp7XCJhcGVydHVyZVwiOjAsXCJjcmVkaXRcIjpcIlwiLFwiY2FtZXJhXCI6XCJcIixcImNhcHRpb25cIjpcIlwiLFwiY3JlYXRlZF90aW1lc3RhbXBcIjowLFwiY29weXJpZ2h0XCI6XCJcIixcImZvY2FsX2xlbmd0aFwiOjAsXCJpc29cIjowLFwic2h1dHRlcl9zcGVlZFwiOjAsXCJ0aXRsZVwiOlwiXCIsXCJvcmllbnRhdGlvblwiOjB9LFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC80XCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9tZWRpYVxcLzRcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInBhcmVudFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXCJ9fX19LFwiYXR0YWNobWVudF9jb3VudFwiOlwiMVwiLFwibWV0YWRhdGFcIjpbe1wiaWRcIjpcIjhcIixcImtleVwiOlwiZ2VvX3B1YmxpY1wiLFwidmFsdWVcIjpcIjBcIn1dLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInJlcGxpZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1xcL3JlcGxpZXNcXC9cIixcImxpa2VzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcXC9saWtlc1xcL1wifX0sXCJjYXBhYmlsaXRpZXNcIjp7XCJwdWJsaXNoX3Bvc3RcIjpmYWxzZSxcImRlbGV0ZV9wb3N0XCI6ZmFsc2UsXCJlZGl0X3Bvc3RcIjpmYWxzZX19XX07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29sbGVjdGlvbkV4dGVuc2lvbiA9IHJlcXVpcmUoJy4vY29sbGVjdGlvbkV4dGVuc2lvbi5qcycpO1xudmFyIHN0dWJzID0gcmVxdWlyZSgnLi4vYmxvZy1wb3N0LXN0dWJzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGlvbkV4dGVuc2lvbi5leHRlbmQoe1xuXHRcblx0Ly8gbW9kZWw6IEFydGljbGVNb2RlbCxcbiAgc3R1YnM6IHN0dWJzLFxuXHRwb3NpdGlvbjogMCxcblx0dG90YWxSZWNvcmRzOiAwLFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuICB1cmw6IGZ1bmN0aW9uKCl7XG4gIFx0cmV0dXJuICdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cyc7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gIFx0dGhpcy50b3RhbFJlY29yZHMgPSByZXNwb25zZS5mb3VuZDtcbiAgICByZXR1cm4gcmVzcG9uc2UucG9zdHM7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuXHRcblx0cG9zaXRpb246IDAsXG5cdHRvdGFsUmVjb3JkczogMCxcblx0aXNMb2FkaW5nOiBmYWxzZSxcbiAgcGFyc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKXsgLy8sIHhoclxuICBcdHRoaXMudG90YWxSZWNvcmRzID0gcmVzcG9uc2UubGVuZ3RoO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSxcbiAgc2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgaWYgKG9wdGlvbnMuc2x1ZyAmJiB0aGlzLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VycmVudFJlY29yZCA9IHRoaXMud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5tb2RlbCAmJiB0aGlzLmNvbnRhaW5zKG9wdGlvbnMubW9kZWwpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRSZWNvcmQgPSBvcHRpb25zLm1vZGVsO1xuICAgIH1cblxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmluZGV4T2YodGhpcy5jdXJyZW50UmVjb3JkKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVjb3JkO1xuICB9LFxuICBnZXRDdXJyZW50UmVjb3JkOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KHRoaXMucG9zaXRpb24pO1xuICB9LFxuICBnZXRMYXRlc3Q6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQoMCk7XG4gIH0sXG4gIGFkZFN0dWJzOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pO1xuXG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBzdHVicyA9IChvcHRpb25zLnN0dWJzIHx8IHRoaXMuc3R1YnMgfHwgW10pO1xuICAgIHZhciByZWNvcmRzID0gdGhpcy5wYXJzZShzdHVicyk7XG5cbiAgICB2YXIgaTtcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgZm9yIChpID0gcmVjb3Jkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgcmVjb3JkID0gcmVjb3Jkc1tpXTtcbiAgICAgICAgaWYgKCFjb2xsZWN0aW9uLndoZXJlKHtJRDogcmVjb3JkLklEfSkubGVuZ3RoKSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5hZGQocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgKG9wdGlvbnMuc3VjY2VzcyB8fCAkLm5vb3ApKCk7XG4gICAgfSwgKG9wdGlvbnMudGltZSB8fCAwKSk7XG5cbiAgfSxcbiAgZ2V0TmV4dE1vZGVsOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KCh0aGlzLnBvc2l0aW9uICsxID4gdGhpcy5sZW5ndGggLTEpPyAgZmFsc2UgOiB0aGlzLnBvc2l0aW9uICsgMSk7XG4gIH0sXG4gIGdldFByZXZNb2RlbDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCgodGhpcy5wb3NpdGlvbiAtMSA8IDApID8gZmFsc2UgOiB0aGlzLnBvc2l0aW9uIC0gMSk7XG4gIH0sXG4gIGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG4gICAgcmV0dXJuICh0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IHNsdWd9KS5sZW5ndGggPj0gMSk7XG4gIH0sXG4gIGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZWNvcmQgPyB0aGlzLmN1cnJlbnRSZWNvcmQuZ2V0KCdzbHVnJykgOiB0aGlzLmZpcnN0KCkuZ2V0KCdzbHVnJyk7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENvbGxlY3Rpb25FeHRlbnNpb24gPSByZXF1aXJlKCcuL2NvbGxlY3Rpb25FeHRlbnNpb24uanMnKTtcbnZhciBzdHVicyA9IHJlcXVpcmUoJy4uL3Byb2plY3RzLXN0dWJzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGlvbkV4dGVuc2lvbi5leHRlbmQoe1xuXHRcblx0Ly8gbW9kZWw6IEFydGljbGVNb2RlbCxcbiAgc3R1YnM6IHN0dWJzLFxuXHRwb3NpdGlvbjogMCxcblx0dG90YWxSZWNvcmRzOiAwLFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuICB1cmw6IGZ1bmN0aW9uKCl7XG4gIFx0cmV0dXJuICdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vcG9zdHMnO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB3aGVlbEV2ZW50ID0gKC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXsgXG5cdFx0b3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KTtcblxuXHRcdHRoaXMuY29vbGRvd25UaW1lID0gKG9wdGlvbnMuY29vbGRvd25UaW1lIHx8IDEwMDApO1xuXHRcdHRoaXMucmVhZHkgPSB0cnVlO1xuXG5cdFx0dmFyIGRpcmVjdGlvbjtcblxuXHRcdHZhciBtb2R1bGUgPSB0aGlzO1xuXG5cdFx0dmFyIHRyYWNrU2Nyb2xsID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpZiAoIW1vZHVsZS5yZWFkeSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdFx0dmFyIGV2dCA9ICh3aW5kb3cuZXZlbnQgfHwgZSk7IC8vIGVxdWFsaXplIGV2ZW50IG9iamVjdFxuXHRcdFx0dmFyIGRlbHRhPSBldnQuZGV0YWlsID8gZXZ0LmRldGFpbCooLTEyMCkgOiBldnQud2hlZWxEZWx0YTsgLy8gY2hlY2sgZm9yIGRldGFpbCBmaXJzdCBzbyBPcGVyYSB1c2VzIHRoYXQgaW5zdGVhZCBvZiB3aGVlbERlbHRhXG5cdFx0XHR2YXIgZGVsdGFYID0gZXZ0LmRlbHRhWDtcblxuXHRcdFx0aWYgKGRlbHRhWCA+IDE2MCkge1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpwcmV2Q29udGVudCcpO1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLnN3aXBlckNvb2xkb3duKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGRlbHRhWCA8IC0xNjApIHtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6bmV4dENvbnRlbnQnKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5zd2lwZXJDb29sZG93bigpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbiB1cCBvciBkb3duIHN3aXBlIHNob3VsZCBiZSBuZWFyIGVub3VnaCB2ZXJ0aWNhbC5cblx0XHRcdC8vIElmIHRoZSBYLWRlbHRhIGlzIGF0IGFsbCBzaWduaWZpY2FudCB0aGVuIHJldHVybiBlYXJseSBiZWZvcmUgdGhlIFktZGVsdGEgaXMgY29uc2lkZXJlZC5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YVgpID49IDUwKSB7IGNvbnNvbGUubG9nKCdpZ25vcmluZyBZLWRlbHRhJyk7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0XHRpZiAoZGVsdGEgPiAzMjApIHtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvTGFuZGluZycpO1x0XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuc3dpcGVyQ29vbGRvd24oKTtcblx0XHRcdH0gZWxzZSBpZiAoZGVsdGEgPCAtMzIwKSB7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6Z29Ub0N1cnJlbnRDb250ZW50Jyk7XHRcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5zd2lwZXJDb29sZG93bigpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpeyAvL2lmIElFIChhbmQgT3BlcmEgZGVwZW5kaW5nIG9uIHVzZXIgc2V0dGluZylcbiAgICBcdGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbicrd2hlZWxFdmVudCwgdHJhY2tTY3JvbGwpO1xuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgey8vV0MzIGJyb3dzZXJzXG4gICAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHRyYWNrU2Nyb2xsLCBmYWxzZSk7XG5cdFx0fVxuXG5cdH0sXG5cdHN3aXBlckNvb2xkb3duOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2R1bGUgPSB0aGlzO1xuXHRcdG1vZHVsZS5yZWFkeSA9IGZhbHNlO1xuXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdG1vZHVsZS5yZWFkeSA9IHRydWU7XG5cdFx0fSwgbW9kdWxlLmNvb2xkb3duVGltZSk7XG5cdH1cblxufTtcblxuXG4vLyAkKGRvY3VtZW50KS5tb3VzZXdoZWVsKGZ1bmN0aW9uKGV2ZW50LCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpIHtcbi8vICAgXHRpZiAoZGVsdGFYID4gMTApe1xuLy8gXHRcdCQoXCIuc3F1YXJlXCIpLmFkZENsYXNzKFwiYW5pbWF0aW9uXCIpO1xuLy8gXHR9ZWxzZSBpZihkZWx0YVggPCAtMTApe1xuLy8gXHRcdCQoXCIuc3F1YXJlXCIpLnJlbW92ZUNsYXNzKFwiYW5pbWF0aW9uXCIpO1xuLy8gXHR9XG4vLyBcdGlmIChkZWx0YVkgIT0gMCl7XG4vLyBcdCAgICAvLy9Bbnl0aGluZyB0aGF0IG1ha2VzIHZlcnRpY2FsIHdoZWVsc2Nyb2xsIGtlZXBzIG5vcm1hbFxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgfVxuLy8gICAgIC8vIEkgaGF2ZSB0byBwcmV2ZW50RGVmYXVsdCBvbmx5IHRoZSBob3Jpem9udGFsIHNjcm9sbCwgb3RoZXJ3aXNlIHBhZ2Ugd2lsbCBnbyBiYWNrIG9yIGdvIGZvcndhcmQgaW4gaGlzdG9yeVxuXHRcbi8vIH0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IHJlcXVpcmUoJy4vYXBwLmpzJyk7XG5cblxuXG4kKGRvY3VtZW50KS5vbigncmVhZHknLCBmdW5jdGlvbigpe1xuXHRhcHAuaW5pdGlhbGl6ZSgpO1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJhbnNpdGlvbkVuZCA9ICd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJztcblxuZnVuY3Rpb24gdHJhbnNpdGlvbnMgKG9wdGlvbnMpIHtcblx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0dGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcblx0dGhpcy4kbWFpbiA9ICQodGhpcy5tYWluID0gb3B0aW9ucy5tYWluKTtcblx0dGhpcy4kdHJhbnNpdGlvbmVyID0gJCh0aGlzLnRyYW5zaXRpb25lciA9IG9wdGlvbnMudHJhbnNpdGlvbmVyKTtcblx0dGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcblxuXHR0aGlzLiR0cmFuc2l0aW9uZXIucmVtb3ZlKCk7XG5cblx0dGhpcy5yZW5kZXIgPSBmdW5jdGlvbihjb250ZW50KXtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLmRpcmVjdGlvbiA9PT0gJ3ByZXYnID8gJ3ByZXYnIDogJ25leHQnXShjb250ZW50KTtcblx0fTtcblxuXHR0aGlzLm5leHQgPSBmdW5jdGlvbihjb250ZW50KXtcblx0XHRpZiAodGhpcy5hbmltYXRpbmcpIHtyZXR1cm4gZmFsc2U7fVxuXG5cdFx0dmFyIHRyYW5zaXRpb25zID0gdGhpcztcblx0XHR2YXIgJGNvbnRhaW5lciA9ICQodGhpcy5jb250YWluZXIpO1xuXG5cdFx0dGhpcy4kdHJhbnNpdGlvbmVyLmh0bWwoY29udGVudCkuaW5zZXJ0QWZ0ZXIodGhpcy4kbWFpbik7XG5cblx0XHR0aGlzLmFuaW1hdGluZyA9IHRydWU7XG5cdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnYW5pbWF0aW5nLW5leHQnKS5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLXByZXYnKS5vbmUodHJhbnNpdGlvbkVuZCwgZnVuY3Rpb24oKXtcblx0XHRcdHRyYW5zaXRpb25zLiRtYWluLmh0bWwoY29udGVudCk7XG5cdFx0XHQkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctbmV4dCcpO1xuXHRcdFx0dHJhbnNpdGlvbnMuJHRyYW5zaXRpb25lci5yZW1vdmUoKTtcblx0XHRcdHRyYW5zaXRpb25zLmFuaW1hdGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHRoaXMucHJldiA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGlmICh0aGlzLmFuaW1hdGluZykge3JldHVybiBmYWxzZTsgfVxuXG5cdFx0dmFyIHRyYW5zaXRpb25zID0gdGhpcztcblx0XHR2YXIgJGNvbnRhaW5lciA9ICQodGhpcy5jb250YWluZXIpO1xuXG5cdFx0dGhpcy4kdHJhbnNpdGlvbmVyLmh0bWwoY29udGVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuJG1haW4pO1xuXG5cdFx0dGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuXHRcdCRjb250YWluZXIuYWRkQ2xhc3MoJ2FuaW1hdGluZy1wcmV2JykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1uZXh0Jykub25lKHRyYW5zaXRpb25FbmQsIGZ1bmN0aW9uKCl7XG5cdFx0XHR0cmFuc2l0aW9ucy4kbWFpbi5odG1sKGNvbnRlbnQpO1xuXHRcdFx0JGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLXByZXYnKTtcblx0XHRcdHRyYW5zaXRpb25zLiR0cmFuc2l0aW9uZXIucmVtb3ZlKCk7XG5cdFx0XHR0cmFuc2l0aW9ucy5hbmltYXRpbmcgPSBmYWxzZTtcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gdGhpcztcdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zaXRpb25zOyIsIm1vZHVsZS5leHBvcnRzID0gW1xuXHR7XG5cdFx0SUQ6IDEsXG5cdFx0dGl0bGU6ICdTbm93cmlkZXJzIExvZ28nLFxuXHRcdHNsdWc6ICdTbm93cmlkZXJzLWxvZ28nLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRncmFwaGljczogWydJbGx1c3RyYXRvciddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Nub3dyaWRlcnMucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPkR1cmluZyBteSB0aW1lIHN0dWR5aW5nIGF0IFBseW1vdXRoIFVuaXZlcnNpdHkgSSB3YXMgaW52b2x2ZWQgd2l0aCB0aGUgbG92ZWx5IGZvbGtzIHdobyBtYWRlIHVwIHRoZSBQbHltb3V0aCBTbm93cmlkZXJzIChUaGUgdW5pb25cXCdzIHNub3cgc3BvcnRzIHNvY2lldHkpLiBJIHdhcyBsdWNreSBlbm91Z2ggdG8gaGF2ZSBnb29kIGZyaWVuZHMgb24gdGhlIGNvbW1pdHRlZSBzbyBuZXZlciBhY3R1YWxseSBoYWQgdG8gcGF5IG1lbWJlcnNoaXAgKHNoaGhoLi4uKS48YnI+SW4gbXkgZmluYWwgeWVhciBJIGhhZCBzdGFydGVkIHRlYWNoaW5nIG15c2VsZiBob3cgdG8gdXNlIElsbHVzdHJhdG9yIGFuZCBkZWNpZGVkIHRvIHBheSBiYWNrIHRoZSBjbHViIGJ5IGdpdmluZyB0aGVpciBsb2dvIGEgZmFjZWxpZnQuPC9wPjxwPkkgZGlkblxcJ3Qgd2FudCB0byB2ZW50dXJlIHRvbyBmYXIgYXdheSBmcm9tIHRoZSBvcmlnaW5hbCBzbyBJIHVzZWQgdGhlIHNhbWUgZm9udCAoQXJpYWwsIHBsZWFzZSBmb3JnaXZlIG1lISkgYW5kIEkgcmUtZHJldyB0aGUgXFwnc25vd3JpZGVycyBsYWR5XFwnIHNvIHRoYXQgd2Ugd291bGQgaGF2ZSBpdCBpbiBhIHNjYWxhYmxlIGZvcm1hdCByYXRoZXIgdGhhbiBqdXN0IHRoZSBoZWF2aWx5IHBpeGVsYXRlZCB2ZXJzaW9uIHRoYXQgd2UgYWxyZWFkeSBoYWQuPGJyPkkgY2hvc2UgdG8gdGFrZSB0aGUgb25lIGxpbmUgXFwnc25vd3JpZGVyc1xcJyBhbmQgc3BsaXQgdGhpcyBpbnRvIHR3byBzbyB0aGF0IGl0IHdvdWxkIGJldHRlciBmaXQgb24gdGVlc2hpcnRzIGFuZCBob29kaWVzIGFuZCBjaG9zZSBhIHZlcnkgYm9sZCBsb29rIGZvciBlYXN5IHJlY29nbml0aW9uLCB0aGUgc25vd3JpZGVycyBhcmUgYSBwcm91ZCBidW5jaCE8L3A+J1xuXHR9LCB7XG5cdFx0SUQ6IDIsXG5cdFx0dGl0bGU6ICdIYXJyeSBQb3R0eScsXG5cdFx0c2x1ZzogJ2hhcnJ5LXBvdHR5Jyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnanF1ZXJ5J10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvaGFycnlwb3R0eS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+TXkgZGFkIGlzIGEgYml0IG9mIGEgY2xvd24sIG5vIHJlYWxseSEgSGUgd29ya3MgYXMgYSBjaGlsZHJlblxcJ3MgZW50ZXJ0YWluZXIgc28gd2hpbGUgSSB3YXMgZ2V0dGluZyBzdGFydGVkIHdpdGggbGVhcm5pbmcgUEhQIGFuZCBKUyBJIGJ1aWx0IGEgdmVyeSBiYXNpYyB3ZWJzaXRlIGZvciBoaW0uPC9wPjxwPlRoZSB3ZWJzaXRlIHNlcnZlZCBvbmx5IG9uZSBwdXJwb3NlIHdoaWNoIHdhcyB0byBwcm92aWRlIGEgY29udGFjdCBmb3JtIGZvciBwb3RlbnRpYWwgY3VzdG9tZXJzIHdhbnRpbmcgdG8gZ2V0IGluIHRvdWNoLjxicj5UaGUgY29kZSB3YXMgcHJldHR5IHRlcnJpYmxlLi4uIHZlcnkgYmFzaWMgUEhQIHRvIHNlcnZlIHVwIHRoZSBzaXRlIGFuZCBzZW5kIHRoZSBmb3JtIGRldGFpbHMgd2l0aCBqUXVlcnkgdG8gdmFsaWRhdGUgb24gdGVoIGZyb250ZW5kLjwvcD4nXG5cdH0se1xuXHRcdElEOiAzLFxuXHRcdHRpdGxlOiAnVGhlIFNhdWNlJyxcblx0XHRzbHVnOiAndGhlLXNhdWNlJyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnJ10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc2F1Y2UucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPlRoZSByZWFzb24gSSBnb3Qgc3RhcnRlZCB3aXRoIGxlYXJuaW5nIHRvIGNvZGUgd2FzIHRvIHNldCB1cCBhbiBlY29tbWVyY2Ugc2l0ZSBmb3IgXFwnVGhlIFNhdWNlXFwnLCBhIGJyYW5kIHRoYXQgSSB3YXMgaG9waW5nIHRvIHNldCB1cC48YnI+SSBoYWQgc3RhcnRlZCBjcmVhdGluZyBkZXNpZ25zIGZvciB0ZWVzaGlydHMgYW5kIHN3ZWF0c2hpcnRzIGV0Yy4sIGJvdWdodCBhIGxvYWQgb2YgcHJpbnRpbmcgZXF1aXBtZW50IGFuZCBpbmtzIGFuZCBuZWVkZWQgdG8gc2V0IHVwIGEgY2hhbm5lbCBhIGNoYW5uZWwgdG8gc2VsbCB0aGUgcHJvZHVjdHMgdGhhdCBJIHdvdWxkIGJlIGNyZWF0aW5nLjwvcD48cD5BbHRob3VnaCB0aGVyZSBpcyBjZXJ0YWlubHkgbm90aGluZyBncm91bmRicmFraW5nIGluIHRoaXMgcHJvamVjdCBJIGhhZCBzZXQgbXlzZWxmIGEgZmV3IGNoYWxsZW5nZXMgdGhhdCB0dXJuZWQgb3V0IHRvIGJlIHF1aXRlIHRvdWdoIGF0IHRoZSB0aW1lIGFuZCBoZWxwZWQgbWUgdW5kZXJzdGFuZCBtb3JlIGFib3V0IFBIUCwgSlMgYW5kIGNvZGluZyBpbiBnZW5lcmFsLjwvcD48aDI+UHJvZHVjdCBMaXN0aW5nPC9oMj48aHI+PHA+UmF0aGVyIHRoYW4gb3B0IGZvciBhIHN0cmFpZ2h0IHVwIGxpc3Qgb2YgcHJvZHVjdCB0aHVtYm5haWxzIEkgd2FudGVkIHRvIGhhdmUgc2VjdGlvbnMgdGhhdCBmZWF0dXJlZCBhIG51bWJlciBvZiB0aHVtYm5haWxzIHdpdGggYSBcXCdwcm9kdWN0IGZvY3VzXFwnIHBhbmVsIHRoYXQgd291bGQgc2hvdyBtb3JlIGRldGFpbCBvZiB3aGljaGV2ZXIgcHJvZHVjdCB0aGUgdXNlciB3YXMgY3VycmVudGx5IGhvdmVyaW5nIG92ZXIuPGJyPkVhY2ggb2YgdGhlc2UgcGFuZWxzIHdvdWxkIGhhdmUgYW4gYWx0ZXJuYXRpbmcgbGF5b3V0IGluIG9yZGVyIHRvIGtlZXAgc29tZSBiYWxhbmNlIGRvd24gdGhlIHBhZ2UuPGJyPlRoaXMgd2FzIHdoZXJlIEkgbGVhcm5lZCBsb29waW5nIGluIFBIUCBhbmQgd2FzIG15IGZpcnN0IHJlYWwgY2hhbGxlbmdlIHdpdGggamF2YXNjcmlwdCAoQWx0aG91Z2ggbXkgc29sdXRpb24gd2FzIHRlcnJpYmxlLCBjcmF6eSBkYXRhIGF0dHJpYnV0ZXMgZXZlcndoZXJlISk8L3A+PGgyPlByb2R1Y3QgTGlnaHRib3g8L2gyPjxocj48cD5JIGRpZG5cXCd0IHdhbnQgdG8gaGF2ZSB0aGUgdXNlciBsZWF2ZSB0aGUgcHJvZHVjdCBsaXN0aW5nIHBhZ2UgZWFoYyB0aW1lIHRoZXkgd2FudGVkIHRvIHZpZXcgYSBwcm9kdWN0IHNvIEkgYXR0ZW1wdGVkIHRvIGJ1aWxkIG91dCBhIGxpZ2h0LWJveC48YnI+QWx0aG91Z2ggSSBkaWQgZ2V0IHRoaXMgdG8gd29yaywgdGhlIHNvbHV0aW9uLCBhZ2FpbiwgbGFja2VkIGVsZWdhbmNlLiByYXRoZXIgdGhhbiBwZXJmb3JtaW5nIGFuIEFKQVggY2FsbCB0byBwb3B1bGF0ZSB0aGUgbGlnaHRib3gsIG9yIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggYSBmZXcgcGllY2VzIG9mIHByb2R1Y3QgZGF0YSwgSSByZWx5ZWQgb24gdGhlIGRhdGEgYXR0cmlidXRlcyB0aGF0IEkgaGFkIHJlbmRlcmVkIG91dCBvbiBlYWNoIHRodW1ibmFpbCBkaXYuPGJyPlV0dGVybHkgdGVycmlibGUgYnV0IHZlcnkgZWR1Y2F0aW9uYWwhPC9wPidcblx0fSx7XG5cdFx0SUQ6IDQsXG5cdFx0dGl0bGU6ICdTdXJmIFRyYWNraW5nIEFwcCBDb25jZXB0Jyxcblx0XHRzbHVnOiAnc3VyZi10cmFja2luZy1hcHAtY29uY2VwdCcsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdFx0cnVieTogWydSdWJ5IG9uIFJhaWxzJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc3VyZmFwcGNvbmNlcHQucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPkR1cmluZyBteSB0aW1lIHN0dWR5aW5nIGF0IEJpdG1ha2VyIExhYnMgaW4gVG9yb250bywgbXlzZWxmIGFuZCBhIGNvdXBsZSBvZiBjbGFzc21hdGVzIGRlY2lkZWQgdG8gZW50ZXIgdGhlIG1ha2VyIGVkaXRpb24gb2Ygc3RhcnQtdXAgd2Vla2VuZC48L3A+PHA+SSBoYWQgaGFkIGFuIGlkZWEgYSB5ZWFyIG9yIHNvIGJlZm9yZSBoYW5kIHdoaWxzdCBmaW5pc2hpbmcgdXAgYXQgdW5pdmVyc2l0eSB0byBjcmVhdGUgaG91c2luZyBmb3IgYSBzbWFydHBob25lIHRoYXQgY291bGQgYmUgYXR0YWNoZWQgdG8gYSBzdXJmYm9hcmQgaW4gb3JkZXIgdG8gY29sbGVjdCBkYXRhIGFib3V0IHRoZSBzdXJmZXJcXCdzIHBlcmZvcm1hbmNlIGR1cmluZyB0aGVpciBzZXNzaW9uLCBhbGxvd2luZyB0aGVtIHRvIHJldmlldyB0aGUgZGF0YSBsYXRlci4gU28gd2Ugd2VudCBhYm91dCBwcm90b3R5cGluZyBhIGRldmljZSAoaW4gcGxhY2Ugb2YgdGhlIHNtYXJ0cGhvbmUgaG91c2luZykgYW5kIHRoZSB3ZWIgYXBwIHRoYXQgd291bGQgZGlzcGxheSB0aGUgZGF0YS48L3A+PHA+QXMgdGhpcyB3YXMgbW9yZSBvZiBhIGNvbmNlcHQgcHJvamVjdCB0aGFuIGFuIGFjdHVhbCBhdHRlbXB0IGF0IGJ1aWxkaW5nIGEgcHJvZHVjdCwgSSBhZGRlZCBzb21lIGZ1bmN0aW9uYWxpdHkgdGhhdCB3b3VsZG5cXCd0IHJlYWxseSBiZSBhY2hpZXZhYmxlLCBzdWNoIGFzIHJlYWwtdGltZSB3YXZlLXRvLXdhdmUgdXBkYXRlcyB0byB0aGUgc3VyZmVycyBwcm9maWxlLCB3aGVyZSBlYWNoIHdhdmUgd291bGQgYmUgcGxvdHRlZCBvbiBhIGxvY2FsIG1hcCB3aXRoIGl0XFwncyBzcGVlZCBhbmQgZGlzdGFuY2Ugc2hvd24gYWxvbmcgc2lkZS48L3A+PHA+V2UgZGlkblxcJ3Qgd2luIGFueSBwcml6ZXMgYnV0IGRpZG5cXCd0IGRvIHRlcnJiaWx5IGVpdGhlciBhcyB3ZSB3ZXJlIHNvbWV3aGVyZSBpbiB0aGUgdG9wIDkgb3V0IG9mIDQwKyB0ZWFtcy48L3A+J1xuXHR9LHtcblx0XHRJRDogNSxcblx0XHR0aXRsZTogJ1JQRyBhZHZlbnR1cmUgZ2FtZScsXG5cdFx0c2x1ZzogJ3JwZy1hZHZlbnR1cmUtZ2FtZScsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdFx0cnVieTogWydSdWJ5IG9uIFJhaWxzJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvcnBnLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5Gb3IgbXkgZmluYWwgcHJvamVjdCBhdCBCaXRtYWtlciBMYWJzLCBJIGRlY2lkZWQgdG8gYnVpbGQgYW4gUlBHIGJyb3dzZXIgZ2FtZSB0aGF0IGFsbG93cyBwbGF5ZXJzIHRvIGNyZWF0ZSBhIGNoYXJhY3RlciwgYmF0dGxlIE5QQ3MgYW5kIG90aGVyIHBsYXllcnMsIGNvbGxlY3QgZ29sZCAmYW1wOyBpdGVtcywgbGV2ZWwgdXAgYW5kIGtlZXAgdHJhY2sgb2YgdGhlaXIgcmFuayBjb21wYXJlZCB0byBvdGhlciBwbGF5ZXJzLjwvcD48cD5UaGlzIHdhcyBoYXJkIHdvcmssIGVzcGVjaWFsbHkgZHVlIHRvIHRoZSBsaW1pdGVkIHRpbWUgZnJhbWUgd2hpY2ggaW52b2x2ZWQgYSBmZXcgfjE4IGhvdXIgc2Vzc2lvbnMgYW5kIG9uZSAzNiBob3VyIHNlc3Npb24hIChXZSBoYWQgcm91Z2hseSB0d28gd2Vla3MgdG8gaGFjayBvbiBvdXIgZmluYWwgcHJvamVjdHMpLiBIb3dldmVyLCBhcyBtdWNoIGFzIGl0IHdhcyBoYXJkd29yayBpdCB3YXMgYSBsb3Qgb2YgZnVuITwvcD48cD5JIGxlYXJuZWQgYSBoZWFwIGFib3V0IFJ1Ynkgb24gUmFpbHMgaW4gdGhpcyB0aW1lLCBwYXJ0aWN1bGFybHkgc2luY2UgdGhlcmUgd2VyZSBzb21lIGNvbXBsZXggcmVsYXRpb25zaGlwcyBnb2luZyBvbiBiZXR3ZWVuIHRoZSBkaWZmZXJlbnQgcmVzb3VyY2VzIGFuZCBlbnRpdGllcyBpbiB0aGlzIGdhbWUuPC9wPjxwPlRoZSBwcm9qZWN0IGhhcyBzaW5jZSBiZWVuIGxhaWQgdG8gcmVzdCBidXQgSSBkbyBzdGlsbCBhaW0gdG8gZmluZCB0aGUgdGltZSB0byByZS1idWlsZCBpdCB3aXRoIHNvbWUgZXh0cmEgZmVhdHVyZXMsIHN1Y2ggYXMgdXNpbmcgd2Vic29ja2V0cyBhbmQgSFRNTDUgY2FudmFzISAtIGl0XFwnZCBiZSBhIGZ1biBzaWRlIHByb2plY3QgdG8gaGF2ZSBvbiB0aGUgZ28hPC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiBYWCxcblx0XHQvLyBcdHRpdGxlOiAnUml2ZXIgSXNsYW5kIENoZWNrb3V0Jyxcblx0XHQvLyBcdHNsdWc6ICdyaXZlci1pc2xhbmQtY2hlY2tvdXQnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0Ly8gXHRcdCdjIyc6IFsnUmF6b3InLCAnLm5ldCddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0YXBpczogWydHb29nbGUgTWFwcyddLFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9yaXZlci1pc2xhbmQtY2hlY2tvdXQucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ05pbnRlbmRvIEN1c3RvbWVyIFNlcnZpY2UnLFxuXHRcdC8vIFx0c2x1ZzogJ25pbnRlbmRvLWN1c3RvbWVyLXNlcnZpY2UnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0Ly8gXHRcdHBocDogWydTaWx2ZXJTdHJpcGUnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvbmludGVuZG8tY3VzdG9tZXItc2VydmljZS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiBYWCxcblx0XHQvLyBcdHRpdGxlOiAnSnVyYSBUYXN0aXZhbCAyMDE1Jyxcblx0XHQvLyBcdHNsdWc6ICdqdXJhLXRhc3RpdmFsLTIwMTUnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5JywgJ0dydW50J11cblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL2p1cmEtdGFzdGl2YWwtMjAxNS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiBYWCxcblx0XHQvLyBcdHRpdGxlOiAnV2h5dGUgJiBNYWNrYXknLFxuXHRcdC8vIFx0c2x1ZzogJ3doeXRlLWFuZC1tYWNrYXknLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5JywgJ0dydW50JywgJ1Nrcm9sbHInXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvd2h5dGUtYW5kLW1hY2theS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiBYWCxcblx0XHQvLyBcdHRpdGxlOiAnQ2FwcmlTdW4gTWluaW9ucycsXG5cdFx0Ly8gXHRzbHVnOiAnY2FwcmlTdW4tbWluaW9ucycsXG5cdFx0Ly8gXHRzdGFjazoge1xuXHRcdC8vIFx0XHRqczogWydqUXVlcnknXSxcblx0XHQvLyBcdFx0cGhwOiBbJ1NpbHZlclN0cmlwZSddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9jYXByaVN1bi1taW5pb25zLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD48L3A+J1xuXHRcdC8vIH0se1xuXHRcdC8vIFx0SUQ6IDUsXG5cdFx0Ly8gXHR0aXRsZTogJ0dyZWVudmFsZSBQb3RhdG9wYWxzJyxcblx0XHQvLyBcdHNsdWc6ICdncmVlbnZhbGUtcG90YXRvcGFscycsXG5cdFx0Ly8gXHRzdGFjazoge1xuXHRcdC8vIFx0XHRqczogWydqUXVlcnknXSxcblx0XHQvLyBcdFx0cGhwOiBbJ1NpbHZlclN0cmlwZSddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9ncmVlbnZhbGUucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0fVxuXG5dO1xuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgXz13aW5kb3cuXztcblxudmFyIEFwcFJvdXRlciA9IHdpbmRvdy5CYWNrYm9uZS5Sb3V0ZXIuZXh0ZW5kKHtcblx0cm91dGVzOiB7XG5cdFx0Jyc6ICdyb290Jyxcblx0XHQnYmxvZygvKSgvOnBvc3QpJzogJ2Jsb2cnLFxuXHRcdCdwcm9qZWN0cygvOnByb2plY3QpJzogJ3Byb2plY3RzJyxcblx0XHQnY29udGFjdCc6ICdjb250YWN0Jyxcblx0XHQnYWJvdXQnOiAnYWJvdXQnXG5cdH0sXG5cblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oY29udGV4dCl7XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpyZWRpcmVjdCcsIHRoaXMucmVkaXJlY3QpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncm91dGVyOmdvVG9DdXJyZW50Q29udGVudCcsIHRoaXMuZ29Ub0N1cnJlbnRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpnb1RvTGFuZGluZycsIHRoaXMuZ29Ub0xhbmRpbmcpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncm91dGVyOm5leHRDb250ZW50JywgdGhpcy5nb1RvTmV4dENvbnRlbnQpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncm91dGVyOnByZXZDb250ZW50JywgdGhpcy5nb1RvUHJldkNvbnRlbnQpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncm91dGVyOnNldEN1cnJlbnRDb250ZW50JywgdGhpcy5zZXRDdXJyZW50Q29udGVudCk7XG5cblx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmRlZmF1bHRDb250ZW50Um91dGUoKTtcblx0XHRcblx0XHR0aGlzLm9uKCdyb3V0ZTpyb290JyAsZnVuY3Rpb24oKXtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmludHJvLmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MuaW50cm8gPSBuZXcgY29udGV4dC52aWV3cy5pbnRybyh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQuaW50cm9QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXMuaW50cm9cblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93SW50cm8nKTtcblxuICBcdFx0Ly8gbmV3IGNvbnRleHQudmlld3MuaW50cm8oe1xuICBcdFx0Ly8gXHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXMuaW50cm9cbiAgXHRcdC8vIH0pO1xuICBcdFx0Ly8gJCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpO1xuXG4gIFx0XHR0aGlzLmxhc3RSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6YmxvZycgLGZ1bmN0aW9uKHNsdWcpe1xuXG5cdFx0XHQvLyBPbmx5IHRyYW5zaXRpb24gaWYgdGhlIGN1cnJlbnQgdmlldyBpcyBub3QgY2hhbmdpbmcgKGJ1dCB0aGUgcmVzb3VyY2UgaXMpLlxuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSAodGhpcy5jdXJyZW50Q29udGVudFZpZXcgPT09IGNvbnRleHQudmlld3MuYmxvZyAmJiB0aGlzLmxhc3RSb3V0ZSAhPT0gJycpO1xuXG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuYmxvZy5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cgPSBuZXcgY29udGV4dC52aWV3cy5ibG9nKHtcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzWydibG9nLXBvc3QnXVxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5ibG9nLnJlbmRlcih7c2x1Zzogc2x1ZywgdHJhbnNpdGlvbjogdHJhbnNpdGlvbn0pO1xuICBcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6bWVzc2FnZScsICc8cD5FZWssIGxvdHMgb2YgSXBzdW0hIElcXCdsbCBzdGFydCB3cml0aW5nIGFjdHVhbCBwb3N0cyBvbmNlIHRoaXMgc2l0ZSBpcyBmaXhlZCB1cCBwcm9wZXJseS4gRm9yIG5vdywgZW5qb3kgYWxsIHRoZSB2YXJpb3VzIGlwc3VtcyE8L3A+Jyk7XG5cblx0XHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuYmxvZztcblx0XHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6cHJvamVjdHMnICxmdW5jdGlvbihzbHVnKXtcblx0XHRcdC8vIE9ubHkgdHJhbnNpdGlvbiBpZiB0aGUgY3VycmVudCB2aWV3IGlzIG5vdCBjaGFuZ2luZyAoYnV0IHRoZSByZXNvdXJjZSBpcykuXG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9ICh0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9PT0gY29udGV4dC52aWV3cy5wcm9qZWN0cyAmJiB0aGlzLmxhc3RSb3V0ZSAhPT0gJycpO1xuXG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MucHJvamVjdHMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5wcm9qZWN0cyA9IG5ldyBjb250ZXh0LnZpZXdzLnByb2plY3RzKHtcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLnByb2plY3QsXG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb250ZXh0LnZpZXdzLnByb2plY3RzLnJlbmRlcih7c2x1Zzogc2x1ZywgdHJhbnNpdGlvbjogdHJhbnNpdGlvbn0pO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmxhc3RSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLnByb2plY3RzO1xuICBcdFx0XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdyb3V0ZTpjb250YWN0JyAsZnVuY3Rpb24oKXtcblx0XHRcdGlmICghY29udGV4dC52aWV3cy5jb250YWN0LmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MuY29udGFjdCA9IG5ldyBjb250ZXh0LnZpZXdzLmNvbnRhY3Qoe1xuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXMuY29udGFjdFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5jb250YWN0LnJlbmRlcigpO1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5jb250YWN0O1xuICBcdFx0XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdyb3V0ZTphYm91dCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuYWJvdXQuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5hYm91dCA9IG5ldyBjb250ZXh0LnZpZXdzLmFib3V0KHtcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmFib3V0XG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG4gIFx0XHRjb250ZXh0LnZpZXdzLmFib3V0LnJlbmRlcigpO1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5hYm91dDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6ZGVmYXVsdFJvdXRlJywgZnVuY3Rpb24oKXtcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG5cblx0fSxcblx0c2V0Q3VycmVudENvbnRlbnQ6IGZ1bmN0aW9uKGNvbnRlbnQpe1xuXHRcdGlmIChjb250ZW50LnZpZXcpIHt0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRlbnQudmlldzsgfVxuXHRcdGlmIChjb250ZW50LnJvdXRlKSB7dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSBjb250ZW50LnJvdXRlOyB9XG5cdH0sXG5cdGdvVG9MYW5kaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSgnJywge3RyaWdnZXI6IHRydWV9KTtcblx0fSxcblx0Z29Ub0N1cnJlbnRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSh0aGlzLmN1cnJlbnRDb250ZW50Um91dGUsIHt0cmlnZ2VyOiB0cnVlfSk7XG5cdH0sXG5cdGdvVG9QcmV2Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdGlmICghXy5pc0Z1bmN0aW9uKHRoaXMuY3VycmVudENvbnRlbnRWaWV3LmdldFByZXZNb2RlbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dmFyIHJvdXRlID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcucHJldlJvdXRlKCk7XG5cdFx0aWYgKCFyb3V0ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR0aGlzLm5hdmlnYXRlKHJvdXRlKTtcblx0fSxcblx0Z29Ub05leHRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCFfLmlzRnVuY3Rpb24odGhpcy5jdXJyZW50Q29udGVudFZpZXcuZ2V0TmV4dE1vZGVsKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR2YXIgcm91dGUgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5uZXh0Um91dGUoKTtcblx0XHRpZiAoIXJvdXRlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXHR9LFxuXHRkZWZhdWx0Q29udGVudFJvdXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICcjL2Fib3V0Jztcblx0fSxcblx0cmVkaXJlY3Q6IGZ1bmN0aW9uKHJvdXRlKXtcblx0XHR0aGlzLm5hdmlnYXRlKHJvdXRlLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFJvdXRlcjsiLCJ2YXIgZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7IFxuXG4gdmFyIEhhbmRsZWJhcnMgPSB3aW5kb3cuSGFuZGxlYmFyczsgXG5cbnRoaXNbXCJKU1RcIl0gPSB0aGlzW1wiSlNUXCJdIHx8IHt9O1xuXG50aGlzW1wiSlNUXCJdW1wiYWJvdXRcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBhYm91dFxcXCI+XFxuXHQ8aDI+YWJvdXQ8L2gyPlxcbjwvZGl2PlwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImJsb2ctcG9zdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snd2l0aCddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXR0cmlidXRlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcIndpdGhcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGJ1ZmZlciA9IFwiXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFx0XHRcXG5cdFx0XHRcdFx0XHRcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2PlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlxcblx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgcGxhY2Vob2xkZXItdmlld1xcXCI+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImgyLXRpdGxlXFxcIj48L2Rpdj5cXG5cdFx0PHVsPjwvdWw+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXI7IGNvbG9yOiAjOTk5XFxcIj5Mb2FkaW5nLi4uPC9oMj5cXG5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMTtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmF0dHJpYnV0ZXMgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDQsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IHJldHVybiBzdGFjazE7IH1cbiAgZWxzZSB7IHJldHVybiAnJzsgfVxuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImNvbnRhY3RcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBjb250YWN0XFxcIj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cXG5cdFx0PGRpdiBjbGFzcz1cXFwic21hbGwtMTIgbGFyZ2UtNFxcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwiY29ubmVjdFxcXCI+XFxuXHRcdFx0XHRcXG5cdFx0XHRcdDxoMj5Db25uZWN0PC9oMj5cXG5cdFx0XHRcdDx1bCBjbGFzcz1cXFwic29jaWFsLWljb25zXFxcIj5cXG5cdFx0XHRcdFx0PGxpPlxcblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL1NwZW5fVGF5bG9yXFxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbiB0d2l0dGVyXFxcIj5cXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXIgbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5Ud2l0dGVyPC9wPlxcblx0XHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PC9hPlxcblx0XHRcdFx0XHQ8L2xpPlxcblx0XHRcdFx0XHQ8bGk+XFxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9TcGVuVUtcXFwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiYnV0dG9uIGdpdGh1YlxcXCI+XFxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVxcXCJmYSBmYS1naXRodWIgbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5HaXRIdWI8L3A+XFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2E+XFxuXHRcdFx0XHRcdDwvbGk+XFxuXHRcdFx0XHRcdDxsaT5cXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cDovL3VrLmxpbmtlZGluLmNvbS9pbi9zcGVudGF5bG9yXFxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbiBsaW5rZWQtaW5cXFwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW4gbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5MaW5rZWRJbjwvcD5cXG5cdFx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDwvYT5cXG5cdFx0XHRcdFx0PC9saT5cXG5cdFx0XHRcdDwvdWw+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblxcblx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMiBsYXJnZS04XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzYXktaGVsbG9cXFwiPlxcblx0XHRcdFx0PGgyPlNheSBIZWxsbyE8L2gyPlxcblx0XHRcdFx0PGZvcm0gY2xhc3M9XFxcImNvbnRhY3QtZm9ybVxcXCI+XFxuXFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkc1xcXCI+XFxuXFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic3VibWlzc2lvbi1lcnJvclxcXCI+XFxuXHRcdFx0XHRcdFx0XHRZaWtlcyEgU29tZXRoaW5nIHdlbnQgd3JvbmcsIHRyeSBhZ2FpbiFcXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVxcXCJmYSBmYS1jbG9zZSByaWdodFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG5cdFx0XHRcdCAgICBcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBpZD1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWVcXFwiLz5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuXHRcdFx0XHQgICAgXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIvPlxcblx0XHRcdFx0ICAgIDwvZGl2Plxcblxcblxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG5cdFx0XHRcdCAgICBcdDx0ZXh0YXJlYSBuYW1lPVxcXCJtZXNzYWdlXFxcIiBpZD1cXFwibWVzc2FnZVxcXCIgcm93cz1cXFwiNlxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXQncyB1cD9cXFwiPjwvdGV4dGFyZWE+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwidGhhbmtzLW1lc3NhZ2VcXFwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aDI+QXdlc29tZSE8L2gyPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5UaGFua3MgZm9yIGdldHRpbiBpbiB0b3VjaCE8YnI+IEknbGwgYmUgc3VyZSB0byBnZXQgYmFjayB0byB5b3Ugc29vbiE8L3A+XFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0ICAgIFxcblxcblx0XHRcdCAgICA8YnV0dG9uIGNsYXNzPVxcXCJzdWJtaXRcXFwiIHZhbHVlPVxcXCJTZW5kXFxcIj48c3Bhbj5GaXJlIGF3YXkhPC9zcGFuPjxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cXFwiPjwvaT48aSBjbGFzcz1cXFwiZmEgZmEtdGh1bWJzLXVwXFxcIj48L2k+PC9idXR0b24+XFxuXHRcdFx0XHQ8L2Zvcm0+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblxcblx0XHQ8L2Rpdj5cXG5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiaW50cm9cIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8dWwgY2xhc3M9XFxcInNvY2lhbC1pY29uc1xcXCI+XFxuXHQ8bGk+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vU3Blbl9UYXlsb3JcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyXFxcIj48L2k+PC9hPjwvbGk+XFxuXHQ8bGk+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9TcGVuVUtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1naXRodWJcXFwiPjwvaT48L2E+PC9saT5cXG5cdDxsaT48YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cDovL3VrLmxpbmtlZGluLmNvbS9pbi9zcGVudGF5bG9yXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW5cXFwiPjwvaT48L2E+PC9saT5cXG48L3VsPlxcblxcbjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXFxuXHQgd2lkdGg9XFxcIjEwMCVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAwIDE2MFxcXCIgZW5hYmxlLWJhY2tncm91bmQ9XFxcIm5ldyAwIDAgMTAwMCAxNjBcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6IDkwMHB4OyBtYXJnaW4tYm90dG9tOiA0MHB4O1xcXCI+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNOTAuNDc5LDk5LjM5OGMwLDYuMTk4LTEuNTcyLDExLjcwMS00LjcxNywxNi41MDljLTMuMTQ1LDQuODA5LTcuNjgsOC41NDUtMTMuNjA0LDExLjIxMVxcblx0XHRcdGMtNS45MjUsMi42NjYtMTIuODc1LDMuOTk5LTIwLjg1LDMuOTk5Yy02LjY1NCwwLTEyLjIzNi0wLjQ2OC0xNi43NDgtMS40MDFzLTkuMjA2LTIuNTYzLTE0LjA4Mi00Ljg4OHYtMjQuMDYyXFxuXHRcdFx0YzUuMTQ5LDIuNjQ0LDEwLjUwNCw0LjcwNiwxNi4wNjQsNi4xODdjNS41NiwxLjQ4MSwxMC42NjQsMi4yMjIsMTUuMzEyLDIuMjIyYzQuMDEsMCw2Ljk0OS0wLjY5NCw4LjgxOC0yLjA4NVxcblx0XHRcdGMxLjg2OC0xLjM5LDIuODAzLTMuMTc5LDIuODAzLTUuMzY2YzAtMS4zNjctMC4zNzYtMi41NjMtMS4xMjgtMy41ODlzLTEuOTYtMi4wNjItMy42MjMtMy4xMVxcblx0XHRcdGMtMS42NjQtMS4wNDgtNi4wOTYtMy4xODktMTMuMjk2LTYuNDI2Yy02LjUxOC0yLjk2Mi0xMS40MDUtNS44MzMtMTQuNjYzLTguNjEzYy0zLjI1OS0yLjc3OS01LjY3NC01Ljk3LTcuMjQ2LTkuNTdcXG5cdFx0XHRjLTEuNTcyLTMuNi0yLjM1OC03Ljg2MS0yLjM1OC0xMi43ODNjMC05LjIwNSwzLjM1LTE2LjM4MywxMC4wNDktMjEuNTMzYzYuNjk5LTUuMTQ5LDE1LjkwNC03LjcyNSwyNy42MTctNy43MjVcXG5cdFx0XHRjMTAuMzQ1LDAsMjAuODk1LDIuMzkzLDMxLjY1LDcuMTc4TDgyLjIwOCw1Ni40Yy05LjM0My00LjI4My0xNy40MDktNi40MjYtMjQuMTk5LTYuNDI2Yy0zLjUxLDAtNi4wNjIsMC42MTUtNy42NTYsMS44NDZcXG5cdFx0XHRjLTEuNTk2LDEuMjMtMi4zOTMsMi43NTgtMi4zOTMsNC41OGMwLDEuOTYsMS4wMTQsMy43MTUsMy4wNDIsNS4yNjRjMi4wMjcsMS41NSw3LjUzLDQuMzc1LDE2LjUwOSw4LjQ3N1xcblx0XHRcdGM4LjYxMywzLjg3NCwxNC41OTUsOC4wMzIsMTcuOTQ0LDEyLjQ3NlM5MC40NzksOTIuNjU0LDkwLjQ3OSw5OS4zOTh6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzQzQkZCNFxcXCIgZD1cXFwiTTkwLjQ3OSw4OS4zOThjMCw2LjE5OC0xLjU3MiwxMS43MDEtNC43MTcsMTYuNTA5Yy0zLjE0NSw0LjgwOS03LjY4LDguNTQ1LTEzLjYwNCwxMS4yMTFcXG5cdFx0XHRjLTUuOTI1LDIuNjY2LTEyLjg3NSwzLjk5OS0yMC44NSwzLjk5OWMtNi42NTQsMC0xMi4yMzYtMC40NjgtMTYuNzQ4LTEuNDAxcy05LjIwNi0yLjU2My0xNC4wODItNC44ODhWOTAuNzY2XFxuXHRcdFx0YzUuMTQ5LDIuNjQ0LDEwLjUwNCw0LjcwNiwxNi4wNjQsNi4xODdjNS41NiwxLjQ4MSwxMC42NjQsMi4yMjIsMTUuMzEyLDIuMjIyYzQuMDEsMCw2Ljk0OS0wLjY5NCw4LjgxOC0yLjA4NVxcblx0XHRcdGMxLjg2OC0xLjM5LDIuODAzLTMuMTc5LDIuODAzLTUuMzY2YzAtMS4zNjctMC4zNzYtMi41NjMtMS4xMjgtMy41ODlzLTEuOTYtMi4wNjItMy42MjMtMy4xMVxcblx0XHRcdGMtMS42NjQtMS4wNDgtNi4wOTYtMy4xODktMTMuMjk2LTYuNDI2Yy02LjUxOC0yLjk2Mi0xMS40MDUtNS44MzMtMTQuNjYzLTguNjEzYy0zLjI1OS0yLjc3OS01LjY3NC01Ljk3LTcuMjQ2LTkuNTdcXG5cdFx0XHRjLTEuNTcyLTMuNi0yLjM1OC03Ljg2MS0yLjM1OC0xMi43ODNjMC05LjIwNSwzLjM1LTE2LjM4MywxMC4wNDktMjEuNTMzYzYuNjk5LTUuMTQ5LDE1LjkwNC03LjcyNSwyNy42MTctNy43MjVcXG5cdFx0XHRjMTAuMzQ1LDAsMjAuODk1LDIuMzkzLDMxLjY1LDcuMTc4TDgyLjIwOCw0Ni40Yy05LjM0My00LjI4My0xNy40MDktNi40MjYtMjQuMTk5LTYuNDI2Yy0zLjUxLDAtNi4wNjIsMC42MTUtNy42NTYsMS44NDZcXG5cdFx0XHRjLTEuNTk2LDEuMjMtMi4zOTMsMi43NTgtMi4zOTMsNC41OGMwLDEuOTYsMS4wMTQsMy43MTUsMy4wNDIsNS4yNjRjMi4wMjcsMS41NSw3LjUzLDQuMzc1LDE2LjUwOSw4LjQ3N1xcblx0XHRcdGM4LjYxMywzLjg3NCwxNC41OTUsOC4wMzIsMTcuOTQ0LDEyLjQ3NlM5MC40NzksODIuNjU0LDkwLjQ3OSw4OS4zOTh6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTE3OC40NTgsNjEuNTk2YzAsMTEuMTY2LTMuMjkzLDE5Ljc5LTkuODc4LDI1Ljg3NGMtNi41ODYsNi4wODQtMTUuOTM5LDkuMTI2LTI4LjA2Miw5LjEyNmgtNy41ODh2MzMuMTU0XFxuXHRcdFx0aC0yNy4wMDJWMjkuODA5aDM0LjU5YzEyLjYyMywwLDIyLjEwMywyLjc1OCwyOC40MzgsOC4yNzFDMTc1LjI5LDQzLjU5NSwxNzguNDU4LDUxLjQzNCwxNzguNDU4LDYxLjU5NnogTTEzMi45MzEsNzQuNTg0aDQuOTIyXFxuXHRcdFx0YzQuMDU2LDAsNy4yOC0xLjEzOSw5LjY3My0zLjQxOGMyLjM5My0yLjI3OCwzLjU4OS01LjQyMywzLjU4OS05LjQzNGMwLTYuNzQ0LTMuNzM3LTEwLjExNy0xMS4yMTEtMTAuMTE3aC02Ljk3M1Y3NC41ODR6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiI0VFRUI1RlxcXCIgZD1cXFwiTTE3OC40NTgsNTEuNTk2YzAsMTEuMTY2LTMuMjkzLDE5Ljc5LTkuODc4LDI1Ljg3NGMtNi41ODYsNi4wODQtMTUuOTM5LDkuMTI2LTI4LjA2Miw5LjEyNmgtNy41ODh2MzMuMTU0XFxuXHRcdFx0aC0yNy4wMDJWMTkuODA5aDM0LjU5YzEyLjYyMywwLDIyLjEwMywyLjc1OCwyOC40MzgsOC4yNzFDMTc1LjI5LDMzLjU5NSwxNzguNDU4LDQxLjQzNCwxNzguNDU4LDUxLjU5NnogTTEzMi45MzEsNjQuNTg0aDQuOTIyXFxuXHRcdFx0YzQuMDU2LDAsNy4yOC0xLjEzOSw5LjY3My0zLjQxOGMyLjM5My0yLjI3OCwzLjU4OS01LjQyMywzLjU4OS05LjQzNGMwLTYuNzQ0LTMuNzM3LTEwLjExNy0xMS4yMTEtMTAuMTE3aC02Ljk3M1Y2NC41ODR6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTI1My43MjIsMTI5Ljc1aC01OS4zMzZWMjkuODA5aDU5LjMzNnYyMS42N2gtMzIuMzM0djE1LjcyM2gyOS45NDF2MjEuNjdoLTI5Ljk0MXYxOC44NjdoMzIuMzM0VjEyOS43NXpcXFwiXFxuXHRcdFx0Lz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjRjE1QzZGXFxcIiBkPVxcXCJNMjUzLjcyMiwxMTkuNzVoLTU5LjMzNlYxOS44MDloNTkuMzM2djIxLjY3aC0zMi4zMzR2MTUuNzIzaDI5Ljk0MXYyMS42N2gtMjkuOTQxdjE4Ljg2N2gzMi4zMzRWMTE5Ljc1elxcXCJcXG5cdFx0XHQvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk0zNjYuMzc4LDEyOS43NWgtMzUuNDFsLTM2LjUwNC03MC40MWgtMC42MTVjMC44NjUsMTEuMDc0LDEuMjk5LDE5LjUyOCwxLjI5OSwyNS4zNjF2NDUuMDQ5aC0yMy45MjZcXG5cdFx0XHRWMjkuODA5aDM1LjI3M2wzNi4zNjcsNjkuNDUzaDAuNDFjLTAuNjM5LTEwLjA3MS0wLjk1Ny0xOC4xNi0wLjk1Ny0yNC4yNjhWMjkuODA5aDI0LjA2MlYxMjkuNzV6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiI0VFRUI1RlxcXCIgZD1cXFwiTTM2Ni4zNzgsMTE5Ljc1aC0zNS40MWwtMzYuNTA0LTcwLjQxaC0wLjYxNWMwLjg2NSwxMS4wNzQsMS4yOTksMTkuNTI4LDEuMjk5LDI1LjM2MXY0NS4wNDloLTIzLjkyNlxcblx0XHRcdFYxOS44MDloMzUuMjczbDM2LjM2Nyw2OS40NTNoMC40MWMtMC42MzktMTAuMDcxLTAuOTU3LTE4LjE2LTAuOTU3LTI0LjI2OFYxOS44MDloMjQuMDYyVjExOS43NXpcXFwiLz5cXG5cdDwvZz5cXG48L2c+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNNDY4LjQzOCwxMjkuNzVoLTI3LjAwMlY1MS44ODloLTI0LjQwNHYtMjIuMDhoNzUuNzQydjIyLjA4aC0yNC4zMzZWMTI5Ljc1elxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM0M0JGQjRcXFwiIGQ9XFxcIk00NjguNDM4LDExOS43NWgtMjcuMDAyVjQxLjg4OWgtMjQuNDA0di0yMi4wOGg3NS43NDJ2MjIuMDhoLTI0LjMzNlYxMTkuNzV6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTU2OC4zOCwxMjkuNzVsLTQuOTIyLTE4LjczaC0zMi40NzFsLTUuMDU5LDE4LjczaC0yOS42NjhsMzIuNjA3LTEwMC4zNTJoMzYuMDI1bDMzLjAxOCwxMDAuMzUySDU2OC4zOHpcXG5cdFx0XHQgTTU1Ny44NTMsODguODcxbC00LjMwNy0xNi40MDZjLTEuMDAzLTMuNjQ2LTIuMjIyLTguMzYyLTMuNjU3LTE0LjE1Yy0xLjQzNi01Ljc4Ny0yLjM4Mi05LjkzNS0yLjgzNy0xMi40NDFcXG5cdFx0XHRjLTAuNDEsMi4zMjQtMS4yMiw2LjE1Mi0yLjQyNywxMS40ODRjLTEuMjA4LDUuMzMyLTMuODg2LDE1LjgzNy04LjAzMiwzMS41MTRINTU3Ljg1M3pcXFwiLz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjRUVFQjVGXFxcIiBkPVxcXCJNNTY4LjM4LDExOS43NWwtNC45MjItMTguNzNoLTMyLjQ3MWwtNS4wNTksMTguNzNoLTI5LjY2OGwzMi42MDctMTAwLjM1MmgzNi4wMjVsMzMuMDE4LDEwMC4zNTJINTY4LjM4elxcblx0XHRcdCBNNTU3Ljg1Myw3OC44NzFsLTQuMzA3LTE2LjQwNmMtMS4wMDMtMy42NDYtMi4yMjItOC4zNjItMy42NTctMTQuMTVjLTEuNDM2LTUuNzg3LTIuMzgyLTkuOTM1LTIuODM3LTEyLjQ0MVxcblx0XHRcdGMtMC40MSwyLjMyNC0xLjIyLDYuMTUyLTIuNDI3LDExLjQ4NGMtMS4yMDgsNS4zMzItMy44ODYsMTUuODM3LTguMDMyLDMxLjUxNEg1NTcuODUzelxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk02NDQuMzk2LDY2Ljg1OWwxNy4yMjctMzcuMDUxaDI5LjI1OGwtMzIuODgxLDYwLjkwOHYzOS4wMzNoLTI3LjIwN1Y5MS41MzdsLTMyLjg4MS02MS43MjloMjkuMzk1XFxuXHRcdFx0TDY0NC4zOTYsNjYuODU5elxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiNGMTVDNkZcXFwiIGQ9XFxcIk02NDQuMzk2LDU2Ljg1OWwxNy4yMjctMzcuMDUxaDI5LjI1OGwtMzIuODgxLDYwLjkwOHYzOS4wMzNoLTI3LjIwN1Y4MS41MzdsLTMyLjg4MS02MS43MjloMjkuMzk1XFxuXHRcdFx0TDY0NC4zOTYsNTYuODU5elxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48Zz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjNjY2XFxcIiBvcGFjaXR5PVxcXCIwLjVcXFwiIGQ9XFxcIk03MDEuNjgxLDEyOS43NVYyOS44MDloMjcuMDAydjc4LjEzNWgzOC40ODZ2MjEuODA3SDcwMS42ODF6XFxcIi8+XFxuXHQ8L2c+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzQzQkZCNFxcXCIgZD1cXFwiTTcwMS42ODEsMTE5Ljc1VjE5LjgwOWgyNy4wMDJ2NzguMTM1aDM4LjQ4NnYyMS44MDdINzAxLjY4MXpcXFwiLz5cXG5cdDwvZz5cXG48L2c+XFxuPGc+XFxuXHQ8Zz5cXG5cdFx0PHBhdGggZmlsbD1cXFwiIzY2NlxcXCIgb3BhY2l0eT1cXFwiMC41XFxcIiBkPVxcXCJNODc2LjY4MSw3OS42NDNjMCwxNi44MTYtNC4xMjUsMjkuNi0xMi4zNzMsMzguMzVjLTguMjQ5LDguNzUtMjAuMzI2LDEzLjEyNS0zNi4yMywxMy4xMjVcXG5cdFx0XHRjLTE1LjY3OCwwLTI3LjY5Ny00LjM5Ny0zNi4wNi0xMy4xOTNjLTguMzYzLTguNzk1LTEyLjU0NC0yMS42MDItMTIuNTQ0LTM4LjQxOGMwLTE2LjYzNCw0LjE1OC0yOS4zMzcsMTIuNDc2LTM4LjExXFxuXHRcdFx0YzguMzE2LTguNzcyLDIwLjQwNS0xMy4xNTksMzYuMjY1LTEzLjE1OWMxNS45MDQsMCwyNy45NTksNC4zNTMsMzYuMTYyLDEzLjA1N0M4NzIuNTc5LDQ5Ljk5OCw4NzYuNjgxLDYyLjc4MSw4NzYuNjgxLDc5LjY0M3pcXG5cdFx0XHQgTTgwNy45MTEsNzkuNjQzYzAsMTkuMzIzLDYuNzIyLDI4Ljk4NCwyMC4xNjYsMjguOTg0YzYuODM2LDAsMTEuOTA1LTIuMzQ3LDE1LjIxLTcuMDQxYzMuMzA0LTQuNjkzLDQuOTU2LTEyLjAwOCw0Ljk1Ni0yMS45NDNcXG5cdFx0XHRjMC05Ljk4LTEuNjc1LTE3LjM1Mi01LjAyNC0yMi4xMTRjLTMuMzUtNC43NjItOC4zNTItNy4xNDQtMTUuMDA1LTcuMTQ0QzgxNC42NzksNTAuMzg1LDgwNy45MTEsNjAuMTM4LDgwNy45MTEsNzkuNjQzelxcXCIvPlxcblx0PC9nPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiNFRUVCNUZcXFwiIGQ9XFxcIk04NzYuNjgxLDY5LjY0M2MwLDE2LjgxNi00LjEyNSwyOS42LTEyLjM3MywzOC4zNWMtOC4yNDksOC43NS0yMC4zMjYsMTMuMTI1LTM2LjIzLDEzLjEyNVxcblx0XHRcdGMtMTUuNjc4LDAtMjcuNjk3LTQuMzk3LTM2LjA2LTEzLjE5M2MtOC4zNjMtOC43OTUtMTIuNTQ0LTIxLjYwMi0xMi41NDQtMzguNDE4YzAtMTYuNjM0LDQuMTU4LTI5LjMzNywxMi40NzYtMzguMTFcXG5cdFx0XHRjOC4zMTYtOC43NzIsMjAuNDA1LTEzLjE1OSwzNi4yNjUtMTMuMTU5YzE1LjkwNCwwLDI3Ljk1OSw0LjM1MywzNi4xNjIsMTMuMDU3Qzg3Mi41NzksMzkuOTk4LDg3Ni42ODEsNTIuNzgxLDg3Ni42ODEsNjkuNjQzelxcblx0XHRcdCBNODA3LjkxMSw2OS42NDNjMCwxOS4zMjMsNi43MjIsMjguOTg0LDIwLjE2NiwyOC45ODRjNi44MzYsMCwxMS45MDUtMi4zNDcsMTUuMjEtNy4wNDFjMy4zMDQtNC42OTMsNC45NTYtMTIuMDA4LDQuOTU2LTIxLjk0M1xcblx0XHRcdGMwLTkuOTgtMS42NzUtMTcuMzUyLTUuMDI0LTIyLjExNGMtMy4zNS00Ljc2Mi04LjM1Mi03LjE0NC0xNS4wMDUtNy4xNDRDODE0LjY3OSw0MC4zODUsODA3LjkxMSw1MC4xMzgsODA3LjkxMSw2OS42NDN6XFxcIi8+XFxuXHQ8L2c+XFxuPC9nPlxcbjxnPlxcblx0PGc+XFxuXHRcdDxwYXRoIGZpbGw9XFxcIiM2NjZcXFwiIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTkyMS43MjksOTMuMzgzdjM2LjM2N2gtMjcuMDAyVjI5LjgwOWgzMi43NDRjMjcuMTYxLDAsNDAuNzQyLDkuODQ0LDQwLjc0MiwyOS41MzFcXG5cdFx0XHRjMCwxMS41NzYtNS42NTEsMjAuNTMxLTE2Ljk1MywyNi44NjVsMjkuMTIxLDQzLjU0NWgtMzAuNjI1bC0yMS4xOTEtMzYuMzY3SDkyMS43Mjl6IE05MjEuNzI5LDczLjA4aDUuMDU5XFxuXHRcdFx0YzkuNDM0LDAsMTQuMTUtNC4xNywxNC4xNS0xMi41MWMwLTYuODgxLTQuNjI2LTEwLjMyMi0xMy44NzctMTAuMzIyaC01LjMzMlY3My4wOHpcXFwiLz5cXG5cdDwvZz5cXG5cdDxnPlxcblx0XHQ8cGF0aCBmaWxsPVxcXCIjRjE1QzZGXFxcIiBkPVxcXCJNOTIxLjcyOSw4My4zODN2MzYuMzY3aC0yNy4wMDJWMTkuODA5aDMyLjc0NGMyNy4xNjEsMCw0MC43NDIsOS44NDQsNDAuNzQyLDI5LjUzMVxcblx0XHRcdGMwLDExLjU3Ni01LjY1MSwyMC41MzEtMTYuOTUzLDI2Ljg2NWwyOS4xMjEsNDMuNTQ1aC0zMC42MjVsLTIxLjE5MS0zNi4zNjdIOTIxLjcyOXogTTkyMS43MjksNjMuMDhoNS4wNTlcXG5cdFx0XHRjOS40MzQsMCwxNC4xNS00LjE3LDE0LjE1LTEyLjUxYzAtNi44ODEtNC42MjYtMTAuMzIyLTEzLjg3Ny0xMC4zMjJoLTUuMzMyVjYzLjA4elxcXCIvPlxcblx0PC9nPlxcbjwvZz5cXG48L3N2Zz5cXG5cXG48ZGl2IGNsYXNzPVxcXCJwYWdlLWljb25zLXdyYXBwZXJcXFwiPlxcblxcblxcblx0PGRpdiBjbGFzcz1cXFwicGFnZS1pY29uLXdyYXBwZXJcXFwiPlxcblx0XHQ8YSBocmVmPVxcXCIjL3Byb2plY3RzXFxcIiBjbGFzcz1cXFwicHJvamVjdHNcXFwiPlxcblx0XHRcdDxpbWcgY2xhc3M9XFxcInBhZ2UtaWNvblxcXCIgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzLWNvZGUucG5nXFxcIj5cXG5cdFx0XHQ8aDQ+cHJvamVjdHM8L2g0Plxcblx0XHQ8L2E+XFxuXHQ8L2Rpdj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcInBhZ2UtaWNvbi13cmFwcGVyXFxcIj5cXG5cdFx0PGEgaHJlZj1cXFwiIy9ibG9nXFxcIiBjbGFzcz1cXFwiYmxvZ1xcXCI+XFxuXHRcdFx0PGltZyBjbGFzcz1cXFwicGFnZS1pY29uXFxcIiBzcmM9XFxcImFzc2V0cy9pbWFnZXMvYmxvZy1ib29rLnBuZ1xcXCI+XFxuXHRcdFx0PGg0PmJsb2c8L2g0Plxcblx0XHQ8L2E+XFxuXHQ8L2Rpdj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcInBhZ2UtaWNvbi13cmFwcGVyXFxcIj5cXG5cdFx0PGEgaHJlZj1cXFwiIy9jb250YWN0XFxcIiBjbGFzcz1cXFwiY29udGFjdFxcXCI+XFxuXHRcdFx0PGltZyBjbGFzcz1cXFwicGFnZS1pY29uXFxcIiBzcmM9XFxcImFzc2V0cy9pbWFnZXMvY29udGFjdC1zcGVlY2gtYnViYmxlcy5wbmdcXFwiPlxcblx0XHRcdDxoND5jb250YWN0PC9oND5cXG5cdFx0PC9hPlxcblx0PC9kaXY+XFxuXFxuPC9kaXY+XFxuXFxuPHAgc3R5bGU9XFxcInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiA2MHB4OyBwYWRkaW5nOiAyMHB4OyB3aWR0aDogMTAwJTsgbWFyZ2luOiBhdXRvOyBmb250LXNpemU6IC44NWVtOyBjb2xvcjogI2JiYjtcXFwiPkknbSBzdGlsbCB3b3JraW5nIG9uIHRoaXMgc2l0ZSwgc28gcGxlYXNlIGJlYXIgd2l0aCBtZSE8L3A+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcIm1hc3RlclwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGJ1ZmZlciA9IFwiIDxkaXYgY2xhc3M9XFxcInBhZ2Utd3JhcFxcXCI+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2VsbFxcXCI+XFxuICBcdFx0PGRpdiBjbGFzcz1cXFwibGFuZGluZy1jb250ZW50XFxcIiBpZD1cXFwibGFuZGluZ1xcXCI+XFxuICAgICAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbnRyb0NvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmludHJvQ29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpbnRyb0NvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICBcdFx0PC9kaXY+XFxuICAgIDwvZGl2Plxcblx0PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXdyYXBwZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcblxcbiAgICA8L2Rpdj5cXG4gIFx0PGRpdiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgc3R5bGU9XFxcIlxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50IGNvbnRlbnQtbWFpblxcXCIgaWQ9XFxcIm1haW5cXFwiPlwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm1haW5Db250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluQ29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJtYWluQ29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQgdHJhbnNpdGlvbmVyXFxcIiBpZD1cXFwidHJhbnNcXFwiPjwvZGl2PlxcbiAgXHQ8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJwcm9qZWN0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIlwiO1xuICBzdGFjazEgPSBoZWxwZXJzWyd3aXRoJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdHRyaWJ1dGVzIDogZGVwdGgwKSwge1wibmFtZVwiOlwid2l0aFwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMiwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG5cdFx0XHQ8aDIgY2xhc3M9XFxcInRpdGxlXFxcIj5cIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gyPlxcblx0XHRcdDx1bD48L3VsPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XFxcInNtYWxsLTEyXFxcIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XHRcdFxcblx0XHRcdFx0XHRcdFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiY29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCJcXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiXFxuXHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBwbGFjZWhvbGRlci12aWV3XFxcIj5cXG5cdFx0PGRpdiBjbGFzcz1cXFwiaDItdGl0bGVcXFwiPjwvZGl2Plxcblx0XHQ8dWw+PC91bD5cXG5cdFx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1yb3dcXFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcInNtYWxsLTEyXFxcIj5cXG5cdFx0XHRcdDxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXI7IGNvbG9yOiAjOTk5XFxcIj5Mb2FkaW5nLi4uPC9oMj5cXG5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcXG5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmF0dHJpYnV0ZXMgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDQsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1widWkvaGVhZGVyXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnByZXZMaW5rIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wcmV2TGluayA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJwcmV2TGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJnby1wcmV2XFxcIiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCIgY2xhc3M9XFxcImdvLXByZXYgaGlkZVxcXCJcIjtcbiAgfSxcIjVcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubmV4dExpbmsgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5leHRMaW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcIm5leHRMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImdvLW5leHRcXFwiIFwiO1xufSxcIjdcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIiBjbGFzcz1cXFwiZ28tbmV4dCBoaWRlXFxcIlwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwibGFuZGluZy1mb290ZXItY29udGVudFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJpY29uIG1lbnVcXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duIGZhLTJ4IHNob3ctY29udGVudFxcXCI+PC9pPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWNvbnRlbnRcXFwiPlxcbiAgICA8YSBcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnByZXZMaW5rIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSgzLCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgICBcXG4gICAgPGEgaHJlZj1cXFwiI1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbiBtZW51XFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzIGZhLTJ4IHNob3ctaW50cm9cXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgXFxuICAgIDxhIFwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oNSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDcsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgXFxuPC9kaXY+XFxuPGRpdj48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuIHJldHVybiB0aGlzWydKU1QnXTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0czsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnYWJvdXQnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XHRcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzJyk7XG52YXIgQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlKCcuL2NvbGxlY3Rpb24tdmlldy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2Jsb2cnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmNvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbigpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1x0XG5cdHN0cmluZ1RvUmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlKHthdHRyaWJ1dGVzOiB0aGlzLmNvbGxlY3Rpb24uY3VycmVudFJlY29yZC5hdHRyaWJ1dGVzfSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KTtcblxuXHRcdHZhciB2aWV3ID0gdGhpcyxcblx0XHRcdFx0Y29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRcblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbi5sZW5ndGgpIHtcblx0XHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcblxuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnKTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlKTtcblx0XHRcdHRoaXMuZmV0Y2hSZW5kZXIob3B0aW9ucyk7XG5cblx0XHR9IGVsc2Uge1xuIFxuXHRcdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiBjb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcblx0XHRcdFx0Y29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKHtzbHVnOiBvcHRpb25zLnNsdWd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6cmVkaXJlY3QnLCB2aWV3LmRlZmF1bHRSb3V0ZSgpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB0aGlzLnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnN0cmluZ1RvUmVuZGVyKCkpO1x0XG5cdFx0XHR9XHRcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnLCB7bGluazogdGhpcy5wcmV2Um91dGUoKX0pO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnLCB7bGluazogdGhpcy5uZXh0Um91dGUoKX0pO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0ZmV0Y2hSZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHZhciB2aWV3ID0gdGhpcyxcblx0XHRcdFx0Y29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRpZiAoZmFsc2UpIHsgLy8gdG8gYmUgc2V0IHRvIHNvbWV0aGluZyBtb3JlIG1lYW5pbmdmdWwgd2hlbiBhbiBhcGkgaXMgYXZhaWxhYmxlXG5cdFx0XHRjb2xsZWN0aW9uLmZldGNoKHtcbiAgXHRcdFx0cmVtb3ZlOiBmYWxzZSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKXtcblxuXHRcdFx0XHRcdGlmIChvcHRpb25zLnNsdWcgJiYgY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uLnNldEN1cnJlbnRSZWNvcmQoe3NsdWc6IG9wdGlvbnMuc2x1Z30pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd0cmFuc2l0aW9uOnJlbmRlcicsIHZpZXcuc3RyaW5nVG9SZW5kZXIoKSApO1x0XHRcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2aWV3LmFkZFN0dWJzKHtzdWNjZXNzOiBmdW5jdGlvbigpe1xuXG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5zbHVnICYmIGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uLnNldEN1cnJlbnRSZWNvcmQoe3NsdWc6IG9wdGlvbnMuc2x1Z30pO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB2aWV3LnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXG5cdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sbGVjdGlvbi5hZGRTdHVicyh7c3VjY2VzczogZnVuY3Rpb24oKXtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy5zbHVnICYmIGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuXHRcdFx0XHRcdGNvbGxlY3Rpb24uc2V0Q3VycmVudFJlY29yZCh7c2x1Zzogb3B0aW9ucy5zbHVnfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKGNvbGxlY3Rpb24uZmlyc3QoKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOnJlZGlyZWN0Jywgdmlldy5kZWZhdWx0Um91dGUoKSk7XG5cblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jywge2xpbms6IHZpZXcucHJldlJvdXRlKCl9KTtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnLCB7bGluazogdmlldy5uZXh0Um91dGUoKX0pO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB2aWV3Lm5hbWVzcGFjZSApO1xuXG5cblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3RyYW5zaXRpb246cmVuZGVyJywgdmlldy5zdHJpbmdUb1JlbmRlcigpICk7XHRcblxuXHRcdFx0fX0pO1xuXHRcdH1cblx0fSxcblx0c2V0Q3VycmVudDogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0dGhpcy5jb2xsZWN0aW9uLnNldEN1cnJlbnRSZWNvcmQoe3NsdWc6c2x1Z30pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uLmdldE5leHRNb2RlbCgpO1xuXHR9LFxuXHRnZXRQcmV2TW9kZWw6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbi5nZXRQcmV2TW9kZWwoKTtcblx0fSxcblx0bmV4dFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2RlbCA9IHRoaXMuY29sbGVjdGlvbi5nZXROZXh0TW9kZWwoKTtcblx0XHRyZXR1cm4gbW9kZWw/ICcjLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyBtb2RlbC5nZXQoJ3NsdWcnKSA6IGZhbHNlO1xuXHR9LFxuXHRwcmV2Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG1vZGVsID0gdGhpcy5jb2xsZWN0aW9uLmdldFByZXZNb2RlbCgpO1xuXHRcdHJldHVybiBtb2RlbD8gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIG1vZGVsLmdldCgnc2x1ZycpIDogZmFsc2U7XG5cdH0sXG5cdGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbi5jaGVja1NsdWcoc2x1Zyk7XG5cdH0sXG5cdGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb24uZGVmYXVsdFNsdWcoKTtcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAnLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyB0aGlzLmRlZmF1bHRTbHVnKCk7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gdmFsaWRFbWFpbChzdHJpbmcpIHtcbiAgICB2YXIgcmUgPSAvXihbXFx3LV0rKD86XFwuW1xcdy1dKykqKUAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkL2k7XG4gICAgcmV0dXJuIHJlLnRlc3Qoc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRMYWJlbChlbCl7XG5cdGVsLmNsb3Nlc3QoJy5maWVsZCcpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvcihlbCl7XG5cdGVsLmNsb3Nlc3QoJy5maWVsZCcpLmFkZENsYXNzKCdlcnJvcicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2NvbnRhY3QnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLmVtYWlsQWRkcmVzcyA9ICdzbXRfQGhvdG1haWwuY28udWsnO1xuXG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblxuXHRcdHRoaXMucGVuZGluZyA9IGZhbHNlO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cdGV2ZW50czoge1xuXHRcdCdzdWJtaXQgLmNvbnRhY3QtZm9ybScgOiAnc3VibWl0Rm9ybScsXG5cdFx0J2NsaWNrIC5zdWJtaXNzaW9uLWVycm9yIC5mYS1jbG9zZSc6ICdyZW1vdmVGb3JtRXJyb3InXG5cdH0sXG5cdHZhbGlkYXRlRm9ybTogZnVuY3Rpb24oKXtcblx0XHR2YXIgJGZvcm0gPSB0aGlzLiRlbC5maW5kKCcuY29udGFjdC1mb3JtJyk7XG5cblx0XHR2YXIgJG5hbWUgPSAkZm9ybS5maW5kKCcjbmFtZScpO1xuXHRcdHZhciAkZW1haWwgPSAkZm9ybS5maW5kKCcjZW1haWwnKTtcbi8vIC8vICRzdWJqZWN0ID0gJGZvcm0uZmluZCgnI3N1YmplY3QnKSxcblx0XHR2YXIgJG1lc3NhZ2UgPSAkZm9ybS5maW5kKCcjbWVzc2FnZScpO1xuXG5cdFx0dmFyIGVycm9ycyA9IFtdO1xuXG5cdFx0aWYgKCRtZXNzYWdlLnZhbCgpLmxlbmd0aCA+IDUpIHtcblx0XHRcdHJlc2V0TGFiZWwoJG1lc3NhZ2UpO1xuXHRcdH0gZWxzZSBpZiAoJG1lc3NhZ2UudmFsKCkubGVuZ3RoKSB7XG5cdFx0XHRlcnJvcnMucHVzaCh7JGVsOiAkbWVzc2FnZSwgbWVzc2FnZTogJ25vdCBsb25nIGVub3VnaCd9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXJyb3JzLnB1c2goeyRlbDogJG1lc3NhZ2UsIG1lc3NhZ2U6ICdubyBtZXNzYWdlIGZhaWwnfSk7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbGlkRW1haWwoJGVtYWlsLnZhbCgpKSkge1xuXHRcdFx0cmVzZXRMYWJlbCgkZW1haWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlcnJvcnMucHVzaCh7JGVsOiAkZW1haWx9KTtcblx0XHR9XG5cblx0XHRpZiAoJG5hbWUudmFsKCkubGVuZ3RoID4gMSkge1xuXHRcdFx0cmVzZXRMYWJlbCgkbmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVycm9ycy5wdXNoKHskZWw6ICRuYW1lfSk7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9ycy5sZW5ndGgpIHtcblx0XHRcdCQuZWFjaChlcnJvcnMsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGFkZEVycm9yKHRoaXMuJGVsKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdHN1Ym1pdEZvcm06IGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgdmlldyA9IHRoaXM7XG5cblx0XHRpZiAodGhpcy5wZW5kaW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0dmFyICRmb3JtID0gdGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpO1xuXHRcdFxuXHRcdGlmICh0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XG5cblx0XHRcdCRmb3JtLmFkZENsYXNzKCdwZW5kaW5nJyk7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG5cdFx0XHR2YXIgc2VuZERhdGEgPSB7XG5cdFx0XHRcdF9zdWJqZWN0OiAnc3BlbnRheWxvci5jb20nLFxuXHRcdFx0XHRtZXNzYWdlOiAkZm9ybS5maW5kKCcjbWVzc2FnZScpLnZhbCgpLFxuXHRcdFx0XHRlbWFpbDogJGZvcm0uZmluZCgnI2VtYWlsJykudmFsKClcblx0XHRcdH07XG5cblx0XHRcdCQuYWpheCh7XG5cdFx0ICAgIHVybDogJy8vZm9ybXNwcmVlLmlvL3NwZW5fQGhvdG1haWwuY28udWsnLCBcblx0XHQgICAgbWV0aG9kOiAnUE9TVCcsXG5cdFx0ICAgIGRhdGE6IHNlbmREYXRhLFxuXHRcdCAgICBkYXRhVHlwZTogJ2pzb24nLFxuXHRcdCAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0ICAgIFx0dmlldy5mb3JtU3VjY2VzcyhyZXNwb25zZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGVycm9yOiBmdW5jdGlvbigpe1xuXHRcdCAgICBcdHZpZXcuZm9ybUVycm9yKCk7XG5cdFx0ICAgIH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XG5cdFx0XG5cdH0sXG5cdGZvcm1TdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0dmFyICRmb3JtID0gdGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpO1xuXHRcdCRmb3JtLnJlbW92ZUNsYXNzKCdwZW5kaW5nJyk7XG5cblx0XHRpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0JGZvcm0uYWRkQ2xhc3MoJ2RvbmUnKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcblx0XHRcdHRoaXMucGVuZGluZyA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZm9ybUVycm9yKCk7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdH0sXG5cdGZvcm1FcnJvcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgJGZvcm0gPSB0aGlzLiRlbC5maW5kKCcuY29udGFjdC1mb3JtJykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cblx0XHQkZm9ybS5yZW1vdmVDbGFzcygncGVuZGluZycpO1xuXHRcdHRoaXMucGVuZGluZyA9IGZhbHNlO1xuXHR9LFxuXHRyZW1vdmVGb3JtRXJyb3I6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuXHR9XG59KTtcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnaW50cm8nLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcihvcHRpb25zKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRvcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UpO1xuXG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vdGVtcGxhdGVzLmpzJyk7XG52YXIgaGVhZGVyVmlldyA9IHJlcXVpcmUoJy4vdWkvaGVhZGVyLmpzJyk7XG52YXIgdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL3BhZ2UtdHJhbnNpdGlvbnMuanMnKTtcbnZhciBzY3JvbGxUcmFja2VyID0gcmVxdWlyZSgnLi4vaGVscGVycy9zY3JvbGwtdHJhY2tlci5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGVsOiAnaHRtbCcsXG5cdGNvbnRlbnRFbDogJy5tYWluIC5jb250ZW50Jyxcblx0dHJhbnNpdGlvbkVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cdGhlYWRlcjogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIHN0YXRlID0gKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+PSAxKSA/ICdjb250ZW50JyA6ICdpbnRybyc7XG5cdFx0dGhpcy5yZW5kZXIoe1xuXHRcdFx0c3RhdGU6IHN0YXRlLFxuXHRcdFx0aW50cm9Db250ZW50OiB0ZW1wbGF0ZXMuaW50cm8oKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50cmFuc2l0aW9ucyA9IG5ldyB0cmFuc2l0aW9ucyh7XG5cdFx0XHRjb250YWluZXI6ICcucGFnZS13cmFwIC5tYWluJyxcblx0XHRcdG1haW46ICcuY29udGVudC1tYWluJyxcblx0XHRcdHRyYW5zaXRpb25lcjogJy50cmFuc2l0aW9uZXInXG5cdFx0fSk7XG5cblx0XHQvLyB2YXIgdmlldyA9IHRoaXM7XG5cdFx0JChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSl7XG5cdFx0XHRpZiAoZS5rZXlDb2RlID09PSAxMTkpIHtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6bmV4dENvbnRlbnQnKTtcblx0XHRcdH1cblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDExMykge1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpwcmV2Q29udGVudCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy4kaGVhZGVyID0gJCh0aGlzLmhlYWRlcik7XG5cdFx0dGhpcy5oZWFkZXJWaWV3ID0gbmV3IGhlYWRlclZpZXcoe3RlbXBsYXRlOiB0ZW1wbGF0ZXNbJ3VpL2hlYWRlciddfSk7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cdGV2ZW50czoge1xuXHRcdCdjbGljayAuc2hvdy1jb250ZW50JzogJ2dvVG9DdXJyZW50Q29udGVudCcsXG5cdFx0J2NsaWNrIC5nby1wcmV2JzogJ3ByZXZDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLW5leHQnOiAnbmV4dENvbnRlbnQnXG5cdFx0Ly8gJ2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgXHQkKCdib2R5JykuaHRtbCh0ZW1wbGF0ZXMubWFzdGVyKG9wdGlvbnMpKTtcblxuICBcdHNjcm9sbFRyYWNrZXIuaW5pdGlhbGl6ZSgpO1xuICB9LFxuICBzaG93Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ludHJvJyk7XG5cdH0sXG5cdHNob3dJbnRybzogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cdH0sXG5cdHNldE5hbWVzcGFjZTogZnVuY3Rpb24obmFtZXNwYWNlKSB7XHRcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICQudHJpbShcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uKGMpIHsgXG5cdFx0XHRcdHJldHVybiBjLmxhc3RJbmRleE9mKCdwYWdlLScsIDApICE9PSAwOyBcblx0XHRcdH0pLmpvaW4oJyAnKSArICcgcGFnZS0nICtuYW1lc3BhY2UgKTtcblx0fSxcblx0bmV4dENvbnRlbnQ6IGZ1bmN0aW9uKGUpe1xuXHRcdGlmIChlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuXHRcdC8vIGlmICh0aGlzLnRyYW5zaXRpb25zLmFuaW1hdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAoJCgnLmFuaW1hdGluZy1wcmV2LCAuYW5pbWF0aW5nLW5leHQnKS5sZW5ndGggPj0gMSkge3JldHVybiBmYWxzZTt9XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5kaXJlY3Rpb24gPSAnbmV4dCc7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpuZXh0Q29udGVudCcpO1xuXHR9LFxuXHRwcmV2Q29udGVudDogZnVuY3Rpb24oZSl7XG5cdFx0aWYgKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG5cdFx0Ly8gaWYgKHRoaXMudHJhbnNpdGlvbnMuYW5pbWF0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGlmICgkKCcuYW5pbWF0aW5nLXByZXYsIC5hbmltYXRpbmctbmV4dCcpLmxlbmd0aCA+PSAxKSB7cmV0dXJuIGZhbHNlO31cblx0XHR0aGlzLnRyYW5zaXRpb25zLmRpcmVjdGlvbiA9ICdwcmV2Jztcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOnByZXZDb250ZW50Jyk7XG5cdH0sXG4gIGdvVG9DdXJyZW50Q29udGVudDogZnVuY3Rpb24oKXtcbiAgXHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOmdvVG9DdXJyZW50Q29udGVudCcpO1xuICB9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cblx0XHR2YXIgdHJhbnNpdGlvbnMgPSB0aGlzLnRyYW5zaXRpb25zO1xuXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRlbnQpe3RyYW5zaXRpb25zLnJlbmRlcihjb250ZW50KTt9XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnNob3dDb250ZW50JywgdGhpcy5zaG93Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93SW50cm8nLCB0aGlzLnNob3dJbnRybyk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMuc2V0TmFtZXNwYWNlKTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3BhZ2U6bmV4dENvbnRlbnQnLCB0aGlzLm5leHRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3BhZ2U6cHJldkNvbnRlbnQnLCB0aGlzLnByZXZDb250ZW50KTtcblxuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndHJhbnNpdGlvbjpyZW5kZXInLCByZW5kZXIpO1xuXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9ucy9wcm9qZWN0cy5qcycpO1xudmFyIENvbGxlY3Rpb25WaWV3ID0gcmVxdWlyZSgnLi9jb2xsZWN0aW9uLXZpZXcuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW9uVmlldy5leHRlbmQoe1x0XG5cdG5hbWVzcGFjZTogJ3Byb2plY3RzJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy5jb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24oKTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0ZWw6ICcuaGVhZGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5yZW5kZXIoe30pO1xuXHRcdHRoaXMuc2V0TGlzdGVuZXJzKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnc2hvd0NvbnRlbnQnLFxuXHRcdCdjbGljayAuc2hvdy1pbnRybyc6ICdzaG93SW50cm8nXG4gIH0sXG4gIHNob3dDb250ZW50OiBmdW5jdGlvbigpe1xuICBcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuICB9LFxuICBzaG93SW50cm86IGZ1bmN0aW9uKCl7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dJbnRybycpO1xuICB9LFxuICB1cGRhdGVVaVByZXY6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcdHZhciBwcmV2ID0gJy5nby1wcmV2JztcbiAgXHR2YXIgJHByZXYgPSB0aGlzLiRlbC5maW5kKHByZXYpO1xuICBcdGlmIChvcHRpb25zLmxpbmspIHtcbiAgXHRcdCRwcmV2LnJlbW92ZUNsYXNzKCdoaWRlJykuYXR0cignaHJlZicsIG9wdGlvbnMubGluayk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdCRwcmV2LmFkZENsYXNzKCdoaWRlJykuYXR0cignaHJlZicsICcjJyk7XG4gIFx0fVxuICB9LFxuICB1cGRhdGVVaU5leHQ6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcdHZhciBuZXh0ID0gJy5nby1uZXh0JztcbiAgXHR2YXIgJG5leHQgPSB0aGlzLiRlbC5maW5kKG5leHQpO1xuICBcdGlmIChvcHRpb25zLmxpbmspIHtcbiAgXHRcdCRuZXh0LnJlbW92ZUNsYXNzKCdoaWRlJykuYXR0cignaHJlZicsIG9wdGlvbnMubGluayk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdCRuZXh0LmFkZENsYXNzKCdoaWRlJykuYXR0cignaHJlZicsICcjJyk7XG4gIFx0fVxuICB9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTp1cGRhdGVQcmV2JywgdGhpcy51cGRhdGVVaVByZXYpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6dXBkYXRlTmV4dCcsIHRoaXMudXBkYXRlVWlOZXh0KTtcblx0fVxufSk7Il19
