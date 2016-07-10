'use strict';
var authModule;
(function (authModule) {
    var authController = (function () {
        function authController($scope, $location, $service) {
            this.$scope = $scope;
            this.$location = $location;
            this.$service = $service;
        }
        authController.prototype.login = function () {
            this.$service.login(this.username, this.password);
            this.$location.url('/home');
        };
        authController.prototype.logoff = function () {
            this.$service.logoff();
        };
        authController.prototype.userAuthenticated = function () {
            return this.$service.userAuthenticated();
        };
        return authController;
    }());
    authModule.authController = authController;
})(authModule || (authModule = {}));
//# sourceMappingURL=authController.js.map