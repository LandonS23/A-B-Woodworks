/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('aboutController', [aboutController]);

    function aboutController() {

        var vm = this;

        if (window.innerHeight > 750) {
            vm.center = 'center';
            vm.text = '';
            vm.photo = '';
        } else {
            vm.center = '';
            vm.text = 'about-text';
            vm.photo = 'about-photo';
        }
    }
}());
