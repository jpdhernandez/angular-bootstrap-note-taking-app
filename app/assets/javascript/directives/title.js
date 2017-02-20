angular.module("NoteTaker").directive("title", function($timeout) {
  return function(scope, element, attrs) {
    $timeout(function(){
      $(element).tooltip()
    });

    // The tool tip adds a bunch of event listeners and
    // if we don't clean up those event lsiteners, everytime the
    // template switches, it will stick around and angular will mem leak
    // a clean dom is a happy dom
    scope.$on("$destroy", function(){
      $(element).tooltip('destroy');
    })
  }
});