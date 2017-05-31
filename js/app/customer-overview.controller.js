customersApp.controller('CustomerOverviewController', function ($scope, $location, $routeParams, customerService) {
    customerService.initData();
    $scope.customers = customerService.getAll();
    $scope.classForSort = "glyphicon-arrow-down";
    $scope.orderByColumn = "firstName";

    $scope.addNew = function () {
        $location.path('/details');
    }

    $scope.edit = function (id) {
        $location.path('/details/' + id);
    }

    $scope.remove = function (id) {
        customerService.removeItem(id);
        $scope.customers = customerService.getAll();
    }

    $scope.goToNavigation = function (customerId) {
        $location.path('/navigation/' + customerId);
    }

    $scope.sort = function() {
        if($scope.orderByColumn == "firstName"){
            $scope.classForSort = "glyphicon-arrow-up";
            $scope.orderByColumn = "-firstName";
        } else {
            $scope.classForSort = "glyphicon-arrow-down";
            $scope.orderByColumn = "firstName";
        }
    }
});