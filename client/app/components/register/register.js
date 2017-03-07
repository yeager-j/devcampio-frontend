import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

let registerModule = angular.module('register', [uiRouter])
    .component('register', registerComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('register', {
                url: '/register',
                component: 'register'
            });
    })
    .name;

export default registerModule;
