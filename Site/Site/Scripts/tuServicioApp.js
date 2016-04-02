var OneStopTechVidsApp;
(function (OneStopTechVidsApp) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when("/list", { templateUrl: "App/Templates/VideoList.html", controller: "TechVidsListCtrl" })
                .when("/list/:id", { templateUrl: "App/Templates/VideoList.html", controller: "TechVidsListCtrl" })
                .when("/add", { templateUrl: "App/Templates/AddVideo.html", controller: "AddTechVideoCtrl" })
                .when("/edit/:id", { templateUrl: "App/Templates/EditVideo.html", controller: "EditTechVideoCtrl" })
                .otherwise({ redirectTo: '/list' });
        }
        return Config;
    })();
    OneStopTechVidsApp.Config = Config;
    Config.$inject = ['$routeProvider'];
    var TechVidsCategoryCtrl = (function () {
        function TechVidsCategoryCtrl() {
        }
        return TechVidsCategoryCtrl;
    })();
    OneStopTechVidsApp.TechVidsCategoryCtrl = TechVidsCategoryCtrl;
    TechVidsCategoryCtrl.$inject = ['$scope', 'techVidsDataSvc'];
    var TechVidsListCtrl = (function () {
        function TechVidsListCtrl() {
        }
        return TechVidsListCtrl;
    })();
    OneStopTechVidsApp.TechVidsListCtrl = TechVidsListCtrl;
    TechVidsListCtrl.$inject = ['$scope', '$routeParams', 'techVidsDataSvc'];
    var EditTechVideoCtrl = (function () {
        function EditTechVideoCtrl() {
        }
        return EditTechVideoCtrl;
    })();
    OneStopTechVidsApp.EditTechVideoCtrl = EditTechVideoCtrl;
    EditTechVideoCtrl.$inject = ['$scope', '$routeParams', '$window', 'techVidsDataSvc'];
    var AddVideoCtrl = (function () {
        function AddVideoCtrl() {
        }
        return AddVideoCtrl;
    })();
    OneStopTechVidsApp.AddVideoCtrl = AddVideoCtrl;
    AddVideoCtrl.$inject = ['$scope', '$window', 'techVidsDataSvc'];
    var UniqueVideoTitle = (function () {
        function UniqueVideoTitle() {
        }
        return UniqueVideoTitle;
    })();
    OneStopTechVidsApp.UniqueVideoTitle = UniqueVideoTitle;
    var app = angular.module("tuServicioApp", ['ngRoute']);
})(OneStopTechVidsApp || (OneStopTechVidsApp = {}));
