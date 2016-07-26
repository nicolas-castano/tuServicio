'use strict';
module authModule {
    export class authController {
        username: string;
        password: string;

        public constructor(private $scope: ng.IScope, private $location: ng.ILocationService, private $service: authService.authService) {
        }

        login() {
            // next step remove this call, call signin method
            this.$service.signUp(this.username, this.password);
            this.$location.url('/home');
        }

        logoff() {
            this.$service.logoff();
        }

        public userAuthenticated() {
            return this.$service.userAuthenticated();
        }

        public getUser() {
            return this.$service.userName;
        }
    }
}
