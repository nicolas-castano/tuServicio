var loginApp;
(function (loginApp) {
    var AuthFactory = (function () {
        function AuthFactory() {
        }
        return AuthFactory;
    }());
    loginApp.AuthFactory = AuthFactory;
    var Config = (function () {
        function Config($routeProvider, $httpProvider) {
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
            $httpProvider.interceptors.push(function ($q, $rootScope, $window, $location) {
                return {
                    request: function (config) {
                        return config;
                    },
                    requestError: function (rejection) {
                        return $q.reject(rejection);
                    },
                    response: function (response) {
                        if (response.status == "401") {
                            $location.path('/login');
                        }
                        return response;
                    },
                    responseError: function (rejection) {
                        if (rejection.status == "401") {
                            $location.path('/login');
                        }
                        return $q.reject(rejection);
                    }
                };
            });
        }
        return Config;
    }());
    loginApp.Config = Config;
    Config.$inject = ['$routeProvider', '$httpProvider'];
    var loginController = (function () {
        function loginController($http) {
            this.$http = $http;
        }
        loginController.prototype.login = function () {
            this.$http.post('../../api/account/Authenticate', { Email: this.username, Password: this.password });
        };
        return loginController;
    }());
    loginApp.loginController = loginController;
})(loginApp || (loginApp = {}));
var app = angular.module("loginApp", ['ngRoute']);
app.config(loginApp.Config);
app.factory(loginApp.AuthFactory);
app.controller('loginController', loginApp.loginController);
//# sourceMappingURL=loginApp.js.map