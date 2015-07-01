;(function () {
    'use strict';

    angular.module('ReadApp').factory('BookService', ['$http', function($http) {
        return function(bookId) {
            return $http.get('app/mocks/book_' + bookId +'.json')
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        }
    }]);
}());