angular.module("NoteTaker").factory("Note", function($resource) {
    return $resource("/notes/:id");
});