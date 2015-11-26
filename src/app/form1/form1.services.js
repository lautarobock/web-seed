(function() {
    'use strict';

    angular.module('app.form1')
    .service('Form1Service', function() {
        this.process = function(form) {
            return 'Value1 is: @value1 and Value2 is: @value2'
                .replace('@value1', form.value1)
                .replace('@value2', form.value2);
        };
    });
})();
