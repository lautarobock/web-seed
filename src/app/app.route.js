(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('main.form', {
          url:'form',
          templateUrl: 'app/form1/form1.html',
          controller: 'Form1Controller',
          controllerAs: 'vm'
      })
      .state('main.form2', {
          url:'form2',
          template: '<span>HI FORM 2!</span>'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
