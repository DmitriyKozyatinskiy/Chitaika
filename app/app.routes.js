;(function () {
    'use strict';

    angular.module('ReadApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
    }]);
}());