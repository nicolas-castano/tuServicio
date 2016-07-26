'use strict';
module authService {
    export interface IAudienceModel {
        ClientId: string;
        Base64Secret: string;
        Name: string;
    }

    export interface IToken {
        access_token: string;
    }

    export class authService {

        private isAuthenticated: boolean;
        public userName: string;
        private userId: string;

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            this.isAuthenticated = false;
        }

        public logoff() {
            localStorage.removeItem('token');
            this.isAuthenticated = false;
        }

        public login(userName: string, password: string) {
            this.logoff();
            this.signIn(userName, password);
        }

        private signIn(userName: string, password: string) {
            var data = "grant_type=password&username=" + userName + "&password=" + password;
            var clientId = localStorage.getItem('client_id');
            if (clientId)
                data = data + "&client_id=" + clientId;

            var deferred = this.$q.defer();
            this.$http.post<IToken>('token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
                success(function (response) {
                    localStorage.setItem('token', response.access_token);
                    //this.isAuthenticated = true;
                    //this.userName = userName;
                    deferred.resolve(response);
                }).error(function (err, status) {
                    //this.logoff();
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        public signUp(userName: string, password: string) {
            this.$http.post<IAudienceModel>('api/account/Authenticate', { Email: userName, Password: password })
                .success(response => {
                    localStorage.setItem('client_id', response.ClientId);
                    // next step remove this call
                    //this.signIn(userName, password);
                }).then(response => {
                    this.signIn(userName, password);
                    this.isAuthenticated = true;
                    this.userName = userName;
                }).catch(err => {
                    this.logoff();
                });
        }

        public userAuthenticated() {
            return this.isAuthenticated;
        }

        public fillAuthData() {
        }
    }
}