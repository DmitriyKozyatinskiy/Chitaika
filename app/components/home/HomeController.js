;(function () {
    'use strict';

    angular.module('ReadApp.Home', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'components/home/HomeView.html',
                controller: 'HomeController'
            });
        }])

        .controller('HomeController', ['$scope', function ($scope) {

        }]);
}());