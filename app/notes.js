goNext: function () {
	var nextModel = this.collection.at(this.collection.position + 3);
	console.log(nextModel);
	if (nextModel) {
		this.collection.setCurrentRecord({
			model: nextModel
		});
		this.renderOne(nextModel);
	}
},

goPrev: function () {
	var prevModel = this.collection.at(this.collection.position -1),
		currentScrollTop = this.$el.parent().scrollTop();

	if (prevModel) {
		this.collection.setCurrentRecord({
			model: prevModel
		});

		var view = this.renderOne(prevModel, {prepend: true});
		this.$el.parent().scrollTop(view.$el.height() + currentScrollTop);
	}
},