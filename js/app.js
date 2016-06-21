// var initialDogs = [
// 		{
//             'name': 'Ralph',
//             'imgPath': 'img/basset_hound.jpg',
//             'clickCount': 0
//         }, {
//             'name': 'Blorps & Co.',
//             'imgPath': 'img/two_basset_hounds.jpg',
//             'clickCount': 0

//         }, {
//             'name': 'Walter',
//             'imgPath': 'img/walt_couch.jpg',
//             'clickCount': 0
//         }, {
//             'name': 'Shadow',
//             'imgPath': 'img/shadow.jpg',
//             'clickCount': 0
//         }, {
//             'name': 'Buddy',
//             'imgPath': 'img/buddy.jpg',
//             'clickCount': 0
//         }]
//     };



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
	this.currentDog = ko.observable( new Dog({
	clickCount: 0,
	name: 'Petey',
	imgSrc: 'img/basset_hound.jpg',
	imgAttribution: 'https://www.flickr.com/photos/big',
	nicknames: ['Blorps', 'Chubs', 'Bunda'],
	}) );
	
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}	

ko.applyBindings(new ViewModel());