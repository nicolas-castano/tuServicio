'use strict';
var authService;
(function (authService_1) {
    var authService = (function () {
        function authService($http) {
            this.$http = $http;
            this.isAuthenticated = false;
        }
        authService.prototype.login = function (userName, password) {
            var _this = this;
            this.$http.post('../../api/account/Authenticate', { Email: userName, Password: password })
                .success(function (response) {
                localStorage.setItem('jwt', '1');
                alert('bienvenido ' + response.Name);
                _this.isAuthenticated = true;
            });
        };
        authService.prototype.logoff = function () {
            this.isAuthenticated = false;
            localStorage.removeItem('jwt');
        };
        authService.prototype.userAuthenticated = function () {
            return this.isAuthenticated;
        };
        authService.prototype.fillAuthData = function () {
        };
        return authService;
    })();
    authService_1.authService = authService;
})(authService || (authService = {}));
//# sourceMappingURL=authservice.js.map