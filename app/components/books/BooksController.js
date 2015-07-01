;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/books/:bookId', {
                templateUrl: 'app/components/books/BooksView.html',
                controllerAs: 'book',
                controller: function () {},
                access: {
                    requiresLogin: true
                }
            });
        }])

        .controller('BookController', ['$routeParams', 'BooksService', function ($scope, $routeParams, BookService) {
            BookService($routeParams.bookId).success(function (data) {
                this.book = data.book;
            });
        }]);
}());