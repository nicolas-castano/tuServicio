var tuServicioApp;
(function (tuServicioApp) {
    var loginController = (function () {
        function loginController($http) {
            this.$http = $http;
        }
        loginController.prototype.login = function () {
            this.$http.get('LogTest', {});
        };
        return loginController;
    }());
    tuServicioApp.loginController = loginController;
})(tuServicioApp || (tuServicioApp = {}));
var app = angular.module("tuServicioApp", ['ngRoute']);
app.controller('loginController', tuServicioApp.loginController);
