import angular from 'angular';

class MainController {
    constructor(){
        this.title= 'Changing this to see it change ok';
    }
}

angular.module('app', [])
    .controller('MainController', MainController);