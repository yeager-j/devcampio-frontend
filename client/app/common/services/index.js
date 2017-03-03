import angular from 'angular';
import ngCookies from 'angular-cookies';

import auth from './auth';

export default angular.module('app.services', [ngCookies])
    .service('auth', auth)
    .name;
