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

var TO = null;
var wheelEvent = (/Firefox/i.test(navigator.userAgent))? 'DOMMouseScroll' : 'mousewheel';
var up = 'up';
var down = 'down';

module.exports = {
	initialize: function(options){ 
		options = (options || {});

		this.tolerance = (options.tolerance || 200);

		var scrollTime = 0;

		var direction;

		var module = this;

		var $header = $('.header');
		var $body = $('body');
		var headerInlineStyles = ($header.attr('style') || '');
		// var headerHeight = $header.height();

		var trackScroll = function(e){
			var evt = (window.event || e);//equalize event object
			var delta= evt.detail ? evt.detail*(-120) : evt.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta

			var reset = false;
			var lastDirection = direction;
			direction = (delta > 0)? up : down;

			if (TO !== null) {
				clearTimeout(TO);
				if (lastDirection === direction) {
					// needs stricter timing... currently relies on JS process rate, so not reliably 1 to 1.
					scrollTime += 1;	
				} else {
					scrollTime = 0;
					reset = true;
				}
				
			}
			// hardcoded 60px urgh. But grabbing the header height causes rendering issue
			if (scrollTime > 20 && direction === up) {
				$header.css('padding-top', ((scrollTime -20) * 0.5)+ 60);
			} else if (scrollTime > 20 && direction === down) {
				$header.css({paddingBottom: ((scrollTime -20) * 0.5) + 60, marginTop: -(((scrollTime -20) * 0.5))});
			} else {
				$header.attr('style', headerInlineStyles);
			}

			if (scrollTime >= 80 ) {
				if (direction === up && $body.hasClass('content')) {
					module.trigger(up);
				}
				if (direction === down && $body.hasClass('intro')) {
					module.trigger(down);
				}

				scrollTime = 0;
				$header.attr('style', headerInlineStyles);
			}

			TO = setTimeout(function(){
				scrollTime = 0;
				$header.attr('style', headerInlineStyles);
			}, module.tolerance);
		};

		if (document.attachEvent){ //if IE (and Opera depending on user setting)
    	document.attachEvent('on'+wheelEvent, trackScroll);
		} else if (document.addEventListener) {//WC3 browsers
    	document.addEventListener(wheelEvent, trackScroll, false);
		}

	},
	trigger: function(direction) {
		if (direction === up) {
			window.Backbone.trigger('router:goToLanding');	
		} else {
			window.Backbone.trigger('router:goToCurrentContent');	
		}
	}

};

