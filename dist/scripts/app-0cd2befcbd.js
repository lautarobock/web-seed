!function(){"use strict";function a(){function a(){}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",controller:a,controllerAs:"vm",bindToController:!0};return n}angular.module("app.comments.navbar",[]).directive("navbar",a)}(),function(){"use strict";angular.module("app",["app.comments.navbar","ngplus","ngAnimate","ngSanitize","ngMessages","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function a(a){a.debug("runBlock end")}angular.module("app").run(a),a.$inject=["$log"]}(),function(){"use strict";function a(a,n){a.state("main",{url:"/",templateUrl:"app/main/main.html"}).state("main.form",{url:"form",template:"<span>HI FORM!</span>"}).state("main.form2",{url:"form2",template:"<span>HI FORM 2!</span>"}),n.otherwise("/")}angular.module("app").config(a),a.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("app").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function a(a,n){a.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}angular.module("app").config(a),a.$inject=["$logProvider","toastrConfig"]}(),angular.module("app").run(["$templateCache",function(a){a.put("app/main/main.html",'<div><navbar></navbar></div><div><section id="content" class="content"><div><div class="sidebar"><div class="sidebar-filler"></div><div class="sidebar-dropdown"><a href="">Menu</a></div><div class="sidebar-inner"><div class="sidebar-widget"></div><ul class="navi"><li class="nlightblue fade-selection-animation" ui-sref-active="current" as-parent=""><a ui-sref="main.form">Form</a></li><li class="nlightblue fade-selection-animation" ui-sref-active="current" as-parent=""><a ui-sref="main.form2">Form 2</a></li></ul></div></div><section class="mainbar" content=""><section class="matter"><div class="container"><div class="row"><div ui-view="" class="shuffle-animation"></div></div></div></section></section></div><div ngplus-overlay="" ngplus-overlay-delay-in="50" ngplus-overlay-delay-out="700" ngplus-overlay-animation="dissolve-animation"><img src="assets/images/busy.gif"><div class="page-spinner-message overlay-message">{{vm.busyMessage}}</div></div></section></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse navbar-no-margin"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="/"><img src="assets/images/palantir-logo-inverted.png" style="height: 30px;margin-top: -4px;"> <span style="color: white; display: inline-block; vertical-align: bottom; padding-bottom: 4px; font-size: 21px;">Dataflow</span></a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-0cd2befcbd.js.map