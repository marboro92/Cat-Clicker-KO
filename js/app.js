var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());	


	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
	
}

var Cat = function() {
		//define model data here for now
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.udacity.com/course/viewer#!/c-ud989-nd/l-3406489055/m-3394860566');
	this.nicknames = ko.observableArray(['Tabtab', 'T-bone', 'Mr.T']);
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

//apply KO bindings so our function will be run

ko.applyBindings(new ViewModel());