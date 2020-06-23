(function(jjApp){
	'use strict';

	//console.log(jjApp); Para probar si funciona
	function ViewModel(data){
		this.registros = data;
	}

	var viewModel = new ViewModel(jjApp.arreglo);

	//console.log(viewModel) Para ver contenido de ViewMode

	ko.applyBindings(viewModel);

}(window.jjApp))