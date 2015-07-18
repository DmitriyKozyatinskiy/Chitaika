;(function () {
    'use strict';

    angular.module('ReadApp').factory('AuthService',
        ['$http', '$rootScope', 'Session', 'AUTH_EVENTS', function($http, $rootScope, Session, AUTH_EVENTS) {
        return {
            login: function (credentials) {
                return $http
                    .get('/app/mocks/users.json')
                    .then(function (response) {
                        var user = response.data.user;

                        Session.create(user);
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                        $rootScope.setCurrentUser(user);
                    }, function () {
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    });
            },

            logout: function () {
                return $http
                    .get('/app/mocks/logout.json')
                    .then(function (response) {
                        if (response.status) {
                            Session.destroy();
                        }
                    }, function () {
                        $rootScope.$broadcast(AUTH_EVENTS.logoutFailed);
                    });
            },

            isAuthenticated: function () {
                return !!Session.user;
            }
        };
    }]);
}());