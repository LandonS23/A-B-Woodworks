/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('galleryController', [galleryController]);

    function galleryController() {

        var vm = this;

        vm.cabinetImages = [];
        vm.mantelImages = [];
        vm.stairImages = [];
        vm.trimMoreImages = [];

    }
}());
