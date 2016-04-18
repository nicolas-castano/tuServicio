module tuServicioApp {
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
app.controller('loginController', tuServicioApp.loginController);