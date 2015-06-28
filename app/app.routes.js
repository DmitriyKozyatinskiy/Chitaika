;(function () {
    'use strict';

    angular.module('ReadApp').config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'components/home/HomeView.html'
            })
            .otherwise({redirectTo: '/'});
    }]);
}());