(function() {
    'use strict';

    angular.module('app.comments.navbar')
    .provider('navbarConfig', function() {
        var sidebar = [];
        this.sidebar = function(items) {
            angular.forEach(items, function (item) {
                sidebar.push(item);
                angular.forEach(item.items, function (sub) {
                    //FIXME: cahnge by index or boolean and convert to 30px in html
                    sub.indent = 30;
                    sidebar.push(sub);
                });
            });
        };

        this.$get = function() {
            return {
                sidebar: function() {
                    return sidebar;
                }
            };
        };
    });
})();
