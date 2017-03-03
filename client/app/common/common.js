import angular from 'angular';
import Navbar from './navbar/navbar';
import Services from './services';

export default angular.module('app.common', [Navbar, Services]).name;