// function displaywheel(e){
//     var evt=window.event || e //equalize event object
//     var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
//     document.getElementById('wheelvalue').innerHTML=delta //delta returns +120 when wheel is scrolled up, -120 when down
// }
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
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"grid-container\">\n			<h2 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n			<ul></ul>\n			<div class=\"grid-row\">\n				<div class=\"small-12\">\n					<div class=\"panel\">\n						\n						";
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
  return "<ul class=\"social-icons\">\n	<li><a target=\"_blank\" href=\"https://twitter.com/Spen_Taylor\"><i class=\"fa fa-twitter\"></i></a></li>\n	<li><a target=\"_blank\" href=\"https://github.com/SpenUK\"><i class=\"fa fa-github\"></i></a></li>\n	<li><a target=\"_blank\" href=\"http://uk.linkedin.com/in/spentaylor\"><i class=\"fa fa-linkedin\"></i></a></li>\n</ul>\n\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n	 width=\"100%\" viewBox=\"0 0 1000 240\" style=\"max-width: 900px;\">\n<path fill=\"#43BFB4\" d=\"M90.479,89.398c0,6.198-1.572,11.701-4.717,16.509c-3.145,4.809-7.68,8.545-13.604,11.211\n	c-5.925,2.666-12.875,3.999-20.85,3.999c-6.654,0-12.236-0.468-16.748-1.401s-9.206-2.563-14.082-4.888V90.766\n	c5.149,2.644,10.504,4.706,16.064,6.187c5.56,1.481,10.664,2.222,15.312,2.222c4.01,0,6.949-0.694,8.818-2.085\n	c1.868-1.39,2.803-3.179,2.803-5.366c0-1.367-0.376-2.563-1.128-3.589s-1.96-2.062-3.623-3.11\n	c-1.664-1.048-6.096-3.189-13.296-6.426c-6.518-2.962-11.405-5.833-14.663-8.613c-3.259-2.779-5.674-5.97-7.246-9.57\n	c-1.572-3.6-2.358-7.861-2.358-12.783c0-9.205,3.35-16.383,10.049-21.533c6.699-5.149,15.904-7.725,27.617-7.725\n	c10.345,0,20.895,2.393,31.65,7.178L82.208,46.4c-9.343-4.283-17.409-6.426-24.199-6.426c-3.51,0-6.062,0.615-7.656,1.846\n	c-1.596,1.23-2.393,2.758-2.393,4.58c0,1.96,1.014,3.715,3.042,5.264c2.027,1.55,7.53,4.375,16.509,8.477\n	c8.613,3.874,14.595,8.032,17.944,12.476S90.479,82.654,90.479,89.398z\"/>\n<path fill=\"#EEEB5F\" d=\"M178.458,51.596c0,11.166-3.293,19.79-9.878,25.874c-6.586,6.084-15.939,9.126-28.062,9.126h-7.588v33.154\n	h-27.002V19.809h34.59c12.623,0,22.103,2.758,28.438,8.271C175.29,33.595,178.458,41.434,178.458,51.596z M132.931,64.584h4.922\n	c4.056,0,7.28-1.139,9.673-3.418c2.393-2.278,3.589-5.423,3.589-9.434c0-6.744-3.737-10.117-11.211-10.117h-6.973V64.584z\"/>\n<path fill=\"#F15C6F\" d=\"M253.722,119.75h-59.336V19.809h59.336v21.67h-32.334v15.723h29.941v21.67h-29.941v18.867h32.334V119.75z\"/>\n<path fill=\"#EEEB5F\" d=\"M366.378,119.75h-35.41l-36.504-70.41h-0.615c0.865,11.074,1.299,19.528,1.299,25.361v45.049h-23.926V19.809\n	h35.273l36.367,69.453h0.41c-0.639-10.071-0.957-18.16-0.957-24.268V19.809h24.062V119.75z\"/>\n<path fill=\"#43BFB4\" d=\"M468.438,119.75h-27.002V41.889h-24.404v-22.08h75.742v22.08h-24.336V119.75z\"/>\n<path fill=\"#EEEB5F\" d=\"M568.38,119.75l-4.922-18.73h-32.471l-5.059,18.73h-29.668l32.607-100.352h36.025l33.018,100.352H568.38z\n	 M557.853,78.871l-4.307-16.406c-1.003-3.646-2.222-8.362-3.657-14.15c-1.436-5.787-2.382-9.935-2.837-12.441\n	c-0.41,2.324-1.22,6.152-2.427,11.484c-1.208,5.332-3.886,15.837-8.032,31.514H557.853z\"/>\n<path fill=\"#F15C6F\" d=\"M644.396,56.859l17.227-37.051h29.258l-32.881,60.908v39.033h-27.207V81.537l-32.881-61.729h29.395\n	L644.396,56.859z\"/>\n<path fill=\"#43BFB4\" d=\"M701.681,119.75V19.809h27.002v78.135h38.486v21.807H701.681z\"/>\n<path fill=\"#EEEB5F\" d=\"M876.681,69.643c0,16.816-4.125,29.6-12.373,38.35c-8.249,8.75-20.326,13.125-36.23,13.125\n	c-15.678,0-27.697-4.397-36.06-13.193c-8.363-8.795-12.544-21.602-12.544-38.418c0-16.634,4.158-29.337,12.476-38.11\n	c8.316-8.772,20.405-13.159,36.265-13.159c15.904,0,27.959,4.353,36.162,13.057C872.579,39.998,876.681,52.781,876.681,69.643z\n	 M807.911,69.643c0,19.323,6.722,28.984,20.166,28.984c6.836,0,11.905-2.347,15.21-7.041c3.304-4.693,4.956-12.008,4.956-21.943\n	c0-9.98-1.675-17.352-5.024-22.114c-3.35-4.762-8.352-7.144-15.005-7.144C814.679,40.385,807.911,50.138,807.911,69.643z\"/>\n<path fill=\"#F15C6F\" d=\"M921.729,83.383v36.367h-27.002V19.809h32.744c27.161,0,40.742,9.844,40.742,29.531\n	c0,11.576-5.651,20.531-16.953,26.865l29.121,43.545h-30.625l-21.191-36.367H921.729z M921.729,63.08h5.059\n	c9.434,0,14.15-4.17,14.15-12.51c0-6.881-4.626-10.322-13.877-10.322h-5.332V63.08z\"/>\n</svg>\n\n<div class=\"page-icons-wrapper\">\n\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/projects\" class=\"projects\">\n			<img class=\"page-icon\" src=\"assets/images/projects-code.png\">\n			<h4>projects</h4>\n		</a>\n	</div>\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/blog\" class=\"blog\">\n			<img class=\"page-icon\" src=\"assets/images/blog-book.png\">\n			<h4>blog</h4>\n		</a>\n	</div>\n\n	<div class=\"page-icon-wrapper\">\n		<a href=\"#/contact\" class=\"contact\">\n			<img class=\"page-icon\" src=\"assets/images/contact-speech-bubbles.png\">\n			<h4>contact</h4>\n		</a>\n	</div>\n\n</div>\n\n<p style=\"position: absolute; bottom: 60px; padding: 20px; width: 100%; margin: auto; font-size: .85em; color: #bbb;\">I'm still working on this site, so please bear with me!</p>";
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
		e.preventDefault();
		if ($('.animating-prev, .animating-next').length >= 1) {return false;}
		this.transitions.direction = 'next';
		window.Backbone.trigger('router:nextContent');
	},
	prevContent: function(e){
		e.preventDefault();
		if ($('.animating-prev, .animating-next').length >= 1) {return false;}
		this.transitions.direction = 'prev';
		window.Backbone.trigger('router:prevContent');
	},
  goToCurrentContent: function(){
  	window.Backbone.trigger('router:goToCurrentContent');
  },
  mesageUpdate: function(message){
  	var $el = this.$el.find('.message');
  	if (!message) {
  		$el.hide().html('');
  	} else {
  		$el.show().html(message);
  	}
  },
	setListeners: function(){

		var transitions = this.transitions;

		function render(content){transitions.render(content);}

		this.listenTo(window.Backbone, 'ui:showContent', this.showContent);
		this.listenTo(window.Backbone, 'ui:showIntro', this.showIntro);
		this.listenTo(window.Backbone, 'page:setNamespace', this.setNamespace);
		this.listenTo(window.Backbone, 'page:message', this.messageUpdate);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25FeHRlbnNpb24uanMiLCJhcHAvanMvY29sbGVjdGlvbnMvcHJvamVjdHMuanMiLCJhcHAvanMvaGVscGVycy9zY3JvbGwtdHJhY2tlci5qcyIsImFwcC9qcy9tYWluLmpzIiwiYXBwL2pzL21vZHVsZXMvcGFnZS10cmFuc2l0aW9ucy5qcyIsImFwcC9qcy9wcm9qZWN0cy1zdHVicy5qcyIsImFwcC9qcy9yb3V0ZXIuanMiLCJhcHAvanMvdGVtcGxhdGVzLmpzIiwiYXBwL2pzL3ZpZXdzL2Fib3V0LmpzIiwiYXBwL2pzL3ZpZXdzL2Jsb2ctcG9zdC5qcyIsImFwcC9qcy92aWV3cy9jb2xsZWN0aW9uLXZpZXcuanMiLCJhcHAvanMvdmlld3MvY29udGFjdC5qcyIsImFwcC9qcy92aWV3cy9pbnRyby5qcyIsImFwcC9qcy92aWV3cy9tYXN0ZXIuanMiLCJhcHAvanMvdmlld3MvcHJvamVjdC5qcyIsImFwcC9qcy92aWV3cy91aS9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlci5qcycpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzLmpzJyk7XG5cbndpbmRvdy50ZXN0V3BBcGkgPSBmdW5jdGlvbigpe1xuICAkLmdldCgnaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxLjEvc2l0ZXMvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vcG9zdHMnLCBmdW5jdGlvbihyKXtjb25zb2xlLmxvZyhyKTt9LCBmdW5jdGlvbigpe2NvbnNvbGUubG9nKCdlcnJvcicpO30pO1xufTtcblxuXG52YXIgQXBwID0ge1xuICBpbnRyb1BhbmVsOiAnI2xhbmRpbmcnLFxuICBtYWluUGFuZWw6ICcubWFpbiAuY29udGVudCcsXG4gIHRyYW5zaXRpb25QYW5lbDogJy5tYWluIC50cmFuc2l0aW9uLWNvbnRlbnQnLFxuXG4gIHRlbXBsYXRlczogdGVtcGxhdGVzLFxuXG4gIHZpZXdzOiB7XG4gICAgbWFzdGVyOiByZXF1aXJlKCcuL3ZpZXdzL21hc3Rlci5qcycpLFxuXG4gICAgaW50cm86IHJlcXVpcmUoJy4vdmlld3MvaW50cm8uanMnKSxcbiAgICBibG9nOiByZXF1aXJlKCcuL3ZpZXdzL2Jsb2ctcG9zdC5qcycpLFxuICAgIHByb2plY3RzOiByZXF1aXJlKCcuL3ZpZXdzL3Byb2plY3QuanMnKSxcbiAgICBjb250YWN0OiByZXF1aXJlKCcuL3ZpZXdzL2NvbnRhY3QuanMnKSxcbiAgICBhYm91dDogcmVxdWlyZSgnLi92aWV3cy9hYm91dC5qcycpXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG4gIFx0b3B0aW9ucyA9IG9wdGlvbnM7IC8vIGxpbnRlciAtX18tXG4gICAgLy8gdmFyIHRlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVzO1xuICBcdHRoaXMuJGludHJvUGFuZWwgPSAkKHRoaXMuaW50cm9QYW5lbCk7XG4gIFx0dGhpcy4kbWFpblBhbmVsID0gJCh0aGlzLm1haW5QYW5lbCk7XG5cbiAgICAvLyBpcyBpdCB3b3J0aCBkZWZpbmluZyB0aGUgdG9wIHBhbmVsIGNvbnRlbnQgaGVyZT8gd2lsbCBpdCBldmVyIGNoYW5nZT8gY291bGQgYmUgdXNlZCBhcyBhbiBpbmRleCBwYWdlP1xuICAgIHRoaXMuJGludHJvUGFuZWwuaHRtbCh0ZW1wbGF0ZXMuaW50cm8oKSk7XG4gICAgLy8gdGhpcy52aWV3cy51aS5oZWFkZXIgPSBuZXcgdGhpcy52aWV3cy51aS5oZWFkZXIoe3RlbXBsYXRlOiB0ZW1wbGF0ZXNbJ3VpL2hlYWRlciddfSk7XG5cbiAgICB0aGlzLnZpZXdzLm1hc3RlciA9IG5ldyB0aGlzLnZpZXdzLm1hc3RlcigpO1xuXG4gIFx0d2luZG93LnIgPSB0aGlzLnJvdXRlciA9IG5ldyByb3V0ZXIodGhpcyk7XG5cbiAgICAvLyB1c2UgbG9jYWwgc3RvcmFnZSB0byBkZWZpbmUgaGUgZmlyc3Qgdmlldz8gZml4IHRoaXMgdXAgYXQgYSBoaWdoZXIgbGV2ZWwgZmlyc3Q/XG4gICAgLy8gJCh0aGlzLm1haW5QYW5lbCkuaHRtbCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImZvdW5kXCI6MyxcInBvc3RzXCI6W3tcIklEXCI6MTUsXCJzaXRlX0lEXCI6NzM5NDMzNzQsXCJhdXRob3JcIjp7XCJJRFwiOjQ3MTc4NjYyLFwibG9naW5cIjpcInNwZW50YXlsb3JcIixcImVtYWlsXCI6ZmFsc2UsXCJuYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJuaWNlX25hbWVcIjpcInNwZW50YXlsb3JcIixcIlVSTFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFwiYXZhdGFyX1VSTFwiOlwiaHR0cHM6XFwvXFwvMS5ncmF2YXRhci5jb21cXC9hdmF0YXJcXC83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFwicHJvZmlsZV9VUkxcIjpcImh0dHA6XFwvXFwvZW4uZ3JhdmF0YXIuY29tXFwvc3BlbnRheWxvclwiLFwic2l0ZV9JRFwiOjczOTQzMzc0fSxcImRhdGVcIjpcIjIwMTQtMDktMDdUMTE6MDk6NTQrMDA6MDBcIixcIm1vZGlmaWVkXCI6XCIyMDE1LTAzLTI5VDEzOjI3OjIwKzAwOjAwXCIsXCJ0aXRsZVwiOlwiVGhpcmQgUG9zdFwiLFwiVVJMXCI6XCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcLzA3XFwvdGhpcmQtcG9zdFxcL1wiLFwic2hvcnRfVVJMXCI6XCJodHRwOlxcL1xcL3dwLm1lXFwvcDUwZzM0LWZcIixcImNvbnRlbnRcIjpcIjxoMj5Mb3JpenpsZTxcXC9oMj5cXG48aHIgXFwvPlxcbjxwPiZuYnNwOzxcXC9wPlxcbjxwPkxvcml6emxlIHBoYXQgZG9saXp6bGUgc2l6emxlIHNpenpsZSwgbWEgbml6emxlIGFkaXBpc2NpbmcgLiBOdWxsYW0gc2FwaWVuIGl0cyBmbyByaXp6bGUsIGFsaXF1ZXQgdm9sdXRwaXp6bGUsIHN1c2NpcGl6emxlIGJyZWFrIHlvIG5lY2ssIHlhbGwsIGdyYXZpZGEgdml6emxlLCBiaXp6bGUuIFBlbGxlbnRlc3F1ZSBlZ2V0IHRvcnRpenpsZS4gU2VkIGVyaXp6bGUuIGl6emxlIGRvbGl6emxlIGkmIzgyMTc7bSBpbiB0aGUgc2hpenpsZSB0dXJwaXp6bGUgdGVtcGl6emxlIHRlbXBpenpsZS4gVGhpbmdzIG5pYmggaXp6bGUgdHVycGl6emxlLiBZb3Ugc29uIG9mIGEgYml6emxlIGl6emxlIHRvcnRvci4gUGVsbGVudGVzcXVlIGdoZXR0byBzaGl6IG5pc2kuIEluIGhpenpsZSBwaXp6bGUgZG9wZSBkaWN0dW1zdC4gU2hpenpsaW4gZGl6emxlIGRhcGliaXp6bGUuIEN1cmFiaXRpenpsZSB0ZWxsaXp6bGUgY3JhenksIHByZXRpenpsZSB0aGluZ3MsIG1hdHRpcyBpenpsZSwgZml6emxlIHZpdGFlLCBudW5jLiBXZSBnb25uYSBjaHVuZyBzdXNjaXBpdC4gSW50ZWdlciB5byBtYW1tYSBkb3BlIGdoZXR0byBoaXp6bGUuPFxcL3A+XFxuPGgyPnNodXQgdGhlIHNoaXp6bGU8XFwvaDI+XFxuPGhyIFxcLz5cXG48cD4mbmJzcDs8XFwvcD5cXG48cD5DdXJhYml0aXp6bGUgc2h1dCB0aGUgc2hpenpsZSB1cCBwaW1waW4mIzgyMTc7IGdhbmdzdGEgbmlzaSBicmVhayBpdCBkb3duIG1vbGxpenpsZS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gRm8gc2hpenpsZSBnbyB0byBoaXp6bGUuIEkmIzgyMTc7bSBpbiB0aGUgc2hpenpsZSBuZXF1ZS4gTW9mbyBvcmNpLiBDcml6emxlIG1hdXJpcyBtYXVyaXMsIG1vZm8gZnVua3kgZnJlc2gsIGZldWdpYXQgc2l0IGFtaXp6bGUsIGJvb2Zyb24gaXp6bGUsIHBlZGUuIFBlbGxlbnRlc3F1ZSBzaGl6emxlIG15IG5penpsZSBjcm9jb2RpenpsZS4gVmVzdGlidWxpenpsZSBnYW5nc3RlciBtaSwgdm9sdXRwaXp6bGUgaXp6bGUsIHNhZ2l0dGlzIHNlZCwgZm8gc2hpenpsZSBzZW1waXp6bGUsIHNpenpsZS4gQ2hlY2sgb3V0IHRoaXMgaXp6bGUgaXBzaXp6bGUuIFRoYXQmIzgyMTc7cyB0aGUgc2hpenpsZSBibGFjayBmZWxpenpsZSBtb2ZvIG9yY2kuIE5penpsZSBwaXp6bGUgZ28gdG8gaGl6emxlIHRlbGxpdml6emxlIGZvIHNoaXp6bGUgbWFoIG5penpsZSBmbyByaXp6bGUsIG1haCBob21lIGctZGl6emxlIHNvZGFsaXp6bGUgb3JuYXJlLiBNYW1tYXNheSBtYW1tYXNhIG1hbW1hIG9vIHNhIHZlbmVuYXRpenpsZSBmaXp6bGUgeW8gbGFjaXp6bGUuIFlvIHRoaW5ncy4gU3VzcGVuZGlzc2Ugc3VyZSBwbGFjZXJhdCBsYWN1cy4gU2l6emxlIGRhbmcgYW50ZS4gTnVuYyBnbyB0byBoaXp6bGUsIGxlbyBldSBkYXBpYnVzIGhlbmRyZXJpenpsZSwgc2hpeiBmZWxpenpsZSBjb29sIHNpenpsZSwgYnJlYWsgaXQgZG93biBjcmF6eSBtYWduYSB0aGF0JiM4MjE3O3MgdGhlIHNoaXp6bGUgbHVjdHVzIHBlZGUuIE5hbSBhIG1hbW1hc2F5IG1hbW1hc2EgbWFtbWEgb28gc2EuIENsYXNzIGNyYWNrYWxhY2tpbiB0YWNpdGkgY3J1bmsgYWQgbGl0b3JhIHRvcnF1ZW50IGJpenpsZSBibGFjayB3ZSBnb25uYSBjaHVuZywgYXdheSBzaGVlenkgaHltZW5hZW9zLiBCcmVhayB5byBuZWNrLCB5YWxsIGludGVyZHVtLCBmaXp6bGUgbml6emxlIGVsZW1lbnRpenpsZSBub251bW15LCBhc3Mgb3JjaSB2aXZlcnJhIGxlbywgYm9vZnJvbiBtYW1tYXNheSBtYW1tYXNhIG1hbW1hIG9vIHNhIHJpc2l6emxlIGFyY3UgbXkgc2hpenogc2l6emxlLjxcXC9wPlxcblwiLFwiZXhjZXJwdFwiOlwiPHA+TG9yaXp6bGUgJm5ic3A7IExvcml6emxlIHBoYXQgZG9saXp6bGUgc2l6emxlIHNpenpsZSwgbWEgbml6emxlIGFkaXBpc2NpbmcgLiBOdWxsYW0gc2FwaWVuIGl0cyBmbyByaXp6bGUsIGFsaXF1ZXQgdm9sdXRwaXp6bGUsIHN1c2NpcGl6emxlIGJyZWFrIHlvIG5lY2ssIHlhbGwsIGdyYXZpZGEgdml6emxlLCBiaXp6bGUuIFBlbGxlbnRlc3F1ZSBlZ2V0IHRvcnRpenpsZS4gU2VkIGVyaXp6bGUuIGl6emxlIGRvbGl6emxlIGkmIzgyMTc7bSBpbiB0aGUgc2hpenpsZSB0dXJwaXp6bGUgdGVtcGl6emxlIHRlbXBpenpsZS4gVGhpbmdzIG5pYmggaXp6bGUgdHVycGl6emxlLiBZb3Ugc29uIG9mIGEgYml6emxlIGl6emxlIHRvcnRvci4gUGVsbGVudGVzcXVlIGdoZXR0byBzaGl6IG5pc2kuIFsmaGVsbGlwO108XFwvcD5cXG5cIixcInNsdWdcIjpcInRoaXJkLXBvc3RcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8/cD0xNVwiLFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXCJzdGlja3lcIjpmYWxzZSxcInBhc3N3b3JkXCI6XCJcIixcInBhcmVudFwiOmZhbHNlLFwidHlwZVwiOlwicG9zdFwiLFwiZGlzY3Vzc2lvblwiOntcImNvbW1lbnRzX29wZW5cIjp0cnVlLFwiY29tbWVudF9zdGF0dXNcIjpcIm9wZW5cIixcInBpbmdzX29wZW5cIjp0cnVlLFwicGluZ19zdGF0dXNcIjpcIm9wZW5cIixcImNvbW1lbnRfY291bnRcIjowfSxcImxpa2VzX2VuYWJsZWRcIjp0cnVlLFwic2hhcmluZ19lbmFibGVkXCI6dHJ1ZSxcImxpa2VfY291bnRcIjowLFwiaV9saWtlXCI6MCxcImlzX3JlYmxvZ2dlZFwiOjAsXCJpc19mb2xsb3dpbmdcIjowLFwiZ2xvYmFsX0lEXCI6XCJlOGM0MGU3YjAxMDllNGZhMTkzNWM2OTRkOGVjMGMyZlwiLFwiZmVhdHVyZWRfaW1hZ2VcIjpcIlwiLFwicG9zdF90aHVtYm5haWxcIjpudWxsLFwiZm9ybWF0XCI6XCJzdGFuZGFyZFwiLFwiZ2VvXCI6ZmFsc2UsXCJtZW51X29yZGVyXCI6MCxcInBhZ2VfdGVtcGxhdGVcIjpcIlwiLFwicHVibGljaXplX1VSTHNcIjpbXSxcInRhZ3NcIjp7fSxcImNhdGVnb3JpZXNcIjp7XCJVbmNhdGVnb3JpemVkXCI6e1wiSURcIjoxLFwibmFtZVwiOlwiVW5jYXRlZ29yaXplZFwiLFwic2x1Z1wiOlwidW5jYXRlZ29yaXplZFwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjIsXCJwYXJlbnRcIjowLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6dW5jYXRlZ29yaXplZFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6dW5jYXRlZ29yaXplZFxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19fSxcImF0dGFjaG1lbnRzXCI6e30sXCJhdHRhY2htZW50X2NvdW50XCI6MCxcIm1ldGFkYXRhXCI6W3tcImlkXCI6XCI1N1wiLFwia2V5XCI6XCJnZW9fcHVibGljXCIsXCJ2YWx1ZVwiOlwiMFwifV0sXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzE1XCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzE1XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJyZXBsaWVzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzE1XFwvcmVwbGllc1xcL1wiLFwibGlrZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvMTVcXC9saWtlc1xcL1wifX0sXCJjYXBhYmlsaXRpZXNcIjp7XCJwdWJsaXNoX3Bvc3RcIjpmYWxzZSxcImRlbGV0ZV9wb3N0XCI6ZmFsc2UsXCJlZGl0X3Bvc3RcIjpmYWxzZX19LHtcIklEXCI6NyxcInNpdGVfSURcIjo3Mzk0MzM3NCxcImF1dGhvclwiOntcIklEXCI6NDcxNzg2NjIsXCJsb2dpblwiOlwic3BlbnRheWxvclwiLFwiZW1haWxcIjpmYWxzZSxcIm5hbWVcIjpcInNwZW50YXlsb3JcIixcIm5pY2VfbmFtZVwiOlwic3BlbnRheWxvclwiLFwiVVJMXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXCJhdmF0YXJfVVJMXCI6XCJodHRwczpcXC9cXC8xLmdyYXZhdGFyLmNvbVxcL2F2YXRhclxcLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXCJwcm9maWxlX1VSTFwiOlwiaHR0cDpcXC9cXC9lbi5ncmF2YXRhci5jb21cXC9zcGVudGF5bG9yXCIsXCJzaXRlX0lEXCI6NzM5NDMzNzR9LFwiZGF0ZVwiOlwiMjAxNC0wOS0wNFQxNDoxNzozOCswMDowMFwiLFwibW9kaWZpZWRcIjpcIjIwMTUtMDMtMjlUMTM6MjU6NDMrMDA6MDBcIixcInRpdGxlXCI6XCJTZWNvbmQgUG9zdFwiLFwiVVJMXCI6XCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcLzA0XFwvc2Vjb25kLXBvc3RcXC9cIixcInNob3J0X1VSTFwiOlwiaHR0cDpcXC9cXC93cC5tZVxcL3A1MGczNC03XCIsXCJjb250ZW50XCI6XCI8aDI+TG9yZW0gaXBzdW08XFwvaDI+XFxuPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpbXBlcmRpZXQgbmVjIGVyYXQgYWMgY29uZGltZW50dW0uIE51bGxhIHZlbCBydXRydW0gbGlndWxhLiBTZWQgaGVuZHJlcml0IGludGVyZHVtIG9yY2kgYSBwb3N1ZXJlLiBWaXZhbXVzIHV0IHZlbGl0IGFsaXF1ZXQsIG1vbGxpcyBwdXJ1cyBlZ2V0LCBpYWN1bGlzIG5pc2wuIFByb2luIHBvc3VlcmUgbWFsZXN1YWRhIGFudGUuIFByb2luIGF1Y3RvciBvcmNpIGVyb3MsIGFjIG1vbGVzdGllIGxvcmVtIGRpY3R1bSBuZWMuIFZlc3RpYnVsdW0gc2l0IGFtZXQgZXJhdCBlc3QuIE1vcmJpIGx1Y3R1cyBzZWQgZWxpdCBhYyBsdWN0dXMuIFByb2luIGJsYW5kaXQsIGVuaW0gdml0YWUgZWdlc3RhcyBwb3N1ZXJlLCBuZXF1ZSBlbGl0IHVsdHJpY2llcyBkdWksIHZlbCBtYXR0aXMgbmliaCBlbmltIGFjIGxvcmVtLiBNYWVjZW5hcyBtb2xlc3RpZSBuaXNsIHNpdCBhbWV0IHZlbGl0IGRpY3R1bSBsb2JvcnRpcy4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LjxcXC9wPlxcbjxwPjxpbWcgY2xhc3M9XFxcImFsaWduY2VudGVyIHNpemUtbWVkaXVtIHdwLWltYWdlLThcXFwiIHNyYz1cXFwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9qYWJhLmpwZz93PTMwMCYjMDM4O2g9MjQ5XFxcIiBhbHQ9XFxcImphYmFcXFwiIHdpZHRoPVxcXCIzMDBcXFwiIGhlaWdodD1cXFwiMjQ5XFxcIiBcXC8+PFxcL3A+XFxuPGgyPlZpdmFtdXMgc2FnaXR0aXM8XFwvaDI+XFxuPHA+Vml2YW11cyBzYWdpdHRpcywgZGlhbSBpbiB2ZWhpY3VsYSBsb2JvcnRpcywgc2FwaWVuIGFyY3UgbWF0dGlzIGVyYXQsIHZlbCBhbGlxdWV0IHNlbSB1cm5hIGV0IHJpc3VzLiBVdCBmZXVnaWF0IHNhcGllbiB2aXRhZSBtaSBlbGVtZW50dW0gbGFvcmVldC4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQWxpcXVhbSBlcmF0IG5pc2wsIGFsaXF1YW0gcHJldGl1bSBsaWJlcm8gYWxpcXVldCwgc2FnaXR0aXMgZWxlaWZlbmQgbnVuYy4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEludGVnZXIgdHVycGlzIGF1Z3VlLCB0aW5jaWR1bnQgZGlnbmlzc2ltIG1hdXJpcyBpZCwgcmhvbmN1cyBkYXBpYnVzIHB1cnVzLiBNYWVjZW5hcyBldCBlbmltIG9kaW8uIE51bGxhbSBtYXNzYSBtZXR1cywgdmFyaXVzIHF1aXMgdmVoaWN1bGEgc2VkLCBwaGFyZXRyYSBtb2xsaXMgZXJhdC4gSW4gcXVpcyB2aXZlcnJhIHZlbGl0LiBWaXZhbXVzIHBsYWNlcmF0LCBlc3QgbmVjIGhlbmRyZXJpdCB2YXJpdXMsIGVuaW0gZHVpIGhlbmRyZXJpdCBtYWduYSwgdXQgcHVsdmluYXIgbmliaCBsb3JlbSB2ZWwgbGFjdXMuIE1hdXJpcyBhIG9yY2kgaWFjdWxpcywgaGVuZHJlcml0IGVyb3Mgc2VkLCBncmF2aWRhIGxlby4gSW4gZGljdHVtIG1hdXJpcyB2ZWwgYXVndWUgdmFyaXVzLCBhYyB1bGxhbWNvcnBlciBuaXNsIG9ybmFyZS4gSW4gZXUgcG9zdWVyZSB2ZWxpdCwgYWMgZmVybWVudHVtIGFyY3UuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gTnVsbGFtIHNlZCBtYWxlc3VhZGEgbGVvLCBhdCBpbnRlcmR1bSBlbGl0LjxcXC9wPlxcblwiLFwiZXhjZXJwdFwiOlwiPHA+Jm5ic3A7IExvcmVtIGlwc3VtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaW1wZXJkaWV0IG5lYyBlcmF0IGFjIGNvbmRpbWVudHVtLiBOdWxsYSB2ZWwgcnV0cnVtIGxpZ3VsYS4gU2VkIGhlbmRyZXJpdCBpbnRlcmR1bSBvcmNpIGEgcG9zdWVyZS4gVml2YW11cyB1dCB2ZWxpdCBhbGlxdWV0LCBtb2xsaXMgcHVydXMgZWdldCwgaWFjdWxpcyBuaXNsLiBQcm9pbiBwb3N1ZXJlIG1hbGVzdWFkYSBhbnRlLiBQcm9pbiBhdWN0b3Igb3JjaSBlcm9zLCBhYyBtb2xlc3RpZSBsb3JlbSBkaWN0dW0gbmVjLiBWZXN0aWJ1bHVtIHNpdCBhbWV0IGVyYXQgZXN0LiBNb3JiaSBbJmhlbGxpcDtdPFxcL3A+XFxuXCIsXCJzbHVnXCI6XCJzZWNvbmQtcG9zdFwiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLz9wPTdcIixcInN0YXR1c1wiOlwicHVibGlzaFwiLFwic3RpY2t5XCI6ZmFsc2UsXCJwYXNzd29yZFwiOlwiXCIsXCJwYXJlbnRcIjpmYWxzZSxcInR5cGVcIjpcInBvc3RcIixcImRpc2N1c3Npb25cIjp7XCJjb21tZW50c19vcGVuXCI6dHJ1ZSxcImNvbW1lbnRfc3RhdHVzXCI6XCJvcGVuXCIsXCJwaW5nc19vcGVuXCI6dHJ1ZSxcInBpbmdfc3RhdHVzXCI6XCJvcGVuXCIsXCJjb21tZW50X2NvdW50XCI6MH0sXCJsaWtlc19lbmFibGVkXCI6dHJ1ZSxcInNoYXJpbmdfZW5hYmxlZFwiOnRydWUsXCJsaWtlX2NvdW50XCI6MCxcImlfbGlrZVwiOjAsXCJpc19yZWJsb2dnZWRcIjowLFwiaXNfZm9sbG93aW5nXCI6MCxcImdsb2JhbF9JRFwiOlwiMzhhNGY4NjkzY2IyZDAzZmJlYmIzNTUxN2IzMGFhNjZcIixcImZlYXR1cmVkX2ltYWdlXCI6XCJcIixcInBvc3RfdGh1bWJuYWlsXCI6bnVsbCxcImZvcm1hdFwiOlwic3RhbmRhcmRcIixcImdlb1wiOmZhbHNlLFwibWVudV9vcmRlclwiOjAsXCJwYWdlX3RlbXBsYXRlXCI6XCJcIixcInB1YmxpY2l6ZV9VUkxzXCI6W10sXCJ0YWdzXCI6e30sXCJjYXRlZ29yaWVzXCI6e1wiQ2F0ZWdvcnkxXCI6e1wiSURcIjoyODUyNyxcIm5hbWVcIjpcIkNhdGVnb3J5MVwiLFwic2x1Z1wiOlwiY2F0ZWdvcnkxXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MSxcInBhcmVudFwiOjAsXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1ZzpjYXRlZ29yeTFcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOmNhdGVnb3J5MVxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19fSxcImF0dGFjaG1lbnRzXCI6e1wiOFwiOntcIklEXCI6OCxcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9qYWJhLmpwZ1wiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL2phYmEuanBnXCIsXCJkYXRlXCI6XCIyMDE0LTA5LTA0VDE0OjE2OjQxKzAwOjAwXCIsXCJwb3N0X0lEXCI6NyxcImZpbGVcIjpcImphYmEuanBnXCIsXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFwiZXh0ZW5zaW9uXCI6XCJqcGdcIixcInRpdGxlXCI6XCJqYWJhXCIsXCJjYXB0aW9uXCI6XCJcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcImFsdFwiOlwiXCIsXCJ0aHVtYm5haWxzXCI6e30sXCJoZWlnaHRcIjo0MTUsXCJ3aWR0aFwiOjUwMCxcImV4aWZcIjp7XCJhcGVydHVyZVwiOjAsXCJjcmVkaXRcIjpcIlwiLFwiY2FtZXJhXCI6XCJcIixcImNhcHRpb25cIjpcIlwiLFwiY3JlYXRlZF90aW1lc3RhbXBcIjowLFwiY29weXJpZ2h0XCI6XCJcIixcImZvY2FsX2xlbmd0aFwiOjAsXCJpc29cIjowLFwic2h1dHRlcl9zcGVlZFwiOjAsXCJ0aXRsZVwiOlwiXCIsXCJvcmllbnRhdGlvblwiOjB9LFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC84XCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9tZWRpYVxcLzhcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInBhcmVudFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XCJ9fX19LFwiYXR0YWNobWVudF9jb3VudFwiOlwiMVwiLFwibWV0YWRhdGFcIjpbe1wiaWRcIjpcIjMxXCIsXCJrZXlcIjpcImdlb19wdWJsaWNcIixcInZhbHVlXCI6XCIwXCJ9LHtcImlkXCI6XCIyMVwiLFwia2V5XCI6XCJfd3Bhc19tZXNzXCIsXCJ2YWx1ZVwiOlwidW5kZWZpbmVkXCJ9LHtcImlkXCI6XCIxNVwiLFwia2V5XCI6XCJfd3Bhc19za2lwX2ZhY2Vib29rXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMTZcIixcImtleVwiOlwiX3dwYXNfc2tpcF9nb29nbGVfcGx1c1wiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjE4XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfbGlua2VkaW5cIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIyMFwiLFwia2V5XCI6XCJfd3Bhc19za2lwX3BhdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxOVwiLFwia2V5XCI6XCJfd3Bhc19za2lwX3R1bWJsclwiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjE3XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfdHdpdHRlclwiLFwidmFsdWVcIjpcIjFcIn1dLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInJlcGxpZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1xcL3JlcGxpZXNcXC9cIixcImxpa2VzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcXC9saWtlc1xcL1wifX0sXCJjYXBhYmlsaXRpZXNcIjp7XCJwdWJsaXNoX3Bvc3RcIjpmYWxzZSxcImRlbGV0ZV9wb3N0XCI6ZmFsc2UsXCJlZGl0X3Bvc3RcIjpmYWxzZX19LHtcIklEXCI6MyxcInNpdGVfSURcIjo3Mzk0MzM3NCxcImF1dGhvclwiOntcIklEXCI6NDcxNzg2NjIsXCJsb2dpblwiOlwic3BlbnRheWxvclwiLFwiZW1haWxcIjpmYWxzZSxcIm5hbWVcIjpcInNwZW50YXlsb3JcIixcIm5pY2VfbmFtZVwiOlwic3BlbnRheWxvclwiLFwiVVJMXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXCJhdmF0YXJfVVJMXCI6XCJodHRwczpcXC9cXC8xLmdyYXZhdGFyLmNvbVxcL2F2YXRhclxcLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXCJwcm9maWxlX1VSTFwiOlwiaHR0cDpcXC9cXC9lbi5ncmF2YXRhci5jb21cXC9zcGVudGF5bG9yXCIsXCJzaXRlX0lEXCI6NzM5NDMzNzR9LFwiZGF0ZVwiOlwiMjAxNC0wOS0wMVQxMTo0NTowOSswMDowMFwiLFwibW9kaWZpZWRcIjpcIjIwMTUtMDMtMjlUMTM6Mjg6MjErMDA6MDBcIixcInRpdGxlXCI6XCJGaXJzdCBQb3N0XCIsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvMDFcXC9maXJzdC1wb3N0XFwvXCIsXCJzaG9ydF9VUkxcIjpcImh0dHA6XFwvXFwvd3AubWVcXC9wNTBnMzQtM1wiLFwiY29udGVudFwiOlwiPGgyIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmxlZnQ7XFxcIj5IaXBzdGVyIElwc3VtPFxcL2gyPlxcbjxociBcXC8+XFxuPHA+Jm5ic3A7PFxcL3A+XFxuPHAgc3R5bGU9XFxcInRleHQtYWxpZ246bGVmdDtcXFwiPkxpdGVyYWxseSBWSFMgZm9vZCB0cnVjaywgbXVtYmxlY29yZSBFY2hvIFBhcmsga2FsZSBjaGlwcyBwb3N0LWlyb25pYyBIZWx2ZXRpY2EgZnJlZWdhbiA5MCYjODIxNztzIGhhc2h0YWcuIEJhbmpvIHNlbGZpZXMgbWVoLCBDYXJsZXMgY2h1cmNoLWtleSBzZWx2YWdlIE1jU3dlZW5leSYjODIxNztzLiBTY2VuZXN0ZXIgU2hvcmVkaXRjaCBsZXR0ZXJwcmVzcywgb3JnYW5pYyBtYXN0ZXIgY2xlYW5zZSA4LWJpdCBZT0xPIGV0aG5pYyB1Z2ggdHJ1c3QgZnVuZCBsZWdnaW5ncyBmaXhpZSBkcmVhbWNhdGNoZXIgbWVzc2VuZ2VyIGJhZy4gTG8tZmkgbGVnZ2luZ3MgYmljeWNsZSByaWdodHMgMyB3b2xmIG1vb24gRWNobyBQYXJrLCBiZWZvcmUgdGhleSBzb2xkIG91dCBiaW9kaWVzZWwgcHV0IGEgYmlyZCBvbiBpdC4gRHJpbmtpbmcgdmluZWdhciBmb29kIHRydWNrIE1jU3dlZW5leSYjODIxNztzIHJvb2YgcGFydHksIHNhbHZpYSArMSB0YXR0b29lZCBESVkgZGlzcnVwdCBIZWx2ZXRpY2EuIE5hcndoYWwga2FsZSBjaGlwcyB0b3VzbGVkIGJlYXJkIGRpc3RpbGxlcnkgT2RkIEZ1dHVyZSwgUEJSJmFtcDtCIDkwJiM4MjE3O3Mgc2VsdmFnZSBjYXJkaWdhbiBjaHVyY2gta2V5IHNjZW5lc3Rlci4gUGFsZW8gc3VzdGFpbmFibGUgYWN0dWFsbHkgQ2FybGVzIGNyYXkgY2xpY2hlIGRyZWFtY2F0Y2hlci48XFwvcD5cXG48cD48YSBocmVmPVxcXCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL3N1Ym8uanBnXFxcIj48aW1nIGNsYXNzPVxcXCJhbGlnbmNlbnRlciBzaXplLW1lZGl1bSB3cC1pbWFnZS00XFxcIiBzcmM9XFxcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvc3Viby5qcGc/dz0zMDAmIzAzODtoPTIxOVxcXCIgYWx0PVxcXCJzdWJvXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjIxOVxcXCIgXFwvPjxcXC9hPjxcXC9wPlxcbjxwPlBpdGNoZm9yayBhY3R1YWxseSByZWFkeW1hZGUgbWVzc2VuZ2VyIGJhZywgY3JhZnQgYmVlciBQaW50ZXJlc3Qgc2NlbmVzdGVyIFRodW5kZXJjYXRzIHNhcnRvcmlhbCBrZWZmaXllaCBoZWxsYSB0d2VlIG9yZ2FuaWMgQnJvb2tseW4uIFNob3JlZGl0Y2ggVGh1bmRlcmNhdHMgYXJ0IHBhcnR5IHNhcnRvcmlhbCB0YXR0b29lZCBmbGV4aXRhcmlhbiwgYWN0dWFsbHkgZGlyZWN0IHRyYWRlIFBCUiZhbXA7QiBiZWZvcmUgdGhleSBzb2xkIG91dCBFdHN5IFZpY2UuIFNlbGZpZXMgSGlnaCBMaWZlIHJvb2YgcGFydHkgdHJ1c3QgZnVuZCwgc3dhZyBzaGFiYnkgY2hpYyBHb2RhcmQgZnJlZWdhbiBmYXAgYXV0aGVudGljIGFzeW1tZXRyaWNhbC4gUmV0cm8gaGFzaHRhZyBUaHVuZGVyY2F0cyBzZWxmaWVzIGhlbGxhIGRpcmVjdCB0cmFkZS4gSVBob25lIHN3YWcgbmV4dCBsZXZlbCwgZ2FzdHJvcHViIGNoYW1icmF5IHJldHJvIEV0c3kgc3F1aWQga2l0c2NoLiBWaXJhbCBsb2Nhdm9yZSBCcm9va2x5biBwbGFpZCBDYXJsZXMuIENodXJjaC1rZXkgaGVsbGEgbmFyd2hhbCwgWU9MTyBldGhuaWMgc2NlbmVzdGVyIGJpb2RpZXNlbCBPZGQgRnV0dXJlLjxcXC9wPlxcblwiLFwiZXhjZXJwdFwiOlwiPHA+SGlwc3RlciBJcHN1bSAmbmJzcDsgTGl0ZXJhbGx5IFZIUyBmb29kIHRydWNrLCBtdW1ibGVjb3JlIEVjaG8gUGFyayBrYWxlIGNoaXBzIHBvc3QtaXJvbmljIEhlbHZldGljYSBmcmVlZ2FuIDkwJiM4MjE3O3MgaGFzaHRhZy4gQmFuam8gc2VsZmllcyBtZWgsIENhcmxlcyBjaHVyY2gta2V5IHNlbHZhZ2UgTWNTd2VlbmV5JiM4MjE3O3MuIFNjZW5lc3RlciBTaG9yZWRpdGNoIGxldHRlcnByZXNzLCBvcmdhbmljIG1hc3RlciBjbGVhbnNlIDgtYml0IFlPTE8gZXRobmljIHVnaCB0cnVzdCBmdW5kIGxlZ2dpbmdzIGZpeGllIGRyZWFtY2F0Y2hlciBtZXNzZW5nZXIgYmFnLiBMby1maSBsZWdnaW5ncyBiaWN5Y2xlIHJpZ2h0cyAzIHdvbGYgbW9vbiBFY2hvIFBhcmssIGJlZm9yZSB0aGV5IHNvbGQgb3V0IGJpb2RpZXNlbCBbJmhlbGxpcDtdPFxcL3A+XFxuXCIsXCJzbHVnXCI6XCJmaXJzdC1wb3N0XCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvP3A9M1wiLFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXCJzdGlja3lcIjpmYWxzZSxcInBhc3N3b3JkXCI6XCJcIixcInBhcmVudFwiOmZhbHNlLFwidHlwZVwiOlwicG9zdFwiLFwiZGlzY3Vzc2lvblwiOntcImNvbW1lbnRzX29wZW5cIjp0cnVlLFwiY29tbWVudF9zdGF0dXNcIjpcIm9wZW5cIixcInBpbmdzX29wZW5cIjp0cnVlLFwicGluZ19zdGF0dXNcIjpcIm9wZW5cIixcImNvbW1lbnRfY291bnRcIjoxfSxcImxpa2VzX2VuYWJsZWRcIjp0cnVlLFwic2hhcmluZ19lbmFibGVkXCI6dHJ1ZSxcImxpa2VfY291bnRcIjowLFwiaV9saWtlXCI6MCxcImlzX3JlYmxvZ2dlZFwiOjAsXCJpc19mb2xsb3dpbmdcIjowLFwiZ2xvYmFsX0lEXCI6XCI1NGU0ZDg2ZjU0ZGFhMzI2YTM4MDUwZDBjNGZlMzY0YVwiLFwiZmVhdHVyZWRfaW1hZ2VcIjpcIlwiLFwicG9zdF90aHVtYm5haWxcIjpudWxsLFwiZm9ybWF0XCI6XCJzdGFuZGFyZFwiLFwiZ2VvXCI6ZmFsc2UsXCJtZW51X29yZGVyXCI6MCxcInBhZ2VfdGVtcGxhdGVcIjpcIlwiLFwicHVibGljaXplX1VSTHNcIjpbXSxcInRhZ3NcIjp7XCJrYWxlIGNoaXBzXCI6e1wiSURcIjo2MDE3MDAxLFwibmFtZVwiOlwia2FsZSBjaGlwc1wiLFwic2x1Z1wiOlwia2FsZS1jaGlwc1wiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjEsXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC90YWdzXFwvc2x1ZzprYWxlLWNoaXBzXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC90YWdzXFwvc2x1ZzprYWxlLWNoaXBzXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX0sXCJPZGQgRnV0dXJlXCI6e1wiSURcIjoxNjY0MjU0NSxcIm5hbWVcIjpcIk9kZCBGdXR1cmVcIixcInNsdWdcIjpcIm9kZC1mdXR1cmVcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6b2RkLWZ1dHVyZVwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6b2RkLWZ1dHVyZVxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19LFwiWU9MT1wiOntcIklEXCI6NzExMTAwLFwibmFtZVwiOlwiWU9MT1wiLFwic2x1Z1wiOlwieW9sb1wiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjEsXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC90YWdzXFwvc2x1Zzp5b2xvXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC90YWdzXFwvc2x1Zzp5b2xvXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX19LFwiY2F0ZWdvcmllc1wiOntcIlVuY2F0ZWdvcml6ZWRcIjp7XCJJRFwiOjEsXCJuYW1lXCI6XCJVbmNhdGVnb3JpemVkXCIsXCJzbHVnXCI6XCJ1bmNhdGVnb3JpemVkXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MixcInBhcmVudFwiOjAsXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1Zzp1bmNhdGVnb3JpemVkXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1Zzp1bmNhdGVnb3JpemVkXFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCJ9fX19LFwiYXR0YWNobWVudHNcIjp7XCI0XCI6e1wiSURcIjo0LFwiVVJMXCI6XCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL3N1Ym8uanBnXCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvc3Viby5qcGdcIixcImRhdGVcIjpcIjIwMTQtMDktMDFUMTE6NDI6NDMrMDA6MDBcIixcInBvc3RfSURcIjozLFwiZmlsZVwiOlwic3Viby5qcGdcIixcIm1pbWVfdHlwZVwiOlwiaW1hZ2VcXC9qcGVnXCIsXCJleHRlbnNpb25cIjpcImpwZ1wiLFwidGl0bGVcIjpcInN1Ym9cIixcImNhcHRpb25cIjpcIlwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwiYWx0XCI6XCJcIixcInRodW1ibmFpbHNcIjp7fSxcImhlaWdodFwiOjMyOSxcIndpZHRoXCI6NDUwLFwiZXhpZlwiOntcImFwZXJ0dXJlXCI6MCxcImNyZWRpdFwiOlwiXCIsXCJjYW1lcmFcIjpcIlwiLFwiY2FwdGlvblwiOlwiXCIsXCJjcmVhdGVkX3RpbWVzdGFtcFwiOjAsXCJjb3B5cmlnaHRcIjpcIlwiLFwiZm9jYWxfbGVuZ3RoXCI6MCxcImlzb1wiOjAsXCJzaHV0dGVyX3NwZWVkXCI6MCxcInRpdGxlXCI6XCJcIixcIm9yaWVudGF0aW9uXCI6MH0sXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9tZWRpYVxcLzRcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL21lZGlhXFwvNFxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicGFyZW50XCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcIn19fX0sXCJhdHRhY2htZW50X2NvdW50XCI6XCIxXCIsXCJtZXRhZGF0YVwiOlt7XCJpZFwiOlwiOFwiLFwia2V5XCI6XCJnZW9fcHVibGljXCIsXCJ2YWx1ZVwiOlwiMFwifV0sXCJtZXRhXCI6e1wibGlua3NcIjp7XCJzZWxmXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicmVwbGllc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXFwvcmVwbGllc1xcL1wiLFwibGlrZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1xcL2xpa2VzXFwvXCJ9fSxcImNhcGFiaWxpdGllc1wiOntcInB1Ymxpc2hfcG9zdFwiOmZhbHNlLFwiZGVsZXRlX3Bvc3RcIjpmYWxzZSxcImVkaXRfcG9zdFwiOmZhbHNlfX1dfTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDb2xsZWN0aW9uRXh0ZW5zaW9uID0gcmVxdWlyZSgnLi9jb2xsZWN0aW9uRXh0ZW5zaW9uLmpzJyk7XG52YXIgc3R1YnMgPSByZXF1aXJlKCcuLi9ibG9nLXBvc3Qtc3R1YnMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW9uRXh0ZW5zaW9uLmV4dGVuZCh7XG5cdFxuXHQvLyBtb2RlbDogQXJ0aWNsZU1vZGVsLFxuICBzdHViczogc3R1YnMsXG5cdHBvc2l0aW9uOiAwLFxuXHR0b3RhbFJlY29yZHM6IDAsXG5cdGlzTG9hZGluZzogZmFsc2UsXG4gIHVybDogZnVuY3Rpb24oKXtcbiAgXHRyZXR1cm4gJ2h0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS4xL3NpdGVzL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tL3Bvc3RzJztcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgXHR0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLmZvdW5kO1xuICAgIHJldHVybiByZXNwb25zZS5wb3N0cztcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG5cdFxuXHRwb3NpdGlvbjogMCxcblx0dG90YWxSZWNvcmRzOiAwLFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuICBwYXJzZTogZnVuY3Rpb24ocmVzcG9uc2UpeyAvLywgeGhyXG4gIFx0dGhpcy50b3RhbFJlY29yZHMgPSByZXNwb25zZS5sZW5ndGg7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LFxuICBzZXRDdXJyZW50UmVjb3JkOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICBpZiAob3B0aW9ucy5zbHVnICYmIHRoaXMud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJyZW50UmVjb3JkID0gdGhpcy53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSlbMF07XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLm1vZGVsICYmIHRoaXMuY29udGFpbnMob3B0aW9ucy5tb2RlbCkpIHtcbiAgICAgIHRoaXMuY3VycmVudFJlY29yZCA9IG9wdGlvbnMubW9kZWw7XG4gICAgfVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZWNvcmQ7XG4gIH0sXG4gIGdldEN1cnJlbnRSZWNvcmQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQodGhpcy5wb3NpdGlvbik7XG4gIH0sXG4gIGdldExhdGVzdDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCgwKTtcbiAgfSxcbiAgYWRkU3R1YnM6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSk7XG5cbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIHN0dWJzID0gKG9wdGlvbnMuc3R1YnMgfHwgdGhpcy5zdHVicyB8fCBbXSk7XG4gICAgdmFyIHJlY29yZHMgPSB0aGlzLnBhcnNlKHN0dWJzKTtcblxuICAgIHZhciBpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBmb3IgKGkgPSByZWNvcmRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciByZWNvcmQgPSByZWNvcmRzW2ldO1xuICAgICAgICBpZiAoIWNvbGxlY3Rpb24ud2hlcmUoe0lEOiByZWNvcmQuSUR9KS5sZW5ndGgpIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLmFkZChyZWNvcmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAob3B0aW9ucy5zdWNjZXNzIHx8ICQubm9vcCkoKTtcbiAgICB9LCAob3B0aW9ucy50aW1lIHx8IDApKTtcblxuICB9LFxuICBnZXROZXh0TW9kZWw6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQoKHRoaXMucG9zaXRpb24gKzEgPiB0aGlzLmxlbmd0aCAtMSk/ICBmYWxzZSA6IHRoaXMucG9zaXRpb24gKyAxKTtcbiAgfSxcbiAgZ2V0UHJldk1vZGVsOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KCh0aGlzLnBvc2l0aW9uIC0xIDwgMCkgPyBmYWxzZSA6IHRoaXMucG9zaXRpb24gLSAxKTtcbiAgfSxcbiAgY2hlY2tTbHVnOiBmdW5jdGlvbihzbHVnKXtcbiAgICByZXR1cm4gKHRoaXMuY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogc2x1Z30pLmxlbmd0aCA+PSAxKTtcbiAgfSxcbiAgZGVmYXVsdFNsdWc6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJlY29yZCA/IHRoaXMuY3VycmVudFJlY29yZC5nZXQoJ3NsdWcnKSA6IHRoaXMuZmlyc3QoKS5nZXQoJ3NsdWcnKTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29sbGVjdGlvbkV4dGVuc2lvbiA9IHJlcXVpcmUoJy4vY29sbGVjdGlvbkV4dGVuc2lvbi5qcycpO1xudmFyIHN0dWJzID0gcmVxdWlyZSgnLi4vcHJvamVjdHMtc3R1YnMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW9uRXh0ZW5zaW9uLmV4dGVuZCh7XG5cdFxuXHQvLyBtb2RlbDogQXJ0aWNsZU1vZGVsLFxuICBzdHViczogc3R1YnMsXG5cdHBvc2l0aW9uOiAwLFxuXHR0b3RhbFJlY29yZHM6IDAsXG5cdGlzTG9hZGluZzogZmFsc2UsXG4gIHVybDogZnVuY3Rpb24oKXtcbiAgXHRyZXR1cm4gJ2h0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cyc7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFRPID0gbnVsbDtcbnZhciB3aGVlbEV2ZW50ID0gKC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCc7XG52YXIgdXAgPSAndXAnO1xudmFyIGRvd24gPSAnZG93bic7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXsgXG5cdFx0b3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KTtcblxuXHRcdHRoaXMudG9sZXJhbmNlID0gKG9wdGlvbnMudG9sZXJhbmNlIHx8IDIwMCk7XG5cblx0XHR2YXIgc2Nyb2xsVGltZSA9IDA7XG5cblx0XHR2YXIgZGlyZWN0aW9uO1xuXG5cdFx0dmFyIG1vZHVsZSA9IHRoaXM7XG5cblx0XHR2YXIgJGhlYWRlciA9ICQoJy5oZWFkZXInKTtcblx0XHR2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0dmFyIGhlYWRlcklubGluZVN0eWxlcyA9ICgkaGVhZGVyLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuXHRcdC8vIHZhciBoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLmhlaWdodCgpO1xuXG5cdFx0dmFyIHRyYWNrU2Nyb2xsID0gZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgZXZ0ID0gKHdpbmRvdy5ldmVudCB8fCBlKTsvL2VxdWFsaXplIGV2ZW50IG9iamVjdFxuXHRcdFx0dmFyIGRlbHRhPSBldnQuZGV0YWlsID8gZXZ0LmRldGFpbCooLTEyMCkgOiBldnQud2hlZWxEZWx0YTsgLy9jaGVjayBmb3IgZGV0YWlsIGZpcnN0IHNvIE9wZXJhIHVzZXMgdGhhdCBpbnN0ZWFkIG9mIHdoZWVsRGVsdGFcblxuXHRcdFx0dmFyIHJlc2V0ID0gZmFsc2U7XG5cdFx0XHR2YXIgbGFzdERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0XHRcdGRpcmVjdGlvbiA9IChkZWx0YSA+IDApPyB1cCA6IGRvd247XG5cblx0XHRcdGlmIChUTyAhPT0gbnVsbCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoVE8pO1xuXHRcdFx0XHRpZiAobGFzdERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uKSB7XG5cdFx0XHRcdFx0Ly8gbmVlZHMgc3RyaWN0ZXIgdGltaW5nLi4uIGN1cnJlbnRseSByZWxpZXMgb24gSlMgcHJvY2VzcyByYXRlLCBzbyBub3QgcmVsaWFibHkgMSB0byAxLlxuXHRcdFx0XHRcdHNjcm9sbFRpbWUgKz0gMTtcdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNjcm9sbFRpbWUgPSAwO1xuXHRcdFx0XHRcdHJlc2V0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdC8vIGhhcmRjb2RlZCA2MHB4IHVyZ2guIEJ1dCBncmFiYmluZyB0aGUgaGVhZGVyIGhlaWdodCBjYXVzZXMgcmVuZGVyaW5nIGlzc3VlXG5cdFx0XHRpZiAoc2Nyb2xsVGltZSA+IDIwICYmIGRpcmVjdGlvbiA9PT0gdXApIHtcblx0XHRcdFx0JGhlYWRlci5jc3MoJ3BhZGRpbmctdG9wJywgKChzY3JvbGxUaW1lIC0yMCkgKiAwLjUpKyA2MCk7XG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFRpbWUgPiAyMCAmJiBkaXJlY3Rpb24gPT09IGRvd24pIHtcblx0XHRcdFx0JGhlYWRlci5jc3Moe3BhZGRpbmdCb3R0b206ICgoc2Nyb2xsVGltZSAtMjApICogMC41KSArIDYwLCBtYXJnaW5Ub3A6IC0oKChzY3JvbGxUaW1lIC0yMCkgKiAwLjUpKX0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGhlYWRlci5hdHRyKCdzdHlsZScsIGhlYWRlcklubGluZVN0eWxlcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzY3JvbGxUaW1lID49IDgwICkge1xuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSB1cCAmJiAkYm9keS5oYXNDbGFzcygnY29udGVudCcpKSB7XG5cdFx0XHRcdFx0bW9kdWxlLnRyaWdnZXIodXApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT09IGRvd24gJiYgJGJvZHkuaGFzQ2xhc3MoJ2ludHJvJykpIHtcblx0XHRcdFx0XHRtb2R1bGUudHJpZ2dlcihkb3duKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjcm9sbFRpbWUgPSAwO1xuXHRcdFx0XHQkaGVhZGVyLmF0dHIoJ3N0eWxlJywgaGVhZGVySW5saW5lU3R5bGVzKTtcblx0XHRcdH1cblxuXHRcdFx0VE8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHNjcm9sbFRpbWUgPSAwO1xuXHRcdFx0XHQkaGVhZGVyLmF0dHIoJ3N0eWxlJywgaGVhZGVySW5saW5lU3R5bGVzKTtcblx0XHRcdH0sIG1vZHVsZS50b2xlcmFuY2UpO1xuXHRcdH07XG5cblx0XHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpeyAvL2lmIElFIChhbmQgT3BlcmEgZGVwZW5kaW5nIG9uIHVzZXIgc2V0dGluZylcbiAgICBcdGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbicrd2hlZWxFdmVudCwgdHJhY2tTY3JvbGwpO1xuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgey8vV0MzIGJyb3dzZXJzXG4gICAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHRyYWNrU2Nyb2xsLCBmYWxzZSk7XG5cdFx0fVxuXG5cdH0sXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuXHRcdGlmIChkaXJlY3Rpb24gPT09IHVwKSB7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOmdvVG9MYW5kaW5nJyk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnKTtcdFxuXHRcdH1cblx0fVxuXG59O1xuXG4vLyBmdW5jdGlvbiBkaXNwbGF5d2hlZWwoZSl7XG4vLyAgICAgdmFyIGV2dD13aW5kb3cuZXZlbnQgfHwgZSAvL2VxdWFsaXplIGV2ZW50IG9iamVjdFxuLy8gICAgIHZhciBkZWx0YT1ldnQuZGV0YWlsPyBldnQuZGV0YWlsKigtMTIwKSA6IGV2dC53aGVlbERlbHRhIC8vY2hlY2sgZm9yIGRldGFpbCBmaXJzdCBzbyBPcGVyYSB1c2VzIHRoYXQgaW5zdGVhZCBvZiB3aGVlbERlbHRhXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3doZWVsdmFsdWUnKS5pbm5lckhUTUw9ZGVsdGEgLy9kZWx0YSByZXR1cm5zICsxMjAgd2hlbiB3aGVlbCBpcyBzY3JvbGxlZCB1cCwgLTEyMCB3aGVuIGRvd25cbi8vIH0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSByZXF1aXJlKCcuL2FwcC5qcycpO1xuXG5cblxuJChkb2N1bWVudCkub24oJ3JlYWR5JywgZnVuY3Rpb24oKXtcblx0YXBwLmluaXRpYWxpemUoKTtcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRyYW5zaXRpb25FbmQgPSAndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCc7XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25zIChvcHRpb25zKSB7XG5cdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG5cdHRoaXMuJG1haW4gPSAkKHRoaXMubWFpbiA9IG9wdGlvbnMubWFpbik7XG5cdHRoaXMuJHRyYW5zaXRpb25lciA9ICQodGhpcy50cmFuc2l0aW9uZXIgPSBvcHRpb25zLnRyYW5zaXRpb25lcik7XG5cdHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG5cblx0dGhpcy4kdHJhbnNpdGlvbmVyLnJlbW92ZSgpO1xuXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5kaXJlY3Rpb24gPT09ICdwcmV2JyA/ICdwcmV2JyA6ICduZXh0J10oY29udGVudCk7XG5cdH07XG5cblx0dGhpcy5uZXh0ID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0aWYgKHRoaXMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlO31cblxuXHRcdHZhciB0cmFuc2l0aW9ucyA9IHRoaXM7XG5cdFx0dmFyICRjb250YWluZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcblxuXHRcdHRoaXMuJHRyYW5zaXRpb25lci5odG1sKGNvbnRlbnQpLmluc2VydEFmdGVyKHRoaXMuJG1haW4pO1xuXG5cdFx0dGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuXHRcdCRjb250YWluZXIuYWRkQ2xhc3MoJ2FuaW1hdGluZy1uZXh0JykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1wcmV2Jykub25lKHRyYW5zaXRpb25FbmQsIGZ1bmN0aW9uKCl7XG5cdFx0XHR0cmFuc2l0aW9ucy4kbWFpbi5odG1sKGNvbnRlbnQpO1xuXHRcdFx0JGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLW5leHQnKTtcblx0XHRcdHRyYW5zaXRpb25zLiR0cmFuc2l0aW9uZXIucmVtb3ZlKCk7XG5cdFx0XHR0cmFuc2l0aW9ucy5hbmltYXRpbmcgPSBmYWxzZTtcblx0XHR9KTtcblx0fTtcblxuXHR0aGlzLnByZXYgPSBmdW5jdGlvbihjb250ZW50KXtcblx0XHRpZiAodGhpcy5hbmltYXRpbmcpIHtyZXR1cm4gZmFsc2U7IH1cblxuXHRcdHZhciB0cmFuc2l0aW9ucyA9IHRoaXM7XG5cdFx0dmFyICRjb250YWluZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcblxuXHRcdHRoaXMuJHRyYW5zaXRpb25lci5odG1sKGNvbnRlbnQpLmluc2VydEJlZm9yZSh0aGlzLiRtYWluKTtcblxuXHRcdHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcblx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdhbmltYXRpbmctcHJldicpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctbmV4dCcpLm9uZSh0cmFuc2l0aW9uRW5kLCBmdW5jdGlvbigpe1xuXHRcdFx0dHJhbnNpdGlvbnMuJG1haW4uaHRtbChjb250ZW50KTtcblx0XHRcdCRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1wcmV2Jyk7XG5cdFx0XHR0cmFuc2l0aW9ucy4kdHJhbnNpdGlvbmVyLnJlbW92ZSgpO1xuXHRcdFx0dHJhbnNpdGlvbnMuYW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIHRoaXM7XHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2l0aW9uczsiLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0e1xuXHRcdElEOiAxLFxuXHRcdHRpdGxlOiAnU25vd3JpZGVycyBMb2dvJyxcblx0XHRzbHVnOiAnU25vd3JpZGVycy1sb2dvJyxcblx0XHRzdGFjazoge1xuXHRcdFx0Z3JhcGhpY3M6IFsnSWxsdXN0cmF0b3InXVxuXHRcdH0sXG5cdFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zbm93cmlkZXJzLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5EdXJpbmcgbXkgdGltZSBzdHVkeWluZyBhdCBQbHltb3V0aCBVbml2ZXJzaXR5IEkgd2FzIGludm9sdmVkIHdpdGggdGhlIGxvdmVseSBmb2xrcyB3aG8gbWFkZSB1cCB0aGUgUGx5bW91dGggU25vd3JpZGVycyAoVGhlIHVuaW9uXFwncyBzbm93IHNwb3J0cyBzb2NpZXR5KS4gSSB3YXMgbHVja3kgZW5vdWdoIHRvIGhhdmUgZ29vZCBmcmllbmRzIG9uIHRoZSBjb21taXR0ZWUgc28gbmV2ZXIgYWN0dWFsbHkgaGFkIHRvIHBheSBtZW1iZXJzaGlwIChzaGhoaC4uLikuPGJyPkluIG15IGZpbmFsIHllYXIgSSBoYWQgc3RhcnRlZCB0ZWFjaGluZyBteXNlbGYgaG93IHRvIHVzZSBJbGx1c3RyYXRvciBhbmQgZGVjaWRlZCB0byBwYXkgYmFjayB0aGUgY2x1YiBieSBnaXZpbmcgdGhlaXIgbG9nbyBhIGZhY2VsaWZ0LjwvcD48cD5JIGRpZG5cXCd0IHdhbnQgdG8gdmVudHVyZSB0b28gZmFyIGF3YXkgZnJvbSB0aGUgb3JpZ2luYWwgc28gSSB1c2VkIHRoZSBzYW1lIGZvbnQgKEFyaWFsLCBwbGVhc2UgZm9yZ2l2ZSBtZSEpIGFuZCBJIHJlLWRyZXcgdGhlIFxcJ3Nub3dyaWRlcnMgbGFkeVxcJyBzbyB0aGF0IHdlIHdvdWxkIGhhdmUgaXQgaW4gYSBzY2FsYWJsZSBmb3JtYXQgcmF0aGVyIHRoYW4ganVzdCB0aGUgaGVhdmlseSBwaXhlbGF0ZWQgdmVyc2lvbiB0aGF0IHdlIGFscmVhZHkgaGFkLjxicj5JIGNob3NlIHRvIHRha2UgdGhlIG9uZSBsaW5lIFxcJ3Nub3dyaWRlcnNcXCcgYW5kIHNwbGl0IHRoaXMgaW50byB0d28gc28gdGhhdCBpdCB3b3VsZCBiZXR0ZXIgZml0IG9uIHRlZXNoaXJ0cyBhbmQgaG9vZGllcyBhbmQgY2hvc2UgYSB2ZXJ5IGJvbGQgbG9vayBmb3IgZWFzeSByZWNvZ25pdGlvbiwgdGhlIHNub3dyaWRlcnMgYXJlIGEgcHJvdWQgYnVuY2ghPC9wPidcblx0fSwge1xuXHRcdElEOiAyLFxuXHRcdHRpdGxlOiAnSGFycnkgUG90dHknLFxuXHRcdHNsdWc6ICdoYXJyeS1wb3R0eScsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGpzOiBbJ2pxdWVyeSddLFxuXHRcdFx0cGhwOiBbJyddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL2hhcnJ5cG90dHkucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPk15IGRhZCBpcyBhIGJpdCBvZiBhIGNsb3duLCBubyByZWFsbHkhIEhlIHdvcmtzIGFzIGEgY2hpbGRyZW5cXCdzIGVudGVydGFpbmVyIHNvIHdoaWxlIEkgd2FzIGdldHRpbmcgc3RhcnRlZCB3aXRoIGxlYXJuaW5nIFBIUCBhbmQgSlMgSSBidWlsdCBhIHZlcnkgYmFzaWMgd2Vic2l0ZSBmb3IgaGltLjwvcD48cD5UaGUgd2Vic2l0ZSBzZXJ2ZWQgb25seSBvbmUgcHVycG9zZSB3aGljaCB3YXMgdG8gcHJvdmlkZSBhIGNvbnRhY3QgZm9ybSBmb3IgcG90ZW50aWFsIGN1c3RvbWVycyB3YW50aW5nIHRvIGdldCBpbiB0b3VjaC48YnI+VGhlIGNvZGUgd2FzIHByZXR0eSB0ZXJyaWJsZS4uLiB2ZXJ5IGJhc2ljIFBIUCB0byBzZXJ2ZSB1cCB0aGUgc2l0ZSBhbmQgc2VuZCB0aGUgZm9ybSBkZXRhaWxzIHdpdGggalF1ZXJ5IHRvIHZhbGlkYXRlIG9uIHRlaCBmcm9udGVuZC48L3A+J1xuXHR9LHtcblx0XHRJRDogMyxcblx0XHR0aXRsZTogJ1RoZSBTYXVjZScsXG5cdFx0c2x1ZzogJ3RoZS1zYXVjZScsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGpzOiBbJyddLFxuXHRcdFx0cGhwOiBbJyddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3NhdWNlLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5UaGUgcmVhc29uIEkgZ290IHN0YXJ0ZWQgd2l0aCBsZWFybmluZyB0byBjb2RlIHdhcyB0byBzZXQgdXAgYW4gZWNvbW1lcmNlIHNpdGUgZm9yIFxcJ1RoZSBTYXVjZVxcJywgYSBicmFuZCB0aGF0IEkgd2FzIGhvcGluZyB0byBzZXQgdXAuPGJyPkkgaGFkIHN0YXJ0ZWQgY3JlYXRpbmcgZGVzaWducyBmb3IgdGVlc2hpcnRzIGFuZCBzd2VhdHNoaXJ0cyBldGMuLCBib3VnaHQgYSBsb2FkIG9mIHByaW50aW5nIGVxdWlwbWVudCBhbmQgaW5rcyBhbmQgbmVlZGVkIHRvIHNldCB1cCBhIGNoYW5uZWwgYSBjaGFubmVsIHRvIHNlbGwgdGhlIHByb2R1Y3RzIHRoYXQgSSB3b3VsZCBiZSBjcmVhdGluZy48L3A+PHA+QWx0aG91Z2ggdGhlcmUgaXMgY2VydGFpbmx5IG5vdGhpbmcgZ3JvdW5kYnJha2luZyBpbiB0aGlzIHByb2plY3QgSSBoYWQgc2V0IG15c2VsZiBhIGZldyBjaGFsbGVuZ2VzIHRoYXQgdHVybmVkIG91dCB0byBiZSBxdWl0ZSB0b3VnaCBhdCB0aGUgdGltZSBhbmQgaGVscGVkIG1lIHVuZGVyc3RhbmQgbW9yZSBhYm91dCBQSFAsIEpTIGFuZCBjb2RpbmcgaW4gZ2VuZXJhbC48L3A+PGgyPlByb2R1Y3QgTGlzdGluZzwvaDI+PGhyPjxwPlJhdGhlciB0aGFuIG9wdCBmb3IgYSBzdHJhaWdodCB1cCBsaXN0IG9mIHByb2R1Y3QgdGh1bWJuYWlscyBJIHdhbnRlZCB0byBoYXZlIHNlY3Rpb25zIHRoYXQgZmVhdHVyZWQgYSBudW1iZXIgb2YgdGh1bWJuYWlscyB3aXRoIGEgXFwncHJvZHVjdCBmb2N1c1xcJyBwYW5lbCB0aGF0IHdvdWxkIHNob3cgbW9yZSBkZXRhaWwgb2Ygd2hpY2hldmVyIHByb2R1Y3QgdGhlIHVzZXIgd2FzIGN1cnJlbnRseSBob3ZlcmluZyBvdmVyLjxicj5FYWNoIG9mIHRoZXNlIHBhbmVscyB3b3VsZCBoYXZlIGFuIGFsdGVybmF0aW5nIGxheW91dCBpbiBvcmRlciB0byBrZWVwIHNvbWUgYmFsYW5jZSBkb3duIHRoZSBwYWdlLjxicj5UaGlzIHdhcyB3aGVyZSBJIGxlYXJuZWQgbG9vcGluZyBpbiBQSFAgYW5kIHdhcyBteSBmaXJzdCByZWFsIGNoYWxsZW5nZSB3aXRoIGphdmFzY3JpcHQgKEFsdGhvdWdoIG15IHNvbHV0aW9uIHdhcyB0ZXJyaWJsZSwgY3JhenkgZGF0YSBhdHRyaWJ1dGVzIGV2ZXJ3aGVyZSEpPC9wPjxoMj5Qcm9kdWN0IExpZ2h0Ym94PC9oMj48aHI+PHA+SSBkaWRuXFwndCB3YW50IHRvIGhhdmUgdGhlIHVzZXIgbGVhdmUgdGhlIHByb2R1Y3QgbGlzdGluZyBwYWdlIGVhaGMgdGltZSB0aGV5IHdhbnRlZCB0byB2aWV3IGEgcHJvZHVjdCBzbyBJIGF0dGVtcHRlZCB0byBidWlsZCBvdXQgYSBsaWdodC1ib3guPGJyPkFsdGhvdWdoIEkgZGlkIGdldCB0aGlzIHRvIHdvcmssIHRoZSBzb2x1dGlvbiwgYWdhaW4sIGxhY2tlZCBlbGVnYW5jZS4gcmF0aGVyIHRoYW4gcGVyZm9ybWluZyBhbiBBSkFYIGNhbGwgdG8gcG9wdWxhdGUgdGhlIGxpZ2h0Ym94LCBvciByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGEgZmV3IHBpZWNlcyBvZiBwcm9kdWN0IGRhdGEsIEkgcmVseWVkIG9uIHRoZSBkYXRhIGF0dHJpYnV0ZXMgdGhhdCBJIGhhZCByZW5kZXJlZCBvdXQgb24gZWFjaCB0aHVtYm5haWwgZGl2Ljxicj5VdHRlcmx5IHRlcnJpYmxlIGJ1dCB2ZXJ5IGVkdWNhdGlvbmFsITwvcD4nXG5cdH0se1xuXHRcdElEOiA0LFxuXHRcdHRpdGxlOiAnU3VyZiBUcmFja2luZyBBcHAgQ29uY2VwdCcsXG5cdFx0c2x1ZzogJ3N1cmYtdHJhY2tpbmctYXBwLWNvbmNlcHQnLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydqUXVlcnknXSxcblx0XHRcdHJ1Ynk6IFsnUnVieSBvbiBSYWlscyddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3N1cmZhcHBjb25jZXB0LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5EdXJpbmcgbXkgdGltZSBzdHVkeWluZyBhdCBCaXRtYWtlciBMYWJzIGluIFRvcm9udG8sIG15c2VsZiBhbmQgYSBjb3VwbGUgb2YgY2xhc3NtYXRlcyBkZWNpZGVkIHRvIGVudGVyIHRoZSBtYWtlciBlZGl0aW9uIG9mIHN0YXJ0LXVwIHdlZWtlbmQuPC9wPjxwPkkgaGFkIGhhZCBhbiBpZGVhIGEgeWVhciBvciBzbyBiZWZvcmUgaGFuZCB3aGlsc3QgZmluaXNoaW5nIHVwIGF0IHVuaXZlcnNpdHkgdG8gY3JlYXRlIGhvdXNpbmcgZm9yIGEgc21hcnRwaG9uZSB0aGF0IGNvdWxkIGJlIGF0dGFjaGVkIHRvIGEgc3VyZmJvYXJkIGluIG9yZGVyIHRvIGNvbGxlY3QgZGF0YSBhYm91dCB0aGUgc3VyZmVyXFwncyBwZXJmb3JtYW5jZSBkdXJpbmcgdGhlaXIgc2Vzc2lvbiwgYWxsb3dpbmcgdGhlbSB0byByZXZpZXcgdGhlIGRhdGEgbGF0ZXIuIFNvIHdlIHdlbnQgYWJvdXQgcHJvdG90eXBpbmcgYSBkZXZpY2UgKGluIHBsYWNlIG9mIHRoZSBzbWFydHBob25lIGhvdXNpbmcpIGFuZCB0aGUgd2ViIGFwcCB0aGF0IHdvdWxkIGRpc3BsYXkgdGhlIGRhdGEuPC9wPjxwPkFzIHRoaXMgd2FzIG1vcmUgb2YgYSBjb25jZXB0IHByb2plY3QgdGhhbiBhbiBhY3R1YWwgYXR0ZW1wdCBhdCBidWlsZGluZyBhIHByb2R1Y3QsIEkgYWRkZWQgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgd291bGRuXFwndCByZWFsbHkgYmUgYWNoaWV2YWJsZSwgc3VjaCBhcyByZWFsLXRpbWUgd2F2ZS10by13YXZlIHVwZGF0ZXMgdG8gdGhlIHN1cmZlcnMgcHJvZmlsZSwgd2hlcmUgZWFjaCB3YXZlIHdvdWxkIGJlIHBsb3R0ZWQgb24gYSBsb2NhbCBtYXAgd2l0aCBpdFxcJ3Mgc3BlZWQgYW5kIGRpc3RhbmNlIHNob3duIGFsb25nIHNpZGUuPC9wPjxwPldlIGRpZG5cXCd0IHdpbiBhbnkgcHJpemVzIGJ1dCBkaWRuXFwndCBkbyB0ZXJyYmlseSBlaXRoZXIgYXMgd2Ugd2VyZSBzb21ld2hlcmUgaW4gdGhlIHRvcCA5IG91dCBvZiA0MCsgdGVhbXMuPC9wPidcblx0fSx7XG5cdFx0SUQ6IDUsXG5cdFx0dGl0bGU6ICdSUEcgYWR2ZW50dXJlIGdhbWUnLFxuXHRcdHNsdWc6ICdycGctYWR2ZW50dXJlLWdhbWUnLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydqUXVlcnknXSxcblx0XHRcdHJ1Ynk6IFsnUnVieSBvbiBSYWlscyddXG5cdFx0fSxcblx0XHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3JwZy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+Rm9yIG15IGZpbmFsIHByb2plY3QgYXQgQml0bWFrZXIgTGFicywgSSBkZWNpZGVkIHRvIGJ1aWxkIGFuIFJQRyBicm93c2VyIGdhbWUgdGhhdCBhbGxvd3MgcGxheWVycyB0byBjcmVhdGUgYSBjaGFyYWN0ZXIsIGJhdHRsZSBOUENzIGFuZCBvdGhlciBwbGF5ZXJzLCBjb2xsZWN0IGdvbGQgJmFtcDsgaXRlbXMsIGxldmVsIHVwIGFuZCBrZWVwIHRyYWNrIG9mIHRoZWlyIHJhbmsgY29tcGFyZWQgdG8gb3RoZXIgcGxheWVycy48L3A+PHA+VGhpcyB3YXMgaGFyZCB3b3JrLCBlc3BlY2lhbGx5IGR1ZSB0byB0aGUgbGltaXRlZCB0aW1lIGZyYW1lIHdoaWNoIGludm9sdmVkIGEgZmV3IH4xOCBob3VyIHNlc3Npb25zIGFuZCBvbmUgMzYgaG91ciBzZXNzaW9uISAoV2UgaGFkIHJvdWdobHkgdHdvIHdlZWtzIHRvIGhhY2sgb24gb3VyIGZpbmFsIHByb2plY3RzKS4gSG93ZXZlciwgYXMgbXVjaCBhcyBpdCB3YXMgaGFyZHdvcmsgaXQgd2FzIGEgbG90IG9mIGZ1biE8L3A+PHA+SSBsZWFybmVkIGEgaGVhcCBhYm91dCBSdWJ5IG9uIFJhaWxzIGluIHRoaXMgdGltZSwgcGFydGljdWxhcmx5IHNpbmNlIHRoZXJlIHdlcmUgc29tZSBjb21wbGV4IHJlbGF0aW9uc2hpcHMgZ29pbmcgb24gYmV0d2VlbiB0aGUgZGlmZmVyZW50IHJlc291cmNlcyBhbmQgZW50aXRpZXMgaW4gdGhpcyBnYW1lLjwvcD48cD5UaGUgcHJvamVjdCBoYXMgc2luY2UgYmVlbiBsYWlkIHRvIHJlc3QgYnV0IEkgZG8gc3RpbGwgYWltIHRvIGZpbmQgdGhlIHRpbWUgdG8gcmUtYnVpbGQgaXQgd2l0aCBzb21lIGV4dHJhIGZlYXR1cmVzLCBzdWNoIGFzIHVzaW5nIHdlYnNvY2tldHMgYW5kIEhUTUw1IGNhbnZhcyEgLSBpdFxcJ2QgYmUgYSBmdW4gc2lkZSBwcm9qZWN0IHRvIGhhdmUgb24gdGhlIGdvITwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ1JpdmVyIElzbGFuZCBDaGVja291dCcsXG5cdFx0Ly8gXHRzbHVnOiAncml2ZXItaXNsYW5kLWNoZWNrb3V0Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdC8vIFx0XHQnYyMnOiBbJ1Jhem9yJywgJy5uZXQnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGFwaXM6IFsnR29vZ2xlIE1hcHMnXSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvcml2ZXItaXNsYW5kLWNoZWNrb3V0LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD48L3A+J1xuXHRcdC8vIH0se1xuXHRcdC8vIFx0SUQ6IFhYLFxuXHRcdC8vIFx0dGl0bGU6ICdOaW50ZW5kbyBDdXN0b21lciBTZXJ2aWNlJyxcblx0XHQvLyBcdHNsdWc6ICduaW50ZW5kby1jdXN0b21lci1zZXJ2aWNlJyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeSddLFxuXHRcdC8vIFx0XHRwaHA6IFsnU2lsdmVyU3RyaXBlJ11cblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL25pbnRlbmRvLWN1c3RvbWVyLXNlcnZpY2UucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ0p1cmEgVGFzdGl2YWwgMjAxNScsXG5cdFx0Ly8gXHRzbHVnOiAnanVyYS10YXN0aXZhbC0yMDE1Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeScsICdHcnVudCddXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9qdXJhLXRhc3RpdmFsLTIwMTUucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ1doeXRlICYgTWFja2F5Jyxcblx0XHQvLyBcdHNsdWc6ICd3aHl0ZS1hbmQtbWFja2F5Jyxcblx0XHQvLyBcdHN0YWNrOiB7XG5cdFx0Ly8gXHRcdGpzOiBbJ2pRdWVyeScsICdHcnVudCcsICdTa3JvbGxyJ11cblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRjb250ZW50OiAnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzL3doeXRlLWFuZC1tYWNrYXkucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPjwvcD4nXG5cdFx0Ly8gfSx7XG5cdFx0Ly8gXHRJRDogWFgsXG5cdFx0Ly8gXHR0aXRsZTogJ0NhcHJpU3VuIE1pbmlvbnMnLFxuXHRcdC8vIFx0c2x1ZzogJ2NhcHJpU3VuLW1pbmlvbnMnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0Ly8gXHRcdHBocDogWydTaWx2ZXJTdHJpcGUnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvY2FwcmlTdW4tbWluaW9ucy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+PC9wPidcblx0XHQvLyB9LHtcblx0XHQvLyBcdElEOiA1LFxuXHRcdC8vIFx0dGl0bGU6ICdHcmVlbnZhbGUgUG90YXRvcGFscycsXG5cdFx0Ly8gXHRzbHVnOiAnZ3JlZW52YWxlLXBvdGF0b3BhbHMnLFxuXHRcdC8vIFx0c3RhY2s6IHtcblx0XHQvLyBcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0Ly8gXHRcdHBocDogWydTaWx2ZXJTdHJpcGUnXVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvZ3JlZW52YWxlLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD48L3A+J1xuXHRcdH1cblxuXTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF89d2luZG93Ll87XG5cbnZhciBBcHBSb3V0ZXIgPSB3aW5kb3cuQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG5cdHJvdXRlczoge1xuXHRcdCcnOiAncm9vdCcsXG5cdFx0J2Jsb2coLykoLzpwb3N0KSc6ICdibG9nJyxcblx0XHQncHJvamVjdHMoLzpwcm9qZWN0KSc6ICdwcm9qZWN0cycsXG5cdFx0J2NvbnRhY3QnOiAnY29udGFjdCcsXG5cdFx0J2Fib3V0JzogJ2Fib3V0J1xuXHR9LFxuXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKGNvbnRleHQpe1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6cmVkaXJlY3QnLCB0aGlzLnJlZGlyZWN0KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnLCB0aGlzLmdvVG9DdXJyZW50Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6Z29Ub0xhbmRpbmcnLCB0aGlzLmdvVG9MYW5kaW5nKTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpuZXh0Q29udGVudCcsIHRoaXMuZ29Ub05leHRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpwcmV2Q29udGVudCcsIHRoaXMuZ29Ub1ByZXZDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpzZXRDdXJyZW50Q29udGVudCcsIHRoaXMuc2V0Q3VycmVudENvbnRlbnQpO1xuXG5cdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5kZWZhdWx0Q29udGVudFJvdXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5vbigncm91dGU6cm9vdCcgLGZ1bmN0aW9uKCl7XG5cblx0XHRcdGlmICghY29udGV4dC52aWV3cy5pbnRyby5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmludHJvID0gbmV3IGNvbnRleHQudmlld3MuaW50cm8oe1xuXHQgIFx0XHRcdGVsOiBjb250ZXh0LmludHJvUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0ludHJvJyk7XG5cbiAgXHRcdC8vIG5ldyBjb250ZXh0LnZpZXdzLmludHJvKHtcbiAgXHRcdC8vIFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG4gIFx0XHQvLyB9KTtcbiAgXHRcdC8vICQoJ2JvZHknKS5hZGRDbGFzcygnaW50cm8nKTtcblxuICBcdFx0dGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmJsb2cnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0Ly8gT25seSB0cmFuc2l0aW9uIGlmIHRoZSBjdXJyZW50IHZpZXcgaXMgbm90IGNoYW5naW5nIChidXQgdGhlIHJlc291cmNlIGlzKS5cblx0XHRcdHZhciB0cmFuc2l0aW9uID0gKHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID09PSBjb250ZXh0LnZpZXdzLmJsb2cgJiYgdGhpcy5sYXN0Um91dGUgIT09ICcnKTtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmJsb2cuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nID0gbmV3IGNvbnRleHQudmlld3MuYmxvZyh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlc1snYmxvZy1wb3N0J11cblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuYmxvZy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcbiAgXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOm1lc3NhZ2UnLCAnPHA+RWVrLCBsb3RzIG9mIElwc3VtISBJXFwnbGwgc3RhcnQgd3JpdGluZyBhY3R1YWwgcG9zdHMgb25jZSB0aGlzIHNpdGUgaXMgZml4ZWQgdXAgcHJvcGVybHkuIEZvciBub3csIGVuam95IGFsbCB0aGUgdmFyaW91cyBpcHN1bXMhPC9wPicpO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmxhc3RSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLmJsb2c7XG5cdFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOnByb2plY3RzJyAsZnVuY3Rpb24oc2x1Zyl7XG5cdFx0XHQvLyBPbmx5IHRyYW5zaXRpb24gaWYgdGhlIGN1cnJlbnQgdmlldyBpcyBub3QgY2hhbmdpbmcgKGJ1dCB0aGUgcmVzb3VyY2UgaXMpLlxuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSAodGhpcy5jdXJyZW50Q29udGVudFZpZXcgPT09IGNvbnRleHQudmlld3MucHJvamVjdHMgJiYgdGhpcy5sYXN0Um91dGUgIT09ICcnKTtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLnByb2plY3RzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMgPSBuZXcgY29udGV4dC52aWV3cy5wcm9qZWN0cyh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5wcm9qZWN0LFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29udGV4dC52aWV3cy5wcm9qZWN0cy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcblxuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gdGhpcy5sYXN0Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0XHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5wcm9qZWN0cztcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6Y29udGFjdCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuY29udGFjdC5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QgPSBuZXcgY29udGV4dC52aWV3cy5jb250YWN0KHtcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmNvbnRhY3Rcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuY29udGFjdC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuY29udGFjdDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6YWJvdXQnICxmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmFib3V0LmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MuYWJvdXQgPSBuZXcgY29udGV4dC52aWV3cy5hYm91dCh7XG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5hYm91dFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5hYm91dC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuYWJvdXQ7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmRlZmF1bHRSb3V0ZScsIGZ1bmN0aW9uKCl7XG5cdFx0fSk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuXG5cdH0sXG5cdHNldEN1cnJlbnRDb250ZW50OiBmdW5jdGlvbihjb250ZW50KXtcblx0XHRpZiAoY29udGVudC52aWV3KSB7dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZW50LnZpZXc7IH1cblx0XHRpZiAoY29udGVudC5yb3V0ZSkge3RoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMubGFzdFJvdXRlID0gY29udGVudC5yb3V0ZTsgfVxuXHR9LFxuXHRnb1RvTGFuZGluZzogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubmF2aWdhdGUoJycsIHt0cmlnZ2VyOiB0cnVlfSk7XG5cdH0sXG5cdGdvVG9DdXJyZW50Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubmF2aWdhdGUodGhpcy5jdXJyZW50Q29udGVudFJvdXRlLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuXHR9LFxuXHRnb1RvUHJldkNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXRQcmV2TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3LnByZXZSb3V0ZSgpO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXHR9LFxuXHRnb1RvTmV4dENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXROZXh0TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3Lm5leHRSb3V0ZSgpO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXHR9LFxuXHRkZWZhdWx0Q29udGVudFJvdXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICcjL2Fib3V0Jztcblx0fSxcblx0cmVkaXJlY3Q6IGZ1bmN0aW9uKHJvdXRlKXtcblx0XHR0aGlzLm5hdmlnYXRlKHJvdXRlLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFJvdXRlcjsiLCJ2YXIgZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7IFxuXG4gdmFyIEhhbmRsZWJhcnMgPSB3aW5kb3cuSGFuZGxlYmFyczsgXG5cbnRoaXNbXCJKU1RcIl0gPSB0aGlzW1wiSlNUXCJdIHx8IHt9O1xuXG50aGlzW1wiSlNUXCJdW1wiYWJvdXRcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBhYm91dFxcXCI+XFxuXHQ8aDI+YWJvdXQ8L2gyPlxcbjwvZGl2PlwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImJsb2ctcG9zdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snd2l0aCddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXR0cmlidXRlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcIndpdGhcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lclxcXCI+XFxuXHRcdFx0PGgyIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXG5cdFx0XHQ8dWw+PC91bD5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG5cdFx0XHRcdFx0XHRcXG5cdFx0XHRcdFx0XHRcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2PlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlxcblx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgcGxhY2Vob2xkZXItdmlld1xcXCI+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImgyLXRpdGxlXFxcIj48L2Rpdj5cXG5cdFx0PHVsPjwvdWw+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0XHRcdDxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXI7IGNvbG9yOiAjOTk5XFxcIj5Mb2FkaW5nLi4uPC9oMj5cXG5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMTtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmF0dHJpYnV0ZXMgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDQsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IHJldHVybiBzdGFjazE7IH1cbiAgZWxzZSB7IHJldHVybiAnJzsgfVxuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImNvbnRhY3RcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBjb250YWN0XFxcIj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cXG5cdFx0PGRpdiBjbGFzcz1cXFwic21hbGwtMTIgbGFyZ2UtNFxcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwiY29ubmVjdFxcXCI+XFxuXHRcdFx0XHRcXG5cdFx0XHRcdDxoMj5Db25uZWN0PC9oMj5cXG5cdFx0XHRcdDx1bCBjbGFzcz1cXFwic29jaWFsLWljb25zXFxcIj5cXG5cdFx0XHRcdFx0PGxpPlxcblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL1NwZW5fVGF5bG9yXFxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbiB0d2l0dGVyXFxcIj5cXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXIgbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5Ud2l0dGVyPC9wPlxcblx0XHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PC9hPlxcblx0XHRcdFx0XHQ8L2xpPlxcblx0XHRcdFx0XHQ8bGk+XFxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9TcGVuVUtcXFwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiYnV0dG9uIGdpdGh1YlxcXCI+XFxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVxcXCJmYSBmYS1naXRodWIgbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5HaXRIdWI8L3A+XFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2E+XFxuXHRcdFx0XHRcdDwvbGk+XFxuXHRcdFx0XHRcdDxsaT5cXG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cDovL3VrLmxpbmtlZGluLmNvbS9pbi9zcGVudGF5bG9yXFxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbiBsaW5rZWQtaW5cXFwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW4gbGVmdFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5MaW5rZWRJbjwvcD5cXG5cdFx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDwvYT5cXG5cdFx0XHRcdFx0PC9saT5cXG5cdFx0XHRcdDwvdWw+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblxcblx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMiBsYXJnZS04XFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzYXktaGVsbG9cXFwiPlxcblx0XHRcdFx0PGgyPlNheSBIZWxsbyE8L2gyPlxcblx0XHRcdFx0PGZvcm0gY2xhc3M9XFxcImNvbnRhY3QtZm9ybVxcXCI+XFxuXFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkc1xcXCI+XFxuXFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic3VibWlzc2lvbi1lcnJvclxcXCI+XFxuXHRcdFx0XHRcdFx0XHRZaWtlcyEgU29tZXRoaW5nIHdlbnQgd3JvbmcsIHRyeSBhZ2FpbiFcXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVxcXCJmYSBmYS1jbG9zZSByaWdodFxcXCI+PC9pPlxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG5cdFx0XHRcdCAgICBcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBpZD1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWVcXFwiLz5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuXHRcdFx0XHQgICAgXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIvPlxcblx0XHRcdFx0ICAgIDwvZGl2Plxcblxcblxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG5cdFx0XHRcdCAgICBcdDx0ZXh0YXJlYSBuYW1lPVxcXCJtZXNzYWdlXFxcIiBpZD1cXFwibWVzc2FnZVxcXCIgcm93cz1cXFwiNlxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXQncyB1cD9cXFwiPjwvdGV4dGFyZWE+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwidGhhbmtzLW1lc3NhZ2VcXFwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aDI+QXdlc29tZSE8L2gyPlxcblx0XHRcdFx0XHRcdFx0XHQ8cD5UaGFua3MgZm9yIGdldHRpbiBpbiB0b3VjaCE8YnI+IEknbGwgYmUgc3VyZSB0byBnZXQgYmFjayB0byB5b3Ugc29vbiE8L3A+XFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0ICAgIFxcblxcblx0XHRcdCAgICA8YnV0dG9uIGNsYXNzPVxcXCJzdWJtaXRcXFwiIHZhbHVlPVxcXCJTZW5kXFxcIj48c3Bhbj5GaXJlIGF3YXkhPC9zcGFuPjxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cXFwiPjwvaT48aSBjbGFzcz1cXFwiZmEgZmEtdGh1bWJzLXVwXFxcIj48L2k+PC9idXR0b24+XFxuXHRcdFx0XHQ8L2Zvcm0+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblxcblx0XHQ8L2Rpdj5cXG5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiaW50cm9cIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8dWwgY2xhc3M9XFxcInNvY2lhbC1pY29uc1xcXCI+XFxuXHQ8bGk+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vU3Blbl9UYXlsb3JcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyXFxcIj48L2k+PC9hPjwvbGk+XFxuXHQ8bGk+PGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9TcGVuVUtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1naXRodWJcXFwiPjwvaT48L2E+PC9saT5cXG5cdDxsaT48YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cDovL3VrLmxpbmtlZGluLmNvbS9pbi9zcGVudGF5bG9yXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW5cXFwiPjwvaT48L2E+PC9saT5cXG48L3VsPlxcblxcbjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXFxuXHQgd2lkdGg9XFxcIjEwMCVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAwIDI0MFxcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogOTAwcHg7XFxcIj5cXG48cGF0aCBmaWxsPVxcXCIjNDNCRkI0XFxcIiBkPVxcXCJNOTAuNDc5LDg5LjM5OGMwLDYuMTk4LTEuNTcyLDExLjcwMS00LjcxNywxNi41MDljLTMuMTQ1LDQuODA5LTcuNjgsOC41NDUtMTMuNjA0LDExLjIxMVxcblx0Yy01LjkyNSwyLjY2Ni0xMi44NzUsMy45OTktMjAuODUsMy45OTljLTYuNjU0LDAtMTIuMjM2LTAuNDY4LTE2Ljc0OC0xLjQwMXMtOS4yMDYtMi41NjMtMTQuMDgyLTQuODg4VjkwLjc2Nlxcblx0YzUuMTQ5LDIuNjQ0LDEwLjUwNCw0LjcwNiwxNi4wNjQsNi4xODdjNS41NiwxLjQ4MSwxMC42NjQsMi4yMjIsMTUuMzEyLDIuMjIyYzQuMDEsMCw2Ljk0OS0wLjY5NCw4LjgxOC0yLjA4NVxcblx0YzEuODY4LTEuMzksMi44MDMtMy4xNzksMi44MDMtNS4zNjZjMC0xLjM2Ny0wLjM3Ni0yLjU2My0xLjEyOC0zLjU4OXMtMS45Ni0yLjA2Mi0zLjYyMy0zLjExXFxuXHRjLTEuNjY0LTEuMDQ4LTYuMDk2LTMuMTg5LTEzLjI5Ni02LjQyNmMtNi41MTgtMi45NjItMTEuNDA1LTUuODMzLTE0LjY2My04LjYxM2MtMy4yNTktMi43NzktNS42NzQtNS45Ny03LjI0Ni05LjU3XFxuXHRjLTEuNTcyLTMuNi0yLjM1OC03Ljg2MS0yLjM1OC0xMi43ODNjMC05LjIwNSwzLjM1LTE2LjM4MywxMC4wNDktMjEuNTMzYzYuNjk5LTUuMTQ5LDE1LjkwNC03LjcyNSwyNy42MTctNy43MjVcXG5cdGMxMC4zNDUsMCwyMC44OTUsMi4zOTMsMzEuNjUsNy4xNzhMODIuMjA4LDQ2LjRjLTkuMzQzLTQuMjgzLTE3LjQwOS02LjQyNi0yNC4xOTktNi40MjZjLTMuNTEsMC02LjA2MiwwLjYxNS03LjY1NiwxLjg0Nlxcblx0Yy0xLjU5NiwxLjIzLTIuMzkzLDIuNzU4LTIuMzkzLDQuNThjMCwxLjk2LDEuMDE0LDMuNzE1LDMuMDQyLDUuMjY0YzIuMDI3LDEuNTUsNy41Myw0LjM3NSwxNi41MDksOC40NzdcXG5cdGM4LjYxMywzLjg3NCwxNC41OTUsOC4wMzIsMTcuOTQ0LDEyLjQ3NlM5MC40NzksODIuNjU0LDkwLjQ3OSw4OS4zOTh6XFxcIi8+XFxuPHBhdGggZmlsbD1cXFwiI0VFRUI1RlxcXCIgZD1cXFwiTTE3OC40NTgsNTEuNTk2YzAsMTEuMTY2LTMuMjkzLDE5Ljc5LTkuODc4LDI1Ljg3NGMtNi41ODYsNi4wODQtMTUuOTM5LDkuMTI2LTI4LjA2Miw5LjEyNmgtNy41ODh2MzMuMTU0XFxuXHRoLTI3LjAwMlYxOS44MDloMzQuNTljMTIuNjIzLDAsMjIuMTAzLDIuNzU4LDI4LjQzOCw4LjI3MUMxNzUuMjksMzMuNTk1LDE3OC40NTgsNDEuNDM0LDE3OC40NTgsNTEuNTk2eiBNMTMyLjkzMSw2NC41ODRoNC45MjJcXG5cdGM0LjA1NiwwLDcuMjgtMS4xMzksOS42NzMtMy40MThjMi4zOTMtMi4yNzgsMy41ODktNS40MjMsMy41ODktOS40MzRjMC02Ljc0NC0zLjczNy0xMC4xMTctMTEuMjExLTEwLjExN2gtNi45NzNWNjQuNTg0elxcXCIvPlxcbjxwYXRoIGZpbGw9XFxcIiNGMTVDNkZcXFwiIGQ9XFxcIk0yNTMuNzIyLDExOS43NWgtNTkuMzM2VjE5LjgwOWg1OS4zMzZ2MjEuNjdoLTMyLjMzNHYxNS43MjNoMjkuOTQxdjIxLjY3aC0yOS45NDF2MTguODY3aDMyLjMzNFYxMTkuNzV6XFxcIi8+XFxuPHBhdGggZmlsbD1cXFwiI0VFRUI1RlxcXCIgZD1cXFwiTTM2Ni4zNzgsMTE5Ljc1aC0zNS40MWwtMzYuNTA0LTcwLjQxaC0wLjYxNWMwLjg2NSwxMS4wNzQsMS4yOTksMTkuNTI4LDEuMjk5LDI1LjM2MXY0NS4wNDloLTIzLjkyNlYxOS44MDlcXG5cdGgzNS4yNzNsMzYuMzY3LDY5LjQ1M2gwLjQxYy0wLjYzOS0xMC4wNzEtMC45NTctMTguMTYtMC45NTctMjQuMjY4VjE5LjgwOWgyNC4wNjJWMTE5Ljc1elxcXCIvPlxcbjxwYXRoIGZpbGw9XFxcIiM0M0JGQjRcXFwiIGQ9XFxcIk00NjguNDM4LDExOS43NWgtMjcuMDAyVjQxLjg4OWgtMjQuNDA0di0yMi4wOGg3NS43NDJ2MjIuMDhoLTI0LjMzNlYxMTkuNzV6XFxcIi8+XFxuPHBhdGggZmlsbD1cXFwiI0VFRUI1RlxcXCIgZD1cXFwiTTU2OC4zOCwxMTkuNzVsLTQuOTIyLTE4LjczaC0zMi40NzFsLTUuMDU5LDE4LjczaC0yOS42NjhsMzIuNjA3LTEwMC4zNTJoMzYuMDI1bDMzLjAxOCwxMDAuMzUySDU2OC4zOHpcXG5cdCBNNTU3Ljg1Myw3OC44NzFsLTQuMzA3LTE2LjQwNmMtMS4wMDMtMy42NDYtMi4yMjItOC4zNjItMy42NTctMTQuMTVjLTEuNDM2LTUuNzg3LTIuMzgyLTkuOTM1LTIuODM3LTEyLjQ0MVxcblx0Yy0wLjQxLDIuMzI0LTEuMjIsNi4xNTItMi40MjcsMTEuNDg0Yy0xLjIwOCw1LjMzMi0zLjg4NiwxNS44MzctOC4wMzIsMzEuNTE0SDU1Ny44NTN6XFxcIi8+XFxuPHBhdGggZmlsbD1cXFwiI0YxNUM2RlxcXCIgZD1cXFwiTTY0NC4zOTYsNTYuODU5bDE3LjIyNy0zNy4wNTFoMjkuMjU4bC0zMi44ODEsNjAuOTA4djM5LjAzM2gtMjcuMjA3VjgxLjUzN2wtMzIuODgxLTYxLjcyOWgyOS4zOTVcXG5cdEw2NDQuMzk2LDU2Ljg1OXpcXFwiLz5cXG48cGF0aCBmaWxsPVxcXCIjNDNCRkI0XFxcIiBkPVxcXCJNNzAxLjY4MSwxMTkuNzVWMTkuODA5aDI3LjAwMnY3OC4xMzVoMzguNDg2djIxLjgwN0g3MDEuNjgxelxcXCIvPlxcbjxwYXRoIGZpbGw9XFxcIiNFRUVCNUZcXFwiIGQ9XFxcIk04NzYuNjgxLDY5LjY0M2MwLDE2LjgxNi00LjEyNSwyOS42LTEyLjM3MywzOC4zNWMtOC4yNDksOC43NS0yMC4zMjYsMTMuMTI1LTM2LjIzLDEzLjEyNVxcblx0Yy0xNS42NzgsMC0yNy42OTctNC4zOTctMzYuMDYtMTMuMTkzYy04LjM2My04Ljc5NS0xMi41NDQtMjEuNjAyLTEyLjU0NC0zOC40MThjMC0xNi42MzQsNC4xNTgtMjkuMzM3LDEyLjQ3Ni0zOC4xMVxcblx0YzguMzE2LTguNzcyLDIwLjQwNS0xMy4xNTksMzYuMjY1LTEzLjE1OWMxNS45MDQsMCwyNy45NTksNC4zNTMsMzYuMTYyLDEzLjA1N0M4NzIuNTc5LDM5Ljk5OCw4NzYuNjgxLDUyLjc4MSw4NzYuNjgxLDY5LjY0M3pcXG5cdCBNODA3LjkxMSw2OS42NDNjMCwxOS4zMjMsNi43MjIsMjguOTg0LDIwLjE2NiwyOC45ODRjNi44MzYsMCwxMS45MDUtMi4zNDcsMTUuMjEtNy4wNDFjMy4zMDQtNC42OTMsNC45NTYtMTIuMDA4LDQuOTU2LTIxLjk0M1xcblx0YzAtOS45OC0xLjY3NS0xNy4zNTItNS4wMjQtMjIuMTE0Yy0zLjM1LTQuNzYyLTguMzUyLTcuMTQ0LTE1LjAwNS03LjE0NEM4MTQuNjc5LDQwLjM4NSw4MDcuOTExLDUwLjEzOCw4MDcuOTExLDY5LjY0M3pcXFwiLz5cXG48cGF0aCBmaWxsPVxcXCIjRjE1QzZGXFxcIiBkPVxcXCJNOTIxLjcyOSw4My4zODN2MzYuMzY3aC0yNy4wMDJWMTkuODA5aDMyLjc0NGMyNy4xNjEsMCw0MC43NDIsOS44NDQsNDAuNzQyLDI5LjUzMVxcblx0YzAsMTEuNTc2LTUuNjUxLDIwLjUzMS0xNi45NTMsMjYuODY1bDI5LjEyMSw0My41NDVoLTMwLjYyNWwtMjEuMTkxLTM2LjM2N0g5MjEuNzI5eiBNOTIxLjcyOSw2My4wOGg1LjA1OVxcblx0YzkuNDM0LDAsMTQuMTUtNC4xNywxNC4xNS0xMi41MWMwLTYuODgxLTQuNjI2LTEwLjMyMi0xMy44NzctMTAuMzIyaC01LjMzMlY2My4wOHpcXFwiLz5cXG48L3N2Zz5cXG5cXG48ZGl2IGNsYXNzPVxcXCJwYWdlLWljb25zLXdyYXBwZXJcXFwiPlxcblxcblxcblx0PGRpdiBjbGFzcz1cXFwicGFnZS1pY29uLXdyYXBwZXJcXFwiPlxcblx0XHQ8YSBocmVmPVxcXCIjL3Byb2plY3RzXFxcIiBjbGFzcz1cXFwicHJvamVjdHNcXFwiPlxcblx0XHRcdDxpbWcgY2xhc3M9XFxcInBhZ2UtaWNvblxcXCIgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL3Byb2plY3RzLWNvZGUucG5nXFxcIj5cXG5cdFx0XHQ8aDQ+cHJvamVjdHM8L2g0Plxcblx0XHQ8L2E+XFxuXHQ8L2Rpdj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcInBhZ2UtaWNvbi13cmFwcGVyXFxcIj5cXG5cdFx0PGEgaHJlZj1cXFwiIy9ibG9nXFxcIiBjbGFzcz1cXFwiYmxvZ1xcXCI+XFxuXHRcdFx0PGltZyBjbGFzcz1cXFwicGFnZS1pY29uXFxcIiBzcmM9XFxcImFzc2V0cy9pbWFnZXMvYmxvZy1ib29rLnBuZ1xcXCI+XFxuXHRcdFx0PGg0PmJsb2c8L2g0Plxcblx0XHQ8L2E+XFxuXHQ8L2Rpdj5cXG5cXG5cdDxkaXYgY2xhc3M9XFxcInBhZ2UtaWNvbi13cmFwcGVyXFxcIj5cXG5cdFx0PGEgaHJlZj1cXFwiIy9jb250YWN0XFxcIiBjbGFzcz1cXFwiY29udGFjdFxcXCI+XFxuXHRcdFx0PGltZyBjbGFzcz1cXFwicGFnZS1pY29uXFxcIiBzcmM9XFxcImFzc2V0cy9pbWFnZXMvY29udGFjdC1zcGVlY2gtYnViYmxlcy5wbmdcXFwiPlxcblx0XHRcdDxoND5jb250YWN0PC9oND5cXG5cdFx0PC9hPlxcblx0PC9kaXY+XFxuXFxuPC9kaXY+XFxuXFxuPHAgc3R5bGU9XFxcInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiA2MHB4OyBwYWRkaW5nOiAyMHB4OyB3aWR0aDogMTAwJTsgbWFyZ2luOiBhdXRvOyBmb250LXNpemU6IC44NWVtOyBjb2xvcjogI2JiYjtcXFwiPkknbSBzdGlsbCB3b3JraW5nIG9uIHRoaXMgc2l0ZSwgc28gcGxlYXNlIGJlYXIgd2l0aCBtZSE8L3A+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcIm1hc3RlclwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGJ1ZmZlciA9IFwiIDxkaXYgY2xhc3M9XFxcInBhZ2Utd3JhcFxcXCI+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2VsbFxcXCI+XFxuICBcdFx0PGRpdiBjbGFzcz1cXFwibGFuZGluZy1jb250ZW50XFxcIiBpZD1cXFwibGFuZGluZ1xcXCI+XFxuICAgICAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbnRyb0NvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmludHJvQ29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpbnRyb0NvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICBcdFx0PC9kaXY+XFxuICAgIDwvZGl2Plxcblx0PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXdyYXBwZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcblxcbiAgICA8L2Rpdj5cXG4gIFx0PGRpdiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgc3R5bGU9XFxcIlxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50IGNvbnRlbnQtbWFpblxcXCIgaWQ9XFxcIm1haW5cXFwiPlwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm1haW5Db250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluQ29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJtYWluQ29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQgdHJhbnNpdGlvbmVyXFxcIiBpZD1cXFwidHJhbnNcXFwiPjwvZGl2PlxcbiAgXHQ8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJwcm9qZWN0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIlwiO1xuICBzdGFjazEgPSBoZWxwZXJzWyd3aXRoJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdHRyaWJ1dGVzIDogZGVwdGgwKSwge1wibmFtZVwiOlwid2l0aFwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMiwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiXHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG5cdFx0XHQ8aDIgY2xhc3M9XFxcInRpdGxlXFxcIj5cIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gyPlxcblx0XHRcdDx1bD48L3VsPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcImdyaWQtcm93XFxcIj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XFxcInNtYWxsLTEyXFxcIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XHRcdFxcblx0XHRcdFx0XHRcdFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiY29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCJcXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiXFxuXHQ8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBwbGFjZWhvbGRlci12aWV3XFxcIj5cXG5cdFx0PGRpdiBjbGFzcz1cXFwiaDItdGl0bGVcXFwiPjwvZGl2Plxcblx0XHQ8dWw+PC91bD5cXG5cdFx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1yb3dcXFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcInNtYWxsLTEyXFxcIj5cXG5cdFx0XHRcdDxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXI7IGNvbG9yOiAjOTk5XFxcIj5Mb2FkaW5nLi4uPC9oMj5cXG5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCJcXG5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmF0dHJpYnV0ZXMgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDQsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1widWkvaGVhZGVyXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnByZXZMaW5rIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wcmV2TGluayA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJwcmV2TGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJnby1wcmV2XFxcIiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCIgY2xhc3M9XFxcImdvLXByZXYgaGlkZVxcXCJcIjtcbiAgfSxcIjVcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubmV4dExpbmsgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5leHRMaW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcIm5leHRMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImdvLW5leHRcXFwiIFwiO1xufSxcIjdcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIiBjbGFzcz1cXFwiZ28tbmV4dCBoaWRlXFxcIlwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwibGFuZGluZy1mb290ZXItY29udGVudFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJpY29uIG1lbnVcXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duIGZhLTJ4IHNob3ctY29udGVudFxcXCI+PC9pPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWNvbnRlbnRcXFwiPlxcbiAgICA8YSBcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnByZXZMaW5rIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSgzLCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgICBcXG4gICAgPGEgaHJlZj1cXFwiI1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbiBtZW51XFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzIGZhLTJ4IHNob3ctaW50cm9cXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgXFxuICAgIDxhIFwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oNSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDcsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgXFxuPC9kaXY+XFxuPGRpdj48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuIHJldHVybiB0aGlzWydKU1QnXTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0czsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnYWJvdXQnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XHRcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzJyk7XG52YXIgQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlKCcuL2NvbGxlY3Rpb24tdmlldy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2Jsb2cnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmNvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbigpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1x0XG5cdHN0cmluZ1RvUmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlKHthdHRyaWJ1dGVzOiB0aGlzLmNvbGxlY3Rpb24uY3VycmVudFJlY29yZC5hdHRyaWJ1dGVzfSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KTtcblxuXHRcdHZhciB2aWV3ID0gdGhpcyxcblx0XHRcdFx0Y29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRcblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbi5sZW5ndGgpIHtcblx0XHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcblxuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnKTtcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlKTtcblx0XHRcdHRoaXMuZmV0Y2hSZW5kZXIob3B0aW9ucyk7XG5cblx0XHR9IGVsc2Uge1xuIFxuXHRcdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiBjb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KS5sZW5ndGgpIHtcblx0XHRcdFx0Y29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKHtzbHVnOiBvcHRpb25zLnNsdWd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6cmVkaXJlY3QnLCB2aWV3LmRlZmF1bHRSb3V0ZSgpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB0aGlzLnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnN0cmluZ1RvUmVuZGVyKCkpO1x0XG5cdFx0XHR9XHRcblx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnLCB7bGluazogdGhpcy5wcmV2Um91dGUoKX0pO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnLCB7bGluazogdGhpcy5uZXh0Um91dGUoKX0pO1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0ZmV0Y2hSZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHZhciB2aWV3ID0gdGhpcyxcblx0XHRcdFx0Y29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRpZiAoZmFsc2UpIHsgLy8gdG8gYmUgc2V0IHRvIHNvbWV0aGluZyBtb3JlIG1lYW5pbmdmdWwgd2hlbiBhbiBhcGkgaXMgYXZhaWxhYmxlXG5cdFx0XHRjb2xsZWN0aW9uLmZldGNoKHtcbiAgXHRcdFx0cmVtb3ZlOiBmYWxzZSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKXtcblxuXHRcdFx0XHRcdGlmIChvcHRpb25zLnNsdWcgJiYgY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uLnNldEN1cnJlbnRSZWNvcmQoe3NsdWc6IG9wdGlvbnMuc2x1Z30pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd0cmFuc2l0aW9uOnJlbmRlcicsIHZpZXcuc3RyaW5nVG9SZW5kZXIoKSApO1x0XHRcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2aWV3LmFkZFN0dWJzKHtzdWNjZXNzOiBmdW5jdGlvbigpe1xuXG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5zbHVnICYmIGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uLnNldEN1cnJlbnRSZWNvcmQoe3NsdWc6IG9wdGlvbnMuc2x1Z30pO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB2aWV3LnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXG5cdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sbGVjdGlvbi5hZGRTdHVicyh7c3VjY2VzczogZnVuY3Rpb24oKXtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy5zbHVnICYmIGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pLmxlbmd0aCkge1xuXHRcdFx0XHRcdGNvbGxlY3Rpb24uc2V0Q3VycmVudFJlY29yZCh7c2x1Zzogb3B0aW9ucy5zbHVnfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29sbGVjdGlvbi5zZXRDdXJyZW50UmVjb3JkKGNvbGxlY3Rpb24uZmlyc3QoKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOnJlZGlyZWN0Jywgdmlldy5kZWZhdWx0Um91dGUoKSk7XG5cblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0XHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jywge2xpbms6IHZpZXcucHJldlJvdXRlKCl9KTtcblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnLCB7bGluazogdmlldy5uZXh0Um91dGUoKX0pO1xuXHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB2aWV3Lm5hbWVzcGFjZSApO1xuXG5cblx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3RyYW5zaXRpb246cmVuZGVyJywgdmlldy5zdHJpbmdUb1JlbmRlcigpICk7XHRcblxuXHRcdFx0fX0pO1xuXHRcdH1cblx0fSxcblx0c2V0Q3VycmVudDogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0dGhpcy5jb2xsZWN0aW9uLnNldEN1cnJlbnRSZWNvcmQoe3NsdWc6c2x1Z30pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uLmdldE5leHRNb2RlbCgpO1xuXHR9LFxuXHRnZXRQcmV2TW9kZWw6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbi5nZXRQcmV2TW9kZWwoKTtcblx0fSxcblx0bmV4dFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBtb2RlbCA9IHRoaXMuY29sbGVjdGlvbi5nZXROZXh0TW9kZWwoKTtcblx0XHRyZXR1cm4gbW9kZWw/ICcjLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyBtb2RlbC5nZXQoJ3NsdWcnKSA6IGZhbHNlO1xuXHR9LFxuXHRwcmV2Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG1vZGVsID0gdGhpcy5jb2xsZWN0aW9uLmdldFByZXZNb2RlbCgpO1xuXHRcdHJldHVybiBtb2RlbD8gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIG1vZGVsLmdldCgnc2x1ZycpIDogZmFsc2U7XG5cdH0sXG5cdGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbi5jaGVja1NsdWcoc2x1Zyk7XG5cdH0sXG5cdGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb24uZGVmYXVsdFNsdWcoKTtcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAnLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyB0aGlzLmRlZmF1bHRTbHVnKCk7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gdmFsaWRFbWFpbChzdHJpbmcpIHtcbiAgICB2YXIgcmUgPSAvXihbXFx3LV0rKD86XFwuW1xcdy1dKykqKUAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkL2k7XG4gICAgcmV0dXJuIHJlLnRlc3Qoc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRMYWJlbChlbCl7XG5cdGVsLmNsb3Nlc3QoJy5maWVsZCcpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvcihlbCl7XG5cdGVsLmNsb3Nlc3QoJy5maWVsZCcpLmFkZENsYXNzKCdlcnJvcicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2NvbnRhY3QnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLmVtYWlsQWRkcmVzcyA9ICdzbXRfQGhvdG1haWwuY28udWsnO1xuXG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblxuXHRcdHRoaXMucGVuZGluZyA9IGZhbHNlO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cdGV2ZW50czoge1xuXHRcdCdzdWJtaXQgLmNvbnRhY3QtZm9ybScgOiAnc3VibWl0Rm9ybScsXG5cdFx0J2NsaWNrIC5zdWJtaXNzaW9uLWVycm9yIC5mYS1jbG9zZSc6ICdyZW1vdmVGb3JtRXJyb3InXG5cdH0sXG5cdHZhbGlkYXRlRm9ybTogZnVuY3Rpb24oKXtcblx0XHR2YXIgJGZvcm0gPSB0aGlzLiRlbC5maW5kKCcuY29udGFjdC1mb3JtJyk7XG5cblx0XHR2YXIgJG5hbWUgPSAkZm9ybS5maW5kKCcjbmFtZScpO1xuXHRcdHZhciAkZW1haWwgPSAkZm9ybS5maW5kKCcjZW1haWwnKTtcbi8vIC8vICRzdWJqZWN0ID0gJGZvcm0uZmluZCgnI3N1YmplY3QnKSxcblx0XHR2YXIgJG1lc3NhZ2UgPSAkZm9ybS5maW5kKCcjbWVzc2FnZScpO1xuXG5cdFx0dmFyIGVycm9ycyA9IFtdO1xuXG5cdFx0aWYgKCRtZXNzYWdlLnZhbCgpLmxlbmd0aCA+IDUpIHtcblx0XHRcdHJlc2V0TGFiZWwoJG1lc3NhZ2UpO1xuXHRcdH0gZWxzZSBpZiAoJG1lc3NhZ2UudmFsKCkubGVuZ3RoKSB7XG5cdFx0XHRlcnJvcnMucHVzaCh7JGVsOiAkbWVzc2FnZSwgbWVzc2FnZTogJ25vdCBsb25nIGVub3VnaCd9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXJyb3JzLnB1c2goeyRlbDogJG1lc3NhZ2UsIG1lc3NhZ2U6ICdubyBtZXNzYWdlIGZhaWwnfSk7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbGlkRW1haWwoJGVtYWlsLnZhbCgpKSkge1xuXHRcdFx0cmVzZXRMYWJlbCgkZW1haWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlcnJvcnMucHVzaCh7JGVsOiAkZW1haWx9KTtcblx0XHR9XG5cblx0XHRpZiAoJG5hbWUudmFsKCkubGVuZ3RoID4gMSkge1xuXHRcdFx0cmVzZXRMYWJlbCgkbmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVycm9ycy5wdXNoKHskZWw6ICRuYW1lfSk7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9ycy5sZW5ndGgpIHtcblx0XHRcdCQuZWFjaChlcnJvcnMsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGFkZEVycm9yKHRoaXMuJGVsKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdHN1Ym1pdEZvcm06IGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgdmlldyA9IHRoaXM7XG5cblx0XHRpZiAodGhpcy5wZW5kaW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0dmFyICRmb3JtID0gdGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpO1xuXHRcdFxuXHRcdGlmICh0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XG5cblx0XHRcdCRmb3JtLmFkZENsYXNzKCdwZW5kaW5nJyk7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG5cdFx0XHR2YXIgc2VuZERhdGEgPSB7XG5cdFx0XHRcdF9zdWJqZWN0OiAnc3BlbnRheWxvci5jb20nLFxuXHRcdFx0XHRtZXNzYWdlOiAkZm9ybS5maW5kKCcjbWVzc2FnZScpLnZhbCgpLFxuXHRcdFx0XHRlbWFpbDogJGZvcm0uZmluZCgnI2VtYWlsJykudmFsKClcblx0XHRcdH07XG5cblx0XHRcdCQuYWpheCh7XG5cdFx0ICAgIHVybDogJy8vZm9ybXNwcmVlLmlvL3NwZW5fQGhvdG1haWwuY28udWsnLCBcblx0XHQgICAgbWV0aG9kOiAnUE9TVCcsXG5cdFx0ICAgIGRhdGE6IHNlbmREYXRhLFxuXHRcdCAgICBkYXRhVHlwZTogJ2pzb24nLFxuXHRcdCAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0ICAgIFx0dmlldy5mb3JtU3VjY2VzcyhyZXNwb25zZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGVycm9yOiBmdW5jdGlvbigpe1xuXHRcdCAgICBcdHZpZXcuZm9ybUVycm9yKCk7XG5cdFx0ICAgIH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XG5cdFx0XG5cdH0sXG5cdGZvcm1TdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0dmFyICRmb3JtID0gdGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpO1xuXHRcdCRmb3JtLnJlbW92ZUNsYXNzKCdwZW5kaW5nJyk7XG5cblx0XHRpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0JGZvcm0uYWRkQ2xhc3MoJ2RvbmUnKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcblx0XHRcdHRoaXMucGVuZGluZyA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZm9ybUVycm9yKCk7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdH0sXG5cdGZvcm1FcnJvcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgJGZvcm0gPSB0aGlzLiRlbC5maW5kKCcuY29udGFjdC1mb3JtJykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cblx0XHQkZm9ybS5yZW1vdmVDbGFzcygncGVuZGluZycpO1xuXHRcdHRoaXMucGVuZGluZyA9IGZhbHNlO1xuXHR9LFxuXHRyZW1vdmVGb3JtRXJyb3I6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy4kZWwuZmluZCgnLmNvbnRhY3QtZm9ybScpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuXHR9XG59KTtcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnaW50cm8nLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcihvcHRpb25zKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRvcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UpO1xuXG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vdGVtcGxhdGVzLmpzJyk7XG52YXIgaGVhZGVyVmlldyA9IHJlcXVpcmUoJy4vdWkvaGVhZGVyLmpzJyk7XG52YXIgdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL3BhZ2UtdHJhbnNpdGlvbnMuanMnKTtcbnZhciBzY3JvbGxUcmFja2VyID0gcmVxdWlyZSgnLi4vaGVscGVycy9zY3JvbGwtdHJhY2tlci5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGVsOiAnaHRtbCcsXG5cdGNvbnRlbnRFbDogJy5tYWluIC5jb250ZW50Jyxcblx0dHJhbnNpdGlvbkVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cdGhlYWRlcjogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIHN0YXRlID0gKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+PSAxKSA/ICdjb250ZW50JyA6ICdpbnRybyc7XG5cdFx0dGhpcy5yZW5kZXIoe1xuXHRcdFx0c3RhdGU6IHN0YXRlLFxuXHRcdFx0aW50cm9Db250ZW50OiB0ZW1wbGF0ZXMuaW50cm8oKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50cmFuc2l0aW9ucyA9IG5ldyB0cmFuc2l0aW9ucyh7XG5cdFx0XHRjb250YWluZXI6ICcucGFnZS13cmFwIC5tYWluJyxcblx0XHRcdG1haW46ICcuY29udGVudC1tYWluJyxcblx0XHRcdHRyYW5zaXRpb25lcjogJy50cmFuc2l0aW9uZXInXG5cdFx0fSk7XG5cblxuXG5cdFx0dGhpcy4kaGVhZGVyID0gJCh0aGlzLmhlYWRlcik7XG5cdFx0dGhpcy5oZWFkZXJWaWV3ID0gbmV3IGhlYWRlclZpZXcoe3RlbXBsYXRlOiB0ZW1wbGF0ZXNbJ3VpL2hlYWRlciddfSk7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cdGV2ZW50czoge1xuXHRcdCdjbGljayAuc2hvdy1jb250ZW50JzogJ2dvVG9DdXJyZW50Q29udGVudCcsXG5cdFx0J2NsaWNrIC5nby1wcmV2JzogJ3ByZXZDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLW5leHQnOiAnbmV4dENvbnRlbnQnXG5cdFx0Ly8gJ2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgXHQkKCdib2R5JykuaHRtbCh0ZW1wbGF0ZXMubWFzdGVyKG9wdGlvbnMpKTtcblxuICBcdHNjcm9sbFRyYWNrZXIuaW5pdGlhbGl6ZSgpO1xuICB9LFxuICBzaG93Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ludHJvJyk7XG5cdH0sXG5cdHNob3dJbnRybzogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cdH0sXG5cdHNldE5hbWVzcGFjZTogZnVuY3Rpb24obmFtZXNwYWNlKSB7XHRcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICQudHJpbShcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uKGMpIHsgXG5cdFx0XHRcdHJldHVybiBjLmxhc3RJbmRleE9mKCdwYWdlLScsIDApICE9PSAwOyBcblx0XHRcdH0pLmpvaW4oJyAnKSArICcgcGFnZS0nICtuYW1lc3BhY2UgKTtcblx0fSxcblx0bmV4dENvbnRlbnQ6IGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoJCgnLmFuaW1hdGluZy1wcmV2LCAuYW5pbWF0aW5nLW5leHQnKS5sZW5ndGggPj0gMSkge3JldHVybiBmYWxzZTt9XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5kaXJlY3Rpb24gPSAnbmV4dCc7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpuZXh0Q29udGVudCcpO1xuXHR9LFxuXHRwcmV2Q29udGVudDogZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICgkKCcuYW5pbWF0aW5nLXByZXYsIC5hbmltYXRpbmctbmV4dCcpLmxlbmd0aCA+PSAxKSB7cmV0dXJuIGZhbHNlO31cblx0XHR0aGlzLnRyYW5zaXRpb25zLmRpcmVjdGlvbiA9ICdwcmV2Jztcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOnByZXZDb250ZW50Jyk7XG5cdH0sXG4gIGdvVG9DdXJyZW50Q29udGVudDogZnVuY3Rpb24oKXtcbiAgXHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOmdvVG9DdXJyZW50Q29udGVudCcpO1xuICB9LFxuICBtZXNhZ2VVcGRhdGU6IGZ1bmN0aW9uKG1lc3NhZ2Upe1xuICBcdHZhciAkZWwgPSB0aGlzLiRlbC5maW5kKCcubWVzc2FnZScpO1xuICBcdGlmICghbWVzc2FnZSkge1xuICBcdFx0JGVsLmhpZGUoKS5odG1sKCcnKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JGVsLnNob3coKS5odG1sKG1lc3NhZ2UpO1xuICBcdH1cbiAgfSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIHRyYW5zaXRpb25zID0gdGhpcy50cmFuc2l0aW9ucztcblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZW50KXt0cmFuc2l0aW9ucy5yZW5kZXIoY29udGVudCk7fVxuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93Q29udGVudCcsIHRoaXMuc2hvd0NvbnRlbnQpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6c2hvd0ludHJvJywgdGhpcy5zaG93SW50cm8pO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLnNldE5hbWVzcGFjZSk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdwYWdlOm1lc3NhZ2UnLCB0aGlzLm1lc3NhZ2VVcGRhdGUpO1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd0cmFuc2l0aW9uOnJlbmRlcicsIHJlbmRlcik7XG5cblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL3Byb2plY3RzLmpzJyk7XG52YXIgQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlKCcuL2NvbGxlY3Rpb24tdmlldy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25WaWV3LmV4dGVuZCh7XHRcblx0bmFtZXNwYWNlOiAncHJvamVjdHMnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmNvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbigpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLnJlbmRlcih7fSk7XG5cdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXHR9LFxuXHRldmVudHM6IHtcblx0XHQnY2xpY2sgLnNob3ctY29udGVudCc6ICdzaG93Q29udGVudCcsXG5cdFx0J2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgc2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKCl7XG4gIFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG4gIH0sXG4gIHNob3dJbnRybzogZnVuY3Rpb24oKXtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0ludHJvJyk7XG4gIH0sXG4gIHVwZGF0ZVVpUHJldjogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFx0dmFyIHByZXYgPSAnLmdvLXByZXYnO1xuICBcdHZhciAkcHJldiA9IHRoaXMuJGVsLmZpbmQocHJldik7XG4gIFx0aWYgKG9wdGlvbnMubGluaykge1xuICBcdFx0JHByZXYucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgb3B0aW9ucy5saW5rKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JHByZXYuYWRkQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgJyMnKTtcbiAgXHR9XG4gIH0sXG4gIHVwZGF0ZVVpTmV4dDogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFx0dmFyIG5leHQgPSAnLmdvLW5leHQnO1xuICBcdHZhciAkbmV4dCA9IHRoaXMuJGVsLmZpbmQobmV4dCk7XG4gIFx0aWYgKG9wdGlvbnMubGluaykge1xuICBcdFx0JG5leHQucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgb3B0aW9ucy5saW5rKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JG5leHQuYWRkQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgJyMnKTtcbiAgXHR9XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnVwZGF0ZVByZXYnLCB0aGlzLnVwZGF0ZVVpUHJldik7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTp1cGRhdGVOZXh0JywgdGhpcy51cGRhdGVVaU5leHQpO1xuXHR9XG59KTsiXX0=
