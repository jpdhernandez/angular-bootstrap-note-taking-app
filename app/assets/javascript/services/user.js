angular.module("NoteTaker").factory("User", function($resource) {
    return $resource("/users/:id");
});