'use strict';
module authModule {
    export class AuthInterceptor implements angular.IHttpInterceptor {

        static Factory($q: ng.IQService): AuthInterceptor {
            return new AuthInterceptor($q);
        }

        constructor(private $q: ng.IQService) {
        }

        public request(config: ng.IRequestConfig) {
            config.headers = config.headers || {};
            var token = localStorage.getItem('token');
            if (token)
                config.headers["Authorization"] = 'Bearer ' + token;

            return config;
        }
    }
}