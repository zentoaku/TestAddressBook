var app = angular.module("TestAddressBook", ['ngRoute', 'ngStorage', 'puigcerber.countryPicker', 'ngMessages'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/list.html',
                controller: 'UserListCtrl'
            }).
            when('/add', {
                templateUrl: 'views/add.html',
                controller: 'UserAddCtrl'
            }).
            when('/edit/:userId', {
                templateUrl: 'views/edit.html',
                controller: 'UserEditCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

app.run(function ($rootScope, $location, $localStorage) {
    
});