/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />

module Extensions {

}

module tuServicio {
    export class loginController {
        name: string;
        password: string;
        constructor() { }

        login() {
            alert('aa');
            //console.log('Login was clicked, username is ${this.name} and password is ${this.password}');
        }
    }

    var app = angular.module("tuServicioApp", ['ngRoute']);
    app.controller('loginController', tuServicio.loginController);
}