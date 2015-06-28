;(function () {
    'use strict';

    angular.module('ReadApp').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
}());