'use strict';
module tuServicioApp {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider, $location: ng.ILocationProvider) {
            /*$location.html5Mode({
                enabled: true,
                requireBase: false
            });*/
            $routeProvider.when('/forgot', {
                templateUrl: '../../Views/Account/resetPassword.html',
            }).when('/register',
                {
                    templateUrl: '../../Views/Account/register.html',
                }).when('/home',
                {
                    templateUrl: '../../Views/Home/home.html',
                }).when('/login',
                {
                    templateUrl: '../../Views/Account/login.html',
                    //     controller: authModule.authController
                }).otherwise(
                {
                    templateUrl: '../../Views/Home/home.html',
                }
                );
        }
    }
}

var app = angular.module("tuServicioApp", ['ngRoute']);
app.service('authService', authService.authService);
tuServicioApp.Config.$inject = ['$routeProvider', '$locationProvider'];
app.config(tuServicioApp.Config);
authService.authService.$inject = ['$http'];
authModule.authController.$inject = ['$scope', '$location', 'authService'];
app.controller('authController', authModule.authController);
