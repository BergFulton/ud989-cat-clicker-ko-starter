var initialDogs = [
		{
            'name': 'Ralph',
            'imgSrc': 'img/basset_hound.jpg',
            'clickCount': 0,
            'nicknames': ['Chubs']
        }, {
            'name': 'Blorps & Co.',
            'imgSrc': 'img/two_basset_hounds.jpg',
            'clickCount': 0,
            'nicknames': ['Bunda']


        }, {
            'name': 'Walter',
            'imgSrc': 'img/walt_couch.jpg',
            'clickCount': 0,
            'nicknames': ['Baby']

        }, {
            'name': 'Shadow',
            'imgSrc': 'img/shadow.jpg',
            'clickCount': 0,
            'nicknames': ['DudeBro']

        }, {
            'name': 'Buddy',
            'imgSrc': 'img/buddy.jpg',
            'clickCount': 0,
            'nicknames': ['Budster']

        }];



var Dog = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
	
	this.level = ko.computed(function() {
		if (this.clickCount() < 5) {
			return "Newborn";
		} else if (this.clickCount() < 20){
			return "Infant";
		} else if (this.clickCount() < 50){
			return "Baby";
		} else if (this.clickCount() < 100){
			return "Teen" ;
		} else if (this.clickCount()< 150){
			return "Adult";
		}
	}, this)};
	

var ViewModel = function(){
	var self = this;

	this.dogList = ko.observableArray([]);

	initialDogs.forEach(function(dogItem){
		self.dogList.push( new Dog(dogItem) );
	})

	this.currentDog = ko.observable( this.dogList()[0]);

	this.setDog = function(clickedDog){
		self.currentDog(clickedDog);
	}
	
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}	

ko.applyBindings(new ViewModel());