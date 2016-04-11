var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource', 'uz.mailto']); //[] are for dependencies

portfolioApp.controller('portfolioAppController', function($scope, $routeParams){

	$scope.mainHeaderSrc = 'templates/mainheader.html'
	
	$scope.footerSrc = 'templates/footer.html'

});


