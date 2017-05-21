/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('galleryController', ['$rootScope', '$state', galleryController]);

    function galleryController($rootScope, $state) {
        var vm = this;
        vm.name = '';
        vm.cabinetImages = ['../../images/IMG_3536.jpg', '../../images/cabinets1.jpg', '../../images/cabinets2.jpg', '../../images/cabinets3.jpg', '../../images/cabinets4.jpg', '../../images/cabinets5.jpg', '../../images/cabinets6.jpg', '../../images/cabinets7.jpg'];
        vm.mantelImages = ['../../images/mantel.jpg', '../../images/mantel0.jpg', '../../images/mantel1.jpg', '../../images/mantel2.jpg', '../../images/mantel3.jpg', '../../images/mantel4.jpg', '../../images/mantel5.jpg', '../../images/mantel6.jpg', '../../images/mantel7.jpg'];
        vm.stairImages = ['../../images/stairshome1.jpg', '../../images/stairshome.jpg', '../../images/stairs.jpg', '../../images/stairs1.jpg', '../../images/stairs2.jpg'];
        vm.trimMoreImages = ['../../images/trim.jpg', '../../images/trim2.jpg', '../../images/work%20002.jpg', '../../images/bookshelf1.jpg', '../../images/bookshelf2.jpg', '../../images/wine_cellar.jpg', '../../images/winecellar1.jpg', '../../images/winecellar2.jpg'];

        // handle route changes
        switch ($state.current.url.substring(1)) {
            case 'cabinets':
                vm.name = 'Cabinets';
                vm.images = vm.cabinetImages;
                break;
            case 'mantels':
                vm.name = 'Mantels';
                vm.images = vm.mantelImages;
                break;
            case 'stairs':
                vm.name = 'Stairs';
                vm.images = vm.stairImages;
                break;
            case 'trimAndMore':
                vm.name = 'Trim and More';
                vm.images = vm.trimMoreImages;
                break;
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
          $state.reload();
        });
    }
}());
