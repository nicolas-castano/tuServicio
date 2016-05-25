'use strict';
var authModule;
(function (authModule) {
    var authController = (function () {
        function authController($http) {
            this.$http = $http;
        }
        authController.prototype.login = function () {
            this.$http.post('api/account/Authenticate', { Email: this.username, Password: this.password })
                .success(function (response) {
                localStorage.setItem('jwt', '1');
                alert('bienvenido ' + response.Name);
            });
        };
        return authController;
    }());
    authModule.authController = authController;
})(authModule || (authModule = {}));
//# sourceMappingURL=authController.js.map