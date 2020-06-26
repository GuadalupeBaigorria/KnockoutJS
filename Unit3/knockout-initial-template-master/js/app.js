(function(){
	'use strict';
	function AppViewModel(){
		this.nombre = "Guadalupe Baigorria";
		this.instrumentoFavorito= "Guitarra";
		this.banda = '<h1>The Beatles</h1>';

	}
	ko.applyBindings(new AppViewModel());

}())