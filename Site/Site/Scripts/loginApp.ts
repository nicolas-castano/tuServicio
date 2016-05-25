/// <reference path="services/authservice.ts" />
'use strict';
module loginApp {
    export interface IUserModel extends ng.IScope {
        Email: string;
        Password: string;
    }

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

    export class loginController {
        username: string;
        password: string;
        constructor(private $http: ng.IHttpService) { }

        login() {
            this.$http.post<IUserModel>('../../api/account/Authenticate', { Email: this.username, Password: this.password })
                .success(response => {
                    // save registration
                    //this.$window.location.href = '/index.html';
                    alert('hola miguel, fui y vine');
                });
        }
    }
}

var app = angular.module("loginApp", ['ngRoute']);
loginApp.Config.$inject = ['$routeProvider'];
app.config(loginApp.Config);
app.controller('loginController', loginApp.loginController);