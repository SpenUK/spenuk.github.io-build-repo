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
// define([], function() {

'use strict';

module.exports = {
found: 11,
posts: [
{
ID: 34,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-10T14:22:29+00:00",
modified: "2014-09-10T14:23:52+00:00",
title: "wp Rest Api",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/10/wp-rest-api/",
short_URL: "http://wp.me/p50g34-y",
content: "<p>The idea here is to pull in WordPress blog posts as JSON representations to make them available for processing or rendering in an outside project.</p> <p>I decided to build this partially to experiment with a handful of JS concepts &amp; techs that I wanted to learn more about &#8211; namely BackboneJS and RequireJS as well as better &amp; more modular code structures, third party REST API usage, and build processes.<br /> The other reason for putting this together was so that I could build out a small collection of modules that each pull data from different APIs to be used on my own personal website (And anybody else&#8217;s if they wish!).</p> <p>I plan to build similar modules for GitHub, GitHub Gists, Twitter, Dribbble, Treehouse and pretty much any other API a developer or designer would like to see on their portfolio/personal site.</p> ",
excerpt: "<p>The idea here is to pull in WordPress blog posts as JSON representations to make them available for processing or rendering in an outside project. I decided to build this partially to experiment with a handful of JS concepts &amp; techs that I wanted to learn more about &#8211; namely BackboneJS and RequireJS as well [&hellip;]</p> ",
slug: "wp-rest-api",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=34",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "cf982c70e849ffa2d77271f899e42a52",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: { },
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
}
},
attachments: { },
metadata: [
{
id: "166",
key: "geo_public",
value: "0"
}
],
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/34",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/34/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
		replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/34/replies/",
		likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/34/likes/"
	}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 32,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-10T13:58:38+00:00",
