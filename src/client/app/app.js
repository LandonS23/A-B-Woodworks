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
                controllerAs: 'layoutController',
                activeClass: 'home'
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
            .state('app.gallery.cabinets', {
              url: '/cabinets',
              templateUrl: clientApp + 'gallery-module/gallery.html',
              controllerAs: 'galleryController'
            })
            .state('app.gallery.mantels', {
              url: '/mantels',
              templateUrl: clientApp + 'gallery-module/gallery.html',
              controllerAs: 'galleryController'
            })
            .state('app.gallery.stairs', {
              url: '/stairs',
              templateUrl: clientApp + 'gallery-module/gallery.html',
              controllerAs: 'galleryController'
            })
            .state('app.gallery.trimAndMore', {
              url: '/trimAndMore',
              templateUrl: clientApp + 'gallery-module/gallery.html',
              controllerAs: 'galleryController'
            })
            .state('app.contact', {
                url: '/contact',
                templateUrl: clientApp + 'contact-module/contact.html',
                controller: 'contactController',
                controllerAs: 'contactController'
            });
        $urlRouterProvider.otherwise('/app/home');
    })

    .run(function ($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.activeClass = toState.url.substring(1);

            $rootScope.homeActive = '';
            $rootScope.aboutActive = '';
            $rootScope.galleryActive = '';
            $rootScope.contactActive = '';

            switch ($rootScope.activeClass) {
                case 'home':
                    $rootScope.homeActive = 'active';
                    break;
                case 'gallery':
                    $rootScope.galleryActive = 'active';
                    break;
                case 'cabinets':
                    $rootScope.cabinetsActive = 'active';
                    break;
                case 'mantels':
                    $rootScope.mantelsActive = 'active';
                    break;
                case 'stairs':
                    $rootScope.stairsActive = 'active';
                    break;
                case 'trimAndMore':
                    $rootScope.trimAndMoreActive = 'active';
                    break;
                case 'about':
                    $rootScope.aboutActive = 'active';
                    break;
                case 'contact':
                    $rootScope.contactActive = 'active';
                    break;
                default:
                    $rootScope.homeActive = 'active';
            }
        });
    })
})();
