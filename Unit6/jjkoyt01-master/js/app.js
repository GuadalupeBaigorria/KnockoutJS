(function(){
    'use strict';

    function ViewModel(){
        var self=this;

        self.nombre=ko.observable();
        self.aceptasTerminosCondiciones=ko.observable(false);

    }

    ko.applyBindings(new ViewModel());

}());