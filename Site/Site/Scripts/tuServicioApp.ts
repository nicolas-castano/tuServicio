'use strict';
module tuServicioApp {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider, $location: ng.ILocationProvider, $httpProvider: ng.IHttpProvider, $q: ng.IQService) {
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
                }).otherwise(
                {
                    templateUrl: '../../Views/Home/home.html',
                }
                );

            $httpProvider.interceptors.push(authModule.AuthInterceptor.Factory);
        }
    }
}

var app = angular.module("tuServicioApp", ['ngRoute']);
app.service('authService', authService.authService);
tuServicioApp.Config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
app.config(tuServicioApp.Config);
authService.authService.$inject = ['$http', '$q'];
authModule.authController.$inject = ['$scope', '$location', 'authService'];
app.controller('authController', authModule.authController);

//-------Funcion para activar y desactivar botones--------
$(".interactive-button").click(function () {
    $(this).toggleClass('active-button');
});

//-------Funcion para mostrar tab activa--------
var clickedTab = $(".tab > .active-button");

$(".tab > a").click(function () {
    $(".tab > a").removeClass("active-button");
    $(this).addClass("active-button");
});