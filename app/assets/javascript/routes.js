angular.module("NoteTaker").config(($routeProvider) => {
    $routeProvider
        .when("/notes", {
            templateUrl: "assets/templates/notes/index.html"
        })
});