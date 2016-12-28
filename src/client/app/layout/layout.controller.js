/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('layoutController', [layoutController]);

    function layoutController() {

        var vm = this;

        if (window.innerHeight < 750) {
            vm.fixedFooter = false;
        } else {
            vm.fixedFooter = true;
        }
    }

}());
