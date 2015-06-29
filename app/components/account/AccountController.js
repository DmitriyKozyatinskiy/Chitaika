;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/account', {
                templateUrl: 'app/components/account/AccountView.html',
                controller: 'AccountController',
                access: {
                    requiresLogin: true
                }
            });
        }])

        .controller('AccountController', ['$scope', function ($scope) {
            //$scope.user = data.popularBooks;
        }]);
}());