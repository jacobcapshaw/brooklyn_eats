angular.module('recipeApp').config(
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/', {
                template: '<recipe-list></recipe-list>'
            }).
            when('/recipes/:recipeId', {
                template: '<recipe-detail></recipe-detail>'
            }).
            otherwise('/recipes');
    });

angular.module('reviewApp').config(
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/', {
                template: '<review-list></review-list>'
            }).
            when('/reviews/:reviewId', {
                template: '<review-detail></review-detail>'
            }).
            otherwise('/reviews');
    });
