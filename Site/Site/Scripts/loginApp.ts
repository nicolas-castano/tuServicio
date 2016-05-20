module loginApp {
    export interface IUserModel extends ng.IScope {
        Email: string;
        Password: string;
    }

    export class AuthFactory {
       
    }

    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider, $httpProvider: ng.IHttpProvider) {
            $routeProvider.when('/forgot',
                {
                    templateUrl: '../../Views/Account/resetPassword.html',
                }).when('/register',
                {
                    templateUrl: '../../Views/Account/register.html',
                }).when('/login',
                {
                    templateUrl: '../../Views/Account/login.html',
                    controller: loginController
                }).otherwise(
                {
                    templateUrl: '../../Views/Account/login.html',
                    controller: loginController
                }
                );

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
    }

    Config.$inject = ['$routeProvider', '$httpProvider'];
    export class loginController {
        username: string;
        password: string;
        constructor(private $http: ng.IHttpService) { }

        login() {
            this.$http.post<IUserModel>('../../api/account/Authenticate', { Email: this.username, Password: this.password });
        }
    }
}

var app = angular.module("loginApp", ['ngRoute']);
app.config(loginApp.Config);
app.factory(loginApp.AuthFactory);
app.controller('loginController', loginApp.loginController);