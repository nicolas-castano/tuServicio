/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var tuServicio;
(function (tuServicio) {
    var loginController = (function () {
        function loginController() {
        }
        loginController.prototype.login = function () {
            alert('aa');
            //console.log('Login was clicked, username is ${this.name} and password is ${this.password}');
        };
        return loginController;
    }());
    tuServicio.loginController = loginController;
    var app = angular.module("tuServicioApp", ['ngRoute']);
    app.controller('loginController', tuServicio.loginController);
})(tuServicio || (tuServicio = {}));
