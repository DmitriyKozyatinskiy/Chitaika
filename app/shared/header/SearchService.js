;(function () {
    'use strict';

    angular.module('ReadApp').factory('SearchService', ['$http', function($http) {
        return $http.get('app/mocks/searchResult.json')
            .success(function(response) {
                return response;
            })
            .error(function(err) {
                return err;
            });
    }]);
}());