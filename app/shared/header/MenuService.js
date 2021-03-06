;(function () {
    'use strict';

    angular.module('ReadApp').factory('MenuService', ['$http', function($http) {
        return $http.get('app/mocks/menu.json')
            .success(function(response) {
                return response;
            })
            .error(function(err) {
                return err;
            });
    }]);
}());