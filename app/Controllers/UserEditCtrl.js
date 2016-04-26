app.controller('UserEditCtrl', ['$scope', 'userModel', '$routeParams', '$window', '$location', function ($scope, userModel, $routeParams, $window, $location) {

        $scope.user = userModel.get($routeParams.userId);
        $scope.save = function () {
            if ($scope.userForm.$valid) {
                userModel.update($scope.user.id, $scope.user);
                $window.location.href = '/';
            }
        };
        $scope.cancel = function () {
            $location.path('/');
        };
        $scope.deleteUser = function () {
            userModel.delete($scope.user.id);
            $window.location.href = '/';
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