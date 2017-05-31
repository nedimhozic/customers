customersApp.controller('CustomerOverviewController', function ($scope, $location, $routeParams, customerService) {
    //Init data
    customerService.initData();

    //Get all customers from service
    $scope.customers = customerService.getAll();

    //Variables for sorting - icon and order by variable name - timestamp
    $scope.classForSort = "glyphicon-arrow-down";
    $scope.orderByColumn = "firstName";

    //Redirect to customer details page
    $scope.addNew = function () {
        $location.path('/details');
    }

    //Redirect to customer details page with id
    $scope.edit = function (id) {
        $location.path('/details/' + id);
    }

    //Remove item via service
    $scope.remove = function (id) {
        customerService.removeItem(id);
        $scope.customers = customerService.getAll();
    }

    //Redirect to navigation data page
    $scope.goToNavigation = function (customerId) {
        $location.path('/navigation/' + customerId);
    }

    //sort function - toggle logic
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