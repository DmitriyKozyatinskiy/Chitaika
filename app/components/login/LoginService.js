;(function () {
    'use strict';

    angular.module('ReadApp').factory('LoginService', ['$http', 'Session', function($http, Session) {
        return {
            login: function (credentials) {
                return $http
                    .get('/app/mocks/users.json')
                    .then(function (response) {
                        var user = response.data.user;

                        Session.create(user.id, user.email, user.name);
                        return user;
                    });
            },
            isAuthenticated: function () {
                console.log(Session.id);
                return !!Session.id;
            }
        };
    }]);
}());