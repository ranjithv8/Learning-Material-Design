var homeComponent = (function(){
	angular.module("tcsDiscussion").component('home',{
		bindings: {},
		templateUrl: 'app/components/home/home.html',
		controller: function(){
			this.menu_options = [
				"Starred Discussions",
				"Settings"
			]
		},
		controllerAs:"homeController"
	});
})();

module.exports = homeComponent;

