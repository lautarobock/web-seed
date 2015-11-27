(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, navbarConfigProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    navbarConfigProvider.sidebar([{
        name: 'Form 1',
        state: 'main.form',
        icon: 'fa fa-file-o'
    }, {
        name: 'Form 2',
        state: 'main.form2',
        icon: 'fa fa-gears'
    }]);
  }

})();
