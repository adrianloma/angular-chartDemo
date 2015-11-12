angular.module("appName", ["chart.js"])
.controller("nameOfController", function () {
	var controllerScope = this;
	controllerScope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

	controllerScope.data = [
		[65, 59, 90, 81, 56, 55, 40],
		[28, 48, 40, 19, 96, 27, 100]
	];
});