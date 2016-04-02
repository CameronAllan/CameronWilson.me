portfolioApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/mainbody.html',
            controller: 'portfolioAppController'
        }).otherwise({
            redirectTo: '/'
        });
});