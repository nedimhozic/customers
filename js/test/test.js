describe('customers', function () {
		
	beforeEach(angular.mock.module('rootModule'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('submitCustomer', function () {
		it('should customer inserted correctly', function () {
			var $scope = {};
			var controller = $controller('CustomerDetailsController', { $scope: $scope, customerService: customerService });
            var data = customerService.getAll();

            $scope.customer = {
                id: customerService.guid(),
                firstName: 'firstName_' + customerService.guid(),
                lastName: 'firstName_' + customerService.guid(),
                birthday: '1992-08-25',
                age: 25,
                gender: 'm',
                lastContact: '2013-06-01',
                lifetimeValue: 191.12
            }
			$scope.submitCustomer();
            var data2 = customerService.getAll();      

			expect(data.length+1).toBe(data2.length);
		});	
	});


    describe('remove', function () {
		it('should customer removed correctly', function () {
			var $scope = {};
			var controller = $controller('CustomerOverviewController', { $scope: $scope, customerService: customerService });
            
            $scope.customers = customerService.getAll();
            var data = $scope.customers;
            var id = $scope.customers[0].customerId;

            $scope.remove(id);
            var data2 = $scope.customers;

			expect(data.length-1).toBe(data2.length);
		});	
	});

    describe('sort', function () {
		it('should sort data correctly', function () {
			var $scope = {};
			var controller = $controller('NavigationDataController', { $scope: $scope, customerService: customerService });
            
            $scope.classForSort = "glyphicon-arrow-down";
            $scope.orderByColumn = "timestamp";

            $scope.sort();

			expect($scope.classForSort).toBe("glyphicon-arrow-up");
			expect($scope.orderByColumn).toBe("-timestamp");
		});	
	});

});