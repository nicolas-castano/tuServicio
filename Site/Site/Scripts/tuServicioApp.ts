module tuServicioApp {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when('/forgot',
                {
                    templateUrl: '../../Templates/Account/resetPassword.html',
                }).when('/register',
                {
                    templateUrl: '../../Templates/Account/register.html',
                }).when('/login', {
                    templateUrl: '../../Templates/Account/login.html',
                    controller: loginController
                }).otherwise(
                {
                    templateUrl: '../../Templates/Account/login.html',
                    controller: loginController
                }
                );
        }
    }

    Config.$inject = ['$routeProvider'];
    export class loginController {
        username: string;
        password: string;
        constructor(private $http: ng.IHttpService) { }

        login() {
            this.$http.get('Authenticate', {});
        }
    }
}

var app = angular.module("tuServicioApp", ['ngRoute']);
app.config(tuServicioApp.Config);
app.controller('loginController', tuServicioApp.loginController);