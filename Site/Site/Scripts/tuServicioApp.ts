module Extensions {

}

module OneStopTechVidsApp {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/list", { templateUrl: "App/Templates/VideoList.html", controller: "TechVidsListCtrl" })
                .when("/list/:id", { templateUrl: "App/Templates/VideoList.html", controller: "TechVidsListCtrl" })
                .when("/add", { templateUrl: "App/Templates/AddVideo.html", controller: "AddTechVideoCtrl" })
                .when("/edit/:id", { templateUrl: "App/Templates/EditVideo.html", controller: "EditTechVideoCtrl" })
                .otherwise({ redirectTo: '/list' });
        }
    }
    Config.$inject = ['$routeProvider'];

    export class TechVidsCategoryCtrl {

    }
    TechVidsCategoryCtrl.$inject = ['$scope', 'techVidsDataSvc'];

    export class TechVidsListCtrl {
    }

    TechVidsListCtrl.$inject = ['$scope', '$routeParams', 'techVidsDataSvc'];

    export class EditTechVideoCtrl {

    }
    EditTechVideoCtrl.$inject = ['$scope', '$routeParams', '$window', 'techVidsDataSvc'];

    export class AddVideoCtrl {
    }

    AddVideoCtrl.$inject = ['$scope', '$window', 'techVidsDataSvc'];

    export class UniqueVideoTitle {
    }

    var app = angular.module("tuServicioApp", ['ngRoute']);
}