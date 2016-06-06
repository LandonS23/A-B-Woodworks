/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('layoutController', [layoutController]);

    function layoutController() {

        console.log('Layout Controller');

        var vm = this;

        var statics = {
            emptyString: ''
        };

        vm.homeActive = 'active';
        vm.galleryActive = statics.emptyString;

        vm.tabSelect = function (tabName) {
            if (vm.homeActive && tabName !== 'home') {
                vm.galleryActive = 'active';
                vm.homeActive = statics.emptyString;
            } else {
                vm.homeActive = 'active';
                vm.galleryActive = statics.emptyString;
            }
        };
    }
}());
