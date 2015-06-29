;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/books/:bookId', {
                templateUrl: 'app/components/book/BookView.html',
                controller: 'BookController',
                access: {
                    requiresLogin: true
                }
            });
        }])

        .controller('BookController', ['$scope', '$routeParams', 'BookService', function ($scope, $routeParams, BookService) {
            BookService($routeParams.bookId).success(function (data) {
                $scope.book = data.book;
            });
        }]);
}());