(function() {
  'use strict';

  angular
    .module('app.comments.navbar', [])
    .directive('topbar', topbar)
    .directive('sidebar', sidebar);

    function topbar() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/navbar/topbar.html',
            scope: {},
            controller: function(appName) {
                var vm = this;
                vm.title = appName;
            },
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function sidebar() {
      return {
          replace: true,
          restrict: 'AE',
          templateUrl: 'app/components/navbar/sidebar.html',
          scope: {},
          controllerAs: 'vm',
          controller: function ($scope, $rootScope, navbarConfig) {
              var vm = this;
              vm.items = navbarConfig.sidebar();
          }
      };
    }

})();
