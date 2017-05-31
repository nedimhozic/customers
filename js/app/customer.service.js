customersApp.service('customerService', function () {
    //Get all customers
    this.getAll = function () {
        return JSON.parse(localStorage.getItem(CUSTOMERS_KEY));
    };

    //Get customer by id
    this.getCustomer = function (id) {
        var customers = this.getAll();
        var result = customers.filter(function (item) {
            return item.customerId == id
        });
        if (result.length > 0) return result[0];
        return null;
    }

//Insert customer
    this.addItem = function (customer) {
        var array = this.getAll();
        var today = new Date();
        customer.age = today.getFullYear() - (new Date(customer.birthday)).getFullYear();
        array.push(customer);
        localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(array));
    };

    //Remove customer
    this.removeItem = function (id) {
        var array = this.getAll();
        for (var i = 0; i < array.length; i++) {
            if (array[i].customerId == id) {
                array.splice(i, 1);
                break;
            }
        }

        localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(array));
    }

    //Update customer
    this.updateItem = function (customer) {
        this.removeItem(customer.customerId);
        this.addItem(customer);
    }

    //Get navigation data
    this.getNavigationData = function (customerId) {
        var navigation = JSON.parse(localStorage.getItem(NAVIGATION_KEY));
        var data = navigation.filter(function (nav) {
            return nav.customerId == customerId;
        });
        return data;
    }

    //initialize mock data
    this.initData = function () {
        if (localStorage.getItem(CUSTOMERS_KEY)) {
            return;
        }
        var today = new Date();
        var customers = [
            {
                customerId: 1,
                firstName: 'Peter',
                lastName: 'Smith',
                birthday: '1996-10-12',
                age: today.getFullYear() - 1996,
                gender: 'm',
                lastContact: '2013-06-01',
                lifetimeValue: 191.12
            },
            {
                customerId: 2,
                firstName: 'Anna',
                lastName: 'Hopp',
                birthday: '1987-05-03',
                age: today.getFullYear() - 1987,
                gender: 'w',
                lastContact: '2013-07-08',
                lifetimeValue: 50.99
            },
            {
                customerId: 3,
                firstName: 'Christian',
                lastName: 'Cox',
                birthday: '1991-02-21',
                age: today.getFullYear() - 1991,
                gender: 'm',
                lastContact: '2013-08-01',
                lifetimeValue: 0
            },
            {
                customerId: 4,
                firstName: 'Roxy',
                lastName: 'Fox',
                birthday: '1979-06-30',
                age: today.getFullYear() - 1979,
                gender: 'w',
                lastContact: '2012-01-29',
                lifetimeValue: 213.12
            },
            {
                customerId: 5,
                firstName: 'Eric',
                lastName: 'Adam',
                birthday: '1969-11-21',
                age: today.getFullYear() - 1969,
                gender: 'm',
                lastContact: '2013-03-18',
                lifetimeValue: 1019.91
            }
        ];

        localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(customers));

        var navigation = [
            {
                customerId: 1,
                pages: 'A',
                timestamp: '2013-06-01 10:10:12'
            },
            {
                customerId: 1,
                pages: 'B',
                timestamp: '2013-06-01 10:11:12'
            },
            {
                customerId: 1,
                pages: 'A',
                timestamp: '2013-06-01 10:12:12'
            },
            {
                customerId: 2,
                pages: 'C',
                timestamp: '2013-07-08 09:03:09'
            },
            {
                customerId: 2,
                pages: 'A',
                timestamp: '2013-07-08 09:09:09'
            },
            {
                customerId: 2,
                pages: 'D',
                timestamp: '2013-07-08 09:19:09'
            },
            {
                customerId: 3,
                pages: 'B',
                timestamp: '2013-07-08 09:19:09'
            },
            {
                customerId: 3,
                pages: 'A',
                timestamp: '2013-07-08 09:19:10'
            },
            {
                customerId: 4,
                pages: 'D',
                timestamp: '2013-07-08 09:19:11'
            },
            {
                customerId: 4,
                pages: 'A',
                timestamp: '2013-07-08 09:19:12'
            },
            {
                customerId: 5,
                pages: 'X',
                timestamp: '2013-07-08 09:19:13'
            },
            {
                customerId: 5,
                pages: 'A',
                timestamp: '2013-07-08 09:19:14'
            },
            {
                customerId: 5,
                pages: 'B',
                timestamp: '2013-07-08 09:19:15'
            }
        ];

        localStorage.setItem(NAVIGATION_KEY, JSON.stringify(navigation));
    }

    //Generate unique string
    this.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
});

var CUSTOMERS_KEY = "customers_bf1682cf53bf4b8a8c6cd14011b3ed3f";
var NAVIGATION_KEY = "navigation_5ad6c0186f354f57b936d4009df6fbaf";