var angular = require('angular'),
	routeProvider = require('angular-ui-router'),
	angularMaterial = require('angular-material');

var app = angular.module("tcsDiscussion",['ui.router','ngMaterial']);

require("./components/home/home.component");
require("./components/discussions/discussions.component");
require("./components/contacts/contacts.component");
require("./components/status/status.component");

app.config(function($stateProvider,$urlRouterProvider,$mdThemingProvider){			
	$urlRouterProvider.otherwise('/home/discussions');
	$stateProvider
		.state('home', {
			url: '/home',
			component:'home'
		})
		.state('home.discussions',{
			url: '/discussions',
			component: 'discussions'
		})
		.state('home.contacts',{
			url: '/contacts',
			component: 'contacts'
		})
		.state('home.status',{
			url: '/status',
			component: 'status'
		});

	 $mdThemingProvider.theme('default')
	    .primaryPalette('teal', {
	      'default': '400', // by default use shade 400 from the pink palette for primary intentions
	      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
	      'hue-2': 'A700', // use shade 600 for the <code>md-hue-2</code> class
	      'hue-3': '900' // use shade A100 for the <code>md-hue-3</code> class
	    })
	    // If you specify less than all of the keys, it will inherit from the
	    // default shades
	    .accentPalette('light-green', {
	      'default': 'A700',
	      'hue-3': '900'
	    });

});


		


		
