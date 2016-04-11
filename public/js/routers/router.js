portfolioApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/mainbody.html',
            controller: 'portfolioAppController'
        }).when('/professional', {
        	templateUrl: 'templates/professional.html',
        	controller: 'portfolioAppController'
        }).when('/projects', {
			templateUrl: 'templates/projects.html',
			controller: 'portfolioAppController'
		}).when('/blog', {
			templateUrl: 'templates/blog.html',
			controller: 'portfolioAppController'
        }).otherwise({
            redirectTo: '/'
        });
});