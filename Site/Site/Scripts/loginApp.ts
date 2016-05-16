module loginApp {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
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
        }
    }

    Config.$inject = ['$routeProvider'];
    export class loginController {
        username: string;
        password: string;
        constructor(private $http: ng.IHttpService) { }

        login() {
            alert('submit');
            this.$http.get('../../api/account/Authenticate', {});
        }
    }
}

var app = angular.module("loginApp", ['ngRoute']);
app.config(loginApp.Config);
app.controller('loginController', loginApp.loginController);