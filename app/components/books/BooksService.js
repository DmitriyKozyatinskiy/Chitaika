;(function () {
    'use strict';

    angular.module('ReadApp').factory('BooksService', ['$http', function($http) {
        return function(bookId) {
            return $http.get('app/mocks/book_' + bookId +'.json')
                .success(function(response) {
                    return response;
                })
                .error(function(err) {
                    return err;
                });
        }
    }]);
}());