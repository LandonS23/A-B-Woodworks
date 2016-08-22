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

            //            var data = ({
            //                contactName: this.contactName,
            //                contactNumber: this.contactNumber,
            //                contactEmail: this.contactEmail,
            //                contactMsg: this.contactMsg
            //            });
            console.log('Sending mail...');
            $http.post('/api/contact', vm.data).
            success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available

                console.log('Thanks for your message ' + data.contactName + ' You Rock!');
                //                $mdToast.show(
                //                    $mdToast.simple()
                //                    .content('Thanks for your message ' + vm.data.contactName + ' You Rock!')
                //                    .position($scope.getToastPosition())
                //                    .hideDelay(5000)
                //                );

            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('Broken');
            });
        };

    }
}());
