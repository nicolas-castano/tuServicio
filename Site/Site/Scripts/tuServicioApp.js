var tuServicioApp;
(function (tuServicioApp) {
    var loginController = (function () {
        function loginController() {
        }
        loginController.prototype.login = function () {
            alert('hola miguel desde typescript usuario ' + this.username + ' password ' + this.password);
        };
        return loginController;
    }());
    tuServicioApp.loginController = loginController;
})(tuServicioApp || (tuServicioApp = {}));
var app = angular.module("tuServicioApp", ['ngRoute']);
app.controller('loginController', tuServicioApp.loginController);
//# sourceMappingURL=tuServicioApp.js.map