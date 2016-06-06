(function () {
    'use strict';

    angular.module('ABWoodworks', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        var clientApp = '/src/client/app/';

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: clientApp + 'layout/layout.html',
                controller: 'layoutController',
                controllerAs: 'layoutController'
            })
            .state('app.home', {
                url: '/home',
                templateUrl: clientApp + 'home-module/home.html',
                controller: 'homeController',
                controllerAs: 'homeController'
            })
            .state('app.gallery', {
                url: '/gallery',
                templateUrl: clientApp + 'gallery-module/gallery.html',
                controller: 'galleryController',
                controllerAs: 'galleryController'
            });

        $urlRouterProvider.otherwise('/app/home');
    });
})();
