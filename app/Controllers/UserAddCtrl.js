app.controller('UserAddCtrl', ['$scope', 'userModel', '$window', '$location', function($scope, userModel, $window, $location){
        
        $scope.user = {
            country: 'Poland'
        };
        
        $scope.save = function () {
            if ($scope.userForm.$valid) {
                userModel.add($scope.user);
                $window.location.href = '/';
            }
        };
        $scope.cancel = function () {
            $location.path('/');
        };
        $scope.validators = {
            first_name: {
                input: 'userForm.first_name',
                messages: [
                    {
                        when: 'required',
                        label: 'First Name is required'
                    }
                ]
            },
            last_name: {
                input: 'userForm.last_name',
                messages: [
                    {
                        when: 'required',
                        label: 'Last Name is required'
                    }
                ]
            },
            email: {
                input: 'userForm.email',
                messages: [
                    {
                        when: 'required',
                        label: 'Email is required'
                    },
                    {
                        when: 'pattern',
                        label: 'Email is invalid'
                    }
                ]
            },
            country: {
                input: 'userForm.country',
                messages: [
                    {
                        when: 'required',
                        label: 'Country is required'
                    }
                ]
            }
        };
        
}]);