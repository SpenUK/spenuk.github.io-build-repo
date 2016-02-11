module.exports = [
	{
		ID: 7,
		title: 'Burberry web app',
		slug: 'burberry',
		stack: {
			js: ['Backbone']
		},
		content: '<img src="assets/images/projects/burberry.png" style="width:100%;"><p>I\'m currently working for Burberry on their mobile team. Recently, I\'ve had the privilege to work on some interesting new features such as the 2015 Xmas seasonal feature \'The Book of Gifts\' and the more permanent \'Find in Store\'.</p><p> This has given me my first chance to get to grips with TDD at a large scale and has been the first large SPA that I\'ve worked on - so it\'s been a huge - but welcomed - challenge.</p>'
	}, {
		ID: 6,
		title: 'Greenvale Potatopals',
		slug: 'greenvale-potatopals',
		stack: {
			js: ['jQuery'],
			php: ['SilverStripe']
		},
		content: '<img src="assets/images/projects/greenvale.png" style="width:100%;"><p></p><p>GreenVale Potatoes were running a promotion where customers buying their products could enter on-pack codes to redeem and collect points... </p> <p>This was quite a fun project to work on. As well as it having a fun cartoony style it presented a few simple but interesting challenges to overcome.</p> <p>The main challenge was the handling of the token redemptions, there were a number of different ways for a user to earn these tokens, through different on-pack and magazine codes and through facebook friend referals - certain sources were repeatable, others were not. Another challenge was to integrate a third party API that handled the validation of the promo codes - which turned out to have a couple of bugs!</p> '
	}, {
		ID: 5,
		title: 'Whyte & Mackay',
		slug: 'whyte-and-mackay',
		stack: {
			js: ['jQuery', 'Grunt', 'Skrollr']
		},
		content: '<img src="assets/images/projects/whyte-and-mackay.png" style="width:100%;"><p>The biggest challenge with this website was handling parallax scrolling gracefully, taking in to account the limitations with older browsers and devices. After evaluating a number of libraries that aim to solve this problem we decided to use skrollr.js. </p><p> Skrollr.js allowed us to pull off some interesting visuals that our designers had conceptualized as we could either play through an effect in-line with the user\'s scroll position or just trigger an event at a particular point.</p>'
	}, {
		ID: 4,
		title: 'Nintendo Customer Service',
		slug: 'nintendo-customer-service',
		stack: {
			js: ['jQuery'],
			php: ['SilverStripe']
		},
		content: '<img src="assets/images/projects/nintendo-customer-service.png" style="width:100%;"><p>I joined this project shortly after it had been started and immediately realised that there was a serious lack in structure with the JS. The biggest part of the service offered on this page was the product repair form, it was gigantic, with many different sections making calls to multiple API end-points. I know that things would soon get out of hand if we followed the previously laid out pattern so I refactored the existing code into a hand full of singleton objects that each contained code relevant only to that section.</p><p>Looking back, I\'m quite sure that the code could have been organised better, but the refactor made further development and maintenance so much easier.</p>'
	}, {
		ID: 3,
		title: 'River Island Web Store',
		slug: 'river-island',
		stack: {
			js: ['jQuery'],
			'c#': ['Razor', '.net']
		},
		apis: ['Google Maps'],
		content: '<img src="assets/images/projects/river-island-checkout.png" style="width:100%;"><p>River Island was my first employer since I made my career change to web development and it reaffirmed my decision to take such a leap. The project was a lot of fun to work on for the most part and I managed to find time between bug fixes and building new features to experiment with some of my own ideas. In my final couple of months at RI I was tasked with optimising our google maps usage as certain areas of the site were consuming a much higher number of api credits than there should have been.</p><p>The biggest problem area turned out to be the checkout as each section of the checkout would use a credit when loaded.</p><p>My solution was to pull the whole checkout process in to a single page so that the call to the Maps API would only be made once, hiding and showing the map whenever needed. I left shortly after this version of the checkout was deployed but the early stats showed great improvement!</p>'
	}, {
		ID: 2,
		title: 'RPG adventure game',
		slug: 'rpg-adventure-game',
		stack: {
			js: ['jQuery'],
			ruby: ['Ruby on Rails']
		},
		content: '<img src="assets/images/projects/rpg.png" style="width:100%;"><p>For my final project at Bitmaker Labs I decided to build an RPG style game.</p><p>This turned out to be quite an ambitious project given the 2 week time frame but I managed to get at least a semi-working version built.</p><p>The gameplay basically involed taking on either NPC\'s or other players and \'battling\' them using a turn based system (think Final Fantasy, Pokemon etc.). The player gains experience points through these battles and levels up to gain new skills.</p><p>There wasn\'t much front-end logic involved in this game like you might expect - I wanted every move made by the player to be validated on the server side so each move made an AJAX request. I did this to avoid the possibility of players gaining an unfair advantage by abusing the front-end code. There was a lot of room for improvement here as it was rushed and I was pretty inexperienced back then! I still plan on picking this project back up some day - we\'ll see!</p>'
	}, {
		ID: 1,
		title: 'Surf Tracking App Concept',
		slug: 'surf-tracking-app-concept',
		stack: {
			js: ['jQuery'],
			ruby: ['Ruby on Rails']
		},
		content: '<img src="assets/images/projects/surfappconcept.png" style="width:100%;"><p>During my time studying with Bitmaker Labs myself and two of my coursemates entered the Toronto leg of Startup Weekend. I\'d had an idea a couple of years prior while still at university - to use a smart phone or device to track the GPS and orientation of a surfboard during a surf session, giving data points that would allow the surfer to analyse their performance when they were back on dry land. Together, we tweaked this idea and prototyped it over the course of the weekend, making it into more of a social/competive app for surfers to compare their key stats. It was a great experience and something I\'d love to do again in the future.</p>'
	}
];