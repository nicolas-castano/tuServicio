'use strict';
var authService;
(function (authService_1) {
    var authService = (function () {
        function authService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.isAuthenticated = false;
        }
        authService.prototype.logoff = function () {
            localStorage.removeItem('token');
            this.isAuthenticated = false;
        };
        authService.prototype.login = function (userName, password) {
            this.logoff();
            this.signIn(userName, password);
        };
        authService.prototype.signIn = function (userName, password) {
            var data = "grant_type=password&username=" + userName + "&password=" + password;
            var clientId = localStorage.getItem('client_id');
            if (clientId)
                data = data + "&client_id=" + clientId;
            var deferred = this.$q.defer();
            this.$http.post('../../token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
                success(function (response) {
                localStorage.setItem('token', response.access_token);
                deferred.resolve(response);
            }).error(function (err, status) {
                deferred.reject(err);
            });
            this.$http.get('../../api/account/Oki');
            return deferred.promise;
        };
        authService.prototype.signUp = function (userName, password) {
            var _this = this;
            this.$http.post('../../api/account/Authenticate', { Email: userName, Password: password })
                .success(function (response) {
                localStorage.setItem('client_id', response.ClientId);
            }).then(function (response) {
                _this.signIn(userName, password);
                _this.isAuthenticated = true;
                _this.userName = userName;
            }).catch(function (err) {
                _this.logoff();
            });
        };
        authService.prototype.userAuthenticated = function () {
            return this.isAuthenticated;
        };
        authService.prototype.fillAuthData = function () {
        };
        return authService;
    }());
    authService_1.authService = authService;
})(authService || (authService = {}));
//# sourceMappingURL=authservice.js.map