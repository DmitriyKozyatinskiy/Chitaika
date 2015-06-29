;(function () {
    'use strict';

    angular.module('ReadApp').service('Session', function () {
        this.create = function (id, email, name) {
            this.id = id;
            this.email = email;
            this.name = name;
        };

        this.destroy = function () {
            this.id = null;
            this.email = null;
            this.name = null;
        };
    });
}());
