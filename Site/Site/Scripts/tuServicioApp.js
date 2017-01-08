'use strict';
var tuServicioApp;
(function (tuServicioApp) {
    var Config = (function () {
        function Config($routeProvider, $location, $httpProvider, $q) {
            /*$location.html5Mode({
                enabled: true,
                requireBase: false
            });*/
            $routeProvider.when('/forgot', {
                templateUrl: '../../Views/Account/resetPassword.html',
            }).when('/register', {
                templateUrl: '../../Views/Account/register.html',
            }).when('/home', {
                templateUrl: '../../Views/Home/home.html',
            }).when('/login', {
                templateUrl: '../../Views/Account/login.html',
            }).otherwise({
                templateUrl: '../../Views/Home/home.html',
            });
            $httpProvider.interceptors.push(authModule.AuthInterceptor.Factory);
        }
        return Config;
    }());
    tuServicioApp.Config = Config;
})(tuServicioApp || (tuServicioApp = {}));
var app = angular.module("tuServicioApp", ['ngRoute']);
app.service('authService', authService.authService);
tuServicioApp.Config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
app.config(tuServicioApp.Config);
authService.authService.$inject = ['$http', '$q'];
authModule.authController.$inject = ['$scope', '$location', 'authService'];
app.controller('authController', authModule.authController);
//# sourceMappingURL=tuServicioApp.js.map