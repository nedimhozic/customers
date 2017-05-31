customersApp.controller('CustomerDetailsController', function ($scope, $location, $routeParams, customerService) {
    $scope.submitted = false;
    $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
    $scope.action = "";

    //If I get user id -> Edit, empty -> Create 
    if (!$routeParams.id) {
        $scope.customer = {
            customerId: customerService.guid()
        }
        $scope.action = "INSERT";
    } else {
        $scope.customer = customerService.getCustomer($routeParams.id);
        $scope.action = "UPDATE";
    }

    //Save customer data to service
    $scope.submitCustomer = function () {
        $scope.submitted = true;
        if ($scope.customerForm.$invalid) {
            return;
        }

        if($scope.action == "INSERT"){
            customerService.addItem($scope.customer);
        } else {
            customerService.updateItem($scope.customer);
        }
        $location.path('/');
    };

    //Back to overview
    $scope.back = function () {
        $location.path('/');
    }
});