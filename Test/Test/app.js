var LoginModule;
(function (LoginModule) {
    var LoginController = (function () {
        function LoginController() {
        }
        LoginController.prototype.login = function () {
            alert('hola miguel');
        };
        return LoginController;
    }());
    LoginModule.LoginController = LoginController;
})(LoginModule || (LoginModule = {}));
//# sourceMappingURL=app.js.map