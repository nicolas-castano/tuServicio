var tuServicioApp;
(function (tuServicioApp) {
    var Config = (function () {
        function Config($routeProvider) {
        }
        return Config;
    }());
    tuServicioApp.Config = Config;
    Config.$inject = ['$routeProvider'];
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
app.config(tuServicioApp.Config);
app.controller('loginController', tuServicioApp.loginController);
//# sourceMappingURL=tuServicioApp.js.map