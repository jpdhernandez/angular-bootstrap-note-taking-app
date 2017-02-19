angular.module("NoteTaker").directive("ntPageNav", function() {
    return {
        replace: true,
        restrict: "E",
        templateUrl: "assets/templates/directives/ntPageNav.html",
        controller: function($scope, $location) {
            $scope.isPage = function(page) {
                return new RegExp("/" + page + "($|/)").test($location.path());
            };
        }
    };
});