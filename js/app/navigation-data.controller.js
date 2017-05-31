customersApp.controller('NavigationDataController', function ($scope, $location, $routeParams, customerService) {
    //Init data from customer service
    $scope.navigation = customerService.getNavigationData($routeParams.id);

    //Get customer from route parameters
    var customer = customerService.getCustomer($routeParams.id);

    //Set customer name
    $scope.customerName = customer != null ? customer.firstName + ' ' + customer.lastName : '';

    //Variables for sorting - icon and order by variable name - timestamp
    $scope.classForSort = "glyphicon-arrow-down";
    $scope.orderByColumn = "timestamp";

    //Back to Overview page
    $scope.back = function () {
        $location.path('/');
    }

    //sort function - toggle logic
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