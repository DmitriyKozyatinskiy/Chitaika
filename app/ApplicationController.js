;(function () {
    'use strict';

    angular.module('ReadApp').controller('ApplicationController', ['$scope', 'AuthService', function ($scope, AuthService) {
        $scope.currentUser = null;
        $scope.isAuthorized = AuthService.isAuthorized;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
    }])
}());