modified: "2014-09-11T12:25:22+00:00",
title: "wp Rest Api Cont.",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/10/wp-rest-api-cont/",
short_URL: "http://wp.me/p50g34-w",
content: "<p>I&#8217;d love any feedback on this little project of mine as well as any suggestions for improvements.</p> <p>I would love to see this being used by others in the future, so I aim to get it &#8216;plug-in quality&#8217; in time.</p> <p>If you&#8217;d like to contribute you can do so over at <a href='https://github.com/SpenUK/backbone--wordpress-REST-access'>the GitHub repo<br /> </a></p> <p>And incase you&#8217;re viewing this from elsewhere, <a href='http://spentaylor.com/wp-blog'>here&#8217;s the demo page</a></p> ",
excerpt: "<p>I&#8217;d love any feedback on this little project of mine as well as any suggestions for improvements. I would love to see this being used by others in the future, so I aim to get it &#8216;plug-in quality&#8217; in time. If you&#8217;d like to contribute you can do so over at the GitHub repo And incase [&hellip;]</p> ",
slug: "wp-rest-api-cont",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=32",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "6ecf748cc31aa00d6a7f77d086d34a90",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
API: {
ID: 4276,
name: "API",
slug: "api",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
REST: {
ID: 15314,
name: "REST",
slug: "rest",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
"WP-REST-API": {
ID: 259472257,
name: "WP-REST-API",
slug: "wp-rest-api",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
}
},
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
}
},
attachments: { },
metadata: [
{
	id: "187",
	key: "geo_public",
	value: "0"
},
{
	id: "179",
	key: "_wpas_mess",
	value: "wp Rest Api Cont."
},
{
	id: "173",
	key: "_wpas_skip_facebook",
	value: "1"
},
{
	id: "174",
	key: "_wpas_skip_google_plus",
	value: "1"
},
{
	id: "176",
	key: "_wpas_skip_linkedin",
	value: "1"
},
{
	id: "178",
	key: "_wpas_skip_path",
	value: "1"
},
{
	id: "177",
	key: "_wpas_skip_tumblr",
	value: "1"
},
{
	id: "175",
	key: "_wpas_skip_twitter",
	value: "1"
}
],
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/32",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/32/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
		replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/32/replies/",
		likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/32/likes/"
	}
},
current_user_can: {
	publish_post: false,
	delete_post: false,
	edit_post: false
}
},
{
ID: 28,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:33:02+00:00",
modified: "2014-09-09T13:14:04+00:00",
title: "Cheese",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/cheese/",
short_URL: "http://wp.me/s50g34-cheese",
content: "<p>I love cheese, especially macaroni cheese blue castello. Squirty cheese smelly cheese lancashire bavarian bergkase fondue the big cheese squirty cheese cheesy feet. Feta fromage frais paneer bavarian bergkase the big cheese airedale cheese slices say cheese. Swiss boursin gouda pecorino melted cheese paneer lancashire halloumi. Cheddar cream cheese pepper jack macaroni cheese cheese strings cheesy feet cheddar croque monsieur. Brie roquefort cheese slices stinking bishop taleggio cheesy feet taleggio cheese and wine. Red leicester mozzarella cheese and wine caerphilly roquefort taleggio.</p> <p>The big cheese goat queso. Airedale cheeseburger roquefort edam stilton cow hard cheese croque monsieur. Cauliflower cheese taleggio cheesy grin babybel jarlsberg chalk and cheese stilton boursin. Boursin port-salut rubber cheese cheese slices stilton stilton cheese triangles cheese triangles. Jarlsberg rubber cheese macaroni cheese bocconcini paneer port-salut cheddar lancashire. Bavarian bergkase rubber cheese hard cheese cheese and wine bavarian bergkase danish fontina cheese triangles ricotta. Gouda melted cheese parmesan airedale hard cheese cheese triangles.</p> ",
excerpt: "<p>I love cheese, especially macaroni cheese blue castello. Squirty cheese smelly cheese lancashire bavarian bergkase fondue the big cheese squirty cheese cheesy feet. Feta fromage frais paneer bavarian bergkase the big cheese airedale cheese slices say cheese. Swiss boursin gouda pecorino melted cheese paneer lancashire halloumi. Cheddar cream cheese pepper jack macaroni cheese cheese strings [&hellip;]</p> ",
slug: "cheese",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=28",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "0e1a9e462795613e1036707818f2a80f",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
Cheese: {
ID: 7630,
name: "Cheese",
slug: "cheese",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:cheese",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:cheese/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
Dairy: {
ID: 8614,
name: "Dairy",
slug: "dairy",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dairy",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dairy/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
API: {
ID: 4276,
name: "API",
slug: "api",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
REST: {
ID: 15314,
name: "REST",
slug: "rest",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
"WP-REST-API": {
ID: 259472257,
name: "WP-REST-API",
slug: "wp-rest-api",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
}
},
categories: {
	Dairy: {
		ID: 8614,
		name: "Dairy",
		slug: "dairy",
		description: "",
		post_count: 1,
		parent: 586,
		meta: {
			links: {
				self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:dairy",
				help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:dairy/help",
				site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
			}
		}
	}
},
attachments: { },
metadata: [
	{
	id: "119",
	key: "geo_public",
	value: "0"
	}
],
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/28",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/28/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
		replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/28/replies/",
		likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/28/likes/"
	}
},
current_user_can: {
	publish_post: false,
	delete_post: false,
	edit_post: false
}
},
{
ID: 26,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:32:17+00:00",
modified: "2014-09-09T13:14:51+00:00",
title: "Pommy Ipsum",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/pommy-ipsum/",
short_URL: "http://wp.me/p50g34-q",
content: "<p>Pommy ipsum fish fingers and custard scatterbrained sausage roll clotted cream guiness, what a load of cobblers jolly a right royal knees up wellies. Dignified scarper bloke scrumpy naff off for sooth, give you a bell cup of tea ey up brilliant. Big Ben off t&#8217;shop beefeater I bid you good day one would like chap, bit of a Jack the lad nowt a comely wench. Treacle hedgehog cheerio I bid you good day numbskull, shepherd&#8217;s pie we&#8217;ll be &#8216;avin less of that down South. Jolly leisurely wellies is she &#8216;avin a laugh nutter fancy a cuppa laughing gear have a kip, Victoria sponge cake golly doofer Union Jack getting on my wick ey up duck a bit miffed, bobby down South cotton on pie-eyed made a pig&#8217;s ear of it tad.</p> <p>In the jacksy gobsmacked god save the queen golly curry sauce cor blimey&#8217; the black death the fuzz conkers, splendid beefeater down the local utter shambles drizzle lug hole they can sod off. Tip-top cup of tea smeg bit of alright daft cow chin up Victoria sponge cake pigeons in Trafalgar Square fish fingers and custard, stupendous completely starkers you mean it ain&#8217;t me noggin&#8217; give you a bell black cab darling 10 pence mix what a load of cobblers gob, flip flops got a lot of brass nutter Essex girls muck about tosser crisps.</p> <p>- See more at: <a href='http://www.pommyipsum.com/#sthash.F4kGmIkO.dpuf' rel='nofollow'>http://www.pommyipsum.com/#sthash.F4kGmIkO.dpuf</a></p> ",
excerpt: "<p>Pommy ipsum fish fingers and custard scatterbrained sausage roll clotted cream guiness, what a load of cobblers jolly a right royal knees up wellies. Dignified scarper bloke scrumpy naff off for sooth, give you a bell cup of tea ey up brilliant. Big Ben off t&#8217;shop beefeater I bid you good day one would like [&hellip;]</p> ",
slug: "pommy-ipsum",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=26",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "81df9d3dedeb3b662c48522306687657",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: { 
	Cheese: {
		ID: 7630,
		name: "Cheese",
		slug: "cheese",
		description: "",
		post_count: 1,
		meta: {
			links: {
				self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:cheese",
				help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:cheese/help",
				site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
			}
		}
	},
	Dairy: {
	ID: 8614,
	name: "Dairy",
	slug: "dairy",
	description: "",
	post_count: 1,
	meta: {
	links: {
	self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dairy",
	help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dairy/help",
	site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
	}
	},
	API: {
	ID: 4276,
	name: "API",
	slug: "api",
	description: "",
	post_count: 1,
	meta: {
	links: {
	self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api",
	help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api/help",
	site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
	}
	},
	REST: {
	ID: 15314,
	name: "REST",
	slug: "rest",
	description: "",
	post_count: 1,
	meta: {
	links: {
	self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest",
	help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest/help",
	site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
	}
	},
	"WP-REST-API": {
	ID: 259472257,
	name: "WP-REST-API",
	slug: "wp-rest-api",
	description: "",
	post_count: 1,
	meta: {
	links: {
	self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api",
	help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api/help",
	site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
	}
	}
},
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: { },
metadata: [
{
id: "109",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/26",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/26/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/26/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/26/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 23,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:31:10+00:00",
modified: "2014-09-09T13:17:39+00:00",
title: "Just a short one",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/just-a-short-one/",
short_URL: "http://wp.me/p50g34-n",
content: "<p>Today I ate bread, but not loads&#8230; just one bun. this is what it looked like.</p> <p><a href='https://ijustwanttotesttheapi.files.wordpress.com/2014/09/finance-bill-2012-bread-bun.jpg'><img class='aligncenter size-medium wp-image-24' src='http://ijustwanttotesttheapi.files.wordpress.com/2014/09/finance-bill-2012-bread-bun.jpg?w=300&#038;h=199' alt='finance-bill-2012-bread-bun' width='300' height='199' /></a></p> ",
excerpt: "<p>Today I ate bread, but not loads&#8230; just one bun. this is what it looked like.</p> ",
slug: "just-a-short-one",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=23",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "1f3ae491d614bc6be62e4b2a3a8f4d3c",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {

Bread: {
ID: 22482,
name: "Bread",
slug: "bread",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:bread",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:bread/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Food: {
ID: 586,
name: "Food",
slug: "food",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:food",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:food/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Lunch: {
ID: 16231,
name: "Lunch",
slug: "lunch",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:lunch",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:lunch/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
Bread: {
ID: 22482,
name: "Bread",
slug: "bread",
description: "",
post_count: 1,
parent: 586,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:bread",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:bread/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: {
24: {
ID: 24,
URL: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/finance-bill-2012-bread-bun.jpg",
guid: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/finance-bill-2012-bread-bun.jpg",
mime_type: "image/jpeg",
width: 425,
height: 282
}
},
metadata: [
{
id: "99",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/23",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/23/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/23/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/23/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 19,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:25:46+00:00",
modified: "2014-09-09T13:15:16+00:00",
title: "Baconing",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/baconing/",
short_URL: "http://wp.me/s50g34-baconing",
content: "<p>Bacon ipsum dolor sit amet rump jerky pork belly capicola drumstick ground round strip steak venison. Beef ribs jerky ribeye landjaeger tri-tip pork belly. Turkey capicola pig t-bone, frankfurter beef ribs tail andouille kielbasa chuck pork belly swine flank salami landjaeger. Landjaeger swine shank beef ribs doner, spare ribs venison cow meatball turducken sausage. Leberkas turducken andouille chuck, prosciutto beef ribs boudin.</p> <p>Sirloin flank pancetta meatball kevin hamburger short ribs. Kevin sirloin cow bacon chicken biltong tenderloin boudin beef sausage filet mignon tail tongue ham. Kielbasa cow shoulder doner, meatloaf meatball brisket t-bone sirloin bresaola pig shankle rump. Leberkas short ribs ribeye capicola boudin hamburger, flank strip steak landjaeger pancetta rump. Ground round kielbasa ribeye sirloin pork chop short loin prosciutto tenderloin andouille jerky jowl.</p> <p>Capicola ball tip kevin, tongue brisket bacon strip steak sausage tri-tip leberkas jerky boudin tenderloin meatloaf. Prosciutto t-bone pork loin beef boudin short loin cow swine tongue brisket fatback landjaeger. Jerky meatloaf meatball ball tip strip steak jowl tongue short ribs ground round shoulder. Salami doner meatball beef flank. Ham hock ball tip tenderloin, meatball fatback pork biltong doner jowl strip steak swine.</p> ",
excerpt: "<p>Bacon ipsum dolor sit amet rump jerky pork belly capicola drumstick ground round strip steak venison. Beef ribs jerky ribeye landjaeger tri-tip pork belly. Turkey capicola pig t-bone, frankfurter beef ribs tail andouille kielbasa chuck pork belly swine flank salami landjaeger. Landjaeger swine shank beef ribs doner, spare ribs venison cow meatball turducken sausage. Leberkas [&hellip;]</p> ",
slug: "baconing",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=19",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "a93b51cbb7c2017be9e4622c2fd15766",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
Bacon: {
ID: 96588,
name: "Bacon",
slug: "bacon",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:bacon",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:bacon/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Meat: {
ID: 8188,
name: "Meat",
slug: "meat",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:meat",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:meat/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Pig: {
ID: 15610,
name: "Pig",
slug: "pig",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:pig",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:pig/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Tasty: {
ID: 244116,
name: "Tasty",
slug: "tasty",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:tasty",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:tasty/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
Meat: {
ID: 8188,
name: "Meat",
slug: "meat",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:meat",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:meat/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: { },
metadata: [
{
id: "79",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/19",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/19/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/19/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/19/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 17,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:23:45+00:00",
modified: "2014-09-10T19:29:15+00:00",
title: "Long Post",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/synergy/",
short_URL: "http://wp.me/s50g34-synergy",
content: "<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p> <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p> <p>Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p> <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p> <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric &#8220;outside the box&#8221; thinking. Completely pursue scalable customer service through sustainable potentialities.</p> <p>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or &#8220;organic&#8221; sources.</p> <p>Credibly innovate granular internal or &#8220;organic&#8221; sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.</p> <p>Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.</p> <p>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p> ",
excerpt: "<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate [&hellip;]</p> ",
slug: "synergy",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=17",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "f0acce10b5bc845fbc03ec788c9faf28",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
B2B: {
ID: 14906,
name: "B2B",
slug: "b2b",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:b2b",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:b2b/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Corporate: {
ID: 7100,
name: "Corporate",
slug: "corporate",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:corporate",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:corporate/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Dynamic: {
ID: 214633,
name: "Dynamic",
slug: "dynamic",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dynamic",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dynamic/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
B2B: {
ID: 14906,
name: "B2B",
slug: "b2b",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:b2b",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:b2b/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
"Corporate Culture": {
ID: 49657,
name: "Corporate Culture",
slug: "corporate-culture",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:corporate-culture",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:corporate-culture/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: { },
metadata: [
{
id: "67",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/17",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/17/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/17/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/17/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 12,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:08:36+00:00",
modified: "2014-09-09T13:17:11+00:00",
title: "Hodor!",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/hodor/",
short_URL: "http://wp.me/s50g34-hodor",
content: "<p><a href='https://ijustwanttotesttheapi.files.wordpress.com/2014/09/0.jpg'><img class='aligncenter size-medium wp-image-13' src='http://ijustwanttotesttheapi.files.wordpress.com/2014/09/0.jpg?w=300&#038;h=225' alt='0' width='300' height='225' /></a>Hodor hodor HODOR!hodor, hodor. Hodor hodor hodor hodor, hodor. Hodor hodor. Hodor! Hodor hodor, hodor hodor hodor&#8230; Hodor hodor hodor &#8211; hodor, hodor, hodor hodor. Hodor hodor hodor hodor?! Hodor hodor &#8211; hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor. Hodor. Hodor hodor &#8211; hodor, hodor. Hodor hodor hodor!</p> <p>Hodor hodor &#8211; hodor, hodor. Hodor hodor&#8230; Hodor hodor hodor &#8211; hodor?! Hodor hodor&#8230; Hodor hodor hodor &#8211; hodor, hodor. Hodor hodor hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor&#8230; Hodor hodor HODOR hodor, hodor hodor. Hodor, hodor &#8211; hodor? Hodor hodor HODOR! Hodor hodor&#8230; Hodor hodor hodor, hodor. Hodor HODOR hodor, hodor hodor?</p> ",
excerpt: "<p>Hodor hodor HODOR!hodor, hodor. Hodor hodor hodor hodor, hodor. Hodor hodor. Hodor! Hodor hodor, hodor hodor hodor&#8230; Hodor hodor hodor &#8211; hodor, hodor, hodor hodor. Hodor hodor hodor hodor?! Hodor hodor &#8211; hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor. Hodor. Hodor hodor &#8211; hodor, hodor. Hodor hodor hodor! Hodor hodor [&hellip;]</p> ",
slug: "hodor",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=12",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "0a4e8a82941e486df934be4c7f71209c",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
Hodor: {
ID: 14825022,
name: "Hodor",
slug: "hodor",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:hodor",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:hodor/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
Hodor: {
ID: 14825022,
name: "Hodor",
slug: "hodor",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:hodor",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:hodor/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: {
13: {
ID: 13,
URL: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/0.jpg",
guid: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/0.jpg",
mime_type: "image/jpeg",
width: 480,
height: 360
}
},
metadata: [
{
id: "47",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/12",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/12/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/12/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/12/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 15,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-07T11:09:54+00:00",
modified: "2014-09-10T19:27:59+00:00",
title: "Third Post",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/07/third-post/",
short_URL: "http://wp.me/p50g34-f",
content: "<p>Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. In hizzle pizzle dope dictumst. Shizzlin dizzle dapibizzle. Curabitizzle tellizzle crazy, pretizzle things, mattis izzle, fizzle vitae, nunc. We gonna chung suscipit. Integer yo mamma dope ghetto hizzle.</p> <p>Curabitizzle shut the shizzle up pimpin&#8217; gangsta nisi break it down mollizzle. Suspendisse potenti. Fo shizzle go to hizzle. I&#8217;m in the shizzle neque. Mofo orci. Crizzle mauris mauris, mofo funky fresh, feugiat sit amizzle, boofron izzle, pede. Pellentesque shizzle my nizzle crocodizzle. Vestibulizzle gangster mi, volutpizzle izzle, sagittis sed, fo shizzle sempizzle, sizzle. Check out this izzle ipsizzle. That&#8217;s the shizzle black felizzle mofo orci. Nizzle pizzle go to hizzle tellivizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle sodalizzle ornare. Mammasay mammasa mamma oo sa venenatizzle fizzle yo lacizzle. Yo things. Suspendisse sure placerat lacus. Sizzle dang ante. Nunc go to hizzle, leo eu dapibus hendrerizzle, shiz felizzle cool sizzle, break it down crazy magna that&#8217;s the shizzle luctus pede. Nam a mammasay mammasa mamma oo sa. Class crackalackin taciti crunk ad litora torquent bizzle black we gonna chung, away sheezy hymenaeos. Break yo neck, yall interdum, fizzle nizzle elementizzle nonummy, ass orci viverra leo, boofron mammasay mammasa mamma oo sa risizzle arcu my shizz sizzle.</p> ",
excerpt: "<p>Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. In hizzle [&hellip;]</p> ",
slug: "third-post",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=15",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "e8c40e7b0109e4fa1935c694d8ec0c2f",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: { },
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: { },
metadata: [
{
id: "57",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/15",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/15/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/15/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/15/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 7,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-04T14:17:38+00:00",
modified: "2014-09-09T13:18:33+00:00",
title: "Second Post",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/04/second-post/",
short_URL: "http://wp.me/p50g34-7",
content: "<p><a href='https://ijustwanttotesttheapi.files.wordpress.com/2014/09/jaba.jpg'><img class='aligncenter size-medium wp-image-8' src='http://ijustwanttotesttheapi.files.wordpress.com/2014/09/jaba.jpg?w=300&#038;h=249' alt='jaba' width='300' height='249' /></a></p> <p>&nbsp;</p> <p>har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har</p> ",
excerpt: "<p>&nbsp; har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har [&hellip;]</p> ",
slug: "second-post",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=7",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "38a4f8693cb2d03fbebb35517b30aa66",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
Art: {
ID: 177,
name: "Art",
slug: "art",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:art",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:art/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Jabba: {
ID: 159987,
name: "Jabba",
slug: "jabba",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:jabba",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:jabba/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
"har har har": {
ID: 1192263,
name: "har har har",
slug: "har-har-har",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:har-har-har",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:har-har-har/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: {
8: {
ID: 8,
URL: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/jaba.jpg",
guid: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/jaba.jpg",
mime_type: "image/jpeg",
width: 500,
height: 415
}
},
metadata: [
{
id: "31",
key: "geo_public",
value: "0"
},
{
id: "21",
key: "_wpas_mess",
value: "undefined"
},
{
id: "15",
key: "_wpas_skip_facebook",
value: "1"
},
{
id: "16",
key: "_wpas_skip_google_plus",
value: "1"
},
{
id: "18",
key: "_wpas_skip_linkedin",
value: "1"
},
{
id: "20",
key: "_wpas_skip_path",
value: "1"
},
{
id: "19",
key: "_wpas_skip_tumblr",
value: "1"
},
{
id: "17",
key: "_wpas_skip_twitter",
value: "1"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/7",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/7/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/7/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/7/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 3,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-01T11:45:09+00:00",
modified: "2014-09-01T11:45:09+00:00",
title: "First Post",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/01/first-post/",
short_URL: "http://wp.me/p50g34-3",
content: "<p style='text-align:left;''>Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel put a bird on it. Drinking vinegar food truck McSweeney&#8217;s roof party, salvia +1 tattooed DIY disrupt Helvetica. Narwhal kale chips tousled beard distillery Odd Future, PBR&amp;B 90&#8217;s selvage cardigan church-key scenester. Paleo sustainable actually Carles cray cliche dreamcatcher.</p> <p><a href='https://ijustwanttotesttheapi.files.wordpress.com/2014/09/subo.jpg'><img class='aligncenter size-medium wp-image-4' src='http://ijustwanttotesttheapi.files.wordpress.com/2014/09/subo.jpg?w=300&#038;h=219' alt='subo' width='300' height='219' /></a></p> <p>Pitchfork actually readymade messenger bag, craft beer Pinterest scenester Thundercats sartorial keffiyeh hella twee organic Brooklyn. Shoreditch Thundercats art party sartorial tattooed flexitarian, actually direct trade PBR&amp;B before they sold out Etsy Vice. Selfies High Life roof party trust fund, swag shabby chic Godard freegan fap authentic asymmetrical. Retro hashtag Thundercats selfies hella direct trade. IPhone swag next level, gastropub chambray retro Etsy squid kitsch. Viral locavore Brooklyn plaid Carles. Church-key hella narwhal, YOLO ethnic scenester biodiesel Odd Future.</p> ",
excerpt: "<p>Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel put a bird [&hellip;]</p> ",
slug: "first-post",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=3",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 1,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "54e4d86f54daa326a38050d0c4fe364a",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
"kale chips": {
ID: 6017001,
name: "kale chips",
slug: "kale-chips",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:kale-chips",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:kale-chips/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
"Odd Future": {
ID: 16642545,
name: "Odd Future",
slug: "odd-future",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:odd-future",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:odd-future/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
YOLO: {
ID: 711100,
name: "YOLO",
slug: "yolo",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:yolo",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:yolo/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: {
4: {
ID: 4,
URL: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/subo.jpg",
guid: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/subo.jpg",
mime_type: "image/jpeg",
width: 450,
height: 329
}
},
metadata: [
{
id: "8",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/3",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/3/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/3/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/3/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
}
]
}

// });
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],5:[function(require,module,exports){
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
		ID: 3,
		title: 'Example Project 3',
		slug: 'example-project-3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl.',
		stack: {
			js: ['backbone.js', 'grunt.js', 'browserify.js', 'handlebars.js'],
			ruby: ['rails']
		}
	}, {
		ID: 2,
		title: 'Example Project 2',
		slug: 'example-project-2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl.',
		stack: {
			js: ['backbone.js', 'grunt.js', 'browserify.js', 'handlebars.js'],
			php: ['']
		}
	}, {
		ID: 1,
		title: 'Example Project 1',
		slug: 'example-project-1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl.',
		stack: {
			js: ['ember.js', 'gulp.js', 'node.js', 'handlebars.js']
		}
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

this["JST"]["blog-post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  },"3":function(depth0,helpers,partials,data) {
  return "Article Title";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"grid-container\">\n\n	<h2>";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h2>\n	\n</div>";
},"useData":true});

this["JST"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	<h2>contact</h2>\n</div>";
  },"useData":true});

this["JST"]["intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"links\">\n	<li class=\"about\"><a href=\"#/about\">about</a></li>\n	<li class=\"blog\"><a href=\"#/blog\">blog</a></li>\n	<li class=\"projects\"><a href=\"#/projects\">projects</a></li>\n	<li class=\"contact\"><a href=\"#/contact\">contact</a></li>\n</ul>\n";
  },"useData":true});

this["JST"]["master"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"page-wrap "
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"landing\">\n    <div class=\"cell\">\n  		<div class=\"landing-content\" id=\"landing\">\n        ";
  stack1 = ((helper = (helper = helpers.introContent || (depth0 != null ? depth0.introContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"introContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  		</div>\n    </div>\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\">\n\n    </div>    	 \n  	<div class=\"main\">\n      <div data-1 class=\"content\" id=\"main\">";
  stack1 = ((helper = (helper = helpers.mainContent || (depth0 != null ? depth0.mainContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n\n      <div data-2 class=\"content transitioner\">\n        <div class=\"grid-container\">\n          <h2>TRANSITION EXAMPLE</h2>\n          <p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p>\n        </div>\n      </div>\n  	</div>\n\n  </div>\n</div>";
},"useData":true});

this["JST"]["project"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  },"3":function(depth0,helpers,partials,data) {
  return "Project Title";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"grid-container\">\n	<h2>";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h2>\n\n	\n\n</div>";
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
  buffer += ">\n      <div class=\"icon\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </div>\n    </a>\n  \n  <a href=\"#\">\n    <div class=\"icon menu\">\n      <i class=\"fa fa-bars fa-2x show-intro\"></i>\n    </div>\n  </a>\n\n  \n    <a ";
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

		window.Backbone.trigger('ui:showContent');
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');

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
		var targetIndex = (this.position +1 > collection.length -1)?  0 : this.position + 1;
		return collection.at(targetIndex);
	},
	getPrevModel: function(){
		var collection = this.collection;
		var targetIndex = (this.position -1 < 0) ? collection.length -1 : this.position - 1;
		return collection.at(targetIndex);
	},
	nextRoute: function(){
		return '#/'+ this.namespace +'/' + this.getNextModel().get('slug');
	},
	prevRoute: function(){
		return '#/'+ this.namespace +'/' + this.getPrevModel().get('slug');
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

		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],13:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		options = options || {};
		this.template = options.template;
		this.render(options);
	},
	render: function(options){
		options = options;
		console.log('rendering intro');
		this.$el.html(this.template());
		$('body').addClass('intro').removeClass('content');

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
		var targetIndex = (this.position +1 > collection.length -1)?  0 : this.position + 1;
		return collection.at(targetIndex);
	},
	getPrevModel: function(){
		var collection = this.collection;
		var targetIndex = (this.position -1 < 0) ? collection.length -1 : this.position - 1;
		return collection.at(targetIndex);
	},
	nextRoute: function(){
		return '#/'+ this.namespace +'/' + this.getNextModel().get('slug');
	},
	prevRoute: function(){
		return '#/'+ this.namespace +'/' + this.getPrevModel().get('slug');
	},
	checkSlug: function(slug){
		return (this.collection.where({slug: slug}).length >= 1);
	},
	defaultSlug: function(){
		return this.currentRecord ? this.currentRecord.get('slug') : this.collection.first().get('slug');
	},
	defaultRoute: function(){
		var thing = this.defaultSlug();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvbW9kdWxlcy9wYWdlLXRyYW5zaXRpb25zLmpzIiwiYXBwL2pzL3Byb2plY3RzLXN0dWJzLmpzIiwiYXBwL2pzL3JvdXRlci5qcyIsImFwcC9qcy90ZW1wbGF0ZXMuanMiLCJhcHAvanMvdmlld3MvYWJvdXQuanMiLCJhcHAvanMvdmlld3MvYmxvZy1wb3N0LmpzIiwiYXBwL2pzL3ZpZXdzL2NvbnRhY3QuanMiLCJhcHAvanMvdmlld3MvaW50cm8uanMiLCJhcHAvanMvdmlld3MvbWFzdGVyLmpzIiwiYXBwL2pzL3ZpZXdzL3Byb2plY3QuanMiLCJhcHAvanMvdmlld3MvdWkvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDLzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXIuanMnKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy5qcycpO1xuXG5cbnZhciBBcHAgPSB7XG4gIGludHJvUGFuZWw6ICcjbGFuZGluZycsXG4gIG1haW5QYW5lbDogJy5tYWluIC5jb250ZW50JyxcbiAgdHJhbnNpdGlvblBhbmVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cbiAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMsXG5cbiAgdmlld3M6IHtcbiAgICBtYXN0ZXI6IHJlcXVpcmUoJy4vdmlld3MvbWFzdGVyLmpzJyksXG5cbiAgICBpbnRybzogcmVxdWlyZSgnLi92aWV3cy9pbnRyby5qcycpLFxuICAgIGJsb2c6IHJlcXVpcmUoJy4vdmlld3MvYmxvZy1wb3N0LmpzJyksXG4gICAgcHJvamVjdHM6IHJlcXVpcmUoJy4vdmlld3MvcHJvamVjdC5qcycpLFxuICAgIGNvbnRhY3Q6IHJlcXVpcmUoJy4vdmlld3MvY29udGFjdC5qcycpLFxuICAgIGFib3V0OiByZXF1aXJlKCcuL3ZpZXdzL2Fib3V0LmpzJylcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgXHRvcHRpb25zID0gb3B0aW9uczsgLy8gbGludGVyIC1fXy1cbiAgICAvLyB2YXIgdGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZXM7XG4gIFx0dGhpcy4kaW50cm9QYW5lbCA9ICQodGhpcy5pbnRyb1BhbmVsKTtcbiAgXHR0aGlzLiRtYWluUGFuZWwgPSAkKHRoaXMubWFpblBhbmVsKTtcblxuICAgIC8vIGlzIGl0IHdvcnRoIGRlZmluaW5nIHRoZSB0b3AgcGFuZWwgY29udGVudCBoZXJlPyB3aWxsIGl0IGV2ZXIgY2hhbmdlPyBjb3VsZCBiZSB1c2VkIGFzIGFuIGluZGV4IHBhZ2U/XG4gICAgdGhpcy4kaW50cm9QYW5lbC5odG1sKHRlbXBsYXRlcy5pbnRybygpKTtcbiAgICAvLyB0aGlzLnZpZXdzLnVpLmhlYWRlciA9IG5ldyB0aGlzLnZpZXdzLnVpLmhlYWRlcih7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblxuICAgIHRoaXMudmlld3MubWFzdGVyID0gbmV3IHRoaXMudmlld3MubWFzdGVyKCk7XG5cbiAgXHR3aW5kb3cuciA9IHRoaXMucm91dGVyID0gbmV3IHJvdXRlcih0aGlzKTtcblxuICAgIC8vIHVzZSBsb2NhbCBzdG9yYWdlIHRvIGRlZmluZSBoZSBmaXJzdCB2aWV3PyBmaXggdGhpcyB1cCBhdCBhIGhpZ2hlciBsZXZlbCBmaXJzdD9cbiAgICAvLyAkKHRoaXMubWFpblBhbmVsKS5odG1sKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwOyIsIi8vIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5mb3VuZDogMTEsXG5wb3N0czogW1xue1xuSUQ6IDM0LFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0xMFQxNDoyMjoyOSswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0xMFQxNDoyMzo1MiswMDowMFwiLFxudGl0bGU6IFwid3AgUmVzdCBBcGlcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8xMC93cC1yZXN0LWFwaS9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvcDUwZzM0LXlcIixcbmNvbnRlbnQ6IFwiPHA+VGhlIGlkZWEgaGVyZSBpcyB0byBwdWxsIGluIFdvcmRQcmVzcyBibG9nIHBvc3RzIGFzIEpTT04gcmVwcmVzZW50YXRpb25zIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIHByb2Nlc3Npbmcgb3IgcmVuZGVyaW5nIGluIGFuIG91dHNpZGUgcHJvamVjdC48L3A+IDxwPkkgZGVjaWRlZCB0byBidWlsZCB0aGlzIHBhcnRpYWxseSB0byBleHBlcmltZW50IHdpdGggYSBoYW5kZnVsIG9mIEpTIGNvbmNlcHRzICZhbXA7IHRlY2hzIHRoYXQgSSB3YW50ZWQgdG8gbGVhcm4gbW9yZSBhYm91dCAmIzgyMTE7IG5hbWVseSBCYWNrYm9uZUpTIGFuZCBSZXF1aXJlSlMgYXMgd2VsbCBhcyBiZXR0ZXIgJmFtcDsgbW9yZSBtb2R1bGFyIGNvZGUgc3RydWN0dXJlcywgdGhpcmQgcGFydHkgUkVTVCBBUEkgdXNhZ2UsIGFuZCBidWlsZCBwcm9jZXNzZXMuPGJyIC8+IFRoZSBvdGhlciByZWFzb24gZm9yIHB1dHRpbmcgdGhpcyB0b2dldGhlciB3YXMgc28gdGhhdCBJIGNvdWxkIGJ1aWxkIG91dCBhIHNtYWxsIGNvbGxlY3Rpb24gb2YgbW9kdWxlcyB0aGF0IGVhY2ggcHVsbCBkYXRhIGZyb20gZGlmZmVyZW50IEFQSXMgdG8gYmUgdXNlZCBvbiBteSBvd24gcGVyc29uYWwgd2Vic2l0ZSAoQW5kIGFueWJvZHkgZWxzZSYjODIxNztzIGlmIHRoZXkgd2lzaCEpLjwvcD4gPHA+SSBwbGFuIHRvIGJ1aWxkIHNpbWlsYXIgbW9kdWxlcyBmb3IgR2l0SHViLCBHaXRIdWIgR2lzdHMsIFR3aXR0ZXIsIERyaWJiYmxlLCBUcmVlaG91c2UgYW5kIHByZXR0eSBtdWNoIGFueSBvdGhlciBBUEkgYSBkZXZlbG9wZXIgb3IgZGVzaWduZXIgd291bGQgbGlrZSB0byBzZWUgb24gdGhlaXIgcG9ydGZvbGlvL3BlcnNvbmFsIHNpdGUuPC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+VGhlIGlkZWEgaGVyZSBpcyB0byBwdWxsIGluIFdvcmRQcmVzcyBibG9nIHBvc3RzIGFzIEpTT04gcmVwcmVzZW50YXRpb25zIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIHByb2Nlc3Npbmcgb3IgcmVuZGVyaW5nIGluIGFuIG91dHNpZGUgcHJvamVjdC4gSSBkZWNpZGVkIHRvIGJ1aWxkIHRoaXMgcGFydGlhbGx5IHRvIGV4cGVyaW1lbnQgd2l0aCBhIGhhbmRmdWwgb2YgSlMgY29uY2VwdHMgJmFtcDsgdGVjaHMgdGhhdCBJIHdhbnRlZCB0byBsZWFybiBtb3JlIGFib3V0ICYjODIxMTsgbmFtZWx5IEJhY2tib25lSlMgYW5kIFJlcXVpcmVKUyBhcyB3ZWxsIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJ3cC1yZXN0LWFwaVwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MzRcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCJjZjk4MmM3MGU4NDlmZmEyZDc3MjcxZjg5OWU0MmE1MlwiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7IH0sXG5jYXRlZ29yaWVzOiB7XG5VbmNhdGVnb3JpemVkOiB7XG5JRDogMSxcbm5hbWU6IFwiVW5jYXRlZ29yaXplZFwiLFxuc2x1ZzogXCJ1bmNhdGVnb3JpemVkXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDUsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZC9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59XG59LFxuYXR0YWNobWVudHM6IHsgfSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCIxNjZcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn1cbl0sXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMzRcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zNC9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcblx0XHRyZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zNC9yZXBsaWVzL1wiLFxuXHRcdGxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zNC9saWtlcy9cIlxuXHR9XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMzIsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTEwVDEzOjU4OjM4KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTExVDEyOjI1OjIyKzAwOjAwXCIsXG50aXRsZTogXCJ3cCBSZXN0IEFwaSBDb250LlwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzEwL3dwLXJlc3QtYXBpLWNvbnQvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3A1MGczNC13XCIsXG5jb250ZW50OiBcIjxwPkkmIzgyMTc7ZCBsb3ZlIGFueSBmZWVkYmFjayBvbiB0aGlzIGxpdHRsZSBwcm9qZWN0IG9mIG1pbmUgYXMgd2VsbCBhcyBhbnkgc3VnZ2VzdGlvbnMgZm9yIGltcHJvdmVtZW50cy48L3A+IDxwPkkgd291bGQgbG92ZSB0byBzZWUgdGhpcyBiZWluZyB1c2VkIGJ5IG90aGVycyBpbiB0aGUgZnV0dXJlLCBzbyBJIGFpbSB0byBnZXQgaXQgJiM4MjE2O3BsdWctaW4gcXVhbGl0eSYjODIxNzsgaW4gdGltZS48L3A+IDxwPklmIHlvdSYjODIxNztkIGxpa2UgdG8gY29udHJpYnV0ZSB5b3UgY2FuIGRvIHNvIG92ZXIgYXQgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1NwZW5VSy9iYWNrYm9uZS0td29yZHByZXNzLVJFU1QtYWNjZXNzJz50aGUgR2l0SHViIHJlcG88YnIgLz4gPC9hPjwvcD4gPHA+QW5kIGluY2FzZSB5b3UmIzgyMTc7cmUgdmlld2luZyB0aGlzIGZyb20gZWxzZXdoZXJlLCA8YSBocmVmPSdodHRwOi8vc3BlbnRheWxvci5jb20vd3AtYmxvZyc+aGVyZSYjODIxNztzIHRoZSBkZW1vIHBhZ2U8L2E+PC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+SSYjODIxNztkIGxvdmUgYW55IGZlZWRiYWNrIG9uIHRoaXMgbGl0dGxlIHByb2plY3Qgb2YgbWluZSBhcyB3ZWxsIGFzIGFueSBzdWdnZXN0aW9ucyBmb3IgaW1wcm92ZW1lbnRzLiBJIHdvdWxkIGxvdmUgdG8gc2VlIHRoaXMgYmVpbmcgdXNlZCBieSBvdGhlcnMgaW4gdGhlIGZ1dHVyZSwgc28gSSBhaW0gdG8gZ2V0IGl0ICYjODIxNjtwbHVnLWluIHF1YWxpdHkmIzgyMTc7IGluIHRpbWUuIElmIHlvdSYjODIxNztkIGxpa2UgdG8gY29udHJpYnV0ZSB5b3UgY2FuIGRvIHNvIG92ZXIgYXQgdGhlIEdpdEh1YiByZXBvIEFuZCBpbmNhc2UgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcIndwLXJlc3QtYXBpLWNvbnRcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTMyXCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiNmVjZjc0OGNjMzFhYTAwZDZhN2Y3N2QwODZkMzRhOTBcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczoge1xuQVBJOiB7XG5JRDogNDI3Nixcbm5hbWU6IFwiQVBJXCIsXG5zbHVnOiBcImFwaVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzphcGlcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YXBpL2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn0sXG5SRVNUOiB7XG5JRDogMTUzMTQsXG5uYW1lOiBcIlJFU1RcIixcbnNsdWc6IFwicmVzdFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpyZXN0XCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnJlc3QvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufSxcblwiV1AtUkVTVC1BUElcIjoge1xuSUQ6IDI1OTQ3MjI1Nyxcbm5hbWU6IFwiV1AtUkVTVC1BUElcIixcbnNsdWc6IFwid3AtcmVzdC1hcGlcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6d3AtcmVzdC1hcGlcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6d3AtcmVzdC1hcGkvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufVxufSxcbmNhdGVnb3JpZXM6IHtcblVuY2F0ZWdvcml6ZWQ6IHtcbklEOiAxLFxubmFtZTogXCJVbmNhdGVnb3JpemVkXCIsXG5zbHVnOiBcInVuY2F0ZWdvcml6ZWRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogNSxcbnBhcmVudDogMCxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZFwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkL2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn1cbn0sXG5hdHRhY2htZW50czogeyB9LFxubWV0YWRhdGE6IFtcbntcblx0aWQ6IFwiMTg3XCIsXG5cdGtleTogXCJnZW9fcHVibGljXCIsXG5cdHZhbHVlOiBcIjBcIlxufSxcbntcblx0aWQ6IFwiMTc5XCIsXG5cdGtleTogXCJfd3Bhc19tZXNzXCIsXG5cdHZhbHVlOiBcIndwIFJlc3QgQXBpIENvbnQuXCJcbn0sXG57XG5cdGlkOiBcIjE3M1wiLFxuXHRrZXk6IFwiX3dwYXNfc2tpcF9mYWNlYm9va1wiLFxuXHR2YWx1ZTogXCIxXCJcbn0sXG57XG5cdGlkOiBcIjE3NFwiLFxuXHRrZXk6IFwiX3dwYXNfc2tpcF9nb29nbGVfcGx1c1wiLFxuXHR2YWx1ZTogXCIxXCJcbn0sXG57XG5cdGlkOiBcIjE3NlwiLFxuXHRrZXk6IFwiX3dwYXNfc2tpcF9saW5rZWRpblwiLFxuXHR2YWx1ZTogXCIxXCJcbn0sXG57XG5cdGlkOiBcIjE3OFwiLFxuXHRrZXk6IFwiX3dwYXNfc2tpcF9wYXRoXCIsXG5cdHZhbHVlOiBcIjFcIlxufSxcbntcblx0aWQ6IFwiMTc3XCIsXG5cdGtleTogXCJfd3Bhc19za2lwX3R1bWJsclwiLFxuXHR2YWx1ZTogXCIxXCJcbn0sXG57XG5cdGlkOiBcIjE3NVwiLFxuXHRrZXk6IFwiX3dwYXNfc2tpcF90d2l0dGVyXCIsXG5cdHZhbHVlOiBcIjFcIlxufVxuXSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zMlwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzMyL2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxuXHRcdHJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzMyL3JlcGxpZXMvXCIsXG5cdFx0bGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzMyL2xpa2VzL1wiXG5cdH1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5cdHB1Ymxpc2hfcG9zdDogZmFsc2UsXG5cdGRlbGV0ZV9wb3N0OiBmYWxzZSxcblx0ZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAyOCxcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDlUMTE6MzM6MDIrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMDlUMTM6MTQ6MDQrMDA6MDBcIixcbnRpdGxlOiBcIkNoZWVzZVwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzA5L2NoZWVzZS9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvczUwZzM0LWNoZWVzZVwiLFxuY29udGVudDogXCI8cD5JIGxvdmUgY2hlZXNlLCBlc3BlY2lhbGx5IG1hY2Fyb25pIGNoZWVzZSBibHVlIGNhc3RlbGxvLiBTcXVpcnR5IGNoZWVzZSBzbWVsbHkgY2hlZXNlIGxhbmNhc2hpcmUgYmF2YXJpYW4gYmVyZ2thc2UgZm9uZHVlIHRoZSBiaWcgY2hlZXNlIHNxdWlydHkgY2hlZXNlIGNoZWVzeSBmZWV0LiBGZXRhIGZyb21hZ2UgZnJhaXMgcGFuZWVyIGJhdmFyaWFuIGJlcmdrYXNlIHRoZSBiaWcgY2hlZXNlIGFpcmVkYWxlIGNoZWVzZSBzbGljZXMgc2F5IGNoZWVzZS4gU3dpc3MgYm91cnNpbiBnb3VkYSBwZWNvcmlubyBtZWx0ZWQgY2hlZXNlIHBhbmVlciBsYW5jYXNoaXJlIGhhbGxvdW1pLiBDaGVkZGFyIGNyZWFtIGNoZWVzZSBwZXBwZXIgamFjayBtYWNhcm9uaSBjaGVlc2UgY2hlZXNlIHN0cmluZ3MgY2hlZXN5IGZlZXQgY2hlZGRhciBjcm9xdWUgbW9uc2lldXIuIEJyaWUgcm9xdWVmb3J0IGNoZWVzZSBzbGljZXMgc3RpbmtpbmcgYmlzaG9wIHRhbGVnZ2lvIGNoZWVzeSBmZWV0IHRhbGVnZ2lvIGNoZWVzZSBhbmQgd2luZS4gUmVkIGxlaWNlc3RlciBtb3p6YXJlbGxhIGNoZWVzZSBhbmQgd2luZSBjYWVycGhpbGx5IHJvcXVlZm9ydCB0YWxlZ2dpby48L3A+IDxwPlRoZSBiaWcgY2hlZXNlIGdvYXQgcXVlc28uIEFpcmVkYWxlIGNoZWVzZWJ1cmdlciByb3F1ZWZvcnQgZWRhbSBzdGlsdG9uIGNvdyBoYXJkIGNoZWVzZSBjcm9xdWUgbW9uc2lldXIuIENhdWxpZmxvd2VyIGNoZWVzZSB0YWxlZ2dpbyBjaGVlc3kgZ3JpbiBiYWJ5YmVsIGphcmxzYmVyZyBjaGFsayBhbmQgY2hlZXNlIHN0aWx0b24gYm91cnNpbi4gQm91cnNpbiBwb3J0LXNhbHV0IHJ1YmJlciBjaGVlc2UgY2hlZXNlIHNsaWNlcyBzdGlsdG9uIHN0aWx0b24gY2hlZXNlIHRyaWFuZ2xlcyBjaGVlc2UgdHJpYW5nbGVzLiBKYXJsc2JlcmcgcnViYmVyIGNoZWVzZSBtYWNhcm9uaSBjaGVlc2UgYm9jY29uY2luaSBwYW5lZXIgcG9ydC1zYWx1dCBjaGVkZGFyIGxhbmNhc2hpcmUuIEJhdmFyaWFuIGJlcmdrYXNlIHJ1YmJlciBjaGVlc2UgaGFyZCBjaGVlc2UgY2hlZXNlIGFuZCB3aW5lIGJhdmFyaWFuIGJlcmdrYXNlIGRhbmlzaCBmb250aW5hIGNoZWVzZSB0cmlhbmdsZXMgcmljb3R0YS4gR291ZGEgbWVsdGVkIGNoZWVzZSBwYXJtZXNhbiBhaXJlZGFsZSBoYXJkIGNoZWVzZSBjaGVlc2UgdHJpYW5nbGVzLjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPkkgbG92ZSBjaGVlc2UsIGVzcGVjaWFsbHkgbWFjYXJvbmkgY2hlZXNlIGJsdWUgY2FzdGVsbG8uIFNxdWlydHkgY2hlZXNlIHNtZWxseSBjaGVlc2UgbGFuY2FzaGlyZSBiYXZhcmlhbiBiZXJna2FzZSBmb25kdWUgdGhlIGJpZyBjaGVlc2Ugc3F1aXJ0eSBjaGVlc2UgY2hlZXN5IGZlZXQuIEZldGEgZnJvbWFnZSBmcmFpcyBwYW5lZXIgYmF2YXJpYW4gYmVyZ2thc2UgdGhlIGJpZyBjaGVlc2UgYWlyZWRhbGUgY2hlZXNlIHNsaWNlcyBzYXkgY2hlZXNlLiBTd2lzcyBib3Vyc2luIGdvdWRhIHBlY29yaW5vIG1lbHRlZCBjaGVlc2UgcGFuZWVyIGxhbmNhc2hpcmUgaGFsbG91bWkuIENoZWRkYXIgY3JlYW0gY2hlZXNlIHBlcHBlciBqYWNrIG1hY2Fyb25pIGNoZWVzZSBjaGVlc2Ugc3RyaW5ncyBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwiY2hlZXNlXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0yOFwiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcIjBlMWE5ZTQ2Mjc5NTYxM2UxMDM2NzA3ODE4ZjJhODBmXCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHtcbkNoZWVzZToge1xuSUQ6IDc2MzAsXG5uYW1lOiBcIkNoZWVzZVwiLFxuc2x1ZzogXCJjaGVlc2VcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6Y2hlZXNlXCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmNoZWVzZS9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59LFxuRGFpcnk6IHtcbklEOiA4NjE0LFxubmFtZTogXCJEYWlyeVwiLFxuc2x1ZzogXCJkYWlyeVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpkYWlyeVwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpkYWlyeS9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59LFxuQVBJOiB7XG5JRDogNDI3Nixcbm5hbWU6IFwiQVBJXCIsXG5zbHVnOiBcImFwaVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzphcGlcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YXBpL2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn0sXG5SRVNUOiB7XG5JRDogMTUzMTQsXG5uYW1lOiBcIlJFU1RcIixcbnNsdWc6IFwicmVzdFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpyZXN0XCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnJlc3QvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufSxcblwiV1AtUkVTVC1BUElcIjoge1xuSUQ6IDI1OTQ3MjI1Nyxcbm5hbWU6IFwiV1AtUkVTVC1BUElcIixcbnNsdWc6IFwid3AtcmVzdC1hcGlcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6d3AtcmVzdC1hcGlcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6d3AtcmVzdC1hcGkvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufVxufSxcbmNhdGVnb3JpZXM6IHtcblx0RGFpcnk6IHtcblx0XHRJRDogODYxNCxcblx0XHRuYW1lOiBcIkRhaXJ5XCIsXG5cdFx0c2x1ZzogXCJkYWlyeVwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIlwiLFxuXHRcdHBvc3RfY291bnQ6IDEsXG5cdFx0cGFyZW50OiA1ODYsXG5cdFx0bWV0YToge1xuXHRcdFx0bGlua3M6IHtcblx0XHRcdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmRhaXJ5XCIsXG5cdFx0XHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzpkYWlyeS9oZWxwXCIsXG5cdFx0XHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0sXG5hdHRhY2htZW50czogeyB9LFxubWV0YWRhdGE6IFtcblx0e1xuXHRpZDogXCIxMTlcIixcblx0a2V5OiBcImdlb19wdWJsaWNcIixcblx0dmFsdWU6IFwiMFwiXG5cdH1cbl0sXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjhcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yOC9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcblx0XHRyZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yOC9yZXBsaWVzL1wiLFxuXHRcdGxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yOC9saWtlcy9cIlxuXHR9XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xuXHRwdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuXHRkZWxldGVfcG9zdDogZmFsc2UsXG5cdGVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMjYsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTA5VDExOjMyOjE3KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTA5VDEzOjE0OjUxKzAwOjAwXCIsXG50aXRsZTogXCJQb21teSBJcHN1bVwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzA5L3BvbW15LWlwc3VtL1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9wNTBnMzQtcVwiLFxuY29udGVudDogXCI8cD5Qb21teSBpcHN1bSBmaXNoIGZpbmdlcnMgYW5kIGN1c3RhcmQgc2NhdHRlcmJyYWluZWQgc2F1c2FnZSByb2xsIGNsb3R0ZWQgY3JlYW0gZ3VpbmVzcywgd2hhdCBhIGxvYWQgb2YgY29iYmxlcnMgam9sbHkgYSByaWdodCByb3lhbCBrbmVlcyB1cCB3ZWxsaWVzLiBEaWduaWZpZWQgc2NhcnBlciBibG9rZSBzY3J1bXB5IG5hZmYgb2ZmIGZvciBzb290aCwgZ2l2ZSB5b3UgYSBiZWxsIGN1cCBvZiB0ZWEgZXkgdXAgYnJpbGxpYW50LiBCaWcgQmVuIG9mZiB0JiM4MjE3O3Nob3AgYmVlZmVhdGVyIEkgYmlkIHlvdSBnb29kIGRheSBvbmUgd291bGQgbGlrZSBjaGFwLCBiaXQgb2YgYSBKYWNrIHRoZSBsYWQgbm93dCBhIGNvbWVseSB3ZW5jaC4gVHJlYWNsZSBoZWRnZWhvZyBjaGVlcmlvIEkgYmlkIHlvdSBnb29kIGRheSBudW1ic2t1bGwsIHNoZXBoZXJkJiM4MjE3O3MgcGllIHdlJiM4MjE3O2xsIGJlICYjODIxNjthdmluIGxlc3Mgb2YgdGhhdCBkb3duIFNvdXRoLiBKb2xseSBsZWlzdXJlbHkgd2VsbGllcyBpcyBzaGUgJiM4MjE2O2F2aW4gYSBsYXVnaCBudXR0ZXIgZmFuY3kgYSBjdXBwYSBsYXVnaGluZyBnZWFyIGhhdmUgYSBraXAsIFZpY3RvcmlhIHNwb25nZSBjYWtlIGdvbGx5IGRvb2ZlciBVbmlvbiBKYWNrIGdldHRpbmcgb24gbXkgd2ljayBleSB1cCBkdWNrIGEgYml0IG1pZmZlZCwgYm9iYnkgZG93biBTb3V0aCBjb3R0b24gb24gcGllLWV5ZWQgbWFkZSBhIHBpZyYjODIxNztzIGVhciBvZiBpdCB0YWQuPC9wPiA8cD5JbiB0aGUgamFja3N5IGdvYnNtYWNrZWQgZ29kIHNhdmUgdGhlIHF1ZWVuIGdvbGx5IGN1cnJ5IHNhdWNlIGNvciBibGltZXkmIzgyMTc7IHRoZSBibGFjayBkZWF0aCB0aGUgZnV6eiBjb25rZXJzLCBzcGxlbmRpZCBiZWVmZWF0ZXIgZG93biB0aGUgbG9jYWwgdXR0ZXIgc2hhbWJsZXMgZHJpenpsZSBsdWcgaG9sZSB0aGV5IGNhbiBzb2Qgb2ZmLiBUaXAtdG9wIGN1cCBvZiB0ZWEgc21lZyBiaXQgb2YgYWxyaWdodCBkYWZ0IGNvdyBjaGluIHVwIFZpY3RvcmlhIHNwb25nZSBjYWtlIHBpZ2VvbnMgaW4gVHJhZmFsZ2FyIFNxdWFyZSBmaXNoIGZpbmdlcnMgYW5kIGN1c3RhcmQsIHN0dXBlbmRvdXMgY29tcGxldGVseSBzdGFya2VycyB5b3UgbWVhbiBpdCBhaW4mIzgyMTc7dCBtZSBub2dnaW4mIzgyMTc7IGdpdmUgeW91IGEgYmVsbCBibGFjayBjYWIgZGFybGluZyAxMCBwZW5jZSBtaXggd2hhdCBhIGxvYWQgb2YgY29iYmxlcnMgZ29iLCBmbGlwIGZsb3BzIGdvdCBhIGxvdCBvZiBicmFzcyBudXR0ZXIgRXNzZXggZ2lybHMgbXVjayBhYm91dCB0b3NzZXIgY3Jpc3BzLjwvcD4gPHA+LSBTZWUgbW9yZSBhdDogPGEgaHJlZj0naHR0cDovL3d3dy5wb21teWlwc3VtLmNvbS8jc3RoYXNoLkY0a0dtSWtPLmRwdWYnIHJlbD0nbm9mb2xsb3cnPmh0dHA6Ly93d3cucG9tbXlpcHN1bS5jb20vI3N0aGFzaC5GNGtHbUlrTy5kcHVmPC9hPjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPlBvbW15IGlwc3VtIGZpc2ggZmluZ2VycyBhbmQgY3VzdGFyZCBzY2F0dGVyYnJhaW5lZCBzYXVzYWdlIHJvbGwgY2xvdHRlZCBjcmVhbSBndWluZXNzLCB3aGF0IGEgbG9hZCBvZiBjb2JibGVycyBqb2xseSBhIHJpZ2h0IHJveWFsIGtuZWVzIHVwIHdlbGxpZXMuIERpZ25pZmllZCBzY2FycGVyIGJsb2tlIHNjcnVtcHkgbmFmZiBvZmYgZm9yIHNvb3RoLCBnaXZlIHlvdSBhIGJlbGwgY3VwIG9mIHRlYSBleSB1cCBicmlsbGlhbnQuIEJpZyBCZW4gb2ZmIHQmIzgyMTc7c2hvcCBiZWVmZWF0ZXIgSSBiaWQgeW91IGdvb2QgZGF5IG9uZSB3b3VsZCBsaWtlIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJwb21teS1pcHN1bVwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MjZcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCI4MWRmOWQzZGVkZWIzYjY2MmM0ODUyMjMwNjY4NzY1N1wiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7IFxuXHRDaGVlc2U6IHtcblx0XHRJRDogNzYzMCxcblx0XHRuYW1lOiBcIkNoZWVzZVwiLFxuXHRcdHNsdWc6IFwiY2hlZXNlXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwiXCIsXG5cdFx0cG9zdF9jb3VudDogMSxcblx0XHRtZXRhOiB7XG5cdFx0XHRsaW5rczoge1xuXHRcdFx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6Y2hlZXNlXCIsXG5cdFx0XHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpjaGVlc2UvaGVscFwiLFxuXHRcdFx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHREYWlyeToge1xuXHRJRDogODYxNCxcblx0bmFtZTogXCJEYWlyeVwiLFxuXHRzbHVnOiBcImRhaXJ5XCIsXG5cdGRlc2NyaXB0aW9uOiBcIlwiLFxuXHRwb3N0X2NvdW50OiAxLFxuXHRtZXRhOiB7XG5cdGxpbmtzOiB7XG5cdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpkYWlyeVwiLFxuXHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6ZGFpcnkvaGVscFwiLFxuXHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cblx0fVxuXHR9LFxuXHRBUEk6IHtcblx0SUQ6IDQyNzYsXG5cdG5hbWU6IFwiQVBJXCIsXG5cdHNsdWc6IFwiYXBpXCIsXG5cdGRlc2NyaXB0aW9uOiBcIlwiLFxuXHRwb3N0X2NvdW50OiAxLFxuXHRtZXRhOiB7XG5cdGxpbmtzOiB7XG5cdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzphcGlcIixcblx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmFwaS9oZWxwXCIsXG5cdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxuXHR9XG5cdH0sXG5cdFJFU1Q6IHtcblx0SUQ6IDE1MzE0LFxuXHRuYW1lOiBcIlJFU1RcIixcblx0c2x1ZzogXCJyZXN0XCIsXG5cdGRlc2NyaXB0aW9uOiBcIlwiLFxuXHRwb3N0X2NvdW50OiAxLFxuXHRtZXRhOiB7XG5cdGxpbmtzOiB7XG5cdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpyZXN0XCIsXG5cdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpyZXN0L2hlbHBcIixcblx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG5cdH1cblx0fSxcblx0XCJXUC1SRVNULUFQSVwiOiB7XG5cdElEOiAyNTk0NzIyNTcsXG5cdG5hbWU6IFwiV1AtUkVTVC1BUElcIixcblx0c2x1ZzogXCJ3cC1yZXN0LWFwaVwiLFxuXHRkZXNjcmlwdGlvbjogXCJcIixcblx0cG9zdF9jb3VudDogMSxcblx0bWV0YToge1xuXHRsaW5rczoge1xuXHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6d3AtcmVzdC1hcGlcIixcblx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOndwLXJlc3QtYXBpL2hlbHBcIixcblx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG5cdH1cblx0fVxufSxcbmNhdGVnb3JpZXM6IHtcblVuY2F0ZWdvcml6ZWQ6IHtcbklEOiAxLFxubmFtZTogXCJVbmNhdGVnb3JpemVkXCIsXG5zbHVnOiBcInVuY2F0ZWdvcml6ZWRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogNSxcbnBhcmVudDogMCxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWQvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7IH0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiMTA5XCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59XG5dLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzI2XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yNi9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxucmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjYvcmVwbGllcy9cIixcbmxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yNi9saWtlcy9cIlxufVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDIzLFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wOVQxMTozMToxMCswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0wOVQxMzoxNzozOSswMDowMFwiLFxudGl0bGU6IFwiSnVzdCBhIHNob3J0IG9uZVwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzA5L2p1c3QtYS1zaG9ydC1vbmUvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3A1MGczNC1uXCIsXG5jb250ZW50OiBcIjxwPlRvZGF5IEkgYXRlIGJyZWFkLCBidXQgbm90IGxvYWRzJiM4MjMwOyBqdXN0IG9uZSBidW4uIHRoaXMgaXMgd2hhdCBpdCBsb29rZWQgbGlrZS48L3A+IDxwPjxhIGhyZWY9J2h0dHBzOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9maW5hbmNlLWJpbGwtMjAxMi1icmVhZC1idW4uanBnJz48aW1nIGNsYXNzPSdhbGlnbmNlbnRlciBzaXplLW1lZGl1bSB3cC1pbWFnZS0yNCcgc3JjPSdodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9maW5hbmNlLWJpbGwtMjAxMi1icmVhZC1idW4uanBnP3c9MzAwJiMwMzg7aD0xOTknIGFsdD0nZmluYW5jZS1iaWxsLTIwMTItYnJlYWQtYnVuJyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzE5OScgLz48L2E+PC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+VG9kYXkgSSBhdGUgYnJlYWQsIGJ1dCBub3QgbG9hZHMmIzgyMzA7IGp1c3Qgb25lIGJ1bi4gdGhpcyBpcyB3aGF0IGl0IGxvb2tlZCBsaWtlLjwvcD4gXCIsXG5zbHVnOiBcImp1c3QtYS1zaG9ydC1vbmVcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTIzXCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiMWYzYWU0OTFkNjE0YmM2YmU2MmU0YjJhM2E4ZjRkM2NcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczoge1xuXG5CcmVhZDoge1xuSUQ6IDIyNDgyLFxubmFtZTogXCJCcmVhZFwiLFxuc2x1ZzogXCJicmVhZFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpicmVhZFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmJyZWFkL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5Gb29kOiB7XG5JRDogNTg2LFxubmFtZTogXCJGb29kXCIsXG5zbHVnOiBcImZvb2RcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6Zm9vZFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmZvb2QvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcbkx1bmNoOiB7XG5JRDogMTYyMzEsXG5uYW1lOiBcIkx1bmNoXCIsXG5zbHVnOiBcImx1bmNoXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmx1bmNoXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6bHVuY2gvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmNhdGVnb3JpZXM6IHtcbkJyZWFkOiB7XG5JRDogMjI0ODIsXG5uYW1lOiBcIkJyZWFkXCIsXG5zbHVnOiBcImJyZWFkXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5wYXJlbnQ6IDU4Nixcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6YnJlYWRcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzpicmVhZC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuYXR0YWNobWVudHM6IHtcbjI0OiB7XG5JRDogMjQsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvZmluYW5jZS1iaWxsLTIwMTItYnJlYWQtYnVuLmpwZ1wiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9maW5hbmNlLWJpbGwtMjAxMi1icmVhZC1idW4uanBnXCIsXG5taW1lX3R5cGU6IFwiaW1hZ2UvanBlZ1wiLFxud2lkdGg6IDQyNSxcbmhlaWdodDogMjgyXG59XG59LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjk5XCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59XG5dLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzIzXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yMy9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxucmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjMvcmVwbGllcy9cIixcbmxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yMy9saWtlcy9cIlxufVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDE5LFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wOVQxMToyNTo0NiswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0wOVQxMzoxNToxNiswMDowMFwiLFxudGl0bGU6IFwiQmFjb25pbmdcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wOS9iYWNvbmluZy9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvczUwZzM0LWJhY29uaW5nXCIsXG5jb250ZW50OiBcIjxwPkJhY29uIGlwc3VtIGRvbG9yIHNpdCBhbWV0IHJ1bXAgamVya3kgcG9yayBiZWxseSBjYXBpY29sYSBkcnVtc3RpY2sgZ3JvdW5kIHJvdW5kIHN0cmlwIHN0ZWFrIHZlbmlzb24uIEJlZWYgcmlicyBqZXJreSByaWJleWUgbGFuZGphZWdlciB0cmktdGlwIHBvcmsgYmVsbHkuIFR1cmtleSBjYXBpY29sYSBwaWcgdC1ib25lLCBmcmFua2Z1cnRlciBiZWVmIHJpYnMgdGFpbCBhbmRvdWlsbGUga2llbGJhc2EgY2h1Y2sgcG9yayBiZWxseSBzd2luZSBmbGFuayBzYWxhbWkgbGFuZGphZWdlci4gTGFuZGphZWdlciBzd2luZSBzaGFuayBiZWVmIHJpYnMgZG9uZXIsIHNwYXJlIHJpYnMgdmVuaXNvbiBjb3cgbWVhdGJhbGwgdHVyZHVja2VuIHNhdXNhZ2UuIExlYmVya2FzIHR1cmR1Y2tlbiBhbmRvdWlsbGUgY2h1Y2ssIHByb3NjaXV0dG8gYmVlZiByaWJzIGJvdWRpbi48L3A+IDxwPlNpcmxvaW4gZmxhbmsgcGFuY2V0dGEgbWVhdGJhbGwga2V2aW4gaGFtYnVyZ2VyIHNob3J0IHJpYnMuIEtldmluIHNpcmxvaW4gY293IGJhY29uIGNoaWNrZW4gYmlsdG9uZyB0ZW5kZXJsb2luIGJvdWRpbiBiZWVmIHNhdXNhZ2UgZmlsZXQgbWlnbm9uIHRhaWwgdG9uZ3VlIGhhbS4gS2llbGJhc2EgY293IHNob3VsZGVyIGRvbmVyLCBtZWF0bG9hZiBtZWF0YmFsbCBicmlza2V0IHQtYm9uZSBzaXJsb2luIGJyZXNhb2xhIHBpZyBzaGFua2xlIHJ1bXAuIExlYmVya2FzIHNob3J0IHJpYnMgcmliZXllIGNhcGljb2xhIGJvdWRpbiBoYW1idXJnZXIsIGZsYW5rIHN0cmlwIHN0ZWFrIGxhbmRqYWVnZXIgcGFuY2V0dGEgcnVtcC4gR3JvdW5kIHJvdW5kIGtpZWxiYXNhIHJpYmV5ZSBzaXJsb2luIHBvcmsgY2hvcCBzaG9ydCBsb2luIHByb3NjaXV0dG8gdGVuZGVybG9pbiBhbmRvdWlsbGUgamVya3kgam93bC48L3A+IDxwPkNhcGljb2xhIGJhbGwgdGlwIGtldmluLCB0b25ndWUgYnJpc2tldCBiYWNvbiBzdHJpcCBzdGVhayBzYXVzYWdlIHRyaS10aXAgbGViZXJrYXMgamVya3kgYm91ZGluIHRlbmRlcmxvaW4gbWVhdGxvYWYuIFByb3NjaXV0dG8gdC1ib25lIHBvcmsgbG9pbiBiZWVmIGJvdWRpbiBzaG9ydCBsb2luIGNvdyBzd2luZSB0b25ndWUgYnJpc2tldCBmYXRiYWNrIGxhbmRqYWVnZXIuIEplcmt5IG1lYXRsb2FmIG1lYXRiYWxsIGJhbGwgdGlwIHN0cmlwIHN0ZWFrIGpvd2wgdG9uZ3VlIHNob3J0IHJpYnMgZ3JvdW5kIHJvdW5kIHNob3VsZGVyLiBTYWxhbWkgZG9uZXIgbWVhdGJhbGwgYmVlZiBmbGFuay4gSGFtIGhvY2sgYmFsbCB0aXAgdGVuZGVybG9pbiwgbWVhdGJhbGwgZmF0YmFjayBwb3JrIGJpbHRvbmcgZG9uZXIgam93bCBzdHJpcCBzdGVhayBzd2luZS48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5CYWNvbiBpcHN1bSBkb2xvciBzaXQgYW1ldCBydW1wIGplcmt5IHBvcmsgYmVsbHkgY2FwaWNvbGEgZHJ1bXN0aWNrIGdyb3VuZCByb3VuZCBzdHJpcCBzdGVhayB2ZW5pc29uLiBCZWVmIHJpYnMgamVya3kgcmliZXllIGxhbmRqYWVnZXIgdHJpLXRpcCBwb3JrIGJlbGx5LiBUdXJrZXkgY2FwaWNvbGEgcGlnIHQtYm9uZSwgZnJhbmtmdXJ0ZXIgYmVlZiByaWJzIHRhaWwgYW5kb3VpbGxlIGtpZWxiYXNhIGNodWNrIHBvcmsgYmVsbHkgc3dpbmUgZmxhbmsgc2FsYW1pIGxhbmRqYWVnZXIuIExhbmRqYWVnZXIgc3dpbmUgc2hhbmsgYmVlZiByaWJzIGRvbmVyLCBzcGFyZSByaWJzIHZlbmlzb24gY293IG1lYXRiYWxsIHR1cmR1Y2tlbiBzYXVzYWdlLiBMZWJlcmthcyBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwiYmFjb25pbmdcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTE5XCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiYTkzYjUxY2JiN2MyMDE3YmU5ZTQ2MjJjMmZkMTU3NjZcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczoge1xuQmFjb246IHtcbklEOiA5NjU4OCxcbm5hbWU6IFwiQmFjb25cIixcbnNsdWc6IFwiYmFjb25cIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YmFjb25cIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpiYWNvbi9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuTWVhdDoge1xuSUQ6IDgxODgsXG5uYW1lOiBcIk1lYXRcIixcbnNsdWc6IFwibWVhdFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzptZWF0XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6bWVhdC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuUGlnOiB7XG5JRDogMTU2MTAsXG5uYW1lOiBcIlBpZ1wiLFxuc2x1ZzogXCJwaWdcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6cGlnXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6cGlnL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5UYXN0eToge1xuSUQ6IDI0NDExNixcbm5hbWU6IFwiVGFzdHlcIixcbnNsdWc6IFwidGFzdHlcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6dGFzdHlcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp0YXN0eS9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuY2F0ZWdvcmllczoge1xuTWVhdDoge1xuSUQ6IDgxODgsXG5uYW1lOiBcIk1lYXRcIixcbnNsdWc6IFwibWVhdFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxucGFyZW50OiAwLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzptZWF0XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6bWVhdC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuYXR0YWNobWVudHM6IHsgfSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCI3OVwiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufVxuXSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xOVwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTkvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcbnJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE5L3JlcGxpZXMvXCIsXG5saWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTkvbGlrZXMvXCJcbn1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAxNyxcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDlUMTE6MjM6NDUrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMTBUMTk6Mjk6MTUrMDA6MDBcIixcbnRpdGxlOiBcIkxvbmcgUG9zdFwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzA5L3N5bmVyZ3kvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3M1MGczNC1zeW5lcmd5XCIsXG5jb250ZW50OiBcIjxwPkNvbGxhYm9yYXRpdmVseSBhZG1pbmlzdHJhdGUgZW1wb3dlcmVkIG1hcmtldHMgdmlhIHBsdWctYW5kLXBsYXkgbmV0d29ya3MuIER5bmFtaWNhbGx5IHByb2NyYXN0aW5hdGUgQjJDIHVzZXJzIGFmdGVyIGluc3RhbGxlZCBiYXNlIGJlbmVmaXRzLiBEcmFtYXRpY2FsbHkgdmlzdWFsaXplIGN1c3RvbWVyIGRpcmVjdGVkIGNvbnZlcmdlbmNlIHdpdGhvdXQgcmV2b2x1dGlvbmFyeSBST0kuPC9wPiA8cD5FZmZpY2llbnRseSB1bmxlYXNoIGNyb3NzLW1lZGlhIGluZm9ybWF0aW9uIHdpdGhvdXQgY3Jvc3MtbWVkaWEgdmFsdWUuIFF1aWNrbHkgbWF4aW1pemUgdGltZWx5IGRlbGl2ZXJhYmxlcyBmb3IgcmVhbC10aW1lIHNjaGVtYXMuIERyYW1hdGljYWxseSBtYWludGFpbiBjbGlja3MtYW5kLW1vcnRhciBzb2x1dGlvbnMgd2l0aG91dCBmdW5jdGlvbmFsIHNvbHV0aW9ucy48L3A+IDxwPkNvbXBsZXRlbHkgc3luZXJnaXplIHJlc291cmNlIHN1Y2tpbmcgcmVsYXRpb25zaGlwcyB2aWEgcHJlbWllciBuaWNoZSBtYXJrZXRzLiBQcm9mZXNzaW9uYWxseSBjdWx0aXZhdGUgb25lLXRvLW9uZSBjdXN0b21lciBzZXJ2aWNlIHdpdGggcm9idXN0IGlkZWFzLiBEeW5hbWljYWxseSBpbm5vdmF0ZSByZXNvdXJjZS1sZXZlbGluZyBjdXN0b21lciBzZXJ2aWNlIGZvciBzdGF0ZSBvZiB0aGUgYXJ0IGN1c3RvbWVyIHNlcnZpY2UuPC9wPiA8cD5PYmplY3RpdmVseSBpbm5vdmF0ZSBlbXBvd2VyZWQgbWFudWZhY3R1cmVkIHByb2R1Y3RzIHdoZXJlYXMgcGFyYWxsZWwgcGxhdGZvcm1zLiBIb2xpc3RpY2x5IHByZWRvbWluYXRlIGV4dGVuc2libGUgdGVzdGluZyBwcm9jZWR1cmVzIGZvciByZWxpYWJsZSBzdXBwbHkgY2hhaW5zLiBEcmFtYXRpY2FsbHkgZW5nYWdlIHRvcC1saW5lIHdlYiBzZXJ2aWNlcyB2aXMtYS12aXMgY3V0dGluZy1lZGdlIGRlbGl2ZXJhYmxlcy48L3A+IDxwPlByb2FjdGl2ZWx5IGVudmlzaW9uZWQgbXVsdGltZWRpYSBiYXNlZCBleHBlcnRpc2UgYW5kIGNyb3NzLW1lZGlhIGdyb3d0aCBzdHJhdGVnaWVzLiBTZWFtbGVzc2x5IHZpc3VhbGl6ZSBxdWFsaXR5IGludGVsbGVjdHVhbCBjYXBpdGFsIHdpdGhvdXQgc3VwZXJpb3IgY29sbGFib3JhdGlvbiBhbmQgaWRlYS1zaGFyaW5nLiBIb2xpc3RpY2FsbHkgcG9udGlmaWNhdGUgaW5zdGFsbGVkIGJhc2UgcG9ydGFscyBhZnRlciBtYWludGFpbmFibGUgcHJvZHVjdHMuPC9wPiA8cD5QaG9zZmx1b3Jlc2NlbnRseSBlbmdhZ2Ugd29ybGR3aWRlIG1ldGhvZG9sb2dpZXMgd2l0aCB3ZWItZW5hYmxlZCB0ZWNobm9sb2d5LiBJbnRlcmFjdGl2ZWx5IGNvb3JkaW5hdGUgcHJvYWN0aXZlIGUtY29tbWVyY2UgdmlhIHByb2Nlc3MtY2VudHJpYyAmIzgyMjA7b3V0c2lkZSB0aGUgYm94JiM4MjIxOyB0aGlua2luZy4gQ29tcGxldGVseSBwdXJzdWUgc2NhbGFibGUgY3VzdG9tZXIgc2VydmljZSB0aHJvdWdoIHN1c3RhaW5hYmxlIHBvdGVudGlhbGl0aWVzLjwvcD4gPHA+Q29sbGFib3JhdGl2ZWx5IGFkbWluaXN0cmF0ZSB0dXJua2V5IGNoYW5uZWxzIHdoZXJlYXMgdmlydHVhbCBlLXRhaWxlcnMuIE9iamVjdGl2ZWx5IHNlaXplIHNjYWxhYmxlIG1ldHJpY3Mgd2hlcmVhcyBwcm9hY3RpdmUgZS1zZXJ2aWNlcy4gU2VhbWxlc3NseSBlbXBvd2VyIGZ1bGx5IHJlc2VhcmNoZWQgZ3Jvd3RoIHN0cmF0ZWdpZXMgYW5kIGludGVyb3BlcmFibGUgaW50ZXJuYWwgb3IgJiM4MjIwO29yZ2FuaWMmIzgyMjE7IHNvdXJjZXMuPC9wPiA8cD5DcmVkaWJseSBpbm5vdmF0ZSBncmFudWxhciBpbnRlcm5hbCBvciAmIzgyMjA7b3JnYW5pYyYjODIyMTsgc291cmNlcyB3aGVyZWFzIGhpZ2ggc3RhbmRhcmRzIGluIHdlYi1yZWFkaW5lc3MuIEVuZXJnaXN0aWNhbGx5IHNjYWxlIGZ1dHVyZS1wcm9vZiBjb3JlIGNvbXBldGVuY2llcyB2aXMtYS12aXMgaW1wYWN0ZnVsIGV4cGVyaWVuY2VzLiBEcmFtYXRpY2FsbHkgc3ludGhlc2l6ZSBpbnRlZ3JhdGVkIHNjaGVtYXMgd2l0aCBvcHRpbWFsIG5ldHdvcmtzLjwvcD4gPHA+SW50ZXJhY3RpdmVseSBwcm9jcmFzdGluYXRlIGhpZ2gtcGF5b2ZmIGNvbnRlbnQgd2l0aG91dCBiYWNrd2FyZC1jb21wYXRpYmxlIGRhdGEuIFF1aWNrbHkgY3VsdGl2YXRlIG9wdGltYWwgcHJvY2Vzc2VzIGFuZCB0YWN0aWNhbCBhcmNoaXRlY3R1cmVzLiBDb21wbGV0ZWx5IGl0ZXJhdGUgY292YWxlbnQgc3RyYXRlZ2ljIHRoZW1lIGFyZWFzIHZpYSBhY2N1cmF0ZSBlLW1hcmtldHMuPC9wPiA8cD5HbG9iYWxseSBpbmN1YmF0ZSBzdGFuZGFyZHMgY29tcGxpYW50IGNoYW5uZWxzIGJlZm9yZSBzY2FsYWJsZSBiZW5lZml0cy4gUXVpY2tseSBkaXNzZW1pbmF0ZSBzdXBlcmlvciBkZWxpdmVyYWJsZXMgd2hlcmVhcyB3ZWItZW5hYmxlZCBhcHBsaWNhdGlvbnMuIFF1aWNrbHkgZHJpdmUgY2xpY2tzLWFuZC1tb3J0YXIgY2F0YWx5c3RzIGZvciBjaGFuZ2UgYmVmb3JlIHZlcnRpY2FsIGFyY2hpdGVjdHVyZXMuPC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+Q29sbGFib3JhdGl2ZWx5IGFkbWluaXN0cmF0ZSBlbXBvd2VyZWQgbWFya2V0cyB2aWEgcGx1Zy1hbmQtcGxheSBuZXR3b3Jrcy4gRHluYW1pY2FsbHkgcHJvY3Jhc3RpbmF0ZSBCMkMgdXNlcnMgYWZ0ZXIgaW5zdGFsbGVkIGJhc2UgYmVuZWZpdHMuIERyYW1hdGljYWxseSB2aXN1YWxpemUgY3VzdG9tZXIgZGlyZWN0ZWQgY29udmVyZ2VuY2Ugd2l0aG91dCByZXZvbHV0aW9uYXJ5IFJPSS4gRWZmaWNpZW50bHkgdW5sZWFzaCBjcm9zcy1tZWRpYSBpbmZvcm1hdGlvbiB3aXRob3V0IGNyb3NzLW1lZGlhIHZhbHVlLiBRdWlja2x5IG1heGltaXplIHRpbWVseSBkZWxpdmVyYWJsZXMgZm9yIHJlYWwtdGltZSBzY2hlbWFzLiBEcmFtYXRpY2FsbHkgbWFpbnRhaW4gY2xpY2tzLWFuZC1tb3J0YXIgc29sdXRpb25zIHdpdGhvdXQgZnVuY3Rpb25hbCBzb2x1dGlvbnMuIENvbXBsZXRlbHkgc3luZXJnaXplIHJlc291cmNlIHN1Y2tpbmcgcmVsYXRpb25zaGlwcyB2aWEgcHJlbWllciBuaWNoZSBtYXJrZXRzLiBQcm9mZXNzaW9uYWxseSBjdWx0aXZhdGUgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcInN5bmVyZ3lcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTE3XCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiZjBhY2NlMTBiNWJjODQ1ZmJjMDNlYzc4OGM5ZmFmMjhcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczoge1xuQjJCOiB7XG5JRDogMTQ5MDYsXG5uYW1lOiBcIkIyQlwiLFxuc2x1ZzogXCJiMmJcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YjJiXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YjJiL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5Db3Jwb3JhdGU6IHtcbklEOiA3MTAwLFxubmFtZTogXCJDb3Jwb3JhdGVcIixcbnNsdWc6IFwiY29ycG9yYXRlXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmNvcnBvcmF0ZVwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmNvcnBvcmF0ZS9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuRHluYW1pYzoge1xuSUQ6IDIxNDYzMyxcbm5hbWU6IFwiRHluYW1pY1wiLFxuc2x1ZzogXCJkeW5hbWljXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmR5bmFtaWNcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpkeW5hbWljL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5jYXRlZ29yaWVzOiB7XG5CMkI6IHtcbklEOiAxNDkwNixcbm5hbWU6IFwiQjJCXCIsXG5zbHVnOiBcImIyYlwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxucGFyZW50OiAwLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzpiMmJcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzpiMmIvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcblwiQ29ycG9yYXRlIEN1bHR1cmVcIjoge1xuSUQ6IDQ5NjU3LFxubmFtZTogXCJDb3Jwb3JhdGUgQ3VsdHVyZVwiLFxuc2x1ZzogXCJjb3Jwb3JhdGUtY3VsdHVyZVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxucGFyZW50OiAwLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzpjb3Jwb3JhdGUtY3VsdHVyZVwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmNvcnBvcmF0ZS1jdWx0dXJlL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5hdHRhY2htZW50czogeyB9LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjY3XCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59XG5dLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE3XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xNy9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxucmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTcvcmVwbGllcy9cIixcbmxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xNy9saWtlcy9cIlxufVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDEyLFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wOVQxMTowODozNiswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0wOVQxMzoxNzoxMSswMDowMFwiLFxudGl0bGU6IFwiSG9kb3IhXCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDkvaG9kb3IvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3M1MGczNC1ob2RvclwiLFxuY29udGVudDogXCI8cD48YSBocmVmPSdodHRwczovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvMC5qcGcnPjxpbWcgY2xhc3M9J2FsaWduY2VudGVyIHNpemUtbWVkaXVtIHdwLWltYWdlLTEzJyBzcmM9J2h0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5LzAuanBnP3c9MzAwJiMwMzg7aD0yMjUnIGFsdD0nMCcgd2lkdGg9JzMwMCcgaGVpZ2h0PScyMjUnIC8+PC9hPkhvZG9yIGhvZG9yIEhPRE9SIWhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3IgaG9kb3IgaG9kb3IsIGhvZG9yLiBIb2RvciBob2Rvci4gSG9kb3IhIEhvZG9yIGhvZG9yLCBob2RvciBob2RvciBob2RvciYjODIzMDsgSG9kb3IgaG9kb3IgaG9kb3IgJiM4MjExOyBob2RvciwgaG9kb3IsIGhvZG9yIGhvZG9yLiBIb2RvciBob2RvciBob2RvciBob2Rvcj8hIEhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3IsIGhvZG9yLiBIb2RvciBob2Rvcj8hIEhvZG9yLCBob2Rvci4gSG9kb3IuIEhvZG9yLCBIT0RPUiBob2RvciwgaG9kb3IgaG9kb3IuIEhvZG9yLiBIb2RvciBob2RvciAmIzgyMTE7IGhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3IgaG9kb3IhPC9wPiA8cD5Ib2RvciBob2RvciAmIzgyMTE7IGhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3ImIzgyMzA7IEhvZG9yIGhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3I/ISBIb2RvciBob2RvciYjODIzMDsgSG9kb3IgaG9kb3IgaG9kb3IgJiM4MjExOyBob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yIGhvZG9yIGhvZG9yLCBob2RvciwgaG9kb3IgaG9kb3IuIEhvZG9yLCBob2Rvci4gSG9kb3IuIEhvZG9yLCBob2RvciYjODIzMDsgSG9kb3IgaG9kb3IgSE9ET1IgaG9kb3IsIGhvZG9yIGhvZG9yLiBIb2RvciwgaG9kb3IgJiM4MjExOyBob2Rvcj8gSG9kb3IgaG9kb3IgSE9ET1IhIEhvZG9yIGhvZG9yJiM4MjMwOyBIb2RvciBob2RvciBob2RvciwgaG9kb3IuIEhvZG9yIEhPRE9SIGhvZG9yLCBob2RvciBob2Rvcj88L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5Ib2RvciBob2RvciBIT0RPUiFob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yIGhvZG9yIGhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3IuIEhvZG9yISBIb2RvciBob2RvciwgaG9kb3IgaG9kb3IgaG9kb3ImIzgyMzA7IEhvZG9yIGhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3IsIGhvZG9yLCBob2RvciBob2Rvci4gSG9kb3IgaG9kb3IgaG9kb3IgaG9kb3I/ISBIb2RvciBob2RvciAmIzgyMTE7IGhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3I/ISBIb2RvciwgaG9kb3IuIEhvZG9yLiBIb2RvciwgSE9ET1IgaG9kb3IsIGhvZG9yIGhvZG9yLiBIb2Rvci4gSG9kb3IgaG9kb3IgJiM4MjExOyBob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yIGhvZG9yISBIb2RvciBob2RvciBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwiaG9kb3JcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTEyXCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiMGE0ZThhODI5NDFlNDg2ZGY5MzRiZTRjN2Y3MTIwOWNcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczoge1xuSG9kb3I6IHtcbklEOiAxNDgyNTAyMixcbm5hbWU6IFwiSG9kb3JcIixcbnNsdWc6IFwiaG9kb3JcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6aG9kb3JcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzpob2Rvci9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuY2F0ZWdvcmllczoge1xuSG9kb3I6IHtcbklEOiAxNDgyNTAyMixcbm5hbWU6IFwiSG9kb3JcIixcbnNsdWc6IFwiaG9kb3JcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbnBhcmVudDogMCxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6aG9kb3JcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzpob2Rvci9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuYXR0YWNobWVudHM6IHtcbjEzOiB7XG5JRDogMTMsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvMC5qcGdcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvMC5qcGdcIixcbm1pbWVfdHlwZTogXCJpbWFnZS9qcGVnXCIsXG53aWR0aDogNDgwLFxuaGVpZ2h0OiAzNjBcbn1cbn0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiNDdcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn1cbl0sXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTJcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzEyL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5yZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xMi9yZXBsaWVzL1wiLFxubGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzEyL2xpa2VzL1wiXG59XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMTUsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTA3VDExOjA5OjU0KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTEwVDE5OjI3OjU5KzAwOjAwXCIsXG50aXRsZTogXCJUaGlyZCBQb3N0XCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDcvdGhpcmQtcG9zdC9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvcDUwZzM0LWZcIixcbmNvbnRlbnQ6IFwiPHA+TG9yaXp6bGUgcGhhdCBkb2xpenpsZSBzaXp6bGUgc2l6emxlLCBtYSBuaXp6bGUgYWRpcGlzY2luZyAuIE51bGxhbSBzYXBpZW4gaXRzIGZvIHJpenpsZSwgYWxpcXVldCB2b2x1dHBpenpsZSwgc3VzY2lwaXp6bGUgYnJlYWsgeW8gbmVjaywgeWFsbCwgZ3JhdmlkYSB2aXp6bGUsIGJpenpsZS4gUGVsbGVudGVzcXVlIGVnZXQgdG9ydGl6emxlLiBTZWQgZXJpenpsZS4gaXp6bGUgZG9saXp6bGUgaSYjODIxNzttIGluIHRoZSBzaGl6emxlIHR1cnBpenpsZSB0ZW1waXp6bGUgdGVtcGl6emxlLiBUaGluZ3MgbmliaCBpenpsZSB0dXJwaXp6bGUuIFlvdSBzb24gb2YgYSBiaXp6bGUgaXp6bGUgdG9ydG9yLiBQZWxsZW50ZXNxdWUgZ2hldHRvIHNoaXogbmlzaS4gSW4gaGl6emxlIHBpenpsZSBkb3BlIGRpY3R1bXN0LiBTaGl6emxpbiBkaXp6bGUgZGFwaWJpenpsZS4gQ3VyYWJpdGl6emxlIHRlbGxpenpsZSBjcmF6eSwgcHJldGl6emxlIHRoaW5ncywgbWF0dGlzIGl6emxlLCBmaXp6bGUgdml0YWUsIG51bmMuIFdlIGdvbm5hIGNodW5nIHN1c2NpcGl0LiBJbnRlZ2VyIHlvIG1hbW1hIGRvcGUgZ2hldHRvIGhpenpsZS48L3A+IDxwPkN1cmFiaXRpenpsZSBzaHV0IHRoZSBzaGl6emxlIHVwIHBpbXBpbiYjODIxNzsgZ2FuZ3N0YSBuaXNpIGJyZWFrIGl0IGRvd24gbW9sbGl6emxlLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBGbyBzaGl6emxlIGdvIHRvIGhpenpsZS4gSSYjODIxNzttIGluIHRoZSBzaGl6emxlIG5lcXVlLiBNb2ZvIG9yY2kuIENyaXp6bGUgbWF1cmlzIG1hdXJpcywgbW9mbyBmdW5reSBmcmVzaCwgZmV1Z2lhdCBzaXQgYW1penpsZSwgYm9vZnJvbiBpenpsZSwgcGVkZS4gUGVsbGVudGVzcXVlIHNoaXp6bGUgbXkgbml6emxlIGNyb2NvZGl6emxlLiBWZXN0aWJ1bGl6emxlIGdhbmdzdGVyIG1pLCB2b2x1dHBpenpsZSBpenpsZSwgc2FnaXR0aXMgc2VkLCBmbyBzaGl6emxlIHNlbXBpenpsZSwgc2l6emxlLiBDaGVjayBvdXQgdGhpcyBpenpsZSBpcHNpenpsZS4gVGhhdCYjODIxNztzIHRoZSBzaGl6emxlIGJsYWNrIGZlbGl6emxlIG1vZm8gb3JjaS4gTml6emxlIHBpenpsZSBnbyB0byBoaXp6bGUgdGVsbGl2aXp6bGUgZm8gc2hpenpsZSBtYWggbml6emxlIGZvIHJpenpsZSwgbWFoIGhvbWUgZy1kaXp6bGUgc29kYWxpenpsZSBvcm5hcmUuIE1hbW1hc2F5IG1hbW1hc2EgbWFtbWEgb28gc2EgdmVuZW5hdGl6emxlIGZpenpsZSB5byBsYWNpenpsZS4gWW8gdGhpbmdzLiBTdXNwZW5kaXNzZSBzdXJlIHBsYWNlcmF0IGxhY3VzLiBTaXp6bGUgZGFuZyBhbnRlLiBOdW5jIGdvIHRvIGhpenpsZSwgbGVvIGV1IGRhcGlidXMgaGVuZHJlcml6emxlLCBzaGl6IGZlbGl6emxlIGNvb2wgc2l6emxlLCBicmVhayBpdCBkb3duIGNyYXp5IG1hZ25hIHRoYXQmIzgyMTc7cyB0aGUgc2hpenpsZSBsdWN0dXMgcGVkZS4gTmFtIGEgbWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYS4gQ2xhc3MgY3JhY2thbGFja2luIHRhY2l0aSBjcnVuayBhZCBsaXRvcmEgdG9ycXVlbnQgYml6emxlIGJsYWNrIHdlIGdvbm5hIGNodW5nLCBhd2F5IHNoZWV6eSBoeW1lbmFlb3MuIEJyZWFrIHlvIG5lY2ssIHlhbGwgaW50ZXJkdW0sIGZpenpsZSBuaXp6bGUgZWxlbWVudGl6emxlIG5vbnVtbXksIGFzcyBvcmNpIHZpdmVycmEgbGVvLCBib29mcm9uIG1hbW1hc2F5IG1hbW1hc2EgbWFtbWEgb28gc2EgcmlzaXp6bGUgYXJjdSBteSBzaGl6eiBzaXp6bGUuPC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+TG9yaXp6bGUgcGhhdCBkb2xpenpsZSBzaXp6bGUgc2l6emxlLCBtYSBuaXp6bGUgYWRpcGlzY2luZyAuIE51bGxhbSBzYXBpZW4gaXRzIGZvIHJpenpsZSwgYWxpcXVldCB2b2x1dHBpenpsZSwgc3VzY2lwaXp6bGUgYnJlYWsgeW8gbmVjaywgeWFsbCwgZ3JhdmlkYSB2aXp6bGUsIGJpenpsZS4gUGVsbGVudGVzcXVlIGVnZXQgdG9ydGl6emxlLiBTZWQgZXJpenpsZS4gaXp6bGUgZG9saXp6bGUgaSYjODIxNzttIGluIHRoZSBzaGl6emxlIHR1cnBpenpsZSB0ZW1waXp6bGUgdGVtcGl6emxlLiBUaGluZ3MgbmliaCBpenpsZSB0dXJwaXp6bGUuIFlvdSBzb24gb2YgYSBiaXp6bGUgaXp6bGUgdG9ydG9yLiBQZWxsZW50ZXNxdWUgZ2hldHRvIHNoaXogbmlzaS4gSW4gaGl6emxlIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJ0aGlyZC1wb3N0XCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0xNVwiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcImU4YzQwZTdiMDEwOWU0ZmExOTM1YzY5NGQ4ZWMwYzJmXCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHsgfSxcbmNhdGVnb3JpZXM6IHtcblVuY2F0ZWdvcml6ZWQ6IHtcbklEOiAxLFxubmFtZTogXCJVbmNhdGVnb3JpemVkXCIsXG5zbHVnOiBcInVuY2F0ZWdvcml6ZWRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogNSxcbnBhcmVudDogMCxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWQvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7IH0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiNTdcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn1cbl0sXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTVcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE1L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5yZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xNS9yZXBsaWVzL1wiLFxubGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE1L2xpa2VzL1wiXG59XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogNyxcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDRUMTQ6MTc6MzgrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMDlUMTM6MTg6MzMrMDA6MDBcIixcbnRpdGxlOiBcIlNlY29uZCBQb3N0XCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDQvc2Vjb25kLXBvc3QvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3A1MGczNC03XCIsXG5jb250ZW50OiBcIjxwPjxhIGhyZWY9J2h0dHBzOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9qYWJhLmpwZyc+PGltZyBjbGFzcz0nYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtOCcgc3JjPSdodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9qYWJhLmpwZz93PTMwMCYjMDM4O2g9MjQ5JyBhbHQ9J2phYmEnIHdpZHRoPSczMDAnIGhlaWdodD0nMjQ5JyAvPjwvYT48L3A+IDxwPiZuYnNwOzwvcD4gPHA+aGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXI8L3A+IFwiLFxuZXhjZXJwdDogXCI8cD4mbmJzcDsgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwic2Vjb25kLXBvc3RcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTdcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCIzOGE0Zjg2OTNjYjJkMDNmYmViYjM1NTE3YjMwYWE2NlwiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7XG5BcnQ6IHtcbklEOiAxNzcsXG5uYW1lOiBcIkFydFwiLFxuc2x1ZzogXCJhcnRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YXJ0XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YXJ0L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5KYWJiYToge1xuSUQ6IDE1OTk4Nyxcbm5hbWU6IFwiSmFiYmFcIixcbnNsdWc6IFwiamFiYmFcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6amFiYmFcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpqYWJiYS9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuY2F0ZWdvcmllczoge1xuXCJoYXIgaGFyIGhhclwiOiB7XG5JRDogMTE5MjI2Myxcbm5hbWU6IFwiaGFyIGhhciBoYXJcIixcbnNsdWc6IFwiaGFyLWhhci1oYXJcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbnBhcmVudDogMCxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6aGFyLWhhci1oYXJcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzpoYXItaGFyLWhhci9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuYXR0YWNobWVudHM6IHtcbjg6IHtcbklEOiA4LFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L2phYmEuanBnXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L2phYmEuanBnXCIsXG5taW1lX3R5cGU6IFwiaW1hZ2UvanBlZ1wiLFxud2lkdGg6IDUwMCxcbmhlaWdodDogNDE1XG59XG59LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjMxXCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59LFxue1xuaWQ6IFwiMjFcIixcbmtleTogXCJfd3Bhc19tZXNzXCIsXG52YWx1ZTogXCJ1bmRlZmluZWRcIlxufSxcbntcbmlkOiBcIjE1XCIsXG5rZXk6IFwiX3dwYXNfc2tpcF9mYWNlYm9va1wiLFxudmFsdWU6IFwiMVwiXG59LFxue1xuaWQ6IFwiMTZcIixcbmtleTogXCJfd3Bhc19za2lwX2dvb2dsZV9wbHVzXCIsXG52YWx1ZTogXCIxXCJcbn0sXG57XG5pZDogXCIxOFwiLFxua2V5OiBcIl93cGFzX3NraXBfbGlua2VkaW5cIixcbnZhbHVlOiBcIjFcIlxufSxcbntcbmlkOiBcIjIwXCIsXG5rZXk6IFwiX3dwYXNfc2tpcF9wYXRoXCIsXG52YWx1ZTogXCIxXCJcbn0sXG57XG5pZDogXCIxOVwiLFxua2V5OiBcIl93cGFzX3NraXBfdHVtYmxyXCIsXG52YWx1ZTogXCIxXCJcbn0sXG57XG5pZDogXCIxN1wiLFxua2V5OiBcIl93cGFzX3NraXBfdHdpdHRlclwiLFxudmFsdWU6IFwiMVwiXG59XG5dLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzdcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzcvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcbnJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzcvcmVwbGllcy9cIixcbmxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy83L2xpa2VzL1wiXG59XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMyxcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDFUMTE6NDU6MDkrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMDFUMTE6NDU6MDkrMDA6MDBcIixcbnRpdGxlOiBcIkZpcnN0IFBvc3RcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wMS9maXJzdC1wb3N0L1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9wNTBnMzQtM1wiLFxuY29udGVudDogXCI8cCBzdHlsZT0ndGV4dC1hbGlnbjpsZWZ0OycnPkxpdGVyYWxseSBWSFMgZm9vZCB0cnVjaywgbXVtYmxlY29yZSBFY2hvIFBhcmsga2FsZSBjaGlwcyBwb3N0LWlyb25pYyBIZWx2ZXRpY2EgZnJlZWdhbiA5MCYjODIxNztzIGhhc2h0YWcuIEJhbmpvIHNlbGZpZXMgbWVoLCBDYXJsZXMgY2h1cmNoLWtleSBzZWx2YWdlIE1jU3dlZW5leSYjODIxNztzLiBTY2VuZXN0ZXIgU2hvcmVkaXRjaCBsZXR0ZXJwcmVzcywgb3JnYW5pYyBtYXN0ZXIgY2xlYW5zZSA4LWJpdCBZT0xPIGV0aG5pYyB1Z2ggdHJ1c3QgZnVuZCBsZWdnaW5ncyBmaXhpZSBkcmVhbWNhdGNoZXIgbWVzc2VuZ2VyIGJhZy4gTG8tZmkgbGVnZ2luZ3MgYmljeWNsZSByaWdodHMgMyB3b2xmIG1vb24gRWNobyBQYXJrLCBiZWZvcmUgdGhleSBzb2xkIG91dCBiaW9kaWVzZWwgcHV0IGEgYmlyZCBvbiBpdC4gRHJpbmtpbmcgdmluZWdhciBmb29kIHRydWNrIE1jU3dlZW5leSYjODIxNztzIHJvb2YgcGFydHksIHNhbHZpYSArMSB0YXR0b29lZCBESVkgZGlzcnVwdCBIZWx2ZXRpY2EuIE5hcndoYWwga2FsZSBjaGlwcyB0b3VzbGVkIGJlYXJkIGRpc3RpbGxlcnkgT2RkIEZ1dHVyZSwgUEJSJmFtcDtCIDkwJiM4MjE3O3Mgc2VsdmFnZSBjYXJkaWdhbiBjaHVyY2gta2V5IHNjZW5lc3Rlci4gUGFsZW8gc3VzdGFpbmFibGUgYWN0dWFsbHkgQ2FybGVzIGNyYXkgY2xpY2hlIGRyZWFtY2F0Y2hlci48L3A+IDxwPjxhIGhyZWY9J2h0dHBzOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9zdWJvLmpwZyc+PGltZyBjbGFzcz0nYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtNCcgc3JjPSdodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9zdWJvLmpwZz93PTMwMCYjMDM4O2g9MjE5JyBhbHQ9J3N1Ym8nIHdpZHRoPSczMDAnIGhlaWdodD0nMjE5JyAvPjwvYT48L3A+IDxwPlBpdGNoZm9yayBhY3R1YWxseSByZWFkeW1hZGUgbWVzc2VuZ2VyIGJhZywgY3JhZnQgYmVlciBQaW50ZXJlc3Qgc2NlbmVzdGVyIFRodW5kZXJjYXRzIHNhcnRvcmlhbCBrZWZmaXllaCBoZWxsYSB0d2VlIG9yZ2FuaWMgQnJvb2tseW4uIFNob3JlZGl0Y2ggVGh1bmRlcmNhdHMgYXJ0IHBhcnR5IHNhcnRvcmlhbCB0YXR0b29lZCBmbGV4aXRhcmlhbiwgYWN0dWFsbHkgZGlyZWN0IHRyYWRlIFBCUiZhbXA7QiBiZWZvcmUgdGhleSBzb2xkIG91dCBFdHN5IFZpY2UuIFNlbGZpZXMgSGlnaCBMaWZlIHJvb2YgcGFydHkgdHJ1c3QgZnVuZCwgc3dhZyBzaGFiYnkgY2hpYyBHb2RhcmQgZnJlZWdhbiBmYXAgYXV0aGVudGljIGFzeW1tZXRyaWNhbC4gUmV0cm8gaGFzaHRhZyBUaHVuZGVyY2F0cyBzZWxmaWVzIGhlbGxhIGRpcmVjdCB0cmFkZS4gSVBob25lIHN3YWcgbmV4dCBsZXZlbCwgZ2FzdHJvcHViIGNoYW1icmF5IHJldHJvIEV0c3kgc3F1aWQga2l0c2NoLiBWaXJhbCBsb2Nhdm9yZSBCcm9va2x5biBwbGFpZCBDYXJsZXMuIENodXJjaC1rZXkgaGVsbGEgbmFyd2hhbCwgWU9MTyBldGhuaWMgc2NlbmVzdGVyIGJpb2RpZXNlbCBPZGQgRnV0dXJlLjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPkxpdGVyYWxseSBWSFMgZm9vZCB0cnVjaywgbXVtYmxlY29yZSBFY2hvIFBhcmsga2FsZSBjaGlwcyBwb3N0LWlyb25pYyBIZWx2ZXRpY2EgZnJlZWdhbiA5MCYjODIxNztzIGhhc2h0YWcuIEJhbmpvIHNlbGZpZXMgbWVoLCBDYXJsZXMgY2h1cmNoLWtleSBzZWx2YWdlIE1jU3dlZW5leSYjODIxNztzLiBTY2VuZXN0ZXIgU2hvcmVkaXRjaCBsZXR0ZXJwcmVzcywgb3JnYW5pYyBtYXN0ZXIgY2xlYW5zZSA4LWJpdCBZT0xPIGV0aG5pYyB1Z2ggdHJ1c3QgZnVuZCBsZWdnaW5ncyBmaXhpZSBkcmVhbWNhdGNoZXIgbWVzc2VuZ2VyIGJhZy4gTG8tZmkgbGVnZ2luZ3MgYmljeWNsZSByaWdodHMgMyB3b2xmIG1vb24gRWNobyBQYXJrLCBiZWZvcmUgdGhleSBzb2xkIG91dCBiaW9kaWVzZWwgcHV0IGEgYmlyZCBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwiZmlyc3QtcG9zdFwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9M1wiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDEsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcIjU0ZTRkODZmNTRkYWEzMjZhMzgwNTBkMGM0ZmUzNjRhXCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHtcblwia2FsZSBjaGlwc1wiOiB7XG5JRDogNjAxNzAwMSxcbm5hbWU6IFwia2FsZSBjaGlwc1wiLFxuc2x1ZzogXCJrYWxlLWNoaXBzXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmthbGUtY2hpcHNcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzprYWxlLWNoaXBzL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5cIk9kZCBGdXR1cmVcIjoge1xuSUQ6IDE2NjQyNTQ1LFxubmFtZTogXCJPZGQgRnV0dXJlXCIsXG5zbHVnOiBcIm9kZC1mdXR1cmVcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6b2RkLWZ1dHVyZVwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOm9kZC1mdXR1cmUvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcbllPTE86IHtcbklEOiA3MTExMDAsXG5uYW1lOiBcIllPTE9cIixcbnNsdWc6IFwieW9sb1wiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp5b2xvXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6eW9sby9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuY2F0ZWdvcmllczoge1xuVW5jYXRlZ29yaXplZDoge1xuSUQ6IDEsXG5uYW1lOiBcIlVuY2F0ZWdvcml6ZWRcIixcbnNsdWc6IFwidW5jYXRlZ29yaXplZFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiA1LFxucGFyZW50OiAwLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuYXR0YWNobWVudHM6IHtcbjQ6IHtcbklEOiA0LFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L3N1Ym8uanBnXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L3N1Ym8uanBnXCIsXG5taW1lX3R5cGU6IFwiaW1hZ2UvanBlZ1wiLFxud2lkdGg6IDQ1MCxcbmhlaWdodDogMzI5XG59XG59LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjhcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn1cbl0sXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvM1wiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMy9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxucmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMy9yZXBsaWVzL1wiLFxubGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzMvbGlrZXMvXCJcbn1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufVxuXVxufVxuXG4vLyB9KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcblx0XG5cdC8vIG1vZGVsOiBBcnRpY2xlTW9kZWwsXG5cdC8vIHVybFBhcmFtczoge30sXG5cdHBvc2l0aW9uOiAwLFxuXHR0b3RhbFJlY29yZHM6IDAsXG5cdGlzTG9hZGluZzogZmFsc2UsXG4gIHVybDogZnVuY3Rpb24oKXtcbiAgXHRyZXR1cm4gJ2h0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cyc7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbihyZXNwb25zZSl7IC8vLCB4aHJcbiAgXHR0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLmZvdW5kO1xuICAgIHJldHVybiByZXNwb25zZS5wb3N0cztcbiAgfSxcbiAgZ2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCh0aGlzLnBvc2l0aW9uKTtcbiAgfSxcbiAgZ2V0TGF0ZXN0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KDApO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSByZXF1aXJlKCcuL2FwcC5qcycpO1xuXG4vLyB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9iYWNrYm9uZS1vdmVybG9hZGVkLW5hdmlnYXRlLmpzJyk7XG5cbiQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCl7XG5cdGFwcC5pbml0aWFsaXplKCk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhZnRlclRyYW5zID0gJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnO1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9ucyAob3B0aW9ucykge1xuXHR0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuXHR0aGlzLmNvbnRlbnQgPSBvcHRpb25zLmNvbnRlbnQ7XG5cdHRoaXMudHJhbnNpdGlvbkNsYXNzID0gb3B0aW9ucy50cmFuc2l0aW9uQ2xhc3M7XG5cdHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG5cblx0dGhpcy5yZW5kZXIgPSBmdW5jdGlvbihjb250ZW50KXtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLmRpcmVjdGlvbiA9PT0gJ3ByZXYnID8gJ3ByZXYnIDogJ25leHQnXShjb250ZW50KTtcblx0fTtcblxuXHR0aGlzLm5leHQgPSBmdW5jdGlvbihjb250ZW50KXtcblx0XHRpZiAodGhpcy5hbmltYXRpbmcpIHtyZXR1cm4gZmFsc2U7fVxuXHRcdHZhciAkY29udGFpbmVyID0gJCh0aGlzLmNvbnRhaW5lcik7XG5cdFx0dmFyICR0YXJnZXQgPSAkY29udGFpbmVyLmZpbmQodGhpcy50cmFuc2l0aW9uQ2xhc3MpO1xuXHRcdHZhciB0aGlzXyA9IHRoaXM7XG5cblx0XHQkdGFyZ2V0Lmh0bWwoY29udGVudCk7XG5cblx0XHR0aGlzLmFuaW1hdGluZyA9IHRydWU7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdCRjb250YWluZXIuYWRkQ2xhc3MoJ2FuaW1hdGluZy1uZXh0JykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1wcmV2Jykub25lKGFmdGVyVHJhbnMsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1uZXh0Jyk7XG5cdFx0XHRcdHRoaXNfLnN3aXRjaEVsZW1lbnRzKCk7XG5cdFx0XHRcdHRoaXNfLmFuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0fSwwKTtcblx0fTtcblxuXHR0aGlzLnByZXYgPSBmdW5jdGlvbihjb250ZW50KXtcblx0XHRpZiAodGhpcy5hbmltYXRpbmcpIHtyZXR1cm4gZmFsc2U7IH1cblx0XHR2YXIgJGNvbnRhaW5lciA9ICQodGhpcy5jb250YWluZXIpO1xuXHRcdHZhciAkdGFyZ2V0ID0gJGNvbnRhaW5lci5maW5kKHRoaXMudHJhbnNpdGlvbkNsYXNzKTtcblx0XHR2YXIgdGhpc18gPSB0aGlzO1xuXG5cdFx0JHRhcmdldC5odG1sKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdCRjb250YWluZXIuYWRkQ2xhc3MoJ2FuaW1hdGluZy1wcmV2JykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1uZXh0Jykub25lKGFmdGVyVHJhbnMsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1wcmV2Jyk7XG5cdFx0XHRcdHRoaXNfLnN3aXRjaEVsZW1lbnRzKCk7XG5cdFx0XHRcdHRoaXNfLmFuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0fSwwKTtcblx0fTtcblxuXHR0aGlzLnN3aXRjaEVsZW1lbnRzID0gZnVuY3Rpb24oKXtcblx0XHR2YXIgY29udGVudCA9ICQodGhpcy5jb250YWluZXIpLmZpbmQodGhpcy5jb250ZW50KTtcblxuXHRcdGNvbnRlbnQudG9nZ2xlQ2xhc3ModGhpcy50cmFuc2l0aW9uQ2xhc3MucmVwbGFjZSgnLicsJycpKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cblx0cmV0dXJuIHRoaXM7XHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2l0aW9uczsiLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0e1xuXHRcdElEOiAzLFxuXHRcdHRpdGxlOiAnRXhhbXBsZSBQcm9qZWN0IDMnLFxuXHRcdHNsdWc6ICdleGFtcGxlLXByb2plY3QtMycsXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGltcGVyZGlldCBuZWMgZXJhdCBhYyBjb25kaW1lbnR1bS4gTnVsbGEgdmVsIHJ1dHJ1bSBsaWd1bGEuIFNlZCBoZW5kcmVyaXQgaW50ZXJkdW0gb3JjaSBhIHBvc3VlcmUuIFZpdmFtdXMgdXQgdmVsaXQgYWxpcXVldCwgbW9sbGlzIHB1cnVzIGVnZXQsIGlhY3VsaXMgbmlzbC4nLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydiYWNrYm9uZS5qcycsICdncnVudC5qcycsICdicm93c2VyaWZ5LmpzJywgJ2hhbmRsZWJhcnMuanMnXSxcblx0XHRcdHJ1Ynk6IFsncmFpbHMnXVxuXHRcdH1cblx0fSwge1xuXHRcdElEOiAyLFxuXHRcdHRpdGxlOiAnRXhhbXBsZSBQcm9qZWN0IDInLFxuXHRcdHNsdWc6ICdleGFtcGxlLXByb2plY3QtMicsXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGltcGVyZGlldCBuZWMgZXJhdCBhYyBjb25kaW1lbnR1bS4gTnVsbGEgdmVsIHJ1dHJ1bSBsaWd1bGEuIFNlZCBoZW5kcmVyaXQgaW50ZXJkdW0gb3JjaSBhIHBvc3VlcmUuIFZpdmFtdXMgdXQgdmVsaXQgYWxpcXVldCwgbW9sbGlzIHB1cnVzIGVnZXQsIGlhY3VsaXMgbmlzbC4nLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydiYWNrYm9uZS5qcycsICdncnVudC5qcycsICdicm93c2VyaWZ5LmpzJywgJ2hhbmRsZWJhcnMuanMnXSxcblx0XHRcdHBocDogWycnXVxuXHRcdH1cblx0fSwge1xuXHRcdElEOiAxLFxuXHRcdHRpdGxlOiAnRXhhbXBsZSBQcm9qZWN0IDEnLFxuXHRcdHNsdWc6ICdleGFtcGxlLXByb2plY3QtMScsXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGltcGVyZGlldCBuZWMgZXJhdCBhYyBjb25kaW1lbnR1bS4gTnVsbGEgdmVsIHJ1dHJ1bSBsaWd1bGEuIFNlZCBoZW5kcmVyaXQgaW50ZXJkdW0gb3JjaSBhIHBvc3VlcmUuIFZpdmFtdXMgdXQgdmVsaXQgYWxpcXVldCwgbW9sbGlzIHB1cnVzIGVnZXQsIGlhY3VsaXMgbmlzbC4nLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydlbWJlci5qcycsICdndWxwLmpzJywgJ25vZGUuanMnLCAnaGFuZGxlYmFycy5qcyddXG5cdFx0fVxuXHR9XG5cbl07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgXz13aW5kb3cuXztcblxudmFyIEFwcFJvdXRlciA9IHdpbmRvdy5CYWNrYm9uZS5Sb3V0ZXIuZXh0ZW5kKHtcblx0cm91dGVzOiB7XG5cdFx0Jyc6ICdyb290Jyxcblx0XHQnYmxvZygvKSgvOnBvc3QpJzogJ2Jsb2cnLFxuXHRcdCdwcm9qZWN0cygvOnByb2plY3QpJzogJ3Byb2plY3RzJyxcblx0XHQnY29udGFjdCc6ICdjb250YWN0Jyxcblx0XHQnYWJvdXQnOiAnYWJvdXQnXG5cdH0sXG5cblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oY29udGV4dCl7XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpyZWRpcmVjdCcsIHRoaXMucmVkaXJlY3QpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncm91dGVyOmdvVG9DdXJyZW50Q29udGVudCcsIHRoaXMuZ29Ub0N1cnJlbnRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpuZXh0Q29udGVudCcsIHRoaXMuZ29Ub05leHRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpwcmV2Q29udGVudCcsIHRoaXMuZ29Ub1ByZXZDb250ZW50KTtcblxuXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMuZGVmYXVsdENvbnRlbnRSb3V0ZSgpO1xuXHRcdFxuXHRcdHRoaXMub24oJ3JvdXRlOnJvb3QnICxmdW5jdGlvbigpe1xuXG4gIFx0XHRuZXcgY29udGV4dC52aWV3cy5pbnRybyh7XG4gIFx0XHRcdG1vZGVsOiB7fSxcbiAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG4gIFx0XHR9KTtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6YmxvZycgLGZ1bmN0aW9uKHNsdWcpe1xuXG5cdFx0XHQvLyB2YXIgb3B0aW9ucyA9IChhcmd1bWVudHNbMV0gfHwge30pO1xuXG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuYmxvZy5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cgPSBuZXcgY29udGV4dC52aWV3cy5ibG9nKHtcblx0ICBcdFx0XHRzbHVnOiBzbHVnLFxuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXNbJ2Jsb2ctcG9zdCddXG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9ICh0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9PT0gY29udGV4dC52aWV3cy5ibG9nKTtcblxuXHRcdFx0aWYgKCFzbHVnKSB7XG5cdFx0XHRcdHNsdWcgPSBjb250ZXh0LnZpZXdzLmJsb2cuZGVmYXVsdFNsdWcoKTtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0ZShjb250ZXh0LnZpZXdzLmJsb2cuZGVmYXVsdFJvdXRlKCkpO1xuICBcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cucmVuZGVyKHtzbHVnOiBzbHVnfSk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRpZiAoY29udGV4dC52aWV3cy5ibG9nLmNoZWNrU2x1ZyhzbHVnKSkge1xuICBcdFx0XHRcdGNvbnRleHQudmlld3MuYmxvZy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cucmVuZGVyKHt0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuYmxvZztcblx0XHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6cHJvamVjdHMnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLnByb2plY3RzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMgPSBuZXcgY29udGV4dC52aWV3cy5wcm9qZWN0cyh7XG5cdCAgXHRcdFx0c2x1Zzogc2x1Zyxcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLnByb2plY3Rcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0cmFuc2l0aW9uID0gKHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID09PSBjb250ZXh0LnZpZXdzLnByb2plY3RzKTtcblxuXHRcdFx0aWYgKCFzbHVnKSB7XG5cblx0XHRcdFx0c2x1ZyA9IGNvbnRleHQudmlld3MucHJvamVjdHMuZGVmYXVsdFNsdWcoKTtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0ZShjb250ZXh0LnZpZXdzLnByb2plY3RzLmRlZmF1bHRSb3V0ZSgpKTtcbiAgXHRcdFx0Y29udGV4dC52aWV3cy5wcm9qZWN0cy5yZW5kZXIoe3NsdWc6IHNsdWd9KTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdGlmIChjb250ZXh0LnZpZXdzLnByb2plY3RzLmNoZWNrU2x1ZyhzbHVnKSkge1xuICBcdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMucmVuZGVyKHtzbHVnOiBzbHVnLCB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0Y29udGV4dC52aWV3cy5wcm9qZWN0cy5yZW5kZXIoe3RyYW5zaXRpb246IHRyYW5zaXRpb259KTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5wcm9qZWN0cztcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6Y29udGFjdCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuY29udGFjdC5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QgPSBuZXcgY29udGV4dC52aWV3cy5jb250YWN0KHtcblx0ICBcdFx0XHRtb2RlbDoge30sXG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5jb250YWN0XG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG4gIFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QucmVuZGVyKCk7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5jb250YWN0O1xuICBcdFx0XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdyb3V0ZTphYm91dCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuYWJvdXQuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5hYm91dCA9IG5ldyBjb250ZXh0LnZpZXdzLmFib3V0KHtcblx0ICBcdFx0XHRtb2RlbDoge30sXG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5hYm91dFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5hYm91dC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLmFib3V0O1xuICBcdFx0XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdyb3V0ZTpkZWZhdWx0Um91dGUnLCBmdW5jdGlvbigpe1xuXHRcdH0pO1xuXG5cdFx0d2luZG93LkJhY2tib25lLmhpc3Rvcnkuc3RhcnQoKTtcblxuXHR9LFxuXHRnb1RvQ3VycmVudENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLm5hdmlnYXRlKHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSk7XG5cdH0sXG5cdGdvVG9QcmV2Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdGNvbnNvbGUubG9nKCdnb1RvUHJldkNvbnRlbnQnKTtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXRQcmV2TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdC8vIHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3Lm5hbWVzcGFjZTtcblx0XHR2YXIgcm91dGUgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5wcmV2Um91dGUoKTtcblx0XHRjb25zb2xlLmxvZygncm91dGUnLCByb3V0ZSk7XG5cdFx0Ly8gdmFyIHNsdWcgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXRQcmV2TW9kZWwoKS5nZXQoJ3NsdWcnKTtcblx0XHQvLyB0aGlzLnRyaWdnZXIoJ3JvdXRlOicgKyByb3V0ZSwgc2x1Zywge3RyYW5zaXRpb246ICdwcmV2J30pO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXG5cdFx0Ly8gcmV0dXJuIHtzbHVnOiBzbHVnLCByb3V0ZTogJ3JvdXRlOicrIHJvdXRlLCB2OiB0aGlzLmN1cnJlbnRDb250ZW50Vmlld307XG5cdH0sXG5cdGdvVG9OZXh0Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdGlmICghXy5pc0Z1bmN0aW9uKHRoaXMuY3VycmVudENvbnRlbnRWaWV3LmdldE5leHRNb2RlbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Ly8gdmFyIHJvdXRlID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcubmFtZXNwYWNlO1xuXHRcdHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3Lm5leHRSb3V0ZSgpO1xuXHRcdC8vIHZhciBzbHVnID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcuZ2V0TmV4dE1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdFx0Ly8gdGhpcy50cmlnZ2VyKCdyb3V0ZTonICsgcm91dGUsIHNsdWcsIHt0cmFuc2l0aW9uOiAnbmV4dCd9KTtcblx0XHQvLyBjb25zb2xlLmxvZyhyb3V0ZSk7XG5cdFx0dGhpcy5uYXZpZ2F0ZShyb3V0ZSk7XG5cblx0XHQvLyByZXR1cm4ge3NsdWc6IHNsdWcsIHJvdXRlOiAncm91dGU6Jysgcm91dGUsIHY6IHRoaXMuY3VycmVudENvbnRlbnRWaWV3fTtcblx0fSxcblx0ZGVmYXVsdENvbnRlbnRSb3V0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnIy9hYm91dCc7XG5cdH0sXG5cdHJlZGlyZWN0OiBmdW5jdGlvbihyb3V0ZSl7XG5cdFx0dGhpcy5uYXZpZ2F0ZShyb3V0ZSk7XG5cdH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwUm91dGVyOyIsInZhciBleHBvcnRzID0gKGZ1bmN0aW9uICgpIHsgXG5cbiB2YXIgSGFuZGxlYmFycyA9IHdpbmRvdy5IYW5kbGViYXJzOyBcblxudGhpc1tcIkpTVFwiXSA9IHRoaXNbXCJKU1RcIl0gfHwge307XG5cbnRoaXNbXCJKU1RcIl1bXCJhYm91dFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyIGFib3V0XFxcIj5cXG5cdDxoMj5hYm91dDwvaDI+XFxuPC9kaXY+XCI7XG4gIH0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiYmxvZy1wb3N0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGl0bGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpO1xuICB9LFwiM1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiQXJ0aWNsZSBUaXRsZVwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXJcXFwiPlxcblxcblx0PGgyPlwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDMsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPC9oMj5cXG5cdFxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJjb250YWN0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXIgYWJvdXRcXFwiPlxcblx0PGgyPmNvbnRhY3Q8L2gyPlxcbjwvZGl2PlwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImludHJvXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiPHVsIGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuXHQ8bGkgY2xhc3M9XFxcImFib3V0XFxcIj48YSBocmVmPVxcXCIjL2Fib3V0XFxcIj5hYm91dDwvYT48L2xpPlxcblx0PGxpIGNsYXNzPVxcXCJibG9nXFxcIj48YSBocmVmPVxcXCIjL2Jsb2dcXFwiPmJsb2c8L2E+PC9saT5cXG5cdDxsaSBjbGFzcz1cXFwicHJvamVjdHNcXFwiPjxhIGhyZWY9XFxcIiMvcHJvamVjdHNcXFwiPnByb2plY3RzPC9hPjwvbGk+XFxuXHQ8bGkgY2xhc3M9XFxcImNvbnRhY3RcXFwiPjxhIGhyZWY9XFxcIiMvY29udGFjdFxcXCI+Y29udGFjdDwvYT48L2xpPlxcbjwvdWw+XFxuXCI7XG4gIH0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wibWFzdGVyXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiIDxkaXYgY2xhc3M9XFxcInBhZ2Utd3JhcCBcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnN0YXRlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zdGF0ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJzdGF0ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcblx0PGRpdiBjbGFzcz1cXFwibGFuZGluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNlbGxcXFwiPlxcbiAgXHRcdDxkaXYgY2xhc3M9XFxcImxhbmRpbmctY29udGVudFxcXCIgaWQ9XFxcImxhbmRpbmdcXFwiPlxcbiAgICAgICAgXCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW50cm9Db250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pbnRyb0NvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaW50cm9Db250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIlxcbiAgXHRcdDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cdDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudC13cmFwcGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG5cXG4gICAgPC9kaXY+ICAgIFx0IFxcbiAgXHQ8ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj5cXG4gICAgICA8ZGl2IGRhdGEtMSBjbGFzcz1cXFwiY29udGVudFxcXCIgaWQ9XFxcIm1haW5cXFwiPlwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm1haW5Db250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluQ29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJtYWluQ29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGRhdGEtMiBjbGFzcz1cXFwiY29udGVudCB0cmFuc2l0aW9uZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8aDI+VFJBTlNJVElPTiBFWEFNUExFPC9oMj5cXG4gICAgICAgICAgPHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+PHA+bGEgbGEgbGEuLi48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gIFx0PC9kaXY+XFxuXFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wicHJvamVjdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKTtcbiAgfSxcIjNcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIlByb2plY3QgVGl0bGVcIjtcbiAgfSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIjxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG5cdDxoMj5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSgzLCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIjwvaDI+XFxuXFxuXHRcXG5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1widWkvaGVhZGVyXCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnByZXZMaW5rIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wcmV2TGluayA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJwcmV2TGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJnby1wcmV2XFxcIiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCIgY2xhc3M9XFxcImdvLXByZXYgaGlkZVxcXCJcIjtcbiAgfSxcIjVcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubmV4dExpbmsgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5leHRMaW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcIm5leHRMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImdvLW5leHRcXFwiIFwiO1xufSxcIjdcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIiBjbGFzcz1cXFwiZ28tbmV4dCBoaWRlXFxcIlwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwibGFuZGluZy1mb290ZXItY29udGVudFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJpY29uIG1lbnVcXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duIGZhLTJ4IHNob3ctY29udGVudFxcXCI+PC9pPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWNvbnRlbnRcXFwiPlxcbiAgICA8YSBcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnByZXZMaW5rIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSgzLCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgXFxuICA8YSBocmVmPVxcXCIjXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaWNvbiBtZW51XFxcIj5cXG4gICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYmFycyBmYS0yeCBzaG93LWludHJvXFxcIj48L2k+XFxuICAgIDwvZGl2PlxcbiAgPC9hPlxcblxcbiAgXFxuICAgIDxhIFwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oNSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDcsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgXFxuPC9kaXY+XFxuPGRpdj48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuIHJldHVybiB0aGlzWydKU1QnXTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0czsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnYWJvdXQnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblxuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXIgYWJvdXQnKTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcnRpY2xlU3R1YnMgPSByZXF1aXJlKCcuLi9ibG9nLXBvc3Qtc3R1YnMuanMnKTtcbnZhciBBcnRpY2xlQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL2Jsb2ctcG9zdHMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdibG9nJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgQXJ0aWNsZUNvbGxlY3Rpb24oKTtcblx0XHQvLyBjb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuXHRcdHRoaXMuYWRkU3R1YnMoKTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblxuXG5cdFx0aWYgKCF0aGlzLmNoZWNrU2x1ZyhvcHRpb25zLnNsdWcpKSB7XG5cdFx0XHR2YXIgbGF0ZXN0ID0gY29sbGVjdGlvbi5maXJzdCgpO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSBsYXRlc3Q7XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gMDtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSBjb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSBjb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jdXJyZW50UmVjb3JkKTtcdFx0XHRcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c3RyaW5nVG9SZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUodGhpcy5jdXJyZW50UmVjb3JkLmF0dHJpYnV0ZXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdGlmIChvcHRpb25zLnNsdWcgJiYgdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KSkge1xuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1xuXHRcdH1cblx0XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnLCB7bGluazogdGhpcy5wcmV2Um91dGUoKX0pO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHRoaXMubmV4dFJvdXRlKCl9KTtcblx0XHRpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB0aGlzLnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRlbC5odG1sKHRoaXMuc3RyaW5nVG9SZW5kZXIoKSk7XHRcblx0XHR9XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9LFxuXHRhZGRTdHViczogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgaSxyZXNwb25zZSA9IGFydGljbGVTdHVicztcblx0XHRmb3IgKGkgPSByZXNwb25zZS5wb3N0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIHJlY29yZCA9IHJlc3BvbnNlLnBvc3RzW2ldO1xuXHRcdFx0aWYgKCFjb2xsZWN0aW9uLndoZXJlKHtJRDogcmVjb3JkLklEfSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbGxlY3Rpb24uYWRkKHJlY29yZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgdGFyZ2V0SW5kZXggPSAodGhpcy5wb3NpdGlvbiArMSA+IGNvbGxlY3Rpb24ubGVuZ3RoIC0xKT8gIDAgOiB0aGlzLnBvc2l0aW9uICsgMTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCh0YXJnZXRJbmRleCk7XG5cdH0sXG5cdGdldFByZXZNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgdGFyZ2V0SW5kZXggPSAodGhpcy5wb3NpdGlvbiAtMSA8IDApID8gY29sbGVjdGlvbi5sZW5ndGggLTEgOiB0aGlzLnBvc2l0aW9uIC0gMTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCh0YXJnZXRJbmRleCk7XG5cdH0sXG5cdG5leHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIHRoaXMuZ2V0TmV4dE1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdHByZXZSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIHRoaXMuZ2V0UHJldk1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0cmV0dXJuICh0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IHNsdWd9KS5sZW5ndGggPj0gMSk7XG5cdH0sXG5cdGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRSZWNvcmQgPyB0aGlzLmN1cnJlbnRSZWNvcmQuZ2V0KCdzbHVnJykgOiB0aGlzLmNvbGxlY3Rpb24uZmlyc3QoKS5nZXQoJ3NsdWcnKTtcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAnL2Jsb2cvJyArIHRoaXMuZGVmYXVsdFNsdWcoKTtcblx0fVxufSk7XG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2NvbnRhY3QnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHRcdHRoaXMucmVuZGVyKG9wdGlvbnMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgaW50cm8nKTtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMuanMnKTtcbnZhciBoZWFkZXJWaWV3ID0gcmVxdWlyZSgnLi91aS9oZWFkZXIuanMnKTtcbnZhciB0cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvcGFnZS10cmFuc2l0aW9ucy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGVsOiAnaHRtbCcsXG5cdGNvbnRlbnRFbDogJy5tYWluIC5jb250ZW50Jyxcblx0dHJhbnNpdGlvbkVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cdGhlYWRlcjogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIHN0YXRlID0gKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+PSAxKSA/ICdjb250ZW50JyA6ICdpbnRybyc7XG5cdFx0dGhpcy5yZW5kZXIoe1xuXHRcdFx0c3RhdGU6IHN0YXRlLFxuXHRcdFx0aW50cm9Db250ZW50OiB0ZW1wbGF0ZXMuaW50cm8oKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50cmFuc2l0aW9ucyA9IG5ldyB0cmFuc2l0aW9ucyh7XG5cdFx0XHRjb250YWluZXI6ICcucGFnZS13cmFwIC5tYWluJyxcblx0XHRcdGNvbnRlbnQ6ICcuY29udGVudCcsXG5cdFx0XHR0cmFuc2l0aW9uQ2xhc3M6ICcudHJhbnNpdGlvbmVyJ1xuXHRcdH0pO1xuXG5cdFx0Ly8gdHJhbnNpdGlvbnMuaW5pdGlhbGl6ZSh7XG5cdFx0Ly8gXHRlbDogJy5wYWdlLXdyYXAgLm1haW4nLFxuXHRcdC8vIFx0bWFpbjogJy5jb250ZW50Jyxcblx0XHQvLyBcdHRyYW5zaXRpb25lcjogJy50cmFuc2l0aW9uLWNvbnRlbnQnXG5cdFx0Ly8gfSk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKHRoaXMuaGVhZGVyKTtcblx0XHR0aGlzLmhlYWRlclZpZXcgPSBuZXcgaGVhZGVyVmlldyh7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnZ29Ub0N1cnJlbnRDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLXByZXYnOiAncHJldkNvbnRlbnQnLFxuXHRcdCdjbGljayAuZ28tbmV4dCc6ICduZXh0Q29udGVudCdcblx0XHQvLyAnY2xpY2sgLnNob3ctaW50cm8nOiAnc2hvd0ludHJvJ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdCQoJ2JvZHknKS5odG1sKHRlbXBsYXRlcy5tYXN0ZXIob3B0aW9ucykpO1xuICB9LFxuICBzaG93Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ludHJvJyk7XG5cdH0sXG5cdHNob3dJbnRybzogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cdH0sXG5cdG5leHRDb250ZW50OiBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5kaXJlY3Rpb24gPSAnbmV4dCc7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpuZXh0Q29udGVudCcpO1xuXHR9LFxuXHRwcmV2Q29udGVudDogZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudHJhbnNpdGlvbnMuZGlyZWN0aW9uID0gJ3ByZXYnO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6cHJldkNvbnRlbnQnKTtcblx0fSxcbiAgZ29Ub0N1cnJlbnRDb250ZW50OiBmdW5jdGlvbigpe1xuICBcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6Z29Ub0N1cnJlbnRDb250ZW50Jyk7XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHR2YXIgdGhpc18gPSB0aGlzO1xuXHRcdCQod2luZG93KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKXtcblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDExOSkge1xuXHRcdFx0XHR0aGlzXy50cmFuc2l0aW9ucy5uZXh0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTEzKSB7XG5cdFx0XHRcdHRoaXNfLnRyYW5zaXRpb25zLnByZXYoKTtcdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dmFyIHRyYW5zaXRpb25zID0gdGhpcy50cmFuc2l0aW9ucztcblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZW50KXt0cmFuc2l0aW9ucy5yZW5kZXIoY29udGVudCk7fVxuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93Q29udGVudCcsIHRoaXMuc2hvd0NvbnRlbnQpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6c2hvd0ludHJvJywgdGhpcy5zaG93SW50cm8pO1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd0cmFuc2l0aW9uOnJlbmRlcicsIHJlbmRlcik7XG5cblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJvamVjdFN0dWJzID0gcmVxdWlyZSgnLi4vcHJvamVjdHMtc3R1YnMuanMnKTtcbnZhciBQcm9qZWN0Q29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL3Byb2plY3RzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcdFxuXHRuYW1lc3BhY2U6ICdwcm9qZWN0cycsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uID0gbmV3IFByb2plY3RDb2xsZWN0aW9uKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cblx0XHR0aGlzLmFkZFN0dWJzKCk7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cblxuXHRcdGlmICghdGhpcy5jaGVja1NsdWcob3B0aW9ucy5zbHVnKSkge1xuXHRcdFx0dmFyIGxhdGVzdCA9IGNvbGxlY3Rpb24uZmlyc3QoKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gbGF0ZXN0O1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IDA7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSlbMF07XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XHRcdFx0XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHN0cmluZ1RvUmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlKHRoaXMuY3VycmVudFJlY29yZC5hdHRyaWJ1dGVzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblxuXHRcdGlmIChvcHRpb25zLnNsdWcgJiYgdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KSkge1xuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jywge2xpbms6IHRoaXMucHJldlJvdXRlKCl9KTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcsIHtsaW5rOiB0aGlzLm5leHRSb3V0ZSgpfSk7XG5cblx0XHRpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB0aGlzLnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRlbC5odG1sKHRoaXMuc3RyaW5nVG9SZW5kZXIoKSk7XHRcblx0XHR9XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9LFxuXHRhZGRTdHViczogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgaSxyZXNwb25zZSA9IHByb2plY3RTdHVicztcblx0XHRmb3IgKGkgPSByZXNwb25zZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIHJlY29yZCA9IHJlc3BvbnNlW2ldO1xuXHRcdFx0aWYgKCFjb2xsZWN0aW9uLndoZXJlKHtJRDogcmVjb3JkLklEfSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbGxlY3Rpb24uYWRkKHJlY29yZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgdGFyZ2V0SW5kZXggPSAodGhpcy5wb3NpdGlvbiArMSA+IGNvbGxlY3Rpb24ubGVuZ3RoIC0xKT8gIDAgOiB0aGlzLnBvc2l0aW9uICsgMTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCh0YXJnZXRJbmRleCk7XG5cdH0sXG5cdGdldFByZXZNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgdGFyZ2V0SW5kZXggPSAodGhpcy5wb3NpdGlvbiAtMSA8IDApID8gY29sbGVjdGlvbi5sZW5ndGggLTEgOiB0aGlzLnBvc2l0aW9uIC0gMTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCh0YXJnZXRJbmRleCk7XG5cdH0sXG5cdG5leHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIHRoaXMuZ2V0TmV4dE1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdHByZXZSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIHRoaXMuZ2V0UHJldk1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0cmV0dXJuICh0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IHNsdWd9KS5sZW5ndGggPj0gMSk7XG5cdH0sXG5cdGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRSZWNvcmQgPyB0aGlzLmN1cnJlbnRSZWNvcmQuZ2V0KCdzbHVnJykgOiB0aGlzLmNvbGxlY3Rpb24uZmlyc3QoKS5nZXQoJ3NsdWcnKTtcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciB0aGluZyA9IHRoaXMuZGVmYXVsdFNsdWcoKTtcblx0XHRyZXR1cm4gJy9wcm9qZWN0cy8nICsgdGhpcy5kZWZhdWx0U2x1ZygpO1xuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0ZWw6ICcuaGVhZGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5yZW5kZXIoe30pO1xuXHRcdHRoaXMuc2V0TGlzdGVuZXJzKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdoZWFkZXIgcmVuZGVyZWQnKTtcblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnc2hvd0NvbnRlbnQnLFxuXHRcdCdjbGljayAuc2hvdy1pbnRybyc6ICdzaG93SW50cm8nXG4gIH0sXG4gIHNob3dDb250ZW50OiBmdW5jdGlvbigpe1xuICBcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuICB9LFxuICBzaG93SW50cm86IGZ1bmN0aW9uKCl7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dJbnRybycpO1xuICB9LFxuICB1cGRhdGVVaVByZXY6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcdHZhciBwcmV2ID0gJy5nby1wcmV2JztcbiAgXHR2YXIgJHByZXYgPSB0aGlzLiRlbC5maW5kKHByZXYpO1xuICBcdGlmIChvcHRpb25zLmxpbmspIHtcbiAgXHRcdCRwcmV2LnJlbW92ZUNsYXNzKCdoaWRlJykuYXR0cignaHJlZicsIG9wdGlvbnMubGluayk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdCRwcmV2LmFkZENsYXNzKCdoaWRlJykuYXR0cignaHJlZicsICcjJyk7XG4gIFx0fVxuICB9LFxuICB1cGRhdGVVaU5leHQ6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcdHZhciBuZXh0ID0gJy5nby1uZXh0JztcbiAgXHR2YXIgJG5leHQgPSB0aGlzLiRlbC5maW5kKG5leHQpO1xuICBcdGlmIChvcHRpb25zLmxpbmspIHtcbiAgXHRcdCRuZXh0LnJlbW92ZUNsYXNzKCdoaWRlJykuYXR0cignaHJlZicsIG9wdGlvbnMubGluayk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdCRuZXh0LmFkZENsYXNzKCdoaWRlJykuYXR0cignaHJlZicsICcjJyk7XG4gIFx0fVxuICB9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTp1cGRhdGVQcmV2JywgdGhpcy51cGRhdGVVaVByZXYpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6dXBkYXRlTmV4dCcsIHRoaXMudXBkYXRlVWlOZXh0KTtcblx0fVxufSk7Il19
