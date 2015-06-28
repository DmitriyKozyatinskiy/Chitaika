;(function () {
    'use strict';

    angular.module('ReadApp').factory('PopularBooksService', ['$http', function($http) {
        return $http.get('app/mocks/popularBooks.json')
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
    }]);
}());