import angular from 'angular';
import Home from './home/home';
import Login from './login/login';
import Register from './register/register';

let componentModule = angular.module('app.components', [
    Home,
    Login,
    Register
])

    .name;

export default componentModule;
