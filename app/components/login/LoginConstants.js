;(function () {
    'use strict';

    angular.module('ReadApp').constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        notAuthenticated: 'auth-not-authenticated'
    })
}());
