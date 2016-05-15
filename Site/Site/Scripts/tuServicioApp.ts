module tuServicioApp {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when('/forgot',
                {
                    templateUrl: '../../Views/Account/resetPassword.html',
                }).when('/register',
                {
                    templateUrl: '../../Views/Account/register.html',
                }).when('/home',
                {
                    templateUrl: '../../Views/Home/home.html',
                }).when('/login',
                {
                    templateUrl: '../../Views/Account/login.html',
                    controller: loginController
                }).otherwise(
                {
                    templateUrl: 'Views/Home/home.html',
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