'use strict';
angular.module('nodersWebApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/header/login.html',
                controller: 'SlackCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/header/register.html',
                controller: 'SlackCtrl'
            });

    });
