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
    }());
    loginApp.Config = Config;
    Config.$inject = ['$routeProvider'];
    var loginController = (function () {
        function loginController($http) {
            this.$http = $http;
        }
        loginController.prototype.login = function () {
            this.$http.put('../../api/account/Authenticate', { Email: this.username, Password: this.password });
        };
        return loginController;
    }());
    loginApp.loginController = loginController;
})(loginApp || (loginApp = {}));
var app = angular.module("loginApp", ['ngRoute']);
app.config(loginApp.Config);
app.controller('loginController', loginApp.loginController);
//# sourceMappingURL=loginApp.js.map