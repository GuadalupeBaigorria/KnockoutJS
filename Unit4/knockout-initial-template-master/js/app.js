(function(){
	'use strict';

	function AppViewModel(){
		this.nombre = ko.observable("Guadalupe Baigorria");
		this.instrumentoFavorito= ko.observable('Piano');
		this.banda = ko.observable('<h1>Nirvana</h1>');
	}

	ko.applyBindings(new AppViewModel());
}());