'use strict';

app.controller('AlertCtrl', function ($scope, alertService) {

    $scope.alerts = alertService.getAlerts();
    
    $scope.closeAlert = function (alert) {
        alertService.closeAlert(alert);
    };
    $scope.toggle = function($event) {
        var elem = angular.element($event.target).parent();
        var t = parseInt(elem.css('top'));
        if(t == 0) {
            elem.css('top','-204px');
        } else {
            elem.css('top','0');
        }
    };
});