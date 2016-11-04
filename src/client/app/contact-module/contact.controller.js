/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('contactController', ['$http', '$state', contactController]);

    function contactController($http, $state) {

        var statics = {
            emptyString: ''
        };

        var vm = this;

        vm.clearData = function () {
            vm.data = {
                contactName: statics.emptyString,
                contactNumber: statics.emptyString,
                contactEmail: statics.emptyString,
                contactMsg: statics.emptyString,
                sendCopy: false
            };
        };

        vm.clearData();

        vm.sendMail = function () {
            vm.data.contactNumber = vm.data.contactNumber.replace(/^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/, "($1) $2-$3");

            $http.post('/send', vm.data).
            success(function (data, status, headers, config) {
                console.log('Thanks for your inquiry ' + data.contactName);

                vm.clearData();

                $state.go('app.home');

            }).error(function (data, status, headers, config) {
                console.log('Broken');
            });
        };
    }
}());
