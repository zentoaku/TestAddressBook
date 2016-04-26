app.controller('UserListCtrl', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
        
        $scope.users = userModel.getList();
        
        $scope.edit = function (id) {
            $location.path('/edit/'+id);
        };
        $scope.add = function (id) {
            $location.path('/add');
        };
}]);