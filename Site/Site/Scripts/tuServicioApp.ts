module tuServicioApp {
    export class loginController {
        username: string;
        password: string;
        constructor() { }

        login() {
            alert('hola miguel desde typescript usuario ' + this.username + ' password ' + this.password);
        }
    }
}

var app = angular.module("tuServicioApp", ['ngRoute']);
app.controller('loginController', tuServicioApp.loginController);