/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('galleryController', ['$rootScope', '$state', galleryController]);

    function galleryController($rootScope, $state) {
        var vm = this;

        vm.cabinetImages = ['../../images/IMG_3536.jpg', ];
        vm.mantelImages = ['../../images/mantel.jpg',];
        vm.stairImages = ['../../images/stairshome1.jpg',];
        vm.trimMoreImages = ['../../images/work%20002.jpg',];

        // handle route changes
        switch ($state.current.url.substring(1)) {
            case 'cabinets':
                vm.images = vm.cabinetImages;
                break;
            case 'mantels':
                vm.images = vm.mantelImages;
                break;
            case 'stairs':
                vm.images = vm.stairImages;
                break;
            case 'trimAndMore':
                vm.images = vm.trimMoreImages;
                break;
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
          switch ($state.current.url.substring(1)) {
            case 'cabinets':
                vm.images = vm.cabinetImages;
                break;
            case 'mantels':
                vm.images = vm.mantelImages;
                break;
            case 'stairs':
                vm.images = vm.stairImages;
                break;
            case 'trimAndMore':
                vm.images = vm.trimMoreImages;
                break;
          }
        });
    }
}());
