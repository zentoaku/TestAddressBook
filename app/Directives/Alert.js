app.directive("alertDir", function(){
    return {
        templateUrl: 'views/directives/alert.html',
        restrict: 'E',
        controller: 'AlertCtrl'
    };
});