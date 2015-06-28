;(function () {
    'use strict';

    angular.module('ReadApp').factory('MenuService', ['$http', function($http) {
        return $http.get('app/mocks/menu.json')
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
    }]);
}());