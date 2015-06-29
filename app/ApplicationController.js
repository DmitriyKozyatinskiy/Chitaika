;(function () {
    'use strict';

    angular.module('ReadApp').controller('ApplicationController', ['$scope', 'LoginService', function ($scope, LoginService) {
        $scope.currentUser = null;
        $scope.isAuthorized = LoginService.isAuthorized;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
    }])
}());