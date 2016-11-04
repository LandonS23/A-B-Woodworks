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
            contactMsg: statics.emptyString,
            sendCopy: false
        };

        vm.sendMail = function () {
            vm.data.contactNumber = vm.data.contactNumber.replace(/^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/, "($1) $2-$3");

            $http.post('/send', vm.data).
            success(function (data, status, headers, config) {

                console.log('Thanks for your message ' + data.contactName);



            }).
            error(function (data, status, headers, config) {
                console.log('Broken');
            });
        };

    }
}());
