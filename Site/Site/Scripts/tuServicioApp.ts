﻿module tuServicioApp {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
           
        }
    }

    Config.$inject = ['$routeProvider'];
    export class loginController {
        username: string;
        password: string;
        constructor(private $http: ng.IHttpService) { }

        login() {
            this.$http.get('LogTest', {});
        }
    }
}

var app = angular.module("tuServicioApp", ['ngRoute']);
app.config(tuServicioApp.Config);
app.controller('loginController', tuServicioApp.loginController);