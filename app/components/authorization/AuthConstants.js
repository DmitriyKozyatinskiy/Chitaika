;(function () {
    'use strict';

    angular.module('ReadApp').constant('AUTH_EVENTS', {
        authStatusChange: 'auth-status-change',
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        logoutFailed: 'auth-logout-failed',
        notAuthenticated: 'auth-not-authenticated'
    });
}());
