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
                templateUrl: '../../Views/Account/login.html',
                controller: loginController
            }).otherwise({
                templateUrl: '../../Views/Home/home.html',
            });
        }
        return Config;
    })();
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
    })();
    tuServicioApp.loginController = loginController;
})(tuServicioApp || (tuServicioApp = {}));
var app = angular.module("tuServicioApp", ['ngRoute']);
app.config(tuServicioApp.Config);
app.controller('loginController', tuServicioApp.loginController);
//# sourceMappingURL=tuServicioApp.js.map