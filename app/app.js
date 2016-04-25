var app = angular.module("TestAddressBook", ['ngRoute', 'restangular', 'ngMessages', 'ngStorage'])
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
        //check browser support
        if(window.history && window.history.pushState){
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">
            // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase
            // if you don't wish to set base URL then use this
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }
    }]);

app.run(function ($rootScope, $location, Restangular, $localStorage) {

    Restangular.addResponseInterceptor(function(data, operation, what, url, response){
        if(~['post','put','remove'].indexOf(operation)) {
            ServiceCache.removeAll();
        }
        if(response.status === 200 && data.code === 0 && ~['post','put','remove'].indexOf(operation) && what !== 'login') {
            alertService.add(data.message, alertService.TYPE_SUCCESS);
        }
        return data;
    });
    Restangular.setErrorInterceptor(function(response) {
        if (response.status >= 400 && response.status < 500 && response.data.message !== undefined) {
            if(response.data.body !== undefined && response.data.body !== null && typeof response.data.body === 'object' && Object.keys(response.data.body).length > 0) {
                var message = response.data.message;
                Object.keys(response.data.body).forEach(function(key){
                    message += "\n"+response.data.body[key];
                });
                alertService.add(message, alertService.TYPE_ALERT);
            } else {
                alertService.add(response.data.message, alertService.TYPE_ALERT);
            }
        } else if (response.status === 401) {
            alertService.add("Session expired, please login again.", alertService.TYPE_ALERT);
            delete $localStorage.logged_in;
            $cookieStore.remove('logged-in');
            authModel.unauthorize();
        } else if (response.status === 403) {
            $location.path('/profile');
        } else {
            alertService.add("Oops! Something went wrong! Sorry for the inconvenience, please try again later.", alertService.TYPE_ERROR);
        }
        return true;
    });
});