/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('layoutController', ['$rootScope', layoutController]);

    function layoutController($rootScope) {

        var vm = this;

        if (window.innerHeight > 750) {
            vm.fixedFooter = 'navbar-fixed-bottom';
        } else {
            vm.fixedFooter = '';
        }
    }

}());
