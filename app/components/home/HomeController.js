;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/components/home/HomeView.html',
                controller: 'HomeController',
                access: {
                    requiresLogin: false
                }
            });
        }])

        .controller('HomeController', ['$scope', 'PopularBooksService', function ($scope, PopularBooksService) {
            PopularBooksService.success(function (data) {
                $scope.popularBooks = data.popularBooks;
            });
        }]);
}());