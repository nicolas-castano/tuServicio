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
            // next step remove this call, call signin method
            this.$service.signUp(this.username, this.password);
            this.$location.url('/home');
        };
        authController.prototype.logoff = function () {
            this.$service.logoff();
        };
        authController.prototype.userAuthenticated = function () {
            return this.$service.userAuthenticated();
        };
        authController.prototype.getUser = function () {
            return this.$service.userName;
        };
        return authController;
    })();
    authModule.authController = authController;
})(authModule || (authModule = {}));
//# sourceMappingURL=authController.js.map