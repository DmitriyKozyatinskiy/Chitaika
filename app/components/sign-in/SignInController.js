;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/sign-in', {
                templateUrl: 'app/components/sign-in/SignInView.html',
                controller: 'SignInController'
            });
        }])

        .controller('SignInController', ['$scope', function ($scope) {
            PopularBooksService.success(function (data) {
                $scope.popularBooks = data.popularBooks;
            });
        }]);
}());