(function() {
    'use strict';

    angular.module('app.form1')
    .controller('Form1Controller', function(Form1Titles, Form1Service) {
        var vm = this;

        vm.main = Form1Titles.main;
        vm.second = Form1Titles.second;

        vm.process = function() {
             vm.processed = Form1Service.process(vm.form);
        };
    });
})();
