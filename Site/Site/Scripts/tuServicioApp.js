'use strict';
var tuServicioApp;
(function (tuServicioApp) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when('/forgot', {
                templateUrl: '../../Views/Account/resetPassword.html',
            }).when('/register', {
                templateUrl: '../../Views/Account/register.html',
            }).when('/home', {
                templateUrl: '../../Views/Home/home.html',
            }).when('/login', {
                templateUrl: 'Views/Account/login.html',
                controller: authModule.authController
            }).otherwise({
                templateUrl: 'Views/Home/home.html',
            });
        }
        return Config;
    }());
    tuServicioApp.Config = Config;
})(tuServicioApp || (tuServicioApp = {}));
var app = angular.module("tuServicioApp", ['ngRoute']);
tuServicioApp.Config.$inject = ['$routeProvider'];
authModule.authController.$inject = ['$http'];
app.config(tuServicioApp.Config);
app.controller('authController', authModule.authController);
//app.run(authModule.authController. 
//# sourceMappingURL=tuServicioApp.js.map