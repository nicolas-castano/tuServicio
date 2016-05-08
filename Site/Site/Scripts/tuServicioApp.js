var tuServicioApp;
(function (tuServicioApp) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when('/forgot', {
                templateUrl: '../../Templates/Account/resetPassword.html',
            }).when('/register', {
                templateUrl: '../../Templates/Account/register.html',
            }).when('/login', {
                templateUrl: '../../Templates/Account/login.html',
                controller: loginController
            }).otherwise({
                templateUrl: '../../Templates/Account/login.html',
                controller: loginController
            });
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
            this.$http.get('Authenticate', {});
        };
        return loginController;
    }());
    tuServicioApp.loginController = loginController;
})(tuServicioApp || (tuServicioApp = {}));
var app = angular.module("tuServicioApp", ['ngRoute']);
app.config(tuServicioApp.Config);
app.controller('loginController', tuServicioApp.loginController);
//# sourceMappingURL=tuServicioApp.js.map