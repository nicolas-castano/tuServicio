/// <reference path="services/authservice.ts" />
'use strict';
var loginApp;
(function (loginApp) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when('/forgot', {
                templateUrl: '../../Views/Account/resetPassword.html',
            }).when('/register', {
                templateUrl: '../../Views/Account/register.html',
            }).when('/login', {
                templateUrl: '../../Views/Account/login.html',
                controller: loginController
            }).otherwise({
                templateUrl: '../../Views/Account/login.html',
                controller: loginController
            });
        }
        return Config;
    })();
    loginApp.Config = Config;
    var loginController = (function () {
        function loginController($http) {
            this.$http = $http;
        }
        loginController.prototype.login = function () {
            this.$http.post('../../api/account/Authenticate', { Email: this.username, Password: this.password })
                .success(function (response) {
                // save registration
                //this.$window.location.href = '/index.html';
                alert('hola miguel, fui y vine');
            });
        };
        return loginController;
    })();
    loginApp.loginController = loginController;
})(loginApp || (loginApp = {}));
var app = angular.module("loginApp", ['ngRoute']);
loginApp.Config.$inject = ['$routeProvider'];
app.config(loginApp.Config);
app.controller('loginController', loginApp.loginController);
//# sourceMappingURL=loginApp.js.map