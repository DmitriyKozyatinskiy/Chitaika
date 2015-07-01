;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/components/home/HomeView.html',
                controller: 'HomeController',
                controllerAs: 'home',
                access: {
                    requiresLogin: false
                }
            });
        }])

        .controller('HomeController', ['$scope', 'PopularBooksService', function ($scope, PopularBooksService) {
            var vm = this;

            PopularBooksService.success(function (data) {
                vm.popularBooks = data.popularBooks;
                console.log(vm.popularBooks);
            });
        }]);
}());