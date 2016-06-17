

var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames)
	
	this.level = ko.computed(function() {
		if (this.clickCount() < 5) {
			return "Newborn";
		} else if (this.clickCount() < 20){
			return "Infant";
		} else if (this.clickCount() < 50){
			return "Baby";
		} else if (this.clickCount() < 100){
			return "Teen" ;
		} else if (this.clickcount()< 150){
			return "Adult";
		}
	}, this);
	

var ViewModel = function(){
	var self = this;
	this.currentCat = ko.observable( new Cat({
	clickCount: 0,
	name: 'Tabby',
	imgSrc: 'img/basset_hound.jpg',
	imgAttribution: 'https://www.flickr.com/photos/big',
	nicknames: ['Blorps', 'Chubs', 'Bunda'],
	}) );
	
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}	

ko.applyBindings(new ViewModel());