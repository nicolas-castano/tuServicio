'use strict';
module authService {
    export interface IAudienceModel {
        ClientId: string;
        Base64Secret: string;
        Name: string;
    }

    export class authService {

        private isAuthenticated: boolean;

        constructor(private $http: ng.IHttpService) {
            this.isAuthenticated = false;
        }

        login(userName: string, password: string) {
            this.$http.post<IAudienceModel>('../../api/account/Authenticate', { Email: userName, Password: password })
                .success(response => {
                    localStorage.setItem('jwt', '1');
                    alert('bienvenido ' + response.Name);
                    this.isAuthenticated = true;
                });
        }

        public logoff() {
            this.isAuthenticated = false;
            localStorage.removeItem('jwt');
        }

        public userAuthenticated() {
            return this.isAuthenticated;
        }

        fillAuthData() {
        }
    }
}