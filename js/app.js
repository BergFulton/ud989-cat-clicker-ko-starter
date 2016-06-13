var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/basset_hound.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

	this.level = ko.computed(function() {
		if (this.clickCount() < 5) {
			return "Newborn";
		} else if (this.clickCount() < 20){
			return "Infant";
		} else if (this.clickCount() < 50){
			return "Baby";
		} else if (this.clickCount() < 100){
			return "Teen" ;
		}
	}, this)
	
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());