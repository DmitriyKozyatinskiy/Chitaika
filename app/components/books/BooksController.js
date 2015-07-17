;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/books/:bookId', {
                templateUrl: 'app/components/books/BooksView.html',
                controller: 'BooksController',
                controllerAs: 'books',
                access: {
                    requiresLogin: false
                }
            });
        }])
        .controller('BooksController', ['$routeParams', 'BooksService', function ($routeParams, BooksService) {
            var vm = this;

            BooksService($routeParams.bookId).success(function (data) {
                vm.book = data.book;
            });
        }]);
}());