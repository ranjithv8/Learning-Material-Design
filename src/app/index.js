var angular = require('angular'),
	routeProvider = require('angular-ui-router'),
	angularMaterial = require('angular-material');

var app = angular.module("tcsDiscussion",['ui.router','ngMaterial']);

require("./components/home/home.component");

app.config(function($stateProvider,$urlRouterProvider,$mdThemingProvider){			
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			component:'home'
		});

	 $mdThemingProvider.theme('default')
	    .primaryPalette('green', {
	      'default': '400', // by default use shade 400 from the pink palette for primary intentions
	      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
	      'hue-2': 'A700', // use shade 600 for the <code>md-hue-2</code> class
	      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
	    })
	    // If you specify less than all of the keys, it will inherit from the
	    // default shades
	    .accentPalette('purple', {
	      'default': '200' // use shade 200 for default, and keep all other shades the same
	    });

});


		


		
