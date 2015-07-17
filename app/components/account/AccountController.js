;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/account', {
                templateUrl: 'app/components/account/AccountView.html',
                controller: 'AccountController',
                controllerAs: 'account',
                access: {
                    requiresLogin: true
                }
            });
        }])

        .controller('AccountController', [function () {
            var vm = this;

            //$scope.user = data.popularBooks;
        }]);
}());