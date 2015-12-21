// since angular is popular, there's already a shim for it and we're importing that beast.
import angular from 'angular';


// making a class es6 style.
class MainController {
    constructor(){
        this.title= 'Changing this to see it change ok';
    }
}

// and assinging it to a controller which we'll access on the HTML page.
angular.module('app', [])
    .controller('MainController', MainController);