/* jshint -W040 */

(function () {

    'use strict';

    angular.module('ABWoodworks').controller('contactController', ['$http', contactController]);

    function contactController($http) {

        var statics = {
            emptyString: ''
        };

        var vm = this;
        vm.data = {
            contactName: statics.emptyString,
            contactNumber: statics.emptyString,
            contactEmail: statics.emptyString,
            contactMsg: statics.emptyString
        };

        //        [a-zA-Z0-9]+([a-zA-Z0-9_.$\u0026-]+)*@[a-zA-Z0-9]+([a-zA-Z0-9_.$\u0026-]+)*.([a-zA-Z0-9]{2,4})
        vm.sendMail = function () {

            console.log('Sending mail...');

            $http.post('/send', vm.data).
            success(function (data, status, headers, config) {
                console.log('Thanks for your message ' + data.contactName);
                //                $mdToast.show(
                //                    $mdToast.simple()
                //                    .content('Thanks for your message ' + vm.data.contactName + ' You Rock!')
                //                    .position($scope.getToastPosition())
                //                    .hideDelay(5000)
                //                );

            }).
            error(function (data, status, headers, config) {
                console.log('Broken');
            });
        };

    }
}());
