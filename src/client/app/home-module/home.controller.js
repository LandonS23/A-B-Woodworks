/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('homeController', [homeController]);

    function homeController() {

        var vm = this;

        var statics = {
            emptyString: ''
        };

        if (window.innerHeight > 750) {
            vm.verticalAlign = 'vertical-align';
        } else {
            vm.verticalAlign = statics.emptyString;
        }
    }
}());
