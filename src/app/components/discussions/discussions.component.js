var discussionsComponent = (function(){
	angular.module("tcsDiscussion").component('discussions',{
		bindings: {},
		templateUrl: 'app/components/discussions/discussions.html',
		controller: function(){
			this.discussions = [
				{
					"topic":"Angular",
					"about":"Two Way Binding",
					"img":"img/icons/angular.png"
				},				
				{
					"topic":"Node",
					"about":"express",
					"img":"img/icons/node.png"
				},
				{
					"topic":"Javascript",
					"about":"Declarative vs Imperative",
					"img":"img/icons/javascript.jpg"
				},
				{
					"topic":"Java",
					"about":"Tree Set",
					"img":"img/icons/java.png"
				},
				{
					"topic":"Angular",
					"about":"One Way Binding",
					"img":"img/icons/angular.png"
				},
				{
					"topic":"Angular",
					"about":"ui-router",
					"img":"img/icons/angular.png"
				},
				{
					"topic":"Angular",
					"about":"Services",
					"img":"img/icons/angular.png"
				},
				{
					"topic":"Angular",
					"about":"Services",
					"img":"img/icons/angular.png"
				},
				{
					"topic":"Angular",
					"about":"Services",
					"img":"img/icons/angular.png"
				}
			]
		},
		controllerAs:"discussionList"
	});
})();

module.exports = discussionsComponent;

