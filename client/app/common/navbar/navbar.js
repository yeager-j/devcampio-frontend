import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import services from '../services';

let navbarModule = angular.module('navbar', [uiRouter, services])
    .component('navbar', navbarComponent)
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
    .name;

export default navbarModule;
