customersApp.controller('NavigationDataController', function ($scope, $location, $routeParams, customerService) {
    $scope.navigation = customerService.getNavigationData($routeParams.id);
    var customer = customerService.getCustomer($routeParams.id);
    $scope.customerName = customer != null ? customer.firstName + ' ' + customer.lastName : '';

    $scope.classForSort = "glyphicon-arrow-down";
    $scope.orderByColumn = "timestamp";

    $scope.back = function () {
        $location.path('/');
    }

    $scope.sort = function(){
        if($scope.orderByColumn == "timestamp"){
            $scope.classForSort = "glyphicon-arrow-up";
            $scope.orderByColumn = "-timestamp";
        } else {
            $scope.classForSort = "glyphicon-arrow-down";
            $scope.orderByColumn = "timestamp";
        }
    }
});