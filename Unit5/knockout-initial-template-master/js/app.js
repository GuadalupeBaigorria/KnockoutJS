(function(){
	'use strict';

	function ViewModel(){
		var self= this;
		self.nombre = ko.observable();
		self.aceptarTerminosCondiciones= ko.observable(true);
	}

	function dummy(){
		self.nombre("asdad");
	}


	ko.applyBindings(new ViewModel());
}());