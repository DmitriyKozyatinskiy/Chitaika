;(function () {
    'use strict';

    angular.module('ReadApp').controller('ApplicationController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        var vm = this;

        vm.isAuthenticated = function () {
            return !!$rootScope.currentUser;
        };
        //$scope.currentUser = {
        //    name: 'Dima'
        //};
        //vm.currentUser = null;
        //vm.isAuthorized = AuthService.isAuthorized;
        //
        //vm.setCurrentUser = function (user) {
        //    vm.currentUser = user;
        //};
    }])
}());