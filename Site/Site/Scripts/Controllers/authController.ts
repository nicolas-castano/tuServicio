'use strict';
module authModule {
    export interface IUserModel extends ng.IScope {
        Email: string;
        Password: string;
    }

    export interface IAudienceModel {
        ClientId: string;
        Base64Secret: string;
        Name: string;
    }

    export class authController {
        username: string;
        password: string;
        public constructor(private $http: ng.IHttpService) { }
        login() {
            this.$http.post<IAudienceModel>('api/account/Authenticate', { Email: this.username, Password: this.password })
                .success(response => {
                    localStorage.setItem('jwt', '1');
                    alert('bienvenido ' + response.Name);
                });
        }
    }
}
