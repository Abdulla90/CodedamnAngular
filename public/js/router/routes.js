app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"../../templates/index_template.html",
		controller:"indexContrl"
	})
	.when("/WelcomeAng",{
		templateUrl:"../../templates/WelcomeAng.html",
		resolve: {
			"check" : function($location , $rootScope){
				console.log($rootScope.loggedIn)
				if(!$rootScope.loggedIn){
					console.log("inside logged in");
					$location.path('/simplelogin');
				
				}
		}

		}
		

	})
	.when("/ngBindAndngModel",{
		templateUrl:"../../templates/ngBindAndngModel.html",
		

	})
	.when("/IntroTodirectives",{
		templateUrl:"../../templates/IntroTodirectives.html",
		controller:"IntroTodirectivesContrl"
	})
	.when("/ngRepeat",{
		templateUrl:"../../templates/ng-repeat.html",
		controller:"indexContrl"
	})
	.when("/introControl",{
		templateUrl:"../../templates/IntroToController.html",
		controller:"welcomeAngContrl"
	})
	.when("/simplelogin",{
		templateUrl:"../../templates/simplelogin.html",
		controller:"IntroTodirectivesContrl"
	})
	.when("/httpService",{
		templateUrl:"../../templates/httpService.html",
		controller:"httpServiceCntrl"
	})
})