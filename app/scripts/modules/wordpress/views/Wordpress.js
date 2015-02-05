'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'modules/wordpress/wpStubs'
], function($, _, Backbone, stubs) {

	console.log('Wordpress View (Main)');
	return function (Module){

	// RESPONSABILITY NOTES:
	// Listens to view actions then triggers events accordingly.
	// Allows Collection to update current article.
	// Sets the current article on load depending on the scroll position (user might refresh and land 4 articles down the page)
	// Updates the control bar as current article changes.
	// Hides/Shows control bar when the in-article bar is on screen.

	var WordpressView = Backbone.View.extend({

		// stub: false,
		stub: true, // toggle for when offline

		template: JST[Module.nameSpace + '/main'],
		// template: Handlebars.templates['wpBlog.hbs'],
		loadingIndicators: ['#wp-container .load-next-button'],
		loadingClass: 'loading',
		// viewport: '#wp-container #wp-viewport',
		// bottomControlBar: '.blog-control-bar',
		// bottomControlBarShown: true,
		scrolling: false,
		readLine: 0.3,
		articleViews: [],
		// For determining whether or not to display any indication that there are earlier posts 
		// when the page is accessed at a random post
		firstPostRendered: false,

		initialize: function(options){
			options = (typeof options === 'undefined')? {} : options;
			
			var parentScope = this;
			console.log('wp view init');
			// this.fragment = Backbone.history.fragment;
			this.collection =  new Module.Extensions.ArticlesCollection();
			window.wp = this; // delete window access in prod

			this.listen();
			console.log('fetch all articles...');
			this.fetchAllArticles(function(){
				if (typeof options.slug != 'undefined') {
					console.log('with slug');
					// parentScope.render(options.slug);
					parentScope.render(options);
				} else {
					console.log('no slug');
					// parentScope.render();
					parentScope.render(options);
				};

			});	

		},
		render: function(options){
			var parentScope = this;

			var slug = options.slug;

			console.log("slug: ", slug);
			
			var collection = this.collection;

			var html = this.template();
			// this.$el.html(html);
			// App.Transitions.render({html: html});

			// this.controlBar = new Module.Extensions.ControlBarView;
			// this.sidePanel = new Module.Extensions.SidePanelView();
			// this.filters = this.sidePanel.model;
			// this.filters.on('change', function(){
			// 	console.log(this.changed)
			// 	console.log('filters changed');
			// 	parentScope.filterArticlesByTags(this.get('activeTags'));
			// }, parentScope.filters);

			// this.fetchAllArticles(function(){
				if (typeof slug != 'undefined') {
					// If slug is provided, find the post model with that slug and set the collection position to it's index.
					var matches = collection.where({slug: slug});
					var model = ( matches.length > 0) ? matches[0] : null;
					var index = collection.indexOf(model);
					console.log({slug: slug, index: index});
					collection.position = index;
				} else {
					collection.position = 0;
				};
				var article = parentScope.renderArticle();
				App.Transitions.render({html: html});
				
				Backbone.trigger('blog:articleSelected', article.model);
			// });
		},
		listen: function(){
	  	this.listenTo(Backbone, 'scroll:position', this.scrollHandler);
	  	this.listenTo(Backbone, 'blog:articleSelected', this.makeSelected);
	  	this.listenTo(Backbone, 'blog:articleDeselected', this.makeDeselected);
	  	// this.listenTo(Backbone, 'blog:enableTag', this.makeDeselected);
	  	// this.listenTo(Backbone, 'blog:disableTag', this.hideTag);
	  	this.listenTo(Backbone, 'blog:disableTag', this.hideTag);

	  },
	  events: {
	  	'click .load-next-button' : 'getNextArticle',
			'click .load-prev-button' : 'getPrevArticle',
	  	'click .wp-post__content a': '_blankLink',
	  	'click .like-button': 'likeArticle',
	  	'click #wp-post-above': 'getPrevArticle'
	  },
	  scrollHandler: function(response){
	  	var parentScope = this;
	  	var scrollLine = (window.scrollY + Math.floor(window.innerHeight * this.readLine));
	  	var tolerance = 10;
	  	$.each(this.articleViews, function(){
	  		var model = this.model;
	  		var $el = this.$el;
	  		var top = Math.floor($el.offset().top);
	  		var bottom = Math.floor(top + $el.height());

	  		if (top <= scrollLine + tolerance && bottom >= scrollLine -tolerance) {
	  			if (!this.model.get('selected')){
		  			Backbone.trigger('blog:articleSelected', model);
		  		}
	  		} else if (this.model.get('selected')) {
	  			Backbone.trigger('blog:articleDeselected', model);
	  		};
	  	});
	  	if (!this.activeView) { return false };
			if (this.activeView.$el.find('.blog-post-bar')[0].getClientRects()[0].bottom < 50) {
				Backbone.trigger('blog:hideControlBar');
			} else {
				Backbone.trigger('blog:showControlBar');
				
			};
	  },
  	// getNextArticle: function(){
  	// 	var parentScope = this,
  	// 			collection = this.collection,
  	// 			targetIndex = collection.position + 1;
  	// 			if (targetIndex > collection.filteredArticles.length -1){ console.log('target too high');return false};
  	// 			collection.newPosition = targetIndex;
  	// 			var article = parentScope.renderArticle();

  	// 			parentScope.scrollTo(article);

  	// },
  	// getPrevArticle: function(){
  	// 	var parentScope = this,
  	// 			collection = this.collection,
  	// 			targetIndex = collection.position -1;
  	// 			if (targetIndex < 0){ console.log('target too low');return false};
  	// 			collection.newPosition = targetIndex;
			// 		var article = parentScope.renderArticle();

			// 		parentScope.scrollTo(article);

  	// },
  	getNextArticle: function(){
  		var parentScope = this,
  				// collection = this.collection,
  				collection = this.collection,
  				targetIndex = collection.position + 1;
  				if (targetIndex > collection.length -1){ console.log('target too high');return false};
  				collection.newPosition = targetIndex;
  				var article = parentScope.renderArticle();

  				parentScope.scrollTo(article);

  	},
  	getPrevArticle: function(){
  		var parentScope = this,
  				// collection = this.collection,
  				collection = this.collection,
  				targetIndex = collection.position -1;
  				if (targetIndex < 0){ console.log('target too low');return false};
  				collection.newPosition = targetIndex;
					var article = parentScope.renderArticle();

					parentScope.scrollTo(article);

  	},
  	// filterArticlesByTags: function(tags){
  	// 	var parentScope = this;
  	// 	console.log('filtering,', tags);

  	// 	var debugCount = 0;

  	// 	if (typeof tags === 'undefined') {
  	// 		this.filteredCollection.add(this.collection.models);
  	// 		return;
  	// 	} else {
  	// 		var filteredList = [];
	  // 		this.collection.each(function(model){

	  // 			if (filteredList.indexOf(model) === -1) { 
	  // 				debugCount +=1;
	  				
	  // 				var modelTags = model.get('tags');

			// 			$.each(Object.keys(modelTags), function(){
			// 				console.log({modelTag: this, index: Object.keys(tags).indexOf(this)});
			// 				if (Object.keys(tags).indexOf(this) >= 0){
			// 					// console.log('pushing', model);
			// 					filteredList.push(model);
			// 				}	else {
			// 					console.log('not pushing', model);
			// 				}
			// 			});

	  // 			} else {
	  // 				console.log(model, filteredList.indexOf(model));
	  // 			}
			// 	});	
	  // 		console.log(debugCount);
			// 	Backbone.trigger('blog:changeFilter', filteredList);
  	// 		return filteredList;
  	// 	}
	
  	// },
  	fetchAllArticles: function(successCallback){
  		var parentScope = this;
  		var collection = this.collection;

			// Handling stubs if parentScope.stub is true;
			if (parentScope.stub) {
				var i,response = stubs;
				for (i = response.posts.length - 1; i >= 0; i--) {
					var record = response.posts[i];
					if (!collection.where({ID: record.ID}).length) {
						// console.log('adding', record);
						collection.add(record);
					} else {
						// console.log('NOT adding', record);
					}
				};
				// parentScope.filteredCollection.add(parentScope.collection.models);
				if (typeof successCallback === 'function') successCallback();
				// window.col = collection;
				// collection.each(function(model){
				// 	Backbone.trigger('blog:addNewTags', {tags: model.get('tags'), model: model});
				// });
				// console.log('before emitting tags', parentScope.filteredCollection);
				// collection.emitTags();

				parentScope.stopLoadingIndicators(collection);

			} else {
				// Get actual articles
				collection.fetch({
	  			remove: false,
					success: function(response){
						if (typeof successCallback === 'function') successCallback();

						parentScope.stopLoadingIndicators(collection);
					},
					error: function(){
						parentScope.stopLoadingIndicators(collection);
					}
				});
			};
  	},
  	renderArticle: function(){
  		var parentScope = this;
  		var collection = this.collection;
  		var model; 
  		var before = false;

  		console.log({newPos: collection.newPosition, oldPos: collection.position});

  		if (typeof collection.newPosition != 'undefined') {
  			before = (collection.position > collection.newPosition);
  			model = collection.at(collection.newPosition);
  		} else {
  			model = collection.at(collection.position);
  		};

  		var articleView = parentScope.hasSubView(model);
  		if (articleView) {
  			console.log('returning because of has sub view');
  			return articleView;
  		} else {
  			articleView = new Module.Extensions.ArticleView({model: model, before: before, selected: true});
  			parentScope.articleViews.push( articleView );
  		};
  		collection.position = collection.indexOf(model);
  		if (collection.position === 0 ) {
  			parentScope.firstPostRendered = true;
  		};

  		if (!parentScope.firstPostRendered) {
  			$('#wp-post-above').show();
  		} else {
  			$('#wp-post-above').hide();
  		};

			return articleView;
  	},
  	hasSubView: function(model){
  		for (var i = this.articleViews.length - 1; i >= 0; i--) {
  			var articleView = this.articleViews[i];
  			if (articleView.model === model) {
  				return articleView;
  			};
  		};
  		return false;
  	},
  	// hideArticle: function(){
  		
  	// },
  	scrollTo: function(view){
  		var $el = view.$el;
  		var offset = $el.offset();
  		if ($el.length <= 0) return;

			var atTop = offset.top < window.innerHeight;

			var notifactionHeight = document.getElementById('wp-post-above').scrollHeight;
			var targetPos = offset.top - 70;
			if (atTop) { targetPos = targetPos -notifactionHeight; };

			var speed = Math.abs((targetPos - window.scrollY)/3);
			// var speed = 400;

			$('body').animate({ scrollTop: targetPos }, speed);
  	},
	  hideBottomControlBar: function(){
	  	this.bottomControlBarShown = false;
	  },
	  showBottomControlBar: function(){
	  	this.bottomControlBarShown = true;
	  },
	  startLoadingIndicators: function(item){
  		item.isLoading = true;
  		var indicators = this.loadingIndicators.join(' , ');
    	$(indicators).addClass(this.loadingClass);
    	
  	},
  	stopLoadingIndicators: function(item){
  		item.isLoading = false;
  		var indicators = this.loadingIndicators.join(' , ');
  		$(indicators).removeClass(this.loadingClass);
  	},
	  likeArticle: function(){
	  	// var tags = (prompt('enter tags (comma seperated)')).replace(' ', '').split(',');
	  	// this.filterArticlesByTags(tags);
	  	// this.filteredCollection.set('activeTags', 2);

	  	// this.filteredCollection.each(function(model){console.log(model.get('slug'))})
	  	// console.log(this.filteredCollection);
	  },
	  makeSelected: function(model){
	  	model.set({selected: true});
	  	var collection = this.collection;
	  	collection.position = collection.indexOf(model);
	  	Backbone.history.navigate('/\/'+ 'blog' +'/'+model.get('slug'), {trigger: false, silent: true});
	  },
	  makeDeselected: function(model){
	  	model.set({selected: false});
	  },
	  _blankLink: function(e){
	  	e.preventDefault();
			window.open(this.href, '_blank');
	  }
	});

	return WordpressView;
	}
});
