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
            .state('app.about', {
                url: '/about',
                templateUrl: clientApp + 'about-module/about.html',
                controller: 'aboutController',
                controllerAs: 'aboutController'
            })
            .state('app.gallery', {
                url: '/gallery',
                templateUrl: clientApp + 'gallery-module/gallery.html',
                controller: 'galleryController',
                controllerAs: 'galleryController'
            })
            .state('app.contact', {
                url: '/contact',
                templateUrl: clientApp + 'contact-module/contact.html',
                controller: 'contactController',
                controllerAs: 'contactController'
            });
        $urlRouterProvider.otherwise('/app/home');
    });
})();
