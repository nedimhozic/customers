customersApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "customer-overview.html",
            controller: 'CustomerOverviewController'
        })
        .when("/details/:id", {
            templateUrl: "customer-details.html",
            controller: 'CustomerDetailsController'
        })
        .when("/details", {
            templateUrl: "customer-details.html",
            controller: 'CustomerDetailsController'
        })
        .when("/navigation/:id", {
            templateUrl: "navigation-data.html",
            controller: 'NavigationDataController'
        });
});