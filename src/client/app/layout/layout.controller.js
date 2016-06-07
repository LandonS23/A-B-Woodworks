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
        vm.aboutActive = statics.emptyString;
        vm.galleryActive = statics.emptyString;
        vm.contactActive = statics.emptyString;

        vm.tabSelect = function (tabName) {
            if (tabName === 'home') {
                vm.homeActive = 'active';
                vm.aboutActive = statists.emptyString;
                vm.galleryActive = statics.emptyString;
                vm.contactActive = statics.emptyString;
            } else if (tabName === 'gallery') {
                vm.galleryActive = 'active';
                vm.homeActive = statics.emptyString;
                vm.aboutActive = statists.emptyString;
                vm.contactActive = statics.emptyString;
            } else if (tabName === 'about') {
                vm.aboutActive = 'active';
                vm.homeActive = statics.emptyString;
                vm.galleryActive = statics.emptyString;
                vm.contactActive = statics.emptyString;
            } else {
                vm.contactActive = 'active';
                vm.homeActive = statics.emptyString;
                vm.aboutActive = statists.emptyString;
                vm.galleryActive = statics.emptyString;
            }
        };
    }
}());
