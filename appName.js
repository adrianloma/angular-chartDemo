angular.module("appName", ["chart.js"])
.controller("nameOfController", function () {
	var controllerScope = this;

	controllerScope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

	controllerScope.series = ['Series A', 'Series B'];

	controllerScope.data = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];

});