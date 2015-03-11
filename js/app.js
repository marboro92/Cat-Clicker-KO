var Cat = function(data) {

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();
		if (clicks < 10 ) {
			level = 'Newborn';
		} else if (clicks < 25){
			level = 'Kitten';
		} else {
			level = 'Cat';
		};
		return level;
	}, this);
}


var ViewModel = function() {
	//keep outer this, less confusinsing, sometimes that is used
	var self= this;
	//creat all sorts of cats
	this.currentCat = ko.observable(new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.udacity.com/course/viewer#!/c-ud989-nd/l-3406489055/m-3394860566',
		nicknames: ['Tabtab', 'T-bone', 'Mr.T']
	}) );	


	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
}
//add data so we can add new cat data


//apply KO bindings so our function will be run

ko.applyBindings(new ViewModel());