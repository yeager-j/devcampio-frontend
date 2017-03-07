import angular from 'angular';
import ngCookies from 'angular-cookies';

import auth from './auth';
import validate from './validate';

export default angular.module('app.services', [ngCookies])
    .service('auth', auth)
    .service('validation', validate)
    .name;
