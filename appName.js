angular.module("appName", ["chart.js"])
	.controller("nameOfController", function() {
		var controllerScope = this;

		controllerScope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
		controllerScope.data = [300, 500, 100];

	});