'use strict';
var authModule;
(function (authModule) {
    var AuthInterceptor = (function () {
        function AuthInterceptor($q) {
            this.$q = $q;
        }
        AuthInterceptor.Factory = function ($q) {
            return new AuthInterceptor($q);
        };
        AuthInterceptor.prototype.request = function (config) {
            config.headers = config.headers || {};
            var token = localStorage.getItem('token');
            if (token)
                config.headers["Authorization"] = 'Bearer ' + token;
            return config;
        };
        return AuthInterceptor;
    }());
    authModule.AuthInterceptor = AuthInterceptor;
})(authModule || (authModule = {}));
//# sourceMappingURL=AuthInterceptor.js.map