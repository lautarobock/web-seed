(function() {
  'use strict';

  angular
    .module('app.comments.navbar', [])
    .directive('topbar', topbar)
    .directive('sidebar', sidebar);

    function topbar() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            controller: function() {
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
          controllerAs: 'vm',
          controller: function ($scope, $rootScope, navbarConfig) {
              var vm = this;
              vm.items = navbarConfig.sidebar();
          }
      };
  }

})();